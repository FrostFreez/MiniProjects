let method = 1;
function changeMethod(){
    method *= -1;
    if(method == -1){document.getElementById("changeMethod").innerHTML = 'HEX';}
    if(method == 1){document.getElementById("changeMethod").innerHTML = 'RGB';}
    
}
function changeColor(){
    if(method == 1){
        let color = [0, 0, 0, 0, 0, 0];
        let bC = [0, 0, 0, 0, 0, 0];
        let newColor = "#";
        let newBC = "#";
        let test = 0;
        let test2 = 0;
        for(let x in color){
            test = Math.floor(Math.random() * 16);
            test2 = 15 - test;
            switch(test){
                case 10: color[x] = 'A'; break;
                case 11: color[x] = 'B'; break;
                case 12: color[x] = 'C'; break;
                case 13: color[x] = 'D'; break;
                case 14: color[x] = 'E'; break;
                case 15: color[x] = 'F'; break;
                default: color[x] = test;
            }
            switch(test2){
                case 10: bC[x] = 'A'; break;
                case 11: bC[x] = 'B'; break;
                case 12: bC[x] = 'C'; break;
                case 13: bC[x] = 'D'; break;
                case 14: bC[x] = 'E'; break;
                case 15: bC[x] = 'F'; break;
                default: bC[x] = test2;
            }
        }
        newColor = newColor + color[0] + color[1] + color[2] + color[3] + color[4] + color[5];
        newBC = newBC + bC[0] + bC[1] + bC[2] + bC[3] + bC[4] + bC[5];        
        document.getElementById("textColor").style.color = newColor;
        document.getElementById("textColor").innerHTML = newColor;
        document.getElementById("textColor").style.backgroundColor = newBC;        
        document.getElementsByTagName("body")[0].style.backgroundColor = newColor;
    } else{
        let color = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
        let bC = [255 - color[0], 255 - color[1], 255 - color[2]];
        document.getElementById("textColor").style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        document.getElementById("textColor").innerHTML = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        document.getElementById("textColor").style.backgroundColor = `rgb(${bC[0]}, ${bC[1]}, ${bC[2]})`;        
        document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
}