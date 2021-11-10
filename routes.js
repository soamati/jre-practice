const { Router } = require("express");
const router = Router();

const controllers = require("./controllers");

router.get("/", (req, res) => {
  res.json({
    message: "audio-expert API 🎧",
  });
});

router.post("/recomendation", controllers.recommend);

module.exports = router;
