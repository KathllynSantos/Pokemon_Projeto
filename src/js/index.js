const botaoalterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao")

botaoalterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocadeTema.setAttribute("src", "./src/img/sun.png");
    }
    else {
        imagemBotaoTrocadeTema.setAttribute("src", "./src/img/moon.png");

    }


});