const fs = require('fs');

try {
  // 读取 README.md 文件的内容
  let readmeContent = fs.readFileSync('README.md', 'utf-8');

  // 匹配 {label_feed_cnt} 的行
  const labelCntRegex = /{label_feed_cnt}/g;

  const matchResult = readmeContent.match(labelCntRegex);

  if (matchResult && matchResult.length > 0) {
    const matchText = matchResult[0];
    const numbers = matchText.match(/\d+/);

    if (numbers && numbers.length > 0) {
      const currentCnt = parseInt(numbers[0]);
      const newCnt = currentCnt + 1;

      // 更新 README.md 中的 {label_feed_cnt} 为新的值
      readmeContent = readmeContent.replace(labelCntRegex, newCnt);

      // 写回 README.md 文件
      fs.writeFileSync('README.md', readmeContent);

      console.log(`label_feed_cnt 已更新为: ${newCnt}`);
    } else {
      console.error('未找到数字值: ' + matchText);
    }
  } else {
    console.error('未找到匹配项: {label_feed_cnt}');
  }
} catch (error) {
  console.error('发生错误：', error);
  process.exit(1); // 如果出现错误，退出并返回错误代码 1
}
