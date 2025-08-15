const textbox = document.getElementById("textbox");
const result = document.getElementById("result");
const toFarhrenheit = document.getElementById("toFarhrenheit");
const toCelsius = document.getElementById("toCelsius");
let temp;


function convert(){
    if (toFarhrenheit.checked) {
        temp = Number(textbox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = `${temp.toFixed(1)} °F`;
    }
    else if (toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = `${temp.toFixed(1)} °C`;
    }
    else{
        result.textContent = "Please select a conversion unit.";
    }
}