/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from 'react';

export const Photo = forwardRef(({ url, index, faded, style, ...props }, ref) => {

    const inlineStyles = {
        opacity: faded ? '0.2' : '1',
        transformOrigin: '0 0',
        height: index === 0 ? 410 : 200,
        gridRowStart: index === 0 ? 'span 2' : null,
        gridColumnStart: index === 0 ? 'span 2' : null,
        backgroundImage: `url("${url}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'white',
        ...style,
    };

    return (
        <div ref={ref} style={inlineStyles} {...props}>
            <div className='photo'></div>
        </div>
    );
});
