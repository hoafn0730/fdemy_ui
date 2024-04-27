import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Comment.module.scss';
import Avatar from '../Avatar';
import MarkdownParser from '../MarkdownParser';

const cx = classnames.bind(styles);

function CommentItem() {
    return (
        <div
            className={cx('item', {
                replyCommentWrap: true,
            })}
        >
            <div className={cx('avatarWrap')}>
                <Link to={'/'}>
                    <Avatar
                        src="https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj"
                        style={{ '--font-size': '0.4rem' }}
                    />
                </Link>
            </div>
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <div className={cx('commentContent')}>
                        <div className={cx('commentContentHeading')}>
                            <Link to={'/'}>
                                <span className={cx('commentAuthor')}>Hoafn0730</span>
                            </Link>
                        </div>
                        <div className={cx('commentText')}>
                            <MarkdownParser
                                content={
                                    'em học khóa js được gần hết và có bỏ ngang,giờ muốn học luôn react js thì có được không ạ mọi người,liệu có khó hiểu k ạ'
                                }
                                style={{ '--font-size': '1.4rem', '--line-height': 2 }}
                            />
                        </div>
                    </div>
                    <div className={cx('commentReact')}>
                        <span className={cx('likeComment')}>Thích</span>
                        <span className={cx('replyComment')}>Trả lời</span>
                        <span className={cx('createdAt')}>~ 8 tháng trước</span>
                        <span className={cx('moreBtn')}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                    </div>
                </div>
                <div className={cx('viewRepliesMore')}>
                    <span className={cx('showHideComment')}>Xem 1 câu trả lời</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
