document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const tableBody = document.querySelector("table tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.getElementById("gender").value;
        const foodOptions = document.getElementById("food").selectedOptions;
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        // Create a new table row
        const newRow = tableBody.insertRow();

        // Populate the table cells with form values
        const cells = [
            firstName, lastName, address, pincode, gender,
            Array.from(foodOptions).map(option => option.value).join(", "),
            state, country
        ];

        cells.forEach((cellData, index) => {
            const cell = newRow.insertCell(index);
            cell.textContent = cellData;
        });

        // Clear the form fields
        form.reset();
    });
});
