import classnames from 'classnames/bind';

import styles from './Comment.module.scss';
import CommentBox from '../CommentBox';
import CommentItem from './CommentItem';
import ReplyComment from './ReplyComment';

const cx = classnames.bind(styles);

function Comment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contentHeading')}>
                <h4>221 hỏi đáp</h4>
                <p className={cx('help')}>(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)</p>
            </div>
            <CommentBox />
            <CommentItem />
            <CommentItem />
            <ReplyComment />
            <CommentItem />
            <ReplyComment />
        </div>
    );
}

export default Comment;
