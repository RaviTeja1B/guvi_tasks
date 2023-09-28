// Function to fetch and display a random Chuck Norris joke
function getRandomJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const jokeText = data.value;
            document.getElementById('joke-text').textContent = jokeText;
        })
        .catch(error => {
            console.error('Error fetching Chuck Norris joke:', error);
        });
}

// Add an event listener to the "Get Joke" button
document.getElementById('get-joke').addEventListener('click', getRandomJoke);

// Initial load of a random joke
getRandomJoke();
