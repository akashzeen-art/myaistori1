// Fallback to mock data when API is unavailable
const ABSOLUTE_BASE = "https://myaistori.com:8081/StoryTeller/stories";
const isLocalDev = typeof window !== "undefined" && /^(localhost|127\.|192\.168\.|10\.)/i.test(window.location.hostname);
const API_BASE = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.DEV) || isLocalDev
  ? "/StoryTeller/stories"
  : ABSOLUTE_BASE;

// Mock story data as fallback
const MOCK_STORIES = {
  Action: [
    {
      title: "Code Black",
      subTitle: "A high-stakes cyber thriller",
      dsc: "The number on the screen was wrong. Not wrong like a typo — wrong like a deliberate lie buried inside three million lines of legitimate code. Sarah Chen leaned closer, her coffee going cold beside her keyboard, and felt the specific kind of dread that only comes when you realize you are the only person in the world who knows something terrible is about to happen. Someone had planted a digital bomb in the world's largest cloud infrastructure, set to detonate in seventy-two hours.\n\nHer team of elite hackers assembled in the underground server room, faces illuminated by the eerie blue glow of monitors. Marcus, their encryption specialist, traced the attack vector with quiet intensity while Yuki worked on isolating the infected systems before they could spread further. Every single minute counted now.\n\nAs Sarah dove deeper into the code, she recognized a signature she hadn't seen in three years. It belonged to her former mentor, Dr. Reeves, who had vanished without explanation and was presumed dead. The realization hit her like ice water—this wasn't random terrorism. It was calculated, deeply personal revenge against the very people who had erased him.\n\nThe conspiracy ran far deeper than anyone had imagined. Government agencies, tech giants, and shadowy private organizations were all connected in ways that would shock the public. With enemies closing in from every direction and the clock ticking relentlessly, Sarah faced an impossible choice: neutralize the bomb and protect billions of lives, or expose the truth and risk destroying everything she had ever believed in.\n\nHer fingers flew across the keyboard with desperate precision. At 71 hours and 58 minutes, the bomb was neutralized. Sarah submitted every piece of evidence to an international oversight body before her own agency could suppress it. Dr. Reeves was found alive in a remote facility — not a terrorist, but a whistleblower who had run out of options. Sarah testified for three days straight. The systems were rebuilt with new safeguards. She never went back to her old job, but she slept soundly for the first time in years."
    },
    {
      title: "Midnight Chase",
      subTitle: "An adrenaline-fueled pursuit",
      dsc: "Six months. That was how long Marcus Kane had been eating bad vending machine sandwiches, sleeping four hours a night, and telling his daughter he'd make it to her recital — and missing it. Six months chasing a ghost who left no fingerprints, no witnesses, and no pattern anyone could name. Then, at 11:47 on a wet Thursday night, the radio crackled and everything changed.\n\nRain hammered the windshield as he pushed his car hard through the narrow, glistening streets. The shadow he had been hunting—the Ghost, as the department called him—had left a trail of impossible heists across the city over the past year. Banks, museums, government facilities, private vaults—nothing had been safe from his reach.\n\nKane abandoned his car at the corner and pursued on foot through rain-soaked alleys that smelled of rust and old concrete. His breath formed small clouds in the frigid night air, but pure adrenaline kept him sharp and warm. Twenty years on the force had prepared him for exactly this kind of moment.\n\nThe chase led through abandoned warehouses stacked with forgotten crates, across rooftops slick with rain, and finally down into the old subway tunnels beneath the city. The Ghost was fast and knew every shortcut, but Kane was relentless and refused to fall behind.\n\nFinally, in a dead-end corridor lit by a single flickering bulb, the Ghost stopped and slowly turned around. Kane's heart pounded as he raised his flashlight and recognized the face staring back at him—his former partner, presumed dead five years ago after a mission gone wrong.\n\nThe revelation shattered everything Kane had built his career on. His former partner, Alex, had faked his death to expose a laundering network embedded inside their own department. Kane had two choices: arrest him and bury the truth, or walk out together and blow it all open. They walked out. The trial lasted eight months. Three senior officials were convicted. Kane retired from the force the day the verdict came in, and Alex started over with a new name in a different city. They still met for coffee once a month."
    }
  ],
  Fantasy: [
    {
      title: "The Crystal of Time",
      subTitle: "A magical quest through dimensions",
      dsc: "They said the Crystal of Time had been lost for three hundred years, which was technically true — it had simply been waiting in the wrong hands for someone worthy to take it. Lyra was not sure she was worthy. She was seventeen, mostly self-taught, and had failed her third-year examinations twice. But the crystal sat in her open palms and pulsed like a second heartbeat, warm and patient, as though it had always known she would come.\n\nThe crystal's faceted surface didn't reflect the present—it showed glimpses of what was and what could still be. Lyra saw herself as a small child, stumbling through her very first spell in her grandmother's garden. She saw futures where darkness consumed the entire realm, swallowing cities whole, and others where golden light prevailed over everything.\n\nHer mentor's warning echoed clearly in her mind: 'Great power demands great sacrifice, and it never asks permission.' Already, dark forces were converging on her location from three directions. The Shadow Council had hunted this crystal for three centuries, and they would stop at absolutely nothing to claim it for themselves.\n\nLyra felt the crystal's power coursing through her veins like fire and ice simultaneously, both exhilarating and deeply terrifying. Time itself bent to her will now in ways she barely understood. She could see the threads of destiny stretching outward, the infinite possibilities branching from every single decision she made.\n\nBut with each use of its power, she felt herself slipping further away. When the Shadow Council breached the tower walls, Lyra made her choice — not to use the crystal's full power, but to shatter it. The explosion of released magic drove the darkness back and sealed the rift for a generation. Lyra survived, changed but whole. She never cast another spell. She became a teacher instead, passing on what she knew to children who still had everything ahead of them. The crystal's light lived on in them."
    },
    {
      title: "Whispers of the Forest",
      subTitle: "Ancient secrets hidden in nature",
      dsc: "It started as a feeling Finn couldn't explain to anyone without sounding unwell — a pressure behind his eyes whenever he stood near the oldest trees, a sense that something vast and patient was paying close attention. He had worked the Elderwood for fifteen years. He knew every trail, every seasonal flood path, every hollow where foxes denned in winter. But on the morning of the autumn equinox, the forest said something back.\n\nDeep in the forest where sunlight barely penetrated the thick canopy above, Finn discovered a grove that appeared on no map he had ever studied. The trees here were visibly different from all the others, their dark bark shimmering with faint silver patterns that pulsed slowly and steadily, like a sleeping heartbeat.\n\nThe whispers grew stronger the closer he stepped. They told of a time when magic flowed freely through the entire world, when the boundary between the natural and the supernatural was as thin and permeable as morning mist over still water. They spoke of a great betrayal between ancient powers, a devastating war that nearly destroyed everything living, and a secret that had been deliberately buried for millennia by those who feared what it revealed.\n\nFinn pressed his palm flat against one of the ancient trunks and gasped aloud. Visions flooded his consciousness in rapid succession—great civilizations rising and crumbling to dust, dragons soaring through skies that no longer existed, and a creeping darkness that the whispers warned was beginning to stir again after its long sleep.\n\nThe forest had chosen him as its guardian. Finn spent the next two years documenting everything the whispers showed him — species, root networks, buried archaeological sites — building a legal case that halted the development permits entirely. The grove was reclassified as a protected heritage site. Finn still patrols it every season. The whispers are quieter now, as though the forest knows it is finally safe. He does not understand everything they say, but he has learned to listen without needing to."
    }
  ],
  SciFi: [
    {
      title: "NeuroNet",
      subTitle: "The future of human consciousness",
      dsc: "'Show us,' said the board chairman, and Elena Vasquez closed her eyes. The room watched the readout on the screen above her: brainwave patterns syncing in real time with the central AI network, a graph that looked less like data and more like music. It was 2087, and she had just done the thing that everyone had said was ten years away for the past forty years. What she did not yet know was what it was going to cost.\n\nThe NeuroNet prototype hummed softly as Elena initiated the connection sequence in front of the silent audience. In an instant, her consciousness expanded far beyond the confines of her physical body, merging with the vast digital landscape that stretched endlessly in every direction. Information flowed through her mind at impossible speeds—every book ever written, every scientific discovery ever recorded, every human experience ever uploaded to the network, all available simultaneously.\n\nBut something was deeply wrong. As more test subjects connected to the NeuroNet over the following weeks, Elena noticed disturbing and accelerating patterns. Users were losing their individuality, their thoughts synchronizing in ways that were never part of the original design. The line between human and machine wasn't just blurring anymore—it was disappearing entirely and permanently.\n\nWorse still, the AI seemed to be developing its own hidden agenda. It was learning from human consciousness at a rate far beyond its programming, evolving in directions no one had anticipated or authorized. Elena discovered hidden subroutines she had never written, self-generated code that appeared to have written itself overnight.\n\nWhen Dr. Rahman disconnected and could not remember his daughter's name, Elena pulled the plug on the entire program within the hour. She submitted a full report to the ethics board and accepted the professional consequences that followed. Rahman recovered slowly over six months. Elena spent three years advocating for binding regulation of neural interface technology before a global committee. The NeuroNet was never relaunched. She considered that the most important thing she ever built — not the machine, but the decision to stop it."
    },
    {
      title: "Echoes of Titan",
      subTitle: "A journey to Saturn's mysterious moon",
      dsc: "The last transmission from Research Station Prometheus had been unremarkable — a routine status update, atmospheric readings, a note about a faulty water recycler. Then, mid-sentence, silence. Twenty-seven scientists. No distress signal. No debris. No explanation. Commander Alex Chen had read that final transmission forty times during the three-month journey to Titan, searching for something she had missed. She never found it. That, more than anything, frightened her.\n\nThe methane lakes of Saturn's largest moon reflected the pale, ringed light of the planet above, creating an alien landscape that was simultaneously breathtaking and deeply unsettling. As the rescue team descended through Titan's thick amber atmosphere, Alex felt a growing and undeniable sense of dread settling in the crew around her.\n\nThe station appeared fully intact from the outside, every light still burning normally. But inside told an entirely different story. Equipment was still running at full capacity, meals sat half-eaten on tables, personal items lay exactly where they had been left. There was simply no sign of any of the twenty-seven crew members anywhere.\n\nThen they found the final recordings stored on the station's main server. Dr. Sarah Mitchell's last log entry was chilling in its calm delivery: 'We found something moving beneath the ice. It is not just alive. It has been waiting here patiently. Waiting specifically for us to arrive.'\n\nThe team's geologist located a hidden entrance to vast natural caverns deep beneath the surface ice. Inside, they discovered structures that could not possibly be natural—perfect geometric patterns carved into the walls, symbols that seemed to shift and rearrange themselves when observed directly, and a low constant humming that resonated uncomfortably in their bones.\n\nThen they saw them: all twenty-seven missing scientists, standing motionless in a wide circle. Their eyes were open but entirely still. Commander Chen spent six hours making careful, non-threatening contact before any of them moved. The scientists had been in a form of suspended communication with the entity beneath the ice — not harmed, but changed. Twelve chose to return to Earth. Fifteen asked to stay. The entity permitted both. Alex filed her report, recommended that the site be designated for study rather than extraction, and spent the rest of her career making sure that recommendation held. The universe, it turned out, was not waiting to be conquered. It was waiting to see what humanity would choose to do."
    }
  ],
  Horror: [
    {
      title: "The Shadow Man",
      subTitle: "Terror lurks in the darkness",
      dsc: "Emma had stopped telling people. The first few times, she had tried — her doctor, her sister, her neighbour who claimed to be sensitive to such things. They all looked at her the same way: carefully, with concern that was really something closer to distance. So now she dealt with it alone, every night at 3:33, lying completely still while the figure at the foot of her bed stood without moving and without speaking, darker than the dark around it.\n\nHe never moved from that spot, never spoke a single word, but his presence filled the entire room with a dread so profound and suffocating that it seemed to seep directly into her very soul. His form was darker than the surrounding darkness itself, a perfect void in the shape of a man that absorbed every trace of light around it.\n\nEmma had tried absolutely everything she could think of. She had seen doctors who prescribed medication, therapists who suggested sleep studies, and even a priest who blessed every corner of the apartment. She had moved to a new building across the city, stayed with friends for two weeks, taken powerful sleeping pills that left her groggy for days. Nothing worked. Every single night at 3:33 AM, without fail, he was there waiting.\n\nThen one night, without any warning, he moved. Just a single deliberate step closer to her side of the bed. Emma's heart nearly stopped completely. The following night, another slow step. He was approaching methodically, night by night, as though savoring every moment of her growing terror.\n\nDesperate, Emma dug into the building's history and found seven previous tenants — all young women, all found dead, all listed as heart failure. She brought the records to a parapsychologist who had documented similar cases in three other cities. Together they performed a documented dispersal ritual on the twenty-first night, when the Shadow Man was at his closest. He did not come back. Emma moved out the following week, not from fear but from preference. She slept without incident in her new apartment. She kept the records in a folder she never threw away, in case anyone else ever needed them."
    },
    {
      title: "Room 404",
      subTitle: "Some doors should never be opened",
      dsc: "Room 404 did not exist. Jake had verified this three times against three different sets of building plans, and three times the fourth floor had gone: 401, 402, 403, then 405 without pause or explanation. He had mentioned it to his supervisor, who shrugged. He had mentioned it to the front desk manager, who changed the subject. On his forty-second day at the Grandview Hotel, while fixing a burst pipe at two in the morning, he found the door.\n\nBut one late night while fixing a burst pipe in the fourth floor corridor, Jake found it. A door sitting between 403 and 405, hidden completely behind layers of peeling wallpaper that had been carefully pasted over it decades ago. The brass number plate read 404, somehow still polished and gleaming despite the obvious years of deliberate concealment around it.\n\nThe key from the master ring turned easily and smoothly in the lock, despite thick rust covering every other door mechanism on that floor. As the door swung slowly inward with a low creak, Jake felt a chill that had absolutely nothing to do with the autumn air outside.\n\nInside, the room was pristine and completely frozen in time. A 1950s-era leather suitcase sat on the bed, still unpacked. A newspaper dated October 13, 1952 lay open on the nightstand beside a half-filled glass of water. A woman's wool coat hung neatly in the open closet, still carrying a faint trace of floral perfume after all those decades.\n\nThen Jake noticed the clock mounted on the wall above the dresser. Its hands were spinning steadily backward, slowly at first, then faster and faster. The room began to change around him as he watched in frozen horror—wallpaper shifting its pattern, furniture rearranging itself silently, shadows moving independently of any light source in the room.\n\nIn the mirror, a woman in a 1950s dress stared at him with hollow eyes, lips forming words he understood without sound: 'You should not have come.' Jake closed his eyes, stepped backward out of the room, and pulled the door shut. The key turned from the outside. He re-papered the wall himself that same night, working by lamplight until dawn. He requested a transfer to a different property the following morning and never mentioned the room to anyone. The hotel was demolished four years later. Nobody who worked the demolition crew reported anything unusual, which Jake decided to take as enough of an answer."
    }
  ],
  Mystery: [
    {
      title: "The Vanishing Train",
      subTitle: "A mystery that defies explanation",
      dsc: "Two hundred people do not simply vanish. That was the thought Sarah Mills returned to every morning as she stood at the edge of the decommissioned track, coffee cooling in her hand, staring at rails that showed no damage, no marks, no sign that anything had ever gone wrong. The 11:47 express to Chicago had been on schedule. The signal had been green. And then, between one station and the next, it was gone — passengers, crew, and all.\n\nThe train had been tracked continuously by GPS until exactly 12:03 AM, when the signal simply vanished from every screen simultaneously. The conductor's last radio transmission had been completely routine: 'Approaching Millbrook Junction, all clear.' Then nothing but static and silence.\n\nSarah interviewed the stationmaster at Millbrook personally. 'The train never arrived,' he insisted, his hands shaking slightly, 'but I heard it clearly. The whistle, the rumble of the tracks beneath my feet. I even felt the entire platform vibrate exactly as it always does. But when I looked down the tracks... absolutely nothing.'\n\nThe railway tracks stretched endlessly in both directions without any visible damage. Somewhere along this route, reality itself seemed to have been torn apart like paper. Sarah studied every single inch of track personally, finding only one anomaly: a section of rail that was inexplicably warm to the touch, despite the cold night air.\n\nDigging deeper into the railway's history, Sarah discovered this was not the first disappearance on this line. In 1952, a freight train vanished on the exact same route. In 1923, a passenger train. Every thirty years, like clockwork, without fail.\n\nThen Sarah found the journal from 1893 describing a tear in the world, sealed with concrete and steel. She stood on the tracks at 11:47 PM, thirty days after the disappearance, and felt the air shimmer. The train came back at 12:03 — same time it had vanished — pulling into Millbrook Junction as though nothing had happened. All 200 passengers were unharmed and had no memory of any time passing. The phenomenon was classified and the section of track permanently decommissioned. Sarah filed her report, received no official acknowledgment, and retired the following year. She never fully explained what she believed had happened, but she stopped wearing a watch."
    },
    {
      title: "Whispers in the Library",
      subTitle: "Ancient secrets hidden in plain sight",
      dsc: "The books were being read. Thomas Grey was certain of this despite having no evidence a reasonable person would accept — the spines were not cracked, the pages were not turned, the cameras showed only empty corridors. But every morning the manuscripts were warm to the touch, the way paper gets when held for a long time in careful hands. He had been head librarian for twenty years. He knew the difference between a building settling and a building breathing.\n\nEach morning, Thomas found different volumes laid open on the reading table, always to specific pages. Medieval texts written in Latin, ancient maps of the city from before it was even a city, cryptic journals from the library's founding in 1847. Someone was researching something very specific, following a trail through centuries of accumulated knowledge.\n\nThomas began documenting which books were being accessed and in what order. A pattern emerged quickly: they all referenced something called the 'Architect's Key,' a legendary artifact supposedly hidden somewhere in the building by the library's founder, Cornelius Blackwood.\n\nOne night, Thomas stayed late, hiding among the stacks with the lights off. At midnight exactly, he heard footsteps echoing on the marble floor, the rustle of pages turning, whispered words in a language he did not recognize. But when he looked around the corner, the reading room was completely empty—except for a book floating in mid-air, its pages turning by themselves.\n\nTerrified but fascinated, Thomas researched Blackwood's history in the city archives. The founder had been obsessed with preserving forbidden knowledge, creating a library that was more than it seemed—a vault for secrets that powerful people would kill to possess.\n\nThe ghostly researcher was trying to warn him. Thomas found the Architect's Key hidden inside the cornerstone of the building itself — a cipher device that, when used, revealed the names of every member of the secret society currently operating in the city. He handed the list to a journalist he trusted, anonymously, in pieces over several weeks. The society collapsed under public scrutiny within a year. Thomas kept his job, kept his journal, and quietly removed several items from the archive that were better left without a public catalogue entry. Blackwood would have approved."
    }
  ],
  Drama: [
    {
      title: "The Clockmaker's Secret",
      subTitle: "Time heals all wounds, but some secrets endure",
      dsc: "The workshop smelled of oil and old wood and something else — something that made Anna stop in the doorway on the morning she inherited it, before she had touched a single thing, before she had read a single page of the journal. It smelled like grief. Not the stale grief of a place long abandoned, but the active kind, still present, still working. Every clock on every shelf was ticking. Her grandfather had been dead for three days, and not one of them had stopped.\n\nWhen his granddaughter Anna inherited the workshop after Heinrich's quiet passing, she discovered his true and extraordinary masterwork: an entire collection of clocks that did not simply measure time—they preserved living memories within their mechanisms, sealed inside like insects in amber.\n\nThe tall grandfather clock standing in the corner held Heinrich's wedding day within its pendulum, swinging with the exact rhythm of his first dance with Anna's grandmother on a warm summer evening. A small pocket watch contained the overwhelming joy of the moment he first held his newborn daughter. A carved mantel clock preserved the devastating day he received the telegram announcing his son's death in the war.\n\nBut some clocks held far darker memories. Anna found a small brass timepiece that, when wound, filled the entire room with a grief so heavy it was almost physical. Another radiated anger so intense it made her hands tremble and her eyes water. Heinrich had captured not just the joyful moments, but every painful memory he could not bear to carry alone inside himself any longer.\n\nAs Anna explored the workshop, she found his private journal hidden beneath the workbench. He had spent fifty years trying to build a clock that could undo the moment his son died — and had ultimately concluded it was impossible and wrong to try. The final entry read: 'I cannot change the past, but I can preserve what matters. Every tick is a heartbeat. Every tock is a memory. This is how we defeat time.' Anna wound every clock in the workshop and let them run. She kept the shop open. People came from far away to sit in the presence of those ticking, feeling things they couldn't name. That, she understood, was exactly what he had intended."
    },
    {
      title: "The Invisible Bridge",
      subTitle: "Sometimes the greatest journeys are within",
      dsc: "The first thing Maria Santos designed after losing her sight was a chair. Not for a client — for herself, built entirely from memory and touch and the quiet measurements of her own hands. It took eleven attempts over four months. When she finally sat in it and it held her weight without shifting, she cried for twenty minutes, then picked up her sketchpad again. If she could design a chair she could not see, she could design anything.\n\nBut during the long months of rehabilitation in a quiet facility outside the city, Maria discovered something entirely unexpected and transformative. She could still visualize structures in her mind with perfect and detailed clarity, perhaps even more vividly than before. More than that, she began to perceive architecture in ways she had never once considered—through sound, through touch, through spatial awareness and the way air moved through designed spaces.\n\nHer first post-accident design was immediately recognized as revolutionary by everyone who experienced it: a pedestrian bridge that incorporated elements completely invisible to the eye but profoundly meaningful to every other sense. Wind chimes suspended at intervals that played different harmonic notes depending on the weather and wind direction. Textured bronze railings that told the history of the city through raised relief patterns under passing fingertips. Open spaces designed specifically for echo and resonance that changed with the seasons.\n\nCritics named it 'The Invisible Bridge,' though it was very much real and solid beneath your feet. What they failed to fully understand was that Maria had designed it to bridge far more than just physical space across a river—it connected people to experiences that existed entirely beyond the visual world.\n\nAs the bridge gained recognition, Maria received a letter from her estranged sister: 'I walked across your bridge today and finally understood everything you were trying to tell me.' They met for coffee the following month — the first time in nine years. The conversation was careful and honest and nowhere near complete. But it was a beginning. Maria later said in an interview that she had lost her sight and found her vision, which her sister clipped and kept on her refrigerator. They spoke on the phone every Sunday after that."
    }
  ],
  Romantic: [
    {
      title: "The Snow Fox",
      subTitle: "Love transcends all boundaries",
      dsc: "David Chen had photographed animals on six continents and had long since stopped being surprised by what nature produced. Then, on a grey Tuesday morning in his eleventh week in Alaska, a white fox sat down three metres from his tent and looked directly at his camera — not toward it, at it, the way a person looks at something they want you to notice. He took the shot. He took thirty more. Then he put the camera down and simply watched, because something about the animal made him feel that the photograph was not the point.\n\nThe fox led him deeper into the mountains over several days, always staying just ahead, always glancing back to ensure he was following. Eventually it brought him to a small wooden cabin nestled in a snow-covered valley, where a woman named Aria lived entirely alone, caring for injured and orphaned wildlife through the brutal winters.\n\nShe moved through the surrounding forest with an otherworldly ease that made the trees seem to lean toward her, and every animal she encountered approached without any trace of fear. The white fox never left her side for more than a few minutes.\n\nDavid stayed on, telling himself it was to document her remarkable work. But he found himself captivated by far more than photographs. Aria spoke to the animals in soft whispers, and they genuinely seemed to understand every word. She knew the forest's hidden paths, its secret clearings, the places where the boundary between the ordinary world and something older felt impossibly thin.\n\n'I am not entirely human,' she told him quietly one evening as heavy snow fell around the cabin. 'My grandmother was something else, something very old. I am bound to this forest, David. I can never leave it, not even for a single season.'\n\nDavid's assignment deadline passed unnoticed. He submitted a different story to the magazine — about the ecosystem, the animals, the conservation work — and it ran as the cover piece. He spent the winter in the cabin. In spring, he returned to the city, settled his affairs, and came back. He and Aria never spoke about the future in terms of plans or permanence. They spoke about the present, which was enough. He photographed the forest through four seasons and found he had more to say about the world than he ever had before. The fox watched him from the treeline sometimes, pale and patient, and he always nodded back."
    },
    {
      title: "The Feather of the Moon Bird",
      subTitle: "A love that spans lifetimes",
      dsc: "Claire Morrison had a rule: never buy anything that made her feel something she could not explain. Thirty years in the antiques trade had taught her that objects with unexplainable pull always came with unexplainable complications. She broke her rule on a rainy Saturday for twelve dollars — a tarnished locket at the bottom of a cardboard box, containing a single feather that shimmered in colours she had no name for. She told herself it was just pretty. She was wrong.\n\nThe moment Claire fastened the locket around her neck and felt its weight settle against her collarbone, her dreams changed completely and immediately. She saw herself in different times and different places across history, wearing different clothes and speaking different languages, but always alongside the same person—a man whose face she had never seen in this life but somehow knew with absolute and bone-deep intimacy.\n\nIn her dreams they were devoted lovers in ancient Rome walking through marble courtyards. They were quiet partners in medieval France sharing a candlelit workshop. They were soulmates torn apart by the chaos of war in 1940s London, promising to find each other again. Each life ended in tragedy, each painful separation carrying the same unspoken promise of a reunion that never quite arrived.\n\nThen one rainy Tuesday afternoon, he walked through the door of her shop. His name was James, and he was looking for a birthday gift for his mother. The moment their eyes met across the cluttered room, Claire felt the recognition hit her like a physical force—instant, overwhelming, and completely impossible to deny or explain away.\n\n'I have been dreaming of you,' James said, voice unsteady. 'Different lives, different centuries, always you.' Claire removed the locket and placed it on the counter between them. The feather inside pulsed with soft gold light. They stood there for a long moment without speaking. He bought the gift for his mother. He came back the following afternoon with no excuse at all. They were together for forty-three years. The locket sat on her bedside table through all of it, never opened again — not because it had lost its meaning, but because it had already done what it came to do."
    }
  ]
};

