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
