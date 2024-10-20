$(document).ready(function () {
  // Predefined valid users
  const validUsers = [
    { username: "sarahsusan", password: "123" },
    { username: "user2", password: "abcd" },
    { username: "user3", password: "user3" },
    { username: "admin", password: "admin@123" },
    { username: "test", password: "test" },
  ];

  // Handle login button click
  $("button").on("click", function () {
    const username = $("#usernameInput").val();
    const password = $("#passwordInput").val();
    let isValidUser = false;

    // Check if the entered credentials match any valid user
    validUsers.forEach((user) => {
      if (user.username === username && user.password === password) {
        isValidUser = true;
      }
    });

    // Show error message if the user is not valid
    if (!isValidUser) {
      $(".error-message").text("Invalid username or password.").show();
    } else {
      // Redirect to home page if valid
      window.location.href = "home.html";
    }
  });

  // Data for the assignment statuses
  const data = {
    labels: ["Submitted", "Pending", "Overdue"],
    series: [45, 35, 20], // Example data: Submitted 45%, Pending 35%, Overdue 20%
  };

  // Chart options
  const options = {
    chart: {
      type: "donut", // Use 'pie' for a pie chart
      height: 275,
    },
    labels: data.labels,
    series: data.series,
    colors: ["#ff1493", "#ffd700", "#800080"], // Custom colors: Pink, Yellow, Purple
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 225,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      itemMargin: {
        horizontal: 15,
        vertical: 0,
      },
    },
    title: {
      text: "Assignment Submission Status",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };
  // Data for the academic performance overview
  const academicData = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    series: [
      {
        name: "Math",
        data: [70, 80, 85, 90, 95, 92, 88],
      },
      {
        name: "Science",
        data: [75, 85, 80, 70, 90, 85, 93],
      },
      {
        name: "English",
        data: [60, 70, 75, 80, 85, 90, 95],
      },
    ],
  };

  // Chart options for the line chart
  const academicOptions = {
    chart: {
      type: "line",
      height: 275,
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    series: [
      {
        name: "Academic Performance",
        data: [40, 80, 60, 100, 80, 90, 70],
      },
    ],
    colors: ["#ff1493", "#ffd700", "#800080"], // Pink, Yellow, Purple
    stroke: {
      curve: "smooth", // or 'straight' for straight lines
      width: 2,
    },
    title: {
      text: "Academic Performance Overview",
      align: "left",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "Performance Score",
      },
    },
    markers: {
      size: 5,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  // Render the chart
  const chart = new ApexCharts(
    document.querySelector("#assignment-status-chart"),
    options
  );
  // Render the line chart
  const academicChart = new ApexCharts(
    document.querySelector("#academic-performance-chart"),
    academicOptions
  );
  academicChart.render();
  chart.render();
});
