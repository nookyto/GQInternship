const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
      {
          label: "Monthly Sales",
          data: [100, 200, 150, 300, 250],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        type: 'line',
        label: 'Line Dataset',
        data: [150, 120, 90, 200],
    }
  ],
};

// Configuration options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
      y: {
          beginAtZero: true,
      },
  },
};

// Get the canvas element and create the line chart
const ctx2 = document.getElementById("votesGraph").getContext("2d");
const myLineChart = new Chart(ctx2, {
  type: "line",
  data: data,
  options: options,
});