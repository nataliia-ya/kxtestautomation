import Login from '../pageobjects/login.po.js'
import Account from '../pageobjects/account.po.js'
import Transations from '../pageobjects/transactions.po.js'

const login = new Login()
const account = new Account()
const transactions = new Transations()
const user = Cypress.env("user");

describe('Main customer flows check', () => {

  before(() => {

    cy.clearAllCookies()

  });

  it('Customer is able to login and view home page', () => {

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    
    login.loginAsCustomer(user)
    account.verifyHomePage()

  })

  it('Customer is able to deposit to their account and view transactions', () => {
    
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    
    login.loginAsCustomer(user)
    account.viewTransactions()
    transactions.resetTransactions()
    transactions.returnToAccount()

    account.verifyAccountDeposit(500)
    account.viewTransactions()
    transactions.verifyTransaction(500)

  })

})