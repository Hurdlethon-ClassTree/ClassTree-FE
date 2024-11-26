import http from '@/api/http';

export function preferQuestionList() {
    return http.get('/favorite/', {
    });
}