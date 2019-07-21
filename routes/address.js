//
const helpers = require('./helpers');
const adressRoutes = (app, fs) => {
    // variables
    const dataPath = './data/address.json';
	//Get results
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
	
	// GET the first color key
	app.post('/colorkeys', function (req, res) {
		  let fileDataObject = helpers.readJsonFileToObject(dataPath);
		  let colorkeyA = fileDataObject.address.colorKeys[0];
		  res.end(colorkeyA); 
	})
	
	// GET love
	app.get('/love', function (req, res) {
		  res.send("i love you"); 
	})
};

module.exports = adressRoutes;