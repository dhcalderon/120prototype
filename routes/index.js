var data = require("../data.json");

exports.view = function(request, response){
	console.log("index loaded");
	response.render('index', data);
};

exports.login = function(request, response){
	console.log("login loaded");
	response.render('login', data);
};

exports.add = function(request, response){
	console.log("add loaded");
	response.render('secondPage', data);
};