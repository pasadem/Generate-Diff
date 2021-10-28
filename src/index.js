import fs from 'fs';
import path from 'path';
import compare from './treeBuilder.js';
import format from './formatters/index.js';
import parse from './parsers.js';

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => {
  const absoluteFilepath = buildFullPath(filepath);
  const data = fs.readFileSync(absoluteFilepath, 'utf-8');
  const extension = path.extname(absoluteFilepath).slice(1);
  return parse(data, extension);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const internalTree = compare(data1, data2);
  return format(internalTree, formatName);
};
export default genDiff;
