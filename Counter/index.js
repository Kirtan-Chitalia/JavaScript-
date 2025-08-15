const decreaseBtn = document.getElementById("Decreasebtn");
const resetBtn = document.getElementById("Resetbtn");
const increaseBtn = document.getElementById("Increasebtn");
const countLabel = document.getElementById("Countlable");
let count =0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}