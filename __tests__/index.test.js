import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff', (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const expected = fs.readFileSync(getFixturePath('stylish.txt'), 'utf-8');
  expect(genDiff(data1, data2)).toEqual(expected);
});
