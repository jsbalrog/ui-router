var path = require('path');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.get('/api/*', function(req, res) {
		res.json({"msg": "Hello"});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname,'./app/public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
	});
};
