const browsers = {
    CHROME: "chrome",
    FF: "firefox",
    EDGE: "Edge",
    SAFARI: "safari"
}

let browser = browser.CHROME

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log("execute on chrome")
            break
        case browsers.FF:
            console.log("execute on firefox")
            break
        case browsers.EDGE:
            console.log("execute on Edge")
            break
        case browsers.SAFARI:
            console.log("execute on safari")
            break
    }
}
console.log(execute())