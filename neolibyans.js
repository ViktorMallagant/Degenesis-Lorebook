const ranks={
  "apprentice": {
    "title": "1 - Apprentice",
    "description": "Since the kid has been weaned from its mother’s breast, he has been nothing but trouble. He could fetch water from the well, but he’s too slim for that. He could scribble notes, but he can’t write yet. He has started asking for the meaning of the symbols on the Surge Tanks, wants to learn every single one. Send him to the Neolibyans, he’ll come around.\n\nAs an Apprentice, he will sweep the scriptorium for the next few years and learn to read and to write. Some arithmetic can’t hurt, either.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Result",
        "The Apprentice leaves the scriptorium only on his mentor’s orders. He copies texts, practices his handwriting and arithmetic. He is part of the company’s inventory now, eating free, receiving wonderful clothing—he is an investment."
      ],
      [
        "Equipment",
        "Balancer (little book wrapped in fur or leather containing checkered paper and abacus or digital calculator)"
      ]
    ]
  },
  "scribe": {
    "title": "2 - Scribe",
    "description": "Well, the writing part has worked out just fine. The young African still isn’t yet considered a Neolibyan, but he works his way up within the entourage. He keeps careful watch on the gains and losses of at least one merchant route, noting them down in their mentor’s ledgers.",
    "fields": [
      [
        "Prerequisite",
        "INT+Science 4; CHA+Expression 4; Authority 1"
      ],
      [
        "Result",
        "He has to write down the shipments and deliveries on a certain trade route. In discussions with suppliers or producers, he may use his Authority even if the person he talks to is not a Neolibyan."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "merchant": {
    "title": "3 - Merchant",
    "description": "So that’s it. The Auctioneer has embraced the young African and thus made him a Cult member. From now on, he lives in the Libyan’s tradition. He can break with his mentor and start his own enterprise with wealth accumulated so far. The world is his oyster.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Negotiation 6; PSY+Cunning 4; Resources 2; Network 2"
      ],
      [
        "Result",
        "With his official appointment as Merchant, the former Scribe is now a full-fledged Neolibyan. If he wants to gain Renown, he has to help his home village. This happens by reducing his Resources monthly or investing Dinars, depending on his rank. For rank 3 (Merchant) this means 100 Dinars or (-1) Resources; for rank 4 (Seafarer, Magnate, or Ambassador) 1,000 Dinars or (-2) Resources; for rank 5 (Cartographer, etc.) 10,000 Dinars or (-3) Resources. The Neolibyan can decide this month by month. For every month he cannot afford to spend this sum, his Renown decreases by (1).\n\nIf a Merchant wants to borrow money for an endeavor from the Bank of Commerce, he needs an Anubian Soul Seer at his side. However, those only come when the Merchant’s Renown is at least (2). If the Soul Seer eventually confirms his credibility, the Merchant gets a loan in Resource points equaling his Authority for one year. This means that with Authority (3), he would get (+3) Resources. Now he is indebted to the Bank of Commerce and has to pay back the loan the next year, losing double the amount of Resource points."
      ],
      [
        "Equipment",
        "Neolibyan rifle; Seal of the Libyan"
      ]
    ]
  },
  "seafarer": {
    "title": "4 - Seafarer",
    "description": "To stack Dinar upon Dinar can be satisfying for a while, but the wanderlust makes the Neolibyan leave the scriptorium. He stands at the docks smelling the algae and the salt and knows that the warehouses and workplaces have become too small for him. His home is out there. The Seafarer never stays in one place for long. He roams around exploring coasts and rivers. He enters deeply into the unknown. His explorations give the Cult a future.",
    "fields": [
      [
        "Prerequisite",
        "Merchant ship; AGI+Navigation 6; INT+Legends 6; INS+Orienteering 8; Resources 3; Authority 2; Renown 2"
      ],
      [
        "Result",
        "When the Seafarer finds new trade routes or unknown cities and reports this to the Bank of Commerce, he temporarily gets (+1) Resources (up to one year for big discoveries, up to six months for settlements so far unknown). The Renown determines how many Scourgers and Scrappers work for him (Renown x 1D x 10). At Renown (0), no one wants to sail with him. He gets (+1) Resources and (+1) Renown when he ferrets out pirates and pacifies trade routes."
      ],
      [
        "Equipment",
        "Astrolabium"
      ]
    ]
  },
  "cartographer": {
    "title": "5 - Cartographer",
    "description": "The Cartographer travels the land, drawing maps and recording merchant routes. His knowledge of Culture and people is enormous. Over his lifetime, he fills Atlases, following the traces of Bygone peoples to forgotten cities and learning dozens of languages.\n\nThe Cartographers’ ships are legendary, children draw their silhouettes in the sand and play pretend at being explorers. At some point, the greatest Cartographers dare crossing the Atlantic or sailing around the Horn of Africa. None of them have yet returned, but no African doubts that these great minds have reached their goals. May they look towards a peaceful death on the other side.",
    "fields": [
      [
        "Prerequisite",
        "At least 6 big discoveries; INS+Orienteering 10; CHA+Arts 8; INT+Legends 8; Renown 5"
      ],
      [
        "Result",
        "As a Cartographer, the Neolibyan has free access to the map room and the adjacent scriptoriums in the Bank of Commerce. If he organizes an expedition, high-ranking Anubians and Scourgers join him: at least one Dumisai will come along. Life as a Cartographer is hard without a bodyguard. Scrappers and Chroniclers compete for his work. The knowledge of uncharted passages, artifact belts, and unexplored ruin fields is worth a fortune. Chroniclers would even risk assassinating a Cartographer to attain his secrets."
      ],
      [
        "Equipment",
        "Atlas (level 1)"
      ]
    ]
  },
  "greathunter": {
    "title": "5 - Great Hunter",
    "description": "If you have seen Tripol, you have seen the world. But all the colorful garments under the billowing awnings, the glittering jewelry, displays full of treasures, all the talk about big business – all this keeps grating at the emotions until it has smoothed down all senses. Meanwhile, the Great Hunter stands on a grassy knoll in a foreign land. He listens to the wind. His rifle rests in the crook of his arm. He has escaped a world that was so protective and gaudy that it ate away his soul. Now, he feels the beast within again, stalking his mind, circling his reason. Grinning, he accepts it. Surrounded by Spore Beasts and Biokinetics, there is no predator more dangerous than himself, even here.",
    "fields": [
      [
        "Prerequisite",
        "Hunting rifle; at least one killed Psychonaut; AGI+Projectiles 10; INT+Focus 8 or INS+Primal 8; INS+Survival 8; Renown 5"
      ],
      [
        "Result",
        "Great Hunters belong to an elitist caste. They all have chosen adventure over the big money—though of course they don’t live completely without luxury. They know each other, meet in expensive establishments, and exchange hunting experiences. If a Great Hunter needs help from other hunters, his Allies Background rises by (1) per Rapture vanquished for this purpose. A hunter who has shot a Psychonaut in every Culture thus gets (+5) Allies. In the Great Hunters’ subculture, there are two master smiths only catering to hunters. Their hunting rifles are legendary masterpieces of breathtaking precision and impact. The prices are just as legendary. The Great Hunter can buy masterpiece rifles.\n\nEven the Spitalians listen to the stories of a Great Hunter. The Spitalians are very grateful for the information on Raptures and their attack patterns: the Great Hunter’s negotiations with them are now at +2D to all Charisma Skills."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "magnate": {
    "title": "4 - Magnate",
    "description": "The Magnate is rich beyond any reason and does not intend to stop collecting more wealth any time soon.\n\nHis entourage fills a whole neighborhood, carrying supplications from impoverished competitors to him, catering to him and his guests and passing his business decisions on to his branches. His empire is growing.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Conduct 8; CHA+Negotiation 10; PSY+Faith 6 or PSY+Willpower 6; Allies 4; Authority 3; Resources 4"
      ],
      [
        "Result",
        "The Magnate has built himself an empire. He has offices in many African cities; hundreds of Neolibyans in the Mediterranean area are subordinate to him. He has the right to rent a suite with scriptorium at the Bank of Commerce. This costs (-1) Resources per month or 10,000 Dinars. However, for as long as he pays, his Renown rises by (1) every month."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "sheikh": {
    "title": "5 - Sheikh",
    "description": "It would take him days to visit all his plantations in a Kom. He leaves the day-to-day business to several Magnates, who push around his ships and caravans on the map of the world, from one concession route to the next. Gaining wealth is not even a challenge anymore, just a rising curve counting his Dinars on blackboards of his legion of accountants. No one is closer to the Libyan in wealth and influence than the Sheikhs.\n\nAfter centuries of dominance, the Bank of Commerce has become synonymous with Africa’s economy, and the Sheikhs head the Bank of Commerce. They have the power to not only influence the continent’s economical development, but also its Cultural one, overriding the Scourgers and Anubians. They called the Spitalians to Qabis and vouched for their safety. The peace with the Voivodes is their work, or at least partly. What the Sheikhs decide will find a way into the Africans’ heads.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Expression 10; PSY+Faith 8 or PSY+Willpower 8; Allies 3; Authority 4; Resources 6; Secrets 4; Renown 6"
      ],
      [
        "Result",
        "The Sheikhs lead the Bank of Commerce and direct Africa’s economic and cultural development. A Sheikh lets Magnates work for him and concentrates on strategic developments and politics. He wanders from city to city to negotiate voting results with allies and enemies. The competition intently watches and interprets his every step. In other countries and cultures, they treat him like a king. With a gesture, he sends hundreds of Scourger packs to different locations or into combat zones. Only Cairo is off limits to him."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "raider": {
    "title": "5 - Raider",
    "description": "At home, the Neolibyan owns a few hectares of land and maybe exploits one or two concessions. It is never enough to make ends meet. Instead, his true wealth travels with him: his giant ship full of Surge Tanks and Koms. With it, he sails off to conquer European seas of debris. He is not to keen on the flaunting in Tripol, he is fully happy to soak in the world of the Crow.",
    "fields": [
      [
        "Prerequisite",
        "Merchant ship; Surge Tank; AGI+Navigation 10; PSY+Domination 8; Authority 6; Resources 5"
      ],
      [
        "Result",
        "Consuls at the European Mediterranean coast aid the Raider who promises them a steady flow of riches. When he plans an expedition, 1D x Renown x 10 Scrappers accompany him for 10 Dinars a day. Chroniclers hate the Raider. All social interaction between him and the Chroniclers are problematic and happen at -4D.\n\nThe Raider chooses a port of call. There, he has access to a wharf for repairs, Scrapper shanties, and a lodge. The little port city can become a metropolis over the years, and the lodge can be expanded to a palace. Of course, the Chroniclers are envious. They send Shutters to infiltrate the place and sabotage ships and equipment. Judges are paid to incite revolts, Apocalyptics are urged to build a nest in the port city to corrupt the place from within. The Scrappers are grateful."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "ambassador": {
    "title": "4 - Ambassador",
    "description": "The Ambassador embodies the Libyan’s principle of diplomacy. He is the mediator between rivals. He negotiates treaties and develops commercial agreements. No concession is assigned without an Ambassador checking, correcting, and finally signing off on its paragraphs.\n\nThe Magnates say that is no way to become rich, but the Ambassador begs to differ, for he doesn’t measure his wealth in Dinars but in the number of strands in his network. After all, it spans two continents - that might as well be the entire world!",
    "fields": [
      [
        "Prerequisite",
        "CHA+Negotiation 8; CHA+Conduct 10; INS+Empathy 8; Allies 4; Renown 4; Network 3"
      ],
      [
        "Result",
        "The Ambassador has free access to all embassies of all Cults. If he asks for an appointment, he gets it, be it with Justitian’s Senates, the Baptists of Cathedral City, or the Voivodes. He can use his Authority for negotiations even when his counterpart is not Neolibyan."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "waziri": {
    "title": "5 - Waziri",
    "description": "Magnates are like a pack of jackals fighting for every bone. Those who can recognize and weigh all sensitivities are worthy to become Waziri for a group of Sheikhs.\n\nHe will be their voice and advisor, taking part in their meetings and removing disagreements. He represents their interests; their goals are his law. One word from his mouth and entire economic sectors tremble and rearrange. Within the Sheikhs’ enterprises, he has the power of attorney. He moves mountains of Dinars and acts unchecked.\n\nEven if all that money isn’t strictly his, a Waziri belongs amongst the most influential Neolibyans.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Seduction 8; PSY+Cunning 8; INS+Empathy 10; Allies 5; Renown 6; Authority 4"
      ],
      [
        "Result",
        "Sheikhs appoint a Waziri to act as a mediator between them. To do so, he has to have a Renown of at least (5): if his score decreases, he’s demoted to Ambassador again. As long as he has the rank of a Waziri, he gets Resources (+2). He has a lot of authority in the Sheikhs’ ventures and can even confront Magnates."
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "consul": {
    "title": "5 - Consul",
    "description": "Magnates and Sheikhs cannot manage every city and estate personally. Additionally, there is the potential annual change of ownership after the auction – but it takes many moons to learn the ropes of a city. Profitable centers of commerce or strategically important towns are too important to be exposed to this. Thus, the Bank of Commerce assigns them to Ambassadors of outstanding merit, the Consuls.\n\nA Consul organizes a settlement’s defense, has the roads repaired, the port expanded. It is he who invites the savages from the wasteland for tea and offers them a peace treaty, tossing them gifts that make their eyes glitter with a flick of his wrist – or who calls in the Scourgers and removes the danger in a hail of gunfire.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Leadership 10 or PSY+Domination 10; CHA+Expression 8; Allies 4; Authority 5"
      ],
      [
        "Result",
        "The Consul governs a city or a region given to him by Magnates or Sheikhs. He controls the guards, can tear down buildings or construct new ones. He can call for Scourgers to purge the surrounding countryside of savages. As a Consul, he has to pour oil on the troubled waters between the Crow and the Lion. He negotiates with Fragments, Baptists, and Corps Commanders. He makes decisions concerning whether there is to be war or peace. As a master strategist, he has an army of informers, snitches, and traitors on his payroll. His Network permanently rises by (1)."
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
    "title": "I. Lion’s Share",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans"
      ],
      [
        "Effect",
        "The Neolibyan can easily read whoever is across the negotiating table from him, he knows their vanities, praises and threatens wherever he deems necessary, until ultimately he leaves with the best possible deal - for himself, at least."
      ],
      [
        "Rules",
        "When negotiating a deal, the Neolibyan gains (1) Trigger per Potential level on the roll. This can bring him a bigger share or give him a lower price."
      ]
    ]
  },
  {
    "title": "II. Marksman",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans, Focus"
      ],
      [
        "Effect",
        "The rifle in his hands does not tremble; his gaze follows the iron signs into the distance. The Neolibyan controls his breathing, follows every movement of the target with the weapon, holds his breath, and pulls the trigger. The target shakes and falls. Heart shot."
      ],
      [
        "Rules",
        "The Marksman aims for a complete Combat Round and fires in the next Round if he was not distracted or attacked. He adds Triggers equal to the Potential level to his AGI+Projectiles roll."
      ]
    ]
  },
  {
    "title": "III. Nine Lives",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans"
      ],
      [
        "Effect",
        "When threatened with destruction, a Neolibyan jumps into action; his instincts awaken, his mind trembles, and he pushes his body to move faster than he thought possible."
      ],
      [
        "Rules",
        "In life-threatening situations, the Neolibyan adds +1D per Potential level to every Action roll potentially able to save his life, at the cost of (1) Ego Point per Action."
      ]
    ]
  },
  {
    "title": "IV. Inspiration",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans"
      ],
      [
        "Effect",
        "The Libyan is a shining example in his descendants’ minds. The young Scribes look up to their mentors full of awe, admiring their foresight and their understanding of the flow of goods. It is in the blood of the Neolibyans to worship, emulate, and even surpass their idols."
      ],
      [
        "Rules",
        "The Neolibyan blazes a trail through any obstacle. Should the Neolibyan succeed in an Action with at least (3) Triggers, they kindle a fire in their comrades’ hearts. They add +1D to their next Action per Potential level, so long as it is similar to the Neolibyan’s own Actions."
      ]
    ]
  },
  {
    "title": "V. At Eye Level",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans"
      ],
      [
        "Effect",
        "The Neolibyan’s behavior lures his negotiating partner into forgetting who is who, and which man is the more rich and powerful. The Neolibyan meets the stranger eye to eye, as a friend or ally - and friends and allies are to be listened to and trusted, aren’t they?"
      ],
      [
        "Rules",
        "Whenever a Neolibyan enters a discussion or negotiation with a non-Neolibyan, he gets +1D per Potential level on all CHA Skills. His PSY Skills, however, are at -3D throughout the discussion."
      ]
    ]
  },
  {
    "title": "VI. Wheel of Fortune",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans"
      ],
      [
        "Effect",
        "Normal people are cursed to remain normal because they refuse to risk more than crumbs on the scales of life. The higher the jump, the farther the fall, or so the simple people say. The Neolibyan scorns this attitude, no worthwhile reward comes without risk. He puts gold on the scales with both hands, and expects great results."
      ],
      [
        "Rules",
        "The more a Neolibyan risks with this Potential, the higher the possible profit. Before an Attack or Defense roll, the Neolibyan chooses to set aside some dice that will not be rolled. If the Action succeeds, he gets (1) Trigger for the following Action for every (2) dice he has not used. The Neolibyan can risk (2) dice in this way per Potential level."
      ]
    ]
  },
  {
    "title": "VII. Crown of Creation",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans, Rank 5, Renown 6, CHA+Leadership 12"
      ],
      [
        "Effect",
        "The poor become poorer, the rich become richer. A Neolibyan’s collective successes are legendary. His long, energetic and wise leadership has created a network that is able to overcome even the most difficult of burdens. Whenever a venture fails or an ally cuts ties, someone new steps in to offer his services at once."
      ],
      [
        "Rules",
        "As long as the Neolibyan’s Renown is (6), all of his other Backgrounds remain static and cannot be lowered by anyone but himself. At Potential level 2 the Renown threshold is lowered to (5), and at Potential level 3 it is lowered to (4)."
      ]
    ]
  },
  {
    "title": "VIII. Silver Tongue",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans, Trader, CHA+Conduct 8, CHA+Science 6"
      ],
      [
        "Effect",
        "Part of a Neolibyan’s conquest of new markets is the first impression he makes upon entering foreign territory. Neolibyans are masters of language, and they come prepared. They study foreign dialects before entering negotiations, learn the nuances of a joke being told in the right slang, and impress chieftains with their extensive knowledge of the tribe’s history."
      ],
      [
        "Rules",
        "When dealing with a group or a single person for the first time, the Neolibyan adds +1D per Potential level to all PSY and CHA related rolls. Once a month, if he manages to achieve at least (3) Triggers upon his first impression, his Renown additionally rises by (1). Furthermore, he speaks (3) foreign dialects fluently per Potential level."
      ]
    ]
  },
  {
    "title": "IX. Tip of the Scale",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans, Faith, PSY+Cunning 10"
      ],
      [
        "Effect",
        "A Neolibyan reigns to challenge his own destiny. He is born to rule. Whatever stands in his way needs to be removed in order to make room for him to follow his path to the stars."
      ],
      [
        "Rules",
        "In a dire situation, the Neolibyan calls upon his fate in order to change his destiny. By spending (3) Ego Points before an Action roll, he makes the roll eligible for this Potential. If the result of his roll is unsatisfactory he may spend yet another (3) Ego to reroll his dice. At Potential level 2 the cost for rerolling is (2) Ego and the follow up cost is (4). At Potential level 3 the initial cost is (1) Ego point and the follow up (5)."
      ]
    ]
  },
  {
    "title": "X. Heir of the Libyan",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans"
      ],
      [
        "Effect",
        "Those who hail from the ancestry of the Libyan himself are born into a life of magnitude and resources beyond one’s imagination. Direct descendants of the Libyan wield moral authority within their Cult and dominate chief positions at the Bank of Commerce. They start out with benefits other members of the Cult cannot compete against."
      ],
      [
        "Rules",
        "As soon as the lineage between the Libyan and the character is proclaimed, his Authority rises by (2) per Potential level. As long as the heredity is proven, the Neolibyan’s Authority cannot be lowered. In addition, when the future of the Cult is discussed the Character adds (1) Trigger per Potential level to any PSY or CHA related rolls to steer negotiations in his direction."
      ]
    ]
  },
  {
    "title": "XI. Duelist",
    "fields": [
      [
        "Prerequisite",
        "Neolibyan, Great Hunter, Focus"
      ],
      [
        "Effect",
        "Nobody likes a challenge more than a Great Hunter. A duel is a way to test one’s skills and precision. It’s a match between two men, or man versus beast, with the chances equally split amongst the contenders. However, nothing irritates a Great Hunter more than having a third party interfering with his chance of winning."
      ],
      [
        "Rules",
        "When the Hunter is fighting a single opponent, he may choose to consider it a duel. As long as nobody interferes he adds +1D per Potential level to any of his rolls. In the event of a third party joining the fight, the Hunter must in turn subtract 1D per Potential level from all his rolls instead. Duels don’t have to be physical altercations necessarily, the Great Hunter must decide what he considers a duel."
      ]
    ]
  },
  {
    "title": "XII. Banker’s Trust",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans, Trader, Authority 3, Renown 3"
      ],
      [
        "Effect",
        "The Bank of Commerce is a monolith. Those who have earned its trust through previous expeditions, timely payback of loans and wise acquisition of profits will have an easier time recieve loans in the future."
      ],
      [
        "Rules",
        "The Trader has close ties with the Bank of Commerce. When talking this institution into funding him, he may add (1) Trigger to any PSY or CHA related rolls, to turn the negotiations in his favor. Every Trigger obtained on his roll will lower the interest rate by 10% of its initial value, up to 0%. For example, with 5 Triggers a 12% interest rate on a loan turns into a 6% one."
      ]
    ]
  },
  {
    "title": "XIII. Diamond in the Sand",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans, Renown 6, PSY+Faith/Willpower 10"
      ],
      [
        "Effect",
        "Many people are nothing but background noise. The Neolibyan stands out from the crowd. He is a diamond in the sand, either by his own beliefs or the perception of his peers. What he touches turns to gold. Whichever adversaries stand in his way, he overcomes them effortlessly. He is destined for greater things and shapes his own future with nothing but his sheer will."
      ],
      [
        "Rules",
        "In a fight, the Neolibyan is able to summon his fate in order to shine in the most dramatic moment. After any roll, the character may forgo some Triggers he obtained and store them. Triggers stored this way do not count as Successes for the initial roll. The maximum amount of Triggers that can be stored at any given time is equal to his Potential level x2. Before any Action roll during the same battle, he may add all of the stored Triggers at once."
      ]
    ]
  },
  {
    "title": "XIV. Conqueror",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans, Primal"
      ],
      [
        "Effect",
        "Clawing your way to the top is a long and dirty fight. Neolibyans who know that there are profits to be made from a successful campaign, fight for the success of their mission all the more ferociously. Today’s efforts pay off yesterday’s hardships and reap tomorrow’s fortune."
      ],
      [
        "Rules",
        "For the Neolibyan, greed is a source of pure energy. If the outcome of a fight yields a potential rise in Resources (loot, money, power, fame) he gains (1) Ego Point per Potential level at the start of any conflict. If the rise in Resources depends on the outcome of an endeavor, he gains (1) Ego Point and heals (1) Flesh Wound per Potential level per day. In both scenarios, he subtracts 1D per Potential level on any INT related rolls."
      ]
    ]
  },
  {
    "title": "XV. Ecstasy of Gold",
    "fields": [
      [
        "Prerequisite",
        "Neolibyans"
      ],
      [
        "Effect",
        "Money talks. Bargaining with a Neolibyan often yields incredible results. Investing into their wisdom can turn into another man’s fortune. The ecstasy of gold makes business partners ignore the risks of such bargains."
      ],
      [
        "Rules",
        "Once someone has tasted the Neolibyan’s Dinars, it becomes harder to refuse them. For each previously successful deal the Neolibyan struck with a partner, he adds (1) Success to any CHA or PSY related rolls required to negotiate a new deal. The bonus cannot exceed his Potential level."
      ]
    ]
  }
];
const equipmentGroups=[
  {
    "title": "General",
    "items": [
      {
        "title": "Astrolabe",
        "description": "Astrolabes, more beautiful than practical, are still used by seafarers to determine the cardinal directions by the solar altitude of a star.",
        "fields": [
          [
            "Specialty",
            "+1D to INS+Orienteering."
          ],
          [
            "Effect",
            "INS+Orienteering +1D"
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
            "650"
          ],
          [
            "Resources",
            "1"
          ]
        ]
      },
      {
        "title": "Atlas",
        "description": "A Seafarer’s atlas is his life’s work. It contains his discoveries, coastlines he has corrected, and shoals he has charted.",
        "fields": [
          [
            "Specialty",
            "An Atlas can be raised from level 1 to level 3. Per level, the owner gets +1D to INS+Orienteering. Every three big discoveries give +1 level."
          ],
          [
            "Effect",
            "Upgradable (1-3). INS+Orienteering + Level x 1D"
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
            "1000 x Level"
          ],
          [
            "Resources",
            "2, 3, 4"
          ]
        ]
      }
    ]
  },
  {
    "title": "Talismans",
    "items": [
      {
        "title": "Balancer",
        "description": "The Balancer is a heavy book adorned with lion hair or metal ornaments. The Neolibyan uses it to collect copies of his trade concessions, protocols of important bargains, and invoices. Those who can afford it upgrade their Balancer with a Bygone pocket calculator and secure the book with a lock or a trap. No Neolibyan would ever give his Balancer away.",
        "fields": [
          [
            "Specialty",
            "If a Neolibyan loses his Balancer to a competitor, the new owner gets +4D to all business endeavors against the victim of the theft for the whole next year."
          ],
          [
            "Effect",
            "When lost: +4D to any business endeavors against former owner"
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
            "500"
          ],
          [
            "Resources",
            "1"
          ]
        ]
      },
      {
        "title": "Pocket Calculator",
        "description": "A Balancer can be upgraded with a pocket calculator. This gives the Neolibyan +4D to INT+Science when numbers are involved.",
        "fields": [
          [
            "Effect",
            "Math: INT+Engineering +4D"
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
            "20000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Lock",
        "description": "A simple lock protects the business data against curious eyes. It demands an Action roll on AGI+Dexterity (5) from a spy who wants to look into the Balancer without having a key.",
        "fields": [
          [
            "Effect",
            "The lock stops trespassers from searching; lock picking: AGI+Dexterity (5)"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "III"
          ],
          [
            "Value",
            "4000"
          ],
          [
            "Resources",
            "2"
          ]
        ]
      },
      {
        "title": "Trap",
        "description": "The lock can be additionally secured with a trap. Those who tamper with it without disarming the hidden mechanism with a flick of the wrist, spot the needle only when it pierces their finger. The contact poison has a Potency of (5) and drains (1) Ego Point per Round. The Effects fade after (4) hours.",
        "fields": [
          [
            "Effect",
            "Trespass: poison with Potency (5), (-1) Ego Point per Round; fades after (4) hours"
          ],
          [
            "Encumbrance",
            "-"
          ],
          [
            "Tech",
            "III"
          ],
          [
            "Value",
            "8000"
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
    "title": "Weapons",
    "items": [
      {
        "title": "Curved Dagger",
        "description": "A Neolibyan sees his curved dagger as more of a statement than a weapon. The blade symbolizes his ties to an ancient Africa where a man was nothing without a dagger. Like the hunting rifles, the curved daggers are adorned with gold and bejeweled. They are worn on the belt, plainly visible for everyone to see.",
        "fields": [
          [
            "Specialty",
            "Add-on slots can be used for ornamentation, similar to the hunting rifle."
          ],
          [
            "Handling",
            "+1D"
          ],
          [
            "Distance",
            "1"
          ],
          [
            "Damage",
            "2+F/3"
          ],
          [
            "Magazine",
            "-"
          ],
          [
            "Qualities",
            "Special"
          ],
          [
            "Encumbrance",
            "1"
          ],
          [
            "Tech",
            "II"
          ],
          [
            "Slots",
            "2"
          ],
          [
            "Value",
            "180"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Neolibyan Hunting Rifle",
        "description": "It is said that you can tell a Neolibyan’s wealth from his garb, the good teeth of his followers, and his rifle. The precision rifles fashioned in African workshops are beautifully crafted individual items, and their glory symbolizes their owner’s status. Some Neolibyans have their rifle bejeweled with gold and silver, while others prefer gemstones or ivory.",
        "fields": [
          [
            "Specialty",
            "Augmentation slots can be fitted with adornments for 10,000 Dinars each. Every adornment slot gives the Neolibyan +1D to social interaction with other Neolibyans."
          ],
          [
            "Chart Name",
            "Hunting rifle (Neo.)"
          ],
          [
            "Caliber",
            ".357"
          ],
          [
            "Handling",
            "+1D"
          ],
          [
            "Distance",
            "30 / 120"
          ],
          [
            "Damage",
            "6"
          ],
          [
            "Magazine",
            "4"
          ],
          [
            "Qualities",
            "Special"
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
            "1800"
          ],
          [
            "Resources",
            "3"
          ]
        ],
        "image": "assets/neolibyan-hunting-rifle.webp?v=20260929-3",
        "alt": "Neolibyan hunting rifle"
      },
      {
        "title": "Masterpiece Rifle",
        "description": "Only the Great Hunters may one day shoot at a Psychonaut with a Masterpiece Rifle.\n\nEvery weapon is a beautiful piece crafted by a master smith over several months of work. They are simple in design and only adorned with a few silver inlays, yet still everyone recognizes the value of a Masterpiece Rifle, which is several times higher than even the most beautiful hunting rifle.",
        "fields": [
          [
            "Specialty",
            "Extremely valuable. Extreme quality."
          ],
          [
            "Caliber",
            ".50GL"
          ],
          [
            "Handling",
            "+2D"
          ],
          [
            "Distance",
            "50 / 400"
          ],
          [
            "Damage",
            "12"
          ],
          [
            "Magazine",
            "4"
          ],
          [
            "Qualities",
            "Thunder Strike"
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
            "1"
          ],
          [
            "Value",
            "14000"
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
    "title": "Vehicles & Mounts",
    "items": [
      {
        "title": "Surge Tank",
        "description": "The Surge Tank is the giant amongst the post-Eshaton vehicles. On massive tracks it rumbles through the ruins, invincible against the efforts of the barbaric Clanners of Europe. For the Neolibyan, it is a mobile base providing him with the luxury he’s used to, but also with safety on extended looting trips or business visits.\n\nIn the cargo holds, tons of artifacts can be stored, and the garage offers room for 12 Koms.",
        "fields": [
          [
            "Specialty",
            "Surge Tanks can be augmented. The slots can be used for cannons."
          ],
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
            "6"
          ],
          [
            "Body",
            "200"
          ],
          [
            "Structure",
            "100"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Slots",
            "6"
          ],
          [
            "Value",
            "1500000"
          ],
          [
            "Resources",
            "6"
          ]
        ],
        "image": "assets/surge-tank.webp?v=20260929-2",
        "alt": "Neolibyan Surge Tank"
      },
      {
        "title": "Trading Ship",
        "description": "Captured ships or those freed from the silt of centuries are repaired and sold to the Neolibyans. They set an army of carpenters and goldsmiths to work on the ship to free the rooms of the Merchant from profanity and obvious poverty. A trading ship offers room for family and scribes: a Neolibyan suffers no lack while on board.",
        "fields": [
          [
            "Specialty",
            "Like the Surge Tank slots, the ship slots can be used for cannons."
          ],
          [
            "Chart Name",
            "Merchant vessel"
          ],
          [
            "Max. Speed",
            "2"
          ],
          [
            "Acceleration",
            "2 Rounds"
          ],
          [
            "Brake",
            "10 Rounds"
          ],
          [
            "Armor",
            "2"
          ],
          [
            "Body",
            "50"
          ],
          [
            "Structure",
            "25"
          ],
          [
            "Tech",
            "III"
          ],
          [
            "Slots",
            "4"
          ],
          [
            "Value",
            "35000"
          ],
          [
            "Resources",
            "3"
          ]
        ]
      },
      {
        "title": "Tanker",
        "description": "",
        "fields": [
          [
            "Max. Speed",
            "2"
          ],
          [
            "Acceleration",
            "5 Rounds"
          ],
          [
            "Brake",
            "20 Rounds"
          ],
          [
            "Armor",
            "5"
          ],
          [
            "Body",
            "200"
          ],
          [
            "Structure",
            "100"
          ],
          [
            "Tech",
            "IV"
          ],
          [
            "Slots",
            "8"
          ],
          [
            "Value",
            "800000"
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
  document.querySelector("#equipment-groups").innerHTML=equipmentGroups.map((g,i)=>'<details class="equipment-group" '+(i===0?"open":"")+'><summary><span>'+esc(g.title)+'</span><span class="equipment-count">'+g.items.length+' ENTRIES</span></summary><div class="equipment-group-body"><div class="equipment-grid">'+g.items.map(x=>'<article class="reference-card equipment-card">'+(x.image?'<div class="equipment-art"><img src="'+x.image+'" alt="'+esc(x.alt||x.title)+'"></div>':x.placeholder?'<div class="equipment-art-placeholder asset-placeholder">'+fmt(x.placeholder)+'</div>':"")+'<h3>'+esc(x.title)+'</h3>'+(x.description?'<p>'+fmt(x.description)+'</p>':"")+'<dl class="entry-fields compact-fields">'+x.fields.map(([a,b])=>'<div><dt>'+esc(a)+'</dt><dd>'+fmt(b)+'</dd></div>').join("")+'</dl></article>').join("")+'</div></div></details>').join("");
}
document.querySelectorAll(".rank-node").forEach(b=>b.addEventListener("click",()=>renderRank(b.dataset.rank)));
renderRank("apprentice");
renderPotentials();
renderEquipment();
const navToggle=document.querySelector("#lorebook-nav-toggle"),sidebarScrim=document.querySelector("#sidebar-scrim");
const setSidebar=o=>{document.body.classList.toggle("sidebar-open",o);navToggle?.setAttribute("aria-expanded",String(o));};
setSidebar(matchMedia("(min-width: 761px)").matches);
navToggle?.addEventListener("click",()=>setSidebar(!document.body.classList.contains("sidebar-open")));
sidebarScrim?.addEventListener("click",()=>setSidebar(false));
document.querySelectorAll('.lorebook-sidebar a[aria-disabled="true"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));

