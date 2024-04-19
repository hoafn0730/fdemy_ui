import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';

function Image({ src, alt, className, fallback = images.noImage, ...props }, ref) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return <img ref={ref} className={className} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
