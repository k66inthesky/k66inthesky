const fs = require('fs');

// 读取当前的label_feed_cnt
let labelFeedCnt = 0;
try {
  const data = fs.readFileSync('README.md', 'utf8');
  const regex = /{label_feed_cnt}/g;
  const match = data.match(regex);
  if (match) {
    labelFeedCnt = parseInt(match.length) - 1;
  }
} catch (err) {
  console.error(err);
}

// 更新label_feed_cnt
labelFeedCnt += 1;

// 更新README.md文件
fs.readFile('README.md', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/{label_feed_cnt}/g, labelFeedCnt);

  fs.writeFile('README.md', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
