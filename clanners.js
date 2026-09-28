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
const equipmentGroups=[
  {
    "title": "General Gear",
    "items": [
      {
        "title": "Clan Tattoos",
        "description": "",
        "fields": [
          [
            "Effect",
            "PSY+Faith/Willpower +1D"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "I"
          ],
          [
            "Value",
            "150"
          ],
          [
            "Resources",
            "1"
          ]
        ]
      },
      {
        "title": "Body Paint",
        "description": "Body painting is a tradition shared by many tribes. Whether it’s the Masai or the nomads from Pollen, all have traditional patterns and forms that they paint their skin with for combat, camouflage, or certain rites. That is why many Clanners carry a pouch with herbal and fungal paints.",
        "fields": [
          [
            "Specialty",
            "Camo paint gives +2D to AGI+Stealth; Traditional war paint strengthens PSY+Faith/Willpower by 2D."
          ],
          [
            "Effect",
            "War paint: PSY+Faith/Willpower +2D"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "I"
          ],
          [
            "Value",
            "30"
          ],
          [
            "Resources",
            "1"
          ]
        ]
      }
    ]
  },
  {
    "title": "Weapons",
    "items": [
      {
        "title": "Primitive Club",
        "description": "Only civilization brings noteworthy forms of crafts. For many Clans, both are unknown. They take what they need from the ruins: choosing old pipes as clubs and tie bricks or sharpened metal sheets to the top with wire and leather strips. These weapons may be primitive, but they are still effective.\n\nOften, the Clans mark their weapons with their personal symbols. Some also tie the hair of enemies they’ve killed around the shafts or attach teeth and claws to it.",
        "fields": [
          [
            "Specialty",
            "None"
          ],
          [
            "Handling",
            "-"
          ],
          [
            "Distance",
            "1"
          ],
          [
            "Damage",
            "2+F/2"
          ],
          [
            "Qualities",
            "Blunt"
          ],
          [
            "Encumbrance",
            "3"
          ],
          [
            "Tech",
            "I"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "20"
          ],
          [
            "Resources",
            "-"
          ]
        ]
      },
      {
        "title": "Atlatl",
        "description": "Like the primitive clubs, atlatls are simple weapons that are easy to make and exist in many varieties. These crude devices throw spears with a high initial acceleration. Their penetration and range are much higher in comparison with hand-thrown spears.",
        "fields": [
          [
            "Specialty",
            "None"
          ],
          [
            "Handling",
            "-1D"
          ],
          [
            "Distance",
            "10 / 30"
          ],
          [
            "Damage",
            "3+F/2"
          ],
          [
            "Magazine",
            "1"
          ],
          [
            "Encumbrance",
            "2"
          ],
          [
            "Tech",
            "I"
          ],
          [
            "Slots",
            "1"
          ],
          [
            "Value",
            "50"
          ],
          [
            "Resources",
            "-"
          ]
        ]
      },
      {
        "title": "Traps",
        "description": "Hunting with spear and bow does not always bring enough prey to the campfire to feed the Clan. The Clans would not have survived if their hunters were not also expert trappers. But catching prey is not always at the center of trapping: sometimes wild beasts or the warriors of enemy Clans need to be stopped from approaching. Hunters and warriors often carry several traps tied to their bodies.\n\nTraps can be used to procure dinner or to keep away unwanted guests. Looking for food in general is covered by an Action roll on INS+Survival. The Difficulty depends on the region and its fertility. In Purgare’s slag deserts the trapper needs special bait and to know the right place if he wants to catch a rat (Difficulty 6), whereas in the jungles of Hybrispania it isn't hard to lure a little deer into a trap (Difficulty 2). A successful Action roll yields enough food for (1) day. Every Trigger adds another ration for (1) day.\n\nThe big advantage of the trap is that the hunter can set it and do something else for the rest of the day. A Scrapper specializing in lichen and roots needs over (4) hours per Action roll on INS+Survival.\n\nA trap has two ratings: the first tells you how well it is hidden. This rating can be raised with Triggers from a roll on AGI+Stealth (2). If the potential victim approaches, they can spot the trap in time with a successful roll on INS+Perception. The rating above determines the Difficulty. If the roll fails and the victim approaches the trap, it is sprung.\n\nThe second trap rating determines the Damage points the trap causes. Armor sometimes protects from trap Damage: the exceptions are stated in the trap descriptions. There might be additional rules specifying how the victim can free himself from the trap.\n\nBEAR TRAP\nTwo serrated yokes crash together with a bang, cutting through sinews and breaking bones. Bear traps are small, and the victim must step right into them, but they are easily hidden. Once they have snapped closed, the victim is lost.\n\nSPECIALTY: Only full body armor reduces the Damage: a Scourger’s flak jacket, however, offers no protection. To pry the bear trap open, a successful Action roll on BOD+Force (4) is necessary.\n\nPITFALL\nA pit dug in the ground, covered with sticks and fern or a tarp. Pitfalls are mainly used to capture prey alive.\n\nSPECIALTY: The Damage depends on the depth and potentially sharpened stakes jutting up from the ground.\n\nTRIPWIRE\nA taut piece of wire can make the enemy stumble, detonate explosives, or pull the trigger of a shotgun.\n\nSPECIALTY: The Damage depends on the explosives or the weapon. As taut tripwire without detonator, it makes the victim stumble and lose (1) Action.\n\nMINES\nMines can be filled with the same explosives and agents as grenades or cartridges.\n\nSPECIALTY: The Damage is identical to that of grenades, except with mines, the victim is at the center of the detonation and takes maximum Damage.",
        "fields": [
          [
            "Trapping",
            "AGI+Stealth (2); Triggers raise the trap’s Hidden rating"
          ],
          [
            "Spot",
            "INS+Perception against Hidden rating"
          ],
          [
            "Getting Food",
            "INS+Survival; daily rations: 1 + Trigger"
          ],
          [
            "Pitfall",
            "Hidden 2C; Special; Enc. -; Tech I; Value -"
          ],
          [
            "Tripwire",
            "Hidden 5C; Lose Action, potentially detonation; Enc. -; Tech II; Value 5"
          ],
          [
            "Bear Trap",
            "Hidden 4C; 8 Damage; Enc. 1; Tech II; Value 30"
          ],
          [
            "Mine",
            "Hidden 4C; Special; Enc. 1; Tech III; Value Special"
          ]
        ]
      },
      {
        "title": "Iron Club of the Cockroach King",
        "description": "The Cockroach Clan is infamous for its nightly forays. Its fighters, thirsty for blood, break from the ruins, disappearing back into their wrecked world by day. Their kings are different: bloated, colossal, the head barely reaching above the shoulders. The Cockroaches treat them like dangerous animals, caged, worshiped. The women are keen on being impregnated by them: strong children for the nest.\n\nIf one of these kings is released on an enemy, he drags a club, an iron beam coated in sharpened sheet-metal and wrapped in barbed wire. With it, he attacks the Judges’ horses and tears them to the ground. The warriors do the rest.",
        "fields": [
          [
            "Specialty",
            "None"
          ],
          [
            "Handling",
            "-3D"
          ],
          [
            "Distance",
            "2"
          ],
          [
            "Damage",
            "2+F"
          ],
          [
            "Qualities",
            "Blunt, Impact (3T)"
          ],
          [
            "Encumbrance",
            "5"
          ],
          [
            "Tech",
            "I"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "300"
          ],
          [
            "Resources",
            "Unique"
          ]
        ]
      },
      {
        "title": "Pneumo Hammer",
        "image": "assets/pneumo-hammer.webp",
        "alt": "Pneumo Hammer",
        "description": "The Mechans from the Ramein region once developed a pneumatic bolt gun using the papers left behind by their legendary founding father, the Mechanist. Years later, it became known as the Pneumo Hammer. Its bearers founded their own warrior caste: the Pneumancers. The weapon is heated with coal until the water in the boarding tank is hot enough to generate enough pressure. A valve system directs the steam to the barrels one after another, firing the bolts and reloading at the same time.",
        "fields": [
          [
            "Specialty",
            "Pneumo Hammers need a little over 5 minutes to reach their working temperature and become usable. They can also be used as bombs: if all the valves are closed, pressure and temperature rise until a thundering detonation tears apart the cast iron. The Damage of this steam explosion is (12)."
          ],
          [
            "Caliber",
            "Bolt / Coal"
          ],
          [
            "Handling",
            "-2D"
          ],
          [
            "Distance",
            "10 / 30"
          ],
          [
            "Damage",
            "10"
          ],
          [
            "Magazine",
            "12"
          ],
          [
            "Qualities",
            "Thunder Strike, Special"
          ],
          [
            "Encumbrance",
            "3"
          ],
          [
            "Tech",
            "III"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "1500"
          ],
          [
            "Resources",
            "-"
          ]
        ]
      }
    ]
  },
  {
    "title": "Armor",
    "items": [
      {
        "title": "Druschinnik Silk Armor",
        "description": "Wroclaw’s fine silk thread is turned into breastplates for the Piast’s bodyguards. Several layers of silk are stacked and stitched. The fabric is extremely resilient, deflecting arrows and knife blades.",
        "fields": [
          [
            "Specialty",
            "None"
          ],
          [
            "Armor Rating",
            "3"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "III"
          ],
          [
            "Slots",
            "-"
          ],
          [
            "Value",
            "600"
          ],
          [
            "Resources",
            "4"
          ]
        ]
      }
    ]
  },
  {
    "title": "Vehicles & Mounts",
    "items": [
      {
        "title": "Mammoth",
        "description": "Mammoths roam the tundra of Pollen and the forests of East Borca in vast herds led by experienced alpha females, while adult bulls often travel alone and can be extremely aggressive. The Garganti have developed an exceptional bond with these animals and can calm, train, and integrate them into their herds. When threatened, a mammoth herd tends to form a defensive line or circle and may charge if surrounded or panicked. As mounts they are immensely valuable, powerful, and trainable, with two training slots that can be used to improve robustness, movement, or learned maneuvers.",
        "fields": [
          [
            "Max. Speed",
            "2"
          ],
          [
            "Acceleration",
            "1"
          ],
          [
            "Brake",
            "1"
          ],
          [
            "Armor",
            "3"
          ],
          [
            "Flesh Wounds",
            "36"
          ],
          [
            "Trauma",
            "18"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "15000"
          ],
          [
            "Resources",
            "6"
          ]
        ]
      }
    ]
  }
];
const esc=v=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
const fmt=v=>esc(v).replaceAll('\n\n','<br><br>').replaceAll('\n','<br>');
function renderRank(id){
  const r=ranks[id],d=document.querySelector('#rank-detail');
  d.innerHTML='<p class="rank-kicker">SELECTED RANK</p><h3>'+esc(r.title)+'</h3><p>'+fmt(r.description)+'</p><dl class="entry-fields">'+r.fields.map(([a,b])=>'<div><dt>'+esc(a)+'</dt><dd>'+fmt(b)+'</dd></div>').join('')+'</dl>';
  document.querySelectorAll('.rank-node').forEach(b=>{const s=b.dataset.rank===id;b.classList.toggle('is-selected',s);b.setAttribute('aria-pressed',String(s));});
}
function renderPotential(i){
  const p=potentials[i];
  document.querySelector('#potential-detail').innerHTML='<p class="rank-kicker">SELECTED POTENTIAL</p><h3>'+esc(p.title)+'</h3><dl class="entry-fields">'+p.fields.map(([a,b])=>'<div><dt>'+esc(a)+'</dt><dd>'+fmt(b)+'</dd></div>').join('')+'</dl>';
  document.querySelectorAll('.potential-select').forEach((b,j)=>b.classList.toggle('is-selected',i===j));
}
function renderPotentials(){
  const l=document.querySelector('#potential-list');
  l.innerHTML=potentials.map((p,i)=>'<button class="potential-select" data-potential-index="'+i+'">'+esc(p.title)+'</button>').join('');
  l.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>renderPotential(+b.dataset.potentialIndex)));
  renderPotential(0);
}
function renderEquipment(){
  document.querySelector('#equipment-groups').innerHTML=equipmentGroups.map((g,i)=>'<details class="equipment-group" '+(i===0?'open':'')+'><summary><span>'+esc(g.title)+'</span><span class="equipment-count">'+g.items.length+' ENTRIES</span></summary><div class="equipment-group-body"><div class="equipment-grid">'+g.items.map(x=>'<article class="reference-card equipment-card">'+(x.image?'<div class="equipment-art"><img src="'+x.image+'" alt="'+esc(x.alt)+'"></div>':'')+'<h3>'+esc(x.title)+'</h3>'+(x.description?'<p>'+fmt(x.description)+'</p>':'')+'<dl class="entry-fields compact-fields">'+x.fields.map(([a,b])=>'<div><dt>'+esc(a)+'</dt><dd>'+fmt(b)+'</dd></div>').join('')+'</dl></article>').join('')+'</div></div></details>').join('');
}
document.querySelectorAll('.rank-node').forEach(b=>b.addEventListener('click',()=>renderRank(b.dataset.rank)));
renderRank('scout');
renderPotentials();
renderEquipment();
const navToggle=document.querySelector('#lorebook-nav-toggle'),sidebarScrim=document.querySelector('#sidebar-scrim');
const setSidebar=o=>{document.body.classList.toggle('sidebar-open',o);navToggle?.setAttribute('aria-expanded',String(o));};
setSidebar(matchMedia('(min-width: 761px)').matches);
navToggle?.addEventListener('click',()=>setSidebar(!document.body.classList.contains('sidebar-open')));
sidebarScrim?.addEventListener('click',()=>setSidebar(false));
document.querySelectorAll('.lorebook-sidebar a[aria-disabled="true"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
