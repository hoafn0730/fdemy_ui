import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import parse from 'html-react-parser';

import styles from './MarkdownParser.module.scss';

const cx = classnames.bind(styles);

function MarkdownParser({ content, style, className }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
            style={style}
        >
            {parse(content)}
        </div>
    );
}

MarkdownParser.propTypes = {
    content: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default MarkdownParser;
