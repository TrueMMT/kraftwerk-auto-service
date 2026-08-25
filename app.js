
const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
if(menuBtn) menuBtn.addEventListener('click',()=>body.classList.toggle('mobile-open'));

const modal = document.getElementById('authModal');
const modalTitle = document.getElementById('modalTitle');
const modalSub = document.getElementById('modalSub');
document.querySelectorAll('[data-auth]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const mode = btn.dataset.auth;
    modalTitle.textContent = mode === 'register' ? 'Kundenkonto erstellen' : 'Willkommen zurück';
    modalSub.textContent = mode === 'register'
      ? 'Portfolio-Demo: Registrierung ohne echtes Backend.'
      : 'Portfolio-Demo: Login ohne echtes Backend.';
    modal.classList.add('show');
  });
});
document.querySelector('.modal-close')?.addEventListener('click',()=>modal.classList.remove('show'));
modal?.addEventListener('click',e=>{ if(e.target===modal) modal.classList.remove('show'); });
document.getElementById('authSubmit')?.addEventListener('click',()=>{
  alert('Demo-Funktion – bei einem echten Kunden würde hier das Backend angeschlossen.');
  modal.classList.remove('show');
});

const booking = document.getElementById('bookingForm');
booking?.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Terminanfrage erfolgreich – Portfolio-Demo.');
  booking.reset();
});

const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
