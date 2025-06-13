// Theme toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleTheme');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
    });
});