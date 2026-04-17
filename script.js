// Script para alternar entre modo escuro e claro
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle'); // Botão de alternância
    const body = document.body; // Elemento body

    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme); // Aplica o tema salvo
    }

    // Função para alternar o tema
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode'); // Remove modo claro
            body.classList.add('dark-mode'); // Adiciona modo escuro
            localStorage.setItem('theme', 'dark-mode'); // Salva no localStorage
        } else {
            body.classList.remove('dark-mode'); // Remove modo escuro
            body.classList.add('light-mode'); // Adiciona modo claro
            localStorage.setItem('theme', 'light-mode'); // Salva no localStorage
        }
    });
});