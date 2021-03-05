function checkLogInState(){
	FB.getLoginStatus(function(response){
		statusChangeCallback(response);
	})
}

function statusChangeCallback(response){
	if(response.status==='connected'){
		console.log('successfully logged in with FB');
		response.render('login', data);
	}
}