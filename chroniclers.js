const ranks={
  "bit": {
    "title": "1 - Bit",
    "description": "Freshly arrived, the barcode on the forehead still bleeding. A virginal score of zero points makes the Bit practically an invader in the Cluster.\n\nFor the first days, it has to beat the sensors, find a mentor and force him to give up his technological knowledge – and award the Bit some scraps of score. After a few weeks, the Bit automatically becomes an Agent. The imminent struggle for its life is over. Welcome to the Chroniclers!",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Result",
        "Receives barcode tattoo on the forehead granting access to all Alcoves as long as his score does not fall to zero, in which case he would become a Zero."
      ],
      [
        "Equipment",
        "Robe"
      ]
    ]
  },
  "agent": {
    "title": "2 - Agent",
    "description": "The everyday duties in the Cluster are carried out by the Agents. With their basic knowledge of electricity, they repair broken sensors and jammed keys at the terminals without being electrocuted. Most of the time at least. Only rarely are they allowed to leave their Cluster, most often when the exit scanners are in a defective mode.",
    "fields": [
      [
        "Prerequisite",
        "INT+Artifact Lore 5"
      ],
      [
        "Result",
        "An Agent receives some restricted day parole. His movement vectors have to start and end in Alcoves, a Cluster, or at an important artifact location."
      ],
      [
        "Equipment",
        "Vocoder; Chronicler’s Mask; Cape"
      ]
    ]
  },
  "mediator": {
    "title": "3 - Mediator",
    "description": "Mediators are constantly coming and going in the Clusters. They are given jobs in the Alcoves and on image walls, leading them to other Cults and into the enclaves: making contact, delivering messages. Score++. In the settlements, they do a preliminary analysis of the debris dragged in and estimate a price. The Fragments have already allowed them a first visit to the Static Stream of the Central Cluster which raised their knowledge to a new level. They are hungry for more.",
    "fields": [
      [
        "Prerequisite",
        "INT+Artifact Lore 7; INT+Engineering 4; Secrets 1; Network 2"
      ],
      [
        "Result",
        "The Mediator can receive assignments (approach, messenger services) and permissions at holographic walls and Alcoves. The permissions are assignment-related, often access clearances for facilities of almost all Cults (except Anabaptists).\n\nIn the Clusters, a Mediator has access to the Static Stream (+3D to all knowledge related questions)."
      ],
      [
        "Equipment",
        "Draft printer; Chronicler’s Suit; 1 free module"
      ]
    ]
  },
  "streamer": {
    "title": "4 - Streamer",
    "description": "Their knowledge of the Stream and the powers in the background is enormous: every Streamer has enough information to make life a living hell for high-ranking people in Justitian or the Cults. They have only reached this rank by not using it. Discretion is their prime imperative. That’s why the Cluster tags them with the functions of “emissary” or “advisor”.",
    "fields": [
      [
        "Prerequisite",
        "INT+Legends 5; INT+Engineering 7; CHA+Negotiation 5; Authority 1; Secrets 2; Network 4"
      ],
      [
        "Result",
        "Knows the secrets of other Cults, and can apply the Secrets Background to them with a (-2) penalty. The Streamer has free access to Justitian’s Uptown and even to the Judgement Hall."
      ],
      [
        "Equipment",
        "Streamer Glove; Shocker; Tracker; 1 free module or an upgrade"
      ]
    ]
  },
  "fragment": {
    "title": "5 - Fragment",
    "description": "Little is known about Chroniclers of this rank. They mainly stay in the Cluster’s center and have little interest in direct contact with lower ranking brothers or sisters. It is common knowledge that they can access almost all of the Cluster’s database. Their knowledge must be immense.",
    "fields": [
      [
        "Prerequisite",
        "INT+Artifact Lore 10; PSY+Willpower/Faith 6; Secrets 5; Authority 2; Resources 4"
      ],
      [
        "Result",
        "When a Fragment links to the Static Stream of a Cluster, his INT Skills temporarily rise by +6D. The Fragment receives the mirror codes of the Cluster. With them, he can move on both sides of the Static Stream and thus can manipulate the mirror world that the Sleeper infiltrators are led into. A Fragment has access to all other Cults’ headquarters except for the Hellvetics’ and Anabaptists’. Usually, the other Cults are not aware of this."
      ],
      [
        "Equipment",
        "Cascader; Stream Drone"
      ]
    ]
  },
  "paradigma": {
    "title": "5 - Paradigma",
    "description": "The Cluster is too cramped for them. They want to go to the wasteland, into the uncontrolled grids. When the capacitors under their pauldrons hum and energy discharges in bright flashes, when they tune their voices from infrasound to the audible range and order the almost naked Clanners to kneel down, they correct the image of the somewhat weird, but harmless Chronicler. Paradigmas are illusionists with only one thing on their minds: appear as a God to the savages and use them for the Cluster.",
    "fields": [
      [
        "Prerequisite",
        "INT+Legends 6; PSY+Willpower/Faith 8; PSY+Deception 8; PSY+Domination 6"
      ],
      [
        "Result",
        "The Paradigma can read the Scrappers’ runes of warning. Scrappers protect Paradigmas and act as their informers ((+1) to Network where Scrappers are concerned).\n\nA Paradigma defends the Cult and diverts from its agenda by fanning superstition and fears and setting other parties at each other’s throats. If he wants to provoke conflict between Cults and Clans, he has access to a network of provocateurs ((+3) Network for this use only)."
      ],
      [
        "Equipment",
        "Cascader; portable Chroniclers’ Network Uplink"
      ]
    ]
  },
  "shutter": {
    "title": "3 - Shutter",
    "description": "The Chroniclers of the Cluster are a special breed, most of them cannot survive on the outside. Agents who understand that in time are different. Some enter side branches of the decision tree leading away from the official hierarchy. Like Streamers, they get jobs in the Alcoves or at the image walls, but they have different goals. They require sanctioned, deadly, technology. If they accept, they are registered as Shutters and do the dirty work in the Cult’s deepest shadow.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Melee 6 or AGI+Projectiles 6; PSY+Cunning 6"
      ],
      [
        "Result",
        "Receives sanctioned missions from the Cluster. Not welcome in Alcoves."
      ],
      [
        "Equipment",
        "The Shutter has access to sanctioned technology (weapons and equipment able to do lethal Damage: see page 135, “Sanctioned Technology”)."
      ]
    ]
  },
  "fuse": {
    "title": "4 - Fuse",
    "description": "Successful Shutters become Fuses. The Cluster sees the Fuses as security measures against any kind of threats that will not hear, and so must feel.\n\nFuses are injected with a transponder. Thus, they get access to secret parts of the Cluster and wasteland hideaways. Sanctioned technology waits for them there to be used for their jobs. Now, Fuses know quite a lot, especially uncomfortable things with lots of blood, gore, theft and infiltration. This could be a problem for the Cluster should they want to get out. The Needle Tower Disaster has not been forgotten. Maybe the transponder is more than just a transmitter…",
    "fields": [
      [
        "Prerequisite",
        "BOD+Melee 8 or AGI+Projectiles 8; BOD+Toughness 6; AGI+Stealth 6; Network 3"
      ],
      [
        "Result",
        "Injected transponder. It gives the Fuse access to hidden parts of the Cluster and weapon caches in the wasteland—but Scalars or Streamers can detect it any time with the help of a Tracker."
      ],
      [
        "Equipment",
        "Sanctioned technology by Resource level"
      ]
    ]
  },
  "scalar": {
    "title": "5 - Scalar",
    "description": "Shutters fly under the radar, the results of their missions are saved in bits and pieces on local memory. Even a Chronicler with the highest level of access could not trace all movements and actions of a Shutter.\n\nThat’s why Shutter operations often escalate. Scalars are the best example. They handle Shutters and Fuses, juggle identities and coordinate them. Everyone gets jobs ideally tailored to their abilities. In return, the Scalar gets part of the score and the Drafts. That is beneficial for everyone, for the rapidly increasing score gives access to better technology that he supplies everyone with.",
    "fields": [
      [
        "Prerequisite",
        "PSY+Cunning 8; PSY+Deception 10; Secrets 4; Network 6"
      ],
      [
        "Result",
        "Using forged identities, the Scalar gains massive access to Cluster arsenals. He permanently gets (+2) to Resources and can task Shutters and Fuses whom he can assign a temporary Resource bonus of (+1). The Scalar’s virtual identities earn him Chronicler Drafts on a daily basis that he can debit in Alcoves: 1D x 10 CD per day."
      ],
      [
        "Equipment",
        "Sanctioned technology by Resource level"
      ]
    ]
  },
  "zero": {
    "title": "0 - Zero",
    "description": "Zero Score. Once the score falls to zero, the Chronicler is automatically removed from the system. However, the Cluster cannot take his knowledge away from him: Zeros still use the Cult as a deposit of resources. The sheer possibility of their secrets being exposed is reason enough for the Fragments to give Shutters extermination orders. Zeros live a dangerous life that rarely lasts long.",
    "fields": [
      [
        "Prerequisite",
        "At least Shutter or Mediator; one can always start walking the path of the Zero, but there is no way back; Secrets 2, PSY+Deception 6"
      ],
      [
        "Result",
        "The Zero has hacked into the system of the Cluster and given himself access to all secret caches of sanctioned technology, as well as to regular Chronicler technology. His Resource level rises to (6). However, when the Zero invests Resource points, it becomes more likely that the Cluster tracks him down. The Cluster starts at INS+Perception (0). Every point of Resources used adds +1D and starts a Conflict with the Zero, who counters by using PSY+Deception.\n\nIf the Cluster wins, a Shutter shows up within one hour. If it rolls (2) Triggers, a Fuse takes the cleaning job. If there are even more Triggers, a Scalar is tasked to do it. After the attack, if the Zero survived, the Cluster's Perception goes down to (0) and the game starts anew."
      ],
      [
        "Equipment",
        "Sanctioned and Chronicler technology"
      ]
    ]
  },
  "needle": {
    "title": "X - Needle",
    "description": "Zeros can go far and aspire to do as the Needle Tower Chroniclers did. As a Needle, they are just that, a needle in the Chroniclers’ flesh. Their followers protect them against the Fuses while they expand the knowledge of the Stream and build an arsenal of sanctioned and Free Spirit equipment.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Leadership 8; Allies 3; Secrets 5; Network 4"
      ],
      [
        "Result",
        "At least one Clan venerates and protects the Needle, but he loses access to the Cluster’s arsenals. In response, he creates his own arsenal from the findings brought to him by the Clanners. Every point of Resources gives access to the respective Tech Level: a Needle with Resources (3) can use Tech III equipment; at Resources (6), he would have free access to Wonderland artifacts.\n\nHowever, if a Needle’s Renown rises above (3), Marauders will take notice of him, and who can say if they would be well disposed to them."
      ],
      [
        "Equipment",
        "Any, depending on Tech Level; 1 piece of Free Spirit equipment"
      ]
    ]
  }
};
const potentials=[
  {
    "title": "I. Dead End",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers"
      ],
      [
        "Effect",
        "Shutters never fight fair. They use ambushes, tricks, and deception. Only when they have their enemies cornered, when they are sure of their prey, do they unleash an efficient and lethal attack."
      ],
      [
        "Rules",
        "If there is no way out for the victim of a Shutter, the Shutter gains a bonus on Attack rolls and both Passive and Active Defense equal to his Potential level."
      ]
    ]
  },
  {
    "title": "II. Multiply",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Shutter, PSY+Deception 6"
      ],
      [
        "Effect",
        "I am Legion. Some Shutters wear their undercover identities like a second skin. They establish lavish backgrounds and histories for their fake lives and can go unnoticed even while impersonating members of other Cults."
      ],
      [
        "Rules",
        "With this Potential, a Chronicler can develop a number of established disguises equal to his Potential level. He switches roles so expertly that he adds +1D per Potential level on all rolls of CHA+Conduct and PSY+Deception while acting as one of his fake identities."
      ]
    ]
  },
  {
    "title": "III. Back Door",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Shutter, PSY+Deception 6"
      ],
      [
        "Effect",
        "Shutters and Fuses develop certain survival strategies to get through their missions alive. One of the best is not to raise suspicions at all, instead swimming alone as an inconspicuous impulse in the data stream."
      ],
      [
        "Rules",
        "Back Door gives the character +1D per Potential level to PSY+Cunning or PSY+Deception rolls when he attempts to infiltrate a community in disguise and needs to get away unscathed."
      ]
    ]
  },
  {
    "title": "IV. Download",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers"
      ],
      [
        "Effect",
        "Humans are machines, running on electrical signals and controlled by a wet, fleshy circuit board in their skull. In a similar way to influencing a program’s actions with the correct sequence of inputs and impulses, humans can be influenced with the correct sequence of pressures and shocks. When the primitive human mind feels hopelessly trapped, it will do anything to avoid further harm, even blurting out its deepest secrets."
      ],
      [
        "Rules",
        "This method of questioning gives the Chronicler +1D and (1) Trigger on PSY+Domination per Potential level when the target of their questions has no way to escape."
      ]
    ]
  },
  {
    "title": "V. Upload",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers"
      ],
      [
        "Effect",
        "Key stimuli lead to a Download, so an Upload should also be possible. Binding the subject has not always proven beneficial to this task."
      ],
      [
        "Rules",
        "Paradigmas and Needles use a combination of superstition, fear, and occasional electric shocks to plant a suggestion in their subject’s conscious mind.\n\nChroniclers with the Upload Potential get Triggers equal to their Potential level whenever they try to influence someone via CHA or PSY (for example by PSY+Domination, CHA+Leadership, or CHA+Seduction). Upload can be combined with Download."
      ]
    ]
  },
  {
    "title": "VI. Tesla",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers"
      ],
      [
        "Effect",
        "Electric shocks are a heart-balm. They prove that the suit is working and charged. The Chronicler is in perfect control of his modules, energizing them with a gesture of his finger, offering parts of his body to the enemy that will hit them with blinding flashes of electricity."
      ],
      [
        "Rules",
        "The Chronicler adds (1) Trigger per Potential level to AGI+Mobility when using the Discharge module offensively. They also gain +1D per Potential level to Melee Active Defense while the module is charged."
      ]
    ]
  },
  {
    "title": "VII. Nova",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Primal"
      ],
      [
        "Effect",
        "The Chronicler is an exploding star, screaming, flaming, surrounded by an accretion disk made of smoke; beams of searing light thick as fingers burst from him, blinding the righteous and chasing away the superstitious."
      ],
      [
        "Rules",
        "In battle, the Chronicler charges into the middle of his enemies and ignites all his defense modules with an Action roll on INT+Engineering (5). Every Potential Level reduces the Difficulty by (1). If there are at least (2) enemies in melee distance, his comrades are not affected by this Action. If the roll fails, the Chronicler only activates (1) randomly chosen component, and his own group suffers the same penalties as the enemy."
      ]
    ]
  },
  {
    "title": "VIII. Fractal Memory",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Focus"
      ],
      [
        "Effect",
        "The Chronicler’s memory is like a map with landmarks and complex coastlines. His knowledge is splayed out on the map according to intricate mathematical rules, fractal patterns swirling in his mind."
      ],
      [
        "Rules",
        "On all Action rolls using INT, he adds Triggers equal to his Potential level. This Potential is permanently active."
      ]
    ]
  },
  {
    "title": "IX. Situational Analysis",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Paradigma, INT+Focus 10, PSY+Cunning 8"
      ],
      [
        "Effect",
        "A Paradigma’s brain functions like a bygone supercomputer. Algorithms determine possibilities for event manipulation. The Paradigma constantly analyzes the near future. He calculates the moves of his opponents and deploys counter-measures."
      ],
      [
        "Rules",
        "Before any form of combat ensues, the Paradigma rolls PSY+Cunning (3). For every Trigger on his roll, his Passive Defense rises by (1) for (3) Rounds per Potential level to a maximum of (9) Rounds at level 3. Once Situational Analysis reaches its maximum, the Paradigma can keep spending (1) Ego Point per Combat Round to keep up the Passive Defense until he can escape."
      ]
    ]
  },
  {
    "title": "X. Nervous Breakdown",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, INT+Medicine 6, INT+Science 6"
      ],
      [
        "Effect",
        "Electricity penetrates enemies and burns their flesh. Some Chroniclers embrace its power in combat or use it for torture. They know how to channel electricity through the human body and direct it to cause critical amounts of damage."
      ],
      [
        "Rules",
        "Advanced knowledge of the nervous system and a knack for battle turn non-violent weaponry into tools of precision in the hands of the Chronicler. The Dazed Quality of any electrical weapon used is raised by (1) per Potential level."
      ]
    ]
  },
  {
    "title": "XI. Mind of the Machine",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Focus, PSY+Willpower 8"
      ],
      [
        "Effect",
        "Those who can turn off their emotions and summon the logic of the machine, can shield their minds against the influences of the outside world. Chroniclers who have interacted with the Stream for too long are masters of their own emotional state, and can turn off human values such as compassion, morals, or guilt with a flick of their finger."
      ],
      [
        "Rules",
        "Emotions serve no purpose when trying to influence the character. When anything but cold logic is applied to pressure the Chronicler, he may add +1D per Potential level to any Mental Defense roll, along with (1) Success per Potential level to any relevant INT+Focus rolls that require a complete shutdown of his emotional state."
      ]
    ]
  },
  {
    "title": "XII. Y2K",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, INT+Artifact Lore 8, INT+Engineering 8"
      ],
      [
        "Effect",
        "Electronics, computers, and artifacts all have expiration dates or weak spots. Knowing their frequencies and their core functionality, Chroniclers can make these Bygone objects break down, jam, or malfunction in a critical moment."
      ],
      [
        "Rules",
        "Whether a Chronicler is hacking into a security system or trying to jam radio frequencies before a message is sent, time is of the essence. To successfully hijack electronics, the Chronicler rolls INT+Engineering. If he rolls at least (4) Triggers the character bypasses the security and the Action requires only (1) Combat Round to complete. The number of Triggers required is reduced by (1) for each point in the Potential beyond level 1."
      ]
    ]
  },
  {
    "title": "XIII. Child of the Stream",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, INT+Artifact Lore 10, Secrets 4"
      ],
      [
        "Effect",
        "If you stare into the abyss for too long, the abyss stares back at you. Chroniclers who have been raised within the Stream reap the knowledge they’ve been bestowed with and wield it in profound fashion. They are the living witnesses of the Bygone era."
      ],
      [
        "Rules",
        "Fed with limitless data from a time long past, the Chronicler feels as if he doesn’t belong in this world. His knowledge of pre-Eshaton history and lore is an ocean without boundaries. The character adds +1D per Potential level to any of his INT rolls. Every Trigger he collects on such a roll goes into a separate pool. For every (10) Triggers collected the Chronicler receives (1) Experience point. However, being a stranger to the world he lives in, he receives a penalty of 1D per Potential level on all rolls involving CHA."
      ]
    ]
  },
  {
    "title": "XIV. Defragment",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Focus, INT+Science 8"
      ],
      [
        "Effect",
        "All code is but a sum of all its parts. If the composition can be understood, the code can be cracked. Chroniclers specialize in this form of analysis. They’re capable of bypassing even the most complex security system, or solving seemingly impossible riddles."
      ],
      [
        "Rules",
        "When putting his mind to it, the Chronicler is able to untangle the most complex problems. He adds +1D per Potential level to any roll meant to unravel a mystery, solve a puzzle or mathematical equation. Once per Potential level in a given month, he may also roll INT+Science (4). If he succeeds, he receives a flash of genius giving him a clue to a previously unsolved riddle."
      ]
    ]
  },
  {
    "title": "XV. White Noise",
    "fields": [
      [
        "Prerequisite",
        "Chroniclers, Primal"
      ],
      [
        "Effect",
        "A nasty but effective way of reducing an opponent’s concentration is to overload their senses during combat. Some Chroniclers do so by discharging and overriding all their modules at once as a last resort. What follows is a screeching impulse of white noise and static energy that causes a painful itching in the ears and makes everyones hairs stand on end. The noise is so high pitched that it can even penetrate protective earplugs and throw enemies off balance."
      ],
      [
        "Rules",
        "The Chronicler overrides all of his modules at once into his sonic weapon, creating a discharge like a banshee’s shriek. For every (4) levels of sonic Damage, such as that dealt by a Vocoder or Cascader, a victim of White Noise additionally receives -1D to all rolls for (1) Combat Round. The amount of Damage required to induce the penalty is reduced by (1) for each point in the Potential beyond level 1."
      ]
    ]
  }
];
