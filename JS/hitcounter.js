// A function that updates the hit counter.
function updatecount() {
    // Local sotrage for hit counter, if it doesn't exist, it sets to 0.
    let count = localStorage.getItem('count');
    if (!count) {
        count = 0;
    } else {
        count = parseInt(count);
    }

    //Adds a hit count.
    count++;

    // Updates the counter.
    document.getElementById('count').innerText = count;

    // Stores hit counter in 'localStorage.'
    localStorage.setItem('count', count.toString());
}

// Calls 'updatecount' when page opens.
window.onload = updatecount;
