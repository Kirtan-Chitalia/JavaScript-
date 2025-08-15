const checkbox = document.getElementById("checkbox1");
const visaBtn = document.getElementById("visabtn");
const mastercardBtn = document.getElementById("mastercardbtn");
const amexBtn = document.getElementById("amexbtn");
const submitBtn = document.getElementById("submitBtn");
const subresult = document.getElementById("subresult");
const paymentResult = document.getElementById("Paymentresult");

submitBtn.onclick =function(){

    if(checkbox.checked){
        subresult.textContent = "Subscribed";
    }
    else{
        subresult.textContent = "Not Subscribed";
    }
    if(visaBtn.checked){
        paymentResult.textContent = "Visa Card Selected";
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "MasterCard Selected";
    }
    else if(amexBtn.checked){
        paymentResult.textContent = "American Express Selected";
    }
    else{
        paymentResult.textContent = "No Card Selected";
    }
}