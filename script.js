        // Alternar Modo Escuro
        const btnDark = document.getElementById('dark-mode-toggle');
        btnDark.onclick = function() {
            document.body.classList.toggle('dark-mode');
        };

        // Mostrar/Esconder botão Voltar ao Topo
        const backToTop = document.getElementById('back-to-top');
        window.onscroll = function() {
            if (window.scrollY > 300) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        };
        const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});
// Seleciona o container do carrossel
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

// Quando o usuário clica
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// Quando o mouse sai da área
slider.addEventListener('mouseleave', () => {
    isDown = false;
});

// Quando o usuário solta o clique
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

// Quando o mouse se move enquanto clicado
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Se não estiver clicado, não faz nada
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicado por 2 para a rolagem ser mais rápida
    slider.scrollLeft = scrollLeft - walk;
});

function toggleExpand(btn) {
    const content = btn.nextElementSibling;
    const span = btn.querySelector('span');
    
    // Alterna a classe 'open'
    const isOpen = content.classList.toggle('open');
    
    // Altera o texto e a seta para dar feedback claro
    if (isOpen) {
        btn.innerHTML = 'Fechar Detalhes <span>▲</span>';
    } else {
        btn.innerHTML = 'Ver Detalhes <span>▼</span>';
    }
}
