function password() {
    const valor1 = parseInt(document.getElementById("digito1").value);
    const valor2 = parseInt(document.getElementById("digito2").value);
    const valor3 = parseInt(document.getElementById("digito3").value);
    const parrafo1 = document.getElementById("parrafo__password");

    if (valor1 == 9 && valor2 == 1 && valor3 == 1) {
        parrafo1.innerHTML = "El Password 1 es correcto"
        contenedor__password.style.border = "2px solid green";
        parrafo1.style.color = "green";
    } else if (valor1 == 7 && valor2 == 1 && valor3 == 4) {
        parrafo1.innerHTML = "El Password 2 es correcto"
        contenedor__password.style.border = "2px solid green";
        parrafo1.style.color = "green";
    } else {
        parrafo1.innerHTML = "El Password es incorrecto intenta de nuevo"
        contenedor__password.style.border = "2px solid red";
        parrafo1.style.color = "red";
    }

}