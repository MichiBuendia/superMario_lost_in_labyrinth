$(document).keydown(function(key) {


	switch(key.which){

		case 40:
		$("#supermario").css({
			"position":"absolute",
			"bottom":"-=15px",
		})
		break;
		case 39:
		$("#supermario").css({
			"position":"absolute",
			"left":"+=15px;"
		})
		break;

		case 38:
		$("#supermario").css({
			"position":"absolute",
			"bottom":"+=15px",
		})
		break;
		case 37:
		$("#supermario").css({
			"position":"absolute",
			"right":"+=15px;"
		})
		break;
		default:
		alert("wrong taste!")
		break;



	};


})
