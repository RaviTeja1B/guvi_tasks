let url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

let method1 = {
  method: "GET",
};
let data = async (responseData) => {
  try {
    responseData = await fetch(url)
      .then((value) => value.json())
      .then((dataFetched) => {
        return displayData(dataFetched);
      });
  } catch (error) {
    console.log(error);
  }
};
data();

let HeadingTitle = document.createElement("h1");
HeadingTitle.setAttribute("id", "title");
HeadingTitle.textContent = "Pagination";
document.body.append(HeadingTitle);
let descriptionText = document.createElement("p");
descriptionText.setAttribute = ("id", "description");
descriptionText.textContent = "Pagination Using DoM Manipulation ";
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

let tableHeadOne = document.createElement("td");
tableHeadOne.innerHTML = "Serial No";

// Create Head Two

let tableHeadTwo = document.createElement("td");
tableHeadTwo.innerHTML = "Name";

// Create Head Third

let tableHeadThird = document.createElement("td");
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

// append the all

tableRowHead.append(tableHeadOne);
tableRowHead.append(tableHeadTwo);
tableRowHead.append(tableHeadThird);
tableHead.append(tableRowHead);

table.append(tableHead);
table.append(tableBody);
divContainer1.append(span);
divContainer1.append(table);

document.body.append(pagination);

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




const displayData = (response) => {
    //
    console.table(response);
    response.map((item) => {
      //console.log(item);
      return item
    });
  };
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
        createTableRow(i + 1, currentData[i].name, currentData[i].email); // Use index as Serial No
      }
    }
  }
  
  // Function to update pagination buttons
  function updatePaginationButtons() {
    pagination.innerHTML = ""; // Clear the pagination buttons
    
    // Calculate the number of pages
    const totalPages = Math.ceil(currentData.length / itemsPerPage);
    
    // Create pagination buttons
    for (let page = 1; page <= totalPages; page++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = page.toString();
      pageButton.classList.add("btn", "btn-primary", "mr-2");
      if (page === currentPage) {
        pageButton.disabled = true; // Disable the current page button
      }
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
  data().then((responseData) => {
    setDataAndInitializePagination(responseData);
  });
  
