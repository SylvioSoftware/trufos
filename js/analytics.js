/* ==========================================================================
   LOGICA CENTRALIZADA DO GOOGLE ANALYTICS (MODO MODULAR)
   ========================================================================== */
(function () {
  // 1. Definição de ambientes de teste
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const hasTestParam = window.location.search.includes("teste=true");

  // 2. Persistência do modo teste na sessão
  if (hasTestParam) {
    sessionStorage.setItem("modo_teste_trufos", "ativo");
  }

  const isTestMode = sessionStorage.getItem("modo_teste_trufos") === "ativo";

  // 3. Execução condicional
  if (!isLocal && !isTestMode) {
    // Cria a tag de script do Google
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-ENVZ0TNVJK";
    document.head.appendChild(script);

    // Configuração do GA
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-ENVZ0TNVJK");

    console.log("Analytics Trufos: Ativo (Produção)");
  } else {
    // Mensagem discreta no console para você saber que está funcionando
    console.log("Analytics Trufos: Bloqueado (Ambiente de Teste)");
  }
})();
