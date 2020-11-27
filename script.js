function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function requestUserRepos(username) {
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    // When request is received
    // Process it here
    xhr.onload = function () {
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        let root = document.getElementById('userRepos');
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }

        // Get the ul with id of of userRepos
        let ul = document.getElementById('userRepos');

        // Loop over each object in data array
        for (let i in data) {

            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');

            // Create the html markup for each li
            li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                `);

            // Append each li to the ul
            ul.appendChild(li);
        }
    }
    // Send the request to the server
    xhr.send();
}
