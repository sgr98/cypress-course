describe('Form Tests', () => {
	beforeEach(() => {
		cy.visit('/forms');
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
	});

	it('Test subscribe form - Good Input', () => {
		const goodTestEmail = 'sagar@sagar.com';
		cy.contains(/testing forms/i);
		
        cy.get('@subscribe-input').type(goodTestEmail);
		cy.contains(`Successfully subbed: ${goodTestEmail}`).should('not.exist');
		cy.getDataTest('subscribe-button').click();
		cy.contains(`Successfully subbed: ${goodTestEmail}`);
		cy.wait(3000);
		cy.contains(`Successfully subbed: ${goodTestEmail}`).should('not.exist');
    });

    it('Test subscribe form - Bad Input', () => {
		const badTestEmail = 'sagar@sagar.io';
		cy.contains(/testing forms/i);

        cy.get('@subscribe-input').type(badTestEmail);
		cy.contains(`Invalid email: ${badTestEmail}!`).should('not.exist');
		cy.getDataTest('subscribe-button').click();
		cy.contains(`Invalid email: ${badTestEmail}!`);
		cy.wait(3000);
		cy.contains(`Invalid email: ${badTestEmail}!`).should('not.exist');
    });

    it('Test subscribe form - Good Input', () => {
		cy.getDataTest('subscribe-button').click();
		cy.contains(`fail!`);
		cy.wait(3000);
		cy.contains(`fail!`).should('not.exist');
    });
});
