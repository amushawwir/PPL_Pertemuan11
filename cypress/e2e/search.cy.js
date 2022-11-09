describe('Login --> Search', () => {
    const email = 'mushawwir123@gmail.com';
    const password = 'pass123';
    const search = 'Muh Fauzi Ramadhan Nugraha';
    const timeWaiting = 10000;

    it('Search', () => {
        cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
        cy.get('#username').type(email)
        cy.get('#password').type(password)
        cy.get('.btn__primary--large').click()
        cy.get('.search-global-typeahead').type(search).type('{enter}')
        cy.get('.search-nec__hero-kcard-v2-actions > :nth-child(1) > .app-aware-link').click()
    });
});