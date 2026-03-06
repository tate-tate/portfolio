import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";

const AboutMe = ({ title, onClose }) => {
    const nodeRef = useRef(null);

    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window" style={{ width: '600px', position: 'absolute', top: '30%', left: '35%' }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={handleClose}></button>
                    </div>
                </div>  
                <div className="window-body">
                    <h2>Thank you for visiting my site.</h2>
                    <p>I graduate from Purdue University in May 2026. I am obtaining a B.S. in both Web Programming & Design, & Data Visualization. Minoring in Information Technology.</p>
                    <p><b>My Development Toolkit: </b>Python, SQL, HTML/CSS, Bootstrap 5, PHP, JavaScript, D3, React, ASP.NET</p>
                    <p><b>My Softwares, Tools, Methodologies: </b>Tableau, Microsoft Power BI, Adobe Software Suite, Microsoft 365 Suite, Visual Paradigm, Google SketchUp, Google Software Suite, Visual Studio, UML, SCRUM</p>
                    <br />
                    <p><b>Site Credits: </b></p>
                    <ul>
                        <li><p>Adam Hammad, Jordan Scales for <a href="https://github.com/botoxparty/XP.css/blob/main/LICENSE">XP.css</a>, a styling framework</p></li>
                        <li><p>MarchMountain for <a href="https://www.deviantart.com/marchmountain/art/Windows-XP-High-Resolution-Icon-Pack-916042853">Icons </a></p></li>
                        <li><p>Luis Chagas for <a href="https://github.com/luiz-chagas/react-windows-xp">React Windows XP</a>, a component library for Windows XP-like components</p></li>
                    </ul>
                    
                </div>
            </div>  
        </Draggable>
    );
}

export default AboutMe;