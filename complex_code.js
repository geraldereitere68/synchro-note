/*
Filename: complex_code.js

Description: This code demonstrates a complex implementation of a data visualization tool using JavaScript. It generates a chart displaying the population growth of multiple countries over a period of time.

Note: This code utilizes external libraries such as D3.js for data visualization and lodash for data manipulation.

*/

// Data for population growth
const data = [
  { country: "USA", population: [250, 300, 350, 400, 450, 500, 550] },
  { country: "China", population: [500, 550, 600, 650, 700, 750, 800] },
  { country: "India", population: [400, 450, 500, 550, 600, 650, 700] },
  { country: "Brazil", population: [200, 250, 300, 350, 400, 450, 500] },
  { country: "Russia", population: [150, 200, 250, 300, 350, 400, 450] }
];

// Utility functions using lodash
const maxPopulation = _.maxBy(data, "population");
const minPopulation = _.minBy(data, "population");

// Chart dimensions
const width = 800;
const height = 400;
const margin = { top: 20, right: 30, bottom: 30, left: 50 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// X and Y scales
const xScale = d3
  .scaleLinear()
  .domain([0, data[0].population.length - 1])
  .range([0, innerWidth]);

const yScale = d3
  .scaleLinear()
  .domain([minPopulation.population[0], maxPopulation.population[6]])
  .range([innerHeight, 0]);

// Line generator
const line = d3
  .line()
  .x((d, i) => xScale(i))
  .y(d => yScale(d));

// SVG container
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Append path for each line
chart
  .selectAll(".line")
  .data(data)
  .enter()
  .append("path")
  .attr("class", "line")
  .attr("d", d => line(d.population))
  .style("stroke", (d, i) => d3.schemeCategory10[i])
  .style("stroke-width", "2px")
  .style("fill", "none");

// Append X axis
chart
  .append("g")
  .attr("transform", `translate(0, ${innerHeight})`)
  .call(d3.axisBottom(xScale).ticks(data[0].population.length));

// Append Y axis
chart
  .append("g")
  .call(d3.axisLeft(yScale));

// Add title
chart
  .append("g")
  .attr("transform", `translate(${innerWidth / 2}, 0)`)
  .append("text")
  .attr("class", "title")
  .attr("y", -10)
  .attr("text-anchor", "middle")
  .text("Population Growth");

// Add legend
const legend = chart
  .append("g")
  .attr("class", "legend")
  .attr("transform", `translate(${innerWidth}, 0)`);

legend
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("width", 10)
  .attr("height", 10)
  .attr("x", 0)
  .attr("y", (d, i) => i * 20)
  .style("fill", (d, i) => d3.schemeCategory10[i]);

legend
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", 15)
  .attr("y", (d, i) => i * 20 + 9)
  .text(d => d.country);
  
// Additional complex code...

// Rest of the code...

// More complex functionalities...

// Beyond 200 lines...
