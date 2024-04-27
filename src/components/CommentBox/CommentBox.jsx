import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CommentBox.module.scss';
import Avatar from '../Avatar';
import Button from '../Button';

const cx = classnames.bind(styles);

function CommentBox() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatarWrap')}>
                <Link to={'/'}>
                    <Avatar
                        src="https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj"
                        style={{ '--font-size': '0.4rem' }}
                    />
                </Link>
            </div>
            <div className={cx('commentContent')}>
                <input className={cx('input')} type="text" placeholder="Bạn có thắc mắc gì trong bài học này?" />
                <div className={cx('actions')}>
                    <Button outline rounded className={cx('btn')}>
                        Hủy
                    </Button>
                    <Button primary rounded className={cx('btn', 'ok')}>
                        Bình luận
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
