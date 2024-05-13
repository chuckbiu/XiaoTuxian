import axios from "axios";
import { ElMessage } from 'element-plus'
import { useCounterStore } from "@/stores/login";
// 创建实例
const instance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 100 * 100,
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  if (localStorage.getItem('userinfo')){
    const  {userinfo: {token}} = JSON.parse(localStorage.getItem('userinfo'))
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  
  // console.log(token)
   
    // 在发送请求之前做些什么
    return config;
  }, function (error) {

    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
      type: 'warning',
      message: error.response?.data.message
    })
    if (error.request?.status == 401){
      useCounterStore().clearUserInfo()
    }

    return Promise.reject(error);
});
export default instance;
