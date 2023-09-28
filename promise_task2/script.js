document.addEventListener("DOMContentLoaded", () => {
    const loadImagesBtn = document.getElementById("loadImages");
    const imageList = document.getElementById("imageList");

    // Function to fetch cat images
    async function fetchCatImages() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching cat images:", error);
        }
    }

    // Function to display cat images
    function displayCatImages(images) {
        imageList.innerHTML = "";

        images.forEach((image, index) => {
            if (index % 3 === 0) {
                // Create a new row for every three items
                const row = document.createElement("div");
                row.classList.add("row", "mb-3");
                imageList.appendChild(row);
            }

            // Create a card for each cat image
            const card = document.createElement("div");
            card.classList.add("col-md-4"); // Use Bootstrap grid to have three items in a row
            card.innerHTML = `
                <div class="card">
                    <img src="${image.url}" class="card-img-top" alt="Cat Image">
                    <div class="card-body">
                        <h5 class="card-title">Cat ID: ${image.id}</h5>
                        <p class="card-text">Height: ${image.height} cm</p>
                        <p class="card-text">Weight: ${image.weight} kg</p>
                        <button class="btn btn-danger btn-block" data-image-id="${image.id}">Delete</button>
                    </div>
                </div>
            `;

            // Add a click event listener to delete the cat image
            const deleteButton = card.querySelector("button");
            deleteButton.addEventListener("click", async () => {
                await deleteCatImage(image.id);
                images.splice(index, 1);
                displayCatImages(images);
            });

            const currentRow = imageList.lastElementChild;
            currentRow.appendChild(card);
        });
    }

    // Event listener for loading cat images
    loadImagesBtn.addEventListener("click", async () => {
        const catImages = await fetchCatImages();
        displayCatImages(catImages);
    });

    // Function to delete a cat image (You can implement this later)
    async function deleteCatImage(imageId) {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/${imageId}`, {
                method: "DELETE",
            });
            if (response.status === 200) {
                console.log(`Cat image with ID ${imageId} deleted successfully.`);
            } else {
                console.error(`Failed to delete cat image with ID ${imageId}.`);
            }
        } catch (error) {
            console.error("Error deleting cat image:", error);
        }
    }
});
