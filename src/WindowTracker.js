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
        <div>
            <h1>Window width: {windowSize.windowWidth} px</h1>
            <h1>Window height: {windowSize.windowHeight} px</h1>
        </div>
    );
}
