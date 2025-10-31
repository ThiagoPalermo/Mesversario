const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
const heartImage = new Image();
heartImage.src = "https://cdn-icons-png.flaticon.com/512/833/833472.png"; // coração branco transparente

function novoCoracao() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  };
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach((h, i) => {
    ctx.drawImage(heartImage, h.x, h.y, h.size, h.size);
    h.y += h.speed;

    if (h.y > canvas.height) {
      hearts[i] = novoCoracao();
    }
  });

  requestAnimationFrame(desenhar);
}

for (let i = 0; i < 25; i++) {
  hearts.push(novoCoracao());
}

desenhar();
/* ===== CARROSSEL ===== */
let index = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function mostrarSlide(n){
  slides.forEach(s => s.classList.remove("ativo"));
  slides[n].classList.add("ativo");
}

mostrarSlide(index);

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
});

/* ===== TEXTO DIGITADO ===== */
const texto = `Meu amor, completamos o nosso primeiro mês juntos.
Cada detalhe, cada conversa, cada beijo e cada abraço… tudo permanece na minha memória com carinho, como se fosse a primeira vez. No momento em que te conheci, percebi que já estava apaixonado por você, e hoje eu não sei mais viver sem pensar em nós e em todos esses momentos que sempre serão especiais para mim.
Obrigado por estar comigo, por me fazer tão feliz, por fazer meus olhos brilharem só de lembrar de você e por deixar minha vida mais leve e mais bonita.
Esse é só o começo da nossa história. Tem muito mais para vivermos juntos.

Eu te amo! 💚💚💚💚`;
;

let i = 0;
const campo = document.getElementById("textoDigitado");

function digitar() {
  if (i < texto.length) {
    const char = texto.charAt(i);
    
    if(char === "\n"){
        campo.innerHTML += "<br>";
    } else {
        campo.innerHTML += char;
    }
    i++;

    setTimeout(digitar, 45); // velocidade
  }
}

window.onload = digitar;

/* ===== BOTÃO TOCAR/PAUSAR MÚSICA ===== */
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = "⏸ Pausar Música";
  } else {
    musica.pause();
    btnMusica.textContent = "▶ Tocar Música";
  }
});
