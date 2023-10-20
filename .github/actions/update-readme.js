const fs = require('fs');

try {
  let readmeContent = fs.readFileSync('README.md', 'utf-8');

  const labelCntRegex = /{label_feed_cnt}/g;

  const matchResult = readmeContent.match(labelCntRegex);

  if (matchResult && matchResult.length > 0) {
    const currentCnt = parseInt(matchResult[0].replace(/\D/g, ''));

    const newCnt = currentCnt + 1;

    readmeContent = readmeContent.replace(labelCntRegex, newCnt);

    fs.writeFileSync('README.md', readmeContent);

    console.log(`label_feed_cnt 已更新: ${newCnt}`);
  } else {
    console.error('未找到: {label_feed_cnt}');
  }
} catch (error) {
  console.error('錯誤：', error);
  process.exit(1); 
}
