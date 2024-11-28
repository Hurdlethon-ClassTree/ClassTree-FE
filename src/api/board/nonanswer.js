import http from '@/api/http';


export function nonanswer() {
  return http.get(`/noanswer/`, {
  });
}