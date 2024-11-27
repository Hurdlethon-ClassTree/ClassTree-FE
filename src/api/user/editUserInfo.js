import http from '@/api/http';


export function editUserInfo(nickname, email) {
  return http.put('/mypage/', {
    nickname,
    email
  });
}