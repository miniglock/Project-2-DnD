const mongoose = require("mongoose");

const dragonborn = {
  _id: "5e1a94a80b1bb138c5c142d4",
  index: "dragonborn",
  name: "Dragonborn",
  speed: 30,
  ability_bonuses: [
    {
      name: "STR",
      url: "/api/ability-scores/str",
      bonus: 2
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha",
      bonus: 1
    }
  ],
  alignment:
    " Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
  age:
    "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
  size: "Medium",
  size_description:
    "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
  starting_proficiencies: [],
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    },
    {
      url: "/api/languages/draconic",
      name: "Draconic"
    }
  ],
  language_desc:
    "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
  traits: [
    {
      name: "Draconic Ancestry",
      url: "/api/traits/draconic-ancestry"
    },
    {
      name: "Breath Weapon",
      url: "/api/traits/breath-weapon"
    },
    {
      name: "Damage Resistance",
      url: "/api/traits/damage-resistance"
    }
  ],
  trait_options: {
    choose: 1,
    from: [
      {
        name: "Breath Weapon (Black)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Blue)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Brass)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Bronze)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Copper)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Gold)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Green)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Red)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (Silver)",
        url: "/api/traits/breath-weapon"
      },
      {
        name: "Breath Weapon (White)",
        url: "/api/traits/breath-weapon"
      }
    ],
    type: "trait"
  },
  subraces: [],
  url: "/api/races/dragonborn"
};
const dwarf = {
  _id: "5e1a94a80b1bb138c5c142d2",
  index: "dwarf",
  name: "Dwarf",
  speed: 30,
  ability_bonuses: [
    {
      name: "CON",
      url: "/api/ability-scores/con",
      bonus: 2
    }
  ],
  alignment:
    "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
  age:
    "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
  size: "Medium",
  size_description:
    "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
  starting_proficiencies: [
    {
      url: "/api/proficiencies/battleaxes",
      name: "Battleaxes"
    },
    {
      url: "/api/proficiencies/handaxes",
      name: "Handaxes"
    },
    {
      url: "/api/proficiencies/light-hammers",
      name: "Light hammers"
    },
    {
      url: "/api/proficiencies/warhammers",
      name: "Warhammers"
    }
  ],
  starting_proficiency_options: {
    choose: 1,
    type: "proficiencies",
    from: [
      {
        url: "/api/proficiencies/smiths-tools",
        name: "Smith's tools"
      },
      {
        url: "/api/proficiencies/brewers-supplies",
        name: "Brewer's supplies"
      },
      {
        url: "/api/proficiencies/masons-tools",
        name: "Mason's tools"
      }
    ]
  },
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    },
    {
      url: "/api/languages/dwarvish",
      name: "Dwarvish"
    }
  ],
  language_desc:
    "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
  traits: [
    {
      name: "Darkvision",
      url: "/api/traits/darkvision"
    },
    {
      name: "Dwarven Resilience",
      url: "/api/traits/dwarven-resilience"
    },
    {
      name: "Stonecunning",
      url: "/api/traits/dwarven-combat-training"
    }
  ],
  subraces: [
    {
      url: "/api/subraces/hill-dwarf",
      name: "Hill Dwarf"
    }
  ],
  url: "/api/races/dwarf"
};
const elf = {
  _id: "5e1a94a80b1bb138c5c142d1",
  index: "elf",
  name: "Elf",
  speed: 30,
  ability_bonuses: [
    {
      name: "DEX",
      url: "/api/ability-scores/dex",
      bonus: 2
    }
  ],
  age:
    "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
  alignment:
    "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.",
  size: "Medium",
  size_description:
    "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
  starting_proficiencies: [
    {
      url: "/api/proficiencies/skill-perception",
      name: "Skill: Perception"
    }
  ],
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    },
    {
      url: "/api/languages/elvish",
      name: "Elvish"
    }
  ],
  language_desc:
    "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
  traits: [
    {
      name: "Darkvision",
      url: "/api/traits/darkvision"
    },
    {
      name: "Fey Ancestry",
      url: "/api/traits/fey-ancestry"
    },
    {
      name: "Trance",
      url: "/api/traits/trance"
    }
  ],
  subraces: [
    {
      url: "/api/subraces/high-elf",
      name: "High Elf"
    }
  ],
  url: "/api/races/elf"
};
const gnome = {
  _id: "5e1a94a80b1bb138c5c142d6",
  index: "gnome",
  name: "Gnome",
  speed: 25,
  ability_bonuses: [
    {
      name: "INT",
      url: "/api/ability-scores/int",
      bonus: 2
    }
  ],
  alignment:
    "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
  age:
    " Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
  size: "Small",
  size_description:
    "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
  starting_proficiencies: [],
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    },
    {
      url: "/api/languages/gnomish",
      name: "Gnomish"
    }
  ],
  language_desc:
    "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
  traits: [
    {
      name: "Darkvision",
      url: "/api/traits/darkvision"
    },
    {
      name: "Gnome Cunning",
      url: "/api/traits/gnome-cunning"
    }
  ],
  subraces: [
    {
      url: "/api/subraces/rock-gnome",
      name: "Rock Gnome"
    }
  ],
  url: "/api/races/gnome"
};
const halfElf = {
  _id: "5e1a94a80b1bb138c5c142d9",
  index: "half-elf",
  name: "Half-Elf",
  speed: 30,
  ability_bonuses: [
    {
      name: "CHA",
      url: "/api/ability-scores/cha",
      bonus: 2
    }
  ],
  ability_bonus_options: {
    choose: 2,
    type: "ability_bonuses",
    from: [
      {
        name: "STR",
        url: "/api/ability-scores/str",
        bonus: 1
      },
      {
        name: "DEX",
        url: "/api/ability-scores/dex",
        bonus: 1
      },
      {
        name: "CON",
        url: "/api/ability-scores/con",
        bonus: 1
      },
      {
        name: "INT",
        url: "/api/ability-scores/int",
        bonus: 1
      },
      {
        name: "WIS",
        url: "/api/ability-scores/wis",
        bonus: 1
      }
    ]
  },
  alignment:
    "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
  age:
    "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
  size: "Medium",
  size_description:
    "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
  starting_proficiencies: [],
  languages: [
    {
      name: "Common",
      url: "/api/languages/common"
    },
    {
      name: "Elvish",
      url: "/api/languages/elvish"
    }
  ],
  language_options: {
    choose: 1,
    type: "languages",
    from: [
      {
        name: "Dwarvish",
        url: "/api/languages/dwarvish"
      },
      {
        name: "Giant",
        url: "/api/languages/giant"
      },
      {
        name: "Gnomish",
        url: "/api/languages/gnomish"
      },
      {
        name: "Goblin",
        url: "/api/languages/goblin"
      },
      {
        name: "Halfling",
        url: "/api/languages/halfling"
      },
      {
        name: "Orc",
        url: "/api/languages/orc"
      },
      {
        name: "Abyssal",
        url: "/api/languages/abyssal"
      },
      {
        name: "Celestial",
        url: "/api/languages/celestial"
      },
      {
        name: "Draconic",
        url: "/api/languages/draconic"
      },
      {
        name: "Deep Speech",
        url: "/api/languages/deep-speech"
      },
      {
        name: "Infernal",
        url: "/api/languages/infernal"
      },
      {
        name: "Primordial",
        url: "/api/languages/primordial"
      },
      {
        name: "Sylvan",
        url: "/api/languages/sylvan"
      },
      {
        name: "Undercommon",
        url: "/api/languages/undercommon"
      }
    ]
  },
  language_desc:
    "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
  traits: [
    {
      name: "Darkvision",
      url: "/api/traits/darkvision"
    },
    {
      name: "Fey Ancestry",
      url: "/api/traits/fey-ancestry"
    },
    {
      name: "Skill Versatility",
      url: "/api/traits/skill-versatility"
    }
  ],
  subraces: [],
  url: "/api/races/half-elf"
};

