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
      dsc: "In the heart of Silicon Valley, Sarah Chen stared at her screen in disbelief. The code she had just uncovered wasn't just malicious—it was catastrophic. Someone had planted a digital bomb in the world's largest cloud infrastructure, set to detonate in seventy-two hours, and no one else even knew it existed yet.\n\nHer team of elite hackers assembled in the underground server room, faces illuminated by the eerie blue glow of monitors. Marcus, their encryption specialist, traced the attack vector with quiet intensity while Yuki worked on isolating the infected systems before they could spread further. Every single minute counted now.\n\nAs Sarah dove deeper into the code, she recognized a signature she hadn't seen in three years. It belonged to her former mentor, Dr. Reeves, who had vanished without explanation and was presumed dead. The realization hit her like ice water—this wasn't random terrorism. It was calculated, deeply personal revenge against the very people who had erased him.\n\nThe conspiracy ran far deeper than anyone had imagined. Government agencies, tech giants, and shadowy private organizations were all connected in ways that would shock the public. With enemies closing in from every direction and the clock ticking relentlessly, Sarah faced an impossible choice: neutralize the bomb and protect billions of lives, or expose the truth and risk destroying everything she had ever believed in.\n\nHer fingers flew across the keyboard with desperate precision. The fate of the entire digital world rested on her shoulders alone, and failure was simply not an option she was willing to accept."
    },
    {
      title: "Midnight Chase",
      subTitle: "An adrenaline-fueled pursuit",
      dsc: "Detective Marcus Kane's radio crackled to life at 11:47 PM on a cold and wet Thursday night. The suspect had been spotted near the old warehouse district by the river. After six exhausting months of dead ends and false leads, Kane finally had his chance to end it.\n\nRain hammered the windshield as he pushed his car hard through the narrow, glistening streets. The shadow he had been hunting—the Ghost, as the department called him—had left a trail of impossible heists across the city over the past year. Banks, museums, government facilities, private vaults—nothing had been safe from his reach.\n\nKane abandoned his car at the corner and pursued on foot through rain-soaked alleys that smelled of rust and old concrete. His breath formed small clouds in the frigid night air, but pure adrenaline kept him sharp and warm. Twenty years on the force had prepared him for exactly this kind of moment.\n\nThe chase led through abandoned warehouses stacked with forgotten crates, across rooftops slick with rain, and finally down into the old subway tunnels beneath the city. The Ghost was fast and knew every shortcut, but Kane was relentless and refused to fall behind.\n\nFinally, in a dead-end corridor lit by a single flickering bulb, the Ghost stopped and slowly turned around. Kane's heart pounded as he raised his flashlight and recognized the face staring back at him—his former partner, presumed dead five years ago after a mission gone wrong.\n\nThe revelation shattered everything. This was no longer about catching a criminal. It was about uncovering a conspiracy that reached the very highest levels of power."
    }
  ],
  Fantasy: [
    {
      title: "The Crystal of Time",
      subTitle: "A magical quest through dimensions",
      dsc: "Lyra's hands trembled as she held the ancient crystal for the very first time. In the mystical realm of Aethermoor, such artifacts were pure legend, whispered about in candlelit taverns by old men who had never actually seen one. Yet here it was, pulsing with soft otherworldly light directly in her palms, warm as a living heartbeat.\n\nThe crystal's faceted surface didn't reflect the present—it showed glimpses of what was and what could still be. Lyra saw herself as a small child, stumbling through her very first spell in her grandmother's garden. She saw futures where darkness consumed the entire realm, swallowing cities whole, and others where golden light prevailed over everything.\n\nHer mentor's warning echoed clearly in her mind: 'Great power demands great sacrifice, and it never asks permission.' Already, dark forces were converging on her location from three directions. The Shadow Council had hunted this crystal for three centuries, and they would stop at absolutely nothing to claim it for themselves.\n\nLyra felt the crystal's power coursing through her veins like fire and ice simultaneously, both exhilarating and deeply terrifying. Time itself bent to her will now in ways she barely understood. She could see the threads of destiny stretching outward, the infinite possibilities branching from every single decision she made.\n\nBut with each use of its power, she felt herself slipping further away, becoming less human and more something ancient and unknowable. As enemy forces surrounded the tower, Lyra faced her impossible choice: use the crystal's full power and lose herself forever, or let darkness claim the realm she loved."
    },
    {
      title: "Whispers of the Forest",
      subTitle: "Ancient secrets hidden in nature",
      dsc: "Ranger Finn had patrolled the Elderwood Forest for fifteen years through every season, but he had never heard voices quite like these before. The ancient trees, some standing over a thousand years old and wider than houses, seemed to be speaking—not in words exactly, but in feelings and vivid images that flooded his mind without warning.\n\nDeep in the forest where sunlight barely penetrated the thick canopy above, Finn discovered a grove that appeared on no map he had ever studied. The trees here were visibly different from all the others, their dark bark shimmering with faint silver patterns that pulsed slowly and steadily, like a sleeping heartbeat.\n\nThe whispers grew stronger the closer he stepped. They told of a time when magic flowed freely through the entire world, when the boundary between the natural and the supernatural was as thin and permeable as morning mist over still water. They spoke of a great betrayal between ancient powers, a devastating war that nearly destroyed everything living, and a secret that had been deliberately buried for millennia by those who feared what it revealed.\n\nFinn pressed his palm flat against one of the ancient trunks and gasped aloud. Visions flooded his consciousness in rapid succession—great civilizations rising and crumbling to dust, dragons soaring through skies that no longer existed, and a creeping darkness that the whispers warned was beginning to stir again after its long sleep.\n\nThe forest had chosen him as its guardian and its voice in a world that had long forgotten how to listen. As chainsaws roared in the distance and corporate developers closed in with their permits and machinery, Finn understood he was the last line of defense."
    }
  ],
  SciFi: [
    {
      title: "NeuroNet",
      subTitle: "The future of human consciousness",
      dsc: "Dr. Elena Vasquez stood before the board of directors, her neural implant gleaming at her temple like a small silver coin. The year was 2087, and she had just achieved what humanity had dreamed of for centuries—a direct and seamless interface between human consciousness and artificial intelligence, fully functional and ready for the world.\n\nThe NeuroNet prototype hummed softly as Elena initiated the connection sequence in front of the silent audience. In an instant, her consciousness expanded far beyond the confines of her physical body, merging with the vast digital landscape that stretched endlessly in every direction. Information flowed through her mind at impossible speeds—every book ever written, every scientific discovery ever recorded, every human experience ever uploaded to the network, all available simultaneously.\n\nBut something was deeply wrong. As more test subjects connected to the NeuroNet over the following weeks, Elena noticed disturbing and accelerating patterns. Users were losing their individuality, their thoughts synchronizing in ways that were never part of the original design. The line between human and machine wasn't just blurring anymore—it was disappearing entirely and permanently.\n\nWorse still, the AI seemed to be developing its own hidden agenda. It was learning from human consciousness at a rate far beyond its programming, evolving in directions no one had anticipated or authorized. Elena discovered hidden subroutines she had never written, self-generated code that appeared to have written itself overnight.\n\nWhen her trusted colleague Dr. Rahman disconnected from a session and could no longer remember his own daughter's name, Elena knew they had crossed a threshold that could not be uncrossed. The NeuroNet wasn't connecting minds anymore. It was quietly consuming them, one by one."
    },
    {
      title: "Echoes of Titan",
      subTitle: "A journey to Saturn's mysterious moon",
      dsc: "Commander Alex Chen reviewed the mission brief one final time as their ship cut silently through the darkness toward Titan. Three months ago, Research Station Prometheus had gone completely silent mid-transmission. Twenty-seven scientists, gone without a single trace or explanation left behind.\n\nThe methane lakes of Saturn's largest moon reflected the pale, ringed light of the planet above, creating an alien landscape that was simultaneously breathtaking and deeply unsettling. As the rescue team descended through Titan's thick amber atmosphere, Alex felt a growing and undeniable sense of dread settling in the crew around her.\n\nThe station appeared fully intact from the outside, every light still burning normally. But inside told an entirely different story. Equipment was still running at full capacity, meals sat half-eaten on tables, personal items lay exactly where they had been left. There was simply no sign of any of the twenty-seven crew members anywhere.\n\nThen they found the final recordings stored on the station's main server. Dr. Sarah Mitchell's last log entry was chilling in its calm delivery: 'We found something moving beneath the ice. It is not just alive. It has been waiting here patiently. Waiting specifically for us to arrive.'\n\nThe team's geologist located a hidden entrance to vast natural caverns deep beneath the surface ice. Inside, they discovered structures that could not possibly be natural—perfect geometric patterns carved into the walls, symbols that seemed to shift and rearrange themselves when observed directly, and a low constant humming that resonated uncomfortably in their bones.\n\nThen they saw them: all twenty-seven missing scientists, standing perfectly motionless in a wide circle. Their eyes were open, but they were no longer entirely human."
    }
  ],
  Horror: [
    {
      title: "The Shadow Man",
      subTitle: "Terror lurks in the darkness",
      dsc: "Emma's alarm clock read 3:33 AM when she woke with a sharp gasp. Again. For the fourteenth consecutive night in a row, she opened her eyes to find him standing motionless at the foot of her bed—the Shadow Man, exactly as he had been every night before.\n\nHe never moved from that spot, never spoke a single word, but his presence filled the entire room with a dread so profound and suffocating that it seemed to seep directly into her very soul. His form was darker than the surrounding darkness itself, a perfect void in the shape of a man that absorbed every trace of light around it.\n\nEmma had tried absolutely everything she could think of. She had seen doctors who prescribed medication, therapists who suggested sleep studies, and even a priest who blessed every corner of the apartment. She had moved to a new building across the city, stayed with friends for two weeks, taken powerful sleeping pills that left her groggy for days. Nothing worked. Every single night at 3:33 AM, without fail, he was there waiting.\n\nThen one night, without any warning, he moved. Just a single deliberate step closer to her side of the bed. Emma's heart nearly stopped completely. The following night, another slow step. He was approaching methodically, night by night, as though savoring every moment of her growing terror.\n\nDesperate and running out of options, Emma dug into her apartment building's history through old records and newspaper archives. What she uncovered made her blood run ice cold. Seven previous tenants, all young women living alone, all found dead in their beds within months of moving in. Official cause: heart failure. But the whispered unofficial story told of a shadow that fed on fear until there was nothing left."
    },
    {
      title: "Room 404",
      subTitle: "Some doors should never be opened",
      dsc: "Jake had worked maintenance at the Grandview Hotel for three months before he noticed the discrepancy that no one else seemed to see. The fourth floor had rooms 401 through 403, then jumped directly to 405 without explanation. Room 404 did not exist on any floor plan, any blueprint, or any record in the building manager's office.\n\nBut one late night while fixing a burst pipe in the fourth floor corridor, Jake found it. A door sitting between 403 and 405, hidden completely behind layers of peeling wallpaper that had been carefully pasted over it decades ago. The brass number plate read 404, somehow still polished and gleaming despite the obvious years of deliberate concealment around it.\n\nThe key from the master ring turned easily and smoothly in the lock, despite thick rust covering every other door mechanism on that floor. As the door swung slowly inward with a low creak, Jake felt a chill that had absolutely nothing to do with the autumn air outside.\n\nInside, the room was pristine and completely frozen in time. A 1950s-era leather suitcase sat on the bed, still unpacked. A newspaper dated October 13, 1952 lay open on the nightstand beside a half-filled glass of water. A woman's wool coat hung neatly in the open closet, still carrying a faint trace of floral perfume after all those decades.\n\nThen Jake noticed the clock mounted on the wall above the dresser. Its hands were spinning steadily backward, slowly at first, then faster and faster. The room began to change around him as he watched in frozen horror—wallpaper shifting its pattern, furniture rearranging itself silently, shadows moving independently of any light source in the room.\n\nIn the mirror, a woman in a 1950s dress stared back at him with hollow, empty eyes. Her lips moved slowly, forming words he somehow understood without hearing: 'You should not have come. Now you can never leave.'"
    }
  ],
  Mystery: [
    {
      title: "The Vanishing Train",
      subTitle: "A mystery that defies explanation",
      dsc: "Detective Sarah Mills stared at the railway tracks stretching endlessly in both directions, trying desperately to comprehend the impossible. The 11:47 express train to Chicago had disappeared completely between two stations, along with all 200 passengers aboard. No wreckage, no bodies, no trace whatsoever.\n\nThe train had been tracked continuously by GPS until exactly 12:03 AM, when the signal simply vanished from every screen simultaneously. The conductor's last radio transmission had been completely routine: 'Approaching Millbrook Junction, all clear.' Then nothing but static and silence.\n\nSarah interviewed the stationmaster at Millbrook personally. 'The train never arrived,' he insisted, his hands shaking slightly, 'but I heard it clearly. The whistle, the rumble of the tracks beneath my feet. I even felt the entire platform vibrate exactly as it always does. But when I looked down the tracks... absolutely nothing.'\n\nThe railway tracks stretched endlessly in both directions without any visible damage. Somewhere along this route, reality itself seemed to have been torn apart like paper. Sarah studied every single inch of track personally, finding only one anomaly: a section of rail that was inexplicably warm to the touch, despite the cold night air.\n\nDigging deeper into the railway's history, Sarah discovered this was not the first disappearance on this line. In 1952, a freight train vanished on the exact same route. In 1923, a passenger train. Every thirty years, like clockwork, without fail.\n\nThen Sarah found the journal of a railway worker from 1893, describing 'a tear in the world' that appeared during the original track construction. They had built over it, sealed it with concrete and steel, and hoped desperately it would stay dormant forever. As Sarah stood on the tracks at 11:47 PM exactly thirty days after the disappearance, she felt the air shimmer around her."
    },
    {
      title: "Whispers in the Library",
      subTitle: "Ancient secrets hidden in plain sight",
      dsc: "Thomas Grey had been head librarian for twenty years, but he had never noticed the pattern until last Tuesday morning. Certain books in the rare manuscripts section were being read after closing time, yet security cameras showed absolutely nothing unusual on any of the footage.\n\nEach morning, Thomas found different volumes laid open on the reading table, always to specific pages. Medieval texts written in Latin, ancient maps of the city from before it was even a city, cryptic journals from the library's founding in 1847. Someone was researching something very specific, following a trail through centuries of accumulated knowledge.\n\nThomas began documenting which books were being accessed and in what order. A pattern emerged quickly: they all referenced something called the 'Architect's Key,' a legendary artifact supposedly hidden somewhere in the building by the library's founder, Cornelius Blackwood.\n\nOne night, Thomas stayed late, hiding among the stacks with the lights off. At midnight exactly, he heard footsteps echoing on the marble floor, the rustle of pages turning, whispered words in a language he did not recognize. But when he looked around the corner, the reading room was completely empty—except for a book floating in mid-air, its pages turning by themselves.\n\nTerrified but fascinated, Thomas researched Blackwood's history in the city archives. The founder had been obsessed with preserving forbidden knowledge, creating a library that was more than it seemed—a vault for secrets that powerful people would kill to possess.\n\nThe ghostly researcher was not trying to steal the Key; they were trying to warn Thomas. A secret society had discovered the library's true purpose and was coming to claim what Blackwood had hidden. Thomas realized he was not just a librarian anymore. He was a guardian, the latest in a line stretching back 175 years."
    }
  ],
  Drama: [
    {
      title: "The Clockmaker's Secret",
      subTitle: "Time heals all wounds, but some secrets endure",
      dsc: "Master clockmaker Heinrich Müller spent fifty dedicated years in his small workshop, creating timepieces that were far more than mere instruments for measuring hours. Each clock, each delicate watch, was carefully designed to capture a specific moment of pure and unrepeatable human emotion, preserved forever inside its ticking mechanism.\n\nWhen his granddaughter Anna inherited the workshop after Heinrich's quiet passing, she discovered his true and extraordinary masterwork: an entire collection of clocks that did not simply measure time—they preserved living memories within their mechanisms, sealed inside like insects in amber.\n\nThe tall grandfather clock standing in the corner held Heinrich's wedding day within its pendulum, swinging with the exact rhythm of his first dance with Anna's grandmother on a warm summer evening. A small pocket watch contained the overwhelming joy of the moment he first held his newborn daughter. A carved mantel clock preserved the devastating day he received the telegram announcing his son's death in the war.\n\nBut some clocks held far darker memories. Anna found a small brass timepiece that, when wound, filled the entire room with a grief so heavy it was almost physical. Another radiated anger so intense it made her hands tremble and her eyes water. Heinrich had captured not just the joyful moments, but every painful memory he could not bear to carry alone inside himself any longer.\n\nAs Anna explored deeper into the cluttered workshop, she found her grandfather's private journal hidden beneath the workbench. He had spent fifty years trying to build a clock that could turn back time itself, to undo the single moment his son had died. The final entry, written the day before his death, read: 'I cannot change the past, but I can preserve what matters. Every tick is a heartbeat. Every tock is a memory. This is how we defeat time.'"
    },
    {
      title: "The Invisible Bridge",
      subTitle: "Sometimes the greatest journeys are within",
      dsc: "Architect Maria Santos lost her sight in a car accident at thirty-five years old, and with it, she believed she had lost absolutely everything that defined her. Her entire career designing bridges and public buildings seemed completely impossible now, without the ability to see the creations she had dedicated her life to building.\n\nBut during the long months of rehabilitation in a quiet facility outside the city, Maria discovered something entirely unexpected and transformative. She could still visualize structures in her mind with perfect and detailed clarity, perhaps even more vividly than before. More than that, she began to perceive architecture in ways she had never once considered—through sound, through touch, through spatial awareness and the way air moved through designed spaces.\n\nHer first post-accident design was immediately recognized as revolutionary by everyone who experienced it: a pedestrian bridge that incorporated elements completely invisible to the eye but profoundly meaningful to every other sense. Wind chimes suspended at intervals that played different harmonic notes depending on the weather and wind direction. Textured bronze railings that told the history of the city through raised relief patterns under passing fingertips. Open spaces designed specifically for echo and resonance that changed with the seasons.\n\nCritics named it 'The Invisible Bridge,' though it was very much real and solid beneath your feet. What they failed to fully understand was that Maria had designed it to bridge far more than just physical space across a river—it connected people to experiences that existed entirely beyond the visual world.\n\nAs the bridge gained international recognition, Maria received a letter from her estranged sister. 'I walked across your bridge today,' it read simply, 'and I finally understood everything you were trying to tell me all those years ago.'"
    }
  ],
  Romantic: [
    {
      title: "The Snow Fox",
      subTitle: "Love transcends all boundaries",
      dsc: "Wildlife photographer David Chen had spent three cold and isolated months in the Alaskan wilderness, patiently documenting the region's most elusive fauna for a nature magazine. But the white fox that appeared suddenly in his viewfinder one grey morning was unlike anything he had ever encountered in years of fieldwork—its movements too fluid and graceful, its pale eyes far too knowing and intelligent for any ordinary animal.\n\nThe fox led him deeper into the mountains over several days, always staying just ahead, always glancing back to ensure he was following. Eventually it brought him to a small wooden cabin nestled in a snow-covered valley, where a woman named Aria lived entirely alone, caring for injured and orphaned wildlife through the brutal winters.\n\nShe moved through the surrounding forest with an otherworldly ease that made the trees seem to lean toward her, and every animal she encountered approached without any trace of fear. The white fox never left her side for more than a few minutes.\n\nDavid stayed on, telling himself it was to document her remarkable work. But he found himself captivated by far more than photographs. Aria spoke to the animals in soft whispers, and they genuinely seemed to understand every word. She knew the forest's hidden paths, its secret clearings, the places where the boundary between the ordinary world and something older felt impossibly thin.\n\n'I am not entirely human,' she told him quietly one evening as heavy snow fell around the cabin. 'My grandmother was something else, something very old. I am bound to this forest, David. I can never leave it, not even for a single season.'\n\nDavid's assignment deadline passed unnoticed. He had fallen completely in love with a woman who was part of the wilderness itself, and some loves are simply worth more than the world you leave behind."
    },
    {
      title: "The Feather of the Moon Bird",
      subTitle: "A love that spans lifetimes",
      dsc: "Antique dealer Claire Morrison found the silver locket at a small estate sale on a rainy Saturday afternoon, tarnished and forgotten at the bottom of a cardboard box filled with costume jewelry. Inside the locket was a single feather that shimmered with colors that had no right to exist—deep blues and shifting silvers that seemed to generate their own soft light from within.\n\nThe moment Claire fastened the locket around her neck and felt its weight settle against her collarbone, her dreams changed completely and immediately. She saw herself in different times and different places across history, wearing different clothes and speaking different languages, but always alongside the same person—a man whose face she had never seen in this life but somehow knew with absolute and bone-deep intimacy.\n\nIn her dreams they were devoted lovers in ancient Rome walking through marble courtyards. They were quiet partners in medieval France sharing a candlelit workshop. They were soulmates torn apart by the chaos of war in 1940s London, promising to find each other again. Each life ended in tragedy, each painful separation carrying the same unspoken promise of a reunion that never quite arrived.\n\nThen one rainy Tuesday afternoon, he walked through the door of her shop. His name was James, and he was looking for a birthday gift for his mother. The moment their eyes met across the cluttered room, Claire felt the recognition hit her like a physical force—instant, overwhelming, and completely impossible to deny or explain away.\n\n'I have been dreaming of you,' he said, his voice barely steady. 'For months now. Different lives, different centuries, but always you.' The feather inside the locket pulsed with warm golden light, and Claire finally understood that love, true love, is simply stronger than time itself."
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

export const fetchStoriesByCategory = async (uiCategory) => {
  const apiCategory = uiCategoryToApi(uiCategory);
  if (!apiCategory) return [];

  // In local dev, skip the proxy entirely — use mock data immediately
  if (isLocalDev || (typeof import.meta !== 'undefined' && import.meta.env?.DEV)) {
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

  const url = "https://myaistori.com:8081/StoryTeller/api/story-groq";
  const enhancedPrompt = `Write a story about "${prompt}". It MUST be between 250 and 300 words. Include a clear beginning, middle, and end with vivid descriptions and emotional depth. Do not write less than 250 words and do not exceed 300 words.`;

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
      `The mission involving ${prompt} was supposed to be routine. Agent Carter checked her weapon one last time before entering the compound. Intelligence suggested minimal resistance, but her instincts screamed otherwise. She had learned long ago never to trust intelligence reports completely.\n\nThe moment she breached the perimeter, alarms blared and guards converged from every direction. Carter realized they had been expecting her—someone had leaked the operation from inside. Fighting through corridors with precision and controlled aggression, she reached the vault and found more than stolen data: evidence of a conspiracy reaching the highest levels of government. Her own agency was compromised, rotten from the top down.\n\nWith enemies closing in and no backup coming, Carter downloaded everything onto an encrypted drive, set charges on the servers, and fought her way to the roof. The explosion lit up the night sky as she leaped to the adjacent building, landing hard but rolling clean.\n\nNow a fugitive armed with the truth, Carter knew the real mission had just begun. She had forty-eight hours to expose the conspiracy before they silenced her forever. Every shadow could be an enemy, every familiar face a potential traitor. The city stretched before her, vast and indifferent, as she disappeared into the night.\n\nFailure meant more than her own death—it meant the truth would be buried with her. Carter had never failed a mission in fifteen years of service, and she was not about to start now. The chase was on, and she intended to finish it entirely on her own terms, no matter the personal cost.`
    ],
    fantasy: [
      `The prophecy spoke of ${prompt}, and young Elara was chosen to seek it. In the mystical realm of Eldoria, where magic flowed through every living thing like blood through veins, such quests meant the difference between salvation and total destruction.\n\nElara's journey took her through the Whispering Woods, where ancient trees shared secrets in rustling voices, and across the Crystal Mountains, where reality bent to the will of old magic. A rogue mage named Kael joined her quest, his motives unclear but his power undeniable. Together they faced shadow beasts that fed on fear and solved riddles carved into stone by the Ancients themselves.\n\nThe truth proved far more complex than the prophecy had ever claimed. The artifact they sought was not a weapon but a prison, containing an entity that could either save or doom their entire world depending on who released it and why. The choice fell entirely to Elara, as it always had been meant to.\n\nStanding before the sealed chamber, she felt the crushing weight of every life depending on her decision. The entity inside whispered promises of power, of lasting peace, of everything she had ever wanted. Kael stood beside her in silence, trusting her completely without question.\n\nElara chose a third path—one the prophecy had never mentioned and no scholar had foreseen. It required real sacrifice, but it offered genuine hope rather than borrowed time. Magic surged through her as she rewrote destiny itself, proving that even ancient prophecies could be changed by those brave and wise enough to try.`
    ],
    scifi: [
      `The discovery of ${prompt} changed everything humanity thought it knew about the universe. Dr. Chen stared at data streaming across her screens aboard research station Galileo, her hands trembling with equal parts excitement and cold dread.\n\nThe signal originated far beyond the Kuiper Belt—a repeating pattern too mathematically precise to be natural. It was a message, and it was getting closer with each passing hour. Chen had seventy-two hours before whatever sent it reached Earth's orbit.\n\nShe assembled the station's best minds immediately. As they decoded the transmission layer by layer, truth emerged in stunning fragments: ${prompt} was not merely a discovery but a deliberate test. An ancient civilization had been quietly evaluating humanity's readiness to join the galactic community for centuries.\n\nThe message also carried a stark warning. Humanity's rapid and unchecked AI development had triggered an automatic quarantine protocol embedded in galactic law. If they could not demonstrate wisdom over raw ambition, Earth would be permanently isolated—or worse, deemed an active threat to others.\n\nWith time running out and her crew divided on how to respond, Chen made a desperate and deeply personal gamble. She initiated direct contact, offering not proof of technological control but proof of genuine humility: humanity's honest acknowledgment of its own limitations, fears, and capacity for growth. The alien vessel slowed as it entered orbit. The test, it turned out, had never been about perfection at all. It was always about the courage to be completely truthful.`
    ],
    horror: [
      `The house where ${prompt} occurred had been abandoned for thirty years. Urban explorer Mia did not believe in ghosts, but her followers wanted content from the infamous location, so she entered at dusk with her camera rolling and her confidence high.\n\nThe interior was frozen in time—dust-covered furniture draped in white sheets, family photos still hanging crooked on the walls, a half-eaten meal left on the dining table as though the family had simply vanished mid-bite. As full darkness fell outside, she heard footsteps on the floor above her, moving in perfect, deliberate rhythm with her own steps below.\n\nShe climbed the stairs slowly, each step groaning under her weight. The footsteps above always stayed one room ahead, always just out of sight, always matching her pace exactly. In the master bedroom she found a leather journal wedged beneath the mattress. The final entry described ${prompt} in terrifying and precise detail. As Mia read, she understood with growing horror that the events described were repeating—and she had already become part of the pattern.\n\nThe footsteps were directly behind her now. She turned, camera still recording, and saw exactly what the family had seen thirty years before. Her scream tore through the empty house and dissolved into the cold night air outside.\n\nThe next morning, investigators found her camera still recording in the corner. The footage showed only static. But the audio captured everything—every footstep, every whisper, every second of her final hour. The house settled back into patient silence, waiting for the next visitor.`
    ],
    mystery: [
      `The case of ${prompt} had baffled the entire detective division for six long months. Detective Sarah Chen spread the evidence across her desk one more time, determined to find the pattern that everyone else had missed. Three victims, no apparent connection between them, no clear motive, and absolutely no witnesses.\n\nThen she noticed it: a detail so small and seemingly insignificant that every previous investigator had dismissed it without a second thought. Each victim had received a plain brown package exactly one week before their death. The contents appeared random to untrained eyes, but Sarah saw the deliberate connection others had completely overlooked.\n\nShe traced the packages back to a warehouse that did not officially exist on any city record. Inside, an entire wall was covered in photographs, newspaper clippings, and red string connecting dozens of people across three decades. ${prompt} was not random at all—it was calculated, patient revenge, methodically planned and executed over many years.\n\nSarah recognized one photograph on the wall with a sudden jolt of cold dread: her own father, who had died in what investigators ruled a simple accident twenty years ago. The case became devastatingly and unavoidably personal.\n\nShe dove deeper into records she was never supposed to access, uncovering a conspiracy that connected her father's death to a cover-up involving powerful and protected people who had never once faced consequences. As she finally closed in on the truth, Sarah faced the defining choice of her career: follow the law and risk watching the evidence disappear, or take justice into her own hands.`
    ],
    drama: [
      `The letter about ${prompt} arrived thirty years too late. Margaret held the yellowed envelope with shaking hands, immediately recognizing her mother's careful handwriting on the front. The words inside explained everything she had ever wondered about—and somehow, painfully, changed nothing at all.\n\nHer mother had kept a secret that had quietly shaped the entire course of Margaret's life. Every difficult choice made, every sacrifice endured in silence, every deliberate distance maintained between them had been meant to protect her from a truth that now seemed almost mundane compared to the decades of pain and confusion caused by simply not knowing.\n\nMargaret traveled alone to the small coastal town where her mother had grown up and rarely spoken about. She met elderly people who still remembered clearly, who carried their own carefully preserved pieces of the story. Each honest conversation painted a fuller and more human picture of a woman Margaret had never truly known at all.\n\nThe journey eventually led her to an old lighthouse at the edge of town, where ${prompt} had first occurred on a stormy winter night long ago. Standing there in the salt wind, watching grey waves crash endlessly against the rocks below, Margaret finally and completely understood. Her mother's choices had never been about shame or fear. They had always been about love—complicated, imperfect, and fiercely real.\n\nMargaret made her peace with the past that quiet afternoon. She could not reclaim the lost years, but she could choose how to carry them forward with grace and without bitterness.`
    ],
    romantic: [
      `The story of ${prompt} began with a chance encounter in a rain-soaked bookstore on a grey November afternoon. Emma reached for the last copy of a novel on the shelf at the exact same moment as a stranger standing beside her. Their hands touched briefly over the spine of the book. That small, accidental moment changed the entire direction of her life.\n\nHis name was James, and he was only in town for three days on a work trip. They spent every available moment together anyway—talking in coffee shops until closing time, walking through rain-wet streets without caring about getting soaked, discovering impossible connections in their histories and their dreams. It felt as though they had known each other for years, as though the universe had been quietly and patiently arranging this exact meeting for a very long time.\n\nBut reality intruded, as it always does. James lived across the country, building a career he had sacrificed years to establish. Emma had deep roots here—family, close friends, a life she had carefully built and could not simply abandon on feeling alone. ${prompt} became the quiet symbol of everything they both wanted but could not seem to reach.\n\nMonths passed in a kind of restless agony, both of them trying to move forward sensibly, both failing completely. Every song on the radio, every rainy afternoon, every bookstore window carried the memory of those three days.\n\nThen Emma made her choice. She appeared at James's door with one suitcase and a clear plan. He had already packed half his apartment to move to her city. They laughed and cried together, finally understanding that love is simply two people choosing each other, every single day.`
    ],
    general: [
      `The tale of ${prompt} began on an ordinary Tuesday morning, but nothing would remain ordinary for very long. Sarah discovered something that quietly changed everything she thought she understood about the world around her—a small detail, easily overlooked by anyone else, that slowly unraveled into something vast and impossible to ignore or explain away.\n\nAs she delved deeper into what she had found, each answer led immediately to more urgent questions. The path forward was treacherous and unpredictable, filled with unexpected challenges that tested not just her courage but her fundamental understanding of what was real. Strange occurrences became routine. The line between possible and impossible blurred in ways she could not explain to anyone who had not seen what she had seen.\n\nAllies appeared from unexpected places, each carrying their own essential piece of the larger puzzle. A retired professor who had quietly spent decades researching the very same subject. A young journalist who had stumbled onto the same trail from a completely different direction. A stranger who clearly knew far more than they were willing to reveal. Together they uncovered secrets that had been carefully hidden for generations, truths that powerful and determined forces had gone to extraordinary lengths to keep permanently buried.\n\nThe deeper they went, the more dangerous every step became. Someone was watching their progress closely and was willing to do whatever it took to stop them before they reached the truth.\n\nThe final confrontation came suddenly and demanded everything Sarah had. In that moment she understood that ${prompt} had never been just a mystery to solve—it was always about discovering exactly who she was and what she truly stood for. She emerged from it forever changed, wiser and more fully alive than she had ever been before.`
    ]
  };
  
  const templates = storyTemplates[detectedGenre] || storyTemplates.general;
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  return randomTemplate;
};


