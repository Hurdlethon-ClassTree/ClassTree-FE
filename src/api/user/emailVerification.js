import http from '@/api/http';


export function emailVerification(school_email) {
  return http.post('/signup/email', {
    school_email
  });
}