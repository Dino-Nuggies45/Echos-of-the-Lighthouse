const pingSoundSrc = 'Assets/audio/ping.mp3';

const dialogBox = document.getElementById('dialogBox');
const dialogText = document.getElementById('dialogText');
const notificationBar = document.getElementById('notificationBar');
const notificationText = document.getElementById('notificationText');
const computerContainer = document.getElementById('computerContainer');
const computerText = document.getElementById('computerText');
const computerHotspot = document.getElementById('computerHotspot');
const background = document.getElementById('background');
let canExitComputer = false;

const pingSound = new Audio(pingSoundSrc);

function showElement(el) {
  el.classList.remove('hidden');
  setTimeout(() => el.style.opacity = '1', 10);
}
function hideElement(el) {
  el.style.opacity = '0';
  setTimeout(() => el.classList.add('hidden'), 500);
}

async function phaseOne() {
  await showDialog(
    "I was looking for a job and I had applied here. Somehow they accepted me without needing an interview, I don't even know who hired me."
  );

  hideElement(dialogBox);
  await playPing();
  await showDialog("Huh? I should probably check that...");
  showNotification("Click on the computer to access it");

  computerHotspot.classList.add('visible');

  return new Promise((resolve) => {
    computerHotspot.onclick = () => {
      hideNotification();
      computerHotspot.classList.remove('visible');

      background.style.transition = 'opacity 1s ease';
      background.style.opacity = '0';

      computerContainer.classList.remove('hidden');
      computerContainer.classList.add('zoomed');

      setTimeout(() => {
        background.style.display = 'none';
      }, 1000);

      setTimeout(() => {
        showComputerText(
`Rules:
- Observe and report anomalies each day.
- Be truthful in your logs.
- Use clues to uncover the truth.

Good luck.`).then(() => {
          canExitComputer = true;
          showTutorial("Press ENTER to exit the computer.");
        });
        resolve();
      }, 1200);
    };
  });
}

function showDialog(text) {
  return new Promise((resolve) => {
    dialogText.textContent = '';
    showElement(dialogBox);

    let i = 0;
    const speed = 30;

    function type() {
      if (i < text.length) {
        dialogText.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(resolve, 500);
      }
    }
    type();
  });
}

function typeText(element, text, speed = 40, callback) {
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function showNotification(text) {
  notificationText.textContent = text;
  showElement(notificationBar);
}
function hideNotification() {
  hideElement(notificationBar);
}

function playPing() {
  return new Promise((resolve) => {
    pingSound.currentTime = 0;
    pingSound.play().catch(() => {});
    const timeout = setTimeout(() => resolve(), 1200);
    pingSound.onended = () => {
      clearTimeout(timeout);
      resolve();
    };
  });
}

function showComputerText(text) {
  return new Promise((resolve) => {
    computerText.classList.remove('hidden');
    typeText(computerText, text, 35, resolve);
  });
}

function showTutorial(text) {
  const tutorialBar = document.getElementById('tutorialBar');
  if (text && text.trim() !== '') {
    tutorialBar.textContent = text;
    tutorialBar.style.display = 'block';
  } else {
    tutorialBar.style.display = 'none';
  }
}

function hideComputer() {
  computerContainer.classList.remove('zoomed');
  computerContainer.classList.add('hidden');
  background.style.display = 'block';
  background.style.opacity = '1';
  showTutorial('');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && canExitComputer) {
    hideComputer();
    canExitComputer = false;
  }
});

window.onload = () => {
  computerContainer.style.pointerEvents = 'auto';
  computerContainer.classList.remove('zoomed');
  phaseOne().then(() => {
    console.log("Phase 1 complete.");
  });
};

let currentDay = 1;

function startNextDay(dayNum) {
  const overlay = document.getElementById("fadeOverlay");
  const dayCounter = document.getElementById("dayCounter");

  overlay.style.display = "block";
  overlay.style.opacity = "0";

  let fadeIn = setInterval(() => {
    let val = parseFloat(overlay.style.opacity);
    if (val >= 1) {
      clearInterval(fadeIn);
      dayCounter.textContent = `Day: ${dayNum}`;
      dayCounter.style.display = "block";

      setTimeout(() => {
        dayCounter.style.display = "none";
        fadeOutOverlay(() => beginLighthouseMorning(dayNum));
      }, 2500);
    } else {
      overlay.style.opacity = (val + 0.05).toString();
    }
  }, 50);
}

function fadeOutOverlay(callback) {
  const overlay = document.getElementById("fadeOverlay");

  let fadeOut = setInterval(() => {
    let val = parseFloat(overlay.style.opacity);
    if (val <= 0) {
      clearInterval(fadeOut);
      overlay.style.display = "none";
      if (callback) callback();
    } else {
      overlay.style.opacity = (val - 0.05).toString();
    }
  }, 50);
}

function beginLighthouseMorning(dayNum) {
  currentDay = dayNum;
  showDialog(
    "You walk into the main lighthouse room. You could’ve sworn that you slept, but for some reason it was still night. You spot a small diary on the desk by the computer."
  ).then(() => {
    document.getElementById("logbookBtn").classList.remove("hidden");
    showTutorial("This is your diary. It will store all entries and their responses to help you with your journey.");

    setTimeout(() => {
      playAnomaly();
    }, 4000);
  });
}

function playAnomaly() {
  console.log("Anomaly triggered");

  setTimeout(() => {
    showDialog("What the hell was that?! I have to report that!").then(() => {
      showTutorial("After you see an anomaly, report it to the system here. Press 'enter' to submit.");
    });
  }, 3000);
}

function openDiary() {
  alert("Diary system coming soon.");
}
