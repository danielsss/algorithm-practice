module.exports = {
  extension: ['ts'],
  recursive: true,
  reporter: 'spec',
  require: [ 'ts-node/register' ],
  spec: ['test/**/*.spec.ts'],
  exit: true
};
