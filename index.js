var express = require('express');
var app = express();
var iTunes = require('local-itunes');

app.get('/status', function(req, res){
	console.log("[GET] /status");
	iTunes.playerState(function(error, state){
	  res.json({ state: state });
	});
});

app.get('/play', function(req, res){
	console.log("[GET] /play");
	iTunes.play();
	iTunes.playerState(function(error, state){
	  res.json({ state: state });
	});
});

app.get('/pause', function(req, res){
	console.log("[GET] /pause");
	iTunes.pause();
	iTunes.playerState(function(error, state){
	  res.json({ state: state });
	});
});

app.get('/playpause', function(req, res){
	console.log("[GET] /playpause");
	iTunes.playpause();
	iTunes.playerState(function(error, state){
	  res.json({ state: state });
	});
});

app.get('/previous', function(req, res){
	console.log("[GET] /previous");
	iTunes.previous();
	res.end();
});

app.get('/next', function(req, res){
	console.log("[GET] /next");
	iTunes.next();
	res.end();
});

module.exports = {
	start: function(port) {
		var server = app.listen(port);
		console.log('iTunes Control API started on port ' + port);
		return server;
	}
};
