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

//dont look past this point, its for your own sanity, its this way to try and avoid cors

document.addEventListener("DOMContentLoaded", function() {
    const basePath = document.baseURI.endsWith('/') ? '' : '/';
    const commonHtmlPath = `${basePath}common.html`;

    fetch(commonHtmlPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch common.html');
            }
            return response.text();
        })
        .then(html => {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.innerHTML = html;
                
                const menuToggles = document.querySelectorAll('.menu-toggle');
                menuToggles.forEach(toggle => {
                    toggle.addEventListener('click', (e) => {
                        const dropdown = e.target.nextElementSibling;
                        if (dropdown && dropdown.classList.contains('dropdown')) {
                            dropdown.classList.toggle('active');
                        }
                    });
                });
            } else {
                console.error('Sidebar element not found.');
            }
        })
        .catch(err => console.error("Error loading common content: ", err));
});