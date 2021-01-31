// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Abhishek Raj - Software Engineer'
        return args
      }),
      config.module.rule('pdf')
        .test(/\.(pdf)(\?.*)?$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/pdf/[name].[hash:8].[ext]'
        })
  }
}