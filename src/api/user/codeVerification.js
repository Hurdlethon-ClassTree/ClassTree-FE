import http from '@/api/http';


export function codeVerification(verification_code) {
  return http.post('/signup/verify/', {
    verification_code
  });
}