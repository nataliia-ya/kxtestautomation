class Account {

    transactionsButton = 'button[ng-click="transactions()"]'
    depositButton = 'button[ng-click="deposit()"]'
    withdrawalButton = 'button[ng-click="withdrawl()"]'
    amountDepositField = 'input[ng-model="amount"]'
    submitButton = 'button[type="submit"]'
    message = 'span[ng-show="message"]'

    verifyHomePage() {

        this.verifyButtons()
        this.verifyBalance()
        this.verifyAccountNumber()

    }
    
    verifyButtons() {

        cy.get(this.transactionsButton).should('exist').should('be.visible')
        cy.get(this.depositButton).should('exist').should('be.visible')
        cy.get(this.withdrawalButton).should('exist').should('be.visible')

    }

    verifyAccountDeposit(amount) {

        cy.get('strong.ng-binding').eq(1).invoke('text').as('currentBalance')
        cy.get('@currentBalance').then((currentBalance) => {
            cy.get(this.depositButton).click()
            cy.get(this.amountDepositField).type(amount)
            cy.get(this.submitButton).click()
            cy.get(this.message).contains("Deposit Successful")
            cy.get('strong.ng-binding').eq(1).invoke('text')
            .should('contain', Number(currentBalance) + amount)
          })

    }

    viewTransactions() {

        cy.get(this.transactionsButton).click()

    }

    verifyBalance() {

        cy.get('strong.ng-binding').eq(1).invoke('val')
        .should('exist')
        .should(value => {
            expect(Number.isNaN(+value), 'input should be a number').to.eq(false)    // passes
         })       

    }

    verifyAccountNumber() {

        cy.get('strong.ng-binding').eq(0).invoke('val')
        .should('exist')
        .should(value => {
            expect(Number.isInteger(+value), 'input should be an integer').to.eq(true)
         })

    }

}

export default Account