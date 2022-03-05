import * as d3 from "d3";

const url = "https://udemy-react-d3.firebaseio.com/ages.json";

const data = [20, 12, 16, 25, 20];

export default class D3Chart {
  constructor(element) {
    const canvas = d3
      .select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    // single

    // canvas
    //   .append("rect")
    //   .attr("x", 50)
    //   .attr("y", 100)
    //   .attr("width", 50)
    //   .attr("height", 100)
    //   .attr("fill", "tomato");

    // array

    // data.forEach((d, i) => {
    //   canvas
    //     .append("rect")
    //     .attr("x", i * 60 + 50)
    //     .attr("y", 100)
    //     .attr("width", 50)
    //     .attr("height", d * 10)
    //     .attr("fill", "tomato");
    // });

    // d3 data join

    // const rects = canvas.selectAll("rect").data(data);

    // rects
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 60 + 50)
    //   .attr("y", 100)
    //   .attr("width", 50)
    //   .attr("height", (d) => d * 10)
    //   .attr("fill", "tomato");

    // d3 fetch data

    d3.json(url).then((agesData) => {
      const rects = canvas.selectAll("rect").data(agesData);

      rects
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 60 + 50)
        .attr("y", 100)
        .attr("width", 50)
        .attr("height", (d) => d.age * 10)
        .attr("fill", (d) => (d.age > 10 ? "tomato" : "green"));
    });
  }
}
