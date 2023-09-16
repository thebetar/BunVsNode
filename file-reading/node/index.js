const fs = require('fs');
const path = require('path');

console.time('Reading files');

const files = fs.readdirSync(path.join(__dirname, '..', 'data'));

for (const file of files) {
    console.time(file);

	const content = fs.readFileSync(path.join(__dirname, '..', 'data', file), 'utf-8');

    console.timeEnd(file);
}

console.timeEnd('Reading files');
