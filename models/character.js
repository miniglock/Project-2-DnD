const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, require: Boolean },
  abilityScores: [{ type: Number }],
  class: Object,
  race: Object,
  skills: [{ type: String }],
  proficiencies: [{ type: String }],
  languages: [{ type: String }],
  features: Object,
  level: Number,
  equipment: [{ type: String }]
});

module.exports = mongoose.model("Character", characterSchema);
