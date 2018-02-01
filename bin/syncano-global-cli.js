#!/usr/bin/env node 
const { spawn } = require("child_process");


console.log('Running with syncano-global-cli 🌍');

const path = process.cwd(); 
 
  const subprocess = spawn(`npx s`, process.argv.slice(2), {
    argv0: path,
    cwd: path,
    shell: true,
    stdio: "inherit"
  }); 
