// Bar chart
new Chart(document.getElementById("DailyScoreChart"), {
    type: 'bar',
    data: {
      labels: ["user1", "user2", "user3", "user4", "user5","user6", "user7", "user8", "user9", "user10"],
      datasets: [
        {
            fill: true,
            backgroundColor: 'rgba('+red+', '+green+', '+blue+', 0.3)',
            borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
            data: [832, 568, 234, 710, 419, 985, 671, 173, 523, 899]
        }
      ]
    },
    options: {
        plugins:
        {
            legend:
            {
                display: false
            },
        },
      title: {
        display: true,
      },
      maintainAspectRatio: false
    }
});