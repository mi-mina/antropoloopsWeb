/* global d3 */

var filterBy = d3.select('#content')
  .attr('class')

d3.json('../data/index.json', function (error, data) {
  if (error) throw error
  console.log(filterBy)

  var items = data.elements.filter(function (d) {
    return d.tag === filterBy
  }).reverse()

  d3.select('#items')
    .selectAll('.items')
    .data(items)
    .enter()
    .append('div')
    .attr('class', '.items col-xs-12 col-sm-6 col-md-4 col-lg-3')
    .append('a')
    .attr('href', function (d) { return '../' + d.href })
    .append('img')
    .attr('class', 'img-responsive center-block cuadricula')
    .attr('alt', function (d) { return d.title })
    .attr('src', function (d) { return '../' + d.img })
})
