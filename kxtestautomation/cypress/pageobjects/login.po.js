class Login {

    customerLoginButton = 'button[ng-click="customer()"]'
    loginDropdown = '#userSelect'
    loginButton = 'button[type="submit"]'

    loginAsCustomer(customer) {

        cy.get(this.customerLoginButton).click()      
        cy.get(this.loginDropdown).select(customer)
        cy.get(this.loginButton).click()        

    }
}

export default Login