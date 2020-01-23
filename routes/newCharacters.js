const express = require("express");
const router = express.Router();
const axios = require("axios");
const charactersCtrl = require("../controllers/characters");

// router.get("/1", charactersCtrl.proficiencies);

// router.get("/2", charactersCtrl.new2);

// router.get("/proficiencies", charactersCtrl.proficiencies);

router.get("/", charactersCtrl.new0);

router.post("/", charactersCtrl.create);

router.put("/:id", charactersCtrl.update);

router.delete("/:id", charactersCtrl.delete);

module.exports = router;
