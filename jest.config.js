// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: { '.+\\.ts$': 'ts-jest' },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^axios$': require.resolve('axios')
  }
}