const halfOrc = {
  _id: "5e1a94a80b1bb138c5c142d7",
  index: "half-orc",
  name: "Half-Orc",
  speed: 30,
  ability_bonuses: [
    {
      name: "STR",
      url: "/api/ability-scores/str",
      bonus: 2
    },
    {
      name: "CON",
      url: "/api/ability-scores/con",
      bonus: 1
    }
  ],
  alignment:
    " Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
  age:
    "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
  size: "Medium",
  size_description:
    "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
  starting_proficiencies: [
    {
      name: "Skill: Intimidation",
      url: "/api/proficiencies/skill-intimidation"
    }
  ],
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    },
    {
      url: "/api/languages/orc",
      name: "Orcish"
    }
  ],
  language_desc:
    "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
  traits: [
    {
      name: "Darkvision",
      url: "/api/traits/darkvision"
    },
    {
      name: "Savage Attacks",
      url: "/api/traits/savage-attacks"
    },
    {
      name: "Restless Endurance",
      url: "/api/traits/relentless-endurance"
    }
  ],
  subraces: [],
  url: "/api/races/half-orc"
};

const halfling = {
  _id: "5e1a94a80b1bb138c5c142d3",
  index: "halfling",
  name: "Halfling",
  speed: 25,
  ability_bonuses: [
    {
      name: "DEX",
      url: "/api/ability-scores/dex",
      bonus: 2
    }
  ],
  age:
    "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
  alignment:
    "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
  size: "Small",
  size_description:
    "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
  starting_proficiencies: [],
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    },
    {
      url: "/api/languages/halfling",
      name: "Halfling"
    }
  ],
  language_desc:
    "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
  traits: [
    {
      name: "Brave",
      url: "/api/traits/brave"
    },
    {
      name: "Halfling Nimbleness",
      url: "/api/traits/halfling-nimbleness"
    },
    {
      name: "Lucky",
      url: "/api/traits/lucky"
    }
  ],
  subraces: [
    {
      url: "/api/subraces/lightfoot-halfling",
      name: "Lightfoot Halfling"
    }
  ],
  url: "/api/races/halfling"
};

