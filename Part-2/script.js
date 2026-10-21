function changingText (){
    document.getElementById("aitu-text").innerHTML = "Season 2 of Cyberpunk Edgerunners is out!!!"
}
btn = document.getElementById("button-change")
btn.addEventListener("click", changingText);

function changingBGcolor (){
    document.getElementById("task-3-container").style.backgroundColor = "rgb(188, 188, 48)";
    document.getElementById("task-3-container").style.color = "rgb(14, 14, 15)";
}

function changingFontSize (){
    document.getElementById("task-3-container").style.fontSize = "24px";
}

document.getElementById("button-bg-change").addEventListener("click", changingBGcolor);
document.getElementById("button-font-change").addEventListener("click", changingFontSize);

var list = document.getElementById("list");

function addItem(){
    var item = document.createElement("li");
    item.innerHTML = "WOW, Another list element!";
    list.appendChild(item);
}
function removeItem(){
    if (list.lastElementChild){
        list.removeChild(list.lastElementChild)
    }
}

document.getElementById("button-add").addEventListener("click", addItem)
document.getElementById("button-remove").addEventListener("click", removeItem)