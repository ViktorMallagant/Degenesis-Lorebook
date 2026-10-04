const ranks={
  "scout": {
    "title": "1 - Cadet",
    "description": "Come one, come all. The only requirement to join the Resistance as a Cadet is that the applicant takes a vow on the spirit of Franka itself to set aside any other obligations for the duration of his service. Once the ceremony is complete, led by a Savant and spoken in an ancient dialect of the Frankan tongue, the new Resistance member can rise and join his new brothers and sisters in celebration. Training starts at 0600 tomorrow, don’t be late. The fighters of the Resistance are held in high esteem in their domain. They get +1D to all social interactions with the free Clans of Franka. This bonus applies to all Resistance ranks.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Equipment",
        "Tricolor badge; Field manual of the Resistance (+1D to INT+Legends concerning Franka, Pheromancers and drones)"
      ]
    ]
  },
  "hunter": {
    "title": "2 - Chasseur",
    "description": "He’s managed to make it through his first few excursions into the swamp, killed a couple of sickly drones expelled from their main hive, and proved to his instructors that he understands the basics. Good enough for now! The Cadet rises to Chasseur, and is attached to the main Resistance force. Now, he gets sent on missions deeper into Pheromancer territory, joining up with Spitalian strike teams to assault spore fields and Aberrant-controlled villages. His training never stops, however; knowledge is survival out in the swamp, and he studies hard. Behavioral studies, field reports, dissection records, all of it is used by the Resistance to equip their soldiers with the understanding of how to bring down their enemies: the Chasseur adds +1D to all Attack rolls against Pheromancers and drones. Chasseurs have free access to inns and hostels in the cities of Franka, where they are cheered and celebrated as the heroes of the people. They do not have to work, and instead are supported and fed for free everywhere in Franka.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Projectiles 6, INS+Survival 6"
      ],
      [
        "Equipment",
        "Hunting rifle with bayonet"
      ]
    ]
  },
  "gatherer": {
    "title": "2 - Gendarme",
    "description": "Everyone knows that true glory is found out in the deep forests, crawling through knee-deep swamp muck to slaughter the forces of the enemy. However, just as essential is the work of the Gendarmes back home. They are tasked with maintaining order in the settlements and war camps of the Resistance, functioning as both a logistical division and a military police force. They ensure that supplies are passed out to the Chasseurs, that ammunition is distributed properly, and that the Resistance’s soldiers are behaving correctly – they can’t win over the hearts and minds of the free peoples of Franka if they present themselves as uncultured ruffians. Additionally, the Gendarmes organize the cooperative efforts with the Spitalians, and add +1D to rolls when negotiating with the Cult of Doctors.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Projectiles 6, Authority 2"
      ],
      [
        "Equipment",
        "Uniform; Light pistol"
      ]
    ]
  },
  "tribalwarrior": {
    "title": "3 - Commadant",
    "description": "He’s proven himself under fire, led squads of Chasseurs charging headfirst into the fray, and – most importantly – he isn’t dead yet. All of these are the mark of a special talent, someone who can be relied upon and trusted with more responsibility in the war against Franka’s oppressors. The Commandant’s Allies and Authority Backgrounds are raised by (+1), and he can apply his Resources to the Spitalians at a penalty of (-2). With his new station comes a new set of privileges. He no longer needs to scrounge up his own possessions and wind his way through the bureaucracy of the Savants to obtain equipment, instead he takes whatever he needs in the name of the Resistance’s fight – let the worrywarts in Toulouse handle the fallout, he has a war to win. He can draft reservists from the population, can confiscate food and weapons for his soldiers, and can dispense martial justice: he is at liberty to execute criminals on the spot, even without a time-wasting trial and formal verdict.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Projectiles 7, CHA+Leadership 7, INS+Survival 7, Renown 3"
      ],
      [
        "Equipment",
        "Uniform; Pistol; Grenades (smoke, ozone, fungicide)"
      ]
    ]
  },
  "shaman": {
    "title": "3 - Savant",
    "description": "The Chasseurs and Commandants fight to make Franka a proud nation once again, but the Savants fight to ensure the people remember the proud nation it once was. As archivists they work to keep expanding the Resistance’s foundation: the people need something to fight for, and the Savants provide just that. They categorize and document the artifacts of Franka’s past recovered during campaigns, trade with Scrappers and explorers for precious tidbits, and occasionally lead their own expeditions into the swamps to hunt down especially significant items. These are brought back to the cities on the coast, where the Savants showcase the glorious creations of Frankans long gone, reminding the population of their illustrious heritage and forcing them to confront the reality of their present situation. Whenever Franka, its culture, or its history are concerned, the Savant adds +1D to all INT Action rolls. Additionally, the Savants take up the role of civil servants for the people, handling administrative duties and ensuring the cogwheels of their military continue to function.",
    "fields": [
      [
        "Prerequisite",
        "INT+Legends 8, CHA+Expression 8, Authority 3"
      ],
      [
        "Equipment",
        "Seal of the Resistance (to bear witness for agreements and decrees)"
      ]
    ]
  },
  "chieftain": {
    "title": "4 - Général",
    "description": "A Général’s Renown attracts Cadets. He is a hero amongst heroes, the figurehead of a new era. His personal acts of resistance inspire the people of Franka to follow in his footsteps. Wherever he gives a speech, people listen. If the Général actively looks for new recruits, his Renown decides how many fighters he can win for the Resistance after a week of beating the drum: Renown x 1D. Thus, in just a few short months the Général can mobilize entire regions to follow him into battle. At Renown (0), however, his force is plagued with deserters and cowards – one Cadet abandons the cause per week, instead. Spitalians have no command over a Général. They suffer an automatic penalty of -1D to any rolls trying to exert their authority while negotiating with him. In and around the city of Toulouse, where the Général’s influence and fame is at its highest peak, this penalty rises to -3D.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Melee 7, AGI+Projectiles 8, CHA+Leadership 9, INT+Legends 7, Authority 4, Renown 4"
      ],
      [
        "Equipment",
        "Uniform; Officer’s coat and saber; Assault rifle"
      ]
    ]
  },
  "champion": {
    "title": "5 - Maréchal",
    "description": "The Maréchal de Franka is the supreme commander of the entire Resistance. He is the mastermind behind every troop movement and campaign, and he usually plans several generations ahead. To his soldiers, his word is absolute – beyond the mere shackles of the chain of command, his voice rings out with the might of all of Franka behind it. He appoints Générals to lead his forces, negotiates with the rulers of cities to accommodate his men, and coordinates eye-to-eye with the Cults. His Allies Background can never fall below (6). For the Maréchal, there can only ever be a single goal. Liberating Franka from all the chains holding it down, the Pheromancers, the invaders, the Cults. He will stop at nothing, and sacrifice anything, to achieve it.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Melee 8, AGI+Projectiles 8, CHA+Leadership 10, CHA+Negotiation 9, INT+Legends 10, Authority 5, Renown 6; Armand Malpierre must yield"
      ],
      [
        "Equipment",
        "Anything and everything the Resistance can provide"
      ]
    ]
  },
  "founder": {
    "title": "5 - Grand Savant",
    "description": "Maréchal and Grand Savant work hand in hand. On the surface, the Grand Savant is the domestic ruler of the Capitol in Toulouse, negotiating and managing the civil matters required to maintain the Resistance’s headquarters. He ensures that the food keeps flowing, the raw materials keep coming in through donations, and even bites his tongue and reaches out to powerful Neolibyans. The Grand Savant also organizes and leads the Savants; no one knows the history of what Franka used to be more than him. Look deeper, though, and the true nature of the position is revealed. The Grand Savant is the Resistance’s spymaster, coordinating the infiltrators and contacts spread throughout Franka – more widely spread than the Cults would like. His Secrets Background can never fall below (6).",
    "fields": [
      [
        "Prerequisite",
        "INT+Legends 12, CHA+Conduct 10, CHA+Expression 10, CHA+Negotiation 10, Renown 6; Pélat du Casse must yield"
      ],
      [
        "Equipment",
        "Seal of the city of Toulouse; Keys to the Capitol; Register of all Savants"
      ]
    ]
  }
};
const esc=v=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
function renderRank(id){const r=ranks[id],d=document.querySelector('#rank-detail');
const copy='<p class="rank-kicker">SELECTED RANK</p><h3>'+esc(r.title)+'</h3><dl class="entry-fields"><div><dt>Prerequisite</dt><dd>'+esc(r.fields[0][1])+'</dd></div><div><dt>Effect</dt><dd>'+esc(r.description)+'</dd></div><div><dt>Equipment</dt><dd>'+esc(r.fields[1][1])+'</dd></div></dl>';
d.innerHTML=copy;
document.querySelectorAll('.rank-node').forEach(b=>{const s=b.dataset.rank===id;b.classList.toggle('is-selected',s);b.setAttribute('aria-pressed',String(s));});}
document.querySelectorAll('.rank-node').forEach(b=>b.addEventListener('click',()=>renderRank(b.dataset.rank)));renderRank('scout');
