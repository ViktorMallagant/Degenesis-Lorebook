const ranks={
  "scout": {
    "title": "1 - Aide",
    "description": "They scurry about between the legs of the more experienced members of their Clan, rushing to and fro to bring reagents, herbs, chemicals, or medical supplies to their betters. They are apprenticed to a higher ranking Brenni, and they’d better learn quickly in order to make themselves useful.",
    "fields": [
      [
        "Prerequisite",
        "-"
      ],
      [
        "Equipment",
        "Small notebook which is to be filled with recipes and notes from their mentor; Basic healing herbs for practice (+1D to INT+Medicine, single use)"
      ]
    ]
  },
  "hunter": {
    "title": "2 - Guru",
    "description": "While they are yet to master the art of healing, still unable to mix together herbs and concoctions to create the miracle cures of the Alchemists, they have been able to extensively study and practise the crafts of physiotherapy, acupuncture, and more. Extensive knowledge of human anatomy allows them to fix a patient's inflamed tendons, relieve them from a lumbago, or increase their general mobility. Guru’s provide first aid, give medical or nutritional advice, and release organic tissue from pain and stress. Once a Guru begins making their first forays into the underground, they gain +1 Network related to Justitian’s underworld.",
    "fields": [
      [
        "Prerequisite",
        "INT+Medicine 6, INT+Science 5, INS+Perception 6"
      ],
      [
        "Equipment",
        "Texts detailing the pressure points, energy paths, and chakras of the human body, giving them +1D to CHA+Expression or INT+Medicine when using those facts to heal a patient"
      ]
    ]
  },
  "gatherer": {
    "title": "2 - Brewer",
    "description": "The Brewers of Brennen are some of the best in their field, and their spirits are famed among the people of the Protectorate. They have been able to land a job at a distillery or brewery in Justitian, and quickly find the Judges and other members of high society amongst their clientele. The Anabaptists, on the other hand, don’t yet know if they should consider the Brewers of Brennen as rivals or drinking buddies. Whatever the case, as a Brewer the Brenni can acquire some of the rarest spices to upgrade his brandies and liqueurs with goods normally unavailable on the civic markets; a special permit allows him to import uncertified stimulants from places like Liqua and out of the Jehammedan Quarter. His newfound influence catapults him into Uptown and grants citizenship: he gains +1 Network point related to Justitian’s upper class.",
    "fields": [
      [
        "Prerequisite",
        "INT+Science 7, CHA+Arts 6, CHA+Conduct 5"
      ],
      [
        "Equipment",
        "Citizenship papers; A bottle of the alcohol produced by his workplace"
      ]
    ]
  },
  "tribalwarrior": {
    "title": "3 - Toxician",
    "description": "Once a Brenni continues on his journey into the shadows of the Clan, his work moves from the open street into the hidden back rooms and underground laboratories, where he hones his craft in creating ever more lethal concoctions and poisons for his more sinister clients. Toxicians require a spotless network of suppliers, often using Brewers as frontmen to gain access to chemical substances otherwise unavailable to them. Additionally, their expanded network allows them to import potent toxins via Justitian’s many black markets and have these cashes stashed in secret locations across the city. A secret tattoo, featuring a serpent encircling the moon, identifies Toxicians to one another.",
    "fields": [
      [
        "Prerequisite",
        "INT+Science 8, BOD+Toughness 6, PSY+Cunning 7"
      ],
      [
        "Equipment",
        "Keys to workshops and stores throughout Justitian; High quality herbs and chemicals (+1D to INT+Science when creating toxins)"
      ]
    ]
  },
  "shaman": {
    "title": "3 - Apothecary",
    "description": "The Apothecary sets himself apart from the crowd, developing his healing skills further and applying his arcane and mystical knowledge to create herbal remedies and cures that can drag heavily injured patients back from the brink of death. The Brenni is now the go-to doctor for the downtrodden and the criminals of Justitian, and he’s paid well in return - both for his services, and for his discretion. Using their laboratories, Apothecaries gain the ability to produce a wide variety of substances with equally diverse effects. With a roll of INT+Medicine (5) they can create one dose of any standard pharmaceutical agent - stimulants, narcotics, antibiotics, and more - and for every (2) Triggers the drug’s level rises by 1.",
    "fields": [
      [
        "Prerequisite",
        "INT+Medicine 8, INT+Legends 6"
      ],
      [
        "Equipment",
        "Extensive scriptures passed down from their ancestors on curative agents and herbal mixtures, giving them +2D to INT+Medicine; A laboratory in Brennen where they can conduct their experiments uninterrupted"
      ]
    ]
  },
  "chieftain": {
    "title": "4 - Alchemist",
    "description": "The Brenni has been practising and studying his chosen discipline for a lifetime, and there are only a few areas that he hasn’t touched. Whether he turns his hand towards miracle cures or fatal poisons, whatever he produces is intensely effective or potentially deadly. Now he has access to the full resources of his Clan, along with the respect amongst the underground drug lords of the Cartel and the Carrion Birds. Furthermore he acts as the relay for commands issued by the secretive Meisters, calling meetings in underground halls and supposedly deserted chambers to inform the other Brenni of the contents of the messages he has received.",
    "fields": [
      [
        "Prerequisite",
        "INT+Medicine or INT+Science 9, INT+Legends 6"
      ],
      [
        "Equipment",
        "Only the Alchemists have access to the reagents and knowledge required to perform the Red Purge, an ancient technique to expunge all toxins and poisons from a body. However, it is taboo for them to accept payment in coin, only a suitable favor is permitted"
      ]
    ]
  },
  "champion": {
    "title": "5 - Meister",
    "description": "It is said they can turn lead into gold, that they were fed by their mothers with blood instead of milk, and that they can perceive the lifeline of a human being by touch alone. The Meisters work in total obscurity, blending in with the common members of the Clan in their daily lives, distributing their orders to their brethren through coded messages and dead drops. What’s known: there are seven of them at a time, with each new member chosen by the other six only if one of them steps down or passes away. They direct the Brenni in their movements, and are more essential than ever now as they struggle to maintain their identity under the heel of the Spitalians and Judges. Each Meister is an unparalleled practitioner of their hermetic lore, and whenever they command an action it is backed with ancestral power.",
    "fields": [
      [
        "Prerequisite",
        "Secrets 5, INT+Legends 10, PSY+Cunning 10"
      ],
      [
        "Equipment",
        "Keys to access the deserted dungeons of Brennen, where Brennus once performed his miracles. Now, they are used for the meetings of the Meisters"
      ]
    ]
  },
  "founder": {
    "title": "5 - Inheritor",
    "description": "There can only ever be a single Inheritor. In times of great need, when the Brenni are on the brink of ruin, the Meisters gather to choose a suitable vessel for the spirit of their great ancestor, Brennus. The Inheritor imbibes an ancient mixture of potent chemicals and herbs which has been passed down through the Clan for generations, allowing him to contact and communicate with the original Founder of the Clan, receiving his instructions on the correct path through an emergency. Only three Inheritors have been chosen throughout the history of the Brenni, and each time they emerged from their spiritual journey with unearthly knowledge, cunningly navigating any obstacles in their path. The Inheritor’s Authority, Allies, and Secrets scores can never be less than 6.",
    "fields": [
      [
        "Prerequisite",
        "Chosen by the Meisters, Survived at least one Red Purge"
      ],
      [
        "Equipment",
        "A single vial of the ancient mixture, which wracks their body as it expands their mind, causing them to take (2) Trauma Damage; The robes of Brennus (+4D to interactions with Brenni)"
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
