const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Hacky middleware to only expose files ending in .mp3
app.get('*', function(req, res, next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	if (!req.url.endsWith(".mp3") && !req.url.endsWith(".ogg")) {
		res.status(404).send("Not a recognised audio file");
		return;
	}
	next();
});

// This is really bad practice
app.use(express.static('/'));

app.listen(port, 'localhost', function () {
  console.log('App listening on port ' + port);
});