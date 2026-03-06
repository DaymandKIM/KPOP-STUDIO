/**
 * generate_descriptors.mjs
 * 실제 아이돌 사진에서 128-d 얼굴 임베딩 벡터를 추출해 descriptors.json 생성
 *
 * 실행: LD_LIBRARY_PATH="/nix/store/2735x3ab0rd57f4y40vcw716vzmjlir4-util-linux-2.41.1-lib/lib:$LD_LIBRARY_PATH" node generate_descriptors.mjs
 */

import * as tf from '@tensorflow/tfjs-node';
import * as faceapi from '@vladmandic/face-api';
import { Canvas, Image, ImageData, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Node.js 환경 설정
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const MODEL_PATH = path.join(__dirname, 'public/models');
const OUTPUT_PATH = path.join(__dirname, 'public/data/descriptors.json');

// 36명 전체 (label = 한국어 이름, urls = 우선순위 순 fallback URL)
const MEMBERS = [
  // ── NewJeans ──
  {
    label: '민지',
    urls: [
      'https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%AF%BC%EC%A7%80%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0',
      'https://tse1.mm.bing.net/th?q=NewJeans+Minji+face+kpop+2024&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=NewJeans+Minji+solo+photo',
    ],
  },
  {
    label: '하니',
    urls: [
      'https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%95%98%EB%8B%88%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0',
      'https://tse1.mm.bing.net/th?q=NewJeans+Hanni+face+kpop+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=NewJeans+Hanni+solo+photo',
    ],
  },
  {
    label: '다니엘',
    urls: [
      'https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%8B%A4%EB%8B%88%EC%97%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0',
      'https://tse1.mm.bing.net/th?q=NewJeans+Danielle+face+kpop+2024&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=NewJeans+Danielle+solo+photo',
    ],
  },
  {
    label: '해린',
    urls: [
      'https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%95%98%EB%A6%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0',
      'https://tse1.mm.bing.net/th?q=NewJeans+Haerin+face+kpop+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=NewJeans+Haerin+solo+photo',
    ],
  },
  {
    label: '혜인',
    urls: [
      'https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%98%9C%EC%9D%B8%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0',
      'https://tse1.mm.bing.net/th?q=NewJeans+Hyein+face+kpop+2024&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=NewJeans+Hyein+solo+photo',
    ],
  },

  // ── IVE ──
  {
    label: '안유진',
    urls: [
      'https://tse1.mm.bing.net/th?q=IVE+An+Yujin+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=IVE+Yujin+solo+kpop&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=An+Yujin+IVE+portrait',
    ],
  },
  {
    label: '가을',
    urls: [
      'https://tse1.mm.bing.net/th?q=IVE+Gaeul+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=IVE+Gaeul+solo+kpop&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Gaeul+IVE+portrait',
    ],
  },
  {
    label: '레이',
    urls: [
      'https://tse1.mm.bing.net/th?q=IVE+Rei+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=IVE+Rei+solo+kpop&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Rei+IVE+portrait',
    ],
  },
  {
    label: '장원영',
    urls: [
      'https://tse1.mm.bing.net/th?q=IVE+Jang+Wonyoung+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Wonyoung+IVE+solo+kpop&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Jang+Wonyoung+IVE+portrait',
    ],
  },
  {
    label: '리즈',
    urls: [
      'https://tse1.mm.bing.net/th?q=IVE+Liz+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=IVE+Liz+solo+kpop&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Liz+IVE+portrait',
    ],
  },
  {
    label: '이서',
    urls: [
      'https://tse1.mm.bing.net/th?q=IVE+Leeseo+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=IVE+Leeseo+solo+kpop&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Leeseo+IVE+portrait',
    ],
  },

  // ── aespa ──
  {
    label: '카리나',
    urls: [
      'https://tse1.mm.bing.net/th?q=aespa+Karina+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=aespa+Karina+High+Res+Photo&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Karina+aespa+portrait',
    ],
  },
  {
    label: '윈터',
    urls: [
      'https://tse1.mm.bing.net/th?q=aespa+Winter+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=aespa+Winter+High+Res+Photo&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Winter+aespa+portrait',
    ],
  },
  {
    label: '지젤',
    urls: [
      'https://tse1.mm.bing.net/th?q=aespa+Giselle+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=aespa+Giselle+High+Res+Photo&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Giselle+aespa+portrait',
    ],
  },
  {
    label: '닝닝',
    urls: [
      'https://tse1.mm.bing.net/th?q=aespa+Ningning+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=aespa+Ningning+High+Res+Photo&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Ningning+aespa+portrait',
    ],
  },

  // ── BTS ──
  {
    label: 'RM',
    urls: [
      'https://tse1.mm.bing.net/th?q=BTS+RM+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BTS+RM+High+Resolution+Photo&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Kim+Namjoon+BTS+RM+portrait',
    ],
  },
  {
    label: '진',
    urls: [
      'https://tse1.mm.bing.net/th?q=BTS+Jin+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BTS+Jin+High+Resolution+Photo&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Kim+Seokjin+BTS+Jin+portrait',
    ],
  },
  {
    label: '슈가',
    urls: [
      'https://tse1.mm.bing.net/th?q=BTS+Suga+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BTS+Suga+High+Resolution+Photo&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Min+Yoongi+BTS+Suga+portrait',
    ],
  },
  {
    label: '제이홉',
    urls: [
      'https://tse1.mm.bing.net/th?q=BTS+J-Hope+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BTS+J-Hope+High+Resolution+Photo&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Jung+Hoseok+BTS+J-Hope+portrait',
    ],
  },
  {
    label: '지민',
    urls: [
      'https://tse1.mm.bing.net/th?q=BTS+Jimin+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BTS+Jimin+High+Resolution+Photo&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Park+Jimin+BTS+portrait',
    ],
  },
  {
    label: '뷔',
    urls: [
      'https://tse1.mm.bing.net/th?q=BTS+V+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BTS+V+High+Resolution+Photo&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Kim+Taehyung+BTS+V+portrait',
    ],
  },
  {
    label: '정국',
    urls: [
      'https://tse1.mm.bing.net/th?q=BTS+Jungkook+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BTS+Jungkook+High+Resolution+Photo&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Jeon+Jungkook+BTS+portrait',
    ],
  },

  // ── BLACKPINK ──
  {
    label: '지수',
    urls: [
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Jisoo+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Jisoo+Official+Portrait&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Jisoo+BLACKPINK+portrait',
    ],
  },
  {
    label: '제니',
    urls: [
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+Official+Portrait&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Jennie+BLACKPINK+portrait',
    ],
  },
  {
    label: '리사',
    urls: [
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Lisa+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Lisa+Official+Portrait&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Lisa+BLACKPINK+portrait',
    ],
  },
  {
    label: '로제',
    urls: [
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Rose+face+photo+2024&w=400&h=400',
      'https://tse1.mm.bing.net/th?q=BLACKPINK+Rose+Official+Portrait&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Rose+BLACKPINK+portrait',
    ],
  },

  // ── LE SSERAFIM ──
  {
    label: '김채원',
    urls: [
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kim+Chaewon+%EA%B9%80%EC%B1%84%EC%9B%90+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Chaewon+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Kim+Chaewon+LE+SSERAFIM+portrait',
    ],
  },
  {
    label: '사쿠라',
    urls: [
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Sakura+%EC%82%AC%EC%BF%A0%EB%9D%BC+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Sakura+face+photo+2024&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Sakura+LE+SSERAFIM+portrait',
    ],
  },
  {
    label: '허윤진',
    urls: [
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Huh+Yunjin+%ED%97%88%EC%9C%A4%EC%A7%84+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Yunjin+face+photo+2024&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Huh+Yunjin+LE+SSERAFIM+portrait',
    ],
  },
  {
    label: '카즈하',
    urls: [
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kazuha+%EC%B9%B4%EC%A6%88%ED%95%98+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kazuha+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Kazuha+LE+SSERAFIM+portrait',
    ],
  },
  {
    label: '홍은채',
    urls: [
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Hong+Eunchae+%ED%99%8D%EC%9D%80%B1%EC%B1%84+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Eunchae+face+photo+2024&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Hong+Eunchae+LE+SSERAFIM+portrait',
    ],
  },

  // ── (G)I-DLE ──
  {
    label: '미연',
    urls: [
      'https://tse1.mm.bing.net/th?q=(G)I-DLE+Miyeon+%EB%AF%B8%EC%97%B0+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=GIDLE+Miyeon+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Miyeon+GIDLE+portrait',
    ],
  },
  {
    label: '민니',
    urls: [
      'https://tse1.mm.bing.net/th?q=(G)I-DLE+Minnie+%EB%AF%BC%EB%8B%88+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=GIDLE+Minnie+face+photo+2024&w=400&h=400',
      'https://tse4.mm.bing.net/th?q=Minnie+GIDLE+portrait',
    ],
  },
  {
    label: '소연',
    urls: [
      'https://tse1.mm.bing.net/th?q=(G)I-DLE+Soyeon+%EC%86%8C%EC%97%B0+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=GIDLE+Soyeon+face+photo+2024&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Soyeon+GIDLE+portrait',
    ],
  },
  {
    label: '우기',
    urls: [
      'https://tse1.mm.bing.net/th?q=(G)I-DLE+Yuqi+%EC%9A%B0%EA%B8%B0+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=GIDLE+Yuqi+face+photo+2024&w=400&h=400',
      'https://tse2.mm.bing.net/th?q=Yuqi+GIDLE+portrait',
    ],
  },
  {
    label: '슈화',
    urls: [
      'https://tse1.mm.bing.net/th?q=(G)I-DLE+Shuhua+%EC%8A%88%ED%99%94+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1',
      'https://tse1.mm.bing.net/th?q=GIDLE+Shuhua+face+photo+2024&w=400&h=400',
      'https://tse3.mm.bing.net/th?q=Shuhua+GIDLE+portrait',
    ],
  },
];

// ── 유틸 ──
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function tryExtractDescriptor(member) {
  for (let i = 0; i < member.urls.length; i++) {
    const url = member.urls[i];
    try {
      const img = await loadImage(url);
      const detection = await faceapi
        .detectSingleFace(img, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.3 }))
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (detection) {
        console.log(`  ✓ [${i + 1}/${member.urls.length}] 얼굴 감지 성공`);
        return Array.from(detection.descriptor);
      } else {
        console.log(`  ✗ [${i + 1}/${member.urls.length}] 얼굴 미감지: ${url.slice(0, 60)}...`);
      }
    } catch (e) {
      console.log(`  ✗ [${i + 1}/${member.urls.length}] 오류: ${e.message.slice(0, 60)}`);
    }
    await sleep(300);
  }
  return null;
}

