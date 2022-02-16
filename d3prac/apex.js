var options = {
  series: [1850, 332, 294, 276, 262],
  chart: {
    type: "donut",
  },
  labels: ["경제", "세계", "IT/인터넷/통신", " 금융", "생활"],
  colors: ["#a3e1d4", "#dedede", "#b4b8cf", "#4fc979", "#c1cd23"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// var options = {
//   series: [
//     {
//       data: [
//         { x: "경제", y: 1850 },
//         { x: "세계", y: 332 },
//         { x: "IT/인터넷/통신", y: 294 },
//         { x: "금융", y: 276 },
//         { x: "생활", y: 262 },
//       ],
//     },
//   ],
//   legend: {
//     show: false,
//   },
//   chart: {
//     height: 350,
//     type: "treemap",
//   },
//   title: {
//     text: "Distibuted Treemap (different color for each cell)",
//     align: "center",
//   },
//   colors: ["#a3e1d4", "#dedede", "#b4b8cf", "#4fc979", "#c1cd23"],
//   plotOptions: {
//     treemap: {
//       distributed: true,
//       enableShades: false,
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();
