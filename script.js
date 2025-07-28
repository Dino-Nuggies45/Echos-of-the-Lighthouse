let day = 1;
let madness = 0;
let paranoia = 0;
const usedKeywords = new Set();

const typingSound = document.getElementById("typingSound");

//the story will go here when I'm ready to write for another 25 hours :D KMS *insert choking meme*
const keywords = {
    isolation: {
    response: "The silence presses against the windows like a held breath. No voices drift through the air, no passing ships dot the sea. Only the sound of your own heartbeat remains, steady and alone.",
    madness: 2,
    paranoia: 1
    },

    fog: {
        response: "The fog arrived just after dawn, thick and pale as wool. It swallows the coastline, the horizon, even your outstretched hand. The sea is gone, only the damp cold remains.",
        madness: 1,
        paranoia: 2
    },

    mirror: {
        response: "You meet your reflection in the glass, but something feels wrong. It hesitates, just briefly, before mimicking your movements. You retreat from it slowly, unsure of who moved first.",
        madness: 3,
        paranoia: 2
    },

    storm: {
        response: "The wind wails through the rafters, not like weather but something grieving. The lighthouse shudders with each gust, its frame groaning like bones beneath pressure. You feel watched when the thunder fades.",
        madness: 1,
        paranoia: 1
    },

    knocking: {
        response: "The knock came again, soft, deliberate, and impossibly slow. You waited by the stairwell, holding your breath. No one ascended. Nothing moved. But you never heard it leave.",
        madness: 2,
        paranoia: 3
    },

    foghorn: {
        response: "A long, hollow call rolled across the water at dawn. No fog lay in sight, no ship passed near. The sound trembled through your chest like something ancient calling home.",
        madness: 1,
        paranoia: 2
    },

    salt: {
        response: "The tea tasted of salt, not brine, but bitterness. You checked the sugar tin out of instinct. The lid was sealed, untouched since last week, yet the crystals inside were rough and gray.",
        madness: 2,
        paranoia: 1
    },

    boots: {
        response: "Your boots stood neatly by the door, still wet from use. But you hadn’t gone outside in two days. You trace the faint outline of footprints leading toward your bed.",
        madness: 2,
        paranoia: 1
    },

    ink: {
        response: "The ink spread too quickly on the page, soaking deep into the paper. When you lifted your pen, the word ‘stay’ had formed, though you had been writing something else entirely.",
        madness: 3,
        paranoia: 2
    },

    curtain: {
        response: "The curtain swayed, gently, persistently, as if breathing. No wind passed through the room. When you finally dared to look behind it, the fabric was warm against your hand.",
        madness: 1,
        paranoia: 3
    },

    shell: {
        response: "A small, ridged shell rested on your pillow. Damp. Cold. You have not walked the shore in days, and your window has never opened more than a sliver.",
        madness: 1,
        paranoia: 2
    },

    portrait: {
        response: "In the misted glass, someone has drawn a face. It isn’t yours. It isn’t recent. The features are older than they were yesterday. It watches you without moving.",
        madness: 2,
        paranoia: 2
    },

    key: {
        response: "A brass key lay atop your journal this morning, cold and rusted. There is no lock it fits. The label reads, in careful script: 'For when it returns.'",
        madness: 2,
        paranoia: 2
    },

    tea: {
        response: "The leaves spiraled unnaturally in your cup, though your hand was still. One leaf settled in the exact shape of an eye, open, unblinking, staring back.",
        madness: 1,
        paranoia: 2
    },

    humming: {
        response: "You were humming today, tuneless and quiet. You don’t remember starting. The notes repeated again and again until the silence felt wrong without them.",
        madness: 2,
        paranoia: 3
    },

   //Words that lead to decent or good endings
    darkness: {
    response: "The lantern flickers once, twice... then surrenders. The darkness that follows is not simply the absence of light, it pulses. It shifts. It presses against your chest like weightless water, and you feel something watching, not with eyes, but with presence.",
    madness: 2,
    paranoia: 2
    },

    journal: {
    response: "You flip through the brittle pages of an older journal, the ink faded with salt and time. Toward the back, your fingers tremble, the final entry is in your own handwriting. Dated next week. Signed with your name.",
    madness: 3,
    paranoia: 3
    },

    whisper: {
    response: "The wind carries more than sea spray now. It carries a whisper, faint, familiar, your name, spoken in the rhythm of the waves. You freeze. It’s not coming from outside. It’s beneath the floorboards.",
    madness: 2,
    paranoia: 3
    },

    tide: {
    response: "You mark the high tide every day. But today, the line never returned. The water receded far beyond the reef and stayed there, as if something was holding it back, or waiting below.",
    madness: 1,
    paranoia: 1
    },

    eyes: {
    response: "From the cliffs, in the mist, in the mirror, you see them. Eyes. Never blinking. Never close enough to confirm. But always there when you turn away. And sometimes, they’re not watching from outside.",
    madness: 3,
    paranoia: 2
    },

    basement: {
    response: "You never knew the lighthouse had a basement. The trapdoor creaks open on its own, revealing cold darkness beneath. You lock it again, but it groans under unseen weight, refusing to stay shut as if something below is restless, waiting for you.",
    madness: 3,
    paranoia: 2
    },

    echo: {
    response: "You shout down the empty stairwell, your voice bouncing back warped and strange. The echo doesn’t repeat your words, it twists them into riddles and warnings. It feels less like sound and more like a warning whispered through the walls.",
    madness: 2,
    paranoia: 3
    },

    drift: {
    response: "Your coat was hanging on the rack yesterday. Now you see it floating in the shallows, wet and drifting farther away with every wave. You haven’t left the lighthouse in days, yet the sea claims what’s yours without permission.",
    madness: 2,
    paranoia: 2
    },

    moss: {
    response: "The walls are slick with damp moss, soft but unyielding. You wipe them clean in frustration, but by morning the green returns, creeping faster, covering everything with a cold, clammy embrace as if the lighthouse itself is decaying around you.",
    madness: 2,
    paranoia: 1
    },

    oil: {
    response: "The lamp oil smells wrong tonight, rancid and sour. When you pour it, bubbles rise slowly, popping with faint, eerie hums. When lit, the flame dances unnaturally, casting shadows that seem to move with intent, watching your every move.",
    madness: 2,
    paranoia: 2
    },

    books: {
    response: "You run your fingers along the spines of the books stacked on the shelves. Titles have shifted, changed to strange names you don’t recognize. One volume bears your own name, embossed and worn, as if it’s been here forever, waiting for you.",
    madness: 3,
    paranoia: 1
    },

    visitor: {
    response: "Two plates are set at the dinner table, perfectly arranged but only one person sits. You don’t recall why you prepared for company, but the silence around you grows heavier, pressing as though waiting for a guest that never arrives.",
    madness: 2,
    paranoia: 3
    },


        murmur: {
    response: "Beneath the floorboards, a faint murmur pulses like a heartbeat, too steady, too alive to be wind or rats. You press your ear closer, and the sound feels like whispered secrets just beyond comprehension, stirring unease deep in your bones.",
    madness: 3,
    paranoia: 2
    },

    anchor: {
    response: "In restless dreams, you find yourself sinking, the cold iron chain wrapped tight around your ankle. The ocean’s weight drags you down, filling your lungs with saltwater and silent screams. You awaken coughing, the taste of the sea lingering on your tongue.",
    madness: 4,
    paranoia: 1
    },

    stairs: {
    response: "You climb to the lighthouse’s peak twice in one restless night. The first time, the view is familiar, distant waves and endless sky. The second time, the horizon twists, the sea churning with shadows that weren’t there before, as if the world itself has shifted just out of reach.",
    madness: 2,
    paranoia: 2
    },

    reflection: {
    response: "You catch your reflection in the cracked mirror, but it lingers longer than you expect. The eyes stare back with a knowing hunger, watching you while you sleep, as if your own image is a prisoner of some unseen force.",
    madness: 3,
    paranoia: 2
    },

    radio: {
    response: "At precisely 3:17 a.m., the radio crackles to life, broadcasting a sequence of numbers in a cold, mechanical voice. Night after night, you jot them down, the pattern growing more ominous, like a code from a distant place trying to reach you through static.",
    madness: 2,
    paranoia: 3
    },

    mutter: {
    response: "When sleep drapes over you, faint muttering creeps from the shadows. The pages of your journal curl and twist at the edges, as if animated by unseen fingers whispering secrets you dare not understand.",
    madness: 3,
    paranoia: 3
    },

    dust: {
    response: "Dust settles everywhere except on the trapdoor handle, which remains unnaturally clean. The thick layer on the rest of the room weighs on you, a silent testament to time standing still, except for the locked door that refuses to gather a single speck.",
    madness: 2,
    paranoia: 2
    },

        lantern: {
    response: "The lantern’s flame no longer burns warm. Instead, it flickers a cold, unnatural blue, casting long shadows that crawl along the walls like living things. You have long since stopped trying to fix it, knowing some fires are not meant to be tamed.",
    madness: 2,
    paranoia: 1
    },

    gulls: {
    response: "The gulls have stopped landing on the rocks and the beach. Instead, they circle endlessly overhead, their cries sharp and piercing, echoing like warnings. Their eyes gleam with something alien, as if they see what you cannot.",
    madness: 1,
    paranoia: 2
    },

    breath: {
    response: "You see your breath puff in the cold air behind you, but the room is still and warm. You turn quickly, expecting emptiness, but find no one. The cold mist lingers a moment longer, like a ghost’s exhale on your neck.",
    madness: 3,
    paranoia: 3
    },

    ropeburn: {
    response: "A raw, red mark grips your neck, tender and stinging like ropeburn. You have no memory of how it got there, and the more you search, the more the sensation deepens, a quiet reminder of unseen struggles beneath your skin.",
    madness: 3,
    paranoia: 2
    },

    sponge: {
    response: "You scrub the floor until your hands ache, but the sponge leaves behind dark, inky streaks forming letters you cannot read aloud. They twist and pulse beneath the grime, messages from a place between reality and something else.",
    madness: 2,
    paranoia: 3
    },

    trapdoor: {
    response: "The trapdoor opened last night, though you locked it before bed. You swore it was secure. Now it stands slightly ajar, inviting. You hesitate, heart pounding, knowing that whatever lies beneath might not want you to leave.",
    madness: 3,
    paranoia: 2
    },
    
    //Words that lead to bad endings
    empty: {
    response: "You open the cupboard, the fridge, the closet. Everything is gone.",
    madness: 2,
    paranoia: 2
    },

    madness: {
    response: "You write the word ‘madness’ over and over until the pen runs dry.",
    madness: 4,
    paranoia: 2
    },

    screaming: {
    response: "The screaming won't stop. You aren't sure if it's coming from inside or out.",
    madness: 3,
    paranoia: 3
    },

    submerge: {
    response: "You dream of walking into the ocean. You wake up soaked.",
    madness: 4,
    paranoia: 1
    },

    keeper: {
    response: "You remember there was another before you. But no one remembers you.",
    madness: 3,
    paranoia: 2
    },

    void: {
    response: "You stare into the void that has opened beneath the lighthouse floor. It is endless, a yawning blackness that swallows sound and hope alike. You feel yourself drawn closer, the edges of your vision fraying like worn fabric.",
    madness: 4,
    paranoia: 3
    },

    fracture: {
    response: "Cracks spiderweb across the walls and floorboards, spreading with unnatural speed. They pulse and shimmer as if alive, threatening to split the lighthouse, and your mind, apart with every heartbeat.",
    madness: 3,
    paranoia: 3
    },

    shadows: {
    response: "The shadows gather unnaturally thick around you, seeping into corners and wrapping around your limbs. They whisper promises you dare not understand, pulling you further into their cold embrace.",
    madness: 4,
    paranoia: 4
    },

    silence: {
    response: "An oppressive silence has fallen, so complete it feels suffocating. No wind, no sea, no creaking wood, just a stillness that presses on your chest, hollowing you from the inside out.",
    madness: 3,
    paranoia: 2
    },

    fractured: {
    response: "Your thoughts are broken, scattered like shards of glass in the dark. You struggle to piece them together, but each fragment slips further away, leaving only confusion and despair in its place.",
    madness: 5,
    paranoia: 3
    },

    whirl: {
    response: "The room spins without warning, a violent whirl of colors and sounds that drown out reality. You clutch at the walls, but the spinning doesn’t stop. You are trapped inside the storm of your own unraveling mind.",
    madness: 4,
    paranoia: 2
    },

    lost: {
    response: "You wander the lighthouse endlessly, the halls stretching and twisting into impossible shapes. Every door leads to nowhere, every step circles back to where you started. You are lost, and it is a place with no escape.",
    madness: 4,
    paranoia: 3
    },

    crack: {
    response: "A sharp crack sounds, like glass breaking inside your head. The pain radiates, fracturing your thoughts and blurring the line between what is real and what is nightmare.",
    madness: 5,
    paranoia: 2
    },

    flicker: {
    response: "The lights flicker violently, plunging you into darkness then blinding glare. Between flashes, you glimpse shapes moving too fast to see clearly, and hear faint, mocking laughter echoing through the halls.",
    madness: 3,
    paranoia: 3
    },

    voidance: {
    response: "You feel yourself slipping away, as if being pulled into a void beyond comprehension. Time fractures, memories unravel, and you become less than a shadow, an absence where a person once stood.",
    madness: 5,
    paranoia: 4
    },

    chill: {
    response: "A relentless cold seeps into your bones, numbing your senses and slowing your heartbeat. The warmth you crave fades further with each passing moment, swallowed by the endless chill of the lighthouse.",
    madness: 3,
    paranoia: 2
    },

    whisper: {
    response: "Soft whispers crawl beneath your skin, words you cannot understand but feel threaten your very soul. They promise release, but only through surrender to the abyss.",
    madness: 4,
    paranoia: 4
    },

    night: {
    response: "The sun has not risen for days. The endless night wraps you in shadows so thick they feel alive, breathing, waiting for your last flicker of hope to extinguish.",
    madness: 3,
    paranoia: 3
    },

    shatter: {
    response: "Your world fractures like glass smashing to the floor. Reality splinters into jagged shards that pierce your mind, cutting away at the edges of your very being.",
    madness: 5,
    paranoia: 4
    },

    return: {
    response: "You feel the final threshold closing behind you, a point of no return. The path back fades into shadow and memory, leaving only the cold certainty that you are forever lost.",
    madness: 5,
    paranoia: 5
    },

    hollow: {
    response: "An emptiness grows inside you, hollow and vast, devouring warmth, memory, and hope alike. It is a black hole that expands with every breath, pulling you deeper into despair.",
    madness: 4,
    paranoia: 3
    },

    fading: {
    response: "The light flickers and wanes, growing dimmer with each passing moment. You grasp at its failing glow, knowing it won’t be long before darkness swallows you whole.",
    madness: 3,
    paranoia: 2
    },

    shiver: {
    response: "A shiver runs down your spine, unbidden and icy cold. It spreads through your limbs like frost, rooting you in place as shadows lengthen and your breath turns to mist.",
    madness: 4,
    paranoia: 2
    },


};

