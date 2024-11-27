import http from '@/api/http';


export function postQuestion(lecture_id, title, content, point, anonymous) {
  return http.post(`/question`, {
    lecture_id,
    title,
    content,
    point,
    anonymous
  });
}