function fadeDiv(div){
    //Primero apago todos los divs cuando hago click en cualquier boton
    var divs  = document.getElementsByClassName("divsFotos");
    for (let index = 0; index < divs.length; index++) {
        divs[index].style.display = "none";
    }
    
    //Despues busco específicamente el div que quiero a través del click
    var myDiv = document.getElementById(div);
    myDiv.style.display = "block";
    myDiv.classList.add("fade-in-text");
}