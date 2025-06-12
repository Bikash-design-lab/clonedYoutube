let input = document.getElementById("search");

function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer)
        setTimeout((...args) => {
            fn.apply(this, args);
        }, delay);
    };
}

function handleSearch() {
    console.log("Searching:", input.value);
}

let debouncedSearch = debounce(handleSearch, 500);

input.addEventListener("input", debouncedSearch);
