module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "jest": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "func-names": ["error", "never"],
    "quotes": [1, "single", { "allowTemplateLiterals": true }],
    "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] }],
  }
};