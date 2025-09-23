
const pianeti = document.querySelectorAll('.pianeta');

pianeti.forEach(pianeta => {
    pianeta.addEventListener('mouseenter', () => {
        pianeta.style.transform = 'scale(1.2)';
        pianeta.style.transition = 'transform 0.2s';
    });

    pianeta.addEventListener('mouseleave', () => {
        pianeta.style.transform = 'scale(1)';
    });
});
