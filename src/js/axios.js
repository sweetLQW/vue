import axios from 'axios';
axios.defaults.baseURL = 'http://example';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axios;