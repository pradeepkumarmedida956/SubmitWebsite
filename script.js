function search() {
    var query = document.getElementById("searchInput").value;

    // Send the query to the backend
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    })
    .then(response => response.json())
    .then(data => {
        displaySearchResults(data.results);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displaySearchResults(results) {
    var searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        searchResultsDiv.innerHTML = "<p>No results found.</p>";
    } else {
        var ul = document.createElement("ul");
        results.forEach(result => {
            var li = document.createElement("li");
            li.textContent = result;
            ul.appendChild(li);
        });
        searchResultsDiv.appendChild(ul);
    }
}
