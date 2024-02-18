const {browser} = require("@wdio/globals")

module.exports = class Page {
    open (url) {
        return browser.url(url)
    }
}
