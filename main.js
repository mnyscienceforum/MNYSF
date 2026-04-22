document.addEventListener('DOMContentLoaded', () => {
    // ── Mobile nav toggle ────────────────────────────────────────────
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
            toggle.classList.toggle('active');
        });
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }

    // ── Hero background slideshow ────────────────────────────────────
    const slides = document.querySelectorAll('.hero-slideshow img');
    if (slides.length > 1) {
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }

    // ── Scroll animations (AOS attributes added programmatically) ────
    function addScrollAnimations() {
        // Eyebrows
        document.querySelectorAll('.section-eyebrow').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-duration', '600');
        });

        // Headings
        document.querySelectorAll('.section-heading, .page-header h1').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', '80');
            el.setAttribute('data-aos-duration', '700');
        });

        // Body text blocks
        document.querySelectorAll('.body-text').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', '160');
            el.setAttribute('data-aos-duration', '700');
        });

        // Page header subtext
        document.querySelectorAll('.page-header-content > p').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', '220');
        });

        // Stat cards — staggered zoom-in
        document.querySelectorAll('.stat-card').forEach((el, i) => {
            el.setAttribute('data-aos', 'zoom-in');
            el.setAttribute('data-aos-delay', String(i * 90));
            el.setAttribute('data-aos-duration', '600');
        });

        // Track cards — staggered fade-up
        document.querySelectorAll('.track-card').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', String(i * 80));
            el.setAttribute('data-aos-duration', '650');
        });

        // Class detail cards
        document.querySelectorAll('.class-detail-card').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', String(i * 100));
            el.setAttribute('data-aos-duration', '700');
        });

        // Staff cards — staggered, reset delay per row of 4
        document.querySelectorAll('.staff-card').forEach((el, i) => {
            el.setAttribute('data-aos', 'zoom-in');
            el.setAttribute('data-aos-delay', String((i % 4) * 80));
            el.setAttribute('data-aos-duration', '600');
        });

        // Contact cards
        document.querySelectorAll('.contact-card').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', String(i * 100));
            el.setAttribute('data-aos-duration', '650');
        });

        // Resource items — slide in from left
        document.querySelectorAll('.resource-item').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-right');
            el.setAttribute('data-aos-delay', String(i * 55));
            el.setAttribute('data-aos-duration', '600');
        });

        // Competition highlight card
        document.querySelectorAll('.comp-highlight-card').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-duration', '700');
        });

        // Competition detail rows — staggered
        document.querySelectorAll('.comp-detail').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-right');
            el.setAttribute('data-aos-delay', String(i * 60));
            el.setAttribute('data-aos-duration', '550');
        });

        // Date cards in hero
        document.querySelectorAll('.date-card').forEach((el, i) => {
            el.setAttribute('data-aos', 'zoom-in');
            el.setAttribute('data-aos-delay', String(400 + i * 140));
            el.setAttribute('data-aos-duration', '600');
        });

        // Hero actions buttons
        document.querySelectorAll('.hero-actions .btn').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', String(300 + i * 120));
            el.setAttribute('data-aos-duration', '600');
        });

        // Hero eyebrow
        document.querySelectorAll('.hero-eyebrow').forEach(el => {
            el.setAttribute('data-aos', 'fade-down');
            el.setAttribute('data-aos-delay', '100');
            el.setAttribute('data-aos-duration', '600');
        });

        // Hero title
        document.querySelectorAll('.hero-title').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', '180');
            el.setAttribute('data-aos-duration', '800');
        });

        // Hero subtitle
        document.querySelectorAll('.hero-subtitle').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', '260');
            el.setAttribute('data-aos-duration', '700');
        });

        // Two-col text/accent
        document.querySelectorAll('.two-col .col-text').forEach(el => {
            if (!el.getAttribute('data-aos')) {
                el.setAttribute('data-aos', 'fade-right');
                el.setAttribute('data-aos-duration', '750');
            }
        });
        document.querySelectorAll('.two-col .col-accent').forEach(el => {
            if (!el.getAttribute('data-aos')) {
                el.setAttribute('data-aos', 'fade-left');
                el.setAttribute('data-aos-duration', '750');
            }
        });

        // Sponsor tiers
        document.querySelectorAll('.sponsor-tier').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', String(i * 120));
            el.setAttribute('data-aos-duration', '650');
        });

        // Schedule table
        document.querySelectorAll('.schedule-table').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-duration', '700');
        });

        // CTA section headings & buttons
        document.querySelectorAll('.section-cta .section-heading').forEach(el => {
            el.setAttribute('data-aos', 'zoom-in');
            el.setAttribute('data-aos-duration', '700');
        });
        document.querySelectorAll('.section-cta .btn').forEach(el => {
            el.setAttribute('data-aos', 'zoom-in');
            el.setAttribute('data-aos-delay', '200');
            el.setAttribute('data-aos-duration', '600');
        });

        // Photo strip panels — stagger fade-up as they scroll into view
        document.querySelectorAll('.photo-strip img').forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', String(i * 100));
            el.setAttribute('data-aos-duration', '900');
            el.setAttribute('data-aos-anchor-placement', 'top-bottom');
        });
    }

    addScrollAnimations();

    AOS.init({
        once: true,
        offset: 60,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    });
});
