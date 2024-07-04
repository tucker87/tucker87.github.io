import targets from './targets.js'
import { formatHtml, encodeHtml, parseEncodedHtml, htmlToElement, insertTextAtCursor } from './htmlFormatting.js'

const makeTarget = targetData => {
    const target = document.createElement("div")
    target.className = 'target'
    const header = document.createElement("h1")
    const link = document.createElement('a')
    link.target = '_blank'
    link.href = `https://cssbattle.dev/play/${targetData.number}`
    link.innerText = `Target ${targetData.number}: ${targetData.name}`
    header.appendChild(link)
    target.appendChild(header)

    const solution = document.createElement("div")
    solution.className = 'solution'
    const html = document.createElement("h2")
    html.innerText = 'HTML'
    solution.appendChild(html)
    const pre = document.createElement("pre")
    const code = document.createElement("code")
    code.innerHTML = targetData.html
    pre.appendChild(code)
    solution.appendChild(pre)
    const css = document.createElement("h2")
    css.innerText = 'CSS'
    solution.appendChild(css)

    const pre2 = document.createElement("pre")
    const code2 = document.createElement("code")
    code2.innerHTML = targetData.css
    code2.setAttribute('contenteditable', true)
    pre2.appendChild(code2)
    solution.appendChild(pre2)
    target.appendChild(solution)

    const result = document.createElement("div")
    result.className = 'result'

    const frame = document.createElement("iframe")
    result.appendChild(frame)
    target.appendChild(result)

    document.querySelector('section').appendChild(target)
    return target
}


targets.forEach(makeTarget)

document.querySelectorAll(".target").forEach(b => {
    let frame = b.querySelector("iframe")

    let codeBlocks = b.querySelectorAll("code")

    codeBlocks[0].innerHTML = formatHtml(codeBlocks[0].innerHTML)
    codeBlocks[1].innerHTML = formatHtml(codeBlocks[1].innerHTML)

    let htmlElem = htmlToElement(parseEncodedHtml(codeBlocks[0].innerHTML))
    frame.contentWindow.document.body.appendChild(htmlElem)

    let baseCss = document.createElement("style")
    baseCss.innerHTML = 'body { overflow: hidden; }'
    frame.contentWindow.document.body.appendChild(baseCss)

    let cssElem = document.createElement("style")
    cssElem.innerHTML = parseEncodedHtml(codeBlocks[1].innerHTML)
    frame.contentWindow.document.body.appendChild(cssElem)

    codeBlocks[0].innerHTML = encodeHtml(codeBlocks[0].innerHTML)

    codeBlocks[1].addEventListener("input", function (ev) {
        cssElem.innerHTML = ev.target.innerText
    });

    codeBlocks[1].addEventListener("keydown", function (event) {
        if (event.keyCode === 9) {
            event.preventDefault()
            insertTextAtCursor("   ")
        }
    })

})

hljs.highlightAll();