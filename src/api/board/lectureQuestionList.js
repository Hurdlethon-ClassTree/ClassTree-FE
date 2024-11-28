import http from '@/api/http';


export function lectureQuestionList(lectureId) {
  return http.get(`/lecture/${lectureId}/`, {
  });
}