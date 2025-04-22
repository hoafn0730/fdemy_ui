// Import các thư viện và module cần thiết
import React, { useState, useEffect, useRef } from 'react';
import './AIchat.scss'; // Import file CSS cho giao diện
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Thư viện icon
import { faPaperPlane, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'; // Các icon cần dùng
import { chatService } from '~/services/chatService'; // Dịch vụ để gọi API chat
import MarkdownParser from '~/components/MarkdownParser'; // Component để hiển thị nội dung Markdown
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '~/store/actions/modalAction';

const USER_QUESTIONS = [
    'Mình nên bắt đầu học lập trình từ Frontend hay Backend?',
    'Hiện tại mình chưa rõ HTML, CSS, JavaScript là gì – mình nên bắt đầu từ đâu?',
    'Bạn có thể gợi ý cho mình khóa học nào phù hợp để bắt đầu không?',
    'Có khóa học nào miễn phí không? Hay bạn gợi ý giúp khóa chuyên sâu trả phí cũng được!',
    'Mình muốn xem lộ trình học Frontend hoặc Backend, bạn có thể gửi không?',
];

const Message = () => {
    const dispatch = useDispatch();
    // State quản lý danh sách tin nhắn
    const [chats, setChats] = useState([]);

    // State quản lý tin nhắn người dùng nhập
    const [userMessage, setUserMessage] = useState('');

    // State quản lý trạng thái loading khi gửi tin nhắn
    const [isLoading, setIsLoading] = useState(false);

    // State quản lý hiển thị gợi ý
    const [showSuggestions, setShowSuggestions] = useState(true);
    const userInfo = useSelector((state) => state.user.userInfo);

    // Ref để tự động cuộn xuống cuối danh sách tin nhắn
    const chatListRef = useRef(null);

    // Lấy lịch sử tin nhắn khi component được mount
    useEffect(() => {
        (async () => {
            await chatService
                .history('Nếu tôi bị ho cần điều trị như thế nào để tình hình sức khỏe được cải thiện tốt hơn?')
                .then((res) => setChats(res.messages || []))
                .catch((err) => console.log(err));
        })();
    }, []);

    // Tự động cuộn xuống cuối danh sách tin nhắn khi có tin nhắn mới
    useEffect(() => {
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [chats, isLoading]);

    // Hàm xử lý gửi tin nhắn đến AI
    const handleSendMessage = async (message) => {
        if (!message.trim()) return; // Không gửi nếu tin nhắn rỗng
        setUserMessage(''); // Xóa nội dung input
        if (!userInfo) {
            return dispatch(openModal());
        }

        setIsLoading(true); // Bật trạng thái loading

        setShowSuggestions(false); // Ẩn gợi ý
        setChats((prevChats) => [...prevChats, { text: message, sender: 'user', createdAt: new Date() }]); // Thêm tin nhắn người dùng vào danh sách

        try {
            const res = await chatService.chat(message); // Gửi tin nhắn đến API

            if (res.error) {
                setChats((prevChats) => [
                    ...prevChats,
                    { text: 'Không thể phản hồi, vui lòng thử lại sau.', sender: 'bot' },
                ]);
            }

            // Thêm phản hồi từ AI vào danh sách tin nhắn
            setChats((prevChats) => [...prevChats, res.reply]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            // Thêm tin nhắn lỗi nếu không nhận được phản hồi từ AI
            setChats((prevChats) => [
                ...prevChats,
                { text: 'Không thể phản hồi, vui lòng thử lại sau.', sender: 'bot' },
            ]);
        } finally {
            setIsLoading(false); // Tắt trạng thái loading
        }
    };

    // Hàm xử lý khi người dùng nhấn vào gợi ý
    const handleSuggestionClick = (text) => {
        setUserMessage(text); // Đặt nội dung gợi ý vào input
        handleSendMessage(text); // Gửi tin nhắn
    };

    // Hàm xử lý khi người dùng submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn reload trang
        handleSendMessage(userMessage); // Gửi tin nhắn
    };

    // Hàm định dạng thời gian hiển thị
    const formatTimestamp = (time) => {
        const timestamp = new Date(time || new Date());
        return `${timestamp.getHours()}:${String(timestamp.getMinutes()).padStart(2, '0')}`; // Trả về giờ:phút
    };

    // Hàm xóa toàn bộ lịch sử chat với xác nhận
    const deleteAllChats = () => {
        if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử chat?')) {
            chatService.deleteChat(); // Gọi API xóa lịch sử
            setShowSuggestions(true); // Hiển thị lại gợi ý
            setChats([]); // Xóa danh sách tin nhắn
        }
    };

    return (
        <div id="ai-chat" className={'dark-theme'}>
            <div className="ai-all">
                {/* Header của giao diện */}
                <div className="ai-header">
                    <h2>AI Assistant</h2>
                </div>

                {/* Gợi ý câu hỏi */}
                {showSuggestions && chats.length === 0 && (
                    <div className="ai-suggestion-container">
                        <h3 className="ai-suggestion-heading">Bạn có thể hỏi tôi về</h3>
                        <ul className="ai-suggestion-list">
                            {USER_QUESTIONS.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="ai-suggestion"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    <h4 className="ai-text">{suggestion}</h4>
                                    <span className="ai-icon material-symbols-rounded">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Danh sách tin nhắn */}
                <div className="ai-chat-list" ref={chatListRef}>
                    <div className="ai-chat-grid">
                        {chats.map((chat, index) => (
                            <div
                                key={index}
                                className={`ai-message ${chat.sender === 'user' ? 'outgoing' : 'incoming'} ${
                                    chat.isError ? 'error' : ''
                                }`}
                            >
                                <div className="ai-message-content">
                                    {/* Avatar của người gửi */}
                                    <img
                                        className="ai-avatar"
                                        src={
                                            chat.sender === 'user'
                                                ? 'https://img.icons8.com/?size=100&id=ScJCfhkd77yD&format=png&color=000000'
                                                : 'https://img.icons8.com/?size=100&id=kTuxVYRKeKEY&format=png&color=000000'
                                        }
                                        alt={chat.sender === 'user' ? 'User avatar' : 'AI avatar'}
                                    />
                                    <div className="ai-message-bubble">
                                        {/* Nội dung tin nhắn */}
                                        <p className="ai-text">
                                            <MarkdownParser content={chat.text || ''} className="text-color" />{' '}
                                        </p>
                                        {/* Thời gian gửi tin nhắn */}
                                        <span className="ai-message-time">{formatTimestamp(chat.createdAt)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Hiển thị trạng thái đang gõ khi loading */}
                        {isLoading && (
                            <div className="ai-message incoming loading">
                                <div className="ai-message-content">
                                    <img
                                        className="ai-avatar"
                                        src="https://img.icons8.com/?size=100&id=kTuxVYRKeKEY&format=png&color=000000"
                                        alt="AI avatar"
                                    />
                                    <div className="ai-message-bubble">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Khu vực nhập tin nhắn */}
                <div className="ai-typing-area">
                    <form className="ai-typing-form" onSubmit={handleSubmit}>
                        <div className="ai-input-wrapper">
                            <input
                                type="text"
                                placeholder="Nhập câu hỏi của bạn tại đây..."
                                className="ai-typing-input"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                id="send-ai-message-button"
                                className="ai-icon material-symbols-rounded"
                                disabled={isLoading}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                        <div className="ai-action-buttons">
                            <span
                                id="delete-ai-chat-button"
                                className="ai-icon material-symbols-rounded"
                                onClick={deleteAllChats}
                                title="Delete all chats"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        </div>
                    </form>
                    {chats.length > 0 && (
                        <p className="ai-disclaimer-text">
                            Trả lời có thể không chính xác tuyệt đối. Vui lòng tham khảo ý kiến chuyên gia.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;
