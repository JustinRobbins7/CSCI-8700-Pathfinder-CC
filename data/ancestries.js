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
    },
	"Human": {
        hp: 8
        size: "Medium",
        speed: 25
        scores: {},
        free: 2,
        languages: ["Common"],
        language_options: ["Gnomish", "Goblin", "Jotun", "Orcish", "Undercommon", "Dwarven", "Elven", "Draconic", "Sylvan", "Celestial", "Gnoll"],
        traits: ["Humanoid"],
        abilities: [],
        heritages: [
            "Half-Elf",
            "Half-Orc",
            "Skilled Heritage",
            "Versatile Heritage"
        ],
        ancestry_feats: [
            "Adapted Cantrip",
            "Cooperative Nature",
            "General Training",
            "Haughty Obstinacy",
            "Natural Ambition",
            "Natural Skill",
			"Unconventional Weaponry"
        ]
    },
	"Elf": {
        hp: 6,
        size: "Medium",
        speed: 30,
        scores: {
            "Dexterity": +2,
            "Intelligence": +2,
            "Constitution": -2
        },
        free: 1,
        languages: ["Common", "Elven"],
        language_options: ["Gnomish", "Goblin", "Gnoll" "Celestial", "Orcish", "Draconic", "Sylvan"],
        traits: ["Elf", "Hunamoid"],
        abilities: ["Low Light Vision"],
        heritages: [
            "Arctic Elf",
            "Cavern Elf",
            "Seer Elf",
            "Whisper Elf",
            "Woodland Elf"
        ],
        ancestry_feats: [
            "Ancestral Longevity",
            "Elven Weapon Familiarity",
            "Elven Lore",
            "Forlorn",
            "Nimble Elf",
            "Otherworldly Magic",
			"Unwavering Mein"
        ]
    },
	"Gnome": {
        hp: 8,
        size: "Medium",
        speed: 25,
        scores: {
            "Constitution": +2,
            "Charisma": +2,
            "Strength": -2
        },
        free: 1,
        languages: ["Common", "Gnomish", "Sylvan"],
        language_options: ["Draconic", "Dwarven", "Elven", "Goblin", "Jotun", "Orcish"],
        traits: ["Gnome", "Hunamoid"],
        abilities: ["Low Light Vision"],
        heritages: [
            "Chameleon Gnome",
            "Fey-touched Gnome",
            "Sensate Gnome",
            "Umbral Gnome",
            "Wellspring Gnome"
        ],
        ancestry_feats: [
            "Animal Accomplice",
            "Burrow Elocutionist",
            "Fey Fellowship",
            "First World Magic",
            "Gnome Obsession",
            "Gnome Weapon Familiarity",
			"Illusion Sense"
        ]
    },
	"Goblin": {
        hp: 6,
        size: "Small",
        speed: 25,
        scores: {
            "Dexterity": +2,
            "Charisma": +2,
            "Wisdom": -2
        },
        free: 1,
        languages: ["Common", "Goblin"],
        language_options: ["Gnomish", "Gnoll", "Halfling", "Orcish", "Draconic", "Dwarven"],
        traits: ["Goblin", "Humanoid"],
        abilities: ["Darkvision"],
        heritages: [
            "Charhide Goblin",
            "Irongut Goblin",
            "Razortooth Goblin",
            "Snow Goblin",
            "Unbreakable Goblin"
        ],
        ancestry_feats: [
            "Burn It!",
            "City Scavenger",
            "Goblin Lore",
            "Goblin Scuttle",
            "Goblin Song",
            "Goblin Weapon Familiarity",
			"Junk Tinker",
			"Rough Rider",
			"Very Sneaky"
        ]
    },
	"Halfling": {
        hp: 6,
        size: "Small",
        speed: 25,
        scores: {
            "Dexterity": +2,
            "Wisdom": +2,
            "Strength": -2
        },
        free: 1,
        languages: ["Common", "Halfling"],
        language_options: ["Dwarven", "Goblin", "Gnomish", "Elven"],
        traits: ["Goblin", "Humanoid"],
        abilities: ["Keen Eyes"],
        heritages: [
            "Gutsy Halfing",
            "Hillock Halfling",
            "Nomadic Halfling",
            "Twilight Halfing ",
            "Wildwood Halfing"
        ],
        ancestry_feats: [
            "Distracting Shadows",
            "Halfling Lore",
            "Halfling Luck",
            "Sure Feet",
            "Titan Slinger",
            "Halfling Weapon Familiarity",
			"Unfettered Halfling",
			"Watchful Halfling"
        ]
    }
};