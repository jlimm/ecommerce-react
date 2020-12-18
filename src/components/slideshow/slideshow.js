import React from 'react';
import './slideshow.scss';

const SlideShow = () => (
    <div className="slideshow-wrapper">
        <ol className="slideshow-pagedots">
            <li className="dot active"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
        </ol>
    </div>
)

export default SlideShow;