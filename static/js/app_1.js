// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
    // Clear data from table
    tbody.html("");

    // Loop thru each object in the data and append a row and cells for each value in row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        
        // Loop thru each field in dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });    
}

function handleClick() {
    // Grab the datetime value 
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter data using data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    buildTable(filteredData);
}

// form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when page loads
buildTable(tableData);