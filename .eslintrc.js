module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
              'selector': 'interface',
              'format': ['PascalCase'],
              'custom': {
                'regex': '^I[A-Z]',
                'match': true
              }
            }
          ],
          'react/react-in-jsx-scope': 'off',
          'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    },
    'settings': {
        'react': {
            'createClass': 'createReactClass', // Regex for Component Factory to use,
            // default to 'createReactClass'
            'pragma': 'React',  // Pragma to use, default to 'React'
            'fragment': 'Fragment',  // Fragment to use (may be a property of <pragma>), default to 'Fragment'
            'version': 'detect', // React version. 'detect' automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to 'detect' in the future
            'flowVersion': '0.53' // Flow version
        }
    }
};
