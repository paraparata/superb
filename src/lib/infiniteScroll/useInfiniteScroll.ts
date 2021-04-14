import { useEffect, useState } from 'react'

interface Props {
    options?: IntersectionObserverInit;
    elementId?: HTMLElement;
}

const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
};

export default function useInfiniteScroll({ options = defaultOptions, elementId }: Props): boolean {
    const [state, setState] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, options);
        if (elementId) {
            observer.observe(elementId);
        }
    }, []);

    const handleObserver: IntersectionObserverCallback = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setState(true)
        } else {
            setState(false)
        }
    };

    return state;
}

