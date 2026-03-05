const fs = require('fs');
const https = require('https');
const path = require('path');

const modelsDir = path.join(__dirname, '../public/models');
if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

const files = [
  'ssd_mobilenetv1_model-weights_manifest.json',
  'ssd_mobilenetv1_model-shard1',
  'ssd_mobilenetv1_model-shard2',
  'face_landmark_68_model-weights_manifest.json',
  'face_landmark_68_model-shard1',
  'face_recognition_model-weights_manifest.json',
  'face_recognition_model-shard1',
  'face_recognition_model-shard2'
];

const baseUrl = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/';

async function downloadFile(file) {
  const filePath = path.join(modelsDir, file);
  return new Promise((resolve, reject) => {
    https.get(baseUrl + file, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${file}: ${response.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const file of files) {
    console.log(`Downloading ${file}...`);
    try {
      await downloadFile(file);
      console.log(`Successfully downloaded ${file}`);
    } catch (e) {
      console.error(e.message);
    }
  }
}

run();
