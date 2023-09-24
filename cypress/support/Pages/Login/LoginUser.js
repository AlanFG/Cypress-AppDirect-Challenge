class loginuser{
    this ={
        userEmail: ()=> cy.xpath("//input[@id='username']"),
        nextButton: ()=> cy.xpath("//button[normalize-space()='Next']"),
    }


    //Actions
    TypeUserEmail(type){
        this.this.userEmail().type(type)
    }
    ClickNextButton(){
        this.this.nextButton().click()
    }


}
export const LoginUser = new loginuser