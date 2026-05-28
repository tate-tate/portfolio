import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";
import "../style/global.css";
import AlertImage from '../assets/ui/Alert.png';
//import "../assets/ui/Alert.png";

const Disclaimer = ({ title, onClose }) => {
    const nodeRef = useRef(null);

    const handleClose = () => {
        if (onClose) onClose();
    };

    const AlertIcon = () => (
        <div className='alert-icon' style={{ display: 'flex', justifyContent: 'left' }}>
            <img src={AlertImage} alt="Alert" width="100" height="100" />
        </div>
    );
    return (
        
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window" style={{ width: '600px', height: '350px',position: 'absolute', top: '20%', left: '30%' }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={handleClose}></button>
                    </div>
                </div>  
                <div className="window-body" style={{ height: '90%', overflowY: 'scroll', paddingRight: '5px', paddingLeft: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <AlertIcon />
                        <h2 className='h2'>Heads Up! This Site Is Under Construction.</h2>
                    </div>
                    <h3>Current Issues:</h3>
                    <ul>
                        <li>Site is not yet optimized for mobile devices. Best Viewed on Desktop.</li>
                        <li>Thumbnails in gallery are slow to load and lag the site. Replacing with proper thumbnails soon.</li>
                        <li>The minimize button does nothing! Working on logic to implement it into bottom navigation bar.</li>
                        <li>General styling quirks. Work in progress!</li>
                    </ul>
                </div>
            </div>  
        </Draggable>
    );
}

export default Disclaimer;
