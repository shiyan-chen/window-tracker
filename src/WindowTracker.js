import React from "react";

export default function WindowTracker() {
    const [windowSize, setWindowSize] = React.useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    });

    React.useEffect(() => {
        function watchWindowWidth() {
            // console.log("setting up")
            setWindowSize({ 
                windowWidth: window.innerWidth, 
                windowHeight: window.innerHeight 
            });
        }
        window.addEventListener("resize", watchWindowWidth);
        return () => {
            // console.log("cleaning up")
            window.removeEventListener("resize", watchWindowWidth);
        };
    }, []);

    return (
        <div className="window--size">
            <div>Window width: {windowSize.windowWidth} px</div>
            <div>Window height: {windowSize.windowHeight} px</div>
        </div>
    );
}