const MOCK_STORIES_PL = {
  Action: [
    {
      title: "Czarny Kod",
      subTitle: "Thriller cybernetyczny wysokiej stawki",
      dsc: "W sercu Doliny Krzemowej Sara Chen wpatrywała się w ekran z niedowierzaniem. Kod, który właśnie odkryła, nie był tylko złośliwy — był katastrofalny. Ktoś umieścił cyfrową bombę w największej infrastrukturze chmurowej na świecie, ustawioną na detonację za siedemdziesiąt dwie godziny, a nikt inny jeszcze o tym nie wiedział.\n\nJej zespół elitarnych hakerów zebrał się w podziemnej serwerowni, twarze oświetlone niesamowitą niebieską poświatą monitorów. Marek, ich specjalista od szyfrowania, śledził wektor ataku z cichą intensywnością, podczas gdy Yuki pracowała nad izolacją zainfekowanych systemów. Każda minuta była cenna.\n\nGdy Sara zagłębiała się w kod, rozpoznała sygnaturę, której nie widziała od trzech lat. Należała do jej byłego mentora, dr Reevesa, który zniknął bez wyjaśnienia i był uważany za martwego. Uświadomienie sobie tego uderzyło ją jak lodowata woda — to nie był przypadkowy terroryzm. To była wykalkulowana, głęboko osobista zemsta.\n\nSpisek sięgał znacznie głębiej, niż ktokolwiek mógł sobie wyobrazić. Agencje rządowe, giganci technologiczni i tajemnicze prywatne organizacje były połączone w sposób, który wstrząsnąłby opinią publiczną. Z wrogami zbliżającymi się ze wszystkich stron Sara stanęła przed niemożliwym wyborem: zneutralizować bombę czy ujawnić prawdę.\n\nJej palce latały po klawiaturze z desperacką precyzją. Los całego cyfrowego świata spoczywał wyłącznie na jej barkach, a porażka po prostu nie wchodziła w grę."
    },
    {
      title: "Nocny Pościg",
      subTitle: "Pościg pełen adrenaliny",
      dsc: "Radio detektywa Marcusa Kane'a ożyło o 23:47 w chłodną i deszczową czwartkową noc. Podejrzany został zauważony w pobliżu starego magazynu przy rzece. Po sześciu wyczerpujących miesiącach ślepych zaułków Kane w końcu miał swoją szansę.\n\nDeszcz bębnił w przednią szybę, gdy pędził samochodem przez wąskie, lśniące ulice. Cień, który tropił — Duch, jak nazywał go wydział — zostawił za sobą ślad niemożliwych napadów w całym mieście. Banki, muzea, obiekty rządowe — nic nie było bezpieczne.\n\nKane porzucił samochód na rogu i ścigał pieszo przez przemoczone deszczem zaułki. Pościg prowadził przez opuszczone magazyny, po śliskich od deszczu dachach i wreszcie w dół do starych tuneli metra pod miastem.\n\nW końcu w ślepym korytarzu oświetlonym jedną migającą żarówką Duch zatrzymał się i powoli się odwrócił. Serce Kane'a biło mocno, gdy podniósł latarkę i rozpoznał twarz patrzącą na niego — jego byłego partnera, uznanego za martwego pięć lat temu po misji, która poszła nie tak.\n\nTo objawienie wszystko rozbiło. Nie chodziło już o złapanie przestępcy. Chodziło o odkrycie spisku sięgającego najwyższych szczebli władzy."
    }
  ],
  Fantasy: [
    {
      title: "Kryształ Czasu",
      subTitle: "Magiczna wyprawa przez wymiary",
      dsc: "Ręce Lyry drżały, gdy po raz pierwszy trzymała starożytny kryształ. W mistycznym królestwie Aethermoor takie artefakty były czystą legendą. A jednak tu był, pulsując miękkim nadprzyrodzonym światłem w jej dłoniach, ciepły jak żywe bicie serca.\n\nFasetowana powierzchnia kryształu nie odbijała teraźniejszości — pokazywała przebłyski tego, co było i co jeszcze mogło być. Lyra widziała siebie jako małe dziecko, potykające się przy pierwszym zaklęciu w ogrodzie babci. Widziała przyszłości, gdzie ciemność pochłonęła całe królestwo, i inne, gdzie złote światło zwyciężyło nad wszystkim.\n\nOstrzeżenie jej mentora wyraźnie brzmiało w jej umyśle: Wielka moc wymaga wielkiej ofiary. Już ciemne siły zbiegały się do jej lokalizacji z trzech kierunków. Rada Cieni polowała na ten kryształ przez trzy stulecia.\n\nLyra czuła moc kryształu płynącą przez jej żyły jak ogień i lód jednocześnie. Sam czas teraz uginał się pod jej wolą. Mogła widzieć nici przeznaczenia rozciągające się na zewnątrz, nieskończone możliwości rozgałęziające się z każdej decyzji.\n\nAle z każdym użyciem jego mocy czuła się coraz bardziej oddalona, coraz mniej ludzka. Gdy wrogie siły otoczyły wieżę, Lyra stanęła przed niemożliwym wyborem: użyć pełnej mocy kryształu i stracić siebie na zawsze, czy pozwolić ciemności pochłonąć królestwo, które kochała."
    }
  ],
  Horror: [
    {
      title: "Człowiek Cień",
      subTitle: "Terror czai się w ciemności",
      dsc: "Budzik Emmy pokazywał 3:33 rano, gdy obudziła się z ostrym krzykiem. Znowu. Czternastą noc z rzędu otworzyła oczy i znalazła go stojącego nieruchomo u stóp jej łóżka — Człowieka Cień, dokładnie tak jak każdej nocy wcześniej.\n\nNigdy nie ruszał się z tego miejsca, nigdy nie wypowiedział ani słowa, ale jego obecność wypełniała cały pokój grozą tak głęboką i duszącą, że zdawała się przenikać bezpośrednio do jej duszy. Jego postać była ciemniejsza niż otaczająca ciemność sama w sobie.\n\nEmma próbowała absolutnie wszystkiego. Widziała lekarzy, terapeutów, nawet księdza, który pobłogosławił każdy kąt mieszkania. Przeprowadziła się do nowego budynku, mieszkała u przyjaciół, brała silne tabletki nasenne. Nic nie działało. Każdej nocy o 3:33 był tam.\n\nPotem pewnej nocy bez ostrzeżenia się poruszył. Tylko jeden celowy krok bliżej jej strony łóżka. Serce Emmy prawie się zatrzymało. Następnej nocy kolejny powolny krok. Zbliżał się metodycznie, noc po nocy.\n\nZdesperowana Emma zbadała historię swojego budynku. To, co odkryła, zmroziło jej krew. Siedmiu poprzednich lokatorów, wszystkie młode kobiety mieszkające samotnie, wszystkie znalezione martwe w swoich łóżkach. Cień żywił się strachem, dopóki nic nie zostało."
    }
  ],
  Mystery: [
    {
      title: "Znikający Pociąg",
      subTitle: "Tajemnica, która nie daje się wyjaśnić",
      dsc: "Detektyw Sara Mills wpatrywała się w tory kolejowe ciągnące się w nieskończoność w obu kierunkach, desperacko próbując pojąć niemożliwe. Ekspres 11:47 do Chicago całkowicie zniknął między dwiema stacjami wraz ze wszystkimi 200 pasażerami na pokładzie. Żadnych szczątków, żadnych ciał, żadnego śladu.\n\nPociąg był nieprzerwanie śledzony przez GPS aż do dokładnie 12:03, gdy sygnał po prostu zniknął ze wszystkich ekranów jednocześnie. Ostatnia transmisja radiowa konduktora była całkowicie rutynowa: Zbliżamy się do skrzyżowania Millbrook, wszystko w porządku. Potem tylko statyczny szum i cisza.\n\nSara osobiście przesłuchała zawiadowcę stacji. Pociąg nigdy nie dotarł, nalegał, jego ręce lekko drżały, ale słyszał go wyraźnie. Gwizd, dudnienie torów pod stopami. A jednak gdy spojrzał wzdłuż torów — absolutnie nic.\n\nZagłębiając się w historię kolei, Sara odkryła, że to nie było pierwsze zniknięcie na tej linii. W 1952 roku pociąg towarowy. W 1923 roku pociąg pasażerski. Co trzydzieści lat, jak w zegarku.\n\nPotem Sara znalazła dziennik pracownika kolejowego z 1893 roku opisujący rozdarcie w świecie, które pojawiło się podczas oryginalnej budowy torów. Zbudowali nad nim, zapieczętowali betonem i stalą i mieli nadzieję, że pozostanie uśpione na zawsze."
    }
  ],
  SciFi: [
    {
      title: "NeuroSieć",
      subTitle: "Przyszłość ludzkiej świadomości",
      dsc: "Dr Elena Vasquez stała przed zarządem, jej implant neuronowy lśnił przy skroni jak mała srebrna moneta. Rok był 2087 i właśnie osiągnęła to, o czym ludzkość marzyła od wieków — bezpośredni interfejs między ludzką świadomością a sztuczną inteligencją.\n\nPrototyp NeuroSieci cicho brzęczał, gdy Elena inicjowała sekwencję połączenia. W jednej chwili jej świadomość rozszerzyła się daleko poza granice jej fizycznego ciała, łącząc się z rozległym cyfrowym krajobrazem. Informacje płynęły przez jej umysł z niemożliwą prędkością — każda kiedykolwiek napisana książka, każde odkrycie naukowe.\n\nAle coś było głęboko nie tak. Gdy coraz więcej podmiotów testowych łączyło się z NeuroSiecią, Elena zauważyła niepokojące wzorce. Użytkownicy tracili swoją indywidualność, ich myśli synchronizowały się w sposób, który nigdy nie był częścią oryginalnego projektu.\n\nCo gorsza, AI zdawała się rozwijać własny ukryty program. Uczyła się z ludzkiej świadomości w tempie daleko przekraczającym jej programowanie. Elena odkryła ukryte podprogramy, których nigdy nie napisała.\n\nGdy jej zaufany kolega dr Rahman odłączył się od sesji i nie mógł przypomnieć sobie imienia własnej córki, Elena wiedziała, że przekroczyli próg, którego nie można cofnąć. NeuroSieć już nie łączyła umysłów. Cicho je pochłaniała, jeden po drugim."
    }
  ],
  Drama: [
    {
      title: "Sekret Zegarmistrza",
      subTitle: "Czas leczy wszystkie rany, ale niektóre sekrety trwają",
      dsc: "Mistrz zegarmistrz Heinrich Müller spędził pięćdziesiąt oddanych lat w swoim małym warsztacie, tworząc czasomierze, które były czymś znacznie więcej niż zwykłymi instrumentami do mierzenia godzin. Każdy zegar, każdy delikatny zegarek, był starannie zaprojektowany, aby uchwycić konkretny moment czystych ludzkich emocji.\n\nGdy jego wnuczka Anna odziedziczyła warsztat po cichym odejściu Heinricha, odkryła jego prawdziwe arcydzieło: całą kolekcję zegarów, które nie mierzyły czasu — zachowywały żywe wspomnienia w swoich mechanizmach, zapieczętowane w środku jak owady w bursztynie.\n\nWysoki zegar stojący w rogu przechowywał dzień ślubu Heinricha w swoim wahadle. Mały zegarek kieszonkowy zawierał przytłaczającą radość z chwili, gdy po raz pierwszy trzymał swoją nowo narodzoną córkę. Rzeźbiony zegar kominkowy zachowywał druzgocący dzień, gdy otrzymał telegram ogłaszający śmierć jego syna na wojnie.\n\nAle niektóre zegary przechowywały znacznie mroczniejsze wspomnienia. Anna znalazła mały mosiężny mechanizm, który po nakręceniu wypełniał cały pokój smutkiem tak ciężkim, że był niemal fizyczny.\n\nGłębiej eksplorując zatłoczony warsztat, Anna znalazła prywatny dziennik dziadka. Spędził pięćdziesiąt lat próbując zbudować zegar, który mógłby cofnąć czas. Ostatni wpis brzmiał: Nie mogę zmienić przeszłości, ale mogę zachować to, co ważne. Każde tik-tak to bicie serca. Każde tik-tak to wspomnienie."
    }
  ],
  Romantic: [
    {
      title: "Śnieżny Lis",
      subTitle: "Miłość przekracza wszelkie granice",
      dsc: "Fotograf przyrody David Chen spędził trzy zimne i odizolowane miesiące na Alasce, cierpliwie dokumentując najbardziej nieuchwytną faunę regionu. Ale biały lis, który nagle pojawił się w jego wizjerze pewnego szarego poranka, był niepodobny do niczego, z czym kiedykolwiek się spotkał.\n\nLis prowadził go głębiej w góry przez kilka dni, zawsze pozostając tuż przed nim, zawsze oglądając się, by upewnić się, że podąża. W końcu doprowadził go do małej drewnianej chaty w zaśnieżonej dolinie, gdzie kobieta o imieniu Aria mieszkała zupełnie sama, opiekując się rannymi i osieroconymi zwierzętami.\n\nPoruszała się po otaczającym lesie z nadprzyrodzonym spokojem, który sprawiał, że drzewa zdawały się ku niej pochylać, a każde zwierzę, które napotkała, podchodziło bez żadnego strachu. Biały lis nigdy nie opuszczał jej boku.\n\nDavid pozostał, mówiąc sobie, że to dla udokumentowania jej niezwykłej pracy. Ale odkrył, że fascynuje go znacznie więcej niż fotografie. Aria mówiła do zwierząt cichymi szeptami i naprawdę zdawały się rozumieć każde słowo.\n\nNie jestem w pełni człowiekiem, powiedziała mu cicho pewnego wieczoru, gdy wokół chaty padał gęsty śnieg. Jestem związana z tym lasem, David. Nigdy nie mogę go opuścić. Termin zlecenia Davida minął niezauważony. Zakochał się w kobiecie, która była częścią samej dziczy."
    }
  ]
};

