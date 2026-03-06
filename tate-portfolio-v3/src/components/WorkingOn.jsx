import React, { useRef } from "react";
import Draggable from "react-draggable";
import "xp.css/dist/XP.css"; 
import "../style/workingon.css";
import codesnippet from "../assets/images/codesnippet.png";
  const WorkingOn = ({ title, onClose }) => {
      const nodeRef = useRef(null);
  
      const handleClose = () => {
          if (onClose) onClose();
      };

  return (
    <Draggable handle=".title-bar" nodeRef={nodeRef}>
        <div ref={nodeRef} className="window" style={{ width: '1200px', height: '80%', position: 'absolute', top: '10%', left: '10%',}}>
            <div className="title-bar">
                <div className="title-bar-text">Current Projects</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close" onClick={handleClose}></button>
                </div>
            </div>  
            <div className="window-body" style={{ height: '95%', overflowY: 'scroll', paddingRight: '10px', paddingLeft: '10px' }}>
                <h1 className="h1">Current Projects</h1>
                <p className="titlefooter">This page is a collection of projects I have recently completed, or am in the process of completing.</p>
                
                <ul className ="projectlist">
                    <li className="li">
                        <h2 className="h2">Javascript JSX (React+ Vite)</h2>
                        <h4 className="h3">This Site! (My Portfolio)</h4>
                        <p className="p">Admittedly, this is my third portfolio site, my second using React + Vite. My last two sites handled everything data-wise perfectly, but the styling left a lot to be desired. I had the idea to create a desktop-style site for my third portfolio - which is what you see now! </p>                 
                        <img src={codesnippet} alt="Code Snippet" style={{ width: '100%' }} />
                        <p className="p"><strong>Tools Used: </strong>Visual Studio Code, Vite + React, Javascript, CSS, HTML</p>
                        <p className="p">Currently working on (March 2026) - Too much to even list :P</p>   
                    </li>
                    <li className="li">
                        <h2 className="h2">D3 - Spotify Data Visualization</h2>
                        <p className="p">Under Construction (Nov/Dec. 2025). Check Back Soon.</p>
                        <p className="p"><strong>Tools Used: </strong> Visual Studio Code, React+Vite, Python, Excel, HTML, CSS. </p>
                    </li>
                    <li className="li">
                        <h2 className="h2">Microsoft Customer Experience Team - Site Design</h2>
                        <p className="p">Capstone project with the goal of providing a brand redesign for a team within Microsoft. Expected Completion: Apr. 2026. Details will follow.</p>
                        <p className="p"><strong>Tools Used: </strong> Figma, Canva, Microsoft 365 Suite, Sharepoint, HTML, CSS, Javascript, Jira</p>
                    </li>
                </ul>

            </div>
        </div>  
    </Draggable>
  );
  }
export default WorkingOn;