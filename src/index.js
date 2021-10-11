import fs from 'fs';
import path from 'path';
import compare from './buildTree.js';
import formatter from './formatters/index.js';
import parse from './parsers.js';

const buildFullPath = (filename) => path.resolve(process.cwd(), filename);
const getData = (filename) => {
  const filepath = buildFullPath(filename);
  const data = fs.readFileSync(filepath, 'utf-8');
  const format = path.extname(filepath);
  return parse(data, format.slice(1));
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const result = compare(data1, data2);
  return formatter(result, formatName);
};
export default genDiff;
