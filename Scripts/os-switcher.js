window.updateContent = function() {
    const osSelect = document.getElementById('osSelect');
    
    const osContents = document.querySelectorAll('.os-content');
    const selectedOS = osSelect.value;

    osContents.forEach(content => {
    content.style.display = content.dataset.os === selectedOS ? 'block' : 'none';
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const osSelect = document.getElementById('osSelect');
    
    osSelect.value = 'windows';
    osSelect.addEventListener('change', updateContent);
});