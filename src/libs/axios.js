import axios from 'axios';
// import qs from 'qs';
axios.defaults.method = 'post';//默认post请求
axios.defaults.timeout = 10000;//默认10秒超时
//axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
/* axios.defaults.transformRequest = [function (data, headers) {
  // By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use the following options.
   return qs.stringify(data);
  return data
 }];*/
axios.defaults.validateStatus = function (status) {
  switch (status + "") {
    case '404':
      break;
    case '500':
      break;
    case '401':
      break;
    case '200':
      break;
    default:
      break;
  }
  return status >= 200 && status < 300; // default
};
axios.interceptors.request.use(function (config) {
  // 在发送请求之前显示loading
  // if(config.showLoading !== false){
  //
  // }
  return config;
}, function (error) {
  // 请求错误
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 在请求成功之后关闭loading
  // if(response.config.showLoading !== false){
  //
  // }
  if(new RegExp(/^[0]*$/g).test(response.data.respCode)){
    return response.data;
  }else{
    return Promise.reject({
      respDesc:response.data.respDesc,
      respCode:response.data.aop_code || response.data.respCode
    });
  }
}, function (error) {
  // 在请求失败之后关闭loading
  // if(response.config.showLoading !== false){
  //
  // }
  return Promise.reject(error);
});
export default axios;
