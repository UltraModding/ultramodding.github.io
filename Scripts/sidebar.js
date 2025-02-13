//dont look past this point, its for your own sanity, its this way to try and avoid cors

document.addEventListener("DOMContentLoaded", function() { // URL manager
    const getRootPath = () => {
        // If on GitHub Pages
        if (window.location.hostname.includes('github.io')) {
            const pathParts = window.location.pathname.split('/');
            const repoName = pathParts[1] || pathParts[2];
            return `/${repoName}`;
        }
        // If local
        return '';
    };

    const rootPath = getRootPath();
    const commonHtmlPath = `${rootPath}/sidebar.html`;

    fetch(commonHtmlPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch sidebar.html from ${commonHtmlPath}`);
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
        .catch(err => {
            console.error("Error loading sidebar content:", err);
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.innerHTML = '<p>Error loading sidebar content. Please ensure sidebar.html exists in the root directory.</p>';
            }
        });
});