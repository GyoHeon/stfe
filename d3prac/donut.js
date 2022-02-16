// set the dimensions and margins of the graph
const width = 450,
  height = 450,
  margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
const svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`);

// Create dummy data
const data = {
  경제: 1850,
  세계: 332,
  "IT/인터넷/통신": 294,
  금융: 276,
  생활: 262,
};

// set the color scale
const color = d3
  .scaleOrdinal()
  .range(["#a3e1d4", "#dedede", "#b4b8cf", "#4fc979", "#c1cd23"]);

// Compute the position of each group on the pie:
const pie = d3.pie().value((d) => d[1]);

const data_ready = pie(Object.entries(data));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll("whatever")
  .data(data_ready)
  .join("path")
  .attr(
    "d",
    d3
      .arc()
      .innerRadius(100) // This is the size of the donut hole
      .outerRadius(radius)
  )
  .attr("fill", (d) => color(d.data[0]))
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7);