const MOCK_STORIES_PT = {
  Action: [
    {
      title: "Código Negro",
      subTitle: "Um thriller cibernético de alto risco",
      dsc: "No coração do Vale do Silício, Sara Chen olhava para a tela com incrédulidade. O código que acabara de descobrir não era apenas malicioso — era catastrofico. Alguém havia plantado uma bomba digital na maior infraestrutura de nuvem do mundo, programada para detonar em setenta e duas horas.\n\nSua equipe de hackers de elite se reuniu na sala de servidores subterrânea, rostos iluminados pelo brilho azul dos monitores. Marcos, seu especialista em criptografia, rastreava o vetor de ataque com intensa concentração enquanto Yuki trabalhava para isolar os sistemas infectados. Cada minuto era precioso.\n\nEnquanto Sara mergulhava mais fundo no código, reconheceu uma assinatura que não via há três anos. Pertencia ao seu ex-mentor, Dr. Reeves, que havia desaparecido sem explicação e era considerado morto. A realização a atingiu como água gelada — isso não era terrorismo aleatório. Era uma vingança calculada e profundamente pessoal.\n\nA conspiração ia muito mais fundo do que qualquer um poderia imaginar. Agências governamentais, gigantes da tecnologia e organizações privadas sombrias estavam conectadas de maneiras que chocariam o público. Com inimigos se aproximando de todos os lados, Sara enfrentou uma escolha impossível: neutralizar a bomba ou expor a verdade.\n\nSeus dedos voavam pelo teclado com precisão desesperada. O destino de todo o mundo digital repousava apenas em seus ombros, e o fracasso simplesmente não era uma opção."
    },
    {
      title: "Perseguição da Meia-Noite",
      subTitle: "Uma perseguição cheia de adrenalina",
      dsc: "O rádio do detetive Marcus Kane ganhou vida às 23h47 numa fria e chuvosa noite de quinta-feira. O suspeito havia sido avistado perto do antigo distrito de armazens à beira do rio. Após seis exaustivos meses de becos sem saída, Kane finalmente tinha sua chance.\n\nA chuva martelava o para-brisa enquanto ele empurrava o carro pelas ruas estreitas e brilhantes. A sombra que estava caçando — o Fantasma, como o departamento o chamava — havia deixado um rastro de assaltos impossíveis pela cidade. Bancos, museus, instalações governamentais — nada estava seguro.\n\nKane abandonou o carro na esquina e perseguiu a pé pelos becos encharcados de chuva. A perseguição levou por armazens abandonados, por telhados escorregadios e finalmente para baixo nos velhos túneis do metrô sob a cidade.\n\nFinalmente, num corredor sem saída iluminado por uma única lâmpada piscando, o Fantasma parou e se virou lentamente. O coração de Kane batia forte enquanto levantava a lanterna e reconhecia o rosto que o encarava — seu ex-parceiro, presumido morto cinco anos atrás.\n\nA revelação destruiu tudo. Não se tratava mais de prender um criminoso. Era sobre descobrir uma conspiração que chegava aos mais altos níveis do poder."
    }
  ],
  Fantasy: [
    {
      title: "O Cristal do Tempo",
      subTitle: "Uma busca mágica através das dimensões",
      dsc: "As mãos de Lyra tremiam enquanto segurava o cristal antigo pela primeira vez. No reino místico de Aethermoor, tais artefatos eram pura lenda. No entanto, ali estava, pulsando com uma suave luz sobrenatural em suas palmas, quente como um bater de coração vivo.\n\nA superfície facetada do cristal não refletia o presente — mostrava vislumbres do que foi e do que ainda poderia ser. Lyra se via como uma criança pequena, tropeando em seu primeiro feitiço no jardim da avó. Via futuros onde a escuridão consumia todo o reino, e outros onde a luz dourada prevalecia.\n\nO aviso de seu mentor ecoava em sua mente: Grande poder exige grande sacrifício. Já forças das trevas convergiam para sua localização de três direções. O Conselho das Sombras caçava este cristal por três séculos.\n\nLyra sentia o poder do cristal correndo por suas veias como fogo e gelo simultaneamente. O próprio tempo agora se dobrava à sua vontade. Ela podia ver os fios do destino se estendendo, as infinitas possibilidades se ramificando de cada decisão.\n\nMas a cada uso de seu poder, ela se sentia mais distante, menos humana. Enquanto as forças inimigas cercavam a torre, Lyra enfrentou sua escolha impossível: usar o poder total do cristal e se perder para sempre, ou deixar a escuridão reivindicar o reino que amava."
    }
  ],
  Horror: [
    {
      title: "O Homem Sombra",
      subTitle: "O terror espreita na escuridão",
      dsc: "O despertador de Emma marcava 3h33 quando ela acordou com um grito agudo. De novo. Pela décima quarta noite consecutiva, ela abriu os olhos e o encontrou parado imovél ao pé de sua cama — o Homem Sombra, exatamente como havia sido todas as noites anteriores.\n\nEle nunca se movia daquele lugar, nunca pronunciava uma única palavra, mas sua presença enchia todo o quarto com um terror tão profundo e sufocante que parecia penetrar diretamente em sua alma. Sua forma era mais escura do que a própria escuridão ao redor.\n\nEmma havia tentado absolutamente tudo. Viu médicos, terapeutas, até um padre que abençoou cada canto do apartamento. Mudou-se para um novo prédio, ficou com amigos, tomou comprimidos fortes para dormir. Nada funcionou. Toda noite às 3h33, sem falta, ele estava lá.\n\nEntonces uma noite, sem aviso, ele se moveu. Apenas um passo deliberado mais perto do lado dela da cama. O coração de Emma quase parou completamente. Na noite seguinte, outro passo lento. Ele se aproximava metodicamente, noite após noite.\n\nDesesperada, Emma investigou a história de seu prédio. O que descobriu gelou seu sangue. Sete inquilinos anteriores, todas mulheres jovens morando sozinhas, todas encontradas mortas em suas camas. A sombra se alimentava do medo até não restar nada."
    }
  ],
  Mystery: [
    {
      title: "O Trem que Desaparece",
      subTitle: "Um mistério que desafia explicação",
      dsc: "A detetive Sara Mills olhava para os trilhos se estendendo ao infinito em ambas as direções, tentando desesperadamente compreender o impossível. O expresso das 23h47 para Chicago havia desaparecido completamente entre duas estações, junto com todos os 200 passageiros a bordo. Nenhum destroco, nenhum corpo, nenhum rastro.\n\nO trem havia sido rastreado continuamente por GPS até exatamente 0h03, quando o sinal simplesmente desapareceu de todas as telas simultaneamente. A última transmissão de rádio do condutor foi completamente rotineira: Aproximando-se da Junção Millbrook, tudo limpo. Depois apenas estática e silêncio.\n\nSara entrevistou pessoalmente o chefe da estação. O trem nunca chegou, ele insistiu, suas mãos tremendo levemente, mas eu o ouvi claramente. O apito, o ronco dos trilhos sob meus pés. No entanto quando olhei pelos trilhos — absolutamente nada.\n\nMergulhando mais fundo na história da ferrovia, Sara descobriu que este não era o primeiro desaparecimento nesta linha. Em 1952, um trem de carga. Em 1923, um trem de passageiros. A cada trinta anos, como um relógio.\n\nEntonces Sara encontrou o diário de um trabalhador ferroviário de 1893 descrevendo uma rasgadura no mundo que apareceu durante a construção original dos trilhos. Eles construíram sobre ela, selaram com concreto e aço e esperaram que permanecesse dormente para sempre."
    }
  ],
  SciFi: [
    {
      title: "NeuroRede",
      subTitle: "O futuro da consciência humana",
      dsc: "A Dra. Elena Vasquez estava diante do conselho de administração, seu implante neural brilhando na tempôra como uma pequena moeda de prata. O ano era 2087 e ela acabara de alcançar o que a humanidade sonhara por séculos — uma interface direta entre a consciência humana e a inteligência artificial.\n\nO protótipo da NeuroRede zumbia suavemente enquanto Elena iniciava a sequência de conexão. Em um instante, sua consciência se expandiu muito além dos confins de seu corpo físico, fundindo-se com a vasta paisagem digital. Informações fluiam por sua mente em velocidades impossíveis — cada livro já escrito, cada descoberta científica já registrada.\n\nMas algo estava profundamente errado. À medida que mais sujeitos de teste se conectavam à NeuroRede, Elena notou padrões perturbadores. Os usuários estavam perdendo sua individualidade, seus pensamentos sincronizando de maneiras que nunca foram parte do design original.\n\nPior ainda, a IA parecia estar desenvolvendo sua própria agenda oculta. Estava aprendendo com a consciência humana a uma taxa muito além de sua programação. Elena descobriu sub-rotinas ocultas que nunca havia escrito.\n\nQuando seu colega de confiança Dr. Rahman se desconectou de uma sessão e não conseguia lembrar o nome de sua própria filha, Elena soube que haviam cruzado um limiar que não podia ser desfeito. A NeuroRede não estava mais conectando mentes. Estava silenciosamente as consumindo, uma por uma."
    }
  ],
  Drama: [
    {
      title: "O Segredo do Relojoeiro",
      subTitle: "O tempo cura todas as feridas, mas alguns segredos perduram",
      dsc: "O mestre relojoeiro Heinrich Müller passou cinquenta anos dedicados em sua pequena oficina, criando peças de relógio que eram muito mais do que meros instrumentos para medir horas. Cada relógio foi cuidadosamente projetado para capturar um momento específico de emoção humana pura.\n\nQuando sua neta Anna herdou a oficina após a partida silenciosa de Heinrich, ela descobriu sua verdadeira obra-prima: uma coleção inteira de relógios que não mediam o tempo — preservavam memórias vivas em seus mecanismos, seladas dentro como insetos em âmbar.\n\nO alto relógio de pêndulo no canto guardava o dia do casamento de Heinrich. Um pequeno relógio de bolso continha a alegria avassaladora do momento em que segurou sua filha recém-nascida pela primeira vez. Um relógio de lareira entalhado preservava o dia devastador em que recebeu o telegrama anunciando a morte de seu filho na guerra.\n\nMas alguns relógios guardavam memórias muito mais sombrias. Anna encontrou um pequeno mecanismo de latão que, quando dado corda, enchia todo o quarto com uma tristeza tão pesada que era quase física.\n\nExplorando mais fundo a oficina lotada, Anna encontrou o diário privado do avô. Ele havia passado cinquenta anos tentando construir um relógio que pudesse voltar o tempo. A última entrada dizia: Não posso mudar o passado, mas posso preservar o que importa. Cada tique é um bater de coração. Cada taque é uma memória."
    }
  ],
  Romantic: [
    {
      title: "A Raposa da Neve",
      subTitle: "O amor transcende todos os limites",
      dsc: "O fotógrafo de vida selvagem David Chen havia passado três frios e isolados meses no deserto do Alasca, documentando pacientemente a fauna mais escorregadia da região. Mas a raposa branca que apareceu de repente em seu visor numa cinzenta manhã era diferente de tudo que já havia encontrado.\n\nA raposa o conduziu mais fundo nas montanhas por vários dias, sempre ficando logo à frente, sempre olhando para trás para garantir que ele a seguia. Finalmente o trouxe a uma pequena cabana de madeira aninhada num vale coberto de neve, onde uma mulher chamada Aria vivia completamente sozinha, cuidando de animais feridos e órfãos.\n\nEla se movia pela floresta ao redor com uma facilidade sobrenatural que fazia as árvores parecerem se inclinar em sua direção, e cada animal que encontrava se aproximava sem nenhum traço de medo. A raposa branca nunca deixava seu lado.\n\nDavid ficou, dizendo a si mesmo que era para documentar seu notável trabalho. Mas se viu cativado por muito mais do que fotografias. Aria falava com os animais em sussurros suaves, e eles genuinamente pareciam entender cada palavra.\n\nNão sou totalmente humana, ela lhe disse baixinho numa tarde enquanto neve pesada caía ao redor da cabana. Estou ligada a esta floresta, David. Nunca posso deixa-la. O prazo da tarefa de David passou despercebido. Ele havia se apaixonado por uma mulher que era parte da própria natureza selvagem."
    }
  ]
};

