function alterarImagem() {
    const img = document.getElementById("imagem");
    img.src = img.src.includes("dog.jpeg") ? "gato.PNG" : "dog.jpeg";
}

function alterarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.innerText = titulo.innerText === "Meu Título" ? "Novo Título" : "Meu Título";
}

function alterarParagrafo() {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.style.color = paragrafo.style.color === "red" ? "black" : "red";
}

function tocarAudio() {
    const audio = document.getElementById("audio");
    audio.play();
}

function toggleBotao() {
    const botao1 = document.querySelector('.botao-verde');
    const botao2 = document.getElementById('btn2');
    const botao3 = document.getElementById('btn3');

    botao1.classList.toggle("botao-toggle");
    botao2.classList.toggle("botao-toggle");
    botao3.classList.toggle("botao-toggle");
}