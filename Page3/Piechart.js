var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the pie chart
var data = {
  labels: ['fashion & grooming', 'health & sports', 'art & design', 'lifestyle', 'art & design', 'entertainment', 'technology & car', 'art & design '],
  datasets: [{
    data: [12140, 5833, 5611, 4563, 3214, 2024, 1781, 1612],
    backgroundColor: [
      'red',
      'blue',
      'yellow',
      'green',
      'purple',
      'orange'
    ]
  }]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = data.labels[context.dataIndex];
            var value = context.dataset.data[context.dataIndex];
            return label + ': ' + value;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

// Create the pie chart
var myChart = new Chart(
  document.getElementById('myChart'),
  config
);