const human = {
  _id: "5e1a94a80b1bb138c5c142d5",
  index: "human",
  name: "Human",
  speed: 30,
  ability_bonuses: [
    {
      name: "STR",
      url: "/api/ability-scores/str",
      bonus: 1
    },
    {
      name: "DEX",
      url: "/api/ability-scores/dex",
      bonus: 1
    },
    {
      name: "CON",
      url: "/api/ability-scores/con",
      bonus: 1
    },
    {
      name: "INT",
      url: "/api/ability-scores/int",
      bonus: 1
    },
    {
      name: "WIS",
      url: "/api/ability-scores/wis",
      bonus: 1
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha",
      bonus: 1
    }
  ],
  age:
    "Humans reach adulthood in their late teens and live less than a century.",
  alignment:
    "Humans tend toward no particular alignment. The best and the worst are found among them.",
  size: "Medium",
  size_description:
    "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
  starting_proficiencies: [],
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    }
  ],
  language_options: {
    choose: 1,
    type: "languages",
    from: [
      {
        url: "/api/languages/dwarvish",
        name: "Dwarvish"
      },
      {
        url: "/api/languages/elvish",
        name: "Elvish"
      },
      {
        url: "/api/languages/giant",
        name: "Giant"
      },
      {
        url: "/api/languages/gnomish",
        name: "Gnomish"
      },
      {
        url: "/api/languages/goblin",
        name: "Goblin"
      },
      {
        url: "/api/languages/halfling",
        name: "Halfling"
      },
      {
        url: "/api/languages/orc",
        name: "Orc"
      },
      {
        url: "/api/languages/abyssal",
        name: "Abyssal"
      },
      {
        url: "/api/languages/celestial",
        name: "Celestial"
      },
      {
        url: "/api/languages/draconic",
        name: "Draconic"
      },
      {
        url: "/api/languages/deep-speech",
        name: "Deep Speech"
      },
      {
        url: "/api/languages/infernal",
        name: "Infernal"
      },
      {
        url: "/api/languages/primordial",
        name: "Primordial"
      },
      {
        url: "/api/languages/sylvan",
        name: "Sylvan"
      },
      {
        url: "/api/languages/undercommon",
        name: "Undercommon"
      }
    ]
  },
  language_desc:
    "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
  traits: [],
  subraces: [],
  url: "/api/races/human"
};

const tiefling = {
  _id: "5e1a94a80b1bb138c5c142d8",
  index: "tiefling",
  name: "Tiefling",
  speed: 30,
  ability_bonuses: [
    {
      name: "INT",
      url: "/api/ability-scores/int",
      bonus: 1
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha",
      bonus: 2
    }
  ],
  alignment:
    "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
  age:
    "Tieflings mature at the same rate as humans but live a few years longer.",
  size: "Medium",
  size_description:
    "Tieflings are about the same size and build as humans. Your size is Medium.",
  starting_proficiencies: [],
  languages: [
    {
      url: "/api/languages/common",
      name: "Common"
    },
    {
      url: "/api/languages/abyssal",
      name: "Infernal"
    }
  ],
  language_desc: "You can speak, read, and write Common and Infernal.",
  traits: [
    {
      name: "Darkvision",
      url: "/api/traits/darkvision"
    },
    {
      name: "Hellish Resistance",
      url: "/api/traits/hellish-resistance"
    },
    {
      name: "Infernal Legacy",
      url: "/api/traits/internal-legacy"
    }
  ],
  subraces: [],
  url: "/api/races/tiefling"
};

