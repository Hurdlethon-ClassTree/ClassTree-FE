import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: "localhost:8000"
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