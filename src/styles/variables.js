const BREAKPOINTS = [640, 768, 1024, 1280, 1536];
const mq = BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`);

export { BREAKPOINTS, mq };
