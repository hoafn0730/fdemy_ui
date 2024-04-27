import classnames from 'classnames/bind';

import styles from './Comment.module.scss';
import CommentItem from './CommentItem';

const cx = classnames.bind(styles);

function ReplyComment() {
    return (
        <div className={cx('replyWrap')}>
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    );
}

export default ReplyComment;
