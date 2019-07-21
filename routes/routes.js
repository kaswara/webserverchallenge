// load up our shiny new route for users
const addressRoutes = require('./address');
const appRouter = (app, fs) => {
    
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

// this line is unchanged
module.exports = appRouter;