class HomePage {

    facilitySelect(facilityCenter) {                               //Facility Select

        cy.get('#combo_facility')
            .select(facilityCenter)
            .should('have.value', facilityCenter);

    }

    readmission() {                                                //Check on Readmission

        cy.get('#chk_hospotal_readmission').click();

    }

    healtcarePro() {                                               //Select Healthcare Program

        cy.get('#radio_program_medicaid').click();

    }

    appoitment(appointmentDate) {                                  //Select Appointment Date

        cy.get('#txt_visit_date')
            .click()
            .type(appointmentDate)
            .type('{esc}');

    }

    addComment(comment) {                                         //Add Comment

        cy.get('#txt_comment')
            .click()
            .type(comment);

    }

    bookAppointment() {                                          //Click on Book Appointment

        cy.get('#btn-book-appointment').click();

    }
}

export default HomePage;