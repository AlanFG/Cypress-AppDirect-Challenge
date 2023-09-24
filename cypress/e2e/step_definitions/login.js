import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Home} from "../../support/Pages/Home/Home"
import {LoginUser} from "../../support/Pages/Login/LoginUser"
import {LoginPassword} from "../../support/Pages/Login/LoginPassword/LoginPass"
const {HomeUrl, LoginUrl, AdminUrl, OperationsUrl} = Cypress.env("PageUrl")

context("US 1 TC 1 Login User",()=>{

    describe("TC 1 A user alredy registered is loggin", ()=>{
        Given("A user alredy registered is at the Home page",()=>{
            cy.visit(HomeUrl)
            cy.url().should("contain", HomeUrl)
        })
        When("The user goes to the login page and write her email as {string} and press the next button", (email)=>{
            Home.ClickLogInButton()
            cy.url().should("contain", LoginUrl)
            cy.wait(5000)
            LoginUser.TypeUserEmail(email)
            LoginUser.ClickNextButton()
        })
        When("The user write is password as {string}", (password)=>{
            cy.wait(5000)
            LoginPassword.VerifyPasswordDisplay()
            LoginPassword.TypePassword(password)
            LoginPassword.ClickLogInButton()
        })
        Then("The user is redirected to the Admin page", ()=>{
            cy.url().should("include", AdminUrl)
        })
    })

})