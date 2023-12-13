# kxtestautomation
Scenarios covered:
1. A customer should be able to login using the ‘Customer Login’ button. The site has got a pre-defined set of customers and any one of them can be used. The test should be parameterized so that it is possible to run the test with any valid user without making any changes to the test scripts. 
2. On successful login, the customer should be able to see the home page with his balance and account number (should be a valid number). The page should also have options for Transactions, Deposit and Withdrawal.
3. Customer should be able to successfully deposit $500 to his account. The balance on the account should be updated accordingly.
4. Customer should be able to view transaction history. There should be a transaction entry showing the above deposit with the correct amount and today’s date. 

How to run:
Node.JS and Cypress should be installed
The kxtestautomation folder should be opened in VS Code
Run "npx cypress open --env user='username'" in terminal
.. where username is one of the following: Hermoine Granger, Harry Potter, Ron Weasly, Albus Dumbledore, Neville Longbottom

For copy-paste:
npx cypress open --env user="Hermoine Granger"
npx cypress open --env user="Harry Potter"
npx cypress open --env user="Ron Weasly"
npx cypress open --env user="Albus Dumbledore"
npx cypress open --env user="Neville Longbottom"
