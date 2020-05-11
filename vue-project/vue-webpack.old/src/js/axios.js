import axios from 'axios';

// axios.defaults.baseURL = process.env.baseApi;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.interceptors.request.use(function (config) {
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.code === 200) {
    return res.data;
  } else {
    return Promise.reject(res);
  }
}, function (error) {
  console.log(error);
  return Promise.reject(error);
});
export default axios;