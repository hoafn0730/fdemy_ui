import classnames from 'classnames/bind';

import styles from './Quiz.module.scss';
import Heading from '~/components/Heading';
import MarkdownParser from '~/components/MarkdownParser';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Quiz() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Heading title="Ưu điểm của SPA" updatedAt="Cập nhật tháng 6 năm 2022" />
                <div className={cx('desc')}>
                    <MarkdownParser
                        content={'Ưu điểm của SPA là gì? Chọn câu trả lời đúng.'}
                        style={{ '--font-size': '1.6rem', '--line-height': 2 }}
                    />
                </div>

                <div className={cx('content')}>
                    <div className={cx('answer')}>Answer1</div>
                    <div className={cx('answer')}>Answer2</div>
                    <div className={cx('answer')}>Answer3</div>
                </div>

                <div className={cx('footer')}>
                    <Button rounded primary className={cx('submit')}>
                        Reply
                    </Button>
                </div>

                <div className={cx('explanation')}>
                    <h2>Explanation</h2>
                    <MarkdownParser
                        content={
                            'Thời gian phát triển ứng dụng nhanh hay chậm còn tùy thuộc vào độ lớn của dự án và đội ngũ phát triển.'
                        }
                        style={{ '--font-size': '1.6rem', '--line-height': 2 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Quiz;
