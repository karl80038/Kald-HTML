var OldValue = document.getElementById("inputnumber");
var NewUnit = document.getElementById("unit");
var ConvValue = document.getElementById("convertedvalue");
const dollar = 1.1213;
function Calculate ()
{
    if (NewUnit.value === "dollar" || NewUnit.value === "Dollar" || NewUnit.value === "$" & OldValue.value > 0.0) 
    {
        var NewValue = (OldValue.value * dollar).toFixed(4);
        ConvValue.innerHTML = NewValue + " $";
    }
    else
    {
        alert("Väärtusi saab hetkel ainult eurodest dollariteks teisendada. Samuti veenduge, et olete sisestanud väärtuse, mida soovite teisendada.");
        ConvValue.innerHTML = "Väärtust polnud võimalik teisendada";
    }
}