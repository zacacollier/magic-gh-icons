const _ = require('lodash')
const initialRatings = [
	'<div class="glyphicon star-empty" />',
	'<div class="glyphicon star-empty" />',
	'<div class="glyphicon star-empty" />',
	'<div class="glyphicon star-empty" />',
	'<div class="glyphicon star-empty" />'
]
const notEmptyRating = '<div class="glyphicon star-NOTEMPTY" />'
const exampleRating = 3

console.log(_.fill(initialRatings, notEmptyRating, 0, exampleRating))
