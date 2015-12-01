var express = require('express');

var port = process.env.PORT || 8080;

var app = express();

app.get('/', function(req, res){
	res.send('dockerizando krggr!');
});

app.listen(port, function(err){
	if(!err) console.log('bitch, pleease ... '+port);
	else console.log('something wrooong ... ');
});
