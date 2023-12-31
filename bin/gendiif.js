#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>', 'path to these file 1')
  .argument('<filepath2>', 'path to these file 2')
  .option('-f, --format <type>', 'output format')

  program.parse();