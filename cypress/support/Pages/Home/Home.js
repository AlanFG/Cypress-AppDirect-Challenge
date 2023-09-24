class home{
        this ={
            logInButton: ()=> cy.xpath("//span[normalize-space()='Log In']"),
        }

        //actions
        ClickLogInButton(){
            this.this.logInButton().click()
        }
}

export const Home = new home