const glitchDays = [3, 6, 10];

function submitLog() {
    const input = document.getElementById("playerInput").ariaValueMax.toLowerCase();
    const responseArea = document.getElementById("resposneArea");

    if (!input.trim()) {
        responseArea.textContent = "No log detected Entry incomplete...";
        return;
    }


    typingSound.currentTime = 0;
    typingSound.play();

    for(let key in keywords) {
        if (input.includes(key)) {
            const entry = keywords[key];
            madness += entry.madness;
            paranoia += entry.paranoia;
            responseArea.textContent = `[SYSTEM REPLY]\n${entry.response}`;
            matched = true;
            break;
        }
    }

    if (!matched) {
        if(glitchDays.includes(day)) {
            responseArea.textContent = `[SYS--ERR::%%GL1TCH%%]\n....they hear you. \nstop writing\n`;
            madness += 3
            paranoia += 3
        } else {
            responseArea.textContent = `[SYSTEM REPLY]\nLog archived.No relevant data detected.`;
            madness += 1;
        }
    }

    const diaryEntries = [];

    function logDiary(keyword, response) {
        const entry = `"${keyword}" -- ${response}`;
        diaryEntries.push(entry);
        updateDiaryUI();
    }

    function updateDiaryUI() {
        const diarySection = document.getElementById("diary");
        const diaryContainer = document.getElementById("diaryEntries");
        diarySection.classList.remove("hidden");

        diaryContainer.innerHTML = diaryEntries
        .map(entry => `<p>${entry}</p>`)
        .join("");
    }

    function parseEntry(entryText) {
        let matchedKeyword = null;

        for (let word in keywords) {
            const regex = RegExp(`\\b${word}\\b`, 'i');
            if (regex.test(entryText)) {
                matchedKeyword = word;
                break;
            }
        }

        if (matchedKeyword) {
            if (usedKeywords.has(matchedKeyword)) {
                handleDuplicateKeyword();
            } else {
                handleKeyword(matchedKeyword);
            }
        } else {
            displayFallback();
        }
    }

    function handleKeyword(word) {
        const data = keywords[word];
        madness += data.madness || 0;
        paranoia += data.paranoia || 0;
        usedKeywords.add(words);

        logDiary(word, data.response);
        displayResponse(data.response);

        if (data.accelerates && madness + paranoia > 8) {
            triggerAcceleratedEnding();
        }
    }

    function handleDuplicateKeyword() {
        const remaining = Object.keys(keywords).filter( k => !usedKeywords.has(k));

        if (remaining.length > 0) {
            displayResponse("You've already said that. What else have you observed?");
        } else {
            displayGlitch();
        }
    }

    function displayGlitch() {
        const glitches = [
            "##%$** SYSTEM BREACH, REPEAT ENTRY DETECTED",
            "voice.voice.voice.voice.",
            "They warned you. We warned you.",
            "----ERROR: LIGHTHOUSE CANNOT RESPOND----"
        ];
        const glitchText = glitches[Math.floor(Math.random() * glitches.length)];
        displayResponse(glitchText)
    }

    function displayFallback() {
        displayResponse("The system is quiet...oddly quiet.")
    }

    function displayResponse(text) {
        const outputBox = document.getElementById("storyOutput");
        outputBox.innerHTML = `<p>${text}</p>`;
    }

    updateStats();
    nextDay();
}

function updateStats() {
    document.getElementById("madness").textContent = madness;
    document.getElementById("paranoia").textContent = paranoia;
}

function nextDay() {
    day++
    document.getElementById("dayDisplay").textContent = `Day ${day}`;
    document.getElementById("playerInput").value = "";
}