const barbarian = {
  _id: "5e1a94a50b1bb138c5c13caf",
  index: "barbarian",
  name: "Barbarian",
  hit_die: 12,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-animal-handling",
          name: "Skill: Animal Handling"
        },
        {
          url: "/api/proficiencies/skill-athletics",
          name: "Skill: Athletics"
        },
        {
          url: "/api/proficiencies/skill-intimidation",
          name: "Skill: Intimidation"
        },
        {
          url: "/api/proficiencies/skill-nature",
          name: "Skill: Nature"
        },
        {
          url: "/api/proficiencies/skill-perception",
          name: "Skill: Perception"
        },
        {
          url: "/api/proficiencies/skill-survival",
          name: "Skill: Survival"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Light armor",
      url: "/api/proficiencies/light-armor"
    },
    {
      name: "Medium armor",
      url: "/api/proficiencies/medium-armor"
    },
    {
      name: "Shields",
      url: "/api/proficiencies/shields"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    },
    {
      name: "Martial weapons",
      url: "/api/proficiencies/martial-weapons"
    }
  ],
  saving_throws: [
    {
      name: "STR",
      url: "/api/ability-scores/str"
    },
    {
      name: "CON",
      url: "/api/ability-scores/con"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/1",
    class: "Barbarian"
  },
  class_levels: {
    url: "/api/classes/barbarian/levels",
    class: "Barbarian"
  },
  subclasses: [
    {
      url: "/api/subclasses/berserker",
      name: "Berserker"
    }
  ],
  url: "/api/classes/barbarian"
};

