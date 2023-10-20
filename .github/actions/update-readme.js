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
