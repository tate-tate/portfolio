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
    // Track which windows have been opened (mounted) at least once
    const [mountedWindows, setMountedWindows] = useState({
        portrait: true,
        infoText: true,
        aboutMe: false,
        tableau: false,
        workingOn: false,
        gallery: false
    });

    // Track which mounted windows are currently visible
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

        // Mount components if not already mounted, and make them visible
        setMountedWindows((prev) => {
            const next = { ...prev };
            targets.forEach((target) => {
                next[target] = true;
            });
            return next;
        });

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
        // Only hide, don't unmount (preserves state and avoids re-loading)
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
            {mountedWindows.portrait && (
                <div style={{ display: windowVisibility.portrait ? 'block' : 'none' }}>
                    <Portrait
                        title="tate.jpeg"
                        src={tateImage}
                        alt="Tate"
                        onClose={() => handleWindowClose("portrait")}
                    />
                </div>
            )}
            {mountedWindows.infoText && (
                <div style={{ display: windowVisibility.infoText ? 'block' : 'none' }}>
                    <InfoText
                        title="About Me"
                        onClose={() => handleWindowClose("infoText")}
                    />
                </div>
            )}
            {mountedWindows.aboutMe && (
                <div style={{ display: windowVisibility.aboutMe ? 'block' : 'none' }}>
                    <AboutMe
                        title="About"
                        onClose={() => handleWindowClose("aboutMe")}
                    />
                </div>
            )}
            {mountedWindows.tableau && (
                <div style={{ display: windowVisibility.tableau ? 'block' : 'none' }}>
                    <Tableau
                        title="Tableau"
                        onClose={() => handleWindowClose("tableau")}
                    />
                </div>
            )}
            {mountedWindows.workingOn && (
                <div style={{ display: windowVisibility.workingOn ? 'block' : 'none' }}>
                    <WorkingOn
                        title="Current Projects"
                        onClose={() => handleWindowClose("workingOn")}
                    />
                </div>
            )}
            {mountedWindows.gallery && (
                <div style={{ display: windowVisibility.gallery ? 'block' : 'none' }}>
                    <Gallery
                        title="Photo Gallery"
                        onClose={() => handleWindowClose("gallery")}
                    />
                </div>
            )}
            <Taskbar onMenuItemSelect={handleMenuItemSelect} />
        </div>
    );
};

export default HomePage;