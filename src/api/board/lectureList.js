import http from '@/api/http';


export function lectureList() {
  return http.get('/lecture/', {
  });
}