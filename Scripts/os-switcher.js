window.updateContent = function() {
    const osSelect = document.getElementById('osSelect');
    // Query for .os-content elements every time the function runs.
    const osContents = document.querySelectorAll('.os-content');
    const selectedOS = osSelect.value;

    osContents.forEach(content => {
    content.style.display = content.dataset.os === selectedOS ? 'block' : 'none';
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const osSelect = document.getElementById('osSelect');
    // Set default selection and attach change event.
    osSelect.value = 'windows';
    osSelect.addEventListener('change', updateContent);
});