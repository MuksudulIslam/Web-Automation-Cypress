import LoginPage from "../pages/LoginPage";

describe('User Login Suite', () => {

  const loginpage = new LoginPage();

  it('User Login With Blank Credentials', () => {
    cy.viewport(1080, 720);

    loginpage.login(" ", " ");
    cy.get('.text-danger').should('contain', 'Login failed!');

  })

  it('User Login With Valid Username and Invalid Password', () => {
    cy.viewport(1080, 720);

    loginpage.login("John Doe", "ThisIsAPassword");
    cy.get('.text-danger').should('contain', 'Login failed!');

  })

  it('User Login With Invalid Username and Valid Password', () => {
    cy.viewport(1080, 720);

    loginpage.login("John", "ThisIsNotAPassword");
    cy.get('.text-danger').should('contain', 'Login failed!');

  })

  it('User Login With Valid Credentials', () => {
    cy.viewport(1080, 720);

    loginpage.login("John Doe", "ThisIsNotAPassword");
    cy.get('h2').should('contain', 'Make Appointment');

  })

})