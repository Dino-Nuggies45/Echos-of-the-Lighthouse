
let currentDay = 1;
let emotionalState = { madness: 0, paranoia: 0 };
let usedKeywords = new Set();
let journalEntries = [];
let keywordMap = {}; 


const computer = document.getElementById('computer');
const terminalScreen = document.getElementById('terminal-screen');
const terminalText = document.getElementById('terminal-text');
const logInput = document.getElementById('log-input');
const submitLog = document.getElementById('submit-log');
const dialogueText = document.getElementById('dialogue-text');
const notificationBar = document.getElementById('notification-bar');
const journalIcon = document.getElementById('journal-icon');
const journalModal = document.getElementById('journal-modal');
const closeJournal = document.getElementById('close-journal');
const journalEntriesContainer = document.getElementById('journal-entries');
const prevDayBtn = document.getElementById('prev-day');
const nextDayBtn = document.getElementById('next-day');


function showNotification(message) {
  notificationBar.textContent = message;
  notificationBar.classList.remove('hidden');
  setTimeout(() => notificationBar.classList.add('hidden'), 3000);
}

function typeDialogue(text, element = dialogueText) {
  element.textContent = '';
  let index = 0;
  let interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index++);
    } else {
      clearInterval(interval);
    }
  }, 40);
}

function interpretLog(input) {
  const words = input.toLowerCase().split(/\W+/);
  const matches = words.filter(word => keywordMap[word] && !usedKeywords.has(word));

  if (matches.length === 0) {
    emotionalState.madness++;
    return glitchResponse();
  }

  let response = '';
  for (const word of matches) {
    usedKeywords.add(word);
    const meaning = keywordMap[word];
    emotionalState.paranoia += meaning.paranoiaBoost || 0;
    emotionalState.madness += meaning.madnessBoost || 0;
    response += `> ${word.toUpperCase()}: ${meaning.response}\n\n`;
  }

  journalEntries.push({ day: currentDay, entry: input, response });
  saveGame();
  return response;
}

function glitchResponse() {
  const glitchLines = [
    ':: SYSTEM ERROR ::',
    '...unrecognized input...',
    'the sea is listening...',
    '<<< repeating echo >>>'
  ];
  return glitchLines[Math.floor(Math.random() * glitchLines.length)];
}

function updateJournalView() {
  journalEntriesContainer.innerHTML = '';
  journalEntries.filter(e => e.day === currentDay).forEach(entry => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>YOU:</strong> ${entry.entry}<br><strong>SYSTEM:</strong> ${entry.response}<br><br>`;
    journalEntriesContainer.appendChild(div);
  });
}

function advanceDay() {
  currentDay++;
  showNotification('Day ' + currentDay);
  saveGame();
}

function goBackADay() {
  if (currentDay > 1) {
    currentDay--;
    showNotification('Day ' + currentDay);
  }
}


computer.addEventListener('click', () => {
  terminalScreen.classList.remove('hidden');
  typeDialogue('>> What did you observe today?');
  logInput.focus();
});

submitLog.addEventListener('click', () => {
  const input = logInput.value.trim();
  if (!input) return;
  const response = interpretLog(input);
  terminalText.textContent += `\n>> ${input}\n${response}\n`;
  logInput.value = '';
  terminalText.scrollTop = terminalText.scrollHeight;
});

journalIcon.addEventListener('click', () => {
  journalModal.classList.remove('hidden');
  updateJournalView();
});

closeJournal.addEventListener('click', () => {
  journalModal.classList.add('hidden');
});

nextDayBtn.addEventListener('click', () => {
  advanceDay();
});

prevDayBtn.addEventListener('click', () => {
  goBackADay();
});


function saveGame() {
  localStorage.setItem('echo_day', currentDay);
  localStorage.setItem('echo_used', JSON.stringify([...usedKeywords]));
  localStorage.setItem('echo_journal', JSON.stringify(journalEntries));
  localStorage.setItem('echo_emotions', JSON.stringify(emotionalState));
}

function loadGame() {
  const savedDay = localStorage.getItem('echo_day');
  const savedUsed = localStorage.getItem('echo_used');
  const savedJournal = localStorage.getItem('echo_journal');
  const savedEmotions = localStorage.getItem('echo_emotions');

  if (savedDay) currentDay = parseInt(savedDay);
  if (savedUsed) usedKeywords = new Set(JSON.parse(savedUsed));
  if (savedJournal) journalEntries = JSON.parse(savedJournal);
  if (savedEmotions) emotionalState = JSON.parse(savedEmotions);
}

window.addEventListener('DOMContentLoaded', () => {
  loadGame();
  showNotification('Day ' + currentDay);
});
