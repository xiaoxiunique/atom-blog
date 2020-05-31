const fs = require('fs');
const moment = require('moment');
const _ = require('lodash');
const fileName = process.argv[2];
if (!fileName) {
  console.info('请输入参数名');
}

let templateFileContent = fs.readFileSync(
  __dirname + '/algorithm/LeetCode .md',
  'utf-8'
);

// repace time
templateFileContent = _.replace(
  templateFileContent,
  '[time]',
   moment().format('yyyy-MM-DD')
);

fs.writeFileSync(
  __dirname + '/algorithm/LeetCode ' + fileName + '.md',
  templateFileContent
);
