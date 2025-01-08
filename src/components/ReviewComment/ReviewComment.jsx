import { useState } from 'react';
import Button from '../Button';
import { LikeIcon, RankIcon, StarIcon, Unlike } from '../Icons';
import styles from './ReviewComment.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function ReviewComment() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Hàm toggle để thay đổi trạng thái
    const handleToggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={cx('reviews')}>
            <div className={cx('review-title')}>
                <StarIcon className={cx('star-icon')} />
                <span className={cx('ud-heading-xl')}>4,7 xếp hạng khóa học</span>
                <RankIcon className={cx('rank-icon')} />
                <span className={cx('ud-heading-xl')}>412K xếp hạng</span>
            </div>

            <div className={cx('review-list')}>
                <div className={cx('review-container')}>
                    <div className={cx('review-heading')}>
                        <div className={cx('review-profile')}>
                            <div className={cx('review-name-and-rating')}>
                                <p className={cx('ud-heading-md')}>Wattana S.</p>
                                <div className={cx('review--rating-container')}>
                                    <span></span>
                                    <span className={cx('review--time-since')}>1 tuần trước</span>
                                </div>
                            </div>
                            <img
                                className={cx('review-avatar')}
                                src="https://img-c.udemycdn.com/user/50x50/262805464_da88.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={cx('review-content', { expanded: isExpanded })}>
                        <span>
                            I absolutely love Dr. Angela Yu’s teaching style—she’s incredibly clear and walks through
                            every single step in a way that just makes sense. It’s like she knows exactly what questions
                            will come up before I even have to ask! Her explanations are thorough, and she breaks down
                            complex topics into simple, easy-to-follow lessons. Honestly, she’s the best instructor I’ve
                            ever learned from, and this course has been a game-changer for me. Highly recommend her to
                            anyone who wants to learn web development!
                        </span>
                    </div>

                    <Button className={cx('btn-show')} onClick={handleToggleContent}>
                        {isExpanded ? 'Thu gọn' : 'Hiện thêm'}
                    </Button>

                    <div className={cx('review-feedback')}>
                        <div className={cx('feedback-container')}>
                            <span className={cx('feedback-label')}>Bạn thấy hữu ích?</span>
                            <div className={cx('feedback-action')}>
                                <LikeIcon className={cx('like-icon')} />
                                <Unlike className={cx('unlike-icon')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewComment;
