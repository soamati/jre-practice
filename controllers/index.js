const runEngine = require("../libs/engine");

exports.recommend = async (req, res, next) => {
  try {
    const { facts } = req.body;

    const results = await runEngine(facts);

    if (results.error) {
      res.status(400);
      res.json({
        ...results,
        facts,
      });
      return;
    }

    res.json({
      ...results,
      facts,
    });
  } catch (err) {
    next(err);
  }
};