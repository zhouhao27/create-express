import arg from 'arg';
import inquirer from 'inquirer';
import {
  createProject
} from './main';
import chalk from 'chalk';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg({    
    '--version': Boolean,
    '--help': Boolean,            
    '-h': '--help',
    '-v': '--version'
  }, {
    argv: rawArgs.slice(2),
  });
  return {
    showVersion: args['--version'] || false,    
    showHelp: args['--help'] || false,
    name: args._[0],
    template: 'TypeScript'
  };
}

async function promptForMissingOptions(options) {

  if (options.showVersion) {
    const pjson = require('../package.json');
    console.log(pjson.version);
    process.exit(0)
  }

  if (options.showHelp) {
    showHelp()
    process.exit(0)
  }

  if (!options.name) {
    console.error(`${chalk.red('You must specify a project name:')}`)
    showHelp()
    process.exit(1)
  }

  return options
}

function showHelp() {
  console.log(`  create-express ${chalk.green('<project-name>')} [options]`)
  console.log()
  console.error('For example:')
  console.log(`  create-express ${chalk.green('my-project')}`)
  console.log(`   options:`)
  console.log(`   -h, --help Help`)
  console.log(`   -v, --version Show version`)
  console.log()
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);  
  // console.log(options)
  await createProject(options)
}
