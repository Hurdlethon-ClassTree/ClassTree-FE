import http from '@/api/http';


export function curious(question_id) {
  return http.get(`/question/${question_id}/curious/`, {
  });
}