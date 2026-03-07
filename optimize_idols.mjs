import fs from 'fs';

const filePath = '/home/user/kpopstudio/src/data/idols.ts';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Specifically find Soyeon (id: "soyeon") and change her imageUrl query
// Targeting specifically the member with id: "soyeon"
const soyeonReplacement = 'https://tse1.mm.bing.net/th?q=(G)I-DLE+Soyeon+face+front+portrait+2024&w=500&h=500&c=7&rs=1&p=0';

// Regex explanation:
// Look for id: "soyeon" followed by some text that DOES NOT include another "id:" (to stay within the same member object)
// until we find imageUrl: "..."
// Actually, Member objects are defined as items in members array, and they each have an id first.
// A simpler way: Find id: "soyeon", then find the next imageUrl: "..."
const soyeonRegex = /(id:\s*"soyeon",[\s\S]*?imageUrl:\s*")([^"]+)(")/;

content = content.replace(soyeonRegex, (match, p1, p2, p3) => {
    console.log(`Replacing Soyeon URL: ${p2} -> ${soyeonReplacement}`);
    return p1 + soyeonReplacement + p3;
});

// 2. For all other members, replace the keyword fancam in their imageUrl with official+portrait
// 3. Check for any queries containing back, side, or behind and replace them with front+face as well.

content = content.replace(/(imageUrl:\s*"[^"]+")/g, (match) => {
    // We skip the one we just replaced for Soyeon by checking if it contains the new URL.
    if (match.includes(soyeonReplacement)) {
        return match;
    }
    
    let newUrl = match
        .replace(/fancam/g, 'official+portrait')
        .replace(/(back|side|behind)/g, 'front+face');
        
    if (newUrl !== match) {
        // console.log(`Replacing bulk: ${match} -> ${newUrl}`);
    }
    return newUrl;
});

fs.writeFileSync(filePath, content);
console.log('Optimized imageUrl query strings in src/data/idols.ts');
