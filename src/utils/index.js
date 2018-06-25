// 歌单播放数量格式
var formatPlayCount = (num) => {
  if (num < 10000) {
      return parseInt(num)
  } else {
      return (num / 10000).toFixed(0) + '万'
  }
}

export {
  formatPlayCount
}