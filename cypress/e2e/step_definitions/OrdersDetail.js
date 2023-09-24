import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Operations} from "../../support/Pages/Home/Main/Operations/Operations"
import {Orders} from "../../support/Pages/Home/Main/Operations/Orders/Orders"
const {HomeUrl, LoginUrl, AdminUrl, OperationsUrl} = Cypress.env("PageUrl")
let IdNumber

context("US 1 User Can open orders page and search for their order", ()=>{
    Given("A user alredy logged in", ()=>{
        cy.LoginAppDirect()
    })
        describe("TC 1 Checking the orders details", ()=>{
            Given("The user clicks the orders Page",()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
            })
            When("The user clicks the first order that is shown",()=>{
                cy.xpath("//tbody").within((orders)=>{
                    cy.xpath("//tbody//tr[1]//td[1]//span")
                        .invoke("text")
                        .then((text)=>{
                            IdNumber = text //get the id number of the order
                        })
                })
                Orders.VerifyOrdersText()
                Orders.ClickFirstOrder()
            })
            When("The user clicks the first Order History",()=>{
                cy.wrap(IdNumber).should("exist").then(()=>{
                    cy.xpath(`//td[contains(text(),"${IdNumber}")]`).click()
                    })
                })
            Then("The order details has to show and the price breakdown",()=>{
                cy.xpath("//div[@class='modal-content csrDetails']/ancestor::div[@aria-labelledby='Order Details']")
                    .should("contain", IdNumber)
                    .and("contain", "Subtotal")
                    .and("contain", "Sales Tax")
                    .and("contain", "Total")
                    .and("be.visible")
            })
        })
})