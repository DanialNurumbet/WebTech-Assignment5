function changingText (){
    document.querySelector("#aitu-text").textContent = "Season 2 of Cyberpunk Edgerunners is out!!!"
}
btn = document.querySelector("#button-change")
btn.addEventListener("click", changingText);

function changingBGcolor (){
    document.querySelector("#task-3-container").style.backgroundColor = "rgb(188, 188, 48)";
    document.querySelector("#task-3-container").style.color = "rgb(14, 14, 15)";
}

function changingFontSize (){
    document.querySelector("#task-3-container").style.fontSize = "24px";
}

document.querySelector("#button-bg-change").addEventListener("click", changingBGcolor);
document.querySelector("#button-font-change").addEventListener("click", changingFontSize);

var list = document.querySelector("#list");

function addItem(){
    var item = document.createElement("li");
    item.innerHTML = "WOW, Another list element!";
    list.appendChild(item);
}
function removeItem(){
    list.removeChild(list.lastElementChild)
}

document.querySelector("#button-add").addEventListener("click", addItem)
document.querySelector("#button-remove").addEventListener("click", removeItem)