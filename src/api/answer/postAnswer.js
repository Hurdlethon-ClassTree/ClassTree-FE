import http from '@/api/http';


export function postAnswer(question_id, content) {
  return http.post(`/answer`, {
    question_id,
    content
  });
}