document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('fact-modal');
    const modalText = document.getElementById('fact-text');
    const closeBtn = document.querySelector('.close-btn');
    const factButtons = document.querySelectorAll('.btn-fact');

    // Abre o modal com a curiosidade certa do animal clicado
    factButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const fact = card.getAttribute('data-fact');
            
            modalText.textContent = fact;
            modal.classList.remove('hidden');
        });
    });

    // Fecha o modal ao clicar no botão "X"
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Fecha o modal se o usuário clicar em qualquer lugar fora da caixinha de texto
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
