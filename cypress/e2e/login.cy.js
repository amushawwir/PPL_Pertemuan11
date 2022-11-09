describe('Login', () => {
    const email = 'mushawwir123@gmail.com';
    const password = 'pass123';
    const timeWaiting = 10000;

    it('login with valid input', () => {
        cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
        cy.get('#username').type(email)
        cy.get('#password').type(password)
        cy.get('.btn__primary--large').click();
    });
});