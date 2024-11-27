import http from '@/api/http';


export function signup(username, password, email, school_email, nickname, student_number, major) {
  return http.post('/signup/', {
    username : username,
    password : password,
    email : email,
    school_email : school_email,
    nickname : nickname,
    student_number : student_number,
    major : major
  });
}