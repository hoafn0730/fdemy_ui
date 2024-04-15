import classnames from 'classnames/bind';

import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';

const cx = classnames.bind(styles);

function Header() {
    const navigate = useNavigate();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('btn-back')} onClick={() => navigate(-1)}>
                <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
            </div>
            <Link to={config.routes.home} className={cx('logo')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCode} />
                <strong>CodeLearn</strong>
            </Link>
            <div className={cx('actions')}>
                <span className={cx('process')}>30%</span>
                <span className={cx('completed-msg')}>
                    <strong>0/118 </strong>
                    bài học
                </span>
            </div>
        </header>
    );
}

export default Header;
