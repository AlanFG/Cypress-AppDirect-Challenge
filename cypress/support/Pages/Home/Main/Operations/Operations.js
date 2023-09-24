class operations{
    this ={
        ordersButton: ()=> cy.xpath("//a[normalize-space()='Orders']"),

    }

    //Actions
    ClickOrdersButton(){
        this.this.ordersButton().click()
    }

}

export const Operations = new operations