// Script para animações e interatividade

document.addEventListener('DOMContentLoaded', () => {
    // Animação para o título da seção "hero"
    const heroTitle = document.querySelector('.hero h1');
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        heroTitle.style.transition = 'all 1s';
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = 'translateY(0)';
    }, 500);

    // Adicionar interatividade ao clicar nas imagens
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert('Você clicou em uma imagem!');
        });
    });
});
