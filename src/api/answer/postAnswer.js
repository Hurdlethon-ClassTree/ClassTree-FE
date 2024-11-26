import http from '@/api/http';


export function postAnswer(question_id, content) {
  return http.post(`/question/${question_id}/answer/`, {
    content
  });
}