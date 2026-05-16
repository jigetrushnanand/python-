// Sample data
const data = [
  { month: 'Jan', sales: 65 },
  { month: 'Feb', sales: 59 },
  { month: 'Mar', sales: 80 },
  { month: 'Apr', sales: 81 },
  { month: 'May', sales: 56 },
  { month: 'Jun', sales: 55 }
];

// Set dimensions
const margin = { top: 20, right: 30, bottom: 40, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create SVG
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

// Create scales
const x = d3.scaleBand()
  .domain(data.map(d => d.month))
  .range([0, width])
  .padding(0.2);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.sales)])
  .nice()
  .range([height, 0]);

// Add X axis
svg.append('g')
  .attr('class', 'axis')
  .attr('transform', `translate(0,${height})`)
  .call(d3.axisBottom(x));

// Add Y axis
svg.append('g')
  .attr('class', 'axis')
  .call(d3.axisLeft(y));

// Add bars with animation
svg.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => x(d.month))
  .attr('width', x.bandwidth())
  .attr('y', height)
  .attr('height', 0)
  .transition()
  .duration(800)
  .delay((d, i) => i * 100)
  .attr('y', d => y(d.sales))
  .attr('height', d => height - y(d.sales));

// Add Y axis label
svg.append('text')
  .attr('transform', 'rotate(-90)')
  .attr('y', -40)
  .attr('x', -height / 2)
  .attr('text-anchor', 'middle')
  .text('Sales');