# Explanation of Bug Fixes in Filter Throttle Code

## 🐞 What Was Wrong in the Code

1. **Missing Button Element**:
   - The script was trying to access an element with `id="filterBtn"` that didn’t exist in the HTML.
   
2. **filterData() Used a Hardcoded Value**:
   - The filter function only checked for names starting with `"C"` instead of using the actual user input.
   
3. **Filter Ran Even if Data Wasn’t Ready**:
   - If the button was clicked before the data was fetched, the filter would operate on an empty array.

4. **Throttle Didn’t Forward Arguments**:
   - The `throttle` function didn’t support forwarding arguments or context (`this`), although not strictly needed here, it’s a good practice for reusability.

---

## ✅ How I Fixed It

1. **Added the Missing Button**:
   - Inserted `<button id="filterBtn">Filter</button>` into the HTML.

2. **Read Input from Text Field**:
   - Updated `filterData()` to read and use the `#search` field’s value.

3. **Guard Against Empty Data**:
   - Added a check in `filterData()` to ensure data is fetched before filtering.

4. **Improved Throttle Function**:
   - Modified it to accept and apply `...args` and preserve `this` context for general use.

---

## ✔️ Why the Fix Works

- The **button now exists**, so the event listener can attach without error.
- The **filter function dynamically uses the search input**, enabling real-time filtering.
- The **data-ready check** ensures the filter only runs when usable data is present.
- The **throttle function is now more robust**, allowing it to be reused with any callback and arguments.

---

## 📝 How to Run

1. Open `index.html` in any browser.
2. Wait for "Data fetched" to appear in the console.
3. Type a name prefix (like "C" or "Leanne") into the input box.
4. Click the **Filter** button.
5. Observe filtered results in the browser console.
