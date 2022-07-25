/**
    封装axios
    拦截器封装
 */
import axios from 'axios'
//请求拦截器
axios.interceptors.request.use(cfg=>{
    // console.log('请求拦截');
    return cfg
})
//响应拦截器
axios.interceptors.response.use((res)=>{
    // console.log('响应拦截');
    return res
})

export default axios  