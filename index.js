'use strict';

const csv = require('csv'),
      fs = require('fs'),
      inventory = fs.readFileSync('./AutoSoftNET_SampleInventory.txt', 'utf-8');

csv.parse(inventory, function (err, records) {
	console.log(err);
	console.log(records);	
});
