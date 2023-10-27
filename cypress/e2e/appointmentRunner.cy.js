import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

describe('User Make an Appointment Suite', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();

    beforeEach(() => {
        cy.viewport(1280, 720);

        loginPage.login("John Doe", "ThisIsNotAPassword");

    })

    it('User Try to Make an Appointment Without Picking Date', () => {

        homePage.facilitySelect("Seoul CURA Healthcare Center");
        homePage.readmission();
        homePage.healtcarePro();
        homePage.appoitment(" ");
        homePage.addComment("My name is John Doe. I have been experiencing occasional chest pain over the last month. During our appointment session, I would like to discuss my problems and test reports.");
        homePage.bookAppointment();

        cy.get('#txt_visit_date')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.');

    })

    it('User Successfully Make an Appointment', () => {

        homePage.facilitySelect("Seoul CURA Healthcare Center");
        homePage.readmission();
        homePage.healtcarePro();
        homePage.appoitment("04/12/2023");
        homePage.addComment("My name is John Doe. I have been experiencing occasional chest pain over the last month. During our appointment session, I would like to discuss my problems and test reports.");
        homePage.bookAppointment();

        cy.get('h2').should('contain', 'Appointment Confirmation');
        
        cy.get('.lead').should('contain', 'Please be informed that your appointment has been booked')
        cy.get('#facility').should('contain', 'Seoul CURA Healthcare Center');
        cy.get('#hospital_readmission').should('contain', 'Yes');
        cy.get('#program').should('contain', 'Medicaid');
        cy.get('#visit_date').should('contain', '04/12/2023');


    })
})