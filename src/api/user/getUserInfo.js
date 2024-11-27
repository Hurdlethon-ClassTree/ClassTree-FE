import http from '@/api/http';


export function getInfo() {
  return http.get('/mypage/', {
  });
}