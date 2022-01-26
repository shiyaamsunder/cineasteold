// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: [
    "node_modules",
    "<rootDir>/",
    "<rootDir>/pages/",
    "<rootDir>/components/",
  ],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@components": "<rootDir>/components/$1",

    "^@pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
