import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFixture('stylish.txt');
const expectedPlain = readFixture('plain.txt');
const expectedJson = readFixture('json.txt');
const formats = ['json', 'yaml'];

test.each(formats)('gendiff %s', (format) => {
  const filepath1 = getFixturePath(`tree1.${format}`);
  const filepath2 = getFixturePath(`tree2.${format}`);
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson);
});
