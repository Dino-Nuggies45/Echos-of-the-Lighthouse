let day = 1;
let madness = 0;
let paranoia = 0;

const typingSound = document.getElementById("typingSound");

//the story will go here when I'm ready to write for another 25 hours :D KMS *insert choking meme*
const keywords = {

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