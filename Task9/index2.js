let url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

let method1 = {
  method: "GET",
};

let HeadingTitle = document.createElement("h1");
HeadingTitle.setAttribute("id", "title");
HeadingTitle.textContent = "Pagination";
document.body.append(HeadingTitle);

let descriptionText = document.createElement("p");
descriptionText.setAttribute("id", "description");
descriptionText.textContent = "Pagination Using DOM Manipulation";
document.body.append(descriptionText);

let divContainer1 = document.createElement("div");
divContainer1.setAttribute("class", "container-fluid");
divContainer1.classList.add("container", "table-responsive");
document.body.append(divContainer1);

let table = document.createElement("table");
table.setAttribute("id", "table");
table.classList.add("table");

// Create Table Head
let tableHead = document.createElement("thead");
tableHead.classList.add("bg-dark", "text-light");

// Create Table Row Head
let tableRowHead = document.createElement("tr");

// Create Head One
let tableHeadOne = document.createElement("th"); // Use "th" instead of "td" for table header
tableHeadOne.innerHTML = "Serial No";

// Create Head Two
let tableHeadTwo = document.createElement("th");
tableHeadTwo.innerHTML = "Name";

// Create Head Third
let tableHeadThird = document.createElement("th");
tableHeadThird.innerHTML = "Email";

// Create Table Body
let tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "table-body");

// Create Span
let span = document.createElement("span");
span.innerHTML = "";

// Create Pagination
let pagination = document.createElement("div");
pagination.setAttribute("id", "pagination");
pagination.classList.add("container", "buttons");

// Append all elements to the DOM
tableRowHead.append(tableHeadOne);
tableRowHead.append(tableHeadTwo);
tableRowHead.append(tableHeadThird);
tableHead.append(tableRowHead);

table.append(tableHead);
table.append(tableBody);
divContainer1.append(span);
divContainer1.append(table);

document.body.append(pagination);

// Function to create table rows
function createTableRow(id, name, email) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  td1.innerHTML = id;
  td2.innerHTML = name;
  td3.innerHTML = email;
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tableBody.append(tr);
}

// Function to fetch and display data
const fetchData = async () => {
  try {
    const response = await fetch(url, method1);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const dataFetched = await response.json();
    displayData(dataFetched);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayData = (data) => {
  // Clear the table body before populating with new data
  tableBody.innerHTML = "";
  
  data.forEach((item, index) => {
    createTableRow(index + 1, item.name, item.email);
  });
};

// Call the fetchData function to fetch and display data
// ... Your existing code ...

const itemsPerPage = 10; // Number of items to display per page
let currentPage = 1;
let currentData = [];

// Function to update the table with the current data
function updateTable() {
  tableBody.innerHTML = ""; // Clear the table body
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  for (let i = startIndex; i < endIndex; i++) {
    if (currentData[i]) {
      createTableRow(i + 1, currentData[i].name, currentData[i].email);
    }
  }
}

// Function to update pagination buttons
function updatePaginationButtons() {
  pagination.innerHTML = ""; // Clear the pagination buttons

  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = page.toString();
    pageButton.classList.add("btn", "btn-primary", "mr-2");
    pageButton.addEventListener("click", () => {
      currentPage = page;
      updateTable();
      updatePaginationButtons();
    });
    pagination.appendChild(pageButton);
  }
}

// Function to set the data and initialize pagination
function setDataAndInitializePagination(data) {
  currentData = data;
  currentPage = 1;
  updateTable();
  updatePaginationButtons();
}

// Call the displayData function and set the data
fetch(url, method1)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((responseData) => {
    setDataAndInitializePagination(responseData);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
