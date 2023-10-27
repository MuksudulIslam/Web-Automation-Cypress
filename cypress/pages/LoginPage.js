class LoginPage {

    login(username, password) {

        cy.visit("https://katalon-demo-cura.herokuapp.com/");         //Visti Website

        cy.get('#btn-make-appointment').click();                     //Select Make Appointment For Login

        cy.get('#txt-username').type(username);                     //Enter Username

        cy.get('#txt-password').type(password);                    //Enter Password

        cy.get('#btn-login').click();                             //Click on Login
    }
}

export default LoginPage;