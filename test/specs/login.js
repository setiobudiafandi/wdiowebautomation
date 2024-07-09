const assert = require('assert');
const Page = require('../../pages/page');
const LoginPage = require('../../pages/loginPage');

// async function login(username, password) {
//     await browser.url('/')

//     await $("input[id='user-name']").setValue(username)
//     await $("input[id='password']").setValue(password)
//     await $("input[id='login-button']").click()
// }

describe('Login scenario',() => {
    beforeEach(async() => {
        Page.open('/')
    })

    it ('should login successfully', async() => {
        await LoginPage.login("standard_user","secret_sauce")
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it ('Login failed', async() => {
        await LoginPage.login("standard_userddfsfa","secret_sauce")
        await LoginPage.assertErrorMsg("Epic sadface: Username and password do not match any user in this service")
    })
})