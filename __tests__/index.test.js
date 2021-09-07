import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('simple.json', () => {
  const filepath1 = getFixturePath('before.json');
  const filepath2 = getFixturePath('after.json');
  const expected = fs.readFileSync(getFixturePath('simple.txt'), 'utf-8');
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});
test('simple.yml', () => {
  const filepath1 = getFixturePath('before.yaml');
  const filepath2 = getFixturePath('after.yaml');
  const expected = fs.readFileSync(getFixturePath('simple.txt'), 'utf-8');
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});
test('stylish.json', () => {
  const filepath1 = getFixturePath('tree1.json');
  const filepath2 = getFixturePath('tree2.json');
  const expected = fs.readFileSync(getFixturePath('stylish.txt'), 'utf-8');
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});
test('plain.json', () => {
  const filepath1 = getFixturePath('tree1.json');
  const filepath2 = getFixturePath('tree2.json');
  const expected = fs.readFileSync(getFixturePath('plain.txt'), 'utf-8');
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});
