module.exports = function (webpackConfig) {
  webpackConfig.module.loaders.forEach(function (loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push(['antd', {
        style: 'css',
      }]);
    }
    return loader;
  });

  webpackConfig.babel.plugins.push([
    'react-intl', {
      'messagesDir': './i18n-messages',
    },
  ]);
  webpackConfig.babel.cacheDirectory = false;

  return webpackConfig;
};
