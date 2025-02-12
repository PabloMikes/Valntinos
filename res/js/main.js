const body = document.getElementsByTagName("body")[0];
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

let height; 
let width;

window.onload = () =>{
    height = body.clientHeight
    width = body.clientWidth
}

yesButton.onclick = () =>{
    content1.style.display = "none";
    content2.style.display = "block";
}

noButton.onmouseenter = () =>{
    noButton.style.position = "absolute"
    height = body.clientHeight-50
    width = body.clientWidth-50
    let newH = Math.floor(Math.random()*height)
    let newW = Math.floor(Math.random()*width)
    noButton.style.top = newH + "px";
    noButton.style.left = newW + "px";
}