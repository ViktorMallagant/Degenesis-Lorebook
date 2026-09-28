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
