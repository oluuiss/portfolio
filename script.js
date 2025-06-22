
// revealOnScroll.js
function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

// Botão de voltar ao topo
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
    btnTopo.classList.add("show");
} else {
    btnTopo.classList.remove("show");
}
});

btnTopo.addEventListener("click", () => {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});

function toggleMenu() {
        const menu = document.getElementById('mobileMenu');
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    }

    // Fecha o menu ao clicar fora (opcional)
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('mobileMenu');
        const hamburger = document.querySelector('.hamburger');
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.style.display = 'none';
        }
    });

