import http from '@/api/http';


export function deleteQuestion(question_id) {
  return http.delete(`/question/${question_id}`, {
  });
}