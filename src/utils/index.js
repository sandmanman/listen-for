
//
let isDev = process.env.NODE_DEV === 'development'

//
// 开发环境输出log
const log = (msg) => {
  if( isDev && console && console.log ) {
    console.log(msg)
  }
}

//
// 歌单播放数量格式
const formatPlayCount = (num) => {
  if (num < 10000) {
      return parseInt(num)
  } else {
      return (num / 10000).toFixed(0) + '万'
  }
}



export {
  log,
  formatPlayCount
}