const body = document.body;
const btnDark = document.getElementById('dark-mode-toggle');
const nameTitle = document.querySelector('h1');

// --- MODO ESCURO ---
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

btnDark?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (nameTitle) {
        nameTitle.style.transform = 'scale(1)';
        setTimeout(() => nameTitle.style.transform = 'scale(1)', 150);
    }
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// --- NAVEGAÇÃO E SUMÁRIO ---
const setupSumario = () => {
    const details = document.getElementById('sumario-dropdown');
    let isDraggingMenu = false;

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.setAttribute('draggable', 'false');
    });

    details?.addEventListener('mousedown', () => isDraggingMenu = false);
    details?.addEventListener('mousemove', () => isDraggingMenu = true);

    document.addEventListener('click', (e) => {
        const link = e.target.closest('.dropdown-content a');
        if (link && !isDraggingMenu) {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                details.removeAttribute('open');
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
        if (details && details.hasAttribute('open') && !details.contains(e.target)) {
            details.removeAttribute('open');
        }
    });
};

// --- FILTROS DE PROJETOS ---
window.filterItems = function(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.slider .card').forEach(card => {
        const isMatch = category === 'todos' || card.classList.contains(category);
        card.style.display = isMatch ? "block" : "none";
        isMatch ? card.classList.remove('hidden') : card.classList.add('hidden');
    });
};

// --- EFEITOS DE SCROLL (PARALLAX E TOPO) ---
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const headerContainer = document.querySelector('header .container');
    const scrollValue = window.scrollY;
    
    if (headerContainer) {
        const startMovingAt = window.innerWidth < 768 ? 150 : 50;
        headerContainer.style.transform = scrollValue > startMovingAt 
            ? `translateY(${(scrollValue - startMovingAt) * 0.3}px)` 
            : `translateY(0px)`;
    }
    
    if (backToTop) {
        backToTop.style.display = scrollValue > 300 ? "flex" : "none";
    }
});

backToTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- CONTROLE DE EXPANSÃO DE CARDS ---
const updateBtnStyle = (btn, isOpen) => {
    if (!btn) return;
    btn.innerHTML = isOpen ? 'Fechar <span>▲</span>' : 'Detalhes <span>▼</span>';
    btn.style.background = isOpen ? 'var(--primary)' : 'var(--accent)';
};

document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const extra = this.parentElement.querySelector('.extra-content');
        if (extra) {
            const isOpen = extra.classList.toggle('open');
            updateBtnStyle(this, isOpen);
        }
    });
});

window.toggleAll = function() {
    const allContent = document.querySelectorAll('.extra-content');
    const allButtons = document.querySelectorAll('.expand-btn');
    const masterBtn = document.getElementById('btn-toggle-all');
    const anyClosed = Array.from(allContent).some(content => !content.classList.contains('open'));
    
    allContent.forEach((content, i) => {
        content.classList.toggle('open', anyClosed);
        updateBtnStyle(allButtons[i], anyClosed);
    });
    if (masterBtn) masterBtn.innerText = anyClosed ? 'Recolher Tudo' : 'Expandir Tudo';
};

// --- SCROLL DRAG PARA SLIDERS, TABELAS E DROPDOWNS ---
const scrollContainers = document.querySelectorAll('.slider, .table-container, .dropdown-content');

scrollContainers.forEach(container => {
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('dragging');
        container.style.userSelect = 'none'; 
        
        startX = e.pageX - container.offsetLeft;
        startY = e.pageY - container.offsetTop;
        scrollLeft = container.scrollLeft;
        scrollTop = container.scrollTop;
    });

    const stopDragging = () => {
        isDown = false;
        container.classList.remove('dragging');
        container.style.userSelect = 'auto';
    };

    container.addEventListener('mouseleave', stopDragging);
    container.addEventListener('mouseup', stopDragging);

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const y = e.pageY - container.offsetTop;
        container.scrollLeft = scrollLeft - (x - startX) * 2;
        container.scrollTop = scrollTop - (y - startY) * 2;
    });
});

// --- ANIMAÇÕES DE ENTRADA ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, article.card').forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', setupSumario);