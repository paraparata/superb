import { useEffect, useState, useRef } from 'react'

interface Props {
    options?: IntersectionObserverInit;
}

const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
};

const useInfiniteScroll = ({ options = defaultOptions }: Props) => {
    const [state, setState] = useState(false)
    const loader = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setState(true)
        } else {
            setState(false)
        }
    };

    return { state, loader };
}

export default useInfiniteScroll