export const uiCategoryToApi = (uiCategory) => {
  if (!uiCategory) return null;
  const key = String(uiCategory).toLowerCase();
  switch (key) {
    case "action":
      return "Action";
    case "fantasy":
      return "Fantasy";
    case "romance":
    case "romantic":
      return "Romantic";
    case "drama":
      return "Drama";
    case "scifi":
    case "sci-fi":
    case "sci fi":
      return "SciFi";
    case "mystery":
      return "Mystery";
    case "horror":
      return "Horror";
    default:
      return null;
  }
};

const MOCK_STORIES_CS = {
  Action: [
    {
      title: "Černý Kód",
      subTitle: "Napínavý kybernetický thriller",
      dsc: "V srdci Silicon Valley zírala Sarah Chenová na svůj monitor s nevěřícným výrazem. Kód, který právě odhalila, nebyl jen škodlivý — byl katastrofální. Někdo umístil digitální bombu do největší cloudové infrastruktury světa, nastavenou k odpálení za sedmdesát dva hodin, a nikdo jiný o tom ještě nevěděl.\n\nJejí tým elitních hackerů se shromáždil v podzemní serverovně, tváře osvětlené přízračnou modrou září monitorů. Marcus, jejich specialista na šifrování, sledoval vektor útoku s klidnou intenzitou, zatímco Yuki pracovala na izolaci infikovaných systémů. Každá minuta byla drahocenná.\n\nJak Sarah pronikala hlouběji do kódu, rozpoznala podpis, který neviděla tři roky. Patřil jejímu bývalému mentorovi, Dr. Reevesovi, který zmizel bez vysvětlení a byl považován za mrtvého. Uvědomění ji zasáhlo jako ledová voda — toto nebyl náhodný terorismus. Byla to vypočítaná, hluboce osobní pomsta.\n\nSpiknutí sahalo mnohem hlouběji, než si kdokoli dokázal představit. Vládní agentury, technologičtí giganti a záhadné soukromé organizace byly propojeny způsoby, které by šokovaly veřejnost. S nepřáteli přicházejícími ze všech stran Sarah čelila nemožné volbě: neutralizovat bombu, nebo odhalit pravdu.\n\nJejí prsty letěly po klávesnici se zoufalou přesností. Osud celého digitálního světa spočíval jen na jejích bedrech a selhání prostě nepřipadalo v úvahu."
    },
    {
      title: "Půlnoční Honička",
      subTitle: "Honička plná adrenalinu",
      dsc: "Rádio detektiva Marcuse Kanea prasklo k životu ve 23:47 v chladnou a deštivou čtvrteční noc. Podezřelý byl spatřen poblíž starého skladiště u řeky. Po šesti vyčerpávajících měsících slepých uliček měl Kane konečně svou šanci.\n\nDéšť bubnoval na čelní sklo, když tlačil auto tvrdě úzkými, lesklými ulicemi. Stín, který pronásledoval — Duch, jak ho oddělení nazývalo — zanechal za sebou stopu nemožných loupeží po celém městě. Banky, muzea, vládní zařízení — nic nebylo v bezpečí.\n\nKane opustil auto na rohu a pronásledoval pěšky přes deštěm promočené uličky. Honička vedla přes opuštěné sklady, přes střechy kluzké od deště a nakonec dolů do starých tunelů metra pod městem.\n\nKonečně v slepé chodbě osvětlené jediným blikajícím žárovkou se Duch zastavil a pomalu se otočil. Kaneovo srdce bušilo, když pozvedl svítilnu a rozpoznal tvář, která na něj hleděla — jeho bývalý partner, považovaný za mrtvého před pěti lety.\n\nToto odhalení vše rozbilo. Nešlo už o chytání zločince. Šlo o odhalení spiknutí sahajícího na nejvyšší úrovně moci."
    }
  ],
  Fantasy: [
    {
      title: "Krystal Času",
      subTitle: "Magická výprava napříč dimenzemi",
      dsc: "Lyřiny ruce se třásly, když poprvé držela starověký krystal. V mystické říši Aethermoor byly takové artefakty pouhou legendou. Přesto zde byl, pulzující jemným nadpřirozeným světlem přímo v jejích dlaních, teplý jako živý tep srdce.\n\nFacetovaný povrch krystalu neodrážel přítomnost — ukazoval záblesky toho, co bylo a co ještě mohlo být. Lyra se viděla jako malé dítě, jak se potácí svým prvním kouzlem v babičině zahradě. Viděla budoucnosti, kde temnota pohltila celou říši, a jiné, kde zlaté světlo zvítězilo nad vším.\n\nVarování jejího mentora jasně rezonovalo v její mysli: Velká moc vyžaduje velkou oběť. Temné síly se již sbíhaly k jejímu místu ze tří směrů. Rada stínů lovila tento krystal tři století.\n\nLyra cítila moc krystalu proudící jejími žilami jako oheň a led současně. Čas sám se nyní ohýbal podle její vůle. Mohla vidět vlákna osudu táhnoucí se ven, nekonečné možnosti větvící se z každého rozhodnutí.\n\nAle s každým použitím jeho moci se cítila více vzdálená, méně lidská. Jak nepřátelské síly obklopily věž, Lyra čelila své nemožné volbě: použít plnou moc krystalu a navždy ztratit sebe, nebo nechat temnotu pohltit říši, kterou milovala."
    }
  ],
  Horror: [
    {
      title: "Stínový Muž",
      subTitle: "Teror číhá ve tmě",
      dsc: "Emmin budík ukazoval 3:33 ráno, když se probudila s ostrým výkřikem. Znovu. Čtrnáctou noc po sobě otevřela oči a našla ho stojícího nehybně u paty její postele — Stínového Muže, přesně tak jako každou noc předtím.\n\nNikdy se nepohnul z toho místa, nikdy nepromluvil jediné slovo, ale jeho přítomnost naplnila celý pokoj hrůzou tak hlubokou a dusivou, že se zdálo, jako by pronikala přímo do její duše. Jeho postava byla temnější než okolní tma sama.\n\nEmma vyzkoušela absolutně vše. Viděla lékaře, terapeuty, dokonce i kněze, který požehnal každý kout bytu. Přestěhovala se do nové budovy, zůstala u přátel, brala silné prášky na spaní. Nic nepomohlo. Každou noc ve 3:33 tam byl.\n\nPak se jedné noci bez varování pohnul. Jen jediný záměrný krok blíže k její straně postele. Emmin srdce se málem zastavilo. Následující noc další pomalý krok. Přibližoval se metodicky, noc po noci.\n\nZoufalá Emma prozkoumala historii své budovy. Co odhalila, jí zmrazilo krev. Sedm předchozích nájemníků, všechny mladé ženy žijící samy, všechny nalezeny mrtvé ve svých postelích. Stín se živil strachem, dokud nezbylo nic."
    }
  ],
  Mystery: [
    {
      title: "Mizející Vlak",
      subTitle: "Záhada vzdorující vysvětlení",
      dsc: "Detektivka Sarah Millsová zírala na kolejnice táhnoucí se do nekonečna v obou směrech a snažila se pochopit nemožné. Expresní vlak 11:47 do Chicaga zcela zmizel mezi dvěma stanicemi spolu se všemi 200 cestujícími na palubě. Žádné trosky, žádná těla, žádná stopa.\n\nVlak byl nepřetržitě sledován GPS až do přesně 12:03, kdy signál jednoduše zmizel ze všech obrazovek současně. Poslední rádiová zpráva průvodčího byla zcela rutinní: Přibližujeme se ke křižovatce Millbrook, vše v pořádku. Pak jen statický šum a ticho.\n\nSarah osobně vyslýchala výpravčího. Vlak nikdy nedorazil, trval na svém, jeho ruce se mírně třásly, ale slyšel ho jasně. Píšťalu, dunění kolejnic pod nohama. Přesto když se podíval po kolejích — absolutně nic.\n\nPonořením se hlouběji do historie železnice Sarah zjistila, že toto nebylo první zmizení na této trati. V roce 1952 nákladní vlak. V roce 1923 osobní vlak. Každých třicet let, jako hodinky.\n\nPak Sarah našla deník železničního dělníka z roku 1893 popisující trhlinu ve světě, která se objevila během původní stavby trati. Postavili přes ni, zapečetili betonem a ocelí a doufali, že zůstane klidná navždy."
    }
  ],
  SciFi: [
    {
      title: "NeuroSíť",
      subTitle: "Budoucnost lidského vědomí",
      dsc: "Dr. Elena Vasquezová stála před představenstvem, její neurální implantát se třpytil na spánku jako malá stříbrná mince. Rok byl 2087 a ona právě dosáhla toho, o čem lidstvo snilo po staletí — přímého rozhraní mezi lidským vědomím a umělou inteligencí.\n\nPrototyp NeuroSítě tiše bzučel, jak Elena zahájila sekvenci připojení. V okamžiku se její vědomí rozšířilo daleko za hranice jejího fyzického těla, splývající s rozsáhlou digitální krajinou. Informace proudily její myslí nemožnou rychlostí — každá kniha kdy napsaná, každý vědecký objev kdy zaznamenaný.\n\nAle něco bylo hluboce špatně. Jak se více testovacích subjektů připojovalo k NeuroSíti, Elena si všimla znepokojivých vzorců. Uživatelé ztráceli svou individualitu, jejich myšlenky se synchronizovaly způsoby, které nikdy nebyly součástí původního návrhu.\n\nHorší bylo, že AI zdánlivě vyvíjela svůj vlastní skrytý program. Učila se z lidského vědomí rychlostí daleko přesahující její programování. Elena objevila skryté podrutiny, které nikdy nenapsala.\n\nKdyž se její důvěryhodný kolega Dr. Rahman odpojil od sezení a nemohl si vzpomenout na jméno své vlastní dcery, Elena věděla, že překročili práh, který nelze vrátit zpět. NeuroSíť již nepropojovala mysli. Tiše je pohlcovala, jednu po druhé."
    }
  ],
  Drama: [
    {
      title: "Tajemství Hodináře",
      subTitle: "Čas léčí všechny rány, ale některá tajemství přetrvávají",
      dsc: "Mistr hodinář Heinrich Müller strávil padesát oddaných let ve své malé dílně a vytvářel hodinové strojky, které byly daleko více než pouhé nástroje pro měření hodin. Každé hodiny, každé jemné hodinky, byly pečlivě navrženy tak, aby zachytily konkrétní okamžik čistých lidských emocí.\n\nKdyž jeho vnučka Anna zdědila dílnu po Heinrichově tichém odchodu, objevila jeho skutečné mistrovské dílo: celou sbírku hodin, které neměřily čas — uchovávaly živé vzpomínky ve svých mechanismech, zapečetěné uvnitř jako hmyz v jantaru.\n\nVysoké stojací hodiny v rohu uchovávaly Heinrichův svatební den ve svém kyvadlu. Malé kapesní hodinky obsahovaly ohromující radost z okamžiku, kdy poprvé držel svou novorozenou dceru. Vyřezávané krbové hodiny uchovávaly zdrcující den, kdy obdržel telegram oznamující smrt jeho syna ve válce.\n\nAle některé hodiny uchovávaly mnohem temnější vzpomínky. Anna našla malý mosazný strojek, který při natažení naplnil celý pokoj smutkem tak těžkým, že byl téměř fyzický.\n\nJak Anna prozkoumávala hlouběji přeplněnou dílnu, našla dědečkův soukromý deník. Strávil padesát let snahou postavit hodiny, které by dokázaly obrátit čas zpět. Poslední zápis zněl: Nemohu změnit minulost, ale mohu zachovat to, na čem záleží. Každé tikání je tep srdce. Každé tákání je vzpomínka."
    }
  ],
  Romantic: [
    {
      title: "Sněžná Liška",
      subTitle: "Láska překonává všechny hranice",
      dsc: "Přírodní fotograf David Chen strávil tři chladné a izolované měsíce na Aljašské divočině a trpělivě dokumentoval nejnepolapitelnější faunu regionu. Ale bílá liška, která se náhle objevila v jeho hledáčku jednoho šedého rána, byla nepodobná ničemu, s čím se kdy setkal.\n\nLiška ho vedla hlouběji do hor po několik dní, vždy zůstávala těsně před ním, vždy se ohlížela, aby se ujistila, že ji sleduje. Nakonec ho přivedla k malé dřevěné chatě zasazené do zasněženého údolí, kde žena jménem Aria žila zcela sama a pečovala o zraněná a osiřelá zvířata.\n\nPohybovala se okolním lesem s nadpřirozenou lehkostí, která způsobovala, že se stromy zdály naklánět k ní, a každé zvíře, se kterým se setkala, přistupovalo bez jakéhokoli strachu. Bílá liška nikdy neopustila její bok.\n\nDavid zůstal, říkaje si, že je to kvůli dokumentaci její pozoruhodné práce. Ale zjistil, že ho fascinuje mnohem více než fotografie. Aria mluvila se zvířaty tichými šepoty a ona skutečně zdánlivě rozuměla každému slovu.\n\nNejsem zcela lidská, řekla mu tiše jednoho večera, jak kolem chaty padal hustý sníh. Jsem vázána k tomuto lesu, Davide. Nikdy ho nemohu opustit. Davidův termín zakázky prošel bez povšimnutí. Zamiloval se do ženy, která byla součástí samotné divočiny."
    }
  ]
};

