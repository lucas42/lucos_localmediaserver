const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Hacky middleware to only expose files ending in .mp3
app.get('*', function(req, res, next){
	if (!req.url.endsWith(".mp3")) {
		res.status(404).send("Not an mp3");
		return;
	}
	next();
});

// This is really bad practice
app.use(express.static('/'));

app.listen(port, function () {
  console.log('App listening on port ' + port);
});