document.addEventListener("DOMContentLoaded", function () {
    const texto = "Eu sou";
    let index = 0;
    let deletando = false;
    const elemento = document.getElementById("spanver");

    function escrever() {
        if (!deletando && index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escrever, 200);
        } else if (deletando && index > 0) {
            elemento.innerHTML = texto.substring(0, index - 1);
            index--;
            setTimeout(escrever, 100);
        } else {
            deletando = !deletando;
            setTimeout(escrever, 1000); // Tempo de espera antes de recomeçar
        }
    }

    escrever();
});
