import http from '@/api/http';


export function lectureBookmark(lecture_list) {
  return http.post('/lecture/bookmark', {
    lecture_list
  });
}