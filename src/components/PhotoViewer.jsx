import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";
import "../style/global.css";

const PhotoViewer = React.memo(({ title, imageSrc, onClose }) => {
    const nodeRef = useRef(null);
    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window" style={{ width: '1000px', maxHeight: '90vh', position: 'absolute', top: '5%', left: '20%', zIndex: 1000 }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={handleClose}></button>
                    </div>
                </div>  
                <div className="window-body" style={{ overflow: 'auto', maxHeight: 'calc(90vh - 40px)' }}>
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        decoding="async"
                    />
                </div>
            </div>  
        </Draggable>
    );
});

export default PhotoViewer;