const fs = require('fs');

let readmeContent = fs.readFileSync('README.md', 'utf-8');

const labelCntRegex = /{label_feed_cnt}/g;

const currentCnt = parseInt(readmeContent.match(labelCntRegex)[0].replace(/\D/g, ''));

const newCnt = currentCnt + 1;

readmeContent = readmeContent.replace(labelCntRegex, newCnt);

fs.writeFileSync('README.md', readmeContent);

console.log(`label_feed_cnt 已更新為: ${newCnt}`);


