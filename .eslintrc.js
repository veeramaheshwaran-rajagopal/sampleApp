module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    ignorePatterns: ['temp.js', 'test/'],
    rules: {
        'no-console': 'off',
        'consistent-return': 'off',
        radix: 'off',
        'no-underscore-dangle': 'off',
        camelcase: 'off',
        indent: 'off',
        'no-tabs': 'off',
        'max-len': 'off',
        'no-undef': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'off',
        'no-inner-declarations': 'off',
        'no-restricted-syntax': 'off',
        'no-lonely-if': 'off',
        'brace-style': 'off',
        'no-await-in-loop': 'off',
        'object-curly-newline': 'off',
        'comma-dangle': 'off',
        'prefer-destructuring': 'off',
        'no-loop-func': 'off',
        'prettier/prettier': 0,
        'func-names': 'off',
        'max-classes-per-file': ['error', 10],
        'import/newline-after-import': 'off',
        'spaced-comment': 'off',
        'prefer-template': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/order': 'off',
        'no-nested-ternary': 'off',
        'array-callback-return': 'off',
        'eslint-disable-next-line no-use-before-define': 'off',
        'no-shadow': 'off',
        'global-require': 'off',
        'no-continue': 'off',
        'no-unused-vars': 'off',
        'no-constant-condition': 'off',
        'no-cond-assign': 'off',
        'object-shorthand': 'off',
        "no-unneeded-ternary": "off"
    },
};
