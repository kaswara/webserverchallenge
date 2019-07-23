var addressRoutes = require('./address');
var appRouter = (app, fs) => {
    
	// Handle empty Post routes
    app.post('/', (req, res) => {
        res.end('Here ist Post');
    });
	
	// Handle empty Get routes
	app.get('/', (req, res) => {
       res.send('Here is Get');
    });
	
    // Run the routes
    addressRoutes(app, fs);
};

module.exports = appRouter;