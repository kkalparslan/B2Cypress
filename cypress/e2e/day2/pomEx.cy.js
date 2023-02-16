///<reference types="cypress"/>

import { Login } from "../../pageObjects/login"
const login = new Login()

describe('Login Test with POM example', () => {

    it('TCO3 navigate to url', () => {
        login.navigate()
        login.title()
    })

    it('TC04 Login Test with POM', () => {
        login.navigate()

        /** 
        login.loginBtn()
        login.username()
        login.password()
        login.submit() 
        */
        login.loginBtn()
            .username()
            .password()
            .submit()
        login.assert()
    })
})

