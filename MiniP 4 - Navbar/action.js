let position = 0;
let act = null;
clearInterval(act);
function upDown(opr){
    if(position == 0){
        act = setInterval(goDown, 10);
        opr.classList.toggle("change");
    } else if(position == 15){
        act = setInterval(goUp, 10);
        opr.classList.toggle("change");
    }
}
function goDown(){
    position += 0.5;
    if(position > 15){
        clearInterval(act);
        position = 15;
    }
    document.getElementById("links").style.top = position + "vh";
}
function goUp(){
    position -= 0.5;
    if(position < 0){
        clearInterval(act);
        position = 0;
    }
    document.getElementById("links").style.top = position + "vh"; 
}