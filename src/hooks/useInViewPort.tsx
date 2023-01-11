import { useCallback, useEffect, useState } from "react";
import { Image } from "../interfaces/image.interface";


function useInViewPort() {
    
    const [isInViewport, setIsInViewport] = useState(false);
    const [refElement, setRefElement] = useState<HTMLElement | null>(null);

    const setRef = useCallback((node: HTMLElement | null) => {
        if (node !== null) {
            setRefElement(node);
        }
    }, []);

    useEffect(() => {
        if (refElement && !isInViewport) {
            const observer = new IntersectionObserver(
                ([entry]) => entry.isIntersecting && setIsInViewport(true)
            );
            observer.observe(refElement);

            return () => {
                observer.disconnect();
            };
        }
        if (refElement && isInViewport) {
            const observer = new IntersectionObserver(
                ([entry]) => !entry.isIntersecting && setIsInViewport(false)
            );
            observer.observe(refElement);

            return () => {
                observer.disconnect();
            };
        }
    }, [isInViewport, refElement]);

  return { isInViewport, ref: setRef }
}

export default useInViewPort;
