import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";
import "../style/global.css";

const InfoText = ({ title, onClose }) => {
    const nodeRef = useRef(null);

    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window" style={{ width: '600px', position: 'absolute', top: '10%', left: '55%' }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={handleClose}></button>
                    </div>
                </div>  
                <div className="window-body">
                    <h1 className="h1">Hello.</h1>
                    <h2 className="h2">I'm Tate Sever.</h2>
                    <h3 className="h3">I'm a Data Visualization and Full Stack Web Developer.</h3>
                </div>
            </div>  
        </Draggable>
    );
}

export default InfoText;