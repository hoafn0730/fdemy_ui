import classnames from 'classnames/bind';

import styles from './Home.module.scss';
import Button from '~/components/Button';
import IndexModule from '~/components/index-module';

const cx = classnames.bind(styles);

function Home() {
    return (
        <IndexModule className={cx('grid', 'wide')}>
            <IndexModule className={cx('row')}>
                <IndexModule className={cx('col', 'l-4')}>
                    <h1>Home page</h1>
                    <Button text>Click me!</Button>
                </IndexModule>
                <IndexModule className={cx('col', 'l-8')}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem earum harum neque dolores
                    possimus animi repudiandae ut. Beatae in qui earum non nisi pariatur eum fuga saepe aliquam quas?
                </IndexModule>
            </IndexModule>
        </IndexModule>
    );
}

export default Home;
