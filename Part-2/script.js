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