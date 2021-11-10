const constants = require("../constants");

const rClienteTipo1 = {
  conditions: {
    any: [
      {
        all: [
          {
            fact: constants.PRESUPUESTO,
            operator: "equal",
            value: constants.BAJO,
          },
          {
            fact: constants.USO,
            operator: "equal",
            value: constants.BASICO,
          },
        ],
      },
      {
        all: [
          {
            fact: constants.PRESUPUESTO,
            operator: "equal",
            value: constants.MEDIO,
          },
          {
            fact: constants.USO,
            operator: "equal",
            value: constants.BASICO,
          },
        ],
      },
      {
        all: [
          {
            fact: constants.PRESUPUESTO,
            operator: "equal",
            value: constants.ALTO,
          },
          {
            fact: constants.USO,
            operator: "equal",
            value: constants.BASICO,
          },
        ],
      },
    ],
  },
  event: { type: "is-cliente-tipo-1" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.CLIENTE, constants.TIPO_1);
  },
};

const rClienteTipo2 = {
  conditions: {
    all: [
      {
        fact: constants.PRESUPUESTO,
        operator: "equal",
        value: constants.BAJO,
      },
      {
        fact: constants.USO,
        operator: "equal",
        value: constants.GAMING,
      },
    ],
  },
  event: { type: "is-cliente-tipo-2" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.CLIENTE, constants.TIPO_2);
  },
};

const rClienteTipo3 = {
  conditions: {
    all: [
      {
        fact: constants.PRESUPUESTO,
        operator: "equal",
        value: constants.BAJO,
      },
      {
        fact: constants.USO,
        operator: "equal",
        value: constants.CONFERENCIA_ONLINE,
      },
    ],
  },
  event: { type: "is-cliente-tipo-3" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.CLIENTE, constants.TIPO_3);
  },
};

const rClienteTipo4 = {
  conditions: {
    any: [
      {
        all: [
          {
            fact: constants.PRESUPUESTO,
            operator: "equal",
            value: constants.MEDIO,
          },
          {
            fact: constants.USO,
            operator: "equal",
            value: constants.GAMING,
          },
        ],
      },
      {
        all: [
          {
            fact: constants.PRESUPUESTO,
            operator: "equal",
            value: constants.MEDIO,
          },
          {
            fact: constants.USO,
            operator: "equal",
            value: constants.CONFERENCIA_ONLINE,
          },
        ],
      },
    ],
  },
  event: { type: "is-cliente-tipo-4" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.CLIENTE, constants.TIPO_4);
  },
};

const rClienteTipo5 = {
  conditions: {
    any: [
      {
        all: [
          {
            fact: constants.PRESUPUESTO,
            operator: "equal",
            value: constants.ALTO,
          },
          {
            fact: constants.USO,
            operator: "equal",
            value: constants.GAMING,
          },
        ],
      },
      {
        all: [
          {
            fact: constants.PRESUPUESTO,
            operator: "equal",
            value: constants.ALTO,
          },
          {
            fact: constants.USO,
            operator: "equal",
            value: constants.CONFERENCIA_ONLINE,
          },
        ],
      },
    ],
  },
  event: { type: "is-cliente-tipo-5" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(constants.CLIENTE, constants.TIPO_5);
  },
};

const rules = [
  rClienteTipo1,
  rClienteTipo2,
  rClienteTipo3,
  rClienteTipo4,
  rClienteTipo5,
];

module.exports = rules;
