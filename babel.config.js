module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  env: {
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: [
        ['@babel/plugin-transform-runtime', { useESModules: true }],
      ],
    },
  },
};