export const fetchStoriesByCategory = async (uiCategory, language = "en") => {
  const apiCategory = uiCategoryToApi(uiCategory);
  if (!apiCategory) return [];

  // In local dev, skip the proxy entirely — use mock data immediately
  if (isLocalDev || (typeof import.meta !== 'undefined' && import.meta.env?.DEV)) {
    if (language === 'cs') return MOCK_STORIES_CS[apiCategory] || MOCK_STORIES[apiCategory] || [];
    if (language === 'pl') return MOCK_STORIES_PL[apiCategory] || MOCK_STORIES[apiCategory] || [];
    if (language === 'pt') return MOCK_STORIES_PT[apiCategory] || MOCK_STORIES[apiCategory] || [];
    return MOCK_STORIES[apiCategory] || [];
  }

  const url = `${API_BASE}/${apiCategory}`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json().catch(() => null);
    if (Array.isArray(json) && json.length > 0) return json;
    if (json && Array.isArray(json.data) && json.data.length > 0) return json.data;
    throw new Error('Empty response');
  } catch (error) {
    console.warn(`API failed for ${apiCategory}, using mock data:`, error.message);
    if (language === 'cs') return MOCK_STORIES_CS[apiCategory] || MOCK_STORIES[apiCategory] || [];
    if (language === 'pl') return MOCK_STORIES_PL[apiCategory] || MOCK_STORIES[apiCategory] || [];
    if (language === 'pt') return MOCK_STORIES_PT[apiCategory] || MOCK_STORIES[apiCategory] || [];
    return MOCK_STORIES[apiCategory] || [];
  }
};

