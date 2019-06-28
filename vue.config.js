const path = require('path');
// import { apiBaseUrl } from '@/config.js'

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/voicetube-demo/'
    : '/'
}