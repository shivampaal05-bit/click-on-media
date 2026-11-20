/**
 * Click On Media - Hero Section Scripts
 * Handles Header Scroll, Video Audio Toggle, Mobile Navigation, and Modal
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const header = document.getElementById('header');
    const heroVideo = document.getElementById('heroVideo');
    const audioToggleBtn = document.getElementById('audioToggle');
    const iconMuted = document.getElementById('iconMuted');
    const iconUnmuted = document.getElementById('iconUnmuted');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    // Modal Elements
    const contactModal = document.getElementById('contactModal');
    const modalClose = document.getElementById('modalClose');
    const triggerButtons = document.querySelectorAll('a[href="#contact"]');

    /* -------------------------------------------------------------------------
       1. Header Scroll Effect (Frosted Glass on Scroll)
       ------------------------------------------------------------------------- */
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on load

    /* -------------------------------------------------------------------------
       2. Video Audio Toggle Control
       ------------------------------------------------------------------------- */
    if (heroVideo && audioToggleBtn) {
        // Ensure initial muted state for autoplay compliance
        heroVideo.muted = true;

        audioToggleBtn.addEventListener('click', () => {
            if (heroVideo.muted) {
                heroVideo.muted = false;
                iconMuted.classList.add('hidden');
                iconUnmuted.classList.remove('hidden');
                audioToggleBtn.setAttribute('aria-label', 'Mute video');
                audioToggleBtn.setAttribute('title', 'Mute audio');
            } else {
                heroVideo.muted = true;
                iconMuted.classList.remove('hidden');
                iconUnmuted.classList.add('hidden');
                audioToggleBtn.setAttribute('aria-label', 'Unmute video');
                audioToggleBtn.setAttribute('title', 'Unmute audio');
            }
        });
    }

    /* -------------------------------------------------------------------------
       3. Mobile Navigation Menu Toggle
       ------------------------------------------------------------------------- */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close mobile menu when clicking any nav link
        const navLinks = navMenu.querySelectorAll('.nav-link, .btn-mobile');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /* -------------------------------------------------------------------------
       4. Contact / Consultation Modal
       ------------------------------------------------------------------------- */
    if (contactModal) {
        triggerButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                contactModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && contactModal.classList.contains('active')) {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /* -------------------------------------------------------------------------
       5. Scroll Indicator Click
       ------------------------------------------------------------------------- */
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight * 0.9,
                behavior: 'smooth'
            });
        });
    }
});
