// Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--color-cream)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header background change on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(245, 240, 232, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.background = 'rgba(245, 240, 232, 0.95)';
                header.style.boxShadow = 'none';
            }
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Mensagem Enviada!';
                submitBtn.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(45deg, var(--color-orange), var(--color-gold))';
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Product cards hover effect
        document.querySelectorAll('.learn-more').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Simulate "learn more" action
                const originalText = this.textContent;
                this.textContent = 'Em breve...';
                this.style.background = 'linear-gradient(45deg, var(--color-brown), var(--color-dark-brown))';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'linear-gradient(45deg, var(--color-orange), var(--color-gold))';
                }, 1500);
            });
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');
            
            if (hero && heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add counter animation for quality features
        function animateCounters() {
            const counters = document.querySelectorAll('.quality-feature');
            
            counters.forEach((counter, index) => {
                setTimeout(() => {
                    counter.style.transform = 'translateY(0)';
                    counter.style.opacity = '1';
                }, index * 200);
            });
        }

        // Initialize animations when page loads
        window.addEventListener('load', () => {
            // Add initial fade-in class to hero content
            document.querySelector('.hero-content').classList.add('visible');
            
            // Start counter animation after a delay
            setTimeout(animateCounters, 1000);
        });

        // Add typing effect to hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Initialize typing effect
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero h1');
            if (heroTitle) {
                const titleText = heroTitle.textContent;
                setTimeout(() => {
                    typeWriter(heroTitle, titleText, 80);
                }, 500);
            }
        });

        function toggleCard(button) {
    const card = button.closest('.product-card');
    const details = card.querySelector('.product-details');
    const isExpanded = details.classList.contains('show');
    
    // Fechar todos os outros cards
    document.querySelectorAll('.product-card').forEach(otherCard => {
        if (otherCard !== card) {
            const otherDetails = otherCard.querySelector('.product-details');
            const otherButton = otherCard.querySelector('.learn-more');
            otherDetails.classList.remove('show');
            otherCard.classList.remove('expanded');
            otherButton.classList.remove('active');
        }
    });
    
    // Toggle do card atual
    if (isExpanded) {
        details.classList.remove('show');
        card.classList.remove('expanded');
        button.classList.remove('active');
    } else {
        details.classList.add('show');
        card.classList.add('expanded');
        button.classList.add('active');
    }
}