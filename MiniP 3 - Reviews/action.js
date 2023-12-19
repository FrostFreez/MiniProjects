const people = [["https://imgur.com/8fepWse.jpeg", "Marie"],
                ["https://imgur.com/QvBPzlP.jpeg", "Jorge"],
                ["https://imgur.com/91ZE7qm.jpeg", "Bianca"],
                ["https://imgur.com/X5rF4hQ.jpeg", "Milton"]];
let where = 0;
function changePerson(opr){
    if(opr == "R"){
        where = Math.floor(Math.random() * people.length);
    }else{where += opr;}
    if(where > people.length - 1){where = 0;}
    if(where < 0){where = people.length - 1;}
    document.getElementById("img").src = people[where][0];
    document.getElementById("name").innerHTML = people[where][1];
    document.getElementById("index").innerHTML = "Person No" + (where + 1);
}