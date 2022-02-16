// List of words
var myWords = [
  { word: "경제", size: "100" },
  { word: "세계", size: "33" },
  { word: "IT/인터넷/통신", size: "29" },
  { word: "금융", size: "27" },
  { word: "생활", size: "26" },
];

var color = d3
  .scaleOrdinal()
  .domain(["경제", "세계", "IT/인터넷/통신", "금융", "생활"])
  .range(["#a3e1d4", "#dedede", "#b4b8cf", "#4fc979", "#c1cd23"]);

const fill = ["#a3e1d4", "#dedede", "#b4b8cf", "#4fc979", "#c1cd23"];

// set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout
  .cloud()
  .size([width, height])
  .words(
    myWords.map(function (d) {
      return { text: d.word, size: d.size };
    })
  )
  .padding(5) //space between words
  .rotate(function () {
    return ~~(Math.random() * 2) * 90;
  })
  .fontSize(function (d) {
    return d.size;
  }) // font size of words
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here

function draw(words) {
  svg
    .append("g")
    .attr(
      "transform",
      "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
    )
    .selectAll("text")
    .data(words)
    .enter()
    .append("text")
    .style("fill", function (d, i) {
      return fill[i];
    })
    .style("font-size", function (d) {
      return d.size;
    })
    .attr("text-anchor", "middle")
    .style("font-family", "Impact")
    .attr("transform", function (d) {
      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function (d) {
      return d.text;
    });
}
