import React from "react";
import "xp.css/dist/XP.css";
import AddressBook from "../../assets/ui/AddressBook.png";
import Home from "../../assets/ui/Home.png";
import DiskDefragmenter from "../../assets/ui/DiskDefragmenter.png";
import IEEdit from "../../assets/ui/IEEdit.png";
import TIFF from "../../assets/ui/TIFF.png";

const StartMenu = ({ onMenuItemSelect, onRequestClose }) => {
    const nodeRef = React.useRef(null);

    const menuItems = [
        { id: "homeInfo", label: "Home", icon: Home },
        { id: "aboutMe", label: "About Me", icon: AddressBook },
        { id: "tableau", label: "Tableau", icon: DiskDefragmenter },
        { id: "workingOn", label: "Working On", icon: IEEdit },
        { id: "gallery", label: "Gallery", icon: TIFF },
    ];

    const handleItemClick = (itemId) => {
        if (onMenuItemSelect) onMenuItemSelect(itemId);
        if (onRequestClose) onRequestClose();
    };

    return (
        <div
            ref={nodeRef}
            className="start-menu"
            style={{
                position: "fixed",
                bottom: "30px",
                left: "5px",
                width: "220px",
                display: "flex",
                flexDirection: "column",
                zIndex: 1001,
            }}
        >
            <div className="window" style={{ marginBottom: "10px" }}>
                <div className="title-bar">
                    <div className="title-bar-text">Start Menu</div>
                </div>
                <div className="window-body">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className="start-menu-item"
                            style={{
                                padding: "6px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                            onClick={() => handleItemClick(item.id)}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                style={{ width: "30px", height: "30px" }}
                            />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartMenu;