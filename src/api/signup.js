import http from '@/api/http';


export function signup(id, password, email, school_email) {
  return http.post('/signup', {
    id,
    password,
    email,
    school_email
  });
}