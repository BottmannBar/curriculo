// ========================================
// GRÁFICOS COM CHART.JS
// ========================================

// Cores para os gráficos
const chartColors = {
    primary: '#0D3B66',
    secondary: '#D4AF37',
    light: '#F8FAFC',
    text: '#1F2937'
};

// Gráfico de Fluxo de Caixa Mensal
function initCashFlowChart() {
    const ctx = document.getElementById('cashFlowChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Fluxo de Caixa',
                data: [45000, 52000, 48000, 61000, 55000, 68000, 72000, 65000, 78000, 85000, 92000, 105000],
                borderColor: chartColors.primary,
                backgroundColor: `rgba(13, 59, 102, 0.1)`,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.secondary,
                pointBorderColor: chartColors.primary,
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: chartColors.text,
                        font: { size: 12, weight: 'bold' }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: chartColors.text },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: {
                    ticks: { color: chartColors.text }
                }
            }
        }
    });
}

// Gráfico de Receitas x Despesas
function initRevenueExpenseChart() {
    const ctx = document.getElementById('revenueExpenseChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                {
                    label: 'Receitas',
                    data: [65000, 72000, 68000, 75000, 80000, 85000],
                    backgroundColor: chartColors.primary,
                    borderRadius: 5,
                    borderSkipped: false
                },
                {
                    label: 'Despesas',
                    data: [35000, 38000, 36000, 40000, 42000, 45000],
                    backgroundColor: chartColors.secondary,
                    borderRadius: 5,
                    borderSkipped: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: chartColors.text,
                        font: { size: 12, weight: 'bold' }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: chartColors.text },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: {
                    ticks: { color: chartColors.text }
                }
            }
        }
    });
}

// Gráfico de Distribuição de Custos
function initCostDistributionChart() {
    const ctx = document.getElementById('costDistributionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Operacional', 'Pessoal', 'Fornecedores', 'Marketing', 'Outros'],
            datasets: [{
                data: [35, 25, 20, 12, 8],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.secondary,
                    '#0a2a4a',
                    '#8B7355',
                    '#4B5563'
                ],
                borderColor: '#FFFFFF',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: chartColors.text,
                        font: { size: 12 },
                        padding: 15
                    }
                }
            }
        }
    });
}

// Gráfico de Controle de Estoque
function initInventoryChart() {
    const ctx = document.getElementById('inventoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Matéria Prima', 'Produtos Acabados', 'Componentes', 'Embalagem', 'Suprimentos'],
            datasets: [{
                label: 'Nível de Estoque (%)',
                data: [85, 92, 78, 88, 95],
                borderColor: chartColors.primary,
                backgroundColor: `rgba(13, 59, 102, 0.2)`,
                pointBackgroundColor: chartColors.secondary,
                pointBorderColor: chartColors.primary,
                pointBorderWidth: 2,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: chartColors.text,
                        font: { size: 12, weight: 'bold' }
                    }
                }
            },
            scales: {
                r: {
                    ticks: { color: chartColors.text },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                }
            }
        }
    });
}

// ========================================
// MENU MOBILE
// ========================================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// NAVEGAÇÃO SUAVE
// ========================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validação básica
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            // Simular envio
            const originalText = e.target.querySelector('button').textContent;
            e.target.querySelector('button').textContent = '✓ Mensagem Enviada!';
            
            setTimeout(() => {
                form.reset();
                e.target.querySelector('button').textContent = originalText;
            }, 3000);
        });
    }
}

// ========================================
// ANIMAÇÕES DE SCROLL
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInRight 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.skill-card, .differential-item, .personal-skill').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// EFEITO DE DIGITAÇÃO PARA HERO
// ========================================

function initTypewriterEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        typeWriter();
    }
}

// ========================================
// INICIALIZAÇÃO GERAL
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar gráficos
    initCashFlowChart();
    initRevenueExpenseChart();
    initCostDistributionChart();
    initInventoryChart();

    // Menu mobile
    initMobileMenu();

    // Formulário de contato
    initContactForm();

    // Animações
    initScrollAnimations();
    initTypewriterEffect();

    // Event listeners para navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#curriculum' && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ========================================
// DOWNLOAD DE CURRÍCULO (FUNÇÃO AUXILIAR)
// ========================================

// ========================================
// EFEITOS ADICIONAIS
// ========================================

// Adicionar classe ativa ao navlink baseado na seção visível
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// VALIDAÇÕES E UTILITÁRIOS
// ========================================

// Função para formatar moeda
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Função para animar números nos KPIs
function animateKPIs() {
    const kpis = document.querySelectorAll('.kpi-value');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar quando visível
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    kpis.forEach(kpi => observer.observe(kpi));
}

// Inicializar animação de KPIs quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', animateKPIs);
