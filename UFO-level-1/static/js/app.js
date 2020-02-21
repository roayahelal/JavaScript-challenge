// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

//initial table setup
data.forEach(function(x) {
    var row = tbody.append("tr");
    Object.entries(x).forEach(function([key, value]) {
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
    });
    });

// new date filter setup
var button = d3.select("#filter-btn");

button.on("click", function()
{
    //clear the initial table
    tbody.text("");
    //use the new date to filter
    var dateInputField = d3.select("#datetime");
    var dateInput = dateInputField.property("value");
    console.log(dateInput);
    var filteredData = tableData.filter(x => x.datetime === dateInput);
    console.log(filteredData);
    filteredData.forEach(function(x) {
        var row = tbody.append("tr");
        Object.entries(x).forEach(function([key, value]) {
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
        });
    });
});   