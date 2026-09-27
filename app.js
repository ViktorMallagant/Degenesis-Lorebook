const ranks = {
  touched: {
    title: "1 - Touched",
    description: "Those who feel the calling can follow the Anabaptists for a while, no strings attached. Afterwards they can leave – or renew the covenant through baptism, start wearing the nose ring, and have three symbols tattooed on their forehead. They are now Anabaptists.",
    fields: [
      ["Prerequisite", "None"],
      ["Result", "He gets his three symbols tattooed on the forehead (Mental Defense +1D) and a ring through the nose to chain the soul to the body."],
      ["Equipment", "Long spade; grain (given to him by his gang, symbolizes the expansion of his Pneuma)"]
    ]
  },
  ascetic: {
    title: "2 - Ascetic",
    description: "Paradise is dead. The Ascetics water the dusty ground with their sweat, tear rotting roots from it, and clear away stones. Where the Aberrant essence blighted the land yesterday, tomorrow healthy wheat shall sway in the wind. With willpower and a brave heart, they reclaim the wasteland. They incite the people to give their best, lead by glorious example, and never give up.",
    fields: [
      ["Prerequisite", "BOD+Stamina 6; CHA+Conduct 4; PSY+Faith/Willpower 6"],
      ["Result", "The Ascetic inspires the people: when dealing with providers and farmers, he gets +1D to CHA+Leadership and CHA+Conduct."],
      ["Equipment", "Seeds (the Ascetic gathers seeds from the strongest plants and buries them in places he considers important and holy)"]
    ]
  },
  orgiastic: {
    title: "2 - Orgiastic",
    description: "On the battlefield, the Orgiastics leave behind everything that humankind has assembled in the way of mortal excess over the millennia. Elysian oils burn through their veins like holy wildfire, and their senses are painfully clear. They shout their anger at their enemies and feel their urges rage out of control. Then they attack. Orgiastics always go to extremes. While the Ascetics try to turn their world into Paradise, Orgiastics destroy the Demiurge’s world.",
    fields: [
      ["Prerequisite", "BOD+Toughness 4; BOD+Melee 6; INT+Focus/Primal 6"],
      ["Result", "If the Orgiastic travels with his gang, he gets +1D to his Attack roll, but also -1D to Active Defense. An Orgiastic only knows extremes: if he follows this rule, he gets +1D to PSY+Faith or PSY+Willpower. If he deviates and makes halfhearted decisions or relativizes earlier ones, the bonus becomes a penalty of -1D. Wherever he may go, his gang of comrades will always be his family ((+1) Allies)."],
      ["Equipment", "Bidenhander"]
    ]
  },
  elysian: {
    title: "3 - Elysian",
    description: "They have developed a deep understanding of the creation, and can track down and destroy the Sepsis. From herbs—some benign, some deadly—their presses produce the oil that turns the Orgiastics into fearless fighters, taking away pain and unleashing strength. They kneel next to the fallen on the field and bandage their wounds or anoint them for their journey into the divine Pneuma.",
    fields: [
      ["Prerequisite", "INT+Medicine 8; INT+Legends 6; INT+Science 6; Renown 2; Secrets 2"],
      ["Result", "The Elysian cleanses his mind through asceticism and his body through Elysian oils: should he encounter Sepsis, he gets +2D to resist. The Elysian knows how to compose herbs and earth to create the well-known Elysian oils. If he asks for oils in an Anabaptist Enclave, he gets (+2) Resources to do so. Spitalian Famulancers could be tasked to assist the Elysian to learn more about natural healing."],
      ["Equipment", "Mortar and pestle; healing herbs; stones from the Adriatic Sea (the Adriatic Sea is considered the only identified edenic river so far: PSY+Faith +1D, no bonus to PSY+Willpower)"]
    ]
  },
  furor: {
    title: "3 - Furor",
    description: "The Furors have distinguished themselves by fearlessly fighting countless battles and radiating emanations. Their adamant faith is undisputed, which opens the way to Cathedral City’s catacombs for them. Down there are the forbidden arsenals: row after row of corrupted weapons covered in age-old dirt. Some of them were stored here when Cathedral City was still infested by the Chroniclers. The Baptists allow no one but the Furors to wield these weapons in battle. Most of them choose Spitfires: the burst of flame devours the spores of Sepsis that otherwise well up when slaughtering Aberrants.",
    fields: [
      ["Prerequisite", "BOD+Melee 8; PSY+Faith/Willpower 8; Renown 4"],
      ["Result", "The Furor may enter the catacombs and arsenals of Cathedral City and take whatever he needs. If he wants a weapon, he’s no longer restricted to the Cult weapons but can choose from the general list. If he uses a Spitfire, he gets a +1D bonus to the Attack roll.\n\nA Furor can muster a gang of Orgiastics (number of volunteers equals his Renown x2) and start a crusade. The gang will follow him into uncharted regions to win the people living there over for Cathedral City. If the crusade is successful, an Anabaptist settlement arises—and the Furor is entitled to a part of the taxes. Depending on the size of the Enclave, his Resources rise by (+1) to (+3)."],
      ["Equipment", "Spitfire"]
    ]
  },
  emissary: {
    title: "4 - Emissary",
    description: "They have mortified their flesh and have come out of this torture rich in emanations. Their mind is clear: they see the threads of life beginning in Cathedral City, feel the gossamer woven by the Anabaptists. One day, it’ll turn into Paradise once again, and divine Pneuma will free the people from their mortal shell.\n\nUntil then, however, they need to find allies, coordinate campaigns and create refuges in the wasteland. Emissaries speak for Cathedral City in councils, on panels, in front of the Clans, and in Justitian’s Senates. They carry the Baptists’ will into the land. Their influence is great – only one word and a gang of Orgiastics is at their side.",
    fields: [
      ["Prerequisite", "PSY+Domination 8 or CHA+Conduct 8; CHA+Negotiation 6; PSY+Faith/Willpower 10; Authority 4; Renown 3"],
      ["Result", "Ever since Cathedral City and the Cluster signed a temporary peace treaty, the Chroniclers have been ordered to treat the Emissaries with respect: the Emissary gets +2D to CHA+Negotiation when dealing with Chroniclers. He is a respected guest of the Judges and serves as a contact in all issues related to the alliance. Hellvetics grant him free passage through the Alpine Fortress. If a Spitalian has to decide whom to look after in battle, the Emissary would be his first choice. Even the Clans treat him with respect."],
      ["Equipment", "Any melee weapon, upgraded using 2 slots"]
    ]
  },
  sublime: {
    title: "4 - Sublime",
    description: "The common Anabaptist looks within himself for insights, lets the Seed take root and grow to be able to harvest more grains. But some are at the center of the prophecy themselves, are announced by emanations and signs. Interpreters of the script explore the old texts for such instances, looking for clues, collecting books, producing diagrams, and asking Counselors and Baptists. The chosen one, though, is above the fray. Protected by Furors, he waits for the Baptists to decide: is he a common man or a manifested emanation, a Sublime?\n\nCathedral City has known only a few hundred Sublimes throughout her long history. These chosen ones are like Saints: they are revered and worshiped. Some disappear into the mountains to become grains of Seed in the heads of Anabaptists. Others attack the enemy lines like forces of nature, burning up in the fires of their passion. When they call for a crusade, thousands follow.",
    fields: [
      ["Prerequisite", "INT+Focus/Primal 10; Allies 4; Renown 6"],
      ["Result", "The Counsel of Emanations considers him a manifested emanation as foretold in one of the countless prophecies. There are no closed doors for the Sublime in Cathedral City—his Resources rise to (6)—but his every step is being watched. Emissaries follow him and write down every deed and every sentence, and the Counsel of Emanations watches his behavior in keeping with the traditions. One word of the Sublime is enough to get thousands of Anabaptists moving."],
      ["Equipment", "None"]
    ]
  },
  counselor: {
    title: "5 - Counselor",
    description: "The Baptists’ bliss shines on the Counselors, they move amongst them, eat with them, and receive the word like a vocation: they will form the next generation of Baptists. Until that time, they lead the Council of Emanations and listen to the description of dreams and prophecies. They judge their meanings for the Cult and for the Anabaptist blessed with them.",
    fields: [
      ["Prerequisite", "CHA+Expression 10 or PSY+Cunning 10; Secrets 3; Authority 5; Renown 4"],
      ["Result", "The Counselor is considered the voice and potential successor of a Baptist. As such, he is stuck in a web of intrigues—or is spinning his own one. He decides whose emanations are recognized and who rises in the ranks. He is beguiled by sycophants: if he gets involved with them, his Resources temporarily rise by (2). At the same time, the risk of the Baptists realizing whom they invited to their side rises."],
      ["Equipment", "None"]
    ]
  },
  acheron: {
    title: "5 - Acheron",
    description: "The rules of the Cult were made for common people, not for Sublimes: they can choose paths that even a Baptist wouldn’t dare to take. One of these paths leads away from the Elysian rivers down to the rivers of the dead, Styx and Acheron.\n\nThere is no cinnamon and cardamom on their banks, but Sepsis and Burn. To use their powers means opening your own heart to the corruption, means separating yourself from humanity to attack enemies like a glaring, searing star. An Acheron is feared, his way of life cursed.\n\nStill, his sacrifice is accepted. It fills an Anabaptist’s heart with pride and is a warning to him at the same time.",
    fields: [
      ["Prerequisite", "BOD+Melee 10; AGI+Mobility 10; Allies 5"],
      ["Result", "The Acheron is closer to the enemy than to his own friends. His combat power is legendary, and not always due to the Elysian streams alone, but also to the rivers of the dead, Acheron and Styx. While he will never be able to enter Paradise, he will pave the way there for tens of thousands. He receives the forbidden oils from his allies, among the few people who know that he is an Acheron. Baptists and Counselors are the Acheron’s principals. His missions are devised behind closed doors and are top-secret, whether it is the assassination of a Jehammedan Shepherd or the kidnapping of a highranking Fragment. Outside the Cult, an Anabaptist will only confess to being an Acheron under dire straits or in critical situations. To do so, he presents two coins bearing the Anabaptist cross and so forces his counterpart to fight by his side."],
      ["Equipment", "Forbidden oils (Styx or Acheron)"]
    ]
  },
  baptist: {
    title: "6 - Baptist",
    description: "Eight Baptists lead the Anabaptists. Each one commands thousands of Anabaptists, sends dispatches out into the land, and decides on plans for war and destruction. However, the Baptists do not spend their old age sitting around a map of Europe pushing around tokens: the Orgiastics amongst them still wield the sword and the Ascetics still wield the hoe. Only very few of them rise into the divine Pneuma from their bed.",
    fields: [
      ["Prerequisite", "One of the eight Baptists has to step down; Authority 6; Renown 6; Secrets 4"],
      ["Result", "Every Baptist is a shining example to his Cult, still riding into battle or tilling the fields. He is surrounded by Furors and Elysians, and the strongest oils are reserved for him. Together with the other seven Baptists, he leads the Cult."],
      ["Equipment", "None"]
    ]
  }
};

