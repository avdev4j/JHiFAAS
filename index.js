#!/usr/bin/env node
const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();
const process = require('process');

exports.runJHipster = (req, res) => {
  process.chdir('temp');
  env.lookup(() => {
    env.run('jhipster', {'skip-install': true}, err => {
      console.log('done');
    });
  });
};