async function main() {
  console.log('=== 얼굴 임베딩 생성 시작 ===\n');

  // 모델 로드
  console.log('모델 로딩 중...');
  await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_PATH);
  await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_PATH);
  await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_PATH);
  console.log('모델 로딩 완료\n');

  const results = [];
  const failed = [];

  for (let i = 0; i < MEMBERS.length; i++) {
    const member = MEMBERS[i];
    console.log(`[${i + 1}/${MEMBERS.length}] ${member.label} 처리 중...`);

    const descriptor = await tryExtractDescriptor(member);

    if (descriptor) {
      results.push({ label: member.label, descriptor });
      console.log(`  => 완료 (벡터 길이: ${descriptor.length})\n`);
    } else {
      failed.push(member.label);
      console.warn(`  => 실패: ${member.label} 건너뜀\n`);
    }

    await sleep(200);
  }

  // 저장
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2), 'utf8');

  console.log('=== 결과 ===');
  console.log(`성공: ${results.length}/${MEMBERS.length}명`);
  if (failed.length > 0) {
    console.log(`실패: ${failed.join(', ')}`);
    console.log('→ 실패한 멤버는 urls 배열에 다른 URL을 추가하고 재실행하세요.');
  }
  console.log(`\n저장 완료: ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('치명적 오류:', err);
  process.exit(1);
});
