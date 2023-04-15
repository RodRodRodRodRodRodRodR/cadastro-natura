describe('aesop cadastro', () => {

    beforeEach(() => {
        cy.visit('https://www.aesop.com.br/');
    })

    it('asop cadastro', () => {
        cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click ();
        cy.get('#onetrust-accept-btn-handler').click ();
        cy.get('.MuiTypography-body2 > .MuiTypography-root > .material-icons').click ();
        cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('Levi');
        cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('Marcos');
        cy.get('#password-field').click ();
        cy.get('#password-field').type ('Levi784512@');
        cy.get('.natds289 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get('.natds289 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('l3vcmarc213@outlook.com');
        cy.get('#confirmPassword-field').click ();
        cy.get('#confirmPassword-field').type ('Levi784512@');
        cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('69710571478');
        cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('04031999');
        cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('11948300680');
        cy.get('#receiveNewsLetter').click ();
        cy.get('#infContOptIn').click ();
        cy.get('#acceptedterms').click ();


        cy.get('.natds354 > .MuiButtonBase-root > .MuiButton-label').click ();

    })
})