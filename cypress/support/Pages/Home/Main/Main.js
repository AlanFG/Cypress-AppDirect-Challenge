class main{
    this ={
        OperationsButton: ()=> cy.xpath("//span[normalize-space()='Operations']"),

    }

    //Actions
    ClickOperationsButton(){
        this.this.OperationsButton().click()
    }

}

export const Main = new main