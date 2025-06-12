function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

//  This limits execution to once every 1000ms, no matter how many times you scroll.
// Usage:
window.addEventListener(
    "scroll",
    throttle(function () {
        console.log("Scroll event triggered");
        // Handle animation or lazy loading, 
    }, 1000)
);
