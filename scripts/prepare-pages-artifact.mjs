import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.join(process.cwd(), 'out');

await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, '.nojekyll'), '');
