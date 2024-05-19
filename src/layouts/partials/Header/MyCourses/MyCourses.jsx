import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './MyCourses.module.scss';
import PopperWrapper from '~/components/Popper';
import HeaderPopper from '~/components/Popper/Header';
import MyCourseItem from './MyCourseItem';
import * as courseService from '~/services/courseService';

const cx = classnames.bind(styles);

function MyCourses({ children, isShow, onHide }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        if (isShow) {
            courseService.getRegisteredCourses().then((res) => setCourses(res));
        }
    }, [isShow]);

    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[118, 10]}
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <PopperWrapper
                            className={cx('wrapper')}
                            position={{ top: '-16px', right: '154px' }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <HeaderPopper title={'My Courses'} titleBtn={'View all'} to={'/courses'} />
                            <div className={cx('content')}>
                                {courses.map((course) => (
                                    <MyCourseItem
                                        key={course.id}
                                        title={course.title}
                                        image={course.image}
                                        to={'/courses/' + course.slug}
                                        process={course.userProcess}
                                        createdAt={course.createdAt}
                                    />
                                ))}
                            </div>
                        </PopperWrapper>
                    );
                }}
                onClickOutside={onHide}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

MyCourses.propTypes = {
    children: PropTypes.node.isRequired,
    isShow: PropTypes.bool,
    onHide: PropTypes.func,
};

export default MyCourses;
