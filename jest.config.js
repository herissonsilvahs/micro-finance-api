module.exports = {
  rootDir: '.',
  displayName: 'root-tests',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/src/(.*)': '<rootDir>/src/$1'
  }
}
