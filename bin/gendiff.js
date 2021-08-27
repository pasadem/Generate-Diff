#!/usr/bin/env node

import _ from 'lodash';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/extensions
import { Command } from 'commander/esm.mjs';
import parse from '../src/parsers.js';

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => {
  const data = fs.readFileSync(getFixturePath(filename), 'utf-8');
  const format = path.extname(data);
  return parse(data, format);
};

const compare = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.map((key) => {
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}\n`;
    } if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}\n`;
    } if (!_.isEqual(data1[key], data2[key])) {
      return `  - ${key}: ${data1[key]} 
   + ${key}: ${data2[key]}\n`;
    }
    return `    ${key}: ${data1[key]}\n`;
  });
  return `{ \n${result.join(' ')} }`;
};

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format', '[type]  output format')
  .action((filepath1, filepath2) => {
    console.log(compare(readFile(filepath1), readFile(filepath2)));
  });

program.parse();
