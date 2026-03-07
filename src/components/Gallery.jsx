import React, { useRef, useState, useMemo, useCallback } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";
import "../style/global.css";
import importImages from '../utils/imageLoader';
import "../style/gallery.css";
import PhotoViewer from './PhotoViewer';

// Memoized image component for better performance
const GalleryImage = React.memo(({ src, alt, index, onDoubleClick }) => (
    <img
        src={src}
        alt={alt}
        className="gallery-image"
        onDoubleClick={onDoubleClick}
        loading="lazy"
        decoding="async"
    />
));

const Gallery = ({ title, onClose }) => {
    const nodeRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [viewerTitle, setViewerTitle] = useState('');

    const handleClose = () => {
        if (onClose) onClose();
    };
    
    // Memoize image loading to prevent re-running on every render
    const images = useMemo(() => importImages(), []);

    // Memoize callbacks to prevent recreating on every render
    const handleImageDoubleClick = useCallback((image, location, index) => {
        setSelectedImage(image);
        setViewerTitle(`${location} - Photo ${index + 1}`);
    }, []);

    const handleViewerClose = useCallback(() => {
        setSelectedImage(null);
    }, []);
    

    //TO FUTURE ME: MAKE SURE YOU EDIT THE IMAGELOADER WHEN ADDING A NEW COLLECTION LOLOL

    return (
        <>
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window" style={{ width: '1000px', height: '80%', position: 'absolute', top: '10%', left: '10%', zIndex: 1 }}>
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
                    <p className='subheading'>Double-click on any thumbnail to open the image in a new window.</p>
                    <p className="subtitle">If you want to view the images in full-quality, right click them after opening and select "open in new tab :)" </p>


                    <div className="pittsburgh-gallery">
                        <h3 className='location'>Pittsburgh Botanical Gardens</h3>
                        <p className="subtitle">An experiment using the macro lens.</p>
                        <div className ="gallery-grid">
                            {images.pittsburgh.map((image, index) => (
                                <GalleryImage
                                    key={`pitt-${index}`}
                                    src={image}
                                    alt={`Pittsburgh ${index + 1}`}
                                    index={index}
                                    onDoubleClick={() => handleImageDoubleClick(image, 'Pittsburgh Botanical Gardens', index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="gary-gallery">
                        <h3 className='location'>City Methodist Church - Gary, IN</h3>
                        <p className="subtitle">A risky trip to an abandoned church that created some of my favorite photos.</p>
                        <div className ="gallery-grid">
                            {images.gary.map((image, index) => (
                                <GalleryImage
                                    key={`gary-${index}`}
                                    src={image}
                                    alt={`Gary ${index + 1}`}
                                    index={index}
                                    onDoubleClick={() => handleImageDoubleClick(image, 'City Methodist Church - Gary, IN', index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>  
        </Draggable>
        {selectedImage && (
            <PhotoViewer
                title={viewerTitle}
                imageSrc={selectedImage}
                onClose={handleViewerClose}
            />
        )}
        </>
    );
}

export default Gallery;