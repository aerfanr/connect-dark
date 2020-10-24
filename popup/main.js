document.getElementById('reload').addEventListener("click", () => {
    const makeDark = (tabs) => {
        console.log("run")
        chrome.tabs.sendMessage(tabs[0].id, {
            command: "makeDark"
        })
    }

    chrome.tabs.query({active: true, currentWindow: true}, makeDark)
})

chrome.tabs.executeScript({file: "/connect-dark.js"})
