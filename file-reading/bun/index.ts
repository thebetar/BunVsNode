import fs from 'node:fs';
import path from 'node:path';

console.time('Reading files');

const files = fs.readdirSync(path.join(import.meta.dir, '..', 'data'));

for (const file of files) {
    console.time(file);

	const contents = Bun.file(path.join(import.meta.dir, '..', 'data', file));

	const text = await contents.text();

    console.timeEnd(file);
}

console.timeEnd('Reading files');
