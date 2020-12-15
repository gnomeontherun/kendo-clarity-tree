// This is a hacky way to grab the output from the console instead of trying to make a full scale karma reporter

const fs = require('fs');

const output = fs.readFileSync('./output.txt', 'utf8');

const json = JSON.parse(output.substring(output.indexOf('>>> START JSON') + 14, output.indexOf('>>> END JSON')));

fs.writeFileSync('src/assets/data.json', JSON.stringify(json), {flag: 'w+', encoding: 'utf8'});
fs.writeFileSync('dist/h5-tree-compare/assets/data.json', JSON.stringify(json), {flag: 'w+', encoding: 'utf8'});