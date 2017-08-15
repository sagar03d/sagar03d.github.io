$(document).ready(function() {
    $('#main').fadeIn(1200);
});

function time(){
	time = new Date();

var hh = time.getHours();
var mm = time.getMinutes();
var ss = time.getSeconds() 
document.getElementById("t").innerHTML = hh + ":" + mm + ":" + ss;
}
function hello(){
		document.getElementById("mv").innerHTML = "Hello Visitor!";
}
function bye(){
		document.getElementById("mv").innerHTML = "Sagar Dolui";
}
