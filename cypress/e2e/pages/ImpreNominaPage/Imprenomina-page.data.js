export class ImpreNominaData {
  static get urlAutenticar() {
    return "https://intranetpre.educacion.org/educacion/certificados/imprenominas/Scripts/login.asp";
  };

static get urlAutenticarOk() {
    return "https://intranetpre.educacion.org";
  };

static get url() {
    return "https://intranetpre.educacion.org/educacion/certificados/imprenominas/Scripts/login.asp";
  };

  static get testSuites() {
    return {
      registro: "Registro",
      autenticacion: "ImpreNominas: Autenticación",
      ImpresionNominillas: "ImpreNominas: Impresión de Nominillas",
      GeneracionNominillas: "ImpreNominas: Sistema de Generación de Nominillas",
    };
  }

   static get NIFData() {
    return {
      nif1: "42821962X",
      nif2: "54045773M",
      nif3: "42821962X, 54045773M",
    };
  }
}

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
