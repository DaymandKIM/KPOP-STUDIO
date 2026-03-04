import { useState, useEffect, useCallback } from 'react';
import * as tmImage from '@teachablemachine/image';

// Replace this with your actual Teachable Machine model URL
// const URL = "https://teachablemachine.withgoogle.com/models/YOUR_MODEL_ID/";
// For development and testing without a real model yet, we can mock it or use a public one if available.
// Let's create a robust hook that handles loading and predicting.
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/j3lcqWjqg/";

export function useTeachableMachine() {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);
  const [modelError, setModelError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initModel() {
      try {
        setIsModelLoading(true);
        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";

        // Load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        const loadedModel = await tmImage.load(modelURL, metadataURL);
        
        if (isMounted) {
          setModel(loadedModel);
          setIsModelLoading(false);
        }
      } catch (error: any) {
        console.error("Failed to load Teachable Machine model:", error);
        if (isMounted) {
          setModelError(error.message || "Failed to load model");
          setIsModelLoading(false);
        }
      }
    }

    initModel();

    return () => {
      isMounted = false;
    };
  }, []);

  const predict = useCallback(async (imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement) => {
    if (!model) {
      throw new Error("Model is not loaded yet");
    }
    
    // predict can take in an image, video or canvas html element
    const predictions = await model.predict(imageElement);
    
    // Sort predictions by probability, highest first
    return predictions.sort((a, b) => b.probability - a.probability);
  }, [model]);

  return { model, isModelLoading, modelError, predict };
}
