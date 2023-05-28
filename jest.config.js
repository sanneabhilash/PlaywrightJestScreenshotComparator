module.exports = {
  verbose: true,
  roots: ['<rootDir>/tests'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  transform: {
    '^.+\\.(ts|js)x?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  // testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: false,
  reporters: ['default'],
  setupFilesAfterEnv: ['<rootDir>/setupFile.ts', 'expect-playwright'],
  // contextOptions: {
  //   ignoreHTTPSErrors: true,
  // },
};
