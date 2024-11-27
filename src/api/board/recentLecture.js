import http from '@/api/http';


export function recentLecture() {
  return http.get(`/recent/lecture`, {
  });
}