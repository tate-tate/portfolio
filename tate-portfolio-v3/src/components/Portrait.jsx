import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";

const Portrait = ({ title, src, alt, onClose }) => {
    const nodeRef = useRef(null);

    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window" style={{ width: '400px', position: 'absolute', top: '10%', left: '25%' }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={handleClose}></button>
                    </div>
                </div>  
                <div className="window-body">
                    <img src={src} alt={alt} style={{ width: '100%' }} />
                </div>
            </div>
        </Draggable>
    );
}

export default Portrait;