const Character = require("../models/character");
const axios = require("axios");

const new1 = async (req, res) => {
  const races = await axios(`http://dnd5eapi.co/api/races`);
  const dragonborn = await axios("http://dnd5eapi.co/api/races/dragonborn");
  const dwarf = await axios("http://dnd5eapi.co/api/races/dwarf");
  const elf = await axios("http://dnd5eapi.co/api/races/elf");
  const gnome = await axios("http://dnd5eapi.co/api/races/gnome");
  const halfElf = await axios("http://dnd5eapi.co/api/races/half-elf");
  const halfOrc = await axios("http://dnd5eapi.co/api/races/half-orc");
  const halfling = await axios("http://dnd5eapi.co/api/races/halfling");
  const human = await axios("http://dnd5eapi.co/api/races/human");
  const tiefling = await axios("http://dnd5eapi.co/api/races/tiefling");
  console.log(dwarf.data);
  res.render("characters/new1", {
    races,
    dragonborn,
    dwarf,
    elf,
    gnome,
    halfElf,
    halfOrc,
    halfling,
    human,
    tiefling
  });
};

module.exports = { new1 };
