/* global $ */

// var date = new Date(Date.parse("2016-12-23"))
// console.log(date)

$.ajax({
  url: './data/index.json',
  type: 'GET',
  dataType: 'json',
  success: printJson
})

function printJson (data) {
  console.log(data)
}