const bard = {
  _id: "5e1a94a50b1bb138c5c13cb1",
  index: "bard",
  name: "Bard",
  hit_die: 8,
  proficiency_choices: [
    {
      choose: 3,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-acrobatics",
          name: "Skill: Acrobatics"
        },
        {
          url: "/api/proficiencies/skill-animal-handling",
          name: "Skill: Animal Handling"
        },
        {
          url: "/api/proficiencies/skill-arcana",
          name: "Skill: Arcana"
        },
        {
          url: "/api/proficiencies/skill-athletics",
          name: "Skill: Athletics"
        },
        {
          url: "/api/proficiencies/skill-deception",
          name: "Skill: Deception"
        },
        {
          url: "/api/proficiencies/skill-history",
          name: "Skill: History"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-intimidation",
          name: "Skill: Intimidation"
        },
        {
          url: "/api/proficiencies/skill-investigation",
          name: "Skill: Investigation"
        },
        {
          url: "/api/proficiencies/skill-medicine",
          name: "Skill: Medicine"
        },
        {
          url: "/api/proficiencies/skill-nature",
          name: "Skill: Nature"
        },
        {
          url: "/api/proficiencies/skill-perception",
          name: "Skill: Perception"
        },
        {
          url: "/api/proficiencies/skill-performance",
          name: "Skill: Performance"
        },
        {
          url: "/api/proficiencies/skill-persuasion",
          name: "Skill: Persuasion"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        },
        {
          url: "/api/proficiencies/skill-sleight-of-hand",
          name: "Skill: Sleight of Hand"
        },
        {
          url: "/api/proficiencies/skill-stealth",
          name: "Skill: Stealth"
        },
        {
          url: "/api/proficiencies/skill-survival",
          name: "Skill: Survival"
        }
      ]
    },
    {
      choose: 3,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/bagpipes",
          name: "Bagpipes"
        },
        {
          url: "/api/proficiencies/drum",
          name: "Drum"
        },
        {
          url: "/api/proficiencies/dulcimer",
          name: "Dulcimer"
        },
        {
          url: "/api/proficiencies/flute",
          name: "Flute"
        },
        {
          url: "/api/proficiencies/lute",
          name: "Lute"
        },
        {
          url: "/api/proficiencies/lyre",
          name: "Lyre"
        },
        {
          url: "/api/proficiencies/horn",
          name: "Horn"
        },
        {
          url: "/api/proficiencies/pan-flute",
          name: "Pan flute"
        },
        {
          url: "/api/proficiencies/shawm",
          name: "Shawm"
        },
        {
          url: "/api/proficiencies/viol",
          name: "Viol"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Light armor",
      url: "/api/proficiencies/light-armor"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    },
    {
      name: "Longswords",
      url: "/api/proficiencies/longswords"
    },
    {
      name: "Rapiers",
      url: "/api/proficiencies/rapiers"
    },
    {
      name: "Shortswords",
      url: "/api/proficiencies/shortswords"
    },
    {
      name: "Crossbows, hand",
      url: "/api/proficiencies/crossbows-hand"
    }
  ],
  saving_throws: [
    {
      name: "DEX",
      url: "/api/ability-scores/dex"
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/2",
    class: "Bard"
  },
  class_levels: {
    url: "/api/classes/bard/levels",
    class: "Bard"
  },
  subclasses: [
    {
      url: "/api/subclasses/lore",
      name: "Lore"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/1",
    class: "Bard"
  },
  url: "/api/classes/bard"
};

const cleric = {
  _id: "5e1a94a50b1bb138c5c13cb0",
  index: "cleric",
  name: "Cleric",
  hit_die: 8,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-history",
          name: "Skill: History"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-medicine",
          name: "Skill: Medicine"
        },
        {
          url: "/api/proficiencies/skill-persuasion",
          name: "Skill: Persuasion"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Light armor",
      url: "/api/proficiencies/light-armor"
    },
    {
      name: "Medium armor",
      url: "/api/proficiencies/medium-armor"
    },
    {
      name: "Shields",
      url: "/api/proficiencies/shields"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    }
  ],
  saving_throws: [
    {
      name: "WIS",
      url: "/api/ability-scores/wis"
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/3",
    class: "Cleric"
  },
  class_levels: {
    url: "/api/classes/cleric/levels",
    class: "Cleric"
  },
  subclasses: [
    {
      url: "/api/subclasses/life",
      name: "Life"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/2",
    class: "Cleric"
  },
  url: "/api/classes/cleric"
};

const druid = {
  _id: "5e1a94a50b1bb138c5c13cb3",
  index: "druid",
  name: "Druid",
  hit_die: 8,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-animal-handling",
          name: "Skill: Animal Handling"
        },
        {
          url: "/api/proficiencies/skill-arcana",
          name: "Skill: Arcana"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-medicine",
          name: "Skill: Medicine"
        },
        {
          url: "/api/proficiencies/skill-nature",
          name: "Skill: Nature"
        },
        {
          url: "/api/proficiencies/skill-perception",
          name: "Skill: Perception"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        },
        {
          url: "/api/proficiencies/skill-survival",
          name: "Skill: Survival"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Light armor",
      url: "/api/proficiencies/light-armor"
    },
    {
      name: "Medium armor",
      url: "/api/proficiencies/medium-armor"
    },
    {
      name: "Shields",
      url: "/api/proficiencies/shields"
    },
    {
      name: "Clubs",
      url: "/api/proficiencies/clubs"
    },
    {
      name: "Daggers",
      url: "/api/proficiencies/daggers"
    },
    {
      name: "Javelins",
      url: "/api/proficiencies/javelins"
    },
    {
      name: "Maces",
      url: "/api/proficiencies/maces"
    },
    {
      name: "Quarterstaffs",
      url: "/api/proficiencies/quarterstaffs"
    },
    {
      name: "Sickles",
      url: "/api/proficiencies/sickles"
    },
    {
      name: "Spears",
      url: "/api/proficiencies/spears"
    },
    {
      name: "Darts",
      url: "/api/proficiencies/darts"
    },
    {
      name: "Slings",
      url: "/api/proficiencies/slings"
    },
    {
      name: "Scimitars",
      url: "/api/proficiencies/scimitars"
    },
    {
      name: "Herbalism Kit",
      url: "/api/proficiencies/herbalism-kit"
    }
  ],
  saving_throws: [
    {
      name: "INT",
      url: "/api/ability-scores/int"
    },
    {
      name: "WIS",
      url: "/api/ability-scores/wis"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/4",
    class: "Druid"
  },
  class_levels: {
    url: "/api/classes/druid/levels",
    class: "Druid"
  },
  subclasses: [
    {
      url: "/api/subclasses/land",
      name: "Land"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/3",
    class: "Druid"
  },
  url: "/api/classes/druid"
};

const fighter = {
  _id: "5e1a94a50b1bb138c5c13cb2",
  index: "fighter",
  name: "Fighter",
  hit_die: 10,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-acrobatics",
          name: "Skill: Acrobatics"
        },
        {
          url: "/api/proficiencies/skill-animal-handling",
          name: "Skill: Animal Handling"
        },
        {
          url: "/api/proficiencies/skill-athletics",
          name: "Skill: Athletics"
        },
        {
          url: "/api/proficiencies/skill-history",
          name: "Skill: History"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-intimidation",
          name: "Skill: Intimidation"
        },
        {
          url: "/api/proficiencies/skill-perception",
          name: "Skill: Perception"
        },
        {
          url: "/api/proficiencies/skill-survival",
          name: "Skill: Survival"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "All armor",
      url: "/api/proficiencies/all-armor"
    },
    {
      name: "Shields",
      url: "/api/proficiencies/shields"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    },
    {
      name: "Martial weapons",
      url: "/api/proficiencies/martial-weapons"
    }
  ],
  saving_throws: [
    {
      name: "STR",
      url: "/api/ability-scores/str"
    },
    {
      name: "CON",
      url: "/api/ability-scores/con"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/5",
    class: "Fighter"
  },
  class_levels: {
    url: "/api/classes/fighter/levels",
    class: "Fighter"
  },
  subclasses: [
    {
      url: "/api/subclasses/champion",
      name: "Champion"
    }
  ],
  url: "/api/classes/fighter"
};

