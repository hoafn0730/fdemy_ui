import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import parse from 'html-react-parser';
import MarkdownIt from 'markdown-it';
import markdownItIns from 'markdown-it-ins';
// import hljs from 'highlight.js';

import styles from './MarkdownParser.module.scss';

const cx = classnames.bind(styles);

function MarkdownParser({ content, style, className }) {
    const mdParser = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        langPrefix: 'language-js',
        highlight: function (str, lang) {
            return `<pre class="language-js"><code class="language-js">${mdParser.utils.escapeHtml(str)}</code></pre>`;
        },
    }).use(markdownItIns);

    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
            style={style}
        >
            {parse(mdParser.render(content))}
        </div>
    );
}

MarkdownParser.propTypes = {
    content: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default MarkdownParser;
