import classnames from 'classnames/bind';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './Checkout.module.scss';
import Heading from '~/components/Heading';
import IndexModule from '~/components/IndexModule';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import Image from '~/components/Image';
import formatPrice from '~/utils/formatPrice';
import * as courseService from '~/services/courseService';
import * as couponService from '~/services/couponService';
import { createInvoice } from '~/services/invoiceService';

const cx = classnames.bind(styles);
const cardInfo = {
    nameOnCard: 'Trần Đình Hoàn',
    cardNumber: '1234 5678 9012 3193',
    expiryDate: '02/06/2024 17:59:40',
    cvv: '123',
};

function Checkout() {
    const { state } = useLocation();
    const [course, setCourse] = useState();
    const [discount, setDiscount] = useState(0);
    const [data, setData] = useState({ ...cardInfo });
    const { userInfo } = useSelector((state) => state.user);
    const { slug } = useParams();
    const couponInputRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        courseService.getCourseBySlug(slug).then((res) => {
            setCourse(res.course);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applyCouponCode = () => {
        const couponCode = couponInputRef.current.value;
        if (couponCode) {
            couponService
                .getCouponByCode(couponCode)
                .then((res) => {
                    if (res) {
                        setDiscount(course.price * res.discount * 0.01);
                        setData((prev) => ({ ...prev, couponCode: couponCode }));
                        toast.success('Apply coupon code success!');
                    } else {
                        toast.error('Coupon is not exist!');
                        couponInputRef.current.value = '';
                    }
                })
                .catch((err) => console.log(123));
        } else {
            toast.warn('Please enter coupon code!');
        }
    };

    const handleCheckout = () => {
        const invoiceInfo = { ...data, courseId: course.id, userId: userInfo.id, total: +course?.price - discount };
        createInvoice(invoiceInfo).then((res) => {
            const resolveWithSomeData = new Promise((resolve) => {
                toast.success('Thanh toán thành công! Yêu cầu đợi hệ thống xác nhận trong vòng 24h');
                setTimeout(() => {
                    resolve();
                }, 3000);
            });

            toast.promise(resolveWithSomeData, {
                success: {
                    render() {
                        navigate('/');
                        return;
                    },
                },
            });
        });
    };

    return (
        <Modal open={!!state} size="1200px" onClose={() => navigate(-1)}>
            <div className={cx('wrapper')}>
                <IndexModule className={cx('grid')}>
                    <Heading className={cx('header')} title="Thanh toán" />
                    <div className={cx('body')}>
                        <IndexModule className={cx('row')}>
                            <IndexModule className={cx('col', 'l-7')}>
                                {/* <h3 className={cx('header')}>Course detail:</h3> */}
                                <div className={cx('info')}>
                                    <div>
                                        <Image src={course?.image} alt={course?.title} className={cx('image')} />
                                        <h3 className={cx('header')}>{course?.title}</h3>
                                    </div>

                                    <p className={cx('desc')}>{course?.description}</p>

                                    <ul className={cx('list', 'column')}>
                                        <li>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                            <span>Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                            <span>
                                                Ý thức tự học cao, trách nhiệm cao, kiên trì bền bỉ không ngại cái khó
                                            </span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                            <span>Không được nóng vội, bình tĩnh học, làm bài tập sau mỗi bài học</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                            <span>
                                                Khi học nếu có khúc mắc hãy tham gia hỏi/đáp tại group FB: Học lập trình
                                                web (fullstack.edu.vn)
                                            </span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                            <span>
                                                Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn những
                                                gì bạn cần phải biết
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </IndexModule>
                            <IndexModule className={cx('col', 'l-5')}>
                                <div className={cx('summary')}>
                                    <h2 className={cx('heading')}>Chi tiết</h2>
                                    <span className={cx('title')}>{course?.title}</span>
                                    <div className={cx('coupon')}>
                                        <input
                                            ref={couponInputRef}
                                            className={cx('control', 'couponInput')}
                                            type="text"
                                            placeholder="Enter coupon"
                                        />
                                        <Button outline className={cx('applyBtn')} onClick={applyCouponCode}>
                                            Áp dụng
                                        </Button>
                                    </div>
                                    <div className={cx('price')}>
                                        <div className={cx('originalPrice')}>
                                            <span>Giá gốc:</span>
                                            <span>{formatPrice(course?.price)}</span>
                                        </div>
                                        <div className={cx('originalPrice')}>
                                            <span>Giả giám:</span>
                                            <span>{'- ' + formatPrice(discount)}</span>
                                        </div>
                                        <div className={cx('divider')}></div>
                                        <div className={cx('totalPrice')}>
                                            <span>Thành Tiền:</span>
                                            <span>{course?.price && formatPrice(+course?.price - discount)}</span>
                                        </div>
                                    </div>
                                    <Button primary className={cx('checkoutBtn')} onClick={handleCheckout}>
                                        Hoàn tất thanh toán
                                    </Button>
                                </div>
                            </IndexModule>
                        </IndexModule>
                    </div>
                </IndexModule>
            </div>
        </Modal>
    );
}

export default Checkout;
