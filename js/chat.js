/* ==========================================================================
   LOGICA CENTRALIZADA DO CHAT TAWK.TO (MODO INVISIVEL PARA TESTES)
   ========================================================================== */
(function () {
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const isTestMode = sessionStorage.getItem("modo_teste_trufos") === "ativo";

  // Só carrega o chat se NÃO for ambiente de teste
  if (!isLocal && !isTestMode) {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/59efc573c28eca75e4627fa1/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    console.log("Chat Trufos: Ativo para clientes.");
  } else {
    console.log("Chat Trufos: Oculto (Modo Teste/Local).");
  }
})();
