document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('active');
        });
    });
});