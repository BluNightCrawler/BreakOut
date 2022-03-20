// var objbg=null;

let box = document.querySelector('.box');
let moveBy =10;


window.addEventListener('load', ()=>{
    box.style.position ='absolute';
    box.style.left=0;
    box.style.top=0;
});

window.addEventListener('keyup', (e)=>{
    switch(e.key){
        case'ArrowLeft':
        box.style.left = parseInt(box.style.left) - moveBy + "px";
        break;
        case'ArrowRight':
        box.style.left = parseInt(box.style.left) + moveBy + "px";
        break;
        case'ArrowUp':
        box.style.top = parseInt(box.style.top) - moveBy + "px";
        break;
        case'ArrowDown':
        box.style.top = parseInt(box.style.top) + moveBy + "px";
        break;
        
    }
})
function color(){
    document.getElementsByClassName('box').style.color = "yellow";
    alert("This button activates");
}



//THIS IS FOR AN IMAGE
// function init(){
//     objbg = document.getElementById("box");
//     objbg.style.postion = "relative";
//     objbg.style.left = "0px";
//     objbg.style.top = "0px";


// }
// function getKeyAndMove(e){
//     var key_code = e.which || e.KeyCode;
//     switch(key_code){
//         case 37: //Left arrow
//         moveLeft();
//         break;
//         case 38:
//         moveUp();
//         break;
//         case 39: //right
//         moveRight();
        
//         break;
//         case 40: //down
//         moveDown();
//         break;
//     }
// }
// function moveLeft(){
//     objbg.style.left = parseInt(objbg.style.left) -5 + "px";
// }
// function moveUp(){
//     objbg.style.top = parseInt(objbg.style.top) -5 + "px";

// }
// function moveRight(){
//     objbg.style.left = parseInt(objbg.style.left) +5 + "px";

// }
// function moveDown(){
//     objbg.style.top = parseInt(objbg.style.top) +5 + "px";

// }
window.onload =init;