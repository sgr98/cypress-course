describe('Various examples', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('multi-page testing', () => {
		cy.getDataTest('nav-why-cypress').click();
		cy.wait(100);
		cy.location('pathname').should('equal', '/');
		cy.wait(100);

		cy.getDataTest('nav-overview').click();
		cy.wait(100);
		cy.location('pathname').should('equal', '/overview');
		cy.wait(100);

		cy.getDataTest('nav-fundamentals').click();
		cy.wait(100);
		cy.location('pathname').should('equal', '/fundamentals');
		cy.wait(100);

		cy.getDataTest('nav-forms').click();
		cy.wait(100);
		cy.location('pathname').should('equal', '/forms');
		cy.wait(100);

		cy.getDataTest('nav-examples').click();
		cy.wait(100);
		cy.location('pathname').should('equal', '/examples');
		cy.wait(100);

		cy.getDataTest('nav-component').click();
		cy.wait(100);
		cy.location('pathname').should('equal', '/component');
		cy.wait(100);

		cy.getDataTest('nav-practices').click();
		cy.wait(100);
		cy.location('pathname').should('equal', '/best-practices');
		cy.wait(100);
	});
});
