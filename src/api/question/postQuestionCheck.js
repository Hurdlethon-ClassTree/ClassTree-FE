import http from '@/api/http';

export function postQuestionCheck(question_id, answer_id) {
    return http.post(`/question/${question_id}/checked`, {
        answer_id
    });
}