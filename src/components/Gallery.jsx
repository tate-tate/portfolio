import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";
import "../style/global.css";
import importImages from '../utils/imageLoader';
import "../style/gallery.css";


const Gallery = ({ title, onClose }) => {
    const nodeRef = useRef(null);

    const handleClose = () => {
        if (onClose) onClose();
    };
    
    const images = importImages();

        const handleItemClick = (itemId) => {
        if (galleryItemClick) galleryItemClick(itemId);
    };

    return (
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window" style={{ width: '1000px', height: '80%', position: 'absolute', top: '10%', left: '10%',}}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={handleClose}></button>
                    </div>
                </div>  
                <div className="window-body" style={{ height: '95%', overflowY: 'scroll', paddingRight: '10px', paddingLeft: '10px' }}>
                    <h1 className="gallery-h1">Photo Gallery</h1>
                    <p className='subheading'>Click on any thumbnail to open the image in a new window.</p>
                    <div className="pittsburgh-gallery">
                        <h3 className='location'>Pittsburgh Botanical Gardens</h3>
                        <p className="subtitle">An experiment using the macro lens.</p>
                        <div className ="gallery-grid">
                            {images.map((img, index) => (
                                    <img src={img} alt={`Gallery Image ${index + 1}`} className="gallery-thumbnail" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>  
        </Draggable>
    );
}

export default Gallery;