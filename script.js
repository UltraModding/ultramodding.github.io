document.addEventListener('DOMContentLoaded', () => {
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

document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/common.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch common.html');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('sidebar').innerHTML = html;
            
            const menuToggles = document.querySelectorAll('.menu-toggle');
            menuToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    const dropdown = e.target.nextElementSibling;
                    if (dropdown && dropdown.classList.contains('dropdown')) {
                        dropdown.classList.toggle('active');
                    }
                });
            });
        })
        .catch(err => console.error("Error loading common content: ", err));
});