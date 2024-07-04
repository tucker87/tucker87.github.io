export const formatHtml = html => {
    let lines = html.split('\n')
    if(lines[0] === '') lines.shift()

    const offset = lines[0].length - lines[0].trimStart().length
    return lines.map(l => l.slice(offset, l.length)).join('\n')
}

export const encodeHtml = html => html.replaceAll("<", "&lt;").replaceAll(">", "&gt;")

export const parseEncodedHtml = html => html.replaceAll('&lt;', '<').replaceAll('&gt;', '>')

export const htmlToElement = (html) => {
    var template = document.createElement('template')
    template.innerHTML = html.trim()
    return template.content
}

export const insertTextAtCursor = (text) => {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    range.deleteContents();
    let node = document.createTextNode(text);
    range.insertNode(node);

    for (let position = 0; position < text.length - 2; position++)
        selection.modify("move", "right", "character");
}

export default {
    formatHtml,
    encodeHtml,
    parseEncodedHtml,
    htmlToElement,
    insertTextAtCursor
}