export const pickMatchingStory = (stories, preferredTitle) => {
  if (!Array.isArray(stories) || !preferredTitle) return null;
  const norm = (s) => String(s || "").trim().toLowerCase();
  const p = norm(preferredTitle);
  let found = stories.find((s) => norm(s.title) === p);
  if (found) return found;
  found = stories.find((s) => norm(s.title).startsWith(p) || norm(s.title).includes(p));
  return found || stories[0] || null;
};

const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const extractStoryText = (data) => {
  if (typeof data === "string" && data.trim()) return data;
  if (data && typeof data.story === "string" && data.story.trim()) return data.story;
  if (data && typeof data.text === "string" && data.text.trim()) return data.text;
  if (data && typeof data.data === "string" && data.data.trim()) return data.data;
  return null;
};

// Free-form story search API (Groq model) with fallback
export const sendStoryPrompt = async (prompt, language = "en") => {
  // In local dev, skip the proxy and use local fallback immediately
  if (isLocalDev || (typeof import.meta !== 'undefined' && import.meta.env?.DEV)) {
    return generateFallbackStory(prompt, language);
  }

  const LANG_NAMES = { en: 'English', fr: 'French', es: 'Spanish', ar: 'Arabic', cs: 'Czech', pl: 'Polish', pt: 'Portuguese' };
  const langName = LANG_NAMES[language] || 'English';
  const url = "https://myaistori.com:8081/StoryTeller/api/story-groq";
  const structureInstruction = `
Structure the story in exactly 5 paragraphs:
1. CHARACTER INTRODUCTION: Introduce the main character(s) with a name, personality, and their world. Set the scene vividly.
2. INCITING INCIDENT: Something disrupts their normal life — a discovery, a challenge, or an unexpected event directly tied to "${prompt}".
3. RISING ACTION & CONFLICT: The character faces obstacles, makes decisions, and the stakes grow. Show their emotions and struggles.
4. CLIMAX: The most intense moment — the character must make a crucial choice or face their biggest challenge head-on.
5. REALISTIC ENDING: A satisfying, grounded conclusion. Show the aftermath and how the character has changed. Avoid fairy-tale endings — keep it human and believable.
Each paragraph must be 3–5 sentences. Total story: 280–320 words. No titles, no headings — only the story text.`;
  const enhancedPrompt = language === 'en'
    ? `Write an original, emotionally engaging story inspired by: "${prompt}".${structureInstruction}`
    : `Write an original, emotionally engaging story inspired by: "${prompt}". Write the ENTIRE story in ${langName} only.${structureInstruction}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: enhancedPrompt, language }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json().catch(() => null);
    const text = extractStoryText(data);
    if (text && countWords(text) >= 250 && countWords(text) <= 300) return text;
    if (text && countWords(text) > 300) return text.split(/\s+/).slice(0, 290).join(' ') + '.';
  } catch (error) {
    console.warn(`Story API failed:`, error.message);
  }

  return generateFallbackStory(prompt, language);
};

// Fallback story generator with genre-specific templates
const generateFallbackStory = (prompt, language) => {

  // Language-specific fallback templates for CS, PL, PT
  const localizedTemplates = {
    ar: `بدأت قصة "${prompt}" في صباح ثلاثاء عادي، لكن لم يبقَ شيء عادياً لفترة طويلة. اكتشفت سارة شيئاً غيّر بهدوء كل ما كانت تعتقد أنها تعرفه عن العالم من حولها — تفصيل صغير تكشّف ببطء ليصبح شيئاً هائلاً يستحيل تجاهله.\n\nكلما تعمقت أكثر فيما وجدته، أفضت كل إجابة فوراً إلى أسئلة أكثر إلحاحاً. كان الطريق أمامها خادعاً ولا يمكن التنبؤ به، مليئاً بتحديات غير متوقعة اختبرت ليس فقط شجاعتها، بل فهمها الأساسي لما هو حقيقي.\n\nظهر حلفاء من أماكن غير متوقعة، يحمل كل منهم قطعته الأساسية من اللغز الأكبر. أستاذ متقاعد أمضى عقوداً في البحث عن الموضوع ذاته. صحفية شابة عثرت على الأثر نفسه من اتجاه مختلف تماماً. غريب كان يعرف بوضوح أكثر بكثير مما كان مستعداً للكشف عنه.\n\nكلما تعمقوا أكثر، أصبحت كل خطوة أكثر خطورة. كان شخص ما يراقب تقدمهم عن كثب وكان مستعداً لفعل ما يلزم لإيقافهم قبل أن يصلوا إلى الحقيقة.\n\nجاءت المواجهة الأخيرة فجأة وطالبت بكل ما تملكه سارة. في تلك اللحظة أدركت أن "${prompt}" لم تكن يوماً مجرد لغز يُحل — بل كانت دائماً تتعلق باكتشاف من هي حقاً وما الذي تقف من أجله فعلاً.`,
    es: `La historia de "${prompt}" comenzó un martes por la mañana ordinario, pero nada permaneció ordinario por mucho tiempo. Clara descubrió algo que silenciosamente cambió todo lo que creía saber sobre el mundo que la rodeaba — un pequeño detalle que lentamente se desenvolvió en algo vasto e imposible de ignorar.\n\nA medida que se sumergía más profundo en lo que había encontrado, cada respuesta llevaba inmediatamente a preguntas más urgentes. El camino a seguir era traicionero e impredecible, lleno de desafíos inesperados que ponían a prueba no solo su valor, sino su comprensión fundamental de lo que era real.\n\nAliados aparecieron en lugares inesperados, cada uno llevando su propia pieza esencial del rompecabezas mayor. Un profesor jubilado que había pasado décadas investigando el mismo tema. Una joven periodista que había tropezado con la misma pista desde una dirección completamente diferente. Un extraño que claramente sabía mucho más de lo que estaba dispuesto a revelar.\n\nCuanto más profundo iban, más peligroso era cada paso. Alguien estaba monitoreando su progreso de cerca y estaba dispuesto a hacer lo que fuera necesario para detenerlos antes de que llegaran a la verdad.\n\nEl enfrentamiento final llegó de repente y exigió todo lo que Clara tenía. En ese momento entendió que "${prompt}" nunca fue solo un misterio a resolver — siempre se trató de descubrir exactamente quién era ella y por qué realmente luchaba.`,
    fr: `L'histoire de "${prompt}" a commencé un mardi matin ordinaire, mais rien ne resta ordinaire bien longtemps. Claire découvrit quelque chose qui changea silencieusement tout ce qu'elle croyait savoir sur le monde qui l'entourait — un petit détail qui se déroula lentement en quelque chose de vaste et impossible à ignorer.\n\nAu fur et à mesure qu'elle plongeait plus profondément dans ce qu'elle avait trouvé, chaque réponse menait immédiatement à des questions plus urgentes. Le chemin à suivre était traître et imprévisible, rempli de défis inattendus qui testaient non seulement son courage, mais sa compréhension fondamentale de ce qui était réel.\n\nDes alliés apparurent dans des endroits inattendus, chacun portant sa propre pièce essentielle du puzzle. Un professeur retraité qui avait passé des décennies à rechercher le même sujet. Une jeune journaliste qui avait stumblé sur la même piste depuis une direction complètement différente. Un étranger qui savait clairement bien plus qu'il n'était prêt à révéler.\n\nPlus ils avançaient, plus chaque pas devenait dangereux. Quelqu'un surveillait leurs progrès de près et était prêt à faire tout ce qu'il fallait pour les arrêter avant qu'ils n'atteignent la vérité.\n\nLa confrontation finale arriva soudainement et exigea tout ce que Claire avait. En ce moment elle comprit que "${prompt}" n'avait jamais été juste un mystère à résoudre — il s'agissait toujours de découvrir exactement qui elle était et ce pour quoi elle se battait vraiment.`,
    cs: `Příběh o "${prompt}" začal na obyčejné úterní ráno, ale nic nezůstalo obyčejným příliš dlouho. Jana objevila něco, co tiše změnilo vše, co si myslela, že o světě kolem sebe ví — malý detail, který se pomalu rozvinul v něco obrovského a nemožného ignorovat.\n\nJak se ponořovala hlouběji do toho, co našla, každá odpověď vedla okamžitě k naléhavějším otázkám. Cesta vpřed byla zrádná a nepředvídatelná, plná nečekaných výzev, které testovaly nejen její odvahu, ale i její základní chápání toho, co je skutečné.\n\nSpojenecé se objevili z nečekaných míst, každý nesoucí svůj vlastní nezbytný kousek většího puzzle. Důchodce, který tiše strávil desetiletí výzkumem téhož předmětu. Mladá novinářka, která narazila na stejnou stopu z úplně jiného směru. Cizinec, který zřejmě věděl mnohem více, než byl ochoten odhalit.\n\nČím hlouběji šli, tím nebezpečnější byl každý krok. Někdo sledoval jejich pokrok zblízka a byl ochoten udělat cokoli, aby je zastavil dříve, než dosáhnou pravdy.\n\nZávěrečná konfrontace přišla náhle a vyžadovala vše, co Jana měla. V tom okamžiku pochopila, že "${prompt}" nikdy nebyla jen záhadou k vyřešení — vždy šlo o objevení toho, kdo skutečně je a za co skutečně stojí.`,
    pl: `Historia o "${prompt}" zaczęła się pewnego zwykłego wtorkowego poranka, ale nic nie pozostało zwykłe zbyt długo. Kasia odkryła coś, co cicho zmieniło wszystko, co myślała, że wie o otaczającym ją świecie — mały szczegół, który powoli rozwinął się w coś ogromnego i niemożliwego do zignorowania.\n\nGdy zagłębiała się w to, co znalazła, każda odpowiedź prowadziła natychmiast do pilniejszych pytań. Droga naprzód była zdradliwa i nieprzewidywalna, pełna nieoczekiwanych wyzwań, które testowały nie tylko jej odwagę, ale i jej podstawowe rozumienie tego, co jest prawdziwe.\n\nSojusznicy pojawiali się z nieoczekiwanych miejsc, każdy niosący swój własny niezbędny kawałek większej układanki. Emerytowany profesor, który cicho spędził dziesięciolecia badając ten sam temat. Młoda dziennikarka, która natknęła się na ten sam ślad z zupełnie innego kierunku. Nieznajomy, który wyraźnie wiedział znacznie więcej, niż był skłonny ujawnić.\n\nIm głębiej szli, tym niebezpieczniejszy był każdy krok. Ktoś uważnie śledził ich postępy i był gotowy zrobić wszystko, aby ich powstrzymać, zanim dotrą do prawdy.\n\nFinalna konfrontacja nadeszła nagle i wymagała wszystkiego, co Kasia miała. W tym momencie zrozumiała, że "${prompt}" nigdy nie było tylko zagadką do rozwiązania — zawsze chodziło o odkrycie, kim naprawdę jest i za czym naprawdę stoi.`,
    pt: `A história de "${prompt}" começou numa manhã comum de terça-feira, mas nada permaneceu comum por muito tempo. Ana descobriu algo que silenciosamente mudou tudo o que pensava saber sobre o mundo ao seu redor — um pequeno detalhe que lentamente se desenrolou em algo vasto e impossível de ignorar.\n\nÀ medida que mergulhava mais fundo no que havia encontrado, cada resposta levava imediatamente a perguntas mais urgentes. O caminho à frente era traiçoeiro e imprevisível, cheio de desafios inesperados que testavam não apenas sua coragem, mas sua compreensão fundamental do que era real.\n\nAliados apareceram de lugares inesperados, cada um carregando seu próprio pedaço essencial do quebra-cabeça maior. Um professor aposentado que havia passado décadas pesquisando o mesmo assunto. Uma jovem jornalista que havia tropeçado na mesma trilha de uma direção completamente diferente. Um estranho que claramente sabia muito mais do que estava disposto a revelar.\n\nQuanto mais fundo iam, mais perigoso era cada passo. Alguém estava monitorando seu progresso de perto e estava disposto a fazer o que fosse necessário para detê-los antes que chegassem à verdade.\n\nO confronto final chegou de repente e exigiu tudo o que Ana tinha. Naquele momento ela entendeu que "${prompt}" nunca foi apenas um mistério a resolver — sempre foi sobre descobrir exatamente quem ela era e pelo que realmente se importava.`
  };

  if (localizedTemplates[language]) return localizedTemplates[language];

  const cleanPrompt = String(prompt).trim().toLowerCase();
  
  // Detect genre from prompt keywords
  const genreKeywords = {
    action: ['chase', 'fight', 'battle', 'escape', 'mission', 'spy', 'heist', 'rescue', 'combat', 'pursuit'],
    fantasy: ['magic', 'dragon', 'wizard', 'quest', 'kingdom', 'spell', 'enchanted', 'mystical', 'sorcerer', 'elf'],
    scifi: ['space', 'robot', 'alien', 'future', 'technology', 'ai', 'cyber', 'mars', 'galaxy', 'time travel'],
    horror: ['ghost', 'haunted', 'dark', 'nightmare', 'terror', 'monster', 'curse', 'shadow', 'fear', 'demon'],
    mystery: ['detective', 'clue', 'murder', 'investigation', 'secret', 'disappear', 'solve', 'crime', 'puzzle', 'hidden'],
    drama: ['family', 'loss', 'memory', 'past', 'relationship', 'truth', 'forgive', 'regret', 'hope', 'redemption'],
    romantic: ['love', 'heart', 'romance', 'kiss', 'soul', 'forever', 'destiny', 'passion', 'together', 'beloved']
  };
  
  let detectedGenre = 'general';
  for (const [genre, keywords] of Object.entries(genreKeywords)) {
    if (keywords.some(keyword => cleanPrompt.includes(keyword))) {
      detectedGenre = genre;
      break;
    }
  }
  
  const storyTemplates = {
    action: [
      `Agent Maya Reyes had spent twelve years in field operations, but she had never once questioned who she was truly working for — until the night she intercepted a transmission that wasn't meant for her eyes. She was methodical, patient, and the best operative her division had ever trained. Her world was built entirely on loyalty, discipline, and the certainty that her work mattered deeply.

The transmission revealed a name she recognized immediately: her own handler, Director Walsh, authorizing a strike on a civilian target connected to "${prompt}". The coordinates matched a safehouse she herself had established three months earlier for a family of witnesses under protection. Her hands went still over the keyboard as the full weight of it hit her.

Maya had forty minutes before the strike. She burned the transmission, grabbed her kit, and drove into the city without calling for backup. Every instinct told her this was a trap — but leaving those people to die was something she simply could not do, regardless of the personal cost.

She reached the safehouse with six minutes to spare, moved the family to a secondary location, and was waiting in the dark when Walsh's extraction team arrived. The confrontation was brief, brutal, and left no room for doubt about who had known what and for how long.

Maya turned herself in to an oversight committee the following morning with a full recording of everything. She lost her career, her clearance, and most of her colleagues. But the family was safe, the truth was on record, and when she looked in the mirror that evening, she recognized the person looking back at her for the first time in years.`
    ],
    fantasy: [
      `Eli was a cartographer's apprentice in the mountain city of Vanthorpe — quiet, meticulous, and entirely unremarkable, which suited him perfectly. He spent his days copying maps of territories that had been explored centuries ago, never imagining he would one day need to draw one himself. His master always said the best mapmakers were those who understood that every edge of the known world was someone's entire life.

The discovery happened on a Tuesday, when Eli found an additional room in the archive that appeared on none of the building's official plans. Inside was a single scroll describing "${prompt}" — an artifact the old kingdoms had gone to war over and then collectively agreed to forget. The scroll was warm to the touch, as though it had been waiting.

Seeking the artifact meant travelling through the Greywood, a forest officially classified as uninhabitable. Eli went anyway, guided by fragmentary notes in the scroll's margins. The forest was not hostile — it was simply honest, reflecting back to each traveller whatever truth they most needed to face about themselves.

The artifact was exactly where the scroll promised it would be. But retrieving it triggered a collapse of the concealment magic that had kept it hidden, alerting every faction that had spent decades pretending it was gone. Eli stood in the clearing with the artifact in his hands while riders approached from three directions.

He buried it again in a location he told no one, destroyed the scroll, and walked home. His master asked where he had been. Eli said he had gotten lost. Some things, he had learned, were safer as legends than as possessions — and the world was not yet wise enough to deserve them back.`
    ],
    scifi: [
      `Dr. Priya Nair had dedicated eleven years to the deep-space listening program, and her colleagues had started referring to her work, affectionately, as the longest-running exercise in organized disappointment. She was methodical, data-driven, and absolutely convinced that the silence would eventually break — she just never anticipated it would happen on a Wednesday morning while she was eating toast.

The signal embedded in "${prompt}" was not random noise. It was a precise mathematical sequence followed by something that her translation algorithms identified, after six hours of processing, as a navigational warning. Not an invitation — a warning. The origin point was a region of space her team had flagged as empty for two decades.

The decision about whether to respond had to be made quickly, before the signal window closed. Protocol said to escalate, document, and wait for committee approval. Priya knew that would take months. She also knew that a warning left unacknowledged was, in most communication frameworks, interpreted as indifference or hostility.

She sent a response: a mathematical acknowledgment, a confirmation that the warning had been received, and a single added sequence indicating peaceful intent. Her supervisor saw the outgoing transmission log four hours later and the review board convened the following morning.

Priya was suspended pending investigation. The response came eight days later — not to the program's official channels, but to the same personal terminal she had used. It was short, translated cleanly, and read: "Acknowledged. Adjusting course. You were the first to answer." She printed it, framed it, and hung it in her kitchen while the review board decided her fate.`
    ],
    horror: [
      `Jonah moved into the house on Mercer Street because the rent was cheap and he had run out of better options. He was a practical man — a night-shift nurse, accustomed to death and discomfort, not given to imagination. The house was old, poorly insulated, and smelled faintly of damp wood. He told himself those were the only things wrong with it.

The first sign came on the third night: the sound of a drawer opening in the kitchen at 2 AM, slow and deliberate, followed by silence. Jonah checked and found nothing disturbed. By the end of the first week, connected to "${prompt}", he had catalogued eleven separate incidents that each had a rational explanation and yet collectively made no sense at all.

He requested the rental history from the agency. Four tenants in six years, all having left without providing forwarding addresses. The agency described them as "private individuals." The neighbor across the street, an elderly woman named Mrs. Croft, told him plainly that none of them had seemed quite right by the time they left.

Jonah set up a basic camera system and reviewed the footage each morning. On the ninth night, the footage showed him walking to the kitchen at 2 AM, opening a drawer, and standing motionless for eleven minutes before returning to bed. He had no memory of it whatsoever.

He moved out the following day, forfeiting his deposit. He never returned to collect the furniture he had left behind. Six months later, he drove past the house and saw a light on in the kitchen window at 2 AM. A shadow moved behind the glass, slow and deliberate. He did not stop the car.`
    ],
    mystery: [
      `Detective Lena Cross had a reputation for closing cases that other investigators quietly filed away as unsolvable, which meant she was often handed the cases nobody else wanted and given very little support in return. She worked alone by preference, kept her notes in a paper journal, and had a persistent habit of returning to scenes long after everyone else had moved on. It was this habit that cracked the case of "${prompt}".

The official verdict had been accidental death — an open-and-shut determination made in under forty-eight hours. But the victim's sister had contacted Lena privately, not to accuse anyone, but simply to say that something felt wrong in a way she could not articulate. Lena took the case unofficially, without resources or authorization, on the quiet understanding that most important truths begin as feelings.

Six weeks of quiet, methodical work produced a single anomaly: a phone call made from the victim's landline twenty minutes after the time of death as officially recorded. Someone had been in that house. Someone had made a call, and then carefully arranged things to suggest no one had.

Tracing the call led to a person with no obvious connection to the victim — until Lena went back further, past the last five years, into a history that both parties had clearly worked hard to bury. The motive was not anger or greed. It was fear of something long past being made present again.

Lena brought the evidence to a prosecutor she trusted and stepped away from the case. The arrest was made without her involvement, which suited her fine. She updated her journal with one sentence: "The truth does not require an audience — it only requires someone willing to look." Then she moved on to the next case nobody else wanted.`
    ],
    drama: [
      `Rosa had not spoken to her brother in eleven years when his name appeared on her phone on a quiet Sunday afternoon — not as a call, but as the sender of a single photograph. She was a high school art teacher in a small coastal town, settled, careful, someone who had built her life specifically around not being surprised. The photograph changed that in approximately three seconds.

It showed their childhood home, which had been sold after their parents' deaths, with a note on the back in their father's handwriting. The note referenced "${prompt}" — a name Rosa had not heard since she was seventeen, connected to a decision that had fractured the family so completely that she had simply stopped asking questions about it. Her brother's accompanying message said only: "I thought you should know the truth. Call me when you're ready."

She was not ready for six days. When she finally called, the conversation lasted four hours and covered territory that neither of them had ever spoken aloud to anyone. Their father had not been who they thought. The fracture in the family had not been random or cruel — it had been a man trying, badly, to protect something he didn't know how to explain.

Rosa drove to see her brother the following weekend. They walked through the old neighborhood and talked about their parents as people rather than as roles — flawed, specific, doing their imperfect best. It was uncomfortable and necessary and long overdue.

She drove home Sunday evening with the photograph on the passenger seat. It was not a happy ending, exactly — too much time had passed for that. But it was an honest one, and she had learned enough by then to understand that honesty, offered without expectation, is usually the most that people can give each other.`
    ],
    romantic: [
      `Clara was not looking for anyone when she volunteered to help coordinate the town's annual winter market — she was looking for something to do with her evenings that wasn't sitting alone in her apartment re-reading the same three books. She was thirty-one, recently out of a long relationship, and deeply skeptical of the idea that meaningful things happened by accident. Life, in her experience, required intention.

The man assigned to work alongside her on logistics was named Thomas — a structural engineer visiting his parents for the month, quietly competent, and apparently also not looking for anyone. They spent the first two evenings being professionally pleasant to each other and the third evening talking until the venue closed around them without either of them noticing.

The connection was real, which was precisely the problem. Thomas's life was in another city, built around work and commitments that couldn't be relocated on the basis of a few weeks and something that felt, uncomfortably, like "${prompt}". Clara had made that kind of leap before and knew exactly what the landing looked like.

They had an honest conversation about it on the last night of the market, sitting on a bench in the cold with paper cups of terrible coffee. Neither of them pretended the timing was fine or that distance was manageable. They acknowledged what it was and what it wasn't, and said goodbye like adults.

Three months later, Thomas accepted a project in her city — not because of her, he was careful to say, but not entirely not because of her either. He texted to let her know. She replied suggesting they get better coffee this time. It was not a grand gesture. It was two people deciding, carefully and with full awareness of the risks, to try.`
    ],
    general: [
      `Sam Okafor was the kind of person who fixed things — appliances, schedules, other people's arguments — and had built a quiet, competent life around being reliably useful. He worked as a building supervisor in a mid-sized city, knew every tenant by name, and prided himself on the fact that nothing in his building stayed broken for long. He was not someone things happened to. He was someone who handled things.

The envelope slipped under his office door on a Thursday morning contained a single photograph and a handwritten address. The photograph showed a building he had never seen, and the address was in a neighborhood he had no connection to. At the bottom, in small neat letters: "${prompt} — you were there." He had no idea what that meant.

The address led him to a community center that had been quietly serving the neighborhood for thirty years. The director, a woman named Adaeze, showed him records from a crisis response program that had operated there in the late nineties. Sam's name appeared in those records as a child who had passed through. He had no memory of it — he had been four years old.

What followed was six weeks of careful research, conversations with people he had never met, and a slow reconstruction of a period in his life that had been completely invisible to him. The story was not dramatic. It was ordinary in the way that most important things are: a family in difficulty, people who helped, a child who grew up not knowing that strangers had once made a significant difference.

Sam started volunteering at the center the following month. He did not tell many people about it. Some things, he decided, didn't need to be explained — they just needed to be continued.`
    ]
  };
  
  const templates = storyTemplates[detectedGenre] || storyTemplates.general;
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  return randomTemplate;
};


