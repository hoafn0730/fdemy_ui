import { forwardRef, useState } from 'react';

import images from '~/assets/images';

function Image({ src, alt, className, _fallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(_fallback);
    };

    return <img ref={ref} className={className} src={fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