const potentials = [
  {
    title: "I. Zealot",
    fields: [
      ["Prerequisite", "Anabaptists"],
      ["Effect", "Through austerity, daily meditation, and gallons of blessed water, the Anabaptist cleanses his body, ﬁghting his carnality and freeing the Pneuma within. On the battleﬁeld, his body is a shield, the pain only an indicator of damage taken, but no longer a problem."],
      ["Rules", "All Trauma penalties are reduced by (1) per Potential level."]
    ]
  },
  {
    title: "II. Killing Joke",
    fields: [
      ["Prerequisite", "Anabaptists"],
      ["Effect", "The enemy raises his spear, expecting the blade to come crashing down on him. But the Anabaptist whirls his sword around, pushing into his enemy and hitting him over the head with the pommel. The Killing Joke is a special sword attack against an unarmored vital body part of an enemy such as the head, chest, or abdomen."],
      ["Rules", "The Anabaptist makes an Attack roll at -5D, with the penalty reduced by 1D per Potential level. The Anabaptist twists his sword and hits with the pommel or crossguard. If the attack succeeds, the opponent immediately loses all Ego Points and falls unconscious. If the attack fails, the Anabaptist is unbalanced and is treated as unarmed for (1) Combat Round, he may not attack until he has recovered."]
    ]
  },
  {
    title: "III. Pneuma",
    fields: [
      ["Prerequisite", "Anabaptists, Focus"],
      ["Effect", "If the wound is deep enough, more than just blood and gore gushes from the body. Their flesh separates from their soul, and pure godly Pneuma seeps from the rotten body. Only a small step towards Paradise, but the Anabaptist feels it strengthening, energizing and uplifting him."],
      ["Rules", "If the Anabaptist deals (5) Damage or more in a single attack, he recovers (1) Ego Point instantly. The Damage threshold is lowered by (1) per Potential level."]
    ]
  },
  {
    title: "IV. Realm of Emanations",
    fields: [
      ["Prerequisite", "Anabaptists, PSY+Faith 8"],
      ["Effect", "The Anabaptist’s faith is a star burning in the darkness. But wherever its light shines, it reveals rotten lumps of blackness, the primal fear, the Psychonauts, writhing bodies in breeding cusps, terrible images filling his mind’s eye. The nights are the worst. The Anabaptist falls asleep as if trapped in a pit of thick, black tar. But the nightmares can’t hurt him during the day."],
      ["Rules", "The Dushani suggestions don’t take hold, the Pheromancer’s intoxicating scent fails to sway his mind, the confusing kaleidoscopes of the Psychokinetics splinter like thin glass before the Anabaptist’s scrutinizing eyes. If the Anabaptist Defends against a Psychonautic Phenomenon and manages to roll at least (1) Trigger, he rolls an additional number of dice equal to the Potential level. The highest dice roll is added directly as Successes to his Defense roll. For example, if he rolls 1, 4, and 5 at level 3, he gets an additional (5) Successes."]
    ]
  },
  {
    title: "V. Torchbearer",
    fields: [
      ["Prerequisite", "Anabaptists, at least Elysian or Furor"],
      ["Effect", "His proximity to the enemy has unhinged the Anabaptist’s senses. He feels the corruption all around with the precision that a Mollusk could never hope to reach."],
      ["Rules", "His mind lifts Psychonauts, Leperos and spore fields from the murky darkness into the blinding light. When attempting to find Aberrants and their spawn, he adds +1D per Potential level to INS+Perception."]
    ]
  },
  {
    title: "VI. Fisherman’s Blood",
    fields: [
      ["Prerequisite", "Anabaptists, Primal"],
      ["Effect", "When the Jehammedans see the Anabaptists, they laugh and shout, “Fisherman’s child! Fisherman’s child!” How very clever. The Anabaptist only answers, “If you hit us, don’t we bleed, as well?” Still laughing, they nod. The Anabaptist grins, “But if we bleed, don’t we rip you apart?”"],
      ["Rules", "If the Anabaptist has taken more than 50% of his total Flesh Wounds+Trauma, he frenzies until the end of the combat. He has no restriction on the number of Ego Points that can be spent, but can no longer make Active Defense rolls. The Potential Fishermans Blood has only one level and can’t be upgraded."]
    ]
  },
  {
    title: "VII. Unleashed",
    fields: [
      ["Prerequisite", "Anabaptists, Furor, Primal"],
      ["Effect", "In battle, the Furor is a beast of unchained fury, covered in blood and gore and unstoppable in his thirst for revenge. His wrath accumulates in his hands and bursts from his body in one devastating attack."],
      ["Rules", "One single, well aimed blow can decide an entire fight. If a Furor wants to put all his anger in the balance, he must announce the use of Unleashed before the roll. For (3) Ego Points he can double the amount of Triggers rolled in his attack with BOD+Melee. The Anabaptist can only use Unleashed a number of times per day equal to his Potential level."]
    ]
  },
  {
    title: "VIII. Innocence",
    fields: [
      ["Prerequisite", "Anabaptists"],
      ["Effect", "People who are pure of heart are rare and pose no threat. With lowered gaze and hands raised in defense they wield their innocence like a protective shield. Damnation to all who still raise their hand against them in anger!"],
      ["Rules", "Innocence is a mental attack. The Anabaptists rolls INS+Empathy and gets +1D per Potential level. The opponent counters with his Mental Defense. If the Anabaptist wins, his opponent receives a penalty in D equal to the Triggers rolled +1 to all physical combat Actions against the character until the end of the scene. Innocence remains in effect for as long as the Anabaptist doesn‘t start a fight themselves."]
    ]
  },
  {
    title: "IX. Black River",
    fields: [
      ["Prerequisite", "Anabaptists, Acheron, PSY+Domination 8"],
      ["Effect", "The Acheron has learned to speak in the twisted tongue of Exalt. The black river flows from his mouth, drowning the listener in its rapids. This forbidden memetic technique is only taught in the darkest circles of the Cult."],
      ["Rules", "The Acheron knows a specific set of phonemes that speak directly to the soul. He may attempt to influence an opponent’s behavior by uttering the sounds of the Black River. As an Action, the character adds +1D per Potential level to a PSY+Domination roll against each opponent’s Mental Defense. If the Defense fails, every Trigger obtained by the Acheron subtracts 1D from the opponent’s rolls for the next Combat Round."]
    ]
  },
  {
    title: "X. South of Eden",
    fields: [
      ["Prerequisite", "Anabaptists, Sublime, BOD+Melee 8, PSY+Deception 8"],
      ["Effect", "Among Anabaptists, one of the most sinister bidenhander attacks is commonly referred to as South of Eden. This technique is taught to Sublimes who display extraordinary swordsmanship and are skilled at deceiving their opponents in the heat of battle."],
      ["Rules", "In order to apply the South of Eden combat maneuver, the Anabaptist needs two Actions in the same Combat Round using his bidenhander. With the first, he feints by rolling PSY+Deception against his target’s INS+Perception. If he fails, his second Action is lost and he needs to reposition himself. If he succeeds, however, he adds +1D per Potential level to a BOD+Melee roll with an added Difficulty of (+4), Terrifying (2), Impact (4T), and all Damage considered Fatal. The strike is murderous and splits the opponent in half."]
    ]
  },
  {
    title: "XI. God’s Grace",
    fields: [
      ["Prerequisite", "Anabaptists, Elysian, Faith"],
      ["Effect", "The Elysian is a medium. Pure Pneuma flows through his hands and his touch heals ailments and cleanses the spirit. Followers flock around him yearning for the redemption his touch offers."],
      ["Rules", "The Elysian is attuned to the paths of energy within the human body and capable of making the divine Pneuma flow again. Whenever the Elysian tries to heal someone with his knowledge and must make an INT+Medicine roll, he may instead add +1D per Potential level to a Combination of PSY+Faith and INT+Medicine. The Elysian may choose to heal Ego Points instead of Flesh Wounds this way."]
    ]
  },
  {
    title: "XII. Death Knell",
    fields: [
      ["Prerequisite", "Anabaptists, BOD+Toughness 10, PSY+Faith/Willpower 10"],
      ["Effect", "The sound of the Death Knell is the call of Paradise. But the Anabaptist knows that his time has not yet come and that he must remain chained to the material plane, until he faces the Demiurge in the Final Battle."],
      ["Rules", "For those willing to sacrifice, death must wait another day. Once hitting  maximum Trauma, he must choose one Attribute with a rating of at least (2). By sacrificing (1) point of this Attribute and lowering the Attribute’s maximum rating permanently, he may recover (1) Trauma per Potential level instantly."]
    ]
  },
  {
    title: "XIII. Rotten Apple",
    fields: [
      ["Prerequisite", "Anabaptists, Primal"],
      ["Effect", "The Anabaptist is surrounded by serpents. He can sense the lies dripping from the maw of the followers of the Demiurge. They reveal themselves to him like the flash of an Emanation, and he makes sure to cut these rotten apples from the tree of life."],
      ["Rules", "The Anabaptist instinctively knows when the Demiurge is speaking through one of his spawn. By rolling INS+Empathy +1D per Potential level against a opponent’s Mental Defense he can sense if he is being lied to. If he then rolls a successful Combination of INS+Empathy and INS+Primal and scores a minimum of (2) Triggers, his intuition alarms him according to his Potential level and lets him sense:\nLevel 1: Leperos, Drones\nLevel 2: Carriers of the Seed, Infiltrators\nLevel 3: Burners, Sleepers"],
      ["Notes", "Traitors of the Neognosis, prisoners of war, and other individuals labeled blasphemous by the Council of Emanations are all sentenced to purgatorial cleansing and hard labor in Severinus, the Anabaptists’ very own detention camp south of Cathedral City. Especially in the western Regions of the Protectorate where the Anabaptists share jurisdiction with Judges, convicted criminals never get to see Justitian’s infamous Cleft.\nInstead they’re marched south, where they are locked up deep within Severinus’ charred vaults, waiting for the Demiurge to be cast out from their very souls. The exorcisms are conducted by an order of local Elysians called the Sisters of Grace and dreaded for their cruel methods of torture."]
    ]
  },
  {
    title: "XIV. Demiurge’s Bane",
    fields: [
      ["Prerequisite", "Anabaptists, Focus"],
      ["Effect", "The Anabaptist has faced the Demiurge in his many shapes and forms. He knows where to strike the great Deceiver and make it count."],
      ["Rules", "One does not simply fight the Demiurge. By carefully studying the Psychonaut’s anatomy and with the help of the divine, the Anabaptist strikes at the very corruption encased in its flesh. For every (3) points of Damage inflicted upon a Psychonaut, the target also loses (1) point of spore infestation. At Potential level 2 the ratio is lowered to (2):(1), at level 3 to (1):(1)."]
    ]
  },
  {
    title: "XV. Paradise Lost",
    fields: [
      ["Prerequisite", "Anabaptists, Faith"],
      ["Effect", "The Anabaptist knows how to draw the eye of God upon his actions. There is no middle ground under such scrutiny. If he fails, his entry into Paradise is lost."],
      ["Rules", "Paradise Lost can be used once a day per Potential level. The Anabaptist must sacrifice (1) Ego to initiate the Potential and declare its use before a roll. For this roll, 5’s are considered additional Triggers but 2’s are counted as 1’s."]
    ]
  }
];

