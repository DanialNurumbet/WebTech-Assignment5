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