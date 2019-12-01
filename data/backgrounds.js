const backgrounds = {
    "": {
        boost1: [],
        boost2: [],
        skill_feat: "",
        skill1: "",
        skill2: []
    },
    "Acolyte": {
        boost1: ["Intelligence", "Wisdom"],
        boost2: stats,
        skill_feat: "Student of the Canon",
        skill1: "Religion",
        skill2: ["Scribing Lore"]
    },
	"Acrobat": {
        boost1: ["Strength", "Dexterity"],
        boost2: stats,
        skill_feat: "Steady Balance",
        skill1: "Acrobatics",
        skill2: ["Circus Lore"]
    },
	"Animal Whisperer": {
        boost1: ["Wisdom", "Charisma"],
        boost2: stats,
        skill_feat: "Train Animal",
        skill1: "Nature",
        skill2: ["Arctic Lore", "Desert Lore", "Forest Lore", "Grassland Lore", "Mountain Lore", "River Lore", "Swamp Lore"]
    },
	"Artisan": {
        boost1: ["Strength", "Intelligence"],
        boost2: stats,
        skill_feat: "Specialty Crafting",
        skill1: "Crafting",
        skill2: ["Guild Lore"]
    },
	"Artist": {
        boost1: ["Dexterity", "Charisma"],
        boost2: stats,
        skill_feat: "Specialty Crafting",
        skill1: "Crafting",
        skill2: ["Art Lore"]
    },
	"Barkeep": {
        boost1: ["Constitution", "Charisma"],
        boost2: stats,
        skill_feat: "Hobnobber",
        skill1: "Diplomacy",
        skill2: ["Alcohol Lore"]
    },
	"Barrister": {
        boost1: ["Intelligence", "Charisma"],
        boost2: stats,
        skill_feat: "Group Impression",
        skill1: "Diplomacy",
        skill2: ["Legal Lore"]
    },
	"Bounty Hunter": {
        boost1: ["Strength", "Wisdom"],
        boost2: stats,
        skill_feat: "Experienced Tracker",
        skill1: "Survival",
        skill2: ["Legal Lore"]
    },
	"Charlatan": {
        boost1: ["Intelligence", "Charisma"],
        boost2: stats,
        skill_feat: "Charming Liar",
        skill1: "Deception",
        skill2: ["Underworld Lore"]
    },
	"Criminal": {
        boost1: ["Dexterity", "Intelligence"],
        boost2: stats,
        skill_feat: "Experienced Smuggler",
        skill1: "Stealth",
        skill2: ["Underworld Lore"]
    },
	"Detective": {
        boost1: ["Intelligence", "Wisdom"],
        boost2: stats,
        skill_feat: "Streetwise",
        skill1: "Society",
        skill2: ["Underworld Lore"]
    },
	"Emissary": {
        boost1: ["Intelligence", "Charisma"],
        boost2: stats,
        skill_feat: "Multiligual",
        skill1: "Society",
        skill2: ["City Lore"]
    },
	"Entertainer": {
        boost1: ["Dexterity", "Charisma"],
        boost2: stats,
        skill_feat: "Fascinating Performance",
        skill1: "Performance",
        skill2: ["Theater Lore"]
    },
	"Farmhand": {
        boost1: ["Constitution", "Wisdom"],
        boost2: stats,
        skill_feat: "Assurance (Athletics)",
        skill1: "Athletics",
        skill2: ["Farming Lore"]
    },
	"Field Medic": {
        boost1: ["Constitution", "Wisdom"],
        boost2: stats,
        skill_feat: "Battle Medic",
        skill1: "Medicine",
        skill2: ["Warfare Lore"]
    },
	"Fortune Teller": {
        boost1: ["Intelligence", "Charisma"],
        boost2: stats,
        skill_feat: "Oddity Identification",
        skill1: "Occultism",
        skill2: ["Fortune-Telling Lore"]
    },
	"Gambler": {
        boost1: ["Dexterity", "Charisma"],
        boost2: stats,
        skill_feat: "Lie To Me",
        skill1: "Deception",
        skill2: ["Games Lore"]
    },
	"Gladiator": {
        boost1: ["Strength", "Charisma"],
        boost2: stats,
        skill_feat: "Impressive Performance",
        skill1: "Performance",
        skill2: ["Gladiatorial Lore"]
    },
	"Guard": {
        boost1: ["Strength", "Charisma"],
        boost2: stats,
        skill_feat: "Quick Coercion",
        skill1: "Intimidation",
        skill2: ["Legal Lore", "Warfare Lore"]
    },
	"Herbalist": {
        boost1: ["Constitution", "Wisdom"],
        boost2: stats,
        skill_feat: "Natural Medicine",
        skill1: "Nature",
        skill2: ["Herbalism Lore"]
    },
	"Hermit": {
        boost1: ["Constitution", "Intelligence"],
        boost2: stats,
        skill_feat: "Dubious Knowledge",
        skill1: "Occultism",
        skill2: ["Arctic Lore", "Desert Lore", "Forest Lore", "Grassland Lore", "Mountain Lore", "River Lore", "Swamp Lore"]
    },
	"Hunter": {
        boost1: ["Dexterity", "Wisdom"],
        boost2: stats,
        skill_feat: "Survey Wildlife",
        skill1: "Survival",
        skill2: ["Tanning Lore"]
    },
	"Laborer": {
        boost1: ["Strength", "Constitution"],
        boost2: stats,
        skill_feat: "Hefty Hauler (Athletics)",
        skill1: "Athletics",
        skill2: ["Labor Lore"]
    },
	"Martial Discipline": {
        boost1: ["Strength", "Dexterity"],
        boost2: stats,
        skill_feat: "Cat Fall",
        skill1: "Acrobatics",
        skill2: ["Warfare Lore"]
    },
	"Merchant": {
        boost1: ["Intelligence", "Charisma"],
        boost2: stats,
        skill_feat: "Bargain Hunter",
        skill1: "Diplomacy",
        skill2: ["Mercantile Lore"]
    },
	"Miner": {
        boost1: ["Strength", "Wisdom"],
        boost2: stats,
        skill_feat: "Terrain Expertise (Underground)",
        skill1: "Survival",
        skill2: ["Mining Lore"]
    },
	"Noble": {
        boost1: ["Intelligene", "Charisma"],
        boost2: stats,
        skill_feat: "Courtly Graces",
        skill1: "Society",
        skill2: ["Geneology Lore", "Heraldry"]
    },
	"Nomad": {
        boost1: ["Constitution", "Wisdom"],
        boost2: stats,
        skill_feat: "Assurance (Survival)",
        skill1: "Survival",
        skill2: ["Arctic Lore", "Desert Lore", "Forest Lore", "Grassland Lore", "Mountain Lore", "River Lore", "Swamp Lore"]
    },
	"Prisoner": {
        boost1: ["Strength", "Consitution"],
        boost2: stats,
        skill_feat: "Experienced Smuggler",
        skill1: "Stealth",
        skill2: ["Underworld Lore"]
    },
	"Sailor": {
        boost1: ["Strength", "Dexterity"],
        boost2: stats,
        skill_feat: "Underwater Marauder",
        skill1: "Athletics",
        skill2: ["Sailing Lore"]
    },
	"Scholar": {
        boost1: ["Intelligence", "Wisdom"],
        boost2: stats,
        skill_feat: "Assurance (Arcana)",
        skill1: "Arcana",
        skill2: ["Academia Lore"]
    },
	"Scout": {
        boost1: ["Dexterity", "Wisdom"],
        boost2: stats,
        skill_feat: "Forager",
        skill1: "Survival",
        skill2: ["Arctic Lore", "Desert Lore", "Forest Lore", "Grassland Lore", "Mountain Lore", "River Lore", "Swamp Lore"]
    },
	"Street Urchin": {
        boost1: ["Dexterity", "Constitution"],
        boost2: stats,
        skill_feat: "Pickpocket",
        skill1: "Thievery",
        skill2: ["City Lore"]
    },
	"Tinker": {
        boost1: ["Dexterity", "Intellihence"],
        boost2: stats,
        skill_feat: "Specialty Crafting",
        skill1: "Crafting",
        skill2: ["Engineering Lore"]
    },
	"Warrior": {
        boost1: ["Strength", "Constitution"],
        boost2: stats,
        skill_feat: "Intimidating Glare",
        skill1: "Intimidation",
        skill2: ["Warfare Lore"]
    }
};