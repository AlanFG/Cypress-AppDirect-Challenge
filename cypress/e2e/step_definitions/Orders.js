import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Operations} from "../../support/Pages/Home/Main/Operations/Operations"
const {HomeUrl, LoginUrl, AdminUrl, OperationsUrl} = Cypress.env("PageUrl")

context("US 1 User Can open orders page and search for their order", ()=>{
    Given("A user is logged in", ()=>{
        cy.LoginAppDirect()
    })
        describe("TC 1 A user can view is orders", ()=>{
            Given("The user goes to orders Page",()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
            })
            Then("the orders has to appear",()=>{
                cy.xpath("//tbody").within((orders)=>{
                    cy.get("tr").should("exist")
                })
            })
        })
})