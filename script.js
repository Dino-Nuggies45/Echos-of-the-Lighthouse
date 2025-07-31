
const pingSoundSrc = 'Assets/audio/ping.mp3';


const dialogBox = document.getElementById('dialogBox');
const dialogText = document.getElementById('dialogText');
const notificationBar = document.getElementById('notificationBar');
const notificationText = document.getElementById('notificationText');
const computerContainer = document.getElementById('computerContainer');
const computerText = document.getElementById('computerText');
const computerHotspot = document.getElementById('computerHotspot');
const background = document.getElementById('background');


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

Good luck.`);
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

function typeText(element, text, speed = 40) {
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
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

    const timeout = setTimeout(() => {
      resolve();
    }, 1200);

    pingSound.onended = () => {
      clearTimeout(timeout);
      resolve();
    };
  });
}

function typeText(element, text, speed = 40) {
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}


function showComputerText(text) {
  computerText.classList.remove('hidden');
  typeText(computerText, text, 35);
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

window.onload = () => {
 
  computerContainer.style.pointerEvents = 'auto';
  computerContainer.classList.remove('zoomed');

  
  phaseOne().then(() => {
    console.log("Phase 1 complete.");
  });
};