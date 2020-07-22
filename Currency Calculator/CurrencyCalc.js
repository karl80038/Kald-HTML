var currency = document.getElementById("currency");
var input1 = document.getElementById("inputnumber");
var input2 = document.getElementById("inputnumber2");
var answer = document.getElementById("answer");
var answer2 = document.getElementById("answer2");


const dollar = 1.1213;
const sek = 10.5655;
const pound = 0.86;
const rouble = 68.5666;

function changeEventHandler(event)
{
	var inputValue = input1.value;
	
	if(event.target.value == "dollar")
	{
		answer.innerHTML = calculate(inputValue, dollar) + " $";
	}
	
	else if(event.target.value == "sek")
	{
		answer.innerHTML = calculate(inputValue, sek) + " kr";
	}
	
	else if(event.target.value == "pound")
	{
		answer.innerHTML = calculate(inputValue, pound) + " £";
	}
	
	else if(event.target.value == "rouble")
	{
		answer.innerHTML = calculate(inputValue, pound) + " RUB";
	}
}

function radioEventHandler(event)
{
	var inputValue = input2.value;
	
	if(event.target.id == "dollar")
	{
		answer2.innerHTML = calculate(inputValue, dollar) + " $";
	}
	
	else if(event.target.id == "sek")
	{
		answer2.innerHTML = calculate(inputValue, sek) + " kr";
	}
	
	else if(event.target.id == "pound")
	{
		answer2.innerHTML = calculate(inputValue, pound) + " £";
	}
	
	else if(event.target.id == "rouble")
	{
		answer2.innerHTML = calculate(inputValue, pound) + " RUB";
	}
}

function calculate(val, currency)
{
	return (val * currency).toFixed(4);
}
//Ülesanne: lisa kolmas variant. Kasuta kaht tekstikasti, kuhu kasutab sisestab summa ja valuuta nimetus , siis kohe kalkuleeritakse summa teise valuutasse
// Lisa tekstikastile valideerimine (kasutaja ei tohi tundmatut ühikut sisestada) ja lisa kujundus lehele
