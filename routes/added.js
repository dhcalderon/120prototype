var data = require("../data.json");

exports.addTask = function(request, response) {  
	newTask = {
		"name": request.query.taskName,
		"importance": request.query.imRange,
		"urgency": request.query.urRange
	}
	data.tasks.push(newTask);
	response.render('login', data);
	console.log("task added");
	console.log(data);
}