import http from '@/api/http';


export function putQuestion(question_id, title, content, point) {
  return http.put(`/question/${question_id}`, {
    title,
    content,
    point
  });
}