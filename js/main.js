/* global d3 */

// var date = new Date(Date.parse('2016-12-23'))
// console.log(date)

d3.json('data/index.json', function (error, data) {
  if (error) throw error

  var itemsArray = data.elements.reverse()

  var items = d3.select('#items')
    .selectAll('.items')
    .data(itemsArray)
    .enter()
    .append('div')
    .attr('class', 'items col-xs-12 col-sm-6 col-md-4 col-lg-3')

  var hrefs = items
    .append('a')
    .attr('href', function (d) { return d.href })

  hrefs
    .append('img')
    .attr('class', 'img-responsive center-block cuadricula')
    .attr('alt', function (d) { return d.title })
    .attr('src', function (d) { return d.img })

  var info = hrefs
    .append('div')
    .attr('class', 'imgTitle')

  info
    .append('p')

  info
    .append('p')
    .attr('class', 'tag')
    .text(function (d) { return d.tag })
  info
    .append('p')
    .attr('class', 'title')
    .text(function (d) { return d.title })
  info
    .append('p')
    .attr('class', 'date')
    .text(function (d) { return formatDate(d.date) })
})

function formatDate (dateString) {
  var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

  var date = new Date(dateString)
  var day = date.getDate()
  var monthIndex = date.getMonth()
  var year = date.getFullYear()

  return day + ' ' + monthNames[monthIndex] + ' ' + year
}
