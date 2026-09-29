const ranks={
  "specter": {
    "title": "1 - Specter",
    "description": "Born in darkness, armed only with humility, the Specter submits to the community and offers his throat to his Demagogue. He is nothing and has to prove his worth through actions or the sound of his voice.",
    "fields": [
      [
        "Prerequisite",
        "Born into darkness"
      ],
      [
        "Result",
        "Very good hearing: if he actively listens, or if someone tries to sneak up on him, the Specter gets +2D on INS+Perception. In bright sunlight, Palers have -1D to Attack and Active Defense rolls."
      ],
      [
        "Equipment",
        "Grim sun (talisman, +1D to Mental Defense)"
      ]
    ]
  },
  "solar": {
    "title": "2 - Solar",
    "description": "The Palers hate the sun: it’s blinding, it’s hot, and it reveals the ways of the community to the abovegrounders.\n\nBut it’s also a life giver, not unlike the Dispenser generators – and as such, subordinate to the Palers. The Solars are its rulers. In the glaring sunshine, they unfold the matte black bunker panels and thus channel the celestial body’s power into the Dispenser that greets it happily with flickering cascades of symbols on its display walls. According to legend, the Solars are the keepers of balance and force the sun back into darkness every day, where it recharges to return renewed the next morning.\n\nThe Solars don’t disagree, but they see themselves mainly as technicians. They keep the systems working, follow the ancient rituals for the upkeep of the ventilation, the strengthening of the pumps, and so on. It’s a lot to do. The Dispenser technology is modular: usually it’s sufficient to unplug something and plug something else in its place. Most carry Sun Discs and use them to enter forgotten bunker segments. Almost no one else knows the Dispensers as well as the Solars do.",
    "fields": [
      [
        "Prerequisite",
        "INT+Engineering 5; AGI+Crafting 5; Resources 1; Secrets 2"
      ],
      [
        "Result",
        "The Solar spends a lot of time under the searing bright sun—and gets used to it. The penalty on Attack and Active Defense disappears."
      ],
      [
        "Equipment",
        "Sun Disc (Arbiter, level 1); electronics tools"
      ]
    ]
  },
  "aurora": {
    "title": "3 - Aurora",
    "description": "They have become immersed in the Dispensers’ secrets; have seen the switchgear behind the veneer. One order is enough, and a corridor becomes brightly lit or pitch black. They energize control panels, lock portals, or flood corridors with gas.\n\nThe layer of memetic indoctrination is crumbling. They know too much. With a few strokes of work, they can access the Dispensers’ memetic programming themselves. They don’t have the codes yet to climb down to the forbidden depths, to control the Sleeper cells or enter the armories, but with every Reviver who finds one of the 44 and brings back codes, the Auroras’ power grows.",
    "fields": [
      [
        "Prerequisite",
        "INT+Engineering 8; AGI+Crafting 8; Resources 3; Secrets 4"
      ],
      [
        "Result",
        "The Aurora controls the bunker’s Memetics programs, makes the Getrell avatar say her own words. She controls the defense mechanisms of the facility up to the level of her Sun Disc. However, she also loses something: her faith. If the Aurora was religious, she now changes from Faith to Willpower: the Faith level becomes her new Willpower level."
      ],
      [
        "Equipment",
        "Sun Disc (Arbiter, level 2)"
      ]
    ]
  },
  "reviver": {
    "title": "2 - Reviver",
    "description": "They have to get out. Some feel drawn to the wild, into the Balkhan’s’ forests or the noisy crowds of Justitian while some simply feel strange amongst their peers, or their squeaky voices caused acoustic dissonances in the corridors.\n\nRevivers roam the world above ground, following the breadcrumbs that the gods left for them. They have an eye for the ancient buildings, finding entrances everywhere and diving down into them when there’s danger.\n\nThey blend into the society above ground – though only as a parasite – using bugs, detectors, and blackmail to find the last hidden Dispensers.",
    "fields": [
      [
        "Prerequisite",
        "INS+Survival 4; PSY+Cunning 6; Network 3"
      ],
      [
        "Result",
        "Like a Solar, the Reviver gets used to daylight: the penalty disappears. The Reviver gathers clues regarding bunkers and other RG facilities, and the Scrappers know that, too. Their Scavengers like the Revivers and help them get into bunkers, hoping for a share."
      ],
      [
        "Equipment",
        "Sun Disc (Phaeton, level 1); Sunburst; gold strip (value: 200 CD); submachine gun"
      ]
    ]
  },
  "redeemer": {
    "title": "3 - Redeemer",
    "description": "Armed with Sun Discs full of codes, they conquer the wasteland. Only a few Recombination Group facilities can resist their advance. They are respected in the Paler enclaves, have help from a dozen Demagogues. They find tunnels that are not shown on even the most ancient maps.",
    "fields": [
      [
        "Prerequisite",
        "Sun Disc (Orbital, level 1); has awakened at least one bunker; INS+Orienteering 6; PSY+Deception 8; INT+Artifact Lore 6; Allies 3; Network 4"
      ],
      [
        "Result",
        "The Palers from the bunker the Redeemer cracked adore their savior. They follow him unnoticed and show up whenever he needs help (Allies (+2)). A Sun Disc can be upgraded by 1 level in the awakened bunker."
      ],
      [
        "Equipment",
        "RG Atlas"
      ]
    ]
  },
  "phantom": {
    "title": "2 - Phantom",
    "description": "They pave the way for the rule of the gods, striking out of the night at anyone who wants to oppose the Palers. To do so, they equip themselves from the storages of the old Guardians, carrying submachine guns and grenades as they launch raids on the surface.",
    "fields": [
      [
        "Prerequisite",
        "INS+Perception 4; AGI+Projectiles 6; AGI+Stealth 4"
      ],
      [
        "Result",
        "The Phantom accesses the arsenals in the bunkers with (+2) Resources. He trains by fighting under bad visual conditions: his darkness penalty is lowered from -4D to -2D."
      ],
      [
        "Equipment",
        "Muffled submachine gun with bayonet; +1D rounds per month; shock grenade"
      ]
    ]
  },
  "cyclops": {
    "title": "3 - Cyclops",
    "description": "Cyclopes are legendary executioners of divine rage. Only for them do the Sleepers’ secret arsenals open up. That is where they get their Sun eye, through which they see the night in fluorescent green. Nothing and no one can hide from them. They are the abovegrounders’ nightmare.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Athletics 6; AGI+Projectiles 8; Renown 4"
      ],
      [
        "Result",
        "The Cyclops has perfected his perception of his environment and always knows who’s where: this brings a +2D Initiative bonus in dark or poorly lit surroundings. Cyclopes are excellent saboteurs who prefer missions against Chroniclers and Hellvetics. Their equipment is perfectly suited for such endeavors. No Alcove and no Hellvetic outpost is safe from them."
      ],
      [
        "Equipment",
        "+2D rounds per month; Cyclops Eye; Sun Disc (Quantum, level 1); Throwing Pulsor; sesamite"
      ]
    ]
  },
  "aspirant": {
    "title": "4 - Aspirant",
    "description": "Their minds shatter both the bunkers’ and their Demagogues memetics. They know the mechanisms and have a try at them. They screech, they whisper, they sing, they modulate their voices, they fail and learn. Sometimes a Phantom shies away from them, and sometimes the Solars move along without question. One day, the Aspirant will reach his goal and will dominate the bunker as a Demagogue.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Expression 10 or CHA+Seduction 10 or PSY+Domination 10; Authority or Renown 5"
      ],
      [
        "Result",
        "At this point, the Aspirant needs to choose one form of demagogy. Does he beguile or disturb? Does he induce fear or humility? He trains his voice so that he can create confusion and mimic animal sounds. He can perfectly imitate a person’s voice if he concentrates on it for at least (5) Rounds. Afterwards, he gets +2D on PSY+Deception when trying to deceive a listener using that voice. The Getrell avatar of his bunker brings a Sun Disc updgrade by 1 level. The Mental Defense against other Aspirants and Demagogues rises by +2D."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "demagogue": {
    "title": "5 - Demagogue",
    "description": "Finally, they’ve mastered their voice. It may be powerful or flattering, commanding or careful, but whatever emotion they have chosen to focus on its strength touches any Paler with cold efficiency.\n\nWhen a Demagogue with a thundering voice calls to order someone who has misstepped, the voice is his weapon, but when he mediates differences in the Dispenser, it’s a community tool.",
    "fields": [
      [
        "Prerequisite",
        "INT+Focus 10 or INS+Primal 10; CHA+Leadership 8; Authority or Renown 6"
      ],
      [
        "Result",
        "The Demagogue can project the emotion he has mastered with a +2D bonus onto his counterpart, and additionally use his Authority Background where Palers are concerned.\n\nHe himself is immune to the suggestions of other Demagogues. He has trained his vocal chords to the limit. He can imitate any sound, speak with the voices of several people present and project them into a room. He can make guttural and archaic sounds, can create a veritable din and thus confuse enemies. If he uses his voice, he gets +3D to PSY+Deception, PSY+Domination, and CHA+Arts (Singing), and also +3D to PSY+Cunning in the dark."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "halo": {
    "title": "4 - Halo",
    "description": "They have left the bunker and their old life behind. They now follow one of the Sleeper Prophets: Daimondal, Trice, Helios, Uriz and Enceph, who preach a deviation from the old ways, preparing for the twilight of the gods.\n\nAs Halos, Palers are the paladins of the Sleeper Prophets, examining fortifications on the future battlefields for them and exploring the holy city of Exalt, wresting control from the current inhabitants sector by sector. Free Spirit and Project Tannhäuser are no longer foreign concepts to them.",
    "fields": [
      [
        "Prerequisite",
        "Rank 3; proof that he has turned his back on the false gods and has found a Sleeper Prophet"
      ],
      [
        "Result",
        "The Paler has chosen a prophet, found him, and pledged his loyalty to him. Here are the five Sleeper Prophets and what they have to offer to a Paler:\n\nDAIMONDAL: The curious one. Explores the lower levels of Exalt. His disciples get +2D to INT+Engineering and access to Free Spirit technology.\n\nTRICE: The humble one. Trice wears rags and poses as a beggar in settlements. If she is given something, she electronically marks the donor. Her disciples follow that person and watch and learn from him. They help him if he’s in need. Trice’s motives are unknown and seem confused at best, even to the highest-ranking Halos. She seems to be looking for the good in people to bolster it. Her Palers are the opposite of regular Palers: they get a +2D bonus to INS+Empathy.\n\nHELIOS: Also called the burnt one, probably due to his black skin. He commands flying and crawling sensors on the lookout for Sleepers. Those who follow him get a modified level 3 Orbital Sun Disc that gets information from Helios’s moving sensors: +4D to INS+Orienteering.\n\nURIZ: The hidden one. Mainly active in the Balkhan, he secretly controls several Voivodules and settlements through information and Dinars. Uriz chooses only a few Palers as his Halos and does not allow them to get to know each other. The Palers communicate through a network of informers, passing on the wishes of their Sleeper Prophet. In return, they get Resources (5) for all Cults due to blackmailed Cult members. If a Halo gets in trouble in a settlement influenced by Uriz, it is very probable that an informer lets the local garrison know about the Paler’s special status and the charges are dropped.\n\nENCEPH: The chosen one. She appears as a benign and radiant angel but intends to reconfigure Getrell’s memetics code to put the Palers at odds with the Sleepers. Her Halos appreciate her cold soul: with modified Arbiter Sun Discs they contaminate the systems of the RG bunkers and enter the cryostasis chambers, break free the remains of the Sleepers that are petrified by nanites, and make weapons from their bones. Enceph’s motives are unclear."
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
    "title": "I. Nightmare",
    "fields": [
      [
        "Prerequisite",
        "Palers"
      ],
      [
        "Effect",
        "The shadow detaches from the wall, taking on form as it crashes down on the enemy like a wave of blades, cutting and slashing."
      ],
      [
        "Rules",
        "The Paler lurks in the shadows, gaining +1D per Potential level to AGI+Stealth. If he wins a Conflict of his AGI+Stealth against his enemy’s INS+Perception, his next Attack roll cannot be Actively Defended against. If the attack succeeds, he adds Triggers equal to his Potential level."
      ]
    ]
  },
  {
    "title": "II. Lament",
    "fields": [
      [
        "Prerequisite",
        "Palers, Primal"
      ],
      [
        "Effect",
        "A scream cuts through the silence of the halls like a nail scratching on a blackboard, the sound cutting deep into the minds of everyone who hears it, digging and tearing at their psyche..."
      ],
      [
        "Rules",
        "The Paler pours all of their fear and anger into one ferocious screech, rolling INS+Primal with a bonus of +1D per Potential level. The result of this roll is the Difficulty against which all unprotected combatants, including the Paler’s companions, must roll a Mental Defense against. Those who fail are incapacitated for at least (1) Combat Round. For every (3) Triggers on the Paler’s roll, the incapacitation lasts an additional Combat Round. Anyone who wears earplugs or other hearing protection is unaffected."
      ]
    ]
  },
  {
    "title": "III. Alias",
    "fields": [
      [
        "Prerequisite",
        "Palers"
      ],
      [
        "Effect",
        "The night cools the surface dwellers’ burning gaze and veils the Palers’ movements. But the day burns their skin, and jumping from shadow to shadow is an undignified way for a servant of the gods to present themselves. Instead, they take on the appearance of the surface dwellers, moving amongst them with their pale skin hidden."
      ],
      [
        "Rules",
        "The Alias Potential lets the Paler imitate the movements of the surface dwellers. He drifts with the current of the ignorant ones. Scrutinizing gazes slide off the smooth surface of his normality. He gets +1D per Potential level to PSY+Deception when trying to hide his true colors."
      ]
    ]
  },
  {
    "title": "IV. Midnight Sun",
    "fields": [
      [
        "Prerequisite",
        "Palers, Focus"
      ],
      [
        "Effect",
        "The mist hides the enemy, the night devours all color, dust stings the sensitive eyes. The image on the retina is so often deceptive, leading us to believe we’re safe while danger lurks out of sight. Some Palers simply forego their sight, perceiving their environment by the sounds cascading around them, and feeling every movement as air currents drifting on their skin."
      ],
      [
        "Rules",
        "All penalties due to poor visual conditions, blindness, or darkness are reduced by (1) per Potential level."
      ]
    ]
  },
  {
    "title": "V. Chosen",
    "fields": [
      [
        "Prerequisite",
        "Palers, Halo"
      ],
      [
        "Effect",
        "The Sleeper Prophet walks amongst his Halos. They all look so similar, blending into a featureless mass. That’s acceptable. That one there, however, stands out.\n\nThe Sleeper Prophet hesitates, briefly focusing his eyes and blessing the Halo with his gaze. This Halo has excelled and shall be rewarded."
      ],
      [
        "Rules",
        "With every Potential level, the Sleeper Prophet’s recognition of the Halo rises and brings a bonus equal to the Potential level to the Authority and Secrets Backgrounds."
      ]
    ]
  },
  {
    "title": "VI. Suggestor",
    "fields": [
      [
        "Prerequisite",
        "Palers, Demagogue"
      ],
      [
        "Effect",
        "The voice in his head whispers urges and orders, while dispensing flattery and compliments. It is family, love, passion, and burning pain when it isn’t obeyed. It is a worm, burrowing into the mind of the target, formed by the words of a Demagogue."
      ],
      [
        "Rules",
        "If the Demagogue can sneak up to an unsuspecting victim, rolling AGI+Stealth against the victim’s INS+Perception, he can whisper strange thoughts to that person. The victim hears these whispers as their own voice, whispering inside their mind.\n\nThe victim is pushed into a fight for control, the Demagogue gains +2D per Potential level to put an opinion into the victim’s mind by rolling CHA+Negotiation against the target’s Mental Defense."
      ]
    ]
  },
  {
    "title": "VII. Sparkling Fire",
    "fields": [
      [
        "Prerequisite",
        "Palers, Halo, INT+Focus 8, INS+Orienteering 10"
      ],
      [
        "Effect",
        "Halos can sense when somebody is using artifacts and technology around them. The higher the object’s Tech Level, the stronger the Halo feels its activity in the form of a tingle at the base of their spine."
      ],
      [
        "Rules",
        "The Halo receives (1) Success per Potential level to all rolls on INS+Orienteering in order to pinpoint unknown technology. The Halo doesn’t necessarily know the object’s function or origin, yet he witnesses the strength of its impulse."
      ]
    ]
  },
  {
    "title": "VIII. Memeticon",
    "fields": [
      [
        "Prerequisite",
        "Palers, INS+Empathy 6"
      ],
      [
        "Effect",
        "Raised under the burden of the Demagogue and the subliminal messages of the Dispensers, the Paler has learned to recognize the basic elements of memetics as well as how to shield his mind from their influence."
      ],
      [
        "Rules",
        "When assessing patterns, actions or devices aimed at suggestion he adds (1) Trigger per Potential level to an INS+Empathy roll. When opposing suggestion or subconscious memetic influence, he adds (1) Trigger per Potential level to his Mental Defense roll."
      ]
    ]
  },
  {
    "title": "IX. Negator",
    "fields": [
      [
        "Prerequisite",
        "Palers, Primal"
      ],
      [
        "Effect",
        "For Chroniclers there is nothing more irritating than a Paler who appears to have developed immunity towards electricity. This anomaly has been recorded in multiple confrontations between both Cults. As such, Negators make excellent saboteurs and are deployed far beyond the enemy lines."
      ],
      [
        "Rules",
        "Be it because he took too many shocks fixing the Dispenser’s malfunctioning solar panels or because he learned how to block Chronicler’s Shocker, the Paler is less susceptible to electrical Damage. The character negates (3) points of electrical Damage per Potential level."
      ]
    ]
  },
  {
    "title": "X. Fluoride",
    "fields": [
      [
        "Prerequisite",
        "Palers, AGI+Mobility 8"
      ],
      [
        "Effect",
        "Palers are nimble, quick and hard to hit. They escape through the tiniest of tunnels and can avoid detection even in broad daylight, speeding from cover to cover. Some of them are so flexible that they squeeze through openings that barely fit their head."
      ],
      [
        "Rules",
        "The Paler’s joints are incredibly flexible, his bones bend but they rarely break. The character may add (1) per Potential level to his Passive Defense and +1D per Potential level to his Active Defense rolls. If the head of the Paler fits through a crack, his whole body can pass through as well. He adds (1) Success per Potential level to AGI+Mobility when doing contortion."
      ]
    ]
  },
  {
    "title": "XI. Pandaemonium",
    "fields": [
      [
        "Prerequisite",
        "Palers, Cyclops, INT+Engineering 8"
      ],
      [
        "Effect",
        "A Cyclops can wreak havoc within any security system and override electronics at ease. He is the embodiment of any Chronicler’s worst nightmare, causing systems to shut down and frying artifacts beyond repair."
      ],
      [
        "Rules",
        "The Paler appears like some sort of gremlin, breaking everything he touches. However erratic his way of dealing with technology may seem, his accuracy is undeniable. He drains Chronicler modules, overrides security consoles and jams high frequency electronics. When dealing with electronics of Tech V or lower he adds (1) Trigger per Potential level to his INT+Engineering rolls."
      ]
    ]
  },
  {
    "title": "XII. Tripwire",
    "fields": [
      [
        "Prerequisite",
        "Palers, Focus"
      ],
      [
        "Effect",
        "Palers learn early on how to defeat surface dwellers with cunning precision. They play submissive weaklings, retreating from combat further and further. Until the right moment, when they bury their opponent with a single well aimed counter attack."
      ],
      [
        "Rules",
        "The Paler is not one to rush a fight. He will defend himself long enough to identify a weak spot in the opponent’s Defense. The Paler adds +1D per Potential level to his Active Defense rolls. Should he manage to land a counterattack, it counts as an Aimed Attack without incurring the increased Difficulty."
      ]
    ]
  },
  {
    "title": "XIII. Xenos",
    "fields": [
      [
        "Prerequisite",
        "Palers, Secrets 4, INT+Legends 6"
      ],
      [
        "Effect",
        "Some Palers spend years studying the habits of the surface dwellers. They blend into communities with ease, hiding in plain sight without attracting attention to their heritage. Some go even further and are capable of infiltrating another Cult."
      ],
      [
        "Rules",
        "When impersonating someone, the right tone is worth as much as the best disguise. Through lies and suggestion the Paler is able to infiltrate other Cults. The character chooses (1) Cult per Potential level. When impersonating a member of this Cult he adds +1D per Potential level to his of PSY+Domination and PSY+Deception rolls."
      ]
    ]
  },
  {
    "title": "XIV. Vault Fighter",
    "fields": [
      [
        "Prerequisite",
        "Palers, AGI+Mobility 6"
      ],
      [
        "Effect",
        "A life in darkness in the belly of the earth, in narrow and meandering vaults has shaped the Paler into a formidable opponent while in close quarter conditions. While he suffers disadvantages on the surface plane, he turns the tides in his favor when encountered within a limited space."
      ],
      [
        "Rules",
        "The Paler is a maggot, used to a very confined space. Out in the open he is worth nothing, but in a narrow tunnel he unleashes hell. Any penalty for combat in cramped spaces is negated. Instead the character adds his Potential level x2 to his Passive Defense and +2D per Potential level to his Active Defense rolls under such conditions."
      ]
    ]
  },
  {
    "title": "XV. Masterplan",
    "fields": [
      [
        "Prerequisite",
        "Palers, PSY+Cunning 6"
      ],
      [
        "Effect",
        "A Paler never enters combat without a strategy. He directs the altercation and foresees the outcome. Every element of his surrounding is a part of his master plan. If he tugs the right strings, everything will fall into place."
      ],
      [
        "Rules",
        "Maybe the fight is occurring on his turf or maybe he is laying low in the shadows plotting his actions: nevertheless, the Paler has a plan. After (3) Combat Rounds of studying his surroundings, the character is able to influence the circumstances of the fight. He adds +1D per Potential level to a PSY+Cunning roll against a Difficulty of (2) in order to change the combat conditions of the terrain: blowing out the light bulbs to add a darkness penalty for his opponents; impairing their movement by toppling kegs of oil; cutting a rope to collapse a wall. He can also roll against Difficulty (4) to end the fight: shooting a power generator to combust into shrapnel; charging the floor with a deadly current; discovering a new escape route; etc…"
      ]
    ]
  }
];
const equipmentGroups=[
  {
    "title": "General",
    "items": [
      {
        "title": "RG Atlas",
        "description": "Not every Paler has an Orbital Sun Disc that shows him the way to the next bunker. Instead, he has to rely on old RG maps.",
        "fields": [
          [
            "Specialty",
            "The maps show roads that do not exist anymore and lakes that are dusty basins today. Only landmarks recently added by Palers make navigating with the help of these maps possible and give +2D to INS+Orienteering."
          ],
          [
            "Effect",
            "INS+Orienteering +2D"
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
            "4500"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Strip of Gold",
        "description": "These thin strips of gold are the currency of the gods. They are traded amongst the Palers and sometimes accepted by Scrappers, too, because somehow they look precious.",
        "fields": [
          [
            "Specialty",
            "Strips of gold are rare and considered more of a collectible than a currency. Revivers trade them for Chronicler Drafts or Dinars in the sun world and thus establish themselves."
          ],
          [
            "Value",
            "200 CD"
          ]
        ]
      }
    ]
  },
  {
    "title": "Light Sources",
    "items": [
      {
        "title": "Sun Eye",
        "placeholder": "SUN EYE\nARTWORK PLACEHOLDER",
        "description": "Sun Eyes are night scopes from the RG warehouses. Generations of Palers adorned them with engravings and various embellishments, fought for them and worshipped them. A stylized sun is an omnipresent symbol: according to legends the sun was incarcerated in these devices to brighten the user’s sight.\n\nThe Sun Eyes are precious and are guarded vigilantly today by the Demagogues. Only the Cyclopes are allowed to use these artifacts.",
        "fields": [
          [
            "Specialty",
            "The energy reservoirs of the Sun Eyes are weak, and the sight darkens after a few minutes. However, the reservoir slowly recharges if the devices are moved. Even Palers with a leg malalignment and a limp rarely have problems with their Sun Eye.\n\nThe Sun Eye combined with the natural night vision talents of the Palers negates any darkness penalties."
          ],
          [
            "Chart Name",
            "Cyclops Eye"
          ],
          [
            "Effect",
            "No darkness penalty with Paler night vision, otherwise penalty reduced by 2D"
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
            "14000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Sunburst",
        "placeholder": "SUNBURST\nARTWORK PLACEHOLDER",
        "description": "Palers don’t need any light in their bunkers, which are brightened by LCD displays and blinking LEDs, but in unexplored hallways or in starless nights they are just as blind as any other person. This is why many carry one of the old Sunburst torches, wrapped in leather and holy cloth strips, augmented by capacitors, fragments of motherboards, mirror shards, and whatever else the old warehouses yield.\n\nBecause of their robust design, the artifacts are well suited as clubs. Actually, this is their main use, for there is an energy supply problem: the E-Cubes used in the lamps are usually empty, and the recharging stations in the bunkers have long since gone out of service.",
        "fields": [
          [
            "Specialty",
            "A fresh E-Cube gives energy for about (100) hours of permanent use."
          ],
          [
            "Effect",
            "Darkness penalty reduced 2D, 100 hours per E-Cube"
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
            "Value",
            "1200"
          ],
          [
            "Resources",
            "2"
          ]
        ]
      }
    ]
  },
  {
    "title": "Talisman",
    "items": [
      {
        "title": "Grim Sun",
        "description": "Not every Paler is considered worthy of guarding a Sun Disc. That is why the less fortunate work on various talismans in the cold light of the monitors and emboss round sheet metal with grim suns and intricate detailing, then punch a hole through them and attach them to their belts. These copies have no function othan than to inspire their wearers.",
        "fields": [
          [
            "Specialty",
            "Those who wear a grim sun get +1D to Mental Defense."
          ],
          [
            "Effect",
            "Mental defense: PSY+Faith/Willpower +1D"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "II"
          ],
          [
            "Value",
            "190"
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
    "title": "Technology",
    "items": [
      {
        "title": "Electronic Tools",
        "description": "Even Getrell did not expect the Dispensers to survive the centuries unscathed. In the bunkers, there are spare parts and tools to find and repair problems in the electrical system.",
        "fields": [
          [
            "Specialty",
            "+1D to the Action roll for manipulating electric devices."
          ],
          [
            "Effect",
            "Manipulate electrical devices: +1D to Action roll"
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
            "2400"
          ],
          [
            "Resources",
            "2"
          ]
        ]
      },
      {
        "title": "Throwing Pulsor",
        "description": "St. Elmo’s fire dances across the cylinder, and then the fluorescent lamps burst in a shower of sparks. The displays blink and fade. All electronic devices within a radius of 10 paces are dead, dead, dead.",
        "fields": [
          [
            "Specialty",
            "The Throwing Pulsor is a hand grenade that generates a powerful electromagnetic pulse when ignited, overloading and thus destroying any electrical device.\n\nOnly generators and reactors with special protection can take this. AMSUMOs are tough systems, but even they suffer (2) points of Structure Damage. Sun Discs and the locking mechanisms of the Dispensers are protected against the Throwing Pulsor."
          ],
          [
            "Effect",
            "Destroys all electronics within (10) m radius"
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
            "6000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Sesamite",
        "description": "Wherever there’s a keyhole, there’s a way. Palers prefer going that way with Sesamite, an electric lock pick. The mechanisms of the Sesamite rattle and hum in the keyhole while the Paler listens with eyes closed, carefully moving the artifact back and forth, slightly changing the angle—until there is a crack and the bar gives way.",
        "fields": [
          [
            "Specialty",
            "When picking a mechanical lock, the Paler gets +3D to AGI+Dexterity. Not usable for the electronic locks of the Dispensers."
          ],
          [
            "Effect",
            "Lock picking: AGI+Dexterity +3D"
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
            "18000"
          ],
          [
            "Resources",
            "5"
          ]
        ]
      }
    ]
  },
  {
    "title": "Weapons",
    "items": [
      {
        "title": "Submachine Gun",
        "placeholder": "SUBMACHINE GUN\nARTWORK PLACEHOLDER",
        "description": "The original guardians of the Sleepers were equipped with muffled submachine guns, ideally suited for combat in the closed tunnel systems of the Dispensers. Now, centuries later, these weapons have been passed down to the Palers.",
        "fields": [
          [
            "Specialty",
            "Some submachine guns are equipped with a bayonet and can be used like a knife, although with the handling of a gun, not of a light melee weapon. The bayonet takes up 1 slot."
          ],
          [
            "Caliber",
            "4.6x30 mm"
          ],
          [
            "Handling",
            "-"
          ],
          [
            "Distance",
            "10 / 40"
          ],
          [
            "Damage",
            "7"
          ],
          [
            "Magazine",
            "35"
          ],
          [
            "Qualities",
            "Smooth running (2T), Salvoes (3)"
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
      }
    ]
  },
  {
    "title": "Sun Discs",
    "items": [
      {
        "title": "Sun Discs",
        "description": "In the depths of the Dispensers, Palers find the mystical Sun Discs, flotsam of the gods, behind panels or in rooms suddenly unlocked. Usually they are made of ceramics, and their front has been artfully designed with metal and other materials: grim bronze faces, geometrical figures, worn brass, or perfectly smooth black glass. A word that the Palers use as name for the artifact is etched into the backside.",
        "fields": [
          [
            "Specialty",
            "There are probably hundreds of different types of Sun Discs, and many of them interact: they amplify each other, unlocking new functions or blocking old ones.\n\nThey all can be upgraded using codes from the RG bunkers. An upgrade is announced by a humming sound, by blinking light, or through vibrations. So far, no Sun Disc has been raised above level 3.\n\nIn some Sun Discs, new abilities awaken after an upgrade while others are only keys to RG facilities. Sun Discs need energy. Their reservoirs enable them to work for many hundreds of hours, but in the end, the indicator lamps flicker and the humming sounds die down.\n\nThe discs can be recharged in the charging stations of the bunkers—if the facility still provides energy."
          ]
        ]
      },
      {
        "title": "Phaethon",
        "description": "According to the oldest stories, Phaethon is the son of the sun god. The discs with this name are among the most famous ones, and every Paler child knows the grim bronze face they show. Phaethon shimmers when touched: at level 3, they blaze brightly. Interferences with other discs are unknown. At level 1, the disc opens most of the outer portals of Dispensers.",
        "fields": [
          [
            "Chart Name",
            "Phaeton"
          ],
          [
            "Effect",
            "Glows, opens portals in Dispensers"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "18000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Cataract",
        "description": "Verdigris on brass, curved parallel lines. The disc keeps humming when charged. If you trace the lines on it, the humming becomes the roaring of a waterfall until it reaches a high, resonant frequency. The sound is piercing and unpleasant and causes nausea in all bystanders.\n\nThe Cataract interacts with the Orbital disc. While Orbital shows surroundings, Cataract serves as ultrasound sensor and broadcasts detected obstacles to Orbital, where they are displayed as buzzing clouds of dots.",
        "fields": [
          [
            "Effect",
            "Hums unpleasantly, interacts with Orbital, reads surroundings by ultrasound"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "12000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Orbital",
        "description": "The Orbital disc is marble white but feels rough. When it is activated through pressure, tiny dots on the material shift and form black patterns. The disc rattles and hums as if it contains a handful of cockroaches. The patterns show black veins that mimic Bygone railroad lines and rivers. Along the border there are small triangles pointing outward: they lead the way to bunkers whose command codes are stored in the disc.\n\nInteracts with the Cataract disc.",
        "fields": [
          [
            "Effect",
            "Shows maps of the surroundings, can be updated with bunker positions"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "22000"
          ],
          [
            "Resources",
            "4"
          ]
        ]
      },
      {
        "title": "Arbiter",
        "description": "The front of the Arbiter disc is covered in dull sheet metal and indented with stylized fingers. They point outward from the center, forming a lopsided star. The Arbiter forms a radio connection to systems of the RG and hacks into them: the monitors show the cursor prompt for administrator commands. Also, the disc reboots countless RG artifacts and can deactivate all Sun Discs within a (2) meter radius, although it can also restart them. Every Arbiter level gives the Paler +2D to INT+Artifact Lore whenever he wants to modify an RG system.",
        "fields": [
          [
            "Effect",
            "Hacks RG systems: INT+Artifact Lore +2D, can activate and deactivate discs"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "VI"
          ],
          [
            "Value",
            "44000"
          ],
          [
            "Resources",
            "6"
          ]
        ]
      },
      {
        "title": "Quantum",
        "description": "The surface looks and feels like rough stone and is engraved with rings. The disc interacts with other Sun Discs, humming and buzzing when they are near. Level 1 recognizes other discs at (100) meters, level 2 at (500) meters, and level 3 at (1) km.",
        "fields": [
          [
            "Effect",
            "Detects other Sun Discs, range depends on level"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "9000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Quasar",
        "description": "The Quasar disc depicts a flaming sun. It is lushly adorned with wave lines refracting the light. Quasar discs can be charged by sunlight and serves as an energy reservoir. When another disc is pressed onto it, Quasar transmits the energy. This Sun Disc is the only way known so far to make spent discs come alive outside the bunker facilities.",
        "fields": [
          [
            "Effect",
            "Solar collector, can charge other discs"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "V"
          ],
          [
            "Value",
            "38000"
          ],
          [
            "Resources",
            "5"
          ]
        ]
      }
    ]
  }
];

const esc=v=>String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
const fmt=v=>esc(v).replaceAll("\n\n","<br><br>").replaceAll("\n","<br>");
function renderRank(id){
  const r=ranks[id],d=document.querySelector("#rank-detail");
  d.innerHTML='<p class="rank-kicker">SELECTED RANK</p><h3>'+esc(r.title)+'</h3><p>'+fmt(r.description)+'</p><dl class="entry-fields">'+r.fields.map(([a,b])=>'<div><dt>'+esc(a)+'</dt><dd>'+fmt(b)+'</dd></div>').join("")+'</dl>';
  document.querySelectorAll(".rank-node").forEach(b=>{const s=b.dataset.rank===id;b.classList.toggle("is-selected",s);b.setAttribute("aria-pressed",String(s));});
}
function renderPotential(i){
  const p=potentials[i];
  document.querySelector("#potential-detail").innerHTML='<p class="rank-kicker">SELECTED POTENTIAL</p><h3>'+esc(p.title)+'</h3><dl class="entry-fields">'+p.fields.map(([a,b])=>'<div><dt>'+esc(a)+'</dt><dd>'+fmt(b)+'</dd></div>').join("")+'</dl>';
  document.querySelectorAll(".potential-select").forEach((b,j)=>b.classList.toggle("is-selected",i===j));
}
function renderPotentials(){
  const l=document.querySelector("#potential-list");
  l.innerHTML=potentials.map((p,i)=>'<button class="potential-select" data-potential-index="'+i+'">'+esc(p.title)+'</button>').join("");
  l.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>renderPotential(+b.dataset.potentialIndex)));
  renderPotential(0);
}
function renderEquipment(){
  document.querySelector("#equipment-groups").innerHTML=equipmentGroups.map((g,i)=>'<details class="equipment-group" '+(i===0?"open":"")+'><summary><span>'+esc(g.title)+'</span><span class="equipment-count">'+g.items.length+' ENTRIES</span></summary><div class="equipment-group-body"><div class="equipment-grid">'+g.items.map(x=>'<article class="reference-card equipment-card">'+(x.placeholder?'<div class="equipment-art-placeholder asset-placeholder">'+fmt(x.placeholder)+'</div>':"")+'<h3>'+esc(x.title)+'</h3>'+(x.description?'<p>'+fmt(x.description)+'</p>':"")+'<dl class="entry-fields compact-fields">'+x.fields.map(([a,b])=>'<div><dt>'+esc(a)+'</dt><dd>'+fmt(b)+'</dd></div>').join("")+'</dl></article>').join("")+'</div></div></details>').join("");
}
document.querySelectorAll(".rank-node").forEach(b=>b.addEventListener("click",()=>renderRank(b.dataset.rank)));
renderRank("specter");
renderPotentials();
renderEquipment();
const navToggle=document.querySelector("#lorebook-nav-toggle"),sidebarScrim=document.querySelector("#sidebar-scrim");
const setSidebar=o=>{document.body.classList.toggle("sidebar-open",o);navToggle?.setAttribute("aria-expanded",String(o));};
setSidebar(matchMedia("(min-width: 761px)").matches);
navToggle?.addEventListener("click",()=>setSidebar(!document.body.classList.contains("sidebar-open")));
sidebarScrim?.addEventListener("click",()=>setSidebar(false));
document.querySelectorAll('.lorebook-sidebar a[aria-disabled="true"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));

