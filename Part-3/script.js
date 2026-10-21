var box = document.getElementById("task-5-box");

function mouseOver(){
    box.style.backgroundColor = "rgb(14, 14, 15)";
    box.style.color = "rgb(188, 188, 48)";
    box.innerHTML = "YES!";
}
box.addEventListener("mouseover", mouseOver);

function mouseOut(){
    box.style.backgroundColor = "rgb(188, 188, 48)";
    box.style.color = "rgb(14, 14, 15)";
    box.innerHTML = "NO! <br> YOU'RE OUT!";
}
box.addEventListener("mouseout", mouseOut);

var key = document.getElementById("key");

function pressed(){
    document.getElementById("result").innerHTML = "You pressed: " + event.key;
}
key.addEventListener("keyup", pressed)

function calculate(operator){
    var number1 = Number(document.getElementById("first-number").value);
    var number2 = Number(document.getElementById("second-number").value);
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
            document.getElementById("calc-result").innerHTML = "Result: You can not divide by 0 brochacho";
            return;
        }
        result = number1 / number2;
    }
    
    document.getElementById("calc-result").innerHTML = "Result: " + result;
}

document.getElementById("addition").addEventListener("click", function() {calculate('+');});
document.getElementById("subtraction").addEventListener("click", function() {calculate('-');});
document.getElementById("multiplication").addEventListener("click", function() {calculate('*');});
document.getElementById("division").addEventListener("click", function() {calculate('/');});