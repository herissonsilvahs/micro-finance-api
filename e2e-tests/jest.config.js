const rootConfig = require('../jest.config')
module.exports = {
  ...rootConfig,
  rootDir: '..',
  displayName: 'end2end-tests',
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
  testMatch: ['<rootDir>/test/**/*.test.ts']
}
