// from data.js
var tableData = data;

var table = d3.select("ufo-table")

// Use D3 to select the table body
var tbody = d3.select("tbody");


data.forEach(function(x) {
            var row = tbody.append("tr");
            Object.entries(x).forEach(function([key, value]) {
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
            });
            });

