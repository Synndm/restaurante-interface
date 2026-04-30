document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
        document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
    });

    // Menu mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

});

// Menu tabs (fica fora pois é chamado inline pelo onclick no HTML)
function showTab(id, el) {
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    el.classList.add('active');
}

// Reserva feedback (também fora, chamado pelo onsubmit)
function handleReserva(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.textContent = '✓ Reserva enviada!';
    btn.style.background = '#4caf50';
    btn.style.borderColor = '#4caf50';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Confirmar Reserva';
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
        e.target.reset();
    }, 4000);
}