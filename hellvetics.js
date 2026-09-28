const ranks={
  "soldier": {
    "title": "1 - Soldier",
    "description": "Young soldiers are recruited from the families of soldiers or from volunteers from the Territorial Regions. At age 14, drills to shape the body and soul begin. After the first year, the soldiers get their Trailblazer. The weapon will be with them for the rest of their lives.\n\nThe first grades of Private and Lance Corporal are assigned for obedience, service at the fortress and good fire quota.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Result",
        "Must report to the Alpine Fortress every six months or his Resources will drop permanently by (1) for every skipped report."
      ],
      [
        "Equipment",
        "Trailblazer; +5 rounds per month; Harness; last ration (equals two meals)"
      ]
    ]
  },
  "corporal": {
    "title": "2 - Corporal",
    "description": "Corporal is the first noncom rank, followed by Constable and Field Officer. With them come the first executive functions. Autonomous guard duty at the passes or in tunnels in the periphery as well as commanding very small groups are typical deployments. An intense briefing on formation tactics is mandatory.\n\nAs a higher-ranking noncom officer (i.e., Constable and Field Officer), the Hellvetic must specialize and join a branch.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Force 4; AGI+Projectiles 5; INS+Survival 4; Authority 2"
      ],
      [
        "Result",
        "In the manufactures of the Alpine Fortress, the Trailblazer is customized for the Corporal’s needs. The weapon gets a level 1 upgrade (+20% range, +1D Handling, or +1 Damage). He receives permission to carry (2) units of an explosive of his choice."
      ],
      [
        "Equipment",
        "+10 rounds per month, bonus carries to higher ranks as well."
      ]
    ]
  },
  "sapper": {
    "title": "3 - Sapper",
    "description": "No matter if a tunnel collapses or the enemy amasses a defensive line: call the Sappers! They are the army’s demolition specialists. They plant their packs and wait for them to detonate, safe behind their Tunnel Shields.\n\nThose who are used to blowing big holes only rely on their Trailblazers in cases of emergency. Sappers are trained to use heavy weaponry like grenade launchers and machine guns.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Force 6; BOD+Stamina 6; AGI+Dexterity 6; INT+Science 4; Authority 3"
      ],
      [
        "Result",
        "As demolition expert, he has easy access to explosives ((+3) Resources for explosives). He can go into combat with up to (4) units of explosives."
      ],
      [
        "Equipment",
        "Tunnel Shield; grenade launcher; Light Machine Gun; explosives"
      ]
    ]
  },
  "grenadier": {
    "title": "3 - Grenadier",
    "description": "Grenadiers are the largest branch. Armed with a customised Trailblazer and perfectly trained, the first shot is usually a hit. They are trained in survival techniques and thus mostly operate outside the Fortress. For the Hellvetics, they are the archetypal soldiers.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Projectiles 8; PSY+Reaction 6; INS+Survival 6; INS+Orienteering 6; Authority 3"
      ],
      [
        "Result",
        "Does not have to report every six months anymore. He receives milestones to detect weapon caches at his operation site. His Trailblazer gets a level 2 upgrade (+40% range, +2D Handling, or +2 Damage, replaces existing upgrade). A Grenadier also gets +1D for Negotiations with the Scourgers; the Lion considers the Hellvetic infantry heroes and equals."
      ],
      [
        "Equipment",
        "+20 rounds per month; Pathfinder"
      ]
    ]
  },
  "specialdetachment": {
    "title": "4 - Special Detachment",
    "description": "Grenadiers and Sappers are recruited into the Special Detachment for extraordinary achievements and called Specialists in the Hellvetics’ lingo. They answer directly to the Corps Commanders and go on politically charged missions. For example, they protect high-ranking representatives of allied organizations who visit as emissaries within the Alpine Fortress. They are also requested for deployments on foreign territory.\n\nThey have access to a stubbed version of the Trailblazer and carry lots of ammo on sanctioned deployments.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Brawl 6; BOD+Melee 6; AGI+Projectiles 10; AGI+Stealth 6; PSY+Reaction 7; Renown 3"
      ],
      [
        "Result",
        "Special Detachment soldiers have free access to the Cult headquarters as long as they wear their rank signs on their Harness."
      ],
      [
        "Equipment",
        "Stubbed Trailblazer; +20 rounds per month"
      ]
    ]
  },
  "sentinel": {
    "title": "3 - Sentinel",
    "description": "They know every bunker with an observation slit trained towards the Alps, watch the passages and decide who may pass and who has to turn around. They man the Alpine Fortress’s cannons, and if they step out into the white day, then it’s only to hide demolition packs in snow slabs. If these packs explode, the mountain shakes, and avalanches thunder down toward the valley. No attacker stands a chance against this force of nature. A fortunate side effect is that this lowers the Sentinel’s ammo consumption.\n\nSentinels, as the last line of defense, have access to the heaviest Harnesses. At the same time, they are responsible for internal security and serve as a sort of police force.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Force 8; BOD+Toughness 6; AGI+Navigation 6; CHA+Negotiation 6; Authority 4; Resources 3"
      ],
      [
        "Result",
        "Gains access to explosives ((+3) Resources for explosives). Can arrest anyone within the Alpine Fortress and drag them in front of the Tribunal."
      ],
      [
        "Equipment",
        "Heavy Duty Harness"
      ]
    ]
  },
  "radiobeam": {
    "title": "3 - Radio Beam Unit",
    "description": "It would take weeks to walk from the first to the fourth Territorial Region, even through the well-kept subterranean passages. Still, this area must be kept under surveillance, the Corps Commanders must always be informed about any enemy movement, and orders must be passed down from above. This is the Radio Beam Units’ job.\n\nThey maintain the network of radio masts, cables and relay stations. Without them, the Hellvetics would be blind and deaf. Their understanding of communications electronics is on par with high-ranking Chroniclers’ – but Radio Beam Units can also radio for help or artillery support.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Stamina 6; AGI+Crafting 6; INT+Engineering 8; Resources 3"
      ],
      [
        "Result",
        "Receives uplink to a Chronicler radio network: a Radio Beam Unit can communicate with every Alcove across thousands of kilometers, and his calls for help even reach into the Alpine foothills. Within minutes to hours, a platoon of Hellvetic Grenadiers will arrive to assist him."
      ],
      [
        "Equipment",
        "Radio Backpack; Pathfinder"
      ]
    ]
  },
  "spotter": {
    "title": "3 - Spotter",
    "description": "The Alps’ rugged slopes and the wasteland’s ruin fields are the Spotters’ home. They are lightly armed, well camouflaged and tough. They watch and take notes.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Athletics 6; AGI+Stealth 7; INS+Perception 6; INS+Orienteering 6; Network 3"
      ],
      [
        "Result",
        "Receives a transponder bracelet so others avoid mistaking him for an enemy when disguised."
      ],
      [
        "Equipment",
        "Light Spotter Harness; Transponder Bracelet; binoculars"
      ]
    ]
  },
  "infiltrator": {
    "title": "4 - Infiltrator",
    "description": "They blend in. They hide their Recon Harness under local garb or remove it completely. They are trained in the use of trickery and sabotage identifying ringleaders and weakening the enemy’s defenses.",
    "fields": [
      [
        "Prerequisite",
        "PSY+Deception 8; PSY+Cunning 8; PSY+Reaction 6; Network 4"
      ],
      [
        "Result",
        "Knows how to navigate the hidden paths and secret storage rooms in the Alpine Fortress. When looking for one of these hidden doors, he gets +4D on INS+Orienteering."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "p26": {
    "title": "5 - P-26 Squad",
    "description": "Project 26 is the successor organization of a Bygone arrangement of the same name that organizes the resistance in case of a defeat of the Swiss army. The 26 refers to the 26 cantons. These are supposed to be led back into the Hellvetic Federation, quite forcibly after the latest insurgencies.\n\nThe P-26 operatives work in cells of 2 to 4 Infiltrators. Through propaganda and sabotage, they influence the mood within the cantons to the Hellvetics’ favor. They ridicule ideological hotheads – or kill them. Every P-26 action aims at a high symbolic value, but more important than anything else is that they may never weaken the Hellvetic heartland.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Conduct 6; CHA+Expression 6; BOD+Melee 8; PSY+Cunning 10; Network 5"
      ],
      [
        "Result",
        "As a squad, the Hellvetic knows 1-3 other Infiltrators: they form a cell. He gains full access to the Alpine Fortress’s arsenals (Resources (6)) as long as he uses the equipment to advance the reunification of the cantons into the Hellvetic Confederation. The members of a cell help each other—but they also watch each other."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "medic": {
    "title": "3 - Medic",
    "description": "Those who go to war will see blood. If it’s their own, a Medic better be around. Medics are part of the fighting personnel and stand at the side of the Grenadiers, but their special skill is treating the wounded.",
    "fields": [
      [
        "Prerequisite",
        "INT+Medicine 7; INS+Empathy 4; Authority 2"
      ],
      [
        "Result",
        "Held in high regard in the cantons. Gets a +1D bonus on all Psyche and Charisma rolls in the hinterland. However, his influence in the Alpine Fortress rises as well: (+1) Authority."
      ],
      [
        "Equipment",
        "Smoke and Shock grenades; field kit"
      ]
    ]
  },
  "genie": {
    "title": "3 - Genie",
    "description": "No one knows the Alpine Fortress better, for they have built it. They are experienced bridge engineers and fortress builders and ensure the Hellvetics’ mobility. They repair passages and tunnels and maintain the vehicles. Large endeavors are impossible without their logistical skills.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Force 6; AGI+Navigation 4; AGI+Crafting 6; INT+Engineering 6; INT+Science 6; Resources 2"
      ],
      [
        "Result",
        "A Genie has experience in building fortifications. When his comrades dig in before the fight and he can inspect and upgrade the fortifications, Active and Passive Defense rise by +1D and (+1) as long as the troops are fighting from cover. The Genie gets (+3) Resources when requesting heavy bulldozers."
      ],
      [
        "Equipment",
        "Heavy Duty Harness with heavy lifting module"
      ]
    ]
  },
  "forager": {
    "title": "3 - Forager",
    "description": "Foragers are surplus officers and quartermasters, organizing the food and war gear supply. They can access the Alpine Fortress’s data ports and directly address Central storage or the sections’ computers. Foragers are experienced technicians: they can circumvent digital roadblocks and open sealed doorways.",
    "fields": [
      [
        "Prerequisite",
        "INT+Artifact Lore 6; CHA+Negotiation 6; CHA+Conduct 4; Resources 3; Renown 3; Network 2"
      ],
      [
        "Result",
        "With his uplink computer, the Forager accesses central storage and the section computers. To order ammunition or other equipment (excluding Harnesses and their upgrades, Trailblazers, and vehicles), his Resources rise to (6). As quartermaster and purser, he is close to his comrades. He can shut his ears (which gives him Renown (+1)) or make mental notes on every dirty story ((+1) Secrets). Only one can be active at a time, but it is permanent as long as the Forager plays his role accordingly."
      ],
      [
        "Equipment",
        "Forager-Uplink"
      ]
    ]
  },
  "subaltern": {
    "title": "4 - Subaltern",
    "description": "The Subaltern officers’ grades of Lieutenant and Senior Lieutenant must prove themselves as platoon leaders before they get to command whole units of several platoons. Captain is the highest-ranking Subaltern grade. He is responsible for all soldiers within a section.\n\nWhile Subalterns have to live a military life, too, they are highly privileged: they live in private quarters and are guarded by a Grenadier whenever they are outside the Alpine Fortress. They are Hellvetica’s ambassadors and are held in high regard.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Leadership 8; AGI+Projectiles 8; Authority 4"
      ],
      [
        "Result",
        "The officer insignia on the shoulder provides results: a permanent (+1) on Authority. The Subaltern leads units into battle. Low-ranking Hellvetics have to obey him and can be given over to the Sentinels by him if they do not. If the Subaltern leaves the fortress, a Grenadier accompanies him. In Justitian’s Ambassador's Quarter, he and all higher-ranking Hellvetics are treated especially well and live in a gaudy mansion. The Subaltern negotiates resource shipments with Neolibyans and Scrappers to keep the Alpine Fortress well stocked. Considering the trust grown over the years, his Allies Background can also refer to Neolibyans and Scrappers."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "fieldofficer": {
    "title": "5 - Field Officer",
    "description": "Only the Field Officer grades of Major, Lieutenant-Colonel and Colonel are higher-ranking than the Subalterns. They assist the Corps Commander in managing his Territorial Region.\n\nAccording to the Doctrine, they can put every civilian on confederate ground under martial law and judge them accordingly. This has led to disputes time and again in the past.",
    "fields": [
      [
        "Prerequisite",
        "Allies 3; Authority 5; Renown 4"
      ],
      [
        "Result",
        "The Field Officer stands at the map table with the Corps Commanders and knows the next intended steps towards restoring the Hellvetic Confederation ((+1) Secrets). On federal territory, he can give orders and can treat civilians under military laws and judge them: when dealing with Hellvetic civilians, he can use his Authority as bonus dice on PSY+Domination. This bonus does not apply in regions that have turned their backs on Hellvetica. Instead, a failed Action roll can lead to an uprising."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "corpscommander": {
    "title": "6 - Corps Commander",
    "description": "He commands a Territorial Region and determines the way into the future together with the other Corps Commanders.",
    "fields": [
      [
        "Prerequisite",
        "The position must be free (meaning one of the four Corps Commanders has died or stepped down); Allies 5; Authority 6"
      ],
      [
        "Result",
        "The Corps Commander has the high command of one of the four Territorial Regions. No one is higher-ranking than he is: his orders surpass even the Doctrine and the law. He can request units, can order new bridges to be built, can close down passage tunnels, and can demand the conquest of former Confederation territory."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  }
};
