const express = require("express");
const router = express.Router();
const axios = require("axios");
const charactersCtrl = require("../controllers/characters");

router.get("/1", charactersCtrl.new1);

router.get("/3", async (req, res) => {
  const charClass = await axios(`http://dnd5eapi.co/api/classes/monk`);
  console.log(charClass.data);
  // console.log(charClass.data.proficiency_choices);
  console.log("==============================================================");
  // console.log(charClass.data.proficiency_choices[0]);

  res.render("characters/new3", {
    charClass: charClass.data,
    title: "Hello",
    numChoices: charClass.data.proficiency_choices
  });
});

module.exports = router;
