function calcular() {
    const a = 10;
    const stikers1 = parseInt(document.getElementById("numero1").value);
    const stikers2 = parseInt(document.getElementById("numero2").value);
    const stikers3 = parseInt(document.getElementById("numero3").value);
    const parrafo = document.getElementById("parrafo__stikers");
    const suma = stikers1 + stikers2 + stikers3;

    // if (stikers1 = a) {
    //     const total = (stikers1 + suma) - suma;
    //     parrafo.innerHTML = "Llevas : " + total;
    // } else if (stikers2 <= a) {
    //     const total = (stikers2 + suma) - suma;
    //     parrafo.innerHTML = "Llevas : " + total;
    // } else if (stikers3 <= a) {
    //     const total = (stikers3 + suma) - suma;
    //     parrafo.innerHTML = "Llevas : " + total;
    // } else 
    if (stikers1 < 0 || stikers2 < 0 || stikers3 < 0) {
        alert("El numero ingresado debe ser mayor o igual de 0");
    } else if (suma <= a) {
        parrafo.innerHTML = "Llevas : " + suma;
    } else {
        parrafo.innerHTML = "Llevas demasiados stikers!!";
    }

}

