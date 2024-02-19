const { expect } = require('@wdio/globals')
const InputPage = require('../pageobjects/input.page')

describe('practice Browser Objects', () => {
    // it.only('Test 1', async () => {
    //     await InputPage.openURL("https://letcode.in/edit")
    //     var element = await $$('input[type="text"]')
    //    for(var i=0;i<element.length;i++){
    //     if(i===1){
    //         await element[i].setValue("Jahed")
    //         break
    //     }
    //    }
    // //await $$('input[type="text"]')[1].setValue("Jahed")
    // })

    // it.only('Window Size', async () => {
    //     await InputPage.openURL("https://letcode.in/edit")
    //     await browser.setWindowSize(1300,1000)
    //     await browser.pause(5000)
    //    var windowSize =  await browser.getWindowSize()
    //    console.log(windowSize)
    // })

    // it.only('Keys', async () => {
    //     await InputPage.openURL("https://letcode.in/edit")
    //     await $$('input[type="text"]')[1].setValue("Jahed")
    //     await browser.keys("Enter")
    // })

    it.only('Window Handling', async () => {
        await InputPage.openURL("https://letcode.in/edit")
        await browser.newWindow("https://google.com")
        await browser.pause(10000)
        await browser.closeWindow()
        await browser.pause(10000)
    })
})