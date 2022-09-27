import React, { useEffect } from "react";
import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";

function Navigation() {
    
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 1000);

        window.addEventListener("resize", debouncedHandleResize);

        return (_) => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    if (dimensions.width < 992) {
        return <NavigationMobile />;
    }
    return <NavigationDesktop />;

    function debounce(fn, ms) {
        let timer;
        return (_) => {
            clearTimeout(timer);
            timer = setTimeout((_) => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }
}

export default Navigation;
