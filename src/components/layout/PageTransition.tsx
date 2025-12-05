import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage("fadeOut");
        }
    }, [location, displayLocation]);

    const onAnimationEnd = () => {
        if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
        }
    };

    return (
        <div
            className={`${transitionStage === "fadeIn" ? "animate-fade-in" : "opacity-0 transition-opacity duration-200"}`}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </div>
    );
};
