export class ImpreNominaData {
  static get url() {
    return "https://intranetpre.educacion.org/educacion/certificados/imprenominas/Scripts/login.asp";
  }

  static get testSuites() {
    return {
      registro: "Registro",
      autenticacion: "Autenticación",
      ImpresionNominillas: "Impresión de Nominillas",
      GeneracionNominillas: "Sistema de Generación de Nominillas",
    };
  }
}
