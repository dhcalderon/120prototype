var data = require("../data.json");

exports.getJson = function(request, response) {
	var name = request.query.name;
	console.log(name);
	for (i = 0; i<data.tasks.length; i++){
		if (data.tasks[i].name == name) {
			console.log(data.tasks[i])
			response.send(data.tasks[i]);
		}
	}
}

exports.delete = function(request, response) {
	var name = request.query.name;
	console.log(name);
	for (i = 0; i<data.tasks.length; i++){
		if (data.tasks[i].name == name) {
			console.log(data.tasks[i]);
			delete data.tasks[i];
			response.render('login', data);
		}
	}
}