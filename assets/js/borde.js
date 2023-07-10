borde = false;  
function cambiodeborde() {
    if (!borde) {
        imagen.style.border = "2px solid red";
        borde = true;
    } else {
        imagen.style.border = "none";
        borde = false;
    }
}
