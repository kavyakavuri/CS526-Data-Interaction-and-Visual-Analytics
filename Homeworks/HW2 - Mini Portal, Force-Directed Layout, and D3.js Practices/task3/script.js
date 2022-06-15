d3.csv('asoiaf_nodes_prop.csv', function (data) {
  //format data
  let maxGroup = -1
  data.forEach(function(d){
    if(d.peel>maxGroup){
      maxGroup = d.peel;
    }
  });
  // console.log("max peel: ",maxGroup);
  data.forEach(function(d){
    d.peel = d.peel/maxGroup;
    console.log("new d.peel: ",d.peel);
  });
  // Variables
  var body = d3.select('body')
	var margin = { top: 50, right: 50, bottom: 50, left: 50 }
	var h = 900 - margin.top - margin.bottom
	var w = 1800 - margin.left - margin.right
	var formatPercent = d3.format('.2%')
	// Scales
  var colorScale = d3.interpolateTurbo();
  var xScale = d3.scale.linear()
    .domain([
    	d3.min([0,d3.min(data,function (d) { return d.pagerank == 0 ? 0 :  Math.log(d.pagerank) })]),
    	d3.max([0,d3.max(data,function (d) { return d.pagerank == 0 ? 0 :  Math.log(d.pagerank) })])
    	])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([
    	d3.min([0,d3.min(data,function (d) { return d.betweenness == 0 ? 0 : Math.log(d.betweenness) })]),
    	d3.max([0,d3.max(data,function (d) { return d.betweenness == 0 ? 0 :  Math.log(d.betweenness) })])
    	])
    .range([h,0])
	// SVG
	var svg = body.append('svg')
	    .attr('height',h + margin.top + margin.bottom)
	    .attr('width',w + margin.left + margin.right)
	    .append('g')
	    .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
      .call(d3.zoom().on("zoom", function () {
       svg.attr("transform", d3.event.transform)
       }))
	// X-axis
	var xAxis = d3.svg.axis()
	  .scale(xScale)
	  // .tickFormat(formatPercent)
	  .ticks(5)
	  .orient('bottom')
  // Y-axis
	var yAxis = d3.svg.axis()
	  .scale(yScale)
	  // .tickFormat(formatPercent)
	  .ticks(5)
	  .orient('left')
  // Circles
  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) { return d.pagerank == 0 ? xScale(0): xScale(Math.log(d.pagerank)) })
      .attr('cy',function (d) { return d.betweenness== 0 ? yScale(0) : yScale(Math.log(d.betweenness)) })
      .attr('r',function (d) { return d.degree })
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { return d3.interpolateTurbo(d.peel) })
      // .on('mouseover', function () {
      //   d3.select(this)
      //     .transition()
      //     .duration(500)
      //     .attr('r',20)
      //     .attr('stroke-width',3)
      // })
      // .on('mouseout', function () {
      //   d3.select(this)
      //     .transition()
      //     .duration(500)
      //     .attr('r',10)
      //     .attr('stroke-width',1)
      // })
    .append('title') // Tooltip
      .text(function (d) { return 'Name: ' + d.name + '\nDegree ' + d.degree + '\nPagerank '+ d.pagerank+ '\nBetweenness ' + d.betweenness+
                           '\nDiversity '+d.diversity+
                           '\nPeel '+maxGroup*d.peel})
  // X-axis
  var gX = svg.append('g')
      .attr('class','axis')
      .attr('transform', 'translate(0,' + h + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',-10)
      .attr('x',w)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Pagerank')
  // Y-axis
  var gY = svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',0)
      .attr('y',5)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Betweenness Centraility')
  function zoom() {
      gX.call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
      gY.call(yAxis.scale(d3.event.transform.rescaleY(yScale)));

      var new_XScale = d3.event.transform.rescaleX(xScale);
      var new_yScale = d3.event.transform.rescaleY(yScale);

      circles.attr("cx", function (d) { return new_XScale(d.xAxisValue) });
      circles.attr("cy", function (d) { return new_yScale(d.yAxisValue) });
  }
})