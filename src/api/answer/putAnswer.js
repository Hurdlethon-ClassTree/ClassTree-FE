import http from '@/api/http';


export function putAnswer(answer_id, content) {
  return http.put(`/answer/${answer_id}`, {
    content
  });
}