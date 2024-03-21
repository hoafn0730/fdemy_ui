import classnames from 'classnames/bind';

import styles from './Home.module.scss';
import IndexModule from '~/components/index-module';
import Slideshow from '~/components/Slideshow';

const cx = classnames.bind(styles);

function Home() {
    return (
        <IndexModule className={cx('grid', 'wide')}>
            <div className={cx('slideshow')}>
                <Slideshow />
            </div>
        </IndexModule>
    );
}

export default Home;
