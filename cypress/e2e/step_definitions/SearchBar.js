import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Operations} from "../../support/Pages/Home/Main/Operations/Operations"
import {Orders} from "../../support/Pages/Home/Main/Operations/Orders/Orders"
const {HomeUrl, LoginUrl, AdminUrl, OperationsUrl} = Cypress.env("PageUrl")

context("US 1 User Can open orders page and search for their order", ()=>{
    Given("A user is currently logged into the system", ()=>{
        cy.LoginAppDirect()
    })
        describe("TC 1 Checking if a user can search by id string", ()=>{
            Given("A user goes to orders Page", ()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
            })
            When("The user enters the {string} in the search bar", (id)=>{
                Orders.VerifyOrdersText()
                Orders.TypeSearchBar(id)
                Orders.ClickSearchBarButton()
            })
            Then("The order as {string} filtered has to appear", (id)=>{
                cy.wait(5000)
                cy.xpath("//tbody").within((orders)=>{
                    cy.get("tr td span")
                    .should("contain", id)
                    .and("be.visible")
            })
        })
        describe("TC 2 Checking if a user can search by Product string", ()=>{
            Given("User goes to orders Page", ()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
            })
            When("The user enters the as {string} in the search bar", (product)=>{
                Orders.VerifyOrdersText()
                Orders.TypeSearchBar(product)
                Orders.ClickSearchBarButton()
            })
            Then("The order {string} filtered has to appear", (Product)=>{
                cy.wait(5000)
                cy.xpath("//tbody").within((orders)=>{
                    cy.get("tr td span")
                    .should("contain", Product)
                    .and("be.visible")
                })
            })
        })
    
        describe("TC 3 Checking if a user can clear the search bar", ()=>{
            Given("The user is in the orders page and the search bar has something writing in", ()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
                Orders.VerifyOrdersText()
                Orders.TypeSearchBar("test")
            })
            Then("The user has to clear the search bar and the orders has to appear", ()=>{
                Orders.ClearSearchBar()
                Orders.VerifySearchBarIsEmpty()
                cy.xpath("//tbody").within((orders)=>{
                    cy.get("tr").should("be.visible")
                    })
            })
        })
    })
})