import httpRequest from '~/utils/httpRequest';

const chat = async (message) => {
    return httpRequest.post('/chat', {
        message,
    });
};

const history = async () => {
    return httpRequest.get('/chat/history');
};

const deleteChat = async () => {
    return httpRequest.delete('/chat');
};

export const chatService = { chat, history, deleteChat };
