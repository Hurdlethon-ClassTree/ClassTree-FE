import http from '@/api/http';

export function login(username, password) {
  return http.post('/login/', {
    username,
    password
  });
}