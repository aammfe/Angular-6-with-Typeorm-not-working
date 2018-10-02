var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/typeorm$/, function(result) {
      result.request = result.request.replace(/typeorm/, 'typeorm/browser');
    })
    //    new webpack.IgnorePlugin(/fs|tls|net|child_process/)
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
