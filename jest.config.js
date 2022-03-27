/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ["tests"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: { "^.+\\.ts$": "ts-jest" },
  moduleFileExtensions: ["js", "ts", "json", "node"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec|steps))\\.(ts)$",
  moduleNameMapper: { "tests/(.*)": "<rootDir>/tests/$1" },
};
