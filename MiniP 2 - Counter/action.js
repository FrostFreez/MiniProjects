let where = 0;
function changePerson(opr){
    if(opr == "R"){
        where = 0;
    }else if(opr == 'PR'){
        where += Math.floor(Math.random()*10) + 1;
    }else if(opr == 'NR'){
        where -= Math.floor(Math.random()*10) + 1;
    }else{where += opr;}
    document.getElementById("index").innerHTML = "" + where;
}