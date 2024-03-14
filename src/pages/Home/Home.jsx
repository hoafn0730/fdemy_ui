import classnames from 'classnames/bind';
import { useContext, useRef, useState } from 'react';

import styles from './Home.module.scss';
import Button from '~/components/Button';
import IndexModule from '~/components/index-module';
import { addTodoItem, removeTodoItem } from '~/store/action/searchAction';
import { useSearchContext } from '~/contexts/searchContext';
import ThemeContext from '~/contexts/themeContext';

const cx = classnames.bind(styles);

function Home() {
    const [inputValue, setInputValue] = useState('');
    const ref = useRef(0);
    const inputRef = useRef();
    const {
        state: { todoList, isLoading },
        dispatch,
    } = useSearchContext();

    const {
        state: { isDarkMode },
    } = useContext(ThemeContext);

    const handleClick = () => {
        if (inputValue) {
            dispatch(addTodoItem({ id: ref.current++, title: inputValue }));
            setInputValue('');
            inputRef.current.focus();
        }
    };

    const handleDelete = (index) => {
        dispatch(removeTodoItem({ id: index }));
    };

    return (
        <IndexModule className={cx('grid', 'wide')}>
            <IndexModule className={cx('row')}>
                <IndexModule className={cx('col', 'l-4')}>
                    <h1>Home page</h1>
                    <input
                        ref={inputRef}
                        style={{ border: '1px solid #000' }}
                        value={inputValue}
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button text onClick={handleClick}>
                        Click me!
                    </Button>

                    <Button>{isDarkMode ? 'dark' : 'light'}</Button>
                </IndexModule>
                <IndexModule className={cx('col', 'l-8')}>
                    {isLoading ? (
                        <span>Loading...</span>
                    ) : (
                        <ol>
                            {todoList.map((item) => (
                                <li key={item.id}>
                                    {item.title}{' '}
                                    <span style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.id)}>
                                        &times;
                                    </span>
                                </li>
                            ))}
                        </ol>
                    )}
                </IndexModule>
            </IndexModule>
        </IndexModule>
    );
}

export default Home;
