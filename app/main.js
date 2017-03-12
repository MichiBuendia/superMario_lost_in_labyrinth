$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(key.which) {
			// Left arrow key pressed
			case 37:
				$('#supermario').css({"position":"absolute","left":"-=10px",});
				break;
			// Up Arrow Pressed
			case 38:
				$('#supermario').css({"position":"absolute","top":"-=10px",});
				break;
			// Right Arrow Pressed
			case 39:
				$('#supermario').css({"position":"absolute","left":"+=10px",});
				break;
			// Down Arrow Pressed
			case 40:
				$('#supermario').css({"position":"absolute","top":"+=10px",});
				break;
			default:
			alert("Wrong Taste!");

		}
	});
/*
function meet(){
	if $('#supermario').css({"position":"absolute","top":"=50%","right":"0px"}){
		alert("You Win!!!!");
	}
}

meet();
*/

});
