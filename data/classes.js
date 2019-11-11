const classes = {
    "": {
        saving_throws: {},
        skills: {},
        bonus_skills: 0,
        attacks: {},
        scores: [],
        hp: 0
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
        hp: 8
    }
};