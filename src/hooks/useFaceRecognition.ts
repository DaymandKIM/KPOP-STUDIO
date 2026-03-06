import { useState, useEffect, useCallback } from 'react';
import * as faceapi from '@vladmandic/face-api';

export interface Prediction {
  className: string;
  probability: number;
}

export function useFaceRecognition() {
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);
  const [modelError, setModelError] = useState<string | null>(null);
  const [labeledDescriptors, setLabeledDescriptors] = useState<faceapi.LabeledFaceDescriptors[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function initModels() {
      try {
        setIsModelLoading(true);
        const MODEL_URL = '/models';
        
        console.log("Loading face-api models...");
        await Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
        ]);
        console.log("face-api models loaded successfully.");

        // Load pre-calculated 128-d Float32Arrays from JSON file
        const response = await fetch('/data/descriptors.json');
        if (!response.ok) {
          throw new Error('Failed to fetch face descriptors data');
        }
        
        const descriptorsData = await response.json();
        
        const loadedDescriptors = descriptorsData.map((d: {label: string, descriptor: number[]}) => {
          return new faceapi.LabeledFaceDescriptors(
            d.label, 
            [new Float32Array(d.descriptor)]
          );
        });

        if (isMounted) {
          setLabeledDescriptors(loadedDescriptors);
          setIsModelLoading(false);
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Failed to load face-api models";
        console.error("Failed to load face-api models:", error);
        if (isMounted) {
          setModelError(errorMessage);
          setIsModelLoading(false);
        }
      }
    }

    initModels();

    return () => {
      isMounted = false;
    };
  }, []);

  const predict = useCallback(async (imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement): Promise<Prediction[]> => {
    if (isModelLoading) {
      throw new Error("Model is not loaded yet");
    }

    try {
      // 이미지가 완전히 로드될 때까지 대기
      if (imageElement instanceof HTMLImageElement && !imageElement.complete) {
        await new Promise<void>((resolve, reject) => {
          imageElement.onload = () => resolve();
          imageElement.onerror = () => reject(new Error('Image failed to load'));
        });
      }

      // 1. Detect the face and get the descriptor
      // minConfidence 0.2로 낮춰 다양한 각도/조명의 얼굴도 감지
      const detection = await faceapi
        .detectSingleFace(imageElement, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.2 }))
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!detection) {
        throw new Error("No face detected in the uploaded image. Please try another clear photo.");
      }

      // 2. Compare with known descriptors (FaceMatcher)
      if (labeledDescriptors.length > 0) {
        // 실제 얼굴 임베딩 기준 threshold: 0.6 (face-api 권장값)
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
        const bestMatch = faceMatcher.findBestMatch(detection.descriptor);

        // distance → similarity 변환 (0=완벽일치, 1+=완전다름)
        // unknown인 경우 가장 가까운 레이블로 fallback
        const label = bestMatch.label === 'unknown'
          ? labeledDescriptors.reduce((best, ld) => {
              const d = faceapi.euclideanDistance(detection.descriptor, ld.descriptors[0]);
              return d < best.dist ? { label: ld.label, dist: d } : best;
            }, { label: labeledDescriptors[0].label, dist: Infinity }).label
          : bestMatch.label;

        const similarity = Math.min(0.99, Math.max(0.5, 1 - bestMatch.distance));

        return [{
          className: label,
          probability: similarity
        }];
      } else {
        throw new Error("Face data for K-POP stars is not loaded yet.");
      }
    } catch (e: unknown) {
      console.error(e);
      throw e;
    }
  }, [isModelLoading, labeledDescriptors]);

  return { model: true, isModelLoading, modelError, predict };
}
