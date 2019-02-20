module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "globals": {
        "document": true,
        "foo": true,
        "window": true
    },
    "rules":{
        "indent": [2, "tab"],
        "no-tabs": 0,
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/prefer-stateless-function": "off",
        "comma-dangle": ["error", "never"],
        "react/prop-types": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-console": "off",
        "react/destructuring-assignment": "off",
        "prefer-destructuring": "off",
        "linebreak-style": [0 ,"error", "windows"]
    }
};