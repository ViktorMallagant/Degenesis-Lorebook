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
const potentials=[
  {
    "title": "I. Assault",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "A Harness bursts into motion, breaks from cover, jumps over rocks, keeps getting faster, mud splashes under thundering boots. The Hellvetic screams, “After me!” Then he hits the enemy lines."
      ],
      [
        "Rules",
        "A Hellvetic leads his squads by example, charging into battle. If he manages to achieve (2) Triggers on an Attack Roll, all of his squadmates attacking after him in the same Round add +1D per Potential Level to their own Attack rolls. Only usable in the first Combat Round."
      ]
    ]
  },
  {
    "title": "II. Forced March",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "Those who follow the Forced March Doctrine adapt their movements to better match the rigid construction of their armor, their bodies moving in sync with the steel joints of their Harness."
      ],
      [
        "Rules",
        "The encumbrance of the Harness decreases by (1) per Potential Level."
      ]
    ]
  },
  {
    "title": "III. Shield Wall",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "From the strategic safeguard of the cantons to the tactical Shield Wall Doctrine, Hellvetics are the protectors of humanity.\n\nThose who commit to the Shield Wall Doctrine learn to obstruct attacks on others with their bodies and Harnesses. In combat, the Hellvetic can decide to guide attacks against a comrade towards himself."
      ],
      [
        "Rules",
        "The Hellvetic diverts an attack against a comrade within his movement distance, taking the blow himself. Against melee attacks, he must succeed on a PSY+Reaction (4) roll; for ranged combat attacks, the Difficulty rises to (6). He gets +1D on the roll per Potential level. If the Hellvetic is in melee with the Trailblazer’s bayonet mounted, he can use the Triggers from the roll to counterattack using his Trailblazer’s bayonet."
      ]
    ]
  },
  {
    "title": "IV. Infiltration",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "Information wins wars. Hellvetics committed to the Infiltration Doctrine are trained to mingle with civilians, finding subversive ringleaders and rebellious firebrands. They get close to the important people, and slowly build up a dossier of information to send back to the Alpine Fortress."
      ],
      [
        "Rules",
        "The Hellvetic is a master of subversion and lies. He gains +1D per Potential level on all CHA or PSY rolls to deceive others, along with an additional (1) Network per Potential level."
      ]
    ]
  },
  {
    "title": "V. Discipline",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics, Focus"
      ],
      [
        "Effect",
        "A Hellvetic’s mental and physical strength are only partly the result of his character or his equipment. Iron discipline can forge even the most cowardly man into a textbook soldier. Some of these eventually go even further."
      ],
      [
        "Rules",
        "The Hellvetic can convert Triggers from any Attack or Defense rolls into Ego Points, up to a limit equal to the Potential Level."
      ]
    ]
  },
  {
    "title": "VI. Morale",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "Any battle can be won if enough bodies are thrown against the enemy. Only when outnumbered does the Hellvetic soldier truly prove his worth."
      ],
      [
        "Rules",
        "Hellvetics gain +1D Mental Defense per Potential level when outnumbered."
      ]
    ]
  },
  {
    "title": "VII. Recovery",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics, PSY+Reaction 8"
      ],
      [
        "Effect",
        "Some Hellvetics specialize in getting wounded comrades off the battlefield before it’s too late. Behind the protection of their Tunnel Shields they race across an open field straight into the sniper fire, providing cover for their fellow soldiers and rescuing them from certain death."
      ],
      [
        "Rules",
        "After rolling initiative, a Hellvetic using a Tunnel Shield may conduct a retreating maneuver. He won’t be able to Attack during this Combat Round but his Passive Defense is raised by (1) per Potential level and he adds +1D to his Active Defense per Potential level. Furthermore, by sacrificing all his Actions for this Round, he may expand his Passive Defense bonus to (1) willing comrade per Potential level. The comrade must stay in close proximity of the Hellvetic bearing the Tunnel Shield, and also won’t be able to Attack during his turn."
      ]
    ]
  },
  {
    "title": "VIII. Heavy Duty",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics, Fortress Sentinel, AGI+Navigation 8, PSY+Reaction 8"
      ],
      [
        "Effect",
        "A Heavy Duty Harness is a masterpiece of technology. It is a walking fortress, that can turn into a devastating battle armor when worn by a skilled Hellvetic. Some Sentinels navigate Heavy Duty Harnesses with such precision that they can withstand a brawl with a renegade AMSUMO unit."
      ],
      [
        "Rules",
        "The Heavy Duty Harness fits like a second skin. While operating the bulky exoskeleton, the Hellvetic adds (1) Success per Potential level to any BOD roll. At Potential level 2 the Hellvetic is so skilled the penalty from using the Harness in close combat drops to -1D. At level 3 he uses the strength of the suit to its fullest extent, and the penalty is fully negated."
      ]
    ]
  },
  {
    "title": "IX. Alpine Soul",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics, BOD+Athletics 6, BOD+Stamina 6"
      ],
      [
        "Effect",
        "The life in the mountains of Hellvetica has enhanced the soldiers endurance, made him a sure-footed climber and alpine athlete. He feels no fatigue in high altitudes nor is he afraid of heights. Instead, he balances across cliffs and ridges without experiencing vertigo, and keeps his breath even in oxygen depleted environments. When he falls, he makes sure to land on his feet."
      ],
      [
        "Rules",
        "The Hellvetic has learned how to mitigate the perils of falling from great heights. Any falling Damage is reduced by (1) per Potential level. Additionally, in mountainous environments he adds +1D per Potential level to any BOD+Stamina and BOD+Athletics rolls."
      ]
    ]
  },
  {
    "title": "X. Demolitions",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics, Sapper, AGI+Crafting 6, INT+Science 6"
      ],
      [
        "Effect",
        "Sappers don’t just blow stuff up. They detonate their payloads with mathematical precision. With just enough time to plan ahead, they can collapse cliffs, cause landslides or chain reactions that level entire city districts."
      ],
      [
        "Rules",
        "When planting explosives of any kind, the Sapper may roll a Combination of AGI+Crafting and INT+Science against a Difficulty of (4). The Difficulty is lowered by (1) for each point in the Potential beyond level 1. He may increase the Damage of the bomb by (1) per Success, and (2) for every Trigger acquired in the Combination roll. Before the roll, however, he must choose if the blast radius will be impacted by the raised Damage as well. Additionally, the character adds +1D per Potential level when defusing explosive devices."
      ]
    ]
  },
  {
    "title": "XI. Austerity",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "No other Cult can get so far with so little. Hellvetics are strict when it comes to their austerity. Some take the doctrine to the next level and impress their superiors by completing missions without abusing the limitations of their equipment. Such spartanic soldiers are awarded with great respect and can receive access to equipment that isn’t normally available to their rank."
      ],
      [
        "Rules",
        "Hierarchy isn’t everything. Austerity is. Once per month per Potential level, the Hellvetic may use Renown instead of Resources when asking the Alpine Fortress for a particular piece of equipment. The same rules for acquisition apply, except that if the equipment is lost or wasted the character suffers a loss of (1) Renown."
      ]
    ]
  },
  {
    "title": "XII. Sentinel",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics, Focus, AGI+Projectiles 8, INS+Perception 8"
      ],
      [
        "Effect",
        "The snipers of the Hellvetics are masterful sharpshooters. Clad in white and covered in snow they lay waiting out in the open, often hundreds of meters away from their target. Their breath goes shallow and their vision sharpens. With the pull of the trigger they end the lives of their prey with a single well-aimed shot."
      ],
      [
        "Rules",
        "If the target is unaware of his presence, the Hellvetic prepares for his kill-shot. Each consecutive Combat Round he spends taking aim undisturbed he must invest (1) Ego Point. For each Ego Point invested, he adds +2D to his AGI+Projectiles roll in order to hit the target. If someone intervenes or if he does something other than aiming before the gun is fired, the invested Ego Points and the bonus are lost. The character may never add more dice to the roll than his Potential level x2."
      ]
    ]
  },
  {
    "title": "XIII. Hellvetic Honor",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "The Hellvetics are mercenaries. When they return from their missions, they bring back plenty of loot collected during their deployment in the field. Those who share their bounty with comrades and fellow soldiers gain the trust of the battalion."
      ],
      [
        "Rules",
        "In the Alpine fortress, combat isn’t the only source of glory. After a mission report, every time the Hellvetic gains (1) Resources, he may also choose to raise Authority, Renown or Allies. He also gains (1) point in the chosen Background. Background points added via Hellvetic Honor cannot be raised above (3) at level 1, (4) at level 2 and (5) at level 3."
      ]
    ]
  },
  {
    "title": "XIV. No Man’s Land",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics"
      ],
      [
        "Effect",
        "Collecting intelligence in foreign territory is the key aspect of many Hellvetic Spotters. They need to find running water, stockpile food, navigate hostile environments, and make contact with natives to establish a supply network for themselves for the months to come."
      ],
      [
        "Rules",
        "A Spotter is never lost. Outside of the Territorial Regions, the character adds +1D per Potential level to any INS+Survival and INS+Orienteering rolls. Furthermore, every time he gains a level in No Man’s Land his Network Background is automatically raised by (1)."
      ]
    ]
  },
  {
    "title": "XV. Dog of War",
    "fields": [
      [
        "Prerequisite",
        "Hellvetics, Rank 4, BOD+Toughness 10, BOD+Stamina 10, PSY+Faith/Willpower 10"
      ],
      [
        "Effect",
        "Some soldiers have been through hell and back. What they’ve seen with their own eyes stays with them forever. They’ve mastered their survival instincts and know how to escape death. Those who want to kill a dog of war better make sure he doesn’t come back to haunt them."
      ],
      [
        "Rules",
        "No matter how dreadful the situation, whether he is badly wounded or has exceeded his maximum Trauma, the old dog is not done for. Wisdom and Fate work together to grant the Hellvetic a furious comeback. By spending (10) unspent Experience points, the character recovers (1) Trauma per Potential level immediately."
      ]
    ]
  }
];
const equipmentGroups=[
  {
    "title": "Technology",
    "items": [
      {
        "title": "Binoculars",
        "description": "All binoculars of the Hellvetic Army are taken from stored Bygone stock. They are part of the standard issue of any flank bunker and Spotter.",
        "fields": [
          [
            "Specialty",
            "+4D to INS+Perception when watching from afar."
          ],
          [
            "Effect",
            "When watching from afar: INS+Perception +4D"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Value",
            "5200"
          ],
          [
            "Resources",
            "2"
          ]
        ]
      },
      {
        "title": "Radio Backpack",
        "description": "The Radio Backpack expands the active range of a Hellvetic squad to over 200 km. The soldier can contact the high command even at long distances from the Alpine Fortress or communicate with other users.",
        "fields": [
          [
            "Specialty",
            "None"
          ],
          [
            "Effect",
            "Radio communication, range (200) km"
          ],
          [
            "Encumbrance",
            "3"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Value",
            "6000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Forager Uplink",
        "description": "Foragers connect to the Alpine Fortress’s network with their handheld computers to order weapons and ammo. The uplink computer is a Bygone masterpiece tailor-made for military purposes: robust, long battery service life, the link to the central computer encrypted at the highest level. This makes the Chroniclers covet them. Maybe they could finally enter the digital core of the Alpine Fortress with a Forager Uplink.",
        "fields": [
          [
            "Specialty",
            "Raises the Resources for ammo, weapons, and food requisitioning to (6). Armor, vehicles, and add-ons are excluded."
          ],
          [
            "Effect",
            "Resources (6) for weapons, ammo, food"
          ],
          [
            "Encumbrance",
            "2"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "33000"
          ],
          [
            "Resources",
            "4"
          ]
        ]
      },
      {
        "title": "Pathfinder",
        "description": "The Pathfinder is a navigation computer with a 10-inch monitor, built-in compass, and receiver module. The maps stored in it hail from Bygone times, but markers pointing to post-Eshaton cities have been added. Political changes, risk warnings, geographical specialties, or movement vectors can be added via small platelets: the Pathfinder milestones.\n\nUsually, high-ranking Hellvetics hand out these milestones to Pathfinder users in preparation for a mission beyond the reaches of the Alpine Fortress.",
        "fields": [
          [
            "Specialty",
            "A Pathfinder gives +4D to INS+Orienteering."
          ],
          [
            "Effect",
            "INS+Orienteering +4D"
          ],
          [
            "Encumbrance",
            "2"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "15000"
          ],
          [
            "Resources",
            "4"
          ]
        ]
      },
      {
        "title": "Transponder Bracelet",
        "description": "The transmitter looks like a coiled cable. Spotters intertwine it with leather cords to camouflage it and wear it around their wrists or necks.\n\nFrom 20 paces away, a Pathfinder computer registers the transmitter signal and shows it as a small dot on the map. In this way, Hellvetics can identify Spotters who are disguised among the crowd, and spare them when attacking.",
        "fields": [
          [
            "Specialty",
            "None"
          ],
          [
            "Effect",
            "Bracelet detected by Pathfinder, range (20) m"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "580"
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
        "title": "Trailblazer",
        "image": "assets/trailblazer.webp",
        "alt": "Trailblazer",
        "description": "The Trailblazer is a Sagur-11 assault rifle with three 5.45 mm barrels. The ammunition can come from a magazine, but also from a bandolier. The butt stock can be turned into a bayonet, a combat knife, or a rifle bipod.\n\nIn the Alpine Fortress, every weapon is regularly checked with the help of an interface to both control the ammunition use and cleaning cycles, and to correlate firing dates with mission dates.\n\nA Trailblazer can be modded without using up slots. The bayonet can be quickly pulled from the butt stock and mounted to one of the barrels. Then the Trailblazer can be used as a melee weapon, using the same profile as a Stiletto.\n\nThe same is true for the rifle bipod. It is also pulled from the butt stock, swung out, and snapped into place under the barrels. The rifle can now be supported, which leads to +2D Handling if prone. The rifle bipod changes the balance, which causes -2D to Handling for firing when standing.\n\nWhen a Hellvetic rises through the ranks, he can reallocate his Trailblazer's slots: every soldier has their Trailblazer custom fit to them in the Alpine Fortress.",
        "fields": [
          [
            "Caliber",
            "HF-full jacket"
          ],
          [
            "Handling",
            "-"
          ],
          [
            "Distance",
            "30 / 120"
          ],
          [
            "Damage",
            "11"
          ],
          [
            "Magazine",
            "35"
          ],
          [
            "Qualities",
            "Smooth Running (3T), Salvoes (3)"
          ],
          [
            "Encumbrance",
            "2"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "18000"
          ],
          [
            "Resources",
            "-"
          ]
        ]
      },
      {
        "title": "Stubbed Trailblazer",
        "description": "The Special Detachment also uses a lighter, stubbed variety of Trailblazers. Their range is much shorter, but due to their construction, they are perfectly suited for special missions indoors. They can be used with one hand.",
        "fields": [
          [
            "Specialty",
            "None"
          ],
          [
            "Caliber",
            "HF-full jacket"
          ],
          [
            "Handling",
            "-"
          ],
          [
            "Distance",
            "15 / 60"
          ],
          [
            "Damage",
            "11"
          ],
          [
            "Magazine",
            "20"
          ],
          [
            "Qualities",
            "Smooth Running (2T)"
          ],
          [
            "Encumbrance",
            "2"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "14000"
          ],
          [
            "Resources",
            "4"
          ]
        ]
      },
      {
        "title": "Explosives",
        "description": "The minerals and chemicals needed to produce explosives are mined from the mountain, delivered by Neolibyans, or ordered in the Protectorate. They are refined deep within the mountain. The Hellvetics arsenal is awe-inspiring. Spread over hundreds of bunkers in all Territorial Regions, it awaits the army of Sappers and Genies. In combat, the Hellvetics use mainly plastic explosives that can be easily mounted to targets and activated via timers or remote detonators. For tunneling, the Hellvetics use explosives in rods that are pressed into the rock with high thrust.",
        "fields": [
          [
            "Specialty",
            "Hellvetics can access any explosives and detonators they want with their Resources. For a Soldier, however, it is considered a waste to leave the Alpine Fortress with more than (2) charges of explosives. For Sappers, the limit is (4) charges."
          ],
          [
            "Damage",
            "16"
          ],
          [
            "Magazine",
            "1"
          ],
          [
            "Qualities",
            "Thunder Strike, Explosive"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Slots",
            "-"
          ],
          [
            "Value",
            "800"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      }
    ]
  },
  {
    "title": "Ammunition",
    "items": [
      {
        "title": "High-Frequency Full Metal",
        "description": "The standard ammunition. Fired from all three barrels with a high rate of fire.",
        "fields": [
          [
            "Trailblazer Damage",
            "11"
          ],
          [
            "Trailblazer Distance",
            "30 / 120"
          ],
          [
            "Stubbed Damage",
            "11"
          ],
          [
            "Stubbed Distance",
            "15 / 60"
          ]
        ]
      },
      {
        "title": "High-Frequency Hollow-Point",
        "description": "Upon hitting a target, the bullet expands and tears large wounds: (+2) Damage. However, the penetration is reduced: for Armor rating (3) or more the Damage total is halved.",
        "fields": [
          [
            "Trailblazer Damage",
            "14"
          ],
          [
            "Trailblazer Distance",
            "30 / 120"
          ],
          [
            "Stubbed Damage",
            "14"
          ],
          [
            "Stubbed Distance",
            "15 / 60"
          ],
          [
            "Special",
            "+2 Damage; against Armor rating (3+) total Damage is halved"
          ]
        ]
      },
      {
        "title": "Shotgun Shell",
        "description": "All three barrels can be loaded with Caliber 12 and fired separately. Reloading takes (1) Round per barrel.",
        "fields": [
          [
            "Trailblazer Distance",
            "10 / 40"
          ],
          [
            "Damage",
            "10"
          ],
          [
            "Magazine",
            "3"
          ],
          [
            "Qualities",
            "Scatter"
          ]
        ]
      }
    ]
  },
  {
    "title": "Armor",
    "items": [
      {
        "title": "Tunnel Shield",
        "image": "assets/tunnel-shield.webp",
        "alt": "Tunnel Shield",
        "description": "The Tunnel Shield is primarily used by Sappers as mobile cover for demolitions. The shield plates are collapsible to make transport in the tunnels easier.",
        "fields": [
          [
            "Specialty",
            "The Tunnel Shield offers (+2) Passive Defense and +4D to Active Defense. However, it is very unwieldy and heavy (encumbrance +3). Only 1-handed weapons can be used when carrying this shield, and all attacks are made with a penalty of -2D."
          ],
          [
            "Defense",
            "+4D / +2"
          ],
          [
            "Attack",
            "-2D"
          ],
          [
            "Encumbrance",
            "3"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Slots",
            "-"
          ],
          [
            "Value",
            "450"
          ],
          [
            "Resources",
            "2"
          ]
        ]
      },
      {
        "title": "Harness",
        "description": "The Hellvetic Harness is the second-most important piece of equipment for soldiers after the Trailblazer. In the time when the Hellvetics bridged the Reaper’s Blow, this armor was perfected, and another function was added: heat dissipation. Today, it doesn’t only offer good ballistic protection, but also compensates for the infernal fires of the passages close to the Reaper’s Blow.",
        "fields": [
          [
            "Specialty",
            "The armor plates of the Harness can be hardened and enameled in the fortress plants. The finish increases the Armor rating, but also the risk of the plates breaking (permanently (-1) Armor rating after (12) points of Damage with one hit; see “Brittle” Quality)."
          ],
          [
            "Armor Rating",
            "5"
          ],
          [
            "Qualities",
            "Fire Resistant (8)"
          ],
          [
            "Encumbrance",
            "3"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "4800"
          ],
          [
            "Resources",
            "-"
          ]
        ]
      },
      {
        "title": "Recon Harness",
        "description": "With the Recon and infiltration variety, the ceramic armor plates of the regular Harness are replaced by flexible, fiber-hardened mesh. The armor is lighter and tighter. Clothing can be worn over it as camo.",
        "fields": [
          [
            "Specialty",
            "If a stranger tries to see through the camo, he must make an Action roll on INS+Perception (5) (see “Camo” Quality)."
          ],
          [
            "Armor Rating",
            "3"
          ],
          [
            "Qualities",
            "Camo (5C)"
          ],
          [
            "Encumbrance",
            "2"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "3500"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Heavy Duty",
        "description": "The Heavy Duty Armor is a modular exoskeleton clad in Harness plates. It is custom-fitted for every mission.",
        "fields": [
          [
            "Specialty",
            "An exoskeleton gives its wearer BOD+Force +3D. All attacks and attempts to use Active Defense, as well as fine motor Actions, are at -2D. Modules can be combined as long as they fit into the armor’s slots."
          ],
          [
            "Armor Rating",
            "7"
          ],
          [
            "Qualities",
            "Massive (9), Fire Resistant (8)"
          ],
          [
            "Encumbrance",
            "4"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Slots",
            "3"
          ],
          [
            "Value",
            "8000"
          ],
          [
            "Resources",
            "4"
          ]
        ]
      },
      {
        "title": "Heavyweight",
        "description": "The heavyweight module augments the Harness with heavy servomotors on the arms and legs, giving its wearer BOD+Force +6D (2 Slots).",
        "fields": [
          [
            "Effect",
            "BOD+Force +6D, needs 2 Slots"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "6800"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Cutter",
        "description": "The Hellvetic’s hands are encased in hydraulic steel scissors that cut through sheet metal and iron. They are extremely powerful, but too slow to serve as an attack weapon. Obstacles are attacked with a power of (20) points of Damage per Round. However, the blades need grip, which is why steel hatches are immune to them (3 Slots).",
        "fields": [
          [
            "Effect",
            "No attack tool; (20) points of Damage per Round to obstacles; 3 Slots"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Value",
            "1200"
          ],
          [
            "Resources",
            "2"
          ]
        ]
      },
      {
        "title": "Cooler",
        "description": "The armor plates are riddled with small tubes that dissipate heat. Ventilators swirl heat accumulation. The Soldier can enter even the depths of the Reaper’s Blow without fear of incineration (1 Slot).",
        "fields": [
          [
            "Effect",
            "Can withstand extreme heat; 1 Slot"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "5000"
          ],
          [
            "Resources",
            "4"
          ]
        ]
      },
      {
        "title": "Arc Welder",
        "description": "An arc welder is attached to the main hand. The gas supply leads to a tank on the back beneath the armor. While the arc welder can be used in melee, it is not recommended to go to war with it, for the tank is fragile: a direct hit (Aimed, Difficulty +2) with at least (4) Damage penetrates it and ignites the gas. The detonation destroys the exoskeleton: the soldier has no chance. Used as a tool, the arc welder does (15) points of Damage per Round to metals (3 Slots).",
        "fields": [
          [
            "Effect",
            "(15) points of Damage to obstacles; risk of tank being hit; detonation when at least (4) Damage; 3 Slots"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Value",
            "2000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Tunnel Driller",
        "description": "The Tunnel Driller is the biggest and most sophisticated add-on. To carry it, the shoulders and main arm have to be reinforced: stabilizers absorb vibration and change the kinetic energy to warmth. The drill is Petro driven, and the tank is carried on the back. Heavy Duty Harnesses with Tunnel Driller support rescue missions after cave-ins.\n\nThey break through rock and concrete with (10) points of Damage per Round but are completely unsuited for combat: -6D to attacks and Active Defense. The tank runs the same risk of danger as the one from the arc welder variety (3 Slots).",
        "fields": [
          [
            "Effect",
            "Concrete and rock: (10) points of Damage per Round; risk of tank being hit; 3 Slots"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Value",
            "1000"
          ],
          [
            "Resources",
            "2"
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
renderRank('soldier');
renderPotentials();
renderEquipment();
const navToggle=document.querySelector('#lorebook-nav-toggle'),sidebarScrim=document.querySelector('#sidebar-scrim');
const setSidebar=o=>{document.body.classList.toggle('sidebar-open',o);navToggle?.setAttribute('aria-expanded',String(o));};
setSidebar(matchMedia('(min-width: 761px)').matches);
navToggle?.addEventListener('click',()=>setSidebar(!document.body.classList.contains('sidebar-open')));
sidebarScrim?.addEventListener('click',()=>setSidebar(false));
document.querySelectorAll('.lorebook-sidebar a[aria-disabled="true"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
