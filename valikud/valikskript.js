function tyhistaValikudRadio() {
	var elem = document.getElementsByName("valik");
	for (var i=0; i<elem.length; i++){
		elem[i].checked= false;}
}
function tyhistaValikudCheckBox() {
	var elem = document.getElementsByName("valik3");
	for (var i=0; i<elem.length; i++){
		elem[i].checked= false;}
}
function tyhistaValikudDropDown() {
	var elem = document.getElementById("valik2");
	for (var i=0; i<elem.options.length; i++){
		elem.options[i].selected= false;}
}

function radionupuValik() 
{
	tyhistaValikudCheckBox();
	tyhistaValikudDropDown();
	var punane=document.getElementById("punane");
	var must=document.getElementById("must");
	var sinine=document.getElementById("sinine");
	var valge=document.getElementById("valge");
	var pilt=document.getElementById("pilt");
	
	if (punane.checked) 
	{
		var valik=punane.value;
		pilt.src="red.png";	
	}
	if (must.checked) 
	{
		var valik=must.value;
		pilt.src="black.png";	
	}
	if (sinine.checked) 
	{
		var valik=sinine.value;
		pilt.src="blue.png";	
	}
	if (valge.checked) 
	{
		var valik=valge.value;
		pilt.src="white.png";	
	}
}

function rippmenyyValik() 
{
	tyhistaValikudCheckBox();
	tyhistaValikudRadio();
	var varv=document.getElementById("valik2").value;
	pilt.src=varv;

}

function checkboxValik() 
{
	tyhistaValikudDropDown();
	tyhistaValikudRadio();
	var t=0;
	var punane=document.getElementById("punanecheck");
	var must=document.getElementById("mustcheck");
	var sinine=document.getElementById("sininecheck");
	var valge=document.getElementById("valgecheck");
	
	if (punanecheck.checked) 
	{
		t+=1;
		if (t < 2) 
		{
			pilt.src="red.png";
			
		}
		else 
		{
			pilt.src="white.png";
		}
	}
	if(mustcheck.checked) 
	{
		t+=1;
		if (t < 2) 
		{
			pilt.src="black.png";

		}
		else 
		{
			pilt.src="white.png";
		}
	}
	if(valgecheck.checked) 
	{
		t+=1;
		if (t < 2) 
		{
			pilt.src="white.png";

		}
		else 
		{
			pilt.src="white.png";
		}
	}
	if(sininecheck.checked) 
	{
		t+=1;
		if (t < 2) 
		{
			pilt.src="blue.png";

		}
		else 
		{
			pilt.src="white.png";
		}
	}
	if (t < 1) 
	{
		pilt.src="white.png";
	}
}
