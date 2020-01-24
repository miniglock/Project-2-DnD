const Character = require("../models/character");
const User = require("../models/user");
const axios = require("axios");
const { inspect } = require("util");
const data = require("../public/data");

const newChar = (req, res) => {
  res.render("characters/new0", {
    races: data.races,
    classes: data.classes
  });
};

const create = (req, res) => {
  const character = new Character(req.body);
  req.user.characters.push(character);
  req.user.save();
  const race = req.body.race;
  const findRace = data.races.filter(ele => ele.name === race);
  const charClass = req.body.class;
  const findClass = data.classes.filter(ele => ele.name === charClass);
  findClass[0].proficiencies.forEach(p => {
    character.proficiencies.push(p.name);
  });
  findRace[0].languages.forEach(l => {
    character.languages.push(l.name);
  });
  character.save(err => {
    if (err) console.log(err);
    res.redirect(`/characters/${character._id}/edit`);
  });
};

const edit = (req, res) => {
  Character.findById(req.params.id, (err, character) => {
    const charRace = data.races.find(
      element => element.name === character.race
    );
    const charClass = data.classes.find(
      element => element.name === character.class
    );
    res.render("characters/proficiency", {
      id: character.id,
      races: data.races,
      charRace,
      charClass
    });
  });
};

const update = (req, res) => {
  Character.findById(req.params.id, (err, character) => {
    const charRace = data.races.find(
      element => element.name === character.race
    );
    const charClass = data.classes.find(
      element => element.name === character.class
    );
    for (const abScore in req.body) {
      charRace.ability_bonuses.forEach(a => {
        if (abScore === a.name.toLowerCase()) {
          req.body[abScore] = +req.body[abScore] + +a.bonus;
        }
      });
    }

    const abilityModifiers = [];

    for (const abScore in req.body) {
      req.body[abScore] = Number(req.body[abScore]);
      if (
        (req.body[abScore] > 10 || req.body[abScore] < 10) &&
        req.body[abScore] !== NaN
      ) {
        temp = Math.floor((req.body[abScore] - 10) / 2);
        abilityModifiers.push({ [abScore]: temp });
      }
      if (req.body[abScore] === 10) {
        abilityModifiers.push({ [abScore]: 0 });
      }
    }

    abilityModifiers.forEach(a => {
      for (const abScore in a) {
        charClass.saving_throws.forEach(s => {
          if (abScore === s.name.toLowerCase()) {
            character.savingThrows.push({ [abScore]: a[abScore] + 2 });
          }
        });
      }
    });

    for (let i = 0; i < abilityModifiers.length; i++) {
      charClass.saving_throws.forEach(s => {});
    }
    character.abilityScores = {
      str: req.body.str,
      dex: req.body.dex,
      con: req.body.con,
      wis: req.body.wis,
      int: req.body.int,
      cha: req.body.cha
    };

    const hold = [];
    for (const key in req.body) {
      if (key === "language") {
        hold.push(`${key}: ${req.body[key]}`);
      } else {
        hold.push(key);
      }
    }
    for (let i = 0; i < hold.length; i++) {
      if (hold[i].includes("Skill")) {
        character.skills.push(hold[i].split("Skill: ")[1]);
      } else if (hold[i].includes("language")) {
        character.languages.push(hold[i].split("language: ")[1]);
      } else if (hold[i].length > 3) {
        character.proficiencies.push(hold[i]);
      }
    }
    for (let i = 0; i < data.races.length; i++) {
      if (data.races[i] === character.race) {
        character.languages.push(data.races[i].languages);
      }
    }
    character.save(err => {
      res.redirect("/characters");
    });
  });
};

const delChar = (req, res) => {
  User.findById(req.user, (err, user) => {
    user.characters.splice(user.characters.indexOf(req.params.id), 1);
    console.log(req.user.characters, "this is req.user.characters");
    user.save();
  });
  Character.findByIdAndDelete(req.params.id, character => {});
  console.log(req.params);
  res.redirect("/characters");
};

const index = (req, res) => {
  User.findById(req.user._id)
    .populate("characters")
    .exec((err, user) => {
      res.render("characters/index", { user });
    });
};

const show = (req, res) => {
  Character.findById(req.params.id, (err, character) => {
    console.log(character);
    res.render("characters/show", { id: req.params.id, character });
  });
};

module.exports = {
  new: newChar,
  create,
  update,
  delete: delChar,
  index,
  edit,
  show
};
