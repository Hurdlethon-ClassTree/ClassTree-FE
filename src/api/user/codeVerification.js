import http from '@/api/http';


export function emailVerification(verification_code) {
  return http.post('/signup/verify', {
    verification_code
  });
}