const equipmentGroups = [
  {
    title: "Weapons",
    intro: null,
    specialty: null,
    items: [
      {
        title: "Long Weapons",
        description: "Although not unique weapons to the Antibaptists, using a long weapon such as a hoe, flail, spade, pitchfork, spear, etc. grants an Antibaptist a special bonus, as if they were wearing talismans that might be worn by other Cults.",
        fields: [["Qualities", "Long weapons are hoes and rakes, scythes, flails, and pitchforks. They are dangerous in crowds but will always lose against steel blades in one-on-one combat. Still, the reminiscence to the rules of the Cult bring an Anabaptist carrying such a weapon +1D to PSY+Faith/Willpower"]]
      },
      {
        title: "War Flail",
        image: "assets/War-Flail.gif",
        alt: "War Flail",
        description: "These are unique to Antibaptists and have the same quality found above in addition to what is listed.",
        fields: [
          ["Handling", "-1D"], ["Distance", "2"], ["Damage", "2+F/2"], ["Magazine", "-"],
          ["Qualities", "Blunt, Talisman"], ["Encumbrance", "3"], ["Tech Level", "I"], ["Slots", "1"],
          ["Value", "30"], ["Resources", "1"]
        ]
      },
      {
        title: "Bidenhander",
        image: "assets/Bidenhander.gif",
        alt: "Bidenhander",
        description: "While a hoe in the fist might conjure up the spirit of Rebus and warm the soul, the Orgiastics rather rely on 7 feet of forged and sharpened steel. Their Bidenhanders are enormous and hard to wield, absurd weapons for an absurd war. Some Bidenhanders have spring mechanics in the heft that make a hidden knife jump forth.",
        fields: [
          ["Handling", "-2D"], ["Distance", "2"], ["Damage", "8+F/3"], ["Magazine", "-"],
          ["Qualities", "“Impact (2T)” And if the Orgiastic cannot control the weapon at once, he can swing out the knife and fight with it in the next Round (Using the Knife weapon profile). However, he must drop his Bidenhander."],
          ["Encumbrance", "3"], ["Tech Level", "II"], ["Slots", "2"], ["Value", "1400"], ["Resources", "-"]
        ]
      },
      {
        title: "Spitfire",
        image: "assets/Spitfire.gif",
        alt: "Spitfire",
        description: "Spore clouds and the plagues of the Aberrant cannot be fought with a sword. A burst of fire from a Spitfire, though, reduces them all to just ashes in the wind. The Ascetics may baptize the dry soil with water, but the Orgiastics baptize their enemies with fire.",
        fields: [
          ["Caliber", "Petro"], ["Handling", "-2D"], ["Distance", "3 / 10"], ["Damage", "12"], ["Magazine", "15"],
          ["Qualities", "Fire Hazardous, A Spitfire is an awe-inspiring weapon, but it has a weakness: the tank is under pressure; an aimed shot (Difficulty +2) dealing at least (4) Damage penetrates it. Gas leaks out and it depressurizes. Either from the Spitfire’s own ignition flame or from a rifle heated up from firing, the gas ignites, the air burns, and the tank explodes. An Orgiastic who notices that his Spitfire was damaged has 1D Rounds of time before the tank on his back goes up. The Game Master rolls for the time but doesn’t tell the Player. The Orgiastic can drop the Spitfire and tank and flee. The detonation Damage is (14) points. "],
          ["Encumbrance", "3"], ["Tech Level", "III"], ["Slots", "2"], ["Value", "3800"], ["Resources", "3"]
        ]
      }
    ]
  },
  {
    title: "Elysian Oils",
    intro: "The Elysian oils are named after the four rivers of Paradise: Perat, Hiddekel, Gehon, and Pischon. According to legend, these rivers carried various valuable seeds, barks, and pips like cinnamon and coriander from the Garden of Eden. The paradise fertilized the world. Today, the Elysians gather spices and roots, press them, and extract an oily essence. Through several cleaning and compression processes, they increase the quality and finally mix the essences according to the ancient recipes to produce the four well-known and appreciated Elysian oils. But there are also other blends on the market. The most notorious ones are Styx and Acheron, named after two rivers in the realm of the dead. They are mixed with Burn, a damnable abuse. No Anabaptist should be caught with these oils.",
    specialty: "The Elysian oils are available in 3 qualities (level 1-3). The quality of Acheron and Styx is rolled at use (1-2 means level 1, 3-4 level 2, and 4-5 level 3).",
    items: [
      {
        title: "Perat",
        description: "Perat is the most common Elysian oil. Both Orgiastics and Ascetics receive it, and it accompanies them in the first years.",
        fields: [["Qualites", "It inspires the mind and sharpens the senses: +1D to PSY+Faith/Willpower and INS+Perception per level for (4) hours."], ["Encumbrance", "-"], ["Tech Level", "II"], ["Value", "50 x Level"], ["Resources", "1 / 2 / 3"]]
      },
      {
        title: "Hiddekel",
        description: "The Furors receive Hiddekel like a divine gift. Massaged into the skin of the skull, it ignites their aggressiveness and drive, raises them to be avatars of the fight against the Demiurge.",
        fields: [["Qualites", "+1D to INS+Primal (no effect on Focus) and +1D to PSY+Reaction per level for the next (4) hours."], ["Encumbrance", "-"], ["Tech Level", "II"], ["Value", "100 x Level"], ["Resources", "2 / 3 / 4"]]
      },
      {
        title: "Gehon",
        description: "Pain and weariness are vaporized in the fire of the Gehon oil. Deeper, there is a sea of contemplation and concentration.",
        fields: [["Qualites", "+1D per Level to INT+Focus, penalties due to Trauma are reduced by (1) per level. Works for (4) hours."], ["Encumbrance", "-"], ["Tech Level", "II"], ["Value", "100 x Level"], ["Resources", "2 / 3 / 4"]]
      },
      {
        title: "Pischon",
        description: "The trees on the banks of the Pischon are the holiest ones for the Baptists: in a vision, Rebus saw the tree of enlightenment, saw falling leaves that circled through the air and softly landed on the water.\n\nThe ingredients of the Pischon oil are rare and valuable, and the mixture is only known to the oldest Elysians. Those who get to learn the recipe remain in the rank of Elysian until their deaths. The Pischon oil is the manna of Baptists and Counselors.",
        fields: [["Qualites", "It opens the mind to emanations: +1D per level to CHA+Expression and PSY+Faith for (4) hours."], ["Encumbrance", "-"], ["Tech Level", "II"], ["Value", "1000 x Level"], ["Resources", "4 / 5 / 6"]]
      },
      {
        title: "Styx",
        description: "Wounds taken only bleed briefly before they turn into pale chasms. Those who are anointed with the waters of the Styx feel no pain and believe themselves invincible.",
        fields: [["Qualites", "In fact, they take less Damage per Combat Round, (1) point per level of the oil.\nThis bonus is not applied to every single attack, but on the Damage sum per Round. So if the first attack in a Round deals (4) points of Damage, it is reduced to (1) remaining point by a level 3 oil. Another attack would deal the full Damage, though, as the oil’s potential for this Round has been used up.\nYet as powerful as Styx may seem, it devours the Anabaptist from the inside out. When the effect fades after half an hour, the Anabaptist takes Trauma Damage equaling the level of the oil."], ["Encumbrance", "-"], ["Tech Level", "II"], ["Value", "200"], ["Resources", "5"]]
      },
      {
        title: "Acheron",
        description: "Styx destroys the body, but Acheron destroys the soul. Massaged into the skin of the skull, it opens one’s view wider than the world of the mortals allows, and one can look out into the ether world of the Demiurge. The Anabaptist feels creatures over a hundred paces. His burning gaze penetrates barriers as if they were made of morning mist. No spore field, no Psychonaut, and no Leperos can hide from him. Yet they all stare back at him. They know about the stranger in their midst.",
        fields: [["Qualites", "The higher the level, the further the Anabaptist can see (and be seen). At level 1, his ether gaze has a range of only (10) meters, at level 2 up to (100) meters, and at level 3 up to (300) meters. Acheron’s effects remain active for about (30) minutes.\nAfter that, the Anabaptist suffers spore infestation equaling the oil’s level."], ["Encumbrance", "-"], ["Tech Level", "II"], ["Value", "200"], ["Resources", "5"]]
      }
    ]
  }
];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const renderText = (value) => escapeHtml(value).replaceAll("\n", "<br>");

