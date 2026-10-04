const ranks={
  "scout": {
    "title": "1 - Baisse",
    "description": "He either hasn’t grown old enough to be useful, or has just recently been introduced to the Clan by a Veine – in the eyes of the Ventricules, they are the same. He carries out menial tasks and performs services for his betters until he manages to prove his worth. Otherwise, he’ll find a place in the legion.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Equipment",
        "-"
      ]
    ]
  },
  "hunter": {
    "title": "2 - Sang",
    "description": "The world is diseased, infested and infected with parasites and viruses alike. Pheromancers stalk the swamps north of Montpellier stealing people’s souls while criminals strike from dugouts and hideaways hidden in the trees, and it’s the task of the Sanglier legion to function as an immune system, root these impurities out, and exterminate them. In the legion, the 17 families of the Clan are dissolved and cast aside, at least when on duty. The legionnaires are brothers in arms: that’s the only relation they can rely on when an Expatriate and its drone horde is bearing down on them. For the duration of their service, they eat, sleep, and train with their comrades until each squad is a well-oiled machine. They particularly focus on piercing strikes, lancing like a scalpel into vulnerable areas – both on a strategic level, finding the weak spots of distribution networks or smuggling gangs, and on the tactical level, prioritising carefully considered and accurate blows. They add +1D to Aimed Attacks. The red capes of the legionnaires are well known far beyond the borders of Montpellier. Anyone causing trouble in the Rhône Delta will eventually come face to face with the Sang, and find that they are far from squeamish. As an experienced militia they are both feared by and popular with the people for their deeds; Authority (+1), Renown (+1)",
    "fields": [
      [
        "Prerequisite",
        "BOD+Toughness 6, AGI+Projectiles 6"
      ],
      [
        "Equipment",
        "Red cape; Short sword; Hunting rifle"
      ]
    ]
  },
  "gatherer": {
    "title": "2 - Veine",
    "description": "The Sanglier are proud of their heritage and the purity that they have maintained throughout the tumultuous history of their region, but they are fully aware that the 17 houses would descend into wretched savagery and deformity if they never bred outside of their own family tree. The Veine’s blood is strong and pure, and she knows it. It is her task to find new recruits for the Clan, those who are of good stock and who will be of use to the Sanglier. Should the Veine introduce a promising newcomer to the Clan, one with similarly promising blood who quickly demonstrates his usefulness and respect for the traditions he has now been inducted into, she gains Allies (+1). If, however, her chosen recruit is discovered to be feeble or weak in spirit, her Allies drops by (-2). In Montpellier, Veines also find work as medicine women, using their Clan’s extensive knowledge of biology to their benefit. While traumatic injuries and battle wounds are best taken to the Spitalians, the Sanglier healers can determine far more subtle upsets; by tasting a single drop of blood, a Veine can diagnose hormone imbalances, dietary deficiencies, or even more insidious illnesses that would be missed by the common Famulancer.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Seduction 6, PSY+Cunning 6, Network 1; Scion of one of the 17 houses of the Sanglier"
      ],
      [
        "Equipment",
        "Hematite necklace; Scented oils; Recipes for blood rituals (regenerate (2) Ego, once per day)"
      ]
    ]
  },
  "tribalwarrior": {
    "title": "3 - Os",
    "description": "The swamps are a dangerous place, and survival is no easy feat. As such, the truly skilled amongst the Sanglier legion are quickly distinguished and elevated to the rank of Os – it is now their task to train and lead other new legionnaires into combat. An Os is responsible for (3 x Authority) Sang legionnaires, and their deeds reflect back on him. Once per day, the Os can inspire his troops and allow them to regain (2) Ego. An Os and his Sang can freely use Spitalian camps and get the best medicine, food, and lodging. During expeditions into the Rhône swamps, the Os can apply his Resources Background to Anubians or Spitalians, and gains +1D to social interactions with both Cults.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Projectiles 8, CHA+Leadership 6, PSY+Faith/Willpower 6, Authority 2, Renown 2"
      ],
      [
        "Equipment",
        "Radio; Assault rifle; Marduk oil (8 doses); Sanglier marker (blood samples enhanced with Pheromancer ichor; used by the Sanglier to locate each other in the thicket)"
      ]
    ]
  },
  "shaman": {
    "title": "3 - Vertèbre",
    "description": "Vertèbre are the Clan’s foundation. They hold important positions in the city government, they represent the Clan outside their hometown, and squabble with each other for prestige in the eyes of their family’s Ventricule and the Clan’s Cerveau. There is no way past them if you want to be involved in anything in Montpellier. They organize forced marriages, evaluate newcomers with the help of blood tests, and even influence the Neolibyan slave trade. The intrigues of the Vertèbre are opaque and intricate; they add +2D PSY+Cunning when trying to avoid being caught in a lie.",
    "fields": [
      [
        "Prerequisite",
        "INT+Science 6, PSY+Cunning 8, PSY+Faith/Willpower 6, Allies 2, Network 2"
      ],
      [
        "Equipment",
        "Walking cane with crest of their respective house and hidden stiletto; Poisons; Vials with blood clotting agents; Miniature Pheromancer idol"
      ]
    ]
  },
  "chieftain": {
    "title": "4 - Ventricule",
    "description": "The Ventricule is the leader of his house, setting out the decrees and ideals which his brethren and descendents must adhere to. He is the arbiter of standing within his family, able to pick and choose which Baisse is elevated to Sang, approve or deny the choices of the Veine, and where to deploy the Os and their squads. The only voices which rise above his are those of the Cerveau and Neurone. Many of the old families own complete streets in Montpellier, gaining a fortune from renting the houses out. The Ventricule also defends his bloodline against the machinations of his rivals and tries to strengthen his family’s influence with the Cerveau.",
    "fields": [
      [
        "Prerequisite",
        "CHA+Leadership 8, PSY+Faith/Willpower 8, INS+Empathy 6, Authority 4, Resources 3; The old Ventricule of their family must die"
      ],
      [
        "Equipment",
        "Signet Ring, bearing the mark of their family. Any documents or proclamations sealed with this sign carry the full weight of the Ventricule"
      ]
    ]
  },
  "champion": {
    "title": "5 - Neurone",
    "description": "There is always a single Neurone commanding the Sanglier legion, overseeing the movements of the Os squads, deliberating over missions into the jungles with the Ventricules, and negotiating with the Cults to send and receive aid. Together with the Cerveau, he leads the Clan. If the Cerveau dies, the Neurone appoints her successor. The Neurone is only activated in the direst cases of emergency. He represents the highest life form of the Sanglier. His position makes others walk through the fire for him. At the same time, he has access to the holiest arsenals of the Sanglier.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Projectiles 10, CHA+Leadership 10, PSY+Faith/Willpower 10, Renown 5, Authority 5"
      ],
      [
        "Equipment",
        "Red Kevlar vest; Heavy pistol; Cartridges of nerve agent; Blowgun with darts coated in viper toxin"
      ]
    ]
  },
  "founder": {
    "title": "5 - Cerveau",
    "description": "If the Neurone is the body of the Sanglier, the Cerveau is their mind. While the Neurone turns his gaze outwards to the world beyond Montpellier, the Cerveau deals with matters closer to home. She guards all of the Sanglier family trees, cultivating the Sanglier bloodline through the generations like a treasured garden. Should the Nerone ever die, she is the one to appoint his successor. The Cerveau has a single, driving task: find the new King of Franka. In her search for the blue blood of the Regent, the Cerveau is permitted to use the entire resources of her Clan, demand that women of good stock bear children, marry off entire families in the pursuit of higher quality offspring, and similarly cut off entire branches of the Sanglier should their blood be sullied. When the time comes for her position to pass on to a worthy successor, she will bestow on them extensive records of the Sanglier bloodline going back centuries, and call on them to continue the task.",
    "fields": [
      [
        "Prerequisite",
        "INT+Science 10, CHA+Expression 10, PSY+Cunning 10, Authority 5, Secrets 5"
      ],
      [
        "Equipment",
        "Hematite scepter; Tome containing the family trees of all houses"
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
