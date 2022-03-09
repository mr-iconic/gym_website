// function onclickmenu(){

//     document.getElementById("menu").classList.toggle("hem");
//     document.getElementById("item").classList.toggle("change");
// }

function onclickmenu() {
    var x=document.getElementById("item");
    if(x.style.display==="block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}