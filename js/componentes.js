/* ==========================================================================
   FUNÇÃO PARA CARREGAR COMPONENTES HTML
   ========================================================================== */
function carregarComponente(id, arquivo) {
  const elemento = document.getElementById(id);
  if (!elemento) return;

  fetch(arquivo)
    .then((response) => {
      if (!response.ok) throw new Error("Erro ao carregar: " + arquivo);
      return response.text();
    })
    .then((data) => {
      elemento.innerHTML = data;
    })
    .catch((error) => console.error(error));
}

/* ==========================================================================
   EXECUÇÃO AO CARREGAR A PÁGINA
   ========================================================================== */
window.addEventListener("DOMContentLoaded", function () {
  // Carrega o Head (Metas, CSS, Favicon)
  fetch("includes/head.html")
    .then((response) => response.text())
    .then((data) => {
      document.head.innerHTML += data;
    });

  // Carrega o menu e logo após adiciona o evento de clique
  fetch("includes/menu.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;

      // LOGICA DO MENU RESPONSIVO
      const menuToggle = document.getElementById("menu-toggle");
      const mainMenu = document.getElementById("main-menu");

      if (menuToggle && mainMenu) {
        menuToggle.addEventListener("click", function () {
          mainMenu.classList.toggle("active");
        });
      }
    });

  // Carrega os outros componentes
  carregarComponente("header-placeholder", "includes/cabecalho.html");
  carregarComponente("footer-placeholder", "includes/rodape.html");
  carregarComponente("whatsapp-placeholder", "includes/BotaoWA.html");
});
