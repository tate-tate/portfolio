import React, { useRef } from "react";
import Draggable from "react-draggable";
import "xp.css/dist/XP.css";
import TableauEmbed from "./TableauEmbed";  
  
  const Tableau = ({ title, onClose }) => {
      const nodeRef = useRef(null);
  
      const handleClose = () => {
          if (onClose) onClose();
      };

  return (
    <Draggable handle=".title-bar" nodeRef={nodeRef}>
        <div ref={nodeRef} className="window" style={{ width: '1200px', height: '80%', position: 'absolute', top: '10%', left: '10%',}}>
            <div className="title-bar">
                <div className="title-bar-text">2023 In Tornadoes - What can we see?</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close" onClick={handleClose}></button>
                </div>
            </div>  
            <div className="window-body" style={{ height: '95%', overflowY: 'scroll' }}>
                <h5><b>Tableau Visualization: </b>Taken from data recorded by the NOAA, this dashboard shows critical data regarding tornadic activity in the United States in 2023.</h5>
                <TableauEmbed />
            </div>
        </div>  
    </Draggable>
  );
  }
export default Tableau;