class orders{
    this ={
        ordersText: ()=> cy.xpath("//h1[normalize-space()='Orders']"),
        searchBar: ()=> cy.xpath("//input[@data-auto='search_input']"),
        searchBarButton: ()=> cy.xpath("//button[@aria-label='Search']"),
        firstOrder: ()=> cy.xpath("//tbody//tr[1]"),
        showFilterButton: ()=> cy.xpath("//button[@data-auto='showFilters']"),
        statusFilter: ()=> cy.xpath("(//select[@aria-label='select'])[1]"),
    }

    //Acions
    TypeSearchBar(type){
        this.this.searchBar().type(type)
    }
    ClickSearchBarButton(){
        this.this.searchBarButton().click()
    }
    ClearSearchBar(){
        this.this.searchBar().clear()
    }
    ClickFirstOrder(){
        this.this.firstOrder().click({force:true})
    }
    ClickShowFilterButton(){
        this.this.showFilterButton().click()
    }
    SelectStatusFilter(status){
        this.this.statusFilter().select(status)
    }


    //Verify
    VerifyOrdersText(){
        this.this.ordersText().should("contain", "Orders")
    }
    VerifySearchBarIsEmpty(){
        this.this.searchBar().should("have.value", "")
    }
}
export const Orders = new orders