document.addEventListener("DOMContentLoaded", () => {

  const monthButtons = document.querySelectorAll('.grid button');

  // new Date(2025, 9, 2) está CORRETO (mês 9 é Outubro, pois começa em 0)
  const dataInicio = new Date(2025, 9, 2);

  const mensagemBloqueado = "Ainda não é o momento! Espere até o nosso mêsversário 🥰";

  const modal = document.getElementById('modal');
  const modalTexto = document.getElementById('modal-texto');
  const fechar = document.getElementById('fechar');

  function liberarMeses() {
    const hoje = new Date();
    // const hoje = new Date(2026, 0, 3); // Linha de TESTE para Janeiro/2026

    monthButtons.forEach((btn, index) => {
      // index 0 = Mês 1 (Nov/2025)
      // index 1 = Mês 2 (Dez/2025)
      // ...
      btn.disabled = false;

      const dataLiberacao = new Date(dataInicio);
      dataLiberacao.setMonth(dataInicio.getMonth() + (index + 1));
      
      // Ajusta o dia para o dia 2, caso setMonth() pule para o mês errado (raro)
      dataLiberacao.setDate(2); 

      const anoL = dataLiberacao.getFullYear();
      const mesL = dataLiberacao.getMonth();
      const diaL = 2; // O dia do mêsversário

      
      const liberado =
        (hoje.getFullYear() > anoL) ||
        (hoje.getFullYear() === anoL && hoje.getMonth() > mesL) ||
        (hoje.getFullYear() === anoL && hoje.getMonth() === mesL && hoje.getDate() >= diaL);

      if (liberado) {
        btn.classList.add('unlocked', 'animado');
        btn.classList.remove('bloqueado');

        setTimeout(() => btn.classList.remove('animado'), 800);
      } else {
        btn.classList.add('bloqueado');
        btn.classList.remove('unlocked');
      }

      // ADICIONA CLIQUE
      btn.addEventListener('click', () => {
        if (btn.classList.contains('bloqueado')) {
          alert(mensagemBloqueado);
          return;
        }

        const texto = btn.innerText.trim();

        if(texto === "0.1"){
            window.location.href = "mes01.html";
            return;
        }
        // Isso vai mostrar "Você desbloqueou o 0.1! ❤️"
        abrirModal(btn.innerText); 
      });
    });
  }

  function abrirModal(texto) {
    modalTexto.innerText = `Você desbloqueou o ${texto}! ❤️`;
    modal.style.display = 'flex';  
  }

  // FECHAR MODAL
  fechar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // INICIA
  liberarMeses();

});
