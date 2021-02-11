/* eslint-disable @typescript-eslint/no-var-requires */
const vconsole = require('vconsole-webpack-plugin')
const px2vw = require('postcss-px-to-viewport')

const isDev = process.env.NODE_ENV === 'development'

/**
 *  @typedef { import("@vue/cli-service").ProjectOptions } Options
 *  @type { Options }
 */
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '',
    },
  },
  chainWebpack: config => {
    config.when(isDev, c => {
      c.plugin('vconsole').use(vconsole, [{ enable: true }])
    })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2vw({
            unitToConvert: 'px',
            viewportWidth: 320,
            unitPrecision: 5,
            // propList: ["", "!font*"],
            // viewportUnit: 'vw',
            // fontViewportUnit: 'vw',
            // selectorBlackList: [],
            minPixelValue: 10,
            // mediaQuery: false,
            // replace: true,
            // exclude: undefined,
            // include: undefined,
            // landscape: false,
            // landscapeUnit: 'vw',
            // landscapeWidth: 568
          }),
        ],
      },
    },
  },
}
