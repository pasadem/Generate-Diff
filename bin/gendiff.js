#!/usr/bin/env node

import _ from 'lodash';
import fs from 'fs';
import  path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Command } from 'commander/esm.mjs';

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const getFileData = (filepath) => {
    return fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf8');
};
const data1 = (file) => readFile(file);
const data2 = (file) => readFile(file);

const gendiff = (data1, data2) => {
    
    console.log(data1, data2);
}

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format', '[type]  output format')
  .action((filepath1, filepath2) => {
      gendiff(filepath1, filepath2);
  }); 
  
program.parse();
