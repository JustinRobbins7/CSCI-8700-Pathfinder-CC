const ancestries = {
    "": {
        hp: 0,
        size: "",
        speed: 0,
        scores: {},
        free: 0,
        languages: [],
        language_options: [],
        traits: [],
        abilities: [],
        heritages: [],
        ancestry_feats: []
    },
    "Dwarf": {
        hp: 10,
        size: "Medium",
        speed: 20,
        scores: {
            "Constitution": +2,
            "Wisdom": +2,
            "Charisma": -2
        },
        free: 1,
        languages: ["Common", "Dwarven"],
        language_options: ["Gnomish", "Goblin", "Jotun", "Orcish", "Terran", "Undercommon"],
        traits: ["Dwarf", "Hunamoid"],
        abilities: ["Darkvision"],
        heritages: [
            "Ancient-Blooded Dwarf",
            "Death Warden Dwarf",
            "Forge Dwarf",
            "Rock Dwarf",
            "Strong-Blooded Dwarf"
        ],
        ancestry_feats: [
            "Dwarven Lore",
            "Dwarven Weapon Familiarity",
            "Rock Runner",
            "Stonecunning",
            "Unburdened Iron",
            "Vengeful Hatred"
        ]
    }
};