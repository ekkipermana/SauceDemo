describe('My First Test', () => {
    it('Visits the SauceDemo', () => {

        //LOGIN
      cy.visit('https://www.saucedemo.com/')

      cy.get('#user-name').type('standard_user')

      cy.get('#password').type('secret_sauce')

      cy.get('#login-button').click();



        //ADD TO CART
      cy.get('#add-to-cart-sauce-labs-backpack').click();

      cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();


      
        //CART
        cy.get('#shopping_cart_container').click();

        cy.get('#checkout').click();


        //CHECKOUT
        cy.get('#first-name').type('Sekolah');

        cy.get('#last-name').type('QA');

        cy.get('#postal-code').type('7777');

        cy.get('#continue').click();

        cy.get('#finish').click();
      

    })
  })