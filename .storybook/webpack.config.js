const customProperties = require('postcss-custom-properties');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  storybookBaseConfig.module.rules.push(/*{
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  },*/
  {
    test: /\.css$/,
    loaders: [
      {
        loader: 'style-loader',
        options: {
          hmr: true,
        }
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        }
      },
      'postcss-loader'
    ]
  }
  );
  return storybookBaseConfig;
}
