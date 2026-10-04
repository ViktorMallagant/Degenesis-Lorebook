const ranks={
  "scout": {
    "title": "1 - Kelp",
    "description": "Just as seaweed can take root in every nook and cranny of shoreline nurtured by sea water, so too does the Kelp find their way into every aspect of Britoni society. They can be found all throughout the Northwest, sticking to the beaches and rustling beneath the footsteps of their more esteemed relatives. Eventually, they’ll grow up, leave their roots behind, and set out for something else.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Equipment",
        "Small ivory token of Britoni heritage"
      ]
    ]
  },
  "hunter": {
    "title": "2 - Waverider",
    "description": "Land isn’t enough for him. Too stable, too safe, too barren. Out on the open waters of the Atlantic, clinging to a hunting boat as it rocks past the waves, harpoon raised and ready, that’s where a Waverider belongs. Alone against the might of the unforgiving sea he’d be swept away by the next gust, but in a hunting pack with a dozen other Britoni he pushes back against the tide. Every week he sets out from his home port, going after seals, fish, and occasionally small whales. He is the provider for an entire family back home, taking everything he needs to feed his tribe. Even as he curses the rolling waves and bemoans the salt spray stinging his eyes, he nourishes thanks to the great life-giver of the Britoni – anyone who fails to respect the Grey Mother is destined to find themselves crushed between her merciless thighs.",
    "fields": [
      [
        "Prerequisite",
        "INS+Survival 5, BOD+Melee 6"
      ],
      [
        "Equipment",
        "Harpoon, Whalebone whistle to signal to his hunting pack"
      ]
    ]
  },
  "gatherer": {
    "title": "2 - Anchor",
    "description": "The sea molds the Britoni and cares for them, but not everyone can easily sprout flippers and rush out onto the waters. Instead, the Anchors have their own crucial role in the Clan. They rest ashore, arming the villages while Waveriders and Bullkillers are gone for the hunt. Anchors process the catch hauled back by their brethren; they carve up seals, strain out blubber, skin valuable pelts from sea lions, and strain oil from whale carcasses. In the evenings, they light the street lanterns or man the lighthouses to guide the hunters back to safety. The Anchors are also responsible for handling trade between the many towns and settlements of the Britoni, ensuring that those located inland are kept supplied with food from the ports, and that other resources are correctly passed from village to village to ensure the entire region remains active.",
    "fields": [
      [
        "Prerequisite",
        "INT+Science 4, AGI+Crafting 6, Network 2"
      ],
      [
        "Equipment",
        "Workshop in their home town where they can process the catch of the day; Tools required for their work (Toolkit, Lvl 1)"
      ]
    ]
  },
  "tribalwarrior": {
    "title": "3 - Bullkiller",
    "description": "Anyone can become a Waverider if they’ve got the guts to step away from the safety of land and take on responsibility, but that’s nothing but a drop in the bucket. The Bullkiller has stared a walrus down as part of the annual hunt and killed it in a fight, man against beast. He came away from the encounter battered and bruised, but victorious, claiming an ivory tusk which he will carve and engrave with his own personal epic. Each Bullkiller is the focal point of an entire community, and represents the pinnacle of the lives of most Britoni. He is a symbol of masculinity, and an emblem of the Clan’s pride – one man defies the ocean, just as the Britoni defy the world. Now he leads a pack of Waveriders out on each foray, always looking for prey worthy of his skill: walrus bulls, sharks, and sea lions.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Navigation 6, CHA+Leadership 8, Renown 3, Killed a walrus during the annual hunt with their bare hands"
      ],
      [
        "Equipment",
        "Jet-ski with mounted harpoon launcher; Carved ivory tusk bearing his legacy (Talisman, +1D)"
      ]
    ]
  },
  "shaman": {
    "title": "3 - Balmer",
    "description": "While the Britoni thrive on the gifts the stormy Atlantic provides them, their lives are far from harmonious. Shipwrecks, feisty prey, hunts gone wrong, even just brawls in taprooms all give the hunters more than their fair share of injuries, and it’s the Balmer’s task to patch them back up. She works in Balsam Houses and healing shacks throughout Briton, relying on the old, tried and true ways of medicine to set her brethren back on their feet and send them on their way. The Balmer does more than just heal the body, she also soothes the soul. She provides spiritual guidance for the members of her Clan, reads the guts of seals to predict future snowfalls, and performs rituals over those suffering from a vast array of ailments. The Anabaptists are unhappy with this remnant of the old traditionalist practices of the Britoni, but they lack the influence to purge it entirely.",
    "fields": [
      [
        "Prerequisite",
        "INT+Medicine 8, INS+Empathy 6, Allies 3"
      ],
      [
        "Equipment",
        "She takes no payment for her services, but the gratitude received from her people leaves her wanting for nothing; A workshop where she can care for patients (+2D for INT+Medicine)"
      ]
    ]
  },
  "chieftain": {
    "title": "4 - Prow",
    "description": "The Prow cuts through the spray, resolute and implacable. He has proven himself to be exceptional in his own right, whether out on the waters leading a band of Bullkillers to bring down legendary prey, or on land forging communities and managing hundreds of his kinsmen. The Prow leads, and others follow. In times past he would act as the King’s personal advisor, counted among the closest members of Oppolus’ royal hunting party, but things have changed. Now, the Prow must take on a more diplomatic role as the Oppolids attempt to divide the Clan amongst themselves. He acts as an advisor and mediator, using his weathered calm and steady nerves to resolve disputes between chieftains in a wide range of different harbors, representing the will of the Oppolid he’s sworn fealty to.",
    "fields": [
      [
        "Prerequisite",
        "AGI+Projectiles 9 or BOD+Melee 9; INS+Survival 7; Renown 4; Authority 3"
      ],
      [
        "Equipment",
        "Speedboat with pintle mounted cannon; Personalized insignia to paint on his shield or cloak; Symbol of his Oppolid"
      ]
    ]
  },
  "champion": {
    "title": "5 - Oppolid",
    "description": "Oppolus is – was – recognised by the Britoni as the greatest, wisest, and most decorated King of all. However, despite his long list of achievements and accomplishments, not everyone was as appeased by his rule. The Oppolids, his twelve natural born sons and daughters, looked on his blatant favoritism of his two Anabaptist brats with disdain and disgust; they all knew they were just as capable, they knew that they would be able to steer Briton on their own. Their moment has come. The Oppolids have stepped up and taken charge in the aftermath of their father’s downfall, each carving out a small piece of the formerly united realm as their own. Each must choose his or her own method to rule. Does he crack down on his people with an iron fist, only to be rebuked by the rugged survivalist nature of the Britoni? Does she soothe worries and calm tempers with words of advice, only to find her people growing complacent in the face of the dangers arrayed against them? The Oppolids have a lot to live up to – only time will tell if they can handle the responsibility.",
    "fields": [
      [
        "Prerequisite",
        "Directly descended from Oppolus or married to one of his children, CHA+Leadership 10, Renown 5"
      ],
      [
        "Equipment",
        "Personal signet ring; Hunting horn with their symbol; Castle or stronghold from which they rule their domain"
      ]
    ]
  },
  "founder": {
    "title": "5 - Whaler",
    "description": "All of Briton knows the Whaler for his skill. If he wanted to be King he could snap his fingers and make it so, and the Oppolids wouldn’t dare stand in his way. However, he has far more important things to take care of. The Whaler has more experience than anyone who ever traversed the Atlantic, and has ventured farther than any other competitor. He leads a team of handpicked Prows and Bullkillers out on his expeditions, and when the annual hunt during the Day of Ganaress rolls around, it’s his ship that draws the most attention and speculation – what mighty beast will the Whaler bring home today? He is always sought after by Neolibyans and Leopards, along with the best Scrappers of Saint-Brieuc, to give advice on sailing paths or dead-zones in the current where floating debris might sink to the bottom. His great exploits, bringing down sperm whales and orcas, are part of what make him special, but not the only thing. His knowledge of foreign shores is worth the weight of a captured whale in gold. Whenever he regales a crowd with tales of Gaelik, Iceland, or the foreign Azores, everyone is stunned into silence by these exploits they’ll never personally lay eyes on. As the Black Water slithers ashore, more and more eyes turn his way, especially as stories of great leviathans and hulking monsters rising from the waters filter out into the Clan. Maybe the Whaler will meet his match out in the Atlantic, facing down hell itself.",
    "fields": [
      [
        "Prerequisite",
        "INS+Survival 10, AGI+Navigation 10, INS+Orienteering 10, Renown 5"
      ],
      [
        "Equipment",
        "His legendary stories and tales will have anyone falling head-over-heels to supply him with whatever he needs: the Whaler has Resources (6), and will never find himself lacking for equipment"
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
