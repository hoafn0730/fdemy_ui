import classnames from 'classnames/bind';

import styles from './RoadMap.module.scss';
import LearningPath from './LearningPath';
import Heading from '~/components/Heading';

const cx = classnames.bind(styles);

function RoadMap() {
    return (
        <div className={cx('wrapper')}>
            <Heading
                title="Road Map"
                desc={`Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí
                    "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".`}
            />
            <div className={cx('body')}>
                <div className={cx('learningPath')}>
                    <LearningPath
                        title={'Lộ trình học Front-end'}
                        slug={'lo-trinh-hoc-front-end'}
                        desc={`Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.`}
                        image={'https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png'}
                    />
                    <LearningPath
                        title={'Lộ trình học Front-end'}
                        slug={'lo-trinh-hoc-front-end'}
                        desc={`Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.`}
                        image={'https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png'}
                    />
                    <LearningPath
                        title={'Lộ trình học Front-end'}
                        slug={'lo-trinh-hoc-front-end'}
                        desc={`Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.`}
                        image={'https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png'}
                    />
                </div>
            </div>
        </div>
    );
}

export default RoadMap;
