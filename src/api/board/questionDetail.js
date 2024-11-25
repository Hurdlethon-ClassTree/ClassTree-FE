import http from '@/api/http';


export function questionDetail(question_id) {
  return http.get(`/question/${question_id}`, {
  });
}