//
const helpers = require('./helpers');
const adressRoutes = (app, fs) => {
    // variables
    const dataPath = './data/address.json';
	//Read
	app.post('/address', function (req, res) {
		  let fileDataObject = helpers.readJsonFileToObject(dataPath);
		  //Sum the content of the data
		  var sum = helpers.sumAllOfArray(fileDataObject.address.values);
		  //Compute the digit sum
		  var digitsSum = helpers.computeDigitSum(sum);
		  //Write the result to a Json file
		  const resultJson = {
			"result":digitsSum
		  }
		  res.end(JSON.stringify(resultJson)); 
	})
	
	app.post('/colorkeys', function (req, res) {
		  let fileDataObject = helpers.readJsonFileToObject(dataPath);
		  let colorkeyA = fileDataObject.address.colorKeys[0];
		  res.end(colorKey); 
	})
	app.get('/love', function (req, res) {
		  //let fileDataObject = helpers.readJsonFileToObject(dataPath);
		  //let colorkeyA = fileDataObject.address.colorKeys[0];
		  res.send("i love you"); 
	})
};

module.exports = adressRoutes;