import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { faAngleLeft, faAngleRight, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ActionBar.module.scss';
import Button from '../Button';

const cx = classnames.bind(styles);

function ActionBar({ isShowTracks, onChangeShow }) {
    return (
        <div className={cx('wrapper')}>
            <Button className={cx('btn')} disabled leftIcon={<FontAwesomeIcon icon={faAngleLeft} />}>
                Previous
            </Button>
            <Button className={cx('btn')} outline rightIcon={<FontAwesomeIcon icon={faAngleRight} />}>
                Next
            </Button>
            <div className={cx('toggle-wrap')}>
                <h3 className={cx('track-title')}>Track List</h3>
                <button className={cx('toggle-btn')} onClick={onChangeShow}>
                    {isShowTracks ? <FontAwesomeIcon icon={faArrowRight} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
        </div>
    );
}

ActionBar.propTypes = {
    isShowTracks: PropTypes.bool,
    onChangeShow: PropTypes.func,
};

export default ActionBar;
