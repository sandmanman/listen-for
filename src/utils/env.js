//
// development / production 环境配置
//

var BASE_URL = ''

if ( process.env.NODE_ENV == 'development' ) {
  BASE_URL = 'http://localhost:3000'
} else if(process.env.NODE_ENV == 'production'){
	BASE_URL = 'http://bestcsser.cc/netease-cloud-music/api'
}

export {
  BASE_URL
}