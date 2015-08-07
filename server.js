'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var messages = ["DM5 Rocks!", "I can NODE", "IheartDEV"];

app.get('/', function(request, response) {
	response.send(JSON.stringify(messages));
});

app.post('/', function(request, response) {
	var newMsg = request.body.message;
	messages.push(newMsg);
	response.send(JSON.stringify(messages));
});

app.put('/api/person/:id', function(req, res) {
	var ourId = req.params.id;
	res.send("Your id is " + ourId);
});




app.listen(8080);







































// // var messages = [{username: 'Philipp Schulte', message: 'This is a test!'}];
// var messages = [];

// var http = require('http');

// //process.argv is the list of arguments in node
// var port = process.argv[2] || 3000;

// http.createServer(function(req, res) {
// 	switch (req.method) {
// 		case 'GET':
// 		    res.writeHead(200, {
// 		      	'Connection': 'close',
// 		      	'Content-Type': 'application/json',
// 		     	'Access-Control-Allow-Origin': '*'
// 		    });
// 		    res.end(JSON.stringify(messages));
// 			break;
// 		case 'POST':
// 	       	var postData = '';
// 	       	req.on('data', function(chunk) {
// 	        	postData += chunk.toString();
// 	        });
// 		    req.on('end', function() {
// 		      	//console.log(JSON.parse(postData));
// 		      	var msg = JSON.parse(postData);
// 		      	var timestamp = new Date();
// 		      	msg.timestamp = timestamp;
// 		      	messages.push(msg);
// 		     	res.writeHead(200, {
// 		        	'Connection': 'close',
// 		       		'Content-Type': 'application/json',
// 		        	'Access-Control-Allow-Origin': '*'
// 		    	});
// 		    	res.end(JSON.stringify(messages));
// 		    });
// 			break;
// 		case 'OPTIONS':
// 			res.writeHead(200, {
// 	  			'Connection': 'close',
// 	  			'Content-Type': 'application/json',
// 	 			'Access-Control-Allow-Origin': '*',
// 	 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 	  			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 			});
// 			res.end();
// 			break;
// 	}

// }).listen(port);
