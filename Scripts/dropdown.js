document.addEventListener('DOMContentLoaded', () => { // Dropdown for sidebar
    const menuToggles = document.querySelectorAll('.menu-toggle');

    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const dropdown = e.target.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown')) {
                if (dropdown.style.height) {
                    dropdown.style.height = null;
                } else {
                    dropdown.style.height = `${dropdown.scrollHeight}px`;
                }
            }
        });
    });
});
