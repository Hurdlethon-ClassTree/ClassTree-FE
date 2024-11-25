import http from '@/api/http';


export function editUserInfo(nickname, email) {
  return http.put('/user', {
    nickname,
    email
  });
}