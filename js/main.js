$(document).ready(function() {
    $("#mv").mouseover(function(){
    	$("#mv").html("Hello Visitor!");
    });
    $("#mv").mouseout(function(){
    	$("#mv").html("Sagar Dolui");
    });
	$.get("https://ipapi.co/json", function(data, status){
	console.log(data.timezone +'\n'+ data.org +'\n' + data.country_name);
    });

});
function timeupdate(){
	setInterval("time()",1000);
}
function time(){
	var hour;
	var time = new Date();
var hh = time.getHours();
var mm = time.getMinutes();
var ss = time.getSeconds() 
if(hh>=12){
	hour = hh-12;
}
else{
	hour=hh;
}
document.getElementById("t").innerHTML = hour + ":" + mm + ":" + ss;
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
