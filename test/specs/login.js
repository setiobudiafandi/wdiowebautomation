const assert = require('assert');
// import { login } from './function.js';

async function login(username, password) {
    await browser.url('/')

    await $("input[id='user-name']").setValue(username)
    await $("input[id='password']").setValue(password)
    await $("input[id='login-button']").click()
}

describe('Login scenario',() => {
    it ('should login successfully', async() => {
        await login("standard_user","secret_sauce")

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })
})