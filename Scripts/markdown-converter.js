class MarkdownConverter {
    parse(markdown) {
    // Split markdown into a common part and OS-specific sections
    const sections = markdown.split('---os:');
    const commonContent = this.convertToHTML(sections[0]);
    const osContent = {};

    sections.slice(1).forEach(section => {
        const [os, ...content] = section.trim().split('\n');
        osContent[os.trim()] = this.convertToHTML(content.join('\n'));
    });

    return `
        ${commonContent}
        <div class="OSSpesific">
        <div class="os-content" data-os="windows">${osContent.windows || ''}</div>
        <div class="os-content" data-os="mac">${osContent.mac || ''}</div>
        <div class="os-content" data-os="linux">${osContent.linux || ''}</div>
        </div>
    `;
    }

    convertToHTML(markdown) {
    return markdown
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n- (.*)/g, '<li>$1</li>')
        .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
        .replace(/\n/g, '<br>');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const scriptTag = document.querySelector('script[src*="markdown-converter.js"]');
    const file = scriptTag?.getAttribute('data-md');

    fetch(file)
        .then(response => response.text())
        .then(markdown => {
            const converter = new MarkdownConverter();
            document.querySelector('.text').innerHTML = converter.parse(markdown);
            updateContent();
        })
        .catch(err => console.error('Error loading markdown:', err));
});