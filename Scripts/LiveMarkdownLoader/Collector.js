import MarkdownConverter  from "/Scripts/runtimeMarkdown.js";

document.addEventListener('DOMContentLoaded', () => {
    const converter = new MarkdownConverter();
    
    const test = converter.parse("# Sample\n\n**Bold Text**")
    const html = converter.convertToHTML(test)
    document.querySelector('.text').innerHTML = html;
});