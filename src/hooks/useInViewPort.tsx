import { useCallback, useEffect, useState } from "react";


function useInViewPort(hasMore: boolean) {
    
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
                ([entry]) => entry.isIntersecting && hasMore && setIsInViewport(true)
            );
            observer.observe(refElement);

            return () => {
                observer.disconnect();
            };
        }
        if (refElement && isInViewport) {
            const observer = new IntersectionObserver(
                ([entry]) => !entry.isIntersecting && hasMore && setIsInViewport(false)
            );
            observer.observe(refElement);

            return () => {
                observer.disconnect();
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInViewport, refElement]);

  return { isInViewport, ref: setRef }
}

export default useInViewPort;
