import React, { useState } from "react";
import "xp.css/dist/XP.css";
//component imports
import Portrait from "./components/Portrait";
import InfoText from "./components/infoText";
import Taskbar from "./components/ui/Taskbar";
import AboutMe from "./components/AboutMe";
import Tableau from "./components/Tableau";
import WorkingOn from "./components/WorkingOn";
import Gallery from "./components/Gallery";
//image imports (if needed)
import tateImage from "./assets/images/tate.jpeg";
import Background from "./assets/ui/Bliss.jpeg";


const HomePage = () => {
    const [windowVisibility, setWindowVisibility] = useState({
        portrait: true,
        infoText: true,
        aboutMe: false,
        tableau: false,
        workingOn: false,
        gallery: false
    });

    //start menu items
    const startMenuActions = {
        homeInfo: ["portrait", "infoText"],
        aboutMe: ["aboutMe"],
        tableau: ["tableau"],
        workingOn: ["workingOn"],
        gallery: ["gallery"],
    };
    
    //event handler for start menu item selection
    const handleMenuItemSelect = (itemId) => {
        const targets = startMenuActions[itemId] || [];

        if (!targets.length) return;

        setWindowVisibility((prev) => {
            const next = { ...prev };
            targets.forEach((target) => {
                next[target] = true;
            });
            return next;
        });
    };
    //event handler for closing windows
    const handleWindowClose = (windowKey) => {
        setWindowVisibility((prev) => ({ ...prev, [windowKey]: false }));
    };

    return (
        <div
            style={{
                width: "100vw",
                minHeight: "100vh",
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            {windowVisibility.portrait && (
                <Portrait
                    title="tate.jpeg"
                    src={tateImage}
                    alt="Tate"
                    onClose={() => handleWindowClose("portrait")}
                />
            )}
            {windowVisibility.infoText && (
                <InfoText
                    title="About Me"
                    onClose={() => handleWindowClose("infoText")}
                />
            )}
            {windowVisibility.aboutMe && (
                <AboutMe
                    title="About"
                    onClose={() => handleWindowClose("aboutMe")}
                />
            )}
            {windowVisibility.tableau && (
                <Tableau
                    title="Tableau"
                    onClose={() => handleWindowClose("tableau")}
                />
            )}
            {windowVisibility.workingOn && (
                <WorkingOn
                    title="Current Projects"
                    onClose={() => handleWindowClose("workingOn")}
                />
            )}
            {windowVisibility.gallery && (
                <Gallery
                    title="Photo Gallery"
                    onClose={() => handleWindowClose("gallery")}
                />
            )}
            <Taskbar onMenuItemSelect={handleMenuItemSelect} />
        </div>
    );
};

export default HomePage;