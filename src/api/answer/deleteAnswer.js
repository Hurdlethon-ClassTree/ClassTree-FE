import http from '@/api/http';


export function deleteAnswer(answer_id) {
  return http.delete(`/answer/${answer_id}`, {
  });
}