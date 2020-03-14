module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  globals: {
    "ts-jest": {
      tsConfig: "jest.tsconfig.json",
      babelConfig: true
    }
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
  preset: "ts-jest"
};
