describe('ui-button: UiButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uibutton--primary'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Click me!');
  });
});
