const makeDark = () => {
    const frame = document.getElementsByTagName('iframe')[0]

    const innerDoc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document

    const divs = innerDoc.getElementsByTagName('div')

    for (div of divs) {
        if (div.id === 'chatIndividualMessageContentDiv') {
            div.style.padding = '0'
            continue
        }
        if (/share*/.test(div.className) || /pdf*/.test(div.className) || /whiteboard*/.test(div.className) || /wb*/.test(div.className)) {
            continue
        }
        div.style.backgroundColor = '#111111'
        div.style.borderColor = 'black'
        div.style.scrollbarColor = 'dark'
        div.style.color = 'white'
    }
}

console.log("test")

chrome.runtime.onMessage.addListener((message) => {
    makeDark()
})
