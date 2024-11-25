import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  //baseURL: process.env.VUE_APP_API
  baseURL: "https://8a7c11c3-fbcb-4cf8-8f94-d099002a42cc.mock.pstmn.io"
});

instance.interceptors.request.use(function (config) {
  if (store.state.auth.token !== null) {
    config['headers'] = {
      Authorization: `Bearer ${store.state.auth.token}`
    };
  }

  return config;
});

export default instance;