
const ctx = document.getElementById('DailyVoteChart');

let DailyVoteChart; // Declare the DailyVoteChart variable

// Create the chart and assign it to the DailyVoteChart variable
DailyVoteChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1 Jun', '2 Jun', '3 Jun', '4 Jun', '5 Jun', '6 Jun', '7 Jun', '8 Jun', '9 Jun', '10 Jun', '11 Jun', '12 Jun', '13 Jun', '14 Jun', '15 Jun', '16 Jun', '17 Jun', '18 Jun', '19 Jun', '20 Jun', '21 Jun', '22 Jun', '23 Jun', '24 Jun', '25 Jun', '26 Jun', '27 Jun', '28 Jun', '29 Jun', '30 Jun', '1 July', '2 July', '3 July', '4 July', '5 July', '6 July', '7 July', '8 July', '9 July'],
    datasets: [{
      label: '# of Votes',
      data: [104,55,2,11,1,22,75,35,6,2,33,4,16,27,9,20,14,24,76,580,1670,2708,3875,5289,1076,1352,1476,1324,1345,1252,1001,695,937,1560,1291,1429,1381,1300,967],
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
      }
    },
    maintainAspectRatio: false
  }
});

const PersonValue = document.getElementById('PersonSelector');
PersonValue.addEventListener('change', updater);

function updater() {
  // console.log(coffeeSales.value.split(','));
  PersonValue.value.split(',');
  
  // Check if DailyVoteChart is defined before accessing its properties
  if (DailyVoteChart) {
    DailyVoteChart.data.datasets[0].data = PersonValue.value.split(',');
    DailyVoteChart.update();
  }
}
// Get the select element by its ID
var selectElement = document.getElementById("PersonSelector");
                        
// Loop through the data and create the options dynamically
for (var person in PersonalVote) {
  if (PersonalVote.hasOwnProperty(person)) {
    // Create a new option element
    var option = document.createElement("option");

    // Set the value attribute
    option.value = PersonalVote[person].join(", ");

    // Set the text content
    option.textContent = person;

    // Append the option to the select element
    selectElement.appendChild(option);
  }
}