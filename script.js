let day = 1;
let madness = 0;
let paranoia = 0;
const usedKeywords = new Set();

const typingSound = document.getElementById("typingSound");

//the story will go here when I'm ready to write for another 25 hours :D KMS *insert choking meme*
const keywords = {
    isolation: {
    response: "You note the silence pressing against the windows. No voices, no ships.",
    madness: 2,
    paranoia: 1
    },

    fog: {
    response: "The fog arrived at dawn, thick as wool. You can no longer see the sea.",
    madness: 1,
    paranoia: 2
    },

    mirror: {
    response: "Your reflection blinks a moment too late. You back away slowly.",
    madness: 3,
    paranoia: 2
    },

    storm: {
    response: "Winds howl like the dead. The lighthouse groans as if in pain.",
    madness: 1,
    paranoia: 1
    },

    knocking: {
    response: "You heard it again. A knock. But no one comes up the stairs.",
    madness: 2,
    paranoia: 3
    },

   //Words that lead to decent or good endings
    darkness: {
    response: "The lantern flickers. Then dies. You are swallowed by black.",
    madness: 2,
    paranoia: 2
    },

    journal: {
    response: "You find a previous keeper's log. The last entry is written in your handwriting.",
    madness: 3,
    paranoia: 3
    },

    whisper: {
    response: "There are whispers in the fog now. They say your name.",
    madness: 2,
    paranoia: 3
    },

    tide: {
    response: "The tide went out hours ago. It hasn't returned.",
    madness: 1,
    paranoia: 1
    },

    eyes: {
    response: "You see eyes gleaming in the distance. They're always watching.",
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
            "##%$** SYSTEM BREACH — REPEAT ENTRY DETECTED",
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