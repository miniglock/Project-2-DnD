const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: String,
  eyeColor: String,
  hairColor: String,
  height: String,
  weight: String,
  age: Number,
  race: String,
  class: String,
  abilityScores: Object,
  savingThrows: Array,
  languages: [{ type: String }],
  skills: [{ type: String }],
  proficiencies: [{ type: String }],
  features: Object,
  equipment: [{ type: String }]
});

module.exports = mongoose.model("Character", characterSchema);
