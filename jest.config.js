// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: { '.+\\.(ts|tsx)$': 'ts-jest' },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
    '^axios$': require.resolve('axios')
  }
}
