class MarkdownConverter {
    parse(markdown) {
        let result = '';
        let currentContent = '';
                const lines = markdown.split('\n');
        let i = 0;
        
        while (i < lines.length) {
            const line = lines[i];
            
            if (line.startsWith('---os:')) {
                if (currentContent) {
                    result += this.convertToHTML(currentContent);
                    currentContent = '';
                }
                
                const osType = line.replace('---os:', '').trim();
                let osContent = '';
                i++;
                
                while (i < lines.length && !lines[i].includes('---end---')) {
                    osContent += lines[i] + '\n';
                    i++;
                }
                
                result += `
                    <div class="OSSpesific">
                        <div class="os-content" data-os="windows">${osType === 'windows' ? this.convertToHTML(osContent) : ''}</div>
                        <div class="os-content" data-os="mac">${osType === 'mac' ? this.convertToHTML(osContent) : ''}</div>
                        <div class="os-content" data-os="linux">${osType === 'linux' ? this.convertToHTML(osContent) : ''}</div>
                    </div>
                `;
            } else {
                currentContent += line + '\n';
            }
            
            i++;
        }
        
        if (currentContent) {
            result += this.convertToHTML(currentContent);
        }
        
        return result;
    }
    convertToHTML(markdown) {
        let html = markdown
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/!\[([^\]]*)\]\(([^)]+)\s*"(.*?)"\)/g, (match, alt, src, size) => {
                const sizeStyle = size ? ` style="${size}"` : '';
                return `<img src="${src}" alt="${alt}"${sizeStyle} />`;
            })            
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            .replace(/```([^`]+)```/gs, '<pre><code>$1</code></pre>');
        
        if (html.includes('<li>')) {
            html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
            html = html.replace(/<\/ul>\s*<ul>/g, ''); // Merge consecutive <ul>
        }        
        return html.replace(/\n/g, '<br>');
    }
}
export default MarkdownConverter;