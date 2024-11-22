import http from '@/api/http';


export function postQuestion(question_id, title, content, point) {
  return http.put(`/question/${question_id}`, {
    title,
    content,
    point
  });
}