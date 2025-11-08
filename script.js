document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle with persistence
  const toggle = document.querySelector('.dark input#dark-toggle');
  const body = document.body;

  function applyDarkMode(enabled) {
    if (enabled) body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');
  }

  // load preference
  const stored = localStorage.getItem('darkMode');
  const prefersDark = stored === null ? null : stored === '1';
  if (prefersDark !== null) {
    applyDarkMode(prefersDark);
    if (toggle) toggle.checked = prefersDark;
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      const enabled = !!toggle.checked;
      applyDarkMode(enabled);
      localStorage.setItem('darkMode', enabled ? '1' : '0');
    });
  }

  // --- Form handling (existing) ---
  const nomeInput = document.querySelector('.inputcinza');
  const emailInput = document.querySelector('.inputcinza1');
  const mensagemInput = document.querySelector('.inputgrande');
  const enviarButton = document.querySelector('.inputgrand');

  if (enviarButton) {
    enviarButton.addEventListener('click', function(event) {
      event.preventDefault();
      const nome = nomeInput ? nomeInput.value : '';
      const email = emailInput ? emailInput.value : '';
      const mensagem = mensagemInput ? mensagemInput.value : '';
      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      console.log('Formulário Enviado:', { nome, email, mensagem });
      alert('Sua mensagem foi enviada com sucesso!');
      if (nomeInput) nomeInput.value = '';
      if (emailInput) emailInput.value = '';
      if (mensagemInput) mensagemInput.value = '';
    });
  }
});
