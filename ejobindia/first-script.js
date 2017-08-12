	function abc(obj)
	{
	var id = obj;
	if(id==='plus'){
	var a= document.getElementById("fn").value;
	var b= document.getElementById("sn").value;
	var c= parseInt(a)+parseInt(b);
	w1.innerHTML=c;
	}
	if(id==='minus'){
	var a= document.getElementById("fn").value;
	var b= document.getElementById("sn").value;
	var c= parseInt(a)-parseInt(b);
	w1.innerHTML=c;
	}
	if(id==='mul'){
		var a= document.getElementById("fn").value;
	var b= document.getElementById("sn").value;
	var c= parseInt(a)*parseInt(b);
	w1.innerHTML=c;
	}
	if(id==='div'){
		var a= document.getElementById("fn").value;
	var b= document.getElementById("sn").value;
	var c= parseInt(a)/parseInt(b);
	w1.innerHTML=c;
	}

}
