import http from '@/api/http';


export function myQuestion() {
  return http.get('/mypage/question', {
  });
}