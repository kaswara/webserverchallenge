'use strict';
const fs = require('fs');
const bodyParser = require('body-parser');
///////////////////////////////////////////////////



module.exports = {
	
	// Compute the sum of all numbers in array arr
	sumAllOfArray: function(arr){
		var sum = 0;
		for (var i in arr) {
			sum += arr[i];
		}
		return sum;
	},

	// Compute the digit sum of a number x
	computeDigitSum: function(x){
		var digitsSum = 0;
		while (x) {
			digitsSum += x % 10;
			x = Math.floor(x / 10);
		}
		return digitsSum;
	},

	// Read Json file from a given path pathToJsonFile
	readJsonFileToObject: function(pathToJsonFile){
		//app.use(bodyParser.json());
		//app.use(bodyParser.urlencoded({ extended: true }));
		/*const readFile = (callback, returnJson = false, filePath = pathToJsonFile, encoding = 'utf8') => {
			fs.readFile(filePath, encoding, (err, dataObject) => {
				if (err) {
					throw err;
				}
				callback(returnJson ? JSON.parse(dataObject) : dataObject);
			});
		};
		
		return readFile;*/
		let rawdata = fs.readFileSync(pathToJsonFile);
		let dataObject = JSON.parse(rawdata);
		return dataObject;
	//}
	}
};