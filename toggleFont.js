document.addEventListener('DOMContentLoaded', function() {
    const toggleFontButton = document.getElementById('toggleFontButton');
    const body = document.body;

    toggleFontButton.addEventListener('click', () => {
        body.classList.toggle('vcr-font');
    });
});