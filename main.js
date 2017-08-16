$(document).ready(function() {
    $('#main').fadeIn(2000);
    $("#mv").mouseover(function(){
    	$("#mv").html("Hello Visitor!");
    });
    $("#mv").mouseout(function(){
    	$("#mv").html("Sagar Dolui");
    });
});

function time(){
	time = new Date();

var hh = time.getHours();
var mm = time.getMinutes();
var ss = time.getSeconds() 
document.getElementById("t").innerHTML = hh + ":" + mm + ":" + ss;
}

function check(){
	var elm;
	elm = document.getElementById("pro").value;
	if(elm==""){
		alert("Please select a project");
	}
	else{
		window.open(elm,'newtab'+elm);
	}
}