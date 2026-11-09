const WHATSAPP = '5522992199084';

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Formulário -> WhatsApp
document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const erro = document.getElementById('formError');
  const nome = f.nome.value.trim();
  const whatsapp = f.whatsapp.value.trim();
  const perfil = f.perfil.value;
  const credito = f.credito.value;
  const cidade = f.cidade.value.trim();

  if (!nome || !whatsapp || !perfil || !credito) {
    erro.hidden = false;
    return;
  }
  erro.hidden = true;

  const msg =
    `Olá Geisiane! Gostaria de fazer uma simulação.\n\n` +
    `*Nome:* ${nome}\n` +
    `*WhatsApp:* ${whatsapp}\n` +
    `*Perfil:* ${perfil}\n` +
    `*Tipo de crédito:* ${credito}\n` +
    (cidade ? `*Cidade:* ${cidade}\n` : '');

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
});
