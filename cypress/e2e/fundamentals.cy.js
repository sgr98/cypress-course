describe('Fundamentals Test', () => {
	beforeEach(() => {
        cy.visit('/fundamentals')
    })

    it('Contains correct header text', () => {
		// cy.get('[data-test="fundamentals-header"]').contains(/testing fundamentals/i)
		cy.getDataTest('fundamentals-header').should(
			'contain.text',
			'Testing Fundamentals'
		);
	});

    // can use it.only() to run only those commands
	it('Accordion works correctly', () => {
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click()    // can add .pause() to pause the test runner
        cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
	});
});
