// Smooth scrolling for anchor links
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Animation on scroll with Intersection Observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all fade-in elements
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // Enhanced CTA button interactions
            document.querySelectorAll('.cta-button').forEach(button => {
                button.addEventListener('mouseover', function() {
                    this.style.transform = 'translateY(-3px) scale(1.05)';
                });
                
                button.addEventListener('mouseout', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });

                // Keyboard accessibility
                button.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });

            // Color option selection functionality
            document.querySelectorAll('.color-option').forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options
                    document.querySelectorAll('.color-option').forEach(opt => {
                        opt.setAttribute('aria-checked', 'false');
                        opt.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked option
                    this.setAttribute('aria-checked', 'true');
                    this.classList.add('selected');
                });

                // Keyboard navigation for color options
                option.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });

            // Performance optimization: Lazy load background images
            const heroSection = document.querySelector('.hero');
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.backgroundImage = "url('img/MacBook_Air_M4.png')";
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                if (heroSection) {
                    heroSection.style.backgroundImage = 'none';
                    imageObserver.observe(heroSection);
                }
            }
        });