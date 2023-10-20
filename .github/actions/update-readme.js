// const fs = require('fs');

// // read label_feed_cnt
// let labelFeedCnt = 0;
// try {
//   const data = fs.readFileSync('README.md', 'utf8');
//   const regex = /{label_feed_cnt}/g;
//   const match = data.match(regex);
//   if (match) {
//     labelFeedCnt = parseInt(match.length) - 1;
//   }
// } catch (err) {
//   console.error(err);
// }

// // update label_feed_cnt
// labelFeedCnt += 1;

// // create dynamic label
// const badgeURL = `https://img.shields.io/badge/Feed%20Count-${labelFeedCnt}-brightgreen`;
// https.get(badgeURL, (res) => {
//   let badge = '';
//   res.on('data', (chunk) => {
//     badge += chunk;
//   });


// res.on('end', () => {
//     // update README.md中的占位符
//     fs.readFile('README.md', 'utf8', function (err, data) {
//       if (err) {
//         return console.log(err);
//       }
//       const result = data.replace(/{label_feed_cnt}/g, badge);

//       fs.writeFile('README.md', result, 'utf8', function (err) {
//         if (err) return console.log(err);
//       });
//     });
//   });
// });
const fs = require('fs');

const readmePath = 'README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf-8');

const regex = /Label Feed Count: (\d+)/;
const match = readmeContent.match(regex);

if (match) {
  const currentCount = parseInt(match[1]);
  const newCount = currentCount + 1;
  readmeContent = readmeContent.replace(regex, `Label Feed Count: ${newCount}`);
  fs.writeFileSync(readmePath, readmeContent);
  console.log(`Updated label_feed_cnt to ${newCount}`);
} else {
  console.log('Label Feed Count not found in README.md');
}
