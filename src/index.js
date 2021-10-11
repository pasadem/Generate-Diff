import fs from 'fs';
import path from 'path';
import compare from './compare.js';
import formatter from './formatters/index.js';
import parse from './parsers.js';

const getFilePath = (filename) => path.resolve(process.cwd(), filename);
const readFile = (filename) => {
  const filepath = getFilePath(filename);
  const data = fs.readFileSync(filepath, 'utf-8');
  const format = path.extname(filepath);
  return parse(data, format);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const result = compare(data1, data2);
  return formatter(result, format);
};
export default genDiff;
