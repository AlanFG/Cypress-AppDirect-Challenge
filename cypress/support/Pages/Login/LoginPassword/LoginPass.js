class loginpassword{
    this ={
        password: ()=> cy.xpath("//input[@id='password']"),
        logInButton: ()=> cy.xpath("//button[normalize-space()='Log In']"),
        passwordVerifier: ()=> cy.xpath("//label[normalize-space()='Password']")
    }


    //Actions
    TypePassword(type){
        this.this.password().type(type)
    }
    ClickLogInButton(){
        this.this.logInButton().click()
    }

    //Verifications
    VerifyPasswordDisplay(){
        this.this.passwordVerifier().should("be.visible")
    }

}

export const LoginPassword = new loginpassword