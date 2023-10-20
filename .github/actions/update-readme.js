const fs = require('fs');

try{
let readmeContent = fs.readFileSync('README.md', 'utf-8');

const labelCntRegex = /{label_feed_cnt}/g;

const currentCnt = parseInt(readmeContent.match(labelCntRegex)[0].replace(/\D/g, ''));

const newCnt = currentCnt + 1;

readmeContent = readmeContent.replace(labelCntRegex, newCnt);

fs.writeFileSync('README.md', readmeContent);

console.log(`label_feed_cnt 已更新為: ${newCnt}`);
} catch (error){
  console.error('發生錯誤: ', error);
  process.exit(1);
}


