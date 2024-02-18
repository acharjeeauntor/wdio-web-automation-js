const { expect } = require('@wdio/globals')
const InputPage = require('../pageobjects/input.page')

describe('My Login application', () => {
    it('Test 1', async () => {
        await InputPage.openURL("https://letcode.in/edit")
        await InputPage.typeInput("Jahed")
    })
})

