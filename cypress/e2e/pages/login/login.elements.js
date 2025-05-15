export class LoginElements {
  static get textboxes() {
    return {
      get username() {
        return cy.get('input#username');
      },
      get password() {
        return cy.get('input#password');
      },
    };
  }

  static get buttons() {
    return {
      get login() {
        return cy.get('button#boton-login');
      },
  };
}
}
