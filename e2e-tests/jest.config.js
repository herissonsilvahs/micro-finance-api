const rootConfig = require('../jest.config')
module.exports = {
  ...rootConfig,
  rootDir: '..',
  displayName: 'end2end-tests',
  setupFilesAfterEnv: ['<rootDir>/e2e-tests/jest-setup.ts'],
  testMatch: ['<rootDir>/e2e-tests/**/*.test.ts'],
}
