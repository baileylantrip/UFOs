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

