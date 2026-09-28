const ranks={
  "scout": {
    "title": "1 - Scout",
    "description": "When the people of the Clan are young, they’re small and quick. They enter subterranean worlds of tubes and corridors, jumping through debris as if it weren’t even there, or they roam the surface, darting through swamps and jungles to track down Aberrants or Machine Men. They keep an eye out, and report any enemy movement.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Result",
        "Scouts the enemy and secures the Clan’s borders. The Scout gets +1D on all Attack rolls when defending the Clan."
      ],
      [
        "Equipment",
        "Primitive club; sling; if Tech Level >II, musket or flintlock pistol"
      ]
    ]
  },
  "hunter": {
    "title": "2 - Hunter",
    "description": "They hunt deer or wild cattle, chasing them to exhaustion and killing them with spears. Often they roam the wilderness for days, following tracks or waiting. They are eagerly awaited at home until they return with their prey.\n\nIn more highly advanced Clans, they will roam and scavenge ruins in the Clan’s territory for scrap or useful technology, protecting themselves with steel knives and rifles.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Stamina 4; AGI+Projectiles 6; INS+Survival 6"
      ],
      [
        "Result",
        "Within his Clan’s domain, the Hunter gets +2D to finding prey. His local knowledge is enormous (+2D to AGI+Stealth)."
      ],
      [
        "Equipment",
        "Traps; spear; bow or, if Tech Level >III, hunting rifle"
      ]
    ]
  },
  "gatherer": {
    "title": "2 - Gatherer",
    "description": "They know their territory as if it was a part of their own body. They know which plants carry fruit at what time and how to cook them, they know the intricacies of the technology that influences their Clan’s home, and they ensure that the stored food is properly cared for. Often, they also play a part in caring for the Clan’s children.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Negotiation 4; CHA+Conduct 6; INS+Orienteering 6"
      ],
      [
        "Result",
        "The Gatherer knows the land, knows when and what it produces (+2D to searching for berries and roots) and when to buy from merchants. Gatherers maintain diplomatic relations with other Clans and thus protect the peace."
      ],
      [
        "Equipment",
        "Simple maps on leather (+1D to INS+Orienteering)"
      ]
    ]
  },
  "tribalwarrior": {
    "title": "3 - Tribal Warrior",
    "description": "Gendos roam through the ruins waiting to pick off any stragglers, whether they are weak and infirm or even children. Outlaws and other Clans are envious of every root and strip of meat in another Clan’s soup. Strange beasts controlling unimaginable and terrifying powers stalk through forests and mountains.\n\nThe warriors stand between the people of the Clan and the evil of the cruel world. Before, the search for food was paramount to their lives, now they live for battle. They stand ready with sword and shotgun.\n\nWhen the Clan has been allowed to develop further, they may evolve as well, becoming technicians or masters of arms and maintaining the machines and weaponry the Clan uses to defend itself.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Melee 8; AGI+Projectiles 6; BOD+Brawl 7 or at Tech Level >II AGI+Crafting 7; Renown 3"
      ],
      [
        "Result",
        "In a warlike Clan, the Tribal Warrior gets (+2) Authority. The Gatherers and Hunters feed him: it is his job to train daily and spar against the other warriors of the Clan. At a higher Tech Level, his is the role of technician and master of arms."
      ],
      [
        "Equipment",
        "Sword or other melee weapon; at Tech Level >III, automatic or pump-action rifle"
      ]
    ]
  },
  "shaman": {
    "title": "3 - Shaman",
    "description": "Violence is the law of the wild. There is no denying that this is a core fact of reality. However, some people are not suited to pursuing violence. Instead, they delve into the depths of the human soul, recognising patterns in the clouds or piles of bones. Their sensitivity awakens the Shaman within them. From herbs and animal fat, they concoct salves that make wounds heal quickly or awaken virility, directing the culture of their Clan, defining traditions and rules.\n\nIn more enlightened tribes, this thirst for understanding and knowledge manifests as a need to move away from the primitive tribal traditions and rules towards a more codified rule of law. They become Sages, and dictate and enforce the laws of their Clan.\n\nWhatever their role, they are the heart of the Clan.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Negotiation 7; INT+Legends 8; INS+Empathy 7; Secrets 3"
      ],
      [
        "Result",
        "The Shaman fights with fate for his Clan’s future. He blesses talismans, captures ancient spirits and divine forces in tattoos (bringing +1D to PSY+Faith), and spiritually prepares the warriors for their death in battle. At Tech Level > II, the Shaman turns into a Sage, keeping and executing the Clan’s laws (+2D to INT+Legends)."
      ],
      [
        "Equipment",
        "Bone necklaces; talismans; oracle stones; at Tech Level > II, books of law, contracts, and the Clan’s mark in iron or stone"
      ]
    ]
  },
  "chieftain": {
    "title": "4 - Chieftain",
    "description": "The path to violence creates a road to the top of the tribe as surely as a path of unity and understanding does. As a warrior, he physically dominated all of the others, able to strike down the strongest with one blow of his fist, or he was able to demonstrate his physical prowess in contests of strength and endurance. As a Shaman, he proved his foresight and opened a world of spirits and faith to the Clan, or he was able to push back the darkness of superstition and lead them through the confusing world of today. Now, he must lead. He is the head of the Clan. No one openly questions his word.",
    "fields": [
      [
        "Prerequisite",
        "The old Chieftain must step down; Authority 5; Allies 5; Resources 3"
      ],
      [
        "Result",
        "Once a mundane warrior or a spiritual leader, the Chieftain will continue his path as a solitary authority figure. He leads campaigns or solidifies the relations between neighbors and expands the village."
      ],
      [
        "Equipment",
        "The Clan’s preferred weapon, upgraded once; the symbol of his rule is a headdress, mask, helmet, or armor and signet ring"
      ]
    ]
  },
  "champion": {
    "title": "5 - Champion",
    "description": "He led his Clan through dozens of battles, won by guile and pure strength every fight or duel. He is a blessed or incredibly cunning warrior, the archetypal embodiment of strength and control, or he is a masterful engineer or artist, creating awe inspiring works.\n\nEven if he leaves the Clan one day to join the All-father, or is cut down defending his family from an encroaching Psychokinetic, his children and their children will remember his exploits, telling stories of his victory or writing it down in the history of their Clan.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Force 8 or CHA+Arts 8; Combat or Engineering Skill 10, Renown 6"
      ],
      [
        "Result",
        "Only brute force and cunning count in primitive Clans. Those who excel and bring victory to the Clan become Champions, and the Clan will forever remember them. The Shaman praises the Champion’s legendary strength, and the Tribal Warriors aspire to be like him. In more advanced communities (Tech Level >II), engineers and artists can achieve this ultimate praise, too, and give the Clan direction, leading by example. Whether cultivated or primitive, though, the champion has full access to all Resources of the Clan (Resources (6) within Clan)."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "founder": {
    "title": "5 - Founder",
    "description": "He was always able to look past the simple, mundane details of the word to look at the big picture. Through diplomacy and cunning negotiations, he was able to bring rivals over to his side. Tribe after broken tribe joined his cause as he picked up the pieces of their culture and added it to his own. Many became one. A new Clan was born. To the Clan members, he is father and brother, priest and leader.",
    "fields": [
      [
        "Prerequisite",
        "Has unified the families to form a Clan; CHA+Leadership 10, CHA+Conduct 10 or PSY+Domination 10; Authority 6"
      ],
      [
        "Result",
        "Whether through combat or through diplomacy, the Founder has unified several Clans, stoking the melting pot and creating a sterling alloy. A new Clan was born. The Founder thus commands a power that brings him into conflict with the established Cults. He is much in demand, and diplomats and assassins alike accost him. His every decision can shake foundations that have been built up over centuries."
      ],
      [
        "Equipment",
        "The symbol of his rule is a special weapon or a holy item"
      ]
    ]
  }
};
const potentials=[
  {
    "title": "I. Forgotten by Death",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Romano"
      ],
      [
        "Effect",
        "Blessed by luck or detested by hell. Whatever the reason, no matter what fate throws at the Clanner, they seem to be able to dance their way along the knife edge of danger. Bullets whistle past their ears, knives cut the air a millimeter from their skin, and still they manage to escape with a barely a scratch."
      ],
      [
        "Rules",
        "If the character is in danger of getting Trauma he could have avoided with a successful Action roll, he gets a second chance. Once per day he can reroll such an Action roll for (1) Ego Point – with a bonus of +1D per Potential level."
      ]
    ]
  },
  {
    "title": "II. Lombardi Blood",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Lombardi"
      ],
      [
        "Effect",
        "Clan Lombardi has been around much longer than the upstart Anabaptist Cult. From an early age the children of the Clan learn just who the original rulers of the land were, even as the Anabaptists swarm their ancestral homes and spread their foul influence."
      ],
      [
        "Rules",
        "A Lombardi gets +1D per Potential level to his Mental Defense against Anabaptist influences. This bonus increases to +2D per Potential level against missionary efforts."
      ]
    ]
  },
  {
    "title": "III. Martyrdom",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Flayers"
      ],
      [
        "Effect",
        "Most Flayers couldn’t hope to stand up to their enemies physically, but even as his enemies rain blows down upon him the crowd starts to take notice. The Flayer reaches out to the onlookers, his aura, devotion, and capacity to withstand suffering inspiring the people, whipping them into a mob as the Flayer whips his own flesh."
      ],
      [
        "Rules",
        "Should the Flayer be attacked or beaten, he gets +1D per Potential level to a Mental Attack with INS+Empathy. If he succeeds, he projects his suffering onto the onlookers and enrages them. Women throw chamber pots against the attackers, men grab their pitchforks. The worse the Flayer's injuries and the more Triggers he rolls, the more violent the reaction of the populace."
      ]
    ]
  },
  {
    "title": "IV. Brotherhood",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Resistance"
      ],
      [
        "Effect",
        "The Resistance fighters are loyal to a cause greater than the individual, greater even than the brothers and sisters they fight beside; they are in a war for the very soul of their country. This loyalty inspires great feats of heroism: as the militia charges towards yet another swarm of Drones, bullets crossing the space between the two fronts, they are joined as one in worship of the only cause that matters to them."
      ],
      [
        "Rules",
        "As a Resistance fighter charges across an open space towards his enemy, side by side with his comrades in arms, he adds +1D per Potential level to all Attack rolls made during the assault. The bonus ends as the enemy closes into close quarters, the brotherhood descending into a mad frenzy of melee."
      ]
    ]
  },
  {
    "title": "V. Friend of the Lion",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Touloni"
      ],
      [
        "Effect",
        "The Touloni have been living amongst Lions for years, and they have begun to learn the tricks of the trade. The complex interplay of numbers, the words weaving together as they tumble from the African’s mouth, all of it is hard to deal with, but with enough time and practice even the oldest Crows learn some new tricks."
      ],
      [
        "Rules",
        "With Friend of the Lion, a character gets +1D per Potential level to CHA+Negotiation and PSY+Cunning to spot a poor deal and subtly twist it into a good one, smiling all the while."
      ]
    ]
  },
  {
    "title": "VI. Blood Call",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Sanglier, Faith"
      ],
      [
        "Effect",
        "Before any battle, the legionnaires of the Sanglier family slit their palms, pouring the blood out into a bowl filled with some Petro. The fluid mixes together into a deep black pool, and is then burned to obtain the blessing of the Cerveaux."
      ],
      [
        "Rules",
        "If a Sanglier sacrifices his blood to the Cerveaux before a battle, taking (1) Flesh Wound of Damage, he gains a bonus equal to his Potential level to his Passive Defense until the end of the combat."
      ]
    ]
  },
  {
    "title": "VII. Lance Thrust",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Bordenoir, Focus"
      ],
      [
        "Effect",
        "There are always stories of fishermen out at sea being attacked by the most fearsome predators of the deep, sharks leaping from the water to bite the throats from anyone caught unaware. Of course, any good fisherman knows how to kill a Tiger Shark, thrusting a knife into the brain with a quick, precise movement to leave it floating dead in the water. The fishers of Clan Bordenoir are very good fishermen..."
      ],
      [
        "Rules",
        "The Bordenoir exhibit lethal precision in melee, targeting their enemy’s most vulnerable areas. Characters with this Potential add +1D per Potential level to Aimed Attack rolls in close combat."
      ]
    ]
  },
  {
    "title": "VIII. Bloodthirsty",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Pictons, Ate Star Food, INS+Primal 8"
      ],
      [
        "Effect",
        "The blade of the bone knife flashes, blood splattering on the ground. To the Picton, the blood shines with an ethereal light, burning like a red sun on the ground. He looks at his blade, sees the red glow along its edge, and flies into a rage. He needs to spill more!"
      ],
      [
        "Rules",
        "If any of the Picton’s attacks causes Damage, he immediately recovers (1) Ego Point. The Picton can use this Point in the next Combat Round for his Initiative, even if it would exceed the normal maximum of (3).\n\nFor every Potential level, he gets (1) additional Ego Point above his Ego pool maximum. This is a side effect of Argyre‘s star food, a hormone cocktail he feeds to his Pictons, making it easier to train them."
      ]
    ]
  },
  {
    "title": "IX. Premonition",
    "fields": [
      [
        "Prerequisite",
        "Stukov Nomads"
      ],
      [
        "Effect",
        "The Stukov Nomads have kept the desert safe from intruders for many decades now. They have learned that most outsiders come to plunder. They excel at reading their body language and guessing their next moves."
      ],
      [
        "Rules",
        "Stukov Nomads do not mingle with outsiders. Instead they spend a lot of time studying them from a safe spot in the desert. Guessing their whereabouts begins as a child’s game and ends with combat. When a fight erupts, the Nomad may add +1D per Potential level to a PSY+Cunning roll against an opponent’s Mental Defense. If the Nomad wins, the target must immediately announce their next Action. No matter what happens, the target has to follow what they announced through."
      ]
    ]
  },
  {
    "title": "X. Mother of All Virtues",
    "fields": [
      [
        "Prerequisite",
        "Vigilantes"
      ],
      [
        "Effect",
        "In the barren and deformed lands of Western Purgare only Vigilantes dare to tread openly. They hunt for the Incarnates who have infested their homelands. To stand firm against one of those horrors is considered the mother of all virtues."
      ],
      [
        "Rules",
        "Fighting an Incarnate is all about living another day. The Vigilantes knows when to pick his fight. When facing a Psychokinetic, he adds +1D per Potential level to his INS+Perception and Attack rolls. If he had at least (1) day to prepare the battleground, the bonus is increased to (1) Success per Potential level instead."
      ]
    ]
  },
  {
    "title": "XI. Former Glory",
    "fields": [
      [
        "Prerequisite",
        "Exalters"
      ],
      [
        "Effect",
        "Cultrin and the rise of Exalt may seem like a distant memory to some. To others, it is a birthright. The old traditions survived with the Exalters who fled and spread among the many cities of the Protectorate. Cultrin’s doctrine lives on..."
      ],
      [
        "Rules",
        "It takes tremendous willpower to stay true to Exalt’s ideals, a hundred years after its fall. Is it the only reason for the extraordinary resilience of the Exalters’ mind? The character adds +1D per Potential level to his Mental Defense rolls. If the attack is based on memetics, he adds (1) Trigger per Potential level instead."
      ]
    ]
  },
  {
    "title": "XII. Trial by Fire",
    "fields": [
      [
        "Prerequisite",
        "Storskis"
      ],
      [
        "Effect",
        "Coal, fire, steam and boiling heat. The body covered in burn marks and black soot. Storskis live for the power of their engines and they embrace the fire that keeps those machines running."
      ],
      [
        "Rules",
        "Shoveling coal for hours in the heat of a furnace turns the skin into a crust of leather. Storskis additionally coat their bodies with protective lubricants, a habit that makes them incredibly resistant to fire. A Storski may have a natural Fire Resistant Quality with a rating of the Potential level x2. If armor with the same Quality is worn on top, both ratings are added together."
      ]
    ]
  },
  {
    "title": "XIII. Stoney Calm",
    "fields": [
      [
        "Prerequisite",
        "Clanners, Britoni, Focus"
      ],
      [
        "Effect",
        "Wisdom is embedded in his bones and his gaze is one of eternal serenity. During negotiations and arguments, the Britoni’s calm fills the room, taking the wind out of the sails of flying tempers and pouring oil on troubled waters."
      ],
      [
        "Rules",
        "For every point in the Potential, the character adds +1D to all rolls using CHA+Conduct or CHA+Expression to mediate a conflict between arguing parties, or to convince them to look at the situation from his viewpoint."
      ]
    ]
  },
  {
    "title": "XIV. Toxicity",
    "fields": [
      [
        "Prerequisite",
        "Phosphorites"
      ],
      [
        "Effect",
        "Phosphorites have been over-exposed to the biohazards of their territory for an eternity. The genetic composition of the Clan has shifted towards immunity to countless toxins and chemical agents found in the wastelands."
      ],
      [
        "Rules",
        "When a Phosphorite is exposed to chemicals, the Potency is lowered by the Potential level. When administered a chemical without Potency, the character adds +1D per Potential level to a BOD+Toughness roll against the Tech Level of the agent. If he succeeds, the chemical has no effect. However, the chemical immunity also leads to the Phosphorite being immune to most vaccines and medicines."
      ]
    ]
  },
  {
    "title": "XV. Rigor Mortis",
    "fields": [
      [
        "Prerequisite",
        "Cockroaches"
      ],
      [
        "Effect",
        "Cockroaches are the true masters of the wasteland. They have ruled the far reaches of Northern Borca for hundreds of years. Beaten and driven from their realm, they have returned to reclaim what once belonged to them. This time they know how to hide in plain sight."
      ],
      [
        "Rules",
        "The Cockroach freezes his movements to become one with the surroundings. His body, covered in soot and dirt, blends with the background. He adds (1) Success per Potential level to his AGI+Stealth rolls for the purpose of hiding. This bonus may be used in order to pass for a corpse, rolling a Combination of AGI+Stealth and PSY+Deception and adding (1) Success to each component per Potential level."
      ]
    ]
  }
];
