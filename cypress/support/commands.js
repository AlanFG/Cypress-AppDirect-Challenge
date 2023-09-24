// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Login
import {LoginUser} from "../support/Pages/Login/LoginUser"
import {LoginPassword} from "../support/Pages/Login/LoginPassword/LoginPass"
const {LoginUrl, AdminUrl} = Cypress.env("PageUrl")
const {Email, Password} = Cypress.env("Credentials")

Cypress.Commands.add("LoginAppDirect", ()=>{
    cy.session("LoginAppDirect", ()=>{
        cy.visit(LoginUrl)
        cy.url().should("include", LoginUrl)
        cy.wait(5000)
        LoginUser.TypeUserEmail(Email)
        LoginUser.ClickNextButton()
        cy.wait(5000)
        LoginPassword.TypePassword(Password)
        LoginPassword.ClickLogInButton()
        cy.url().should("include", AdminUrl)
    })
})