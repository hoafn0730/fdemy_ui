import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import { MessageIcon } from '~/components/Icon';
import config from '~/config';

const cx = classnames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faSeedling} />
                        <strong>hoafn.t_</strong>
                    </Link>
                </div>

                <div className={cx('body')}>
                    <Tippy content="tooltip">
                        <div>hello</div>
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Tippy
                        delay={[0, 200]}
                        interactive={true}
                        placement="bottom"
                        render={(attrs) => (
                            <span tabIndex="-1" {...attrs}>
                                123
                            </span>
                        )}
                    >
                        <Button>
                            <MessageIcon />
                        </Button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
