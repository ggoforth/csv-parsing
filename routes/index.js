'use strict';

var express = require('express'),
	router = express.Router(),
	csv = require('csv'),
	file = 'AutoSoftNET_SampleInventory.txt',
	fs = require('fs'),
	fc = fs.readFileSync(file, 'utf-8'),
	title = 'AutoSoft csv parser';

/* GET home page. */
router.get('/', function(req, res, next) {
	csv.parse(fc, {
    skip_empty_lines: true, 
    relax: true, 
    escape: true, 
    delimiter: '|'
  }, function (err, _records) {
		let columns = _records[0], //array with a single entry, pipe delimited
			cars = _records.slice(1); //array of arrays

    console.log(cars);
    //This actually show the index view, passing to it the columns, cars, and title variables.
		res.render('index', {columns, cars, title});
	});
});

module.exports = router;
