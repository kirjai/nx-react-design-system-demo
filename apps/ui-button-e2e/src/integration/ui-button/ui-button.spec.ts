describe('ui-button: UiButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uibutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-button!');
    });
});
