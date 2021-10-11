import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('stylish.json', () => {
  const filepath1 = getFixturePath('tree1.json');
  const filepath2 = getFixturePath('tree2.json');
  const expected = readFile('stylish.txt');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expected);
});
test('plain.json', () => {
  const filepath1 = getFixturePath('tree1.json');
  const filepath2 = getFixturePath('tree2.json');
  const expected = readFile('plain.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expected);
});
test('stylish.yaml', () => {
  const filepath1 = getFixturePath('tree1.yaml');
  const filepath2 = getFixturePath('tree2.yaml');
  const expected = readFile('stylish.txt');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expected);
});
test('plain.yaml', () => {
  const filepath1 = getFixturePath('tree1.yaml');
  const filepath2 = getFixturePath('tree2.yaml');
  const expected = readFile('plain.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expected);
});