const monk = {
  _id: "5e1a94a50b1bb138c5c13cb5",
  index: "monk",
  name: "Monk",
  hit_die: 8,
  proficiency_choices: [
    {
      choose: 1,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/alchemists-supplies",
          name: "Alchemist's supplies"
        },
        {
          url: "/api/proficiencies/brewers-supplies",
          name: "Brewer's supplies"
        },
        {
          url: "/api/proficiencies/calligraphers-supplies",
          name: "Calligrapher's supplies"
        },
        {
          url: "/api/proficiencies/carpenters-tools",
          name: "Carpenter's tools"
        },
        {
          url: "/api/proficiencies/cartographers-tools",
          name: "Cartographer's tools"
        },
        {
          url: "/api/proficiencies/cobblers-tools",
          name: "Cobbler's tools"
        },
        {
          url: "/api/proficiencies/cooks-utensils",
          name: "Cook's utensils"
        },
        {
          url: "/api/proficiencies/glassblowers-tools",
          name: "Glassblower's tools"
        },
        {
          url: "/api/proficiencies/jewelers-tools",
          name: "Jeweler's tools"
        },
        {
          url: "/api/proficiencies/leatherworkers-tools",
          name: "Leatherworker's tools"
        },
        {
          url: "/api/proficiencies/masons-tools",
          name: "Mason's tools"
        },
        {
          url: "/api/proficiencies/painters-supplies",
          name: "Painter's supplies"
        },
        {
          url: "/api/proficiencies/potters-tools",
          name: "Potter's tools"
        },
        {
          url: "/api/proficiencies/smiths-tools",
          name: "Smith's tools"
        },
        {
          url: "/api/proficiencies/tinkers-tools",
          name: "Tinker's tools"
        },
        {
          url: "/api/proficiencies/weavers-tools",
          name: "Weaver's tools"
        },
        {
          url: "/api/proficiencies/woodcarvers-tools",
          name: "Woodcarver's tools"
        },
        {
          url: "/api/proficiencies/disguise-kit",
          name: "Disguise kit"
        },
        {
          url: "/api/proficiencies/forgery-kit",
          name: "Forgery kit"
        }
      ]
    },
    {
      choose: 1,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/bagpipes",
          name: "Bagpipes"
        },
        {
          url: "/api/proficiencies/drum",
          name: "Drum"
        },
        {
          url: "/api/proficiencies/dulcimer",
          name: "Dulcimer"
        },
        {
          url: "/api/proficiencies/flute",
          name: "Flute"
        },
        {
          url: "/api/proficiencies/lute",
          name: "Lute"
        },
        {
          url: "/api/proficiencies/lyre",
          name: "Lyre"
        },
        {
          url: "/api/proficiencies/horn",
          name: "Horn"
        },
        {
          url: "/api/proficiencies/pan-flute",
          name: "Pan flute"
        },
        {
          url: "/api/proficiencies/shawm",
          name: "Shawm"
        },
        {
          url: "/api/proficiencies/viol",
          name: "Viol"
        }
      ]
    },
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-acrobatics",
          name: "Skill: Acrobatics"
        },
        {
          url: "/api/proficiencies/skill-athletics",
          name: "Skill: Athletics"
        },
        {
          url: "/api/proficiencies/skill-history",
          name: "Skill: History"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        },
        {
          url: "/api/proficiencies/skill-stealth",
          name: "Skill: Stealth"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    },
    {
      name: "Shortswords",
      url: "/api/proficiencies/shortswords"
    }
  ],
  saving_throws: [
    {
      name: "STR",
      url: "/api/ability-scores/str"
    },
    {
      name: "DEX",
      url: "/api/ability-scores/dex"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/6",
    class: "Monk"
  },
  class_levels: {
    url: "/api/classes/monk/levels",
    class: "Monk"
  },
  subclasses: [
    {
      url: "/api/subclasses/open-hand",
      name: "Open Hand"
    }
  ],
  url: "/api/classes/monk"
};

