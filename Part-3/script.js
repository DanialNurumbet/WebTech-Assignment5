var box = document.querySelector("#task-5-box");

function mouseOver(){
    box.style.backgroundColor = "rgb(14, 14, 15)";
    box.style.color = "rgb(188, 188, 48)";
    box.textContent = "YES!";
}
box.addEventListener("mouseover", mouseOver);

function mouseOut(){
    box.style.backgroundColor = "rgb(188, 188, 48)";
    box.style.color = "rgb(14, 14, 15)";
    box.innerHTML = "NO! <br> YOU'RE OUT!";
}
box.addEventListener("mouseout", mouseOut);

var key = document.querySelector("#key");

function pressed(){
    var text = key.value;
    document.querySelector("#result").textContent = "You typed: " + text;
}
key.addEventListener("keyup", pressed)

function calculate(operator){
    var number1 = Number(document.querySelector("#first-number").value);
    var number2 = Number(document.querySelector("#second-number").value);
    var result;

    if (operator == '+'){
        result = number1 + number2;
    }
    else if (operator == '-'){
        result = number1 - number2;
    }
    else if (operator == '*'){
        result = number1 * number2;
    }
    else if (operator == '/'){
        if (number2 == 0){
            document.querySelector("#calc-result").textContent = "Result: You can not divide by 0 brochacho";
            return;
        }
        result = number1 / number2;
    }
    
    document.querySelector("#calc-result").textContent = "Result: " + result;
}

document.querySelector("#addition").addEventListener("click", function() {calculate('+');});
document.querySelector("#subtraction").addEventListener("click", function() {calculate('-');});
document.querySelector("#multiplication").addEventListener("click", function() {calculate('*');});
document.querySelector("#division").addEventListener("click", function() {calculate('/');});