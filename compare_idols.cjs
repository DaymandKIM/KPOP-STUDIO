const fs = require('fs');
const descriptors = JSON.parse(fs.readFileSync('public/data/descriptors.json', 'utf8'));
const existingLabels = new Set(descriptors.map(d => d.label));

// Rough extraction of member names from idols.ts
const idolsContent = fs.readFileSync('src/data/idols.ts', 'utf8');
const nameRegex = /name: \{ ko: "([^"]+)"/g;
let match;
const allNames = [];
while ((match = nameRegex.exec(idolsContent)) !== null) {
  allNames.push(match[1]);
}

const missing = allNames.filter(name => !existingLabels.has(name) && name !== "뉴진스" && name !== "아이브" && name !== "에스파" && name !== "방탄소년단" && name !== "블랙핑크" && name !== "르세라핌" && name !== "(여자)아이들" && name !== "있지" && name !== "엔믹스" && name !== "스테이씨" && name !== "레드벨벳" && name !== "오마이걸" && name !== "스트레이 키즈" && name !== "트와이스" && name !== "세븐틴" && name !== "엔하이픈");

console.log("Missing members:", missing.length);
console.log(missing.slice(0, 20).join(", "));
