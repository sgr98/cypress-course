describe('Various examples', () => {
	beforeEach(() => {
		cy.visit('/examples');
	});

	it('multi-page testing', () => {
		cy.visit('/');

		cy.getDataTest('nav-why-cypress').click();
		cy.location('pathname').should('equal', '/');

		cy.getDataTest('nav-overview').click();
		cy.location('pathname').should('equal', '/overview');

		cy.getDataTest('nav-fundamentals').click();
		cy.location('pathname').should('equal', '/fundamentals');

		cy.getDataTest('nav-forms').click();
		cy.location('pathname').should('equal', '/forms');

		cy.getDataTest('nav-examples').click();
		cy.location('pathname').should('equal', '/examples');

		cy.getDataTest('nav-component').click();
		cy.location('pathname').should('equal', '/component');

		cy.getDataTest('nav-practices').click();
		cy.location('pathname').should('equal', '/best-practices');
	});

	it('intercepts testing', () => {
		cy.intercept('POST', 'http://localhost:3000/examples', {
			fixture: 'example.json',
		});

		cy.getDataTest('post-button').click();
	});

	it.only('grudges', () => {
		// Initial
		cy.contains(/add some grudges/i);
		cy.getDataTest('grudge-list').within(() => {
			cy.get('li').should('have.length', 0);
		});
		cy.getDataTest('clear-button').should('not.exist');
		cy.getDataTest('grudge-list-title').should(
			'have.text',
			'Add Some Grudges'
		);

		// 1st input added
		cy.getDataTest('grudge-input').within(() => {
			cy.get('input').type('some grudge');
		});
		cy.getDataTest('add-grudge-button').click();
		cy.getDataTest('grudge-list').within(() => {
			cy.get('li').should('have.length', 1);
		});
		cy.getDataTest('grudge-list-title').should('have.text', 'Grudges');

		// 2nd input added
		cy.getDataTest('grudge-input').within(() => {
			cy.get('input').type('number 2');
		});
		cy.getDataTest('add-grudge-button').click();
		cy.getDataTest('grudge-list').within(() => {
			cy.get('li').should('have.length', 2);
		});
		cy.getDataTest('grudge-list-title').should('have.text', 'Grudges');

		// Delete 1st input
		cy.getDataTest('grudge-list').within(() => {
			cy.get('li')
				.its(0)
				.within(() => {
					cy.get('button').click();
				});
		});
		cy.getDataTest('grudge-list').within(() => {
			cy.get('li').should('have.length', 1);
		});

		// Clear list
		cy.getDataTest('clear-button').click();
		cy.getDataTest('grudge-list').within(() => {
			cy.get('li').should('have.length', 0);
		});
	});
});
