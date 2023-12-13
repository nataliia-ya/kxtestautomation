class Transactions {

    resetButton = 'button[ng-click="reset()"]'
    backButton = 'button[ng-click="back()"]'

    verifyTransaction(amount) {

        cy.wait(500)
        cy.reload()
        cy.get("tr td:nth-child(2)")       
        .eq(1)
        .contains(amount)
        .should('be.visible')

        cy.get("tr td:nth-child(1)")       
        .eq(1)
        .contains(new Date().toLocaleString('en-us',{month:'short', day:'numeric'}))
        .should('be.visible')

    }

    resetTransactions() {

        cy.get(this.resetButton).then($button => {
            if ($button.is(':visible')){
                $button.click()
            } else {
                cy.log('No transatcion history')
            }
          })

    }

    returnToAccount() {

        cy.get(this.backButton).click()

    }
}

export default Transactions