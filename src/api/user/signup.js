import http from '@/api/http';


export function signup(username, password, email, school_email, nickname, student_number, major) {
  return http.post('/signup', {
    username,
    password,
    email,
    school_email,
    nickname,
    student_number,
    major
  });
}