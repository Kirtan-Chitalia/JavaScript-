const mybtn = document.getElementById("btn");
const mylabel1 = document.getElementById("label1");
const mylabel2 = document.getElementById("label2");
const mylabel3 = document.getElementById("label3");

const min = 1;
const max = 6 ;
let randomNumber1 ;
let randomNumber2 ;
let randomNumber3 ;

mybtn.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * max) + min;
    mylabel1.textContent = randomNumber1;

    randomNumber2 = Math.floor(Math.random() * max) + min;
    mylabel2.textContent = randomNumber2;

    randomNumber3 = Math.floor(Math.random() * max) + min;
    mylabel3.textContent = randomNumber3;
}
