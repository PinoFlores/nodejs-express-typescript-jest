/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ["src"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: { "^.+\\.ts$": "ts-jest" },
  moduleFileExtensions: ["js", "ts", "json", "node"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(ts)$",
  moduleNameMapper: { "src/(.*)": "<rootDir>/src/$1" },
};
