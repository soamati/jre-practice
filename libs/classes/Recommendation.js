const constants = require("../constants");

class Recommendation {
  constructor(specsType) {
    const altavoz = {};
    const auricular = {};
    const microfono = {};

    switch (specsType) {
      case constants.TIPO_1:
        altavoz.CONECTIVIDAD = constants.CABLE;
        altavoz.POTENCIA = constants.BAJA;
        altavoz.DIRECCIONALIDAD = constants.OMNIDIRECCIONAL;
        auricular.TIPO = constants.IN_EAR;
        auricular.CONECTIVIDAD = constants.CABLE;
        auricular.COMODIDAD = constants.BAJA;
        microfono.TIPO = constants.DE_AURICULAR;
        microfono.CONECTIVIDAD = constants.CABLE;
        microfono.DIRECCIONALIDAD = constants.OMNIDIRECCIONAL;
        break;
      case constants.TIPO_2:
        altavoz.CONECTIVIDAD = constants.CABLE;
        altavoz.POTENCIA = constants.BAJA;
        altavoz.DIRECCIONALIDAD = constants.OMNIDIRECCIONAL;
        auricular.TIPO = constants.CASCOS;
        auricular.CONECTIVIDAD = constants.WIRELESS;
        auricular.COMODIDAD = constants.MEDIA;
        microfono.TIPO = constants.DE_AURICULAR;
        microfono.CONECTIVIDAD = constants.CABLE;
        microfono.DIRECCIONALIDAD = constants.OMNIDIRECCIONAL;
        break;
      case constants.TIPO_3:
        altavoz.CONECTIVIDAD = constants.CABLE;
        altavoz.POTENCIA = constants.MEDIA;
        altavoz.DIRECCIONALIDAD = constants.OMNIDIRECCIONAL;
        auricular.TIPO = constants.IN_EAR;
        auricular.CONECTIVIDAD = constants.CABLE;
        auricular.COMODIDAD = constants.BAJA;
        microfono.TIPO = constants.DE_ESCRITORIO;
        microfono.CONECTIVIDAD = constants.CABLE;
        microfono.DIRECCIONALIDAD = constants.OMNIDIRECCIONAL;
        break;
      case constants.TIPO_4:
        altavoz.CONECTIVIDAD = constants.WIRELESS;
        altavoz.POTENCIA = constants.MEDIA;
        altavoz.DIRECCIONALIDAD = constants.BIDIRECCIONAL;
        auricular.TIPO = constants.CASCOS;
        auricular.CONECTIVIDAD = constants.WIRELESS;
        auricular.COMODIDAD = constants.MEDIA;
        microfono.TIPO = constants.DE_AURICULAR;
        microfono.CONECTIVIDAD = constants.WIRELESS;
        microfono.DIRECCIONALIDAD = constants.OMNIDIRECCIONAL;
        break;
      case constants.TIPO_5:
        altavoz.CONECTIVIDAD = constants.WIRELESS;
        altavoz.POTENCIA = constants.ALTA;
        altavoz.DIRECCIONALIDAD = constants.BIDIRECCIONAL;
        auricular.TIPO = constants.CASCOS;
        auricular.CONECTIVIDAD = constants.CABLE;
        auricular.COMODIDAD = constants.MEDIA;
        microfono.TIPO = constants.DE_AURICULAR;
        microfono.CONECTIVIDAD = constants.WIRELESS;
        microfono.DIRECCIONALIDAD = constants.BIDIRECCIONAL;
        break;
      case constants.TIPO_6:
        altavoz.CONECTIVIDAD = constants.CABLE;
        altavoz.POTENCIA = constants.ALTA;
        altavoz.DIRECCIONALIDAD = constants.BIDIRECCIONAL;
        auricular.TIPO = constants.CASCOS;
        auricular.CONECTIVIDAD = constants.WIRELESS;
        auricular.COMODIDAD = constants.MEDIA;
        microfono.TIPO = constants.DE_ESCRITORIO;
        microfono.CONECTIVIDAD = constants.WIRELESS;
        microfono.DIRECCIONALIDAD = constants.BIDIRECCIONAL;
        break;
      case constants.TIPO_7:
        altavoz.CONECTIVIDAD = constants.WIRELESS;
        altavoz.POTENCIA = constants.ALTA;
        altavoz.DIRECCIONALIDAD = constants.UNIDIRECCIONAL;
        auricular.TIPO = constants.CASCOS;
        auricular.CONECTIVIDAD = constants.CABLE;
        auricular.COMODIDAD = constants.ALTA;
        microfono.TIPO = constants.INDEPENDIENTE;
        microfono.CONECTIVIDAD = constants.CABLE;
        microfono.DIRECCIONALIDAD = constants.UNIDIRECCIONAL;
        break;
      case constants.TIPO_8:
        altavoz.CONECTIVIDAD = constants.CABLE;
        altavoz.POTENCIA = constants.ALTA;
        altavoz.DIRECCIONALIDAD = constants.UNIDIRECCIONAL;
        auricular.TIPO = constants.CASCOS;
        auricular.CONECTIVIDAD = constants.WIRELESS;
        auricular.COMODIDAD = constants.ALTA;
        microfono.TIPO = constants.INDEPENDIENTE;
        microfono.CONECTIVIDAD = constants.CABLE;
        microfono.DIRECCIONALIDAD = constants.UNIDIRECCIONAL;
        break;
      default:
        // TODO Completar
        break;
    }
    this.altavoz = altavoz;
    this.auricular = auricular;
    this.microfono = microfono;
  }
}

module.exports = Recommendation;
