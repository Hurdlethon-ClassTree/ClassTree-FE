import axios from 'axios';
import store from '@/store';


function getCsrfToken() {
  const csrfCookie = document.cookie.split('; ').find(row => row.startsWith('csrftoken='));
  return csrfCookie ? csrfCookie.split('=')[1] : null;
}

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true
});

// 요청에 CSRF 토큰 자동 추가
instance.interceptors.request.use((config) => {
  const csrfToken = getCsrfToken();
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;