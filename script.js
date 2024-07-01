document.addEventListener('DOMContentLoaded', function() {
    // Efeito de revelação nos títulos
    const titles = document.querySelectorAll('.header-container h1, .header-container h2');
    titles.forEach((title) => {
        title.classList.add('reveal');
    });

    // Efeito de rolagem
    const fadeInUpElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    });

    fadeInUpElements.forEach((el) => {
        observer.observe(el);
    });
});
