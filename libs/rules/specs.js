const constants = require("../constants");

const rEspecTipo1 = {
  conditions: {
    all: [
      {
        fact: constants.CLIENTE,
        operator: "equal",
        value: constants.TIPO_1,
      },
      {
        fact: constants.VOLUMEN,
        operator: "equal",
        value: constants.PRESCINDIBLE,
      },
      {
        fact: constants.MOVILIDAD,
        operator: "equal",
        value: constants.PRESCINDIBLE,
      },
      {
        fact: constants.SALIDA_MAS_USADA,
        operator: "equal",
        value: constants.ALTAVOZ,
      },
    ],
  },
  event: { type: "is-espec-tipo-1" },
  priority: 5,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_1);
  },
};

const rEspecTipo2 = {
  conditions: {
    all: [
      {
        fact: constants.CLIENTE,
        operator: "equal",
        value: constants.TIPO_1,
      },
      {
        fact: constants.VOLUMEN,
        operator: "equal",
        value: constants.PRESCINDIBLE,
      },
      {
        fact: constants.MOVILIDAD,
        operator: "equal",
        value: constants.PRESCINDIBLE,
      },
      {
        fact: constants.SALIDA_MAS_USADA,
        operator: "equal",
        value: constants.AURICULAR,
      },
    ],
  },
  event: { type: "is-espec-tipo-2" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_2);
  },
};

const rEspecTipo3 = {
  conditions: {
    any: [
      {
        all: [
          {
            fact: constants.CLIENTE,
            operator: "equal",
            value: constants.TIPO_2,
          },
          {
            fact: constants.VOLUMEN,
            operator: "equal",
            value: constants.PRESCINDIBLE,
          },
          {
            fact: constants.MOVILIDAD,
            operator: "equal",
            value: constants.IMPORTANTE,
          },
          {
            fact: constants.SALIDA_MAS_USADA,
            operator: "equal",
            value: constants.ALTAVOZ,
          },
        ],
      },
      {
        all: [
          {
            fact: constants.CLIENTE,
            operator: "equal",
            value: constants.TIPO_3,
          },
          {
            fact: constants.VOLUMEN,
            operator: "equal",
            value: constants.PRESCINDIBLE,
          },
          {
            fact: constants.MOVILIDAD,
            operator: "equal",
            value: constants.PRESCINDIBLE,
          },
          {
            fact: constants.SALIDA_MAS_USADA,
            operator: "equal",
            value: constants.ALTAVOZ,
          },
        ],
      },
    ],
  },
  event: { type: "is-espec-tipo-3" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_3);
  },
};

const rEspecTipo4 = {
  conditions: {
    all: [
      {
        fact: constants.CLIENTE,
        operator: "equal",
        value: constants.TIPO_3,
      },
      {
        fact: constants.VOLUMEN,
        operator: "equal",
        value: constants.PRESCINDIBLE,
      },
      {
        fact: constants.MOVILIDAD,
        operator: "equal",
        value: constants.PRESCINDIBLE,
      },
      {
        fact: constants.SALIDA_MAS_USADA,
        operator: "equal",
        value: constants.AURICULAR,
      },
    ],
  },
  event: { type: "is-espec-tipo-4" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_4);
  },
};

const rEspecTipo5 = {
  conditions: {
    all: [
      {
        fact: constants.CLIENTE,
        operator: "equal",
        value: constants.TIPO_4,
      },
      {
        fact: constants.VOLUMEN,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.MOVILIDAD,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.SALIDA_MAS_USADA,
        operator: "equal",
        value: constants.ALTAVOZ,
      },
    ],
  },
  event: { type: "is-espec-tipo-5" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_5);
  },
};

const rEspecTipo6 = {
  conditions: {
    all: [
      {
        fact: constants.CLIENTE,
        operator: "equal",
        value: constants.TIPO_4,
      },
      {
        fact: constants.VOLUMEN,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.MOVILIDAD,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.SALIDA_MAS_USADA,
        operator: "equal",
        value: constants.AURICULAR,
      },
    ],
  },
  event: { type: "is-espec-tipo-6" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_6);
  },
};

const rEspecTipo7 = {
  conditions: {
    all: [
      {
        fact: constants.CLIENTE,
        operator: "equal",
        value: constants.TIPO_5,
      },
      {
        fact: constants.VOLUMEN,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.MOVILIDAD,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.SALIDA_MAS_USADA,
        operator: "equal",
        value: constants.ALTAVOZ,
      },
    ],
  },
  event: { type: "is-espec-tipo-7" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_7);
  },
};

const rEspecTipo8 = {
  conditions: {
    all: [
      {
        fact: constants.CLIENTE,
        operator: "equal",
        value: constants.TIPO_5,
      },
      {
        fact: constants.VOLUMEN,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.MOVILIDAD,
        operator: "equal",
        value: constants.IMPORTANTE,
      },
      {
        fact: constants.SALIDA_MAS_USADA,
        operator: "equal",
        value: constants.AURICULAR,
      },
    ],
  },
  event: { type: "is-espec-tipo-8" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.ESPECIFICIDAD, constants.TIPO_8);
  },
};

const rules = [
  rEspecTipo1,
  rEspecTipo2,
  rEspecTipo3,
  rEspecTipo4,
  rEspecTipo5,
  rEspecTipo6,
  rEspecTipo7,
  rEspecTipo8,
];

module.exports = rules;
