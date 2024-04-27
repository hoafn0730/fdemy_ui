import classnames from 'classnames/bind';

import styles from './Checkout.module.scss';
import Card from './Card';
import Heading from '~/components/Heading';
import IndexModule from '~/components/IndexModule';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Checkout() {
    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <Heading className={cx('header')} title="Checkout" />
                <div className={cx('body')}>
                    <IndexModule className={cx('row')}>
                        <IndexModule className={cx('col', 'l-7')}>
                            <h3 className={cx('header')}>Saved card:</h3>
                            <div className={cx('checkoutOption')}>
                                <Card isChecked={true} title={'**** **** **** 3193'} name={'abc'} />
                                <Card isChecked={true} title={'**** **** **** 3193'} name={'abc'} />
                            </div>
                            <h3 className={cx('header')}>Thêm thông tin thẻ:</h3>
                            <form action="" method="post">
                                <div className={cx('group')}>
                                    <label className={cx('label')}>Name on card</label>
                                    <input className={cx('control')} type="text" placeholder="Name on card" />
                                </div>
                                <div className={cx('group')}>
                                    <label className={cx('label')}>Card number</label>
                                    <input className={cx('control')} type="text" placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className={cx('stripe-container')}>
                                    <div className={cx('group')}>
                                        <label className={cx('label')}>Expiry date </label>
                                        <input className={cx('control')} type="text" placeholder="MM/YY" />
                                    </div>
                                    <div className={cx('group')}>
                                        <label className={cx('label')}>CVV </label>
                                        <input className={cx('control')} type="text" placeholder="CVC" />
                                    </div>
                                </div>

                                <Button primary rounded>
                                    Thêm thẻ
                                </Button>
                            </form>
                        </IndexModule>
                        <IndexModule className={cx('col', 'l-5')}>
                            <div className={cx('summary')}>
                                <h2 className={cx('heading')}>Summary</h2>
                                <span className={cx('label')}>Course Name:</span>
                                <span className={cx('title')}>Lập Trình JavaScript Nâng Cao</span>
                                <div className={cx('coupon')}>
                                    <input
                                        className={cx('control', 'couponInput')}
                                        type="text"
                                        placeholder="Enter coupon"
                                    />
                                    <Button outline className={cx('applyBtn')}>
                                        Apply
                                    </Button>
                                </div>
                                <div className={cx('price')}>
                                    <div className={cx('originalPrice')}>
                                        <span>Original Price:</span>
                                        <span>299.000đ</span>
                                    </div>
                                    <div className={cx('divider')}></div>
                                    <div className={cx('totalPrice')}>
                                        <span>Original Price:</span>
                                        <span>299.000đ</span>
                                    </div>
                                </div>
                                <Button primary className={cx('checkoutBtn')}>
                                    Hoàn tất thanh toán
                                </Button>
                            </div>
                        </IndexModule>
                    </IndexModule>
                </div>
            </IndexModule>
        </div>
    );
}

export default Checkout;
