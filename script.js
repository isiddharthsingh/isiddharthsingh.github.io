document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-button');
    const headerTitle = document.getElementById('header-title');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('expanded');
        if (sidebar.classList.contains('expanded')) {
            headerTitle.textContent = 'Siddharth Singh';
            document.querySelectorAll('.sidebar .nav-text').forEach(text => {
                text.style.display = 'inline';
            });
        } else {
            headerTitle.textContent = 'SS';
            document.querySelectorAll('.sidebar .nav-text').forEach(text => {
                text.style.display = 'none';
            });
        }
    });
});
