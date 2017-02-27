/* global d3 */

// var date = new Date(Date.parse("2016-12-23"))
// console.log(date)

d3.json('./data/index.json', function (error, data) {
  if (error) throw error

  var items = data.elements

  d3.select('#items')
    .selectAll('.items')
    .data(items)
    .enter()
    .append('div')
    .attr('class', '.items col-xs-12 col-sm-6 col-md-4 col-lg-3')
    .append('a')
    .attr('href', function (d) { return d.href })
    .append('img')
    .attr('class', 'img-responsive center-block cuadricula')
    .attr('alt', function (d) { return d.title })
    .attr('src', function (d) { return d.img })

  var songs = items.filter(function (d) {
    return d.tag === 'songs'
  })

  console.log(songs)
})
