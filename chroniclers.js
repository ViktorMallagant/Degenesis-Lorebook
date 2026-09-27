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
