import http from '@/api/http';


export function codeVerification(school_email, verification_code) {
  return http.post('/signup/verify/', {
    school_email,
    verification_code
  });
}