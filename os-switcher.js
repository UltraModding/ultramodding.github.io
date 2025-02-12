document.addEventListener('DOMContentLoaded', function() {
    const osSelect = document.getElementById('osSelect');
    const osContents = document.querySelectorAll('.os-content');
    
    function showOSContent(selectedOS) {
        osContents.forEach(content => {
            content.classList.remove('active');
        });
        
        const selectedContent = document.querySelector(`.os-content[data-os="${selectedOS}"]`);
        if (selectedContent) {
            selectedContent.classList.add('active');
        }
        
        localStorage.setItem('preferredOS', selectedOS);
    }
    
    osSelect.addEventListener('change', function() {
        showOSContent(this.value);
    });
    
    const savedOS = localStorage.getItem('preferredOS');
    if (savedOS) {
        osSelect.value = savedOS;
        showOSContent(savedOS);
    } else {
        showOSContent('windows');
    }
});