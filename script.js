const body = document.body;
const btnDark = document.getElementById('dark-mode-toggle');
const nameTitle = document.querySelector('h1');
const backToTop = document.getElementById('back-to-top');

// --- 1. MODO ESCURO ---
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

btnDark?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (nameTitle) {
        nameTitle.style.transform = 'scale(1.02)';
        setTimeout(() => nameTitle.style.transform = 'scale(1)', 150);
    }
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// --- 2. NAVEGAÇÃO E SUMÁRIO ---
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
const headerOffset = 100; 
const elementPosition = targetSection.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'auto'
    });
}        }
        if (details && details.hasAttribute('open') && !details.contains(e.target)) {
            details.removeAttribute('open');
        }
    });
};

// --- 3.1. FILTROS DE PROJETOS ---
window.filterItems = function(category, btn) {
    // Remove a classe 'active' apenas dos botões de categoria (Todos, Projetos, Pesquisas)
    // Isso evita que o botão 'advanced-filter-btn' perca o brilho ao clicar neles.
    document.querySelectorAll('.filter-btn:not(.advanced-filter-btn)').forEach(b => {
        b.classList.remove('active');
    });

    // Adiciona active apenas ao botão clicado
    btn.classList.add('active');

    document.querySelectorAll('.slider .card').forEach(card => {
        const isMatch = category === 'todos' || card.classList.contains(category);
        
        // Mantém a lógica de exibição
        card.style.display = isMatch ? "block" : "none";
        if (isMatch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
};

// --- 3.2. FILTRO AVANÇADO ---
document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.getElementById('toggle-advanced');
    const drawer = document.getElementById('advanced-drawer');
    const container = document.querySelector('.slider');
    
    // Armazena a ordem original dos cards logo que a página carrega
    const originalOrder = Array.from(container.querySelectorAll('.card'));

    // 1. Abrir/Fechar Gaveta
    if (btnToggle) {
        btnToggle.addEventListener('click', () => {
            btnToggle.classList.toggle('active');
            drawer.classList.toggle('show');
        });
    }

    // 2. Função de Ordenação (Data e Nome)
    function handleSort(btnId, type) {
        const btn = document.getElementById(btnId);
        if (!btn) return;

        btn.addEventListener('click', () => {
            const cards = Array.from(container.querySelectorAll('.card'));
            
            // Alterna o estado visual (seta e cor baseada na classe .asc que definimos no CSS)
            const isAsc = btn.classList.toggle('asc');
            
            // Remove a classe do outro botão para não confundir
            const otherBtnId = btnId === 'sort-date' ? 'sort-name' : 'sort-date';
            const otherBtn = document.getElementById(otherBtnId);
            if (otherBtn) otherBtn.classList.remove('asc');

            cards.sort((a, b) => {
                let aVal, bVal;
                if (type === 'date') {
                    aVal = new Date(a.dataset.date || 0);
                    bVal = new Date(b.dataset.date || 0);
                } else {
                    aVal = a.querySelector('h3').innerText.toLowerCase();
                    bVal = b.querySelector('h3').innerText.toLowerCase();
                }

                if (isAsc) {
                    return aVal > bVal ? 1 : -1;
                } else {
                    return aVal < bVal ? 1 : -1;
                }
            });

            cards.forEach(card => container.appendChild(card));
        });
    }

    // Inicializa os botões
    handleSort('sort-date', 'date');
    handleSort('sort-name', 'name');

// Função para definir o peso/prioridade de cada status
const statusPriority = {
    'finalizado': 1,
    'em-andamento': 2,
    'planejado': 3
};
// filtragem e ordenação por status
document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        
        const container = document.querySelector('.slider');
        const cards = Array.from(container.querySelectorAll('.card'));
        const activeStatuses = Array.from(document.querySelectorAll('.status-btn.active'))
                                    .map(b => b.dataset.status);

        // 1. Filtragem e Ordenação por Prioridade
        cards.sort((a, b) => {
            const badgeA = a.querySelector('.status-badge');
            const badgeB = b.querySelector('.status-badge');
            
            // Encontra qual classe de status o card possui
            const statusA = Object.keys(statusPriority).find(s => badgeA.classList.contains(s));
            const statusB = Object.keys(statusPriority).find(s => badgeB.classList.contains(s));

            // Ordena com base no objeto statusPriority (1 > 2 > 3)
            return (statusPriority[statusA] || 99) - (statusPriority[statusB] || 99);
        });

        // 2. Aplica a visibilidade e Reinsere no DOM
        cards.forEach(card => {
            const badge = card.querySelector('.status-badge');
            const matches = activeStatuses.length === 0 || 
                            activeStatuses.some(s => badge.classList.contains(s));
            
            card.style.display = matches ? 'block' : 'none';
            container.appendChild(card); // Move o card para a nova posição ordenada
        });
    });
});

    // 4. Botão de Lixeira (Reset Completo)
    const btnClear = document.getElementById('clear-filters');
    if (btnClear) {
        btnClear.addEventListener('click', function() {
            // A. Remove brilho dos Status
            document.querySelectorAll('.status-btn').forEach(btn => btn.classList.remove('active'));

            // B. Remove setas/brilho da Ordenação
            document.querySelectorAll('.mini-filter-btn').forEach(btn => btn.classList.remove('asc'));

            // C. Mostra todos os cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.style.display = 'block');

            // D. Volta para a ordem original (Reseta a posição dos elementos no DOM)
            originalOrder.forEach(card => container.appendChild(card));
        });
    }
});

// --- 4. EFEITOS DE SCROLL OTIMIZADOS (PARALLAX E TOPO) ---
let lastScrollY = window.scrollY;
let isTicking = false;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!isTicking) {
        window.requestAnimationFrame(() => {
            const headerContainer = document.querySelector('header .container');
            
            if (headerContainer) {
                // Só processa o parallax se estiver nas primeiras 500px de scroll
                if (lastScrollY < 500) {
                    const startMovingAt = window.innerWidth < 768 ? 150 : 50;
                    const yPos = lastScrollY > startMovingAt ? (lastScrollY - startMovingAt) * 0.3 : 0;
                    headerContainer.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }

            if (backToTop) {
                backToTop.style.display = lastScrollY > 300 ? "flex" : "none";
            }
            
            isTicking = false;
        });
        isTicking = true;
    }
}, { passive: true });

backToTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- 5. CONTROLE DE EXPANSÃO DE CARDS ---
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

// --- 6. SCROLL DRAG PARA SLIDERS E TABELAS ---
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

// --- 7. ANIMAÇÕES DE ENTRADA ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, article.card').forEach(el => observer.observe(el));
document.addEventListener('DOMContentLoaded', setupSumario);
