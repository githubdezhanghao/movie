/*
    接口地址模块化  封装
    数据接口API地址 进行统一管理
*/
//地址前缀  接口地址公共部分
// const prefix = process.env.VUE_APP_API_PREFIX
const prefix = 'https://api.iynn.cn/film/api/v1'
const url = {
    //正在热映
    nowPlaying: prefix + '/getNowPlayingFilmList'
}
export default url