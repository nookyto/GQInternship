NameList.sort((a, b) => b.voteCount - a.voteCount);

// Get the table body element
var tableBody = document.getElementById("tableBody");

// Generate table rows and cells dynamically
NameList.forEach(function (item) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");

    // Use innerText to ensure proper encoding for Thai characters
    nameCell.innerText = item.name;

    // Use toLocaleString() to format voteCount with commas
    var voteCountCell = document.createElement("td");
    voteCountCell.innerText = item.voteCount.toLocaleString();

    row.innerHTML = "<td>" + item.id + "</td><td>" + nameCell.innerText + "</td><td>" + voteCountCell.innerText + "</td>";
    tableBody.appendChild(row);
});