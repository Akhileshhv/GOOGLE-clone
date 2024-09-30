// Function to handle Google Search
function searchGoogle() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term!');
    }
}

// Function to handle "I'm Feeling Lucky"
function lucky() {
    window.location.href = 'https://www.google.com/doodles';
}

// Event listener for the "Enter" key in the search bar
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchGoogle();
    }
});
