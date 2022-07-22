/**
    封装axios
    拦截器封装
 */
import axios from 'axios'
axios.interceptors.request.use(cfg=>{
    console.log('请求拦截');
    return cfg
})
axios.interceptors.response.use((res)=>{
    console.log('响应拦截');
    return res
})
export default axios