import http from '@/api/http';


export function editUserInfo(user) {
  return http.put('/mypage/', user);
}