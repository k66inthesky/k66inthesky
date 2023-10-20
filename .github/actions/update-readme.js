const fs = require('fs');
const { resolve } = require('path');

const readmePath = resolve(__dirname, '..', 'README.md');

let readmeContent = fs.readFileSync(readmePath, 'utf8');

const label_feed_match = readmeContent.match(/{{ label_feed_cnt }}\s*:\s*([\d]+)/i);

let label_feed_cnt = 0;

if (label_feed_match && label_feed_match[1]) {
    label_feed_cnt = parseInt(label_feed_match[1], 10);
}

label_feed_cnt++;

readmeContent = readmeContent.replace(/{{ label_feed_cnt }}\s*:\s*([\d]+)/i, `{{ label_feed_cnt }}: ${label_feed_cnt}`);

fs.writeFileSync(readmePath, readmeContent);

console.log(`label_feed_cnt: ${label_feed_cnt}`);

