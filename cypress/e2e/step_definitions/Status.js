import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Operations} from "../../support/Pages/Home/Main/Operations/Operations"
import {Orders} from "../../support/Pages/Home/Main/Operations/Orders/Orders"
const {HomeUrl, LoginUrl, AdminUrl, OperationsUrl} = Cypress.env("PageUrl")

context("US 1 Status Filter", ()=>{
    Given("A user has successfully authenticated", ()=>{
        cy.LoginAppDirect()
    })
        describe("TC 1 A user is gonna filter the existing orders by status", ()=>{
            Given("A user goes to the orders Page",()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
            })
            When("The user click show filters",()=>{
                Orders.ClickShowFilterButton()
            })
            When("The user clicks the status filter {string} in the search bar",(status)=>{
                Orders.SelectStatusFilter(status)
            })
            Then("The order filtered status as {string} has to appear", (status) => {
                cy.xpath("//tbody").within(()=>{
                    cy.get("tr td span")
                    .should("contain", status)
                    .and("be.visible")
                    })
            })
        })
        describe("TC 2 A user will filter orders that do not exist by status", ()=>{
            Given("The user goes to the orders Page",()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
            })
            When("The user click the button show filters",()=>{
                Orders.ClickShowFilterButton()
            })
            When("The user clicks the status filter as {string} in the search bar",(status)=>{
                Orders.SelectStatusFilter(status)
                cy.wait(5000)
            })
            Then("A message sayig {string}",(msg)=>{
                cy.xpath("//div[@class='adb-placeholder adb-placeholder__condensed']")
                .should("be.visible")
                .and("contain", "Your search produced no results. Please modify filters or search terms to expand your search.")
            })
        })
        describe("TC 3 A user is gonna filter the orders active and by all the ids", ()=>{
            Given("A simple user goes to orders Page",()=>{
                cy.visit(OperationsUrl)
                Operations.ClickOrdersButton()
            })
            When("The user click show filters and select the status active",()=>{
                Orders.ClickShowFilterButton()
                Orders.SelectStatusFilter("Active")
            })
            When("The user enters the id as {string} in the search bar",(id)=>{
                Orders.TypeSearchBar(id)
                Orders.ClickSearchBarButton()
            })
            Then("The order filtered id as {string} has to appear",(id)=>{
                cy.xpath("//tbody").within(()=>{
                    cy.get("tr td span")
                    .should("contain", id)
                    .and("contain", "Active")
                    .and("be.visible")
                    })
            })
        })
})