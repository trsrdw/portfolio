import { useState, useEffect } from 'react';

export function useIsTablet(breakpoint = 992) {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkTablet = () => setIsTablet(window.innerWidth <= breakpoint);
        checkTablet();
        window.addEventListener('resize', checkTablet);
        return () => window.removeEventListener('resize', checkTablet);
    }, [breakpoint]);

    return isTablet;
}