function renderRank(rankId) {
  const rank = ranks[rankId];
  const detail = document.querySelector("#rank-detail");
  detail.innerHTML = `
    <p class="rank-kicker">SELECTED RANK</p>
    <h3>${escapeHtml(rank.title)}</h3>
    <p>${renderText(rank.description)}</p>
    <dl class="entry-fields">
      ${rank.fields.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${renderText(value)}</dd></div>`).join("")}
    </dl>
  `;

  document.querySelectorAll(".rank-node").forEach((button) => {
    const selected = button.dataset.rank === rankId;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function renderPotential(index) {
  const potential = potentials[index];
  const detail = document.querySelector("#potential-detail");
  detail.innerHTML = `
    <p class="rank-kicker">SELECTED POTENTIAL</p>
    <h3>${escapeHtml(potential.title)}</h3>
    <dl class="entry-fields">
      ${potential.fields.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${renderText(value)}</dd></div>`).join("")}
    </dl>
  `;

  document.querySelectorAll(".potential-select").forEach((button, buttonIndex) => {
    const selected = buttonIndex === index;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function renderPotentials() {
  const list = document.querySelector("#potential-list");
  list.innerHTML = potentials.map((potential, index) => `
    <button class="potential-select" type="button" data-potential-index="${index}">
      ${escapeHtml(potential.title)}
    </button>
  `).join("");

  list.querySelectorAll(".potential-select").forEach((button) => {
    button.addEventListener("click", () => renderPotential(Number(button.dataset.potentialIndex)));
  });

  renderPotential(0);
}

function renderEquipment() {
  document.querySelector("#equipment-groups").innerHTML = equipmentGroups.map((group, groupIndex) => `
    <details class="equipment-group" ${groupIndex === 0 ? "open" : ""}>
      <summary>
        <span>${escapeHtml(group.title)}</span>
        <span class="equipment-count">${group.items.length} ENTRIES</span>
      </summary>
      <div class="equipment-group-body">
        ${group.intro ? `<p class="equipment-intro">${renderText(group.intro)}</p>` : ""}
        ${group.specialty ? `<p class="equipment-specialty"><strong>Specialty:</strong> ${renderText(group.specialty)}</p>` : ""}
        <div class="equipment-grid">
          ${group.items.map((item) => `
            <article class="reference-card equipment-card">
              ${item.image ? `<div class="equipment-art"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}"></div>` : ""}
              <h3>${escapeHtml(item.title)}</h3>
              <p>${renderText(item.description)}</p>
              <dl class="entry-fields compact-fields">
                ${item.fields.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${renderText(value)}</dd></div>`).join("")}
              </dl>
            </article>
          `).join("")}
        </div>
      </div>
    </details>
  `).join("");
}

document.querySelectorAll(".rank-node").forEach((button) => {
  button.addEventListener("click", () => renderRank(button.dataset.rank));
});

renderRank("touched");
renderPotentials();
renderEquipment();


const navToggle = document.querySelector("#lorebook-nav-toggle");
const sidebarScrim = document.querySelector("#sidebar-scrim");
const setSidebar = (open) => {
  document.body.classList.toggle("sidebar-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
};
setSidebar(window.matchMedia("(min-width: 761px)").matches);
navToggle?.addEventListener("click", () => setSidebar(!document.body.classList.contains("sidebar-open")));
sidebarScrim?.addEventListener("click", () => setSidebar(false));
document.querySelectorAll('.lorebook-sidebar a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
