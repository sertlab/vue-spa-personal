const base = require('./webpack.base.config')
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = Object.assign({}, base, {
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

module.exports = config
