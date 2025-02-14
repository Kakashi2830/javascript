// URL of the GitHub API for the user "hiteshchoudhary"
const requestUrl = 'https://api.github.com/users/Kakashi2830';

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Open a GET request to the API URL
xhr.open('GET', requestUrl);

// Set up the onreadystatechange event handler
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // Parse the response text into a JavaScript object
            const data = JSON.parse(this.responseText);

            // Update the card with the fetched data
            const card = document.getElementById('profile-card');
            card.innerHTML = `
                <img src="${data.avatar_url}" alt="Profile Picture">
                <h2>${data.name || data.login}</h2>
                <p>Followers: ${data.followers}</p>
            `;
        } else {
            // Handle errors
            const card = document.getElementById('profile-card');
            card.innerHTML = `<p>Error loading profile. Please try again.</p>`;
        }
    }
};

// Send the request
xhr.send();