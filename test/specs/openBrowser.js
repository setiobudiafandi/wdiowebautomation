const assert = require('assert');

describe('open sauce demo',() => {
    it ('should open sauce demo', async() => {
        await browser.url('/')

        const actualURL = await browser.getUrl()
        const expectedURL = 'https://www.saucedemo.id/'

        await assert.strictEqual(actualURL, expectedURL, 'Actual URL: '+ actualURL + ', Expected: '+ expectedURL)
    })
})