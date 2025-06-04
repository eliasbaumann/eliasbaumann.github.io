document.addEventListener('DOMContentLoaded', function() {
    // Only add the button on the home page and project pages
    const path = window.location.pathname;
    if (path === '/' || path.startsWith('/projects/')) {
        const button = document.createElement('button');
        button.className = 'back-to-top button-secondary';
        button.textContent = 'Back to top';
        button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(button);

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });

        // Smooth scroll to top when clicked
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 