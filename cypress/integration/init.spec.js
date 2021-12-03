describe('Cypress', () => {
  it('initialises', () => {
    expect(true).to.equal(true);
  })
})

it('loads application', () => {
  cy.visit('/');
})