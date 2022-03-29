module.exports = {
  "collectCoverageFrom": [
    "binary_search/*.js",
    "!**/node_modules/**"
  ],
  "coverageReporters": [
    "html",
  ],
  "moduleFileExtensions": [
    "js"
  ],
  "modulePathIgnorePatterns": [
    "<rootDir>/(node_modules|vendor|config)/"
  ],
  "reporters": [
    "default"
  ],
  "setupFiles": [],
  "testPathIgnorePatterns": [
    "<rootDir>/(node_modules|vendor|config)/"
  ],
  "transform": {
    ".*\\.js$": "babel-jest"
  }
};
