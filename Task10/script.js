// Function to display a number and call the callback after a delay
function displayNumber(num, callback) {
    setTimeout(function() {
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerText = num;
        countdownElement.style.color = getRandomColor(); // Apply a random color
        callback();
    }, 1000);
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Countdown using callbacks
displayNumber(10, function() {
    displayNumber(9, function() {
        displayNumber(8, function() {
            displayNumber(7, function() {
                displayNumber(6, function() {
                    displayNumber(5, function() {
                        displayNumber(4, function() {
                            displayNumber(3, function() {
                                displayNumber(2, function() {
                                    displayNumber(1, function() {
                                        // After countdown, display "Happy Independence Day"
                                        const countdownElement = document.getElementById('countdown');
                                        countdownElement.innerText = "Happy Independence Day";
                                        countdownElement.style.color = "#333"; // Set a default color
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
