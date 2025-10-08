// =====================================================
// SISTEMA COMPLETO DE FUNCIONALIDADES DO PORTFÓLIO
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    
    // =====================================================
    // 1. GERENCIAMENTO DE FOTO DE PERFIL
    // =====================================================
    const profileImg = document.querySelector('.profile-img');
    const placeholder = document.querySelector('.photo-placeholder');

    function checkImage() {
        if (profileImg && profileImg.complete && profileImg.naturalWidth > 0) {
            profileImg.style.display = 'block';
            placeholder.style.display = 'none';
        } else if (placeholder) {
            if (profileImg) profileImg.style.display = 'none';
            placeholder.style.display = 'flex';
        }
    }

    if (profileImg) {
        profileImg.addEventListener('load', checkImage);
        profileImg.addEventListener('error', function () {
            profileImg.style.display = 'none';
            if (placeholder) placeholder.style.display = 'flex';
        });
        checkImage();
    }

    // =====================================================
    // 2. ANIMAÇÕES DAS BARRAS DE HABILIDADES
    // =====================================================
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.getAttribute('data-skill');
                entry.target.style.width = skillLevel + '%';
                entry.target.style.transition = 'width 1.5s ease-in-out';
            }
        });
    }, {
        threshold: 0.3
    });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // =====================================================
    // 3. ANIMAÇÕES DE ENTRADA DOS ELEMENTOS
    // =====================================================
    const animatedElements = document.querySelectorAll('.section, .project-card, .certificate-card');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    }, {
        threshold: 0.1
    });

    // Aplicar animação inicial
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        fadeInObserver.observe(el);
    });

    // =====================================================
    // 4. NAVEGAÇÃO SUAVE
    // =====================================================
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Expor função para uso global
    window.smoothScroll = smoothScroll;

    // =====================================================
    // 5. FUNCIONALIDADES DE CERTIFICADOS
    // =====================================================
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach(card => {
        // Efeito hover aprimorado
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });

        // Click para expandir/retrair descrição
        card.addEventListener('click', function () {
            const description = this.querySelector('.certificate-description');
            if (description) {
                const isExpanded = description.style.webkitLineClamp === 'unset';
                
                if (isExpanded) {
                    description.style.webkitLineClamp = '3';
                    description.style.overflow = 'hidden';
                } else {
                    description.style.webkitLineClamp = 'unset';
                    description.style.overflow = 'visible';
                }
            }
        });
    });

    // =====================================================
    // 6. EFEITOS DE PROJETO CARDS
    // =====================================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            
            // Animar tags
            const tags = this.querySelectorAll('.tech-tag');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.05)';
                    tag.style.transition = 'transform 0.2s ease';
                }, index * 50);
            });
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            
            const tags = this.querySelectorAll('.tech-tag');
            tags.forEach(tag => {
                tag.style.transform = 'scale(1)';
            });
        });
    });

    // =====================================================
    // 7. BOTÃO SCROLL TO TOP
    // =====================================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(scrollTopBtn);

    // Mostrar/esconder botão baseado no scroll
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // Funcionalidade do botão
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efeito hover do botão
    scrollTopBtn.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
    });

    scrollTopBtn.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });

    // =====================================================
    // 8. EFEITOS NO HEADER
    // =====================================================
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
            }
        });
    }

    // =====================================================
    // 9. PARALLAX SUAVE NO HEADER
    // =====================================================
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('header .container');
        
        if (parallaxElement) {
            parallaxElement.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // =====================================================
    // 10. LOADING MELHORADO PARA IMAGENS
    // =====================================================
    const certificateImages = document.querySelectorAll('.certificate-image');
    
    certificateImages.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
            this.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        img.addEventListener('error', function () {
            const container = this.closest('.certificate-image-container');
            if (container) {
                container.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: center; 
                                width: 80px; height: 80px; background: #f0f0f0; 
                                border-radius: 8px; color: #666;">
                        📜
                    </div>
                `;
            }
        });

        // Estado inicial
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
    });

    // =====================================================
    // 11. UTILITÁRIOS GLOBAIS
    // =====================================================
    
    // Função para adicionar novos certificados dinamicamente
    window.addCertificate = function(certificateData) {
        const certificatesGrid = document.querySelector('.certificates-grid');
        if (certificatesGrid && certificateData) {
            const newCard = document.createElement('div');
            newCard.className = 'certificate-card';
            newCard.innerHTML = `
                <div class="certificate-icon">${certificateData.icon || '🎓'}</div>
                <h3>${certificateData.title}</h3>
                <p class="certificate-institution">${certificateData.institution}</p>
                <p class="certificate-description">${certificateData.description}</p>
                <div class="certificate-date">${certificateData.date}</div>
            `;
            certificatesGrid.appendChild(newCard);
            
            // Aplicar eventos ao novo card
            setupCertificateCard(newCard);
        }
    };

    // Função para configurar eventos de um card de certificado
    function setupCertificateCard(card) {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    }

    // =====================================================
    // 12. PERFORMANCE E DEBUG
    // =====================================================
    
    // Log de inicialização
    console.log('🚀 Portfólio JavaScript carregado!');
    console.log('📊 Elementos encontrados:', {
        'Barras de Habilidade': skillBars.length,
        'Cards de Projeto': projectCards.length,
        'Cards de Certificado': certificateCards.length,
        'Imagens de Certificado': certificateImages.length
    });

    // Performance monitoring
    if (performance && performance.mark) {
        performance.mark('portfolio-js-loaded');
    }
});

// =====================================================
// 13. EXPORTAR FUNCIONALIDADES PARA DEBUG
// =====================================================
window.PortfolioDebug = {
    version: '2.0.0',
    author: 'Cleiton Gomes',
    features: [
        'Profile Image Management',
        'Skill Bar Animations', 
        'Element Fade-in Effects',
        'Smooth Navigation',
        'Certificate Interactions',
        'Project Card Effects',
        'Scroll to Top Button',
        'Dynamic Header Effects',
        'Parallax Header',
        'Image Loading Optimization'
    ],
    test: function() {
        console.log('🧪 Testando funcionalidades do portfólio...');
        return 'Todas as funcionalidades estão operacionais!';
    }
};