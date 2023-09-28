document.getElementById('bibleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const chapterNumber = document.getElementById('chapterNumber').value;
    const verseNumber = document.getElementById('verseNumber').value;

    // Construct the verse reference
    const verseRef = `${bookName} ${chapterNumber}:${verseNumber}`;

    fetch(`https://bible-api.com/${verseRef}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch data from the Bible API.');
            }
            return response.json();
        })
        .then((data) => {
            const verseText = data.text;
            // Display the fetched verse text
            displayVerse(verseRef, verseText);
        })
        .catch((error) => {
            console.error(error);
            // Display an error message to the user
            displayError('Failed to fetch Bible verse.');
        });
});

function displayVerse(reference, text) {
    const verseDisplay = document.getElementById('verseDisplay');
    verseDisplay.innerHTML = `
        <div class="mb-3">
            <strong>${reference}</strong>
            <p>${text}</p>
        </div>
    `;
}

function displayError(message) {
    const verseDisplay = document.getElementById('verseDisplay');
    verseDisplay.innerHTML = `
        <div class="alert alert-danger">
            ${message}
        </div>
    `;
}
