import http from '@/api/http';


export function myAnswer() {
  return http.get('/mypage/answer', {
  });
}