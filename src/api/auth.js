import http from '@/api/http';

export function login(id, password) {
  return http.post('/login', {
    id,
    password
  });
}