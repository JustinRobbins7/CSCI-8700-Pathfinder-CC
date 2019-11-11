const classes = {
    "": {
        saving_throws: {},
        skills: {},
        bonus_skills: 0,
        attacks: {},
        scores: [],
        hp: 0,
        features: [],
        subclasses: {
            "": {
                skills: {},
                bonus_skills: 0,
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
            "Nature": Trained
        },
        bonus_skills: 2,
        attacks: {
            "Simple Attacks": Trained,
            "Unarmed Attacks": Trained
        },
        "defenses": {
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
                feats: ["Animal Companion"],
                spells: ["Heal Animal"]
            },
            "Leaf": {
                skills: {
                    "Diplomacy": Trained
                },
                bonus_skills: 0,
                feats: ["Leshy Familiar"],
                spells: ["Goodberry"]
            },
            "Strom": {
                skills: {
                    "Acrobatics": Trained
                },
                bonus_skills: 0,
                feats: ["Storm Born"],
                spells: ["Tempest Surge"]
            },
            "Wild": {
                skills: {
                    "Intimidation": Trained
                },
                bonus_skills: 0,
                feats: ["Wild Shape"],
                spells: ["Wild Morph"]
            }
        },
        feats: []
    }
};
