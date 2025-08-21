// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
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

    // Close button functionality
    const footerClose = document.querySelector('.footer-close');
    if (footerClose) {
        footerClose.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    }

    // Add hover effects for download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects for feature buttons
    const featureButtons = document.querySelectorAll('.feature-btn');
    featureButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .highlight-card, .step');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        // ESC key to close footer
        if (event.key === 'Escape') {
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.style.display = 'none';
            }
        }
        
        // Arrow keys for navigation
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const sections = ['#hero', '#features', '#highlights', '#process'];
            const currentSection = getCurrentSection();
            const currentIndex = sections.indexOf(currentSection);
            const nextIndex = (currentIndex + 1) % sections.length;
            const nextSection = document.querySelector(sections[nextIndex]);
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            const sections = ['#hero', '#features', '#highlights', '#process'];
            const currentSection = getCurrentSection();
            const currentIndex = sections.indexOf(currentSection);
            const prevIndex = currentIndex <= 0 ? sections.length - 1 : currentIndex - 1;
            const prevSection = document.querySelector(sections[prevIndex]);
            if (prevSection) {
                prevSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Helper function to get current section
    function getCurrentSection() {
        const sections = ['#hero', '#features', '#highlights', '#process'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let section of sections) {
            const element = document.querySelector(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementBottom = elementTop + rect.height;
                
                if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                    return section;
                }
            }
        }
        return '#hero';
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .feature-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        /* Enhanced feature card animations */
        .feature-card {
            transform-origin: center bottom;
        }
        
        .feature-card:hover .feature-icon {
            transform: scale(1.1);
            transition: transform 0.3s ease;
        }
        
        .feature-icon {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style); 