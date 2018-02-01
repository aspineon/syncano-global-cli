#!/usr/bin/env node

const path = process.cwd();

const { spawn } = require("child_process");

const subprocess = spawn("npx s ", process.argv.slice(2), {
  shell: true,
  stdio: "inherit"
});
