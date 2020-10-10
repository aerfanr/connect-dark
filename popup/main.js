document.getElementById('reload').addEventListener("click", () => {
    const makeDark = (tabs) => {
        console.log("run")
        browser.tabs.sendMessage(tabs[0].id, {
            command: "makeDark"
        })
    }

    browser.tabs.query({active: true, currentWindow: true})
        .then(makeDark)

})

browser.tabs.executeScript({file: "/connect-dark.js"})
