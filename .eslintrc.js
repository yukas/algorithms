module.exports = {
  "env": {
    "node": true,
    "jest": true
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "ecmaVersion": 2022
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "comma-spacing": [
      "error",
      { after: true }
    ]
  }
};
