const ranks={
  "scout": {
    "title": "1 - Citizen",
    "description": "The Stukov have been molded over time to become the perfect members of Justitian’s society, and as such the vast majority of them are citizens by birthright. They gain access to Uptown, where they can brush shoulders with the Judges and other members of the upper class, and are exempt from the 20% guest tax on purchases.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Equipment",
        "Citizenship papers; Stukov trinkets (Talisman, +1D PSY+Faith/Willpower)"
      ]
    ]
  },
  "hunter": {
    "title": "2 - Factotum",
    "description": "A Stukov enters adulthood running odd jobs, serving as a trusted courier between the Advocate Houses of his district, working as a waterbearer, guild apprentice, city guide, or generalist artisan. If he displays talent and punctuality, his customers begin remembering his name and the steep climb through the social hierarchy begins. If he lands an apprenticeship with a local guild at the Old Fortress, he’ll be introduced into the intricacies of their draughtsmanship: delicate carvings, intricately designed fabrics, finely wrought metalworks; the Stukov are known for their craft in a vast array of disciplines, and have been for generations. The Factotum continues this great tradition in his own way, choosing a particular trade to make his own specialty, gaining +1D to all AGI+Crafting or CHA+Arts rolls related to carrying it out. Additionally, he adds +1 to his Network Background, as he develops a web of clients throughout the city.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Crafting 6, CHA+Arts 6, CHA+Conduct 5"
      ],
      [
        "Equipment",
        "Permission waiver allowing the Factotum to sell their goods on the Forecourt, following approval from the Office of Certification; Small workshop in the Stukov Quarter loaned from a family member"
      ]
    ]
  },
  "gatherer": {
    "title": "2 - Quartermaster",
    "description": "A city as large as Justitian requires all kinds of administration, or the colossal distribution network that keeps it alive would collapse within a week's time. That’s where specialized Quartermasters take over as public functionaries, overseeing the dispersal of goods across the districts, measuring the daily consumption of water from the Public Wells, inspecting the food quality on the Civic Markets, or ordering the construction of salt containers across Downtown. The Quartermasters file their pedantic reports to the Offices in Uptown, and often use the opportunity to snitch on rivals, gaining access to privileges in return: from tax cuts to cheaper asking prices for real estate. If a Quartermaster plays their game right, they can begin to amass square footage after square footage of rental space, extrapolating their income streams. The Judges turn a blind eye. It’s to be expected.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Leadership 5D, INT+Science 6D, PSY+Cunning 5D"
      ],
      [
        "Equipment",
        "Register of food and water stores across the city; Papers permitting them to requisition a team of 1D workers for essential tasks; Ability to acquire real estate from Urbanists, giving them +1 Resources per 1000 Drafts spent, to a maximum of 4"
      ]
    ]
  },
  "tribalwarrior": {
    "title": "3 - Fire Watch",
    "description": "The Sprenger family tree is one of the premier bloodlines to offer their sons and daughters to the service, and joining the Fire Watch is somewhat of a tradition among Stukov who are physically capable and protective of their home. Members are on call at all times, working tirelessly across the city, extinguishing flames and rescuing lives, rushing into danger night after night to keep the population safe. Pass grueling tests, and you're accepted into this elite force - but that’s just the beginning. Now it’s time to prove yourself to your peers and superiors, learn on the job, and climb the peculiar organization on your own. Lone wolves better fuck off: if a squad doesn’t work together perfectly, people die.",
    "fields": [
      [
        "Prerequisite",
        "BOD+Force 7, BOD+Toughness 7, CHA+Conduct 6, Passing the Fire Watch entrance tests"
      ],
      [
        "Equipment",
        "Fire Watch uniform and firefighting equipment (Fire ax, water hose, dust bucket); Rank badge (novice, linebacker, Officer); Monthly salary (novice: 5 Drafts/ day, linebacker: 20 Drafts/day, Officer: 50 Drafts/day); Daily rations"
      ]
    ]
  },
  "shaman": {
    "title": "3 - Guild Leader",
    "description": "Talent, discipline, specialization, and tedious effort turn a Factotum into a master over time. Once the laborers of the Stukov conglomerate in one of the great crafting guilds, their voices begin to influence the political landscape of Uptown, establishing price binding for public goods and pushing competitors out of the civic districts. Each of these guilds has a Guild Leader at its helm, oftentimes the most skilled or storied member, who is renowned throughout the city as a master of their art. As such they gain +2 Renown, and a growing following of other artisans and craftsmen.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Crafting 8, CHA+Arts 8, CHA+Leadership 6, Authority 4"
      ],
      [
        "Equipment",
        "Ornate seal of their guild; Keys to a workshop of their discipline in the Old Fortress; High quality tools of their trade, recipes and blueprints, as well as books compiling theoretical knowledge (+1D to AGI+Crafting rolls)"
      ]
    ]
  },
  "chieftain": {
    "title": "4 - Urbanist",
    "description": "With hundreds of thousands calling it home, Justitian has a constant need for new living spaces to place its steadily blossoming population. The task of managing this demand falls to the Urbanists, real-estate brokers who have accumulated several swathes of lucrative rental space, from shops leased along the Stallion Streets, to highly coveted guest rooms on the Forecourt. With lease money flowing in from multiple sources, their appetites grow for owning even more land, thereby enforcing their iron grip on the populace of the city, controlling who is allowed to live where, and gaining permission to grant and deny purchases and evict uncooperative tenants - or just those they dislike. However, they must play it safe. Kicking out a Protector’s wife and child from their abode in the Stukov Quarter can backfire quickly.",
    "fields": [
      [
        "Prerequisite",
        "Network 4, Resources 4, PSY+Cunning 6"
      ],
      [
        "Equipment",
        "Deeds to a number properties across Justitian equal to their Resources Background, which may be rented out as they please. They gain +500 CD per month from each, however they also take on the responsibility to keep them at least somewhat maintained: should their Resources ever fall below (2), the Department of Urban Development will expropriate them"
      ]
    ]
  },
  "champion": {
    "title": "5 - Deputy",
    "description": "A Deputy has ascended to one of the most critical positions in Justitian, the highest level any of their Clan is likely to climb in the bureaucratic labyrinth of Uptown. Deputies work in line with the Offices, dictating the lives of every single person living within the limits of the city, collecting reports from Quartermasters and negotiating with city officials and Advocates alike on the development of civil legislature. Deputies gain the ability to apply their Authority Background to all citizens of Justitian, and can also influence other members of their Office for favourable outcomes or legal changes by spending the appropriate Background Points.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Negotiation 8, INT+Legends 7, PSY+Cunning 7"
      ],
      [
        "Equipment",
        "Signet ring of the Officials; Official uniform (+1D to interactions with citizens)"
      ]
    ]
  },
  "founder": {
    "title": "5 - Partisan",
    "description": "The Council of Partisans is, in theory, the highest authority in the Clan, keeping the memory of the origins of the Stukov alive, dictating its broader movements across political spheres, debating policies, and issuing actions with their decrees. In practice, the Judges have crushed the decorum of the Partisans down until its function is mostly symbolic. Sure, they’re still standing in the first row during Archot’s speeches on Calendar Square, and they see their faces engraved as stone sculptures on public plazas - but the Partisans lack real political weight. If however they were to lead an uprising, their ancestry would allow them to unify the diverse family trees, providing them with a voice of prestige and tradition. Despite their lack of real power, the Partisans’ voices still carry some weight: they gain +1 Authority and +2D on rolls to command other Stukov.",
    "fields": [
      [
        "Prerequisite",
        "Over 60 years old, CHA+Leadership 10, INT+Legends 8, Authority 5"
      ],
      [
        "Equipment",
        "The Mark of Stukov, a finely crafted disk bearing the symbol of their Clan’s founder, passed down for centuries"
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
