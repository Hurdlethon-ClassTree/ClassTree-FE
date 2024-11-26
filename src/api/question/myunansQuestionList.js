import http from '@/api/http';

export function myunansQuestionList() {
    return http.get('/favorite/', {
    });
}