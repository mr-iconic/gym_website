

function onclickmenu() {
    var x=document.getElementById("item");
    if(x.style.display==="block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}
function onclick1() {
    var x=document.getElementById("form");
    var y=document.getElementById("form2");
    if(x.style.display==="block"){
        x.style.display="none";
        y.style.display="block";
    }else{
        x.style.display="block";
        y.style.display="none";
    }
}