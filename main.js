/* =============================================
   PORTFÓLIO PESSOAL — LUCAS MENDES
   Arquivo: main.js
   Descrição: Funcionalidades globais compartilhadas
   por todas as páginas:
   - Alternância de tema claro/escuro (toggle)
   - Menu hambúrguer responsivo (mobile)
   ============================================= */

/* --------------------------------------------------
   1. TOGGLE DE TEMA CLARO / ESCURO
   --------------------------------------------------
   Ao clicar no botão #theme-toggle:
   - Adiciona/remove a classe "light-mode" do <body>
   - Troca o ícone do botão (🌙 / ☀️)
   - Persiste a preferência no localStorage
     para manter o tema ao navegar entre páginas.
-------------------------------------------------- */
(function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const body = document.body;

  /* Aplica tema salvo ao carregar a página */
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (btn) btn.textContent = '☀️';
  }

  if (!btn) return; // sai se o botão não existir

  btn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');

    /* Atualiza ícone conforme o tema ativo */
    btn.textContent = isLight ? '☀️' : '🌙';

    /* Salva preferência */
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
})();


/* --------------------------------------------------
   2. MENU HAMBÚRGUER (MOBILE)
   --------------------------------------------------
   Ao clicar no botão #menu-toggle:
   - Adiciona/remove a classe "open" em #nav-links
   - Alterna o ícone (☰ / ✕)
   - Fecha o menu ao clicar em qualquer link
     (melhora a UX em dispositivos móveis).
-------------------------------------------------- */
(function initMobileMenu() {
  const toggle   = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggle || !navLinks) return;

  /* Abre / fecha o menu */
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.textContent      = isOpen ? '✕' : '☰';
    toggle.setAttribute('aria-expanded', isOpen);
  });

  /* Fecha ao clicar num link (evita menu travado em SPA-like nav) */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.textContent = '☰';
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();