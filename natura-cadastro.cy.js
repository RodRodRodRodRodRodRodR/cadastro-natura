describe('natura cadastro', () => {

    beforeEach(() => {
        cy.visit('https://www.natura.com.br/');
    })

    it('cadastrar usuario', () => {
        cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click ();
        cy.get('.MuiTypography-root > .material-icons').click ();
        cy.get('#onetrust-reject-all-handler').click ();
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('Levi');
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('Marcos');
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('le4323mar1230@outlook.com');
        cy.get('#password-field').click;
        cy.get('#password-field').type ('Levi784512@');
        cy.get('#confirmPassword-field').click;
        cy.get('#confirmPassword-field').type ('Levi784512@');
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('69710571478');
        cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('04031999');
        cy.get(':nth-child(11) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click ();
        cy.get(':nth-child(11) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type ('11948300680');
        cy.get('#acceptedterms').click ();
        cy.get('.natds760 > .MuiButtonBase-root > .MuiButton-label').click ();
        cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click ();

        
    })

})