// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserlist" field in package.json
    // "autoprefixer": {},
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": { utf8: false }, 
    "postcss-cssnext": {}, 
    "postcss-px-to-viewport": { 
      viewportWidth: 640, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
      //viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
      selectorBlackList: ['.ignore', '.hairlines', '.space-line'], // 指定不需要转换的类，可自定义，可无限增加，建议定义一到两个通用的类名
      minPixelValue: 1, // 小于或等于`1`不转换，也可自定义
      mediaQuery: false // 允许在媒体查询中转换`px`
    }, 
    "postcss-viewport-units":{}, 
    "cssnano": { 
      preset: "advanced", 
      autoprefixer: false, 
      "postcss-zindex": false 
    }
  }
}
