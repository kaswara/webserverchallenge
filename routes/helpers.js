'use strict';
const fs = require('fs');

module.exports = {
	
	// Compute the sum of all numbers in array arr
	sumAllOfArray: function(arr){
		if (arr.length == 0) 
			return 0;
		var sum = 0;
		for (var i in arr) {
			sum += arr[i];
		}
		return sum;
	},

	// Compute the digit sum of a number x
	computeDigitSum: function(x){
		if (x == null)
		return 0;
	
		if (typeof(x) != 'number')
		throw new TypeError('Invalid Argument Type');
		
		var digitsSum = 0;
		while (x) {
			digitsSum += x % 10;
			x = Math.floor(x / 10);
		}
		return digitsSum;
	},

	// Read Json file from a given path pathToJsonFile
	readJsonFileToObject: function(pathToJsonFile){
		var rawdata;
		var dataObject;
		if (pathToJsonFile == '')
			throw new Error('No file');
		try {
				rawdata = fs.readFileSync(pathToJsonFile,'utf8');
		} catch(err) {
				console.error(err)
		}
		try {
				dataObject = JSON.parse(rawdata)
		} catch(err) {
				console.error(err)
		}
		return dataObject;
	}
};