module.exports = {
  'plugins': [
    'import',
    'react',
  ],
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
    },
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },
  'settings': {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      'webpack': {
        'config': 'config/webpack-main.config.js',
      },
    },
  },
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.mdx'] }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
  },
  'globals': {
    'React': true,
    'PropTypes': true,
  },
};