const paladin = {
  _id: "5e1a94a50b1bb138c5c13cb4",
  index: "paladin",
  name: "Paladin",
  hit_die: 10,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-athletics",
          name: "Skill: Athletics"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-intimidation",
          name: "Skill: Intimidation"
        },
        {
          url: "/api/proficiencies/skill-medicine",
          name: "Skill: Medicine"
        },
        {
          url: "/api/proficiencies/skill-persuasion",
          name: "Skill: Persuasion"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "All armor",
      url: "/api/proficiencies/all-armor"
    },
    {
      name: "Shields",
      url: "/api/proficiencies/shields"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    },
    {
      name: "Martial weapons",
      url: "/api/proficiencies/martial-weapons"
    }
  ],
  saving_throws: [
    {
      name: "WIS",
      url: "/api/ability-scores/wis"
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/7",
    class: "Paladin"
  },
  class_levels: {
    url: "/api/classes/paladin/levels",
    class: "Paladin"
  },
  subclasses: [
    {
      url: "/api/subclasses/devotion",
      name: "Devotion"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/4",
    class: "Paladin"
  },
  url: "/api/classes/paladin"
};

const ranger = {
  _id: "5e1a94a50b1bb138c5c13cb6",
  index: "ranger",
  name: "Ranger",
  hit_die: 10,
  proficiency_choices: [
    {
      choose: 3,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-animal-handling",
          name: "Skill: Animal Handling"
        },
        {
          url: "/api/proficiencies/skill-athletics",
          name: "Skill: Athletics"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-investigation",
          name: "Skill: Investigation"
        },
        {
          url: "/api/proficiencies/skill-nature",
          name: "Skill: Nature"
        },
        {
          url: "/api/proficiencies/skill-perception",
          name: "Skill: Perception"
        },
        {
          url: "/api/proficiencies/skill-stealth",
          name: "Skill: Stealth"
        },
        {
          url: "/api/proficiencies/skill-survival",
          name: "Skill: Survival"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Light armor",
      url: "/api/proficiencies/light-armor"
    },
    {
      name: "Medium armor",
      url: "/api/proficiencies/medium-armor"
    },
    {
      name: "Shields",
      url: "/api/proficiencies/shields"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    },
    {
      name: "Martial weapons",
      url: "/api/proficiencies/martial-weapons"
    }
  ],
  saving_throws: [
    {
      name: "STR",
      url: "/api/ability-scores/str"
    },
    {
      name: "DEX",
      url: "/api/ability-scores/dex"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/8",
    class: "Ranger"
  },
  class_levels: {
    url: "/api/classes/ranger/levels",
    class: "Ranger"
  },
  subclasses: [
    {
      url: "/api/subclasses/hunter",
      name: "Hunter"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/5",
    class: "Ranger"
  },
  url: "/api/classes/ranger"
};

const rogue = {
  _id: "5e1a94a50b1bb138c5c13cb7",
  index: "rogue",
  name: "Rogue",
  hit_die: 8,
  proficiency_choices: [
    {
      choose: 4,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-acrobatics",
          name: "Skill: Acrobatics"
        },
        {
          url: "/api/proficiencies/skill-athletics",
          name: "Skill: Athletics"
        },
        {
          url: "/api/proficiencies/skill-deception",
          name: "Skill: Deception"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-intimidation",
          name: "Skill: Intimidation"
        },
        {
          url: "/api/proficiencies/skill-investigation",
          name: "Skill: Investigation"
        },
        {
          url: "/api/proficiencies/skill-perception",
          name: "Skill: Perception"
        },
        {
          url: "/api/proficiencies/skill-performance",
          name: "Skill: Performance"
        },
        {
          url: "/api/proficiencies/skill-persuasion",
          name: "Skill: Persuasion"
        },
        {
          url: "/api/proficiencies/skill-sleight-of-hand",
          name: "Skill: Sleight of Hand"
        },
        {
          url: "/api/proficiencies/skill-stealth",
          name: "Skill: Stealth"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Light armor",
      url: "/api/proficiencies/light-armor"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    },
    {
      name: "Longswords",
      url: "/api/proficiencies/longswords"
    },
    {
      name: "Rapiers",
      url: "/api/proficiencies/rapiers"
    },
    {
      name: "Shortswords",
      url: "/api/proficiencies/shortswords"
    },
    {
      name: "Crossbows, hand",
      url: "/api/proficiencies/crossbows-hand"
    },
    {
      name: "Thieves' Tools",
      url: "/api/proficiencies/thieves-tools"
    }
  ],
  saving_throws: [
    {
      name: "DEX",
      url: "/api/ability-scores/dex"
    },
    {
      name: "INT",
      url: "/api/ability-scores/int"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/9",
    class: "Rogue"
  },
  class_levels: {
    url: "/api/classes/rogue/levels",
    class: "Rogue"
  },
  subclasses: [
    {
      url: "/api/subclasses/thief",
      name: "Thief"
    }
  ],
  url: "/api/classes/rogue"
};

const sorcerer = {
  _id: "5e1a94a50b1bb138c5c13cb8",
  index: "sorcerer",
  name: "Sorcerer",
  hit_die: 6,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-arcana",
          name: "Skill: Arcana"
        },
        {
          url: "/api/proficiencies/skill-deception",
          name: "Skill: Deception"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-intimidation",
          name: "Skill: Intimidation"
        },
        {
          url: "/api/proficiencies/skill-persuasion",
          name: "Skill: Persuasion"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Daggers",
      url: "/api/proficiencies/daggers"
    },
    {
      name: "Quarterstaffs",
      url: "/api/proficiencies/quarterstaffs"
    },
    {
      name: "Darts",
      url: "/api/proficiencies/darts"
    },
    {
      name: "Slings",
      url: "/api/proficiencies/slings"
    }
  ],
  saving_throws: [
    {
      name: "CON",
      url: "/api/ability-scores/con"
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/10",
    class: "Sorcerer"
  },
  class_levels: {
    url: "/api/classes/sorcerer/levels",
    class: "Sorcerer"
  },
  subclasses: [
    {
      url: "/api/subclasses/draconic",
      name: "Draconic"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/6",
    class: "Sorcerer"
  },
  url: "/api/classes/sorcerer"
};

const warlock = {
  _id: "5e1a94a50b1bb138c5c13cb9",
  index: "warlock",
  name: "Warlock",
  hit_die: 8,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-arcana",
          name: "Skill: Arcana"
        },
        {
          url: "/api/proficiencies/skill-deception",
          name: "Skill: Deception"
        },
        {
          url: "/api/proficiencies/skill-history",
          name: "Skill: History"
        },
        {
          url: "/api/proficiencies/skill-intimidation",
          name: "Skill: Intimidation"
        },
        {
          url: "/api/proficiencies/skill-investigation",
          name: "Skill: Investigation"
        },
        {
          url: "/api/proficiencies/skill-nature",
          name: "Skill: Nature"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Light armor",
      url: "/api/proficiencies/light-armor"
    },
    {
      name: "Simple weapons",
      url: "/api/proficiencies/simple-weapons"
    }
  ],
  saving_throws: [
    {
      name: "WIS",
      url: "/api/ability-scores/wis"
    },
    {
      name: "CHA",
      url: "/api/ability-scores/cha"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/11",
    class: "Warlock"
  },
  class_levels: {
    url: "/api/classes/warlock/levels",
    class: "Warlock"
  },
  subclasses: [
    {
      url: "/api/subclasses/fiend",
      name: "Fiend"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/7",
    class: "Warlock"
  },
  url: "/api/classes/warlock"
};

const wizard = {
  _id: "5e1a94a50b1bb138c5c13cba",
  index: "wizard",
  name: "Wizard",
  hit_die: 6,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          url: "/api/proficiencies/skill-arcana",
          name: "Skill: Arcana"
        },
        {
          url: "/api/proficiencies/skill-history",
          name: "Skill: History"
        },
        {
          url: "/api/proficiencies/skill-insight",
          name: "Skill: Insight"
        },
        {
          url: "/api/proficiencies/skill-investigation",
          name: "Skill: Investigation"
        },
        {
          url: "/api/proficiencies/skill-medicine",
          name: "Skill: Medicine"
        },
        {
          url: "/api/proficiencies/skill-religion",
          name: "Skill: Religion"
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: "Daggers",
      url: "/api/proficiencies/daggers"
    },
    {
      name: "Quarterstaffs",
      url: "/api/proficiencies/quarterstaffs"
    },
    {
      name: "Darts",
      url: "/api/proficiencies/darts"
    },
    {
      name: "Slings",
      url: "/api/proficiencies/slings"
    }
  ],
  saving_throws: [
    {
      name: "INT",
      url: "/api/ability-scores/int"
    },
    {
      name: "WIS",
      url: "/api/ability-scores/wis"
    }
  ],
  starting_equipment: {
    url: "/api/startingequipment/12",
    class: "Wizard"
  },
  class_levels: {
    url: "/api/classes/wizard/levels",
    class: "Wizard"
  },
  subclasses: [
    {
      url: "/api/subclasses/evocation",
      name: "Evocation"
    }
  ],
  spellcasting: {
    url: "/api/spellcasting/8",
    class: "Wizard"
  },
  url: "/api/classes/wizard"
};

const races = [
  dragonborn,
  dwarf,
  elf,
  gnome,
  halfElf,
  halfOrc,
  halfling,
  human,
  tiefling
];

const classes = [
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard
];
module.exports = { races, classes };
