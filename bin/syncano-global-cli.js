#!/usr/bin/env node
const fs = require('fs');
const { spawn } = require("child_process");


const path = process.cwd();
let syncanoPath = './node_modules/.bin/s';

function runCMD(binary) {
  const subprocess = spawn(`node ${binary}`, process.argv.slice(2), {
    argv0: path,
    shell: true,
    stdio: "inherit"
  });
}

console.log('Running with syncano-global-cli 🌍');

if (fs.existsSync(syncanoPath)) {
  runCMD(syncanoPath);
} else if (fs.existsSync('./.'+syncanoPath)) {
  runCMD('./.'+syncanoPath);
} else if (fs.existsSync('./../.'+syncanoPath)) { 
  runCMD('./../.'+syncanoPath);
} else {
  console.log('syncano-cli not found')
} 
