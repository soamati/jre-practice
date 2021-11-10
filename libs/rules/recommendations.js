const constants = require("../constants");
const Recommendation = require("../classes/Recommendation");

const rRecommendation1 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_1,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_1)
    );
  },
};

const rRecommendation2 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_2,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_2)
    );
  },
};

const rRecommendation3 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_3,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_3)
    );
  },
};

const rRecommendation4 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_4,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_4)
    );
  },
};

const rRecommendation5 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_5,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_5)
    );
  },
};

const rRecommendation6 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_6,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_6)
    );
  },
};

const rRecommendation7 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_7,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_7)
    );
  },
};

const rRecommendation8 = {
  conditions: {
    all: [
      {
        fact: constants.ESPECIFICIDAD,
        operator: "equal",
        value: constants.TIPO_8,
      },
    ],
  },
  event: { type: "recommendation" },
  priority: 10,
  onSuccess: (event, almanac) => {
    almanac.addRuntimeFact(
      constants.RECOMMENDATION,
      new Recommendation(constants.TIPO_8)
    );
  },
};

const rules = [
  rRecommendation1,
  rRecommendation2,
  rRecommendation3,
  rRecommendation4,
  rRecommendation5,
  rRecommendation6,
  rRecommendation7,
  rRecommendation8,
];

module.exports = rules;
