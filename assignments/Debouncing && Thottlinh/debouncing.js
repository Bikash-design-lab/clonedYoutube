function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// the function will only run 500ms after the user stops typing.
// Usage:
const searchInput = document.getElementById("search");

searchInput.addEventListener(
    "input",
    debounce(function (e) {
        console.log("Searching for:", e.target.value);
        // Call API here
    }, 500)
);