const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../app/globals.css');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// 1-indexed lines 641 to 1025 correspond to 0-indexed indices 640 to 1024 (inclusive)
// Length to remove: 1025 - 641 + 1 = 385 lines
const startIndex = 640;
const deleteCount = 385;

// Let's print the first and last lines we are removing to double check
console.log("Removing starting line:", lines[startIndex]);
console.log("Removing ending line:", lines[startIndex + deleteCount - 1]);

lines.splice(startIndex, deleteCount, '/* ===== SERVICE CLIMBER GAME REPLACED BY TAILWIND SCROLLYTELLING ===== */');

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully cleaned up CSS!");
