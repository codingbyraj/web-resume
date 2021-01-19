 // vue.config.js
 module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Abhishek Raj - Software Engineer'
        return args
      })
    }
  }