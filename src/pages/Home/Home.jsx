import classnames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Home.module.scss';
import Button from '~/components/Button';
import IndexModule from '~/components/index-module';
import SearchContext from '~/contexts/searchContext';

const cx = classnames.bind(styles);

function Home() {
    const { todoList, addTodoItem } = useContext(SearchContext);
    console.log('🚀 ~ Home ~ todoList:', todoList);

    const handleClick = () => {
        addTodoItem('task 1');
    };
    return (
        <IndexModule className={cx('grid', 'wide')}>
            <IndexModule className={cx('row')}>
                <IndexModule className={cx('col', 'l-4')}>
                    <h1>Home page</h1>
                    <Button text onClick={handleClick}>
                        Click me!
                    </Button>
                </IndexModule>
                <IndexModule className={cx('col', 'l-8')}>{todoList}</IndexModule>
            </IndexModule>
        </IndexModule>
    );
}

export default Home;
