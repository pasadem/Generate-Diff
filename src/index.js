import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import compare from './compare.js';
// import parse from './parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => {
  const data = fs.readFileSync(getFixturePath(filename), 'utf-8');
  // const format = path.extname(data);
  return JSON.parse(data);
};

const genDiff = (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  return compare(data1, data2);
};
export default genDiff;
