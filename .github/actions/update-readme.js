const fs = require('fs');
const { resolve } = require('path');

const readmePath = resolve(__dirname, '..', 'README.md');

const label_feed_cnt = getFeedCount();

const readmeContent = `
![Feed Image](.github/images/feed.png)
{{ label_feed_cnt }}

`;

fs.writeFileSync(readmePath, readmeContent);

function getFeedCount() {
    let label_feed_cnt = 0; // initial as 0
    increaseFeedCount(label_feed_cnt);
    return `Feed Count: `{{label_feed_cnt}}`;
}

function increaseFeedCount(currentCount) {
    const newCount = currentCount + 1;
    return newCount;
}
