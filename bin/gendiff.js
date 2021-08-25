#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
// import gendiff from '../index.js';

const program = new Command();
program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference')
  .option('-h, --help', 'output usage information')
    
program.parse();


