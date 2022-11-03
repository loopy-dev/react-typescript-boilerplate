module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$',
};
