import React, { useRef, useState } from "react";
import "xp.css/dist/XP.css";
import startbutton from "../../assets/ui/startbutton.png";
import StartMenu from "./StartMenu";
import taskbar from "../../assets/ui/taskbar.png";

const Taskbar = ({ onMenuItemSelect }) => {
    const [isStartMenuVisible, setIsStartMenuVisible] = useState(false);
    const nodeRef = useRef(null);

    const toggleStartMenu = () => setIsStartMenuVisible((prev) => !prev);

    return (
        <>
            <div
                ref={nodeRef}
                className="taskbar-shell"
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 1000,
                    overflow: "hidden",
                }}
            >
                <img
                    src={taskbar}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                        pointerEvents: "none",
                    }}
                />

                <div
                    className="start-button"
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        marginLeft: "6px",
                    }}
                >
                    <img
                        src={startbutton}
                        alt="Start Button"
                        style={{ width: "90px", height: "30px" }}
                        onClick={toggleStartMenu}
                    />
                </div>
            </div>

            {isStartMenuVisible && (
                <StartMenu
                    onMenuItemSelect={onMenuItemSelect}
                    onRequestClose={() => setIsStartMenuVisible(false)}
                />
            )}
        </>
    );
};

export default Taskbar;
