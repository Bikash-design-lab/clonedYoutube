let data = [];

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
            data = res;
            console.log("Data fetched:", data);
        })
        .catch((err) => console.error("Fetch failed:", err));
}

function filterData() {
    const input = document.getElementById("search").value.trim();
    if (!data.length) {
        console.log("Data not yet loaded.");
        return;
    }

    if (!input) {
        console.log("Please type something to search.");
        return;
    }

    const filtered = data.filter(user =>
        user.name.toLowerCase().startsWith(input.toLowerCase())
    );
    console.log("Filtered Users:", filtered);
}

function throttle(func, delay) {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last > delay) {
            func.apply(this, args);
            last = now;
        }
    };
}

const throttledFilter = throttle(filterData, 2000);

document.getElementById("filterBtn").addEventListener("click", throttledFilter);

fetchData();