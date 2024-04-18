import classnames from 'classnames/bind';

import styles from './LearningPathGroup.module.scss';
import CourseItem from '~/components/CourseItem';

const cx = classnames.bind(styles);

function LearningPathGroup({ title, desc, items }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <p className={cx('desc')}>{desc}</p>
            <div className={cx('body')}>
                {items.map((item, index) => (
                    <CourseItem
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        linkTo={item.linkTo}
                        image={item.image}
                        isDetail
                    />
                ))}
            </div>
        </div>
    );
}

export default LearningPathGroup;
