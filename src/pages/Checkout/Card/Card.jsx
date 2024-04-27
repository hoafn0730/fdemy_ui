import classnames from 'classnames/bind';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Card.module.scss';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Card({ title, name, isChecked, onChange }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <input checked={isChecked} className={cx('check')} name={name} type="radio" onChange={onChange} />
                <FontAwesomeIcon className={cx('icon')} icon={faCreditCard} />
                <span className={cx('title')}>{title}</span>
            </div>
            <Button className={cx('remove-btn')}>Remove card</Button>
        </div>
    );
}

export default Card;
