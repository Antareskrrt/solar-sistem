
const pianeti = document.querySelectorAll('.pianeta');

pianeti.forEach(pianeta => {
    pianeta.addEventListener('mouseclick', () => {
        pianeta.style.transform = 'scale(2)';
        pianeta.style.transition = 'transform 0.2s';
    });

});
