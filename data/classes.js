const classes = {
    "": {
        saving_throws: {
            "Fortitude": Untrained,
            "Reflex": Untrained,
            "Will": Untrained
        },
        skills: {},
        bonus_skills: 0,
        attacks: {},
        defenses: {},
        scores: [],
        hp: 0,
        features: [],
        subclasses: {
            "": {
                skills: {},
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: []
            }
        },
        feats: []
    },
    "Druid": {
        saving_throws: {
            "Fortitude": Trained,
            "Reflex": Trained,
            "Will": Expert
        },
        skills: {
            "Nature": Trained,
			"Perception": Trained
        },
        bonus_skills: 2,
        attacks: {
            "Simple Attacks": Trained,
            "Unarmed Attacks": Trained
        },
        defenses: {
            "Light Armor": Trained,
            "Medium Armor": Trained,
            "Unarmored Defense": Trained
        },
        scores: [
            "Wisdom"
        ],
        hp: 8,
        features: [
            "Primal Spellcasting",
            "Anathema",
            "Druidic Language",
            "Druidic Order",
            "Shield Block",
            "Wild Empathy"
        ],
        subclasses: {
            "Animal": {
                skills: {
                    "Athletics": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: ["Animal Companion"],
                spells: ["Heal Animal"]
            },
            "Leaf": {
                skills: {
                    "Diplomacy": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: ["Leshy Familiar"],
                spells: ["Goodberry"]
            },
            "Storm": {
                skills: {
                    "Acrobatics": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: ["Storm Born"],
                spells: ["Tempest Surge"]
            },
            "Wild": {
                skills: {
                    "Intimidation": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: ["Wild Shape"],
                spells: ["Wild Morph"]
            }
        },
        feats: []
    },
	"Fighter": {
        saving_throws: {
            "Fortitude": Expert,
            "Reflex": Expert,
            "Will": Trained
        },
        skills: {
            "Perception": Expert,
			"Acrobatics": Trained,
			"Athletics": Trained
        },
        bonus_skills: 3,
        attacks: {
            "Simple Weapons": Expert,
			"Martial Weapons": Expert,
			"Advanced Weapons": Trained,
            "Unarmed Attacks": Expert
        },
        defenses: {
            "Light Armor": Trained,
            "Medium Armor": Trained,
			"Heavy Armor": Trained,
            "Unarmored Defense": Trained
        },
        scores: [
            "Strength",
			"Dexterity"
        ],
        hp: 10,
        features: [
            "Attack of Opportunity",
            "Shield Block"
        ],
        subclasses: {},
        feats: [
			"Double Slice",
			"Exacting Slice",
			"Point-Blank Shot",
			"Power Attack",
			"Reactive Shield",
			"Snagging Strike",
			"Sudden Strike",
			"Sudden Charge"
		]
    },
	"Rogue": {
        saving_throws: {
            "Fortitude": Trained,
            "Reflex": Expert,
            "Will": Expert
        },
        skills: {
            "Perception": Expert,
			"Stealth": Trained
        },
        bonus_skills: 7,
        attacks: {
            "Simple Weapons": Trained,
			"Rapier": Trained,
			"Sap": Trained,
			"Shortbow": Trained,
			"Shortsword": Trained,
            "Unarmed Attacks": Trained
        },
        defenses: {
            "Light Armor": Trained,
            "Unarmored Defense": Trained
        },
        scores: [
			"Dexterity"
        ],
        hp: 10,
        features: [
            "Rogue's Racket",
            "Sneak Attack",
			"Surprise Attack",
			"Extra Skill Feats"
        ],
        subclasses: {
			"Ruffian": {
                skills: {
                    "Intimidation": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {
                    "Medium Armor": Trained
                },
                feats: [],
                spells: []
            },
            "Scoundrel": {
                skills: {
					"Deception": Trained,
                    "Diplomacy": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: []
            },
            "Thief": {
                skills: {
                    "Thievery": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: []
            }
		},
        feats: [
			"Nimble Dodge",
			"Trap Finder",
			"Twin Feint",
			"You're Next"
		]
    },
	"Sorcerer": {
        saving_throws: {
            "Fortitude": Trained,
            "Reflex": Trained,
            "Will": Expert
        },
        skills: {
			"Perception": Trained
        },
        bonus_skills: 2,
        attacks: {
            "Simple Attacks": Trained,
            "Unarmed Attacks": Trained
        },
        defenses: {
            "Unarmored Defense": Trained
        },
        scores: [
            "Charisma"
        ],
        hp: 6,
        features: [
            "Bloodline",
            "Sorcerer Spellcasting",
			"Spell Repertoire"
        ],
        subclasses: {
            "Aberrant": {
                skills: {
                    "Intimidation": Trained,
					"Occultism": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: [
					"Daze",
					"Spider String",
					"Touch of Idiocy",
					"Vampiric Touch",
					"Confusion",
					"Black Tentacles",
					"Feeblemind",
					"Warp Mind",
					"Uncontrollable Dance",
					"Unfathomable Song",
					"Tentacular Limbs",
					"Aberrant Whispers",
					"Unusual Anatomy"
				]
            },
			"Angelic": {
                skills: {
                    "Diplomacy": Trained,
					"Religion": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: [
					"Light",
					"Heal",
					"Spiritual Weapon",
					"Searing Light",
					"Divine Wrath",
					"Flame Strike",
					"Feeblemind",
					"Blade Barrier",
					"Divine Decree",
					"Foresight",
					"Angelic Halo",
					"Angelic Wings",
					"Celestial Brand"
				]
            },
			"Demonic": {
                skills: {
                    "Intimidation": Trained,
					"Religion": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: [
					"Acid Splash",
					"Fear",
					"Enlarge",
					"Slow",
					"Divine Wrath",
					"Abyssal Plague",
					"Disintegrate",
					"Divine Decree",
					"Divine Aura",
					"Implosion",
					"Glutton's Jaw",
					"Swamp of Sloth",
					"Abyssal Wrath"
				]
            },
			"Draconic": {
                skills: {
                    "Arcana": Trained,
					"Intimidation": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: [
					"Shield",
					"True Strike",
					"Resist Energy",
					"Haste",
					"Spell Immunity",
					"Chromatic Wall",
					"Dragon Form",
					"Mask of Terror",
					"Prismatic Wall",
					"Overwhelming Presence",
					"Dragon Claws",
					"Dragon Breath",
					"Dragon Wings"
				]
            },
			"Elemental": {
                skills: {
					"Intimidation": Trained,
					"Nature": Trained
                },
                bonus_skills: 0,
                attacks: {},
                defenses: {},
                feats: [],
                spells: [
					"Produce Flame",
					"Burning Hands",
					"Resist Energy",
					"Fireball",
					"Freedom of Movement",
					"Elemental Form",
					"Repulsion",
					"Energy Aegis",
					"Prismatic Wall",
					"Storm of Vengeance",
					"Elemental Toss",
					"Elemental Motion",
					"Elemental Blast"
				]
            }
        },
        feats: [
			"Counterspell",
			"Dangerous Sorcery",
			"Familiar",
			"Reach Spell",
			"Widen Spell"
		]
    }
};
