const { $ } = require('@wdio/globals')
const Page = require('./page');

class InputPage extends Page {
    fullNameInputFieldLocator = `#fullName`

    async typeInput (name) {
        await $(this.fullNameInputFieldLocator).setValue(name);
    }

    openURL (url) {
        return super.open(url);
    }
}

module.exports = new InputPage();
