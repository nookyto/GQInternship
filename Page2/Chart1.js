const tension = 0.3;
const ctx = document.getElementById('DailyVoteChart');

let DailyVoteChart; // Declare the DailyVoteChart variable

// Create the chart and assign it to the DailyVoteChart variable
DailyVoteChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1 Jun', '2 Jun', '3 Jun', '4 Jun', '5 Jun', '6 Jun', '7 Jun', '8 Jun', '9 Jun', '10 Jun', '11 Jun', '12 Jun', '13 Jun', '14 Jun', '15 Jun', '16 Jun', '17 Jun', '18 Jun', '19 Jun', '20 Jun', '21 Jun', '22 Jun', '23 Jun', '24 Jun', '25 Jun', '26 Jun', '27 Jun', '28 Jun', '29 Jun', '30 Jun'],
    datasets: [{
      label: '# of Votes',
      data: [21, 83, 35, 63, 52, 12, 42, 99, 76, 28, 66, 14, 59, 77, 18, 87, 39, 71, 25, 48, 92, 54, 33, 69, 81, 16, 44, 96, 61, 23],
      borderWidth: 1,
      backgroundColor: 'rgba('+red+', '+green+', '+blue+', 0.3)',
      borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
      tension:tension
    }]
  },
  options: {
    plugins:
        {
            legend:
            {
                display: false
            },
        },
    scales: {
      
      y: {
        beginAtZero: true,
        min: 0,
        max:100
      }
    },
    maintainAspectRatio: false
  }
});

const coffeeSales = document.getElementById('coffeeSales');
coffeeSales.addEventListener('change', saleTracker);

function saleTracker() {
  console.log(coffeeSales.value.split(','));
  coffeeSales.value.split(',');
  
  // Check if DailyVoteChart is defined before accessing its properties
  if (DailyVoteChart) {
    DailyVoteChart.data.datasets[0].data = coffeeSales.value.split(',');
    DailyVoteChart.update();
  }
}
// Get the select element by its ID
var selectElement = document.getElementById("coffeeSales");
                        
// Loop through the data and create the options dynamically
for (var person in salesData) {
  if (salesData.hasOwnProperty(person)) {
    // Create a new option element
    var option = document.createElement("option");

    // Set the value attribute
    option.value = salesData[person].join(", ");

    // Set the text content
    option.textContent = person;

    // Append the option to the select element
    selectElement.appendChild(option);
  }
}