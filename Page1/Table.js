  NameList.sort((a, b) => b.voteCount - a.voteCount);
  
  // Get the table body element
  var tableBody = document.getElementById("tableBody");
  
  // Generate table rows and cells dynamically
  NameList.forEach(function (item) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + item.id + "</td><td>" + item.name + "</td><td>" + item.voteCount + "</td>";
    tableBody.appendChild(row);
  });
  