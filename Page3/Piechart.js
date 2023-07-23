var ctx = document.getElementById('myChart').getContext('2d');

  // Define the data for the pie chart
  var data = {
    datasets: [{
      data: [12, 19, 3, 5, 2, 3],
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

  const config = 
{
    type: 'pie',
    data: data , 
    options: 
    {
        plugins:
        {
            legend:
            {
                display: false
            },
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