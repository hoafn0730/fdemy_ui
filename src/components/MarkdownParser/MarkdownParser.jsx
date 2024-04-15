import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './MarkdownParser.module.scss';

const cx = classnames.bind(styles);

function MarkdownParser({ content, style }) {
    return (
        <div className={cx('wrapper')} style={style}>
            {content}
        </div>
    );
}

MarkdownParser.propTypes = {
    content: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default MarkdownParser;
