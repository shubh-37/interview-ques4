var input = document.querySelector("#input");
var output = document.querySelector("#output");
var redBtn = document.querySelector("#red");
var blueBtn = document.querySelector("#blue");
var greenBtn = document.querySelector("#green");
var submitBtn = document.querySelector("#submit");

function clickHandler(){
    output.innerText = input.value;
}

function redHandler(){
    output.style.color = "red";
}

function blueHandler(){
    output.style.color = "blue";
}

function greenHandler(){
    output.style.color = "green";
}

redBtn.addEventListener("click", redHandler);
blueBtn.addEventListener("click", blueHandler);
greenBtn.addEventListener("click", greenHandler);
submitBtn.addEventListener("click", clickHandler);
