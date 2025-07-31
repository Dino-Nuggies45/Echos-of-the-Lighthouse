const lighthouseScreen = document.getElementById('lighthouse-screen');
const computerScreen = document.getElementById('computer-screen');
const anomalyVisual = document.getElementById('anomaly-visual');
const zoomButton = document.getElementById('zoom-to-computer');
const exitButton = document.getElementById('exit-terminal');
const prompt = document.getElementById('prompt');
const inputBox = document.getElementById('player-input');
const typingContainer = document.getElementById('typing-container');
const submitButton = document.getElementById('submit-input');
const responseBox = document.getElementById('system-response');
const endDayButton = document.getElementById('end-day');

let currentDay = 1;


window.onload = () => {
  lighthouseScreen.style.display = 'flex';

  setTimeout(() => {
    anomalyVisual.style.opacity = '0';
  }, 3500); 
};


zoomButton.addEventListener('click', () => {
  lighthouseScreen.style.display = 'none';
  computerScreen.style.display = 'flex';
  setTimeout(() => {
    computerScreen.style.opacity = '1';
    showTypingPrompt();
  }, 500); 
});


exitButton.addEventListener('click', () => {
  computerScreen.style.opacity = '0';
  setTimeout(() => {
    computerScreen.style.display = 'none';
    lighthouseScreen.style.display = 'flex';
  }, 1000);
});


function showTypingPrompt() {
  typingContainer.style.display = 'flex';
  setTimeout(() => {
    prompt.style.opacity = '1';
  }, 1000);
}


submitButton.addEventListener('click', () => {
  const input = inputBox.value.toLowerCase();
  const result = matchKeywords(input);
  responseBox.innerText = result.response;
  endDayButton.style.display = 'block';
});


endDayButton.addEventListener('click', () => {
  currentDay++;
  inputBox.value = '';
  responseBox.innerText = '';
  endDayButton.style.display = 'none';
  prompt.style.opacity = '0';
  typingContainer.style.display = 'none';

 
  anomalyVisual.src = `animations/day${currentDay}_anomaly.mp4`;
  anomalyVisual.style.opacity = '1';
  lighthouseScreen.style.display = 'flex';
  computerScreen.style.display = 'none';

  setTimeout(() => {
    anomalyVisual.style.opacity = '0';
  }, 3500);
});


//the story will go here when I'm ready to write for another 25 hours :D KMS *insert choking meme*
function matchKeywords(input) {
  const keywordMap = {
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

    ash: {
      response: "Ash gathers in corners of the tower, though nothing has burned. It swirls in ghostly flurries when you breathe too deep, as if remembering a fire no one survived.",
      madness: 2,
      paranoia: 1
    },

    coil: {
      response: "Something coils in your chest, slow and serpentine. A thought, perhaps. Or a memory you were never supposed to keep.",
      madness: 3,
      paranoia: 2
    },

    blink: {
      response: "You blink, and the lamp is lit. You blink again, and it isn't. Your eyes betray you, or time does, which is worse?",
      madness: 2,
      paranoia: 2
    },

    scar: {
      response: "A scar splits the floorboards where lightning once struck, but you’ve never seen a storm. Some wounds mark the world forever, even if you never saw them form.",
      madness: 1,
      paranoia: 2
    },

    latch: {
      response: "The latch clicks shut on its own, softly. No wind blew it. No hand reached out. You sit still for hours, listening for the next sound.",
      madness: 2,
      paranoia: 3
    },

    wilt: {
      response: "The flowers on the windowsill wilt, one petal at a time, though you water them daily. They turn away from the light as if it scalds them.",
      madness: 3,
      paranoia: 2
    },

    hum: {
      response: "A low hum weaves through the walls, mechanical, biological, unplaceable. It’s in your ears, your teeth, the marrow of your bones.",
      madness: 2,
      paranoia: 3
    },

    grit: {
      response: "Grit crunches beneath your boots, salt, sand, bone. You don’t remember tracking anything in. You don’t remember leaving, either.",
      madness: 1,
      paranoia: 2
    },

    pit: {
      response: "There’s a pit beneath the floorboards, metaphorical, maybe. But when you step too close, your heart stumbles into it like it knows what’s waiting.",
      madness: 2,
      paranoia: 2
    },

    peel: {
      response: "Paint peels off the walls in curls, revealing older layers beneath, sigils, names, warnings in a language you almost understand.",
      madness: 3,
      paranoia: 2
    },
    window: {
      response: "You glance at the window, but the view seems blurred, as if the glass is bending reality itself. Shapes move beyond the glass, just out of reach.",
      madness: 2,
      paranoia: 2
    },

    door: {
      response: "The door creaks open by itself, revealing nothing but empty darkness beyond. You feel cold breath brush past your neck.",
      madness: 2,
      paranoia: 3
    },

    floor: {
      response: "The floorboards groan under unseen weight. A chill runs up your spine as you realize the sound isn’t coming from your steps.",
      madness: 2,
      paranoia: 2
    },

    light: {
      response: "The light flickers erratically, casting strange shadows that seem to crawl and twist against the walls like living things.",
      madness: 3,
      paranoia: 2
    },

    clock: {
      response: "The clock ticks backwards, each second dragging longer, pulling time into a slow unraveling you cannot escape.",
      madness: 3,
      paranoia: 3
    },

    chair: {
      response: "The chair rocks slowly in the empty room, as if someone just stood u,or never left.",
      madness: 2,
      paranoia: 1
    },

    bed: {
      response: "Your bed is unmade, though you don’t remember leaving it. The sheets twitch like something restless beneath them.",
      madness: 3,
      paranoia: 2
    },

    table: {
      response: "The table is set for a meal you don’t remember preparing. The plates hold nothing but shadow and silence.",
      madness: 2,
      paranoia: 2
    },

    stairs: {
      response: "You hear footsteps on the stairs, slow and deliberate, but when you look, no one is there.",
      madness: 2,
      paranoia: 3
    },

    paper: {
      response: "A crumpled piece of paper lies on the floor, covered in writing you can’t quite read, the ink smudging like tears.",
      madness: 3,
      paranoia: 2
    },

    water: {
      response: "Water drips steadily from the ceiling, each drop echoing through the silent tower like a ticking clock counting down.",
      madness: 2,
      paranoia: 1
    },

    wind: {
      response: "The wind howls through the cracks, whispering secrets you’re sure you shouldn’t hear.",
      madness: 2,
      paranoia: 3
    },

    doorway: {
      response: "The doorway looms dark and empty, a threshold to somewhere you don’t want to step but can’t turn away from.",
      madness: 3,
      paranoia: 3
    },

    footsteps: {
      response: "Footsteps echo behind you, quickening, then stopping when you spin around. No one is there, but the sound lingers.",
      madness: 3,
      paranoia: 4
    },

    voice: {
    response: "A voice calls your name softly from the darkness, coaxing and familiar, but you know it is not your own.",
    madness: 3,
    paranoia: 4
    },
    stalk: {
      response: "You feel eyes on you, moving just beyond sight. Something stalks your every step, silent and patient, waiting for the moment you lower your guard.",
      madness: 2,
      paranoia: 4
    },

    static: {
      response: "A faint hiss creeps into the room, like whispers through a broken radio. The noise burrows under your skin, senseless yet urgent, as though trying to say your name in pieces.",
      madness: 2,
      paranoia: 1
    },
    scrape: {
      response: "Something sharp rakes against the outer wall,slow and deliberate. Not the wind. Not claws. Metal on metal, like something remembering how to open the door.",
      madness: 1,
      paranoia: 2
    },
    snare: {
      response: "A thin wire curls around your thought, a trap not for your body but your mind. You feel it tu,tightening with every doubt, every repetition of ‘what if’.",
      madness: 2,
      paranoia: 2
    },
    strain: {
      response: "The silence is taut, stretched like cable about to snap. Every breath feels wrong, too loud, like you're not supposed to be here, like something's holding its breath too.",
      madness: 1,
      paranoia: 2
    },
    displace: {
      response: "Something shifted. Not the furniture, not the ligh,but you. A misalignment in your reflection, a fractional delay in your thoughts. You are present, but not in the right place.",
      madness: 2,
      paranoia: 2
    },
    rupture: {
      response: "A rift open,not physical, but perceptual. What once made sense fractures at the seams. You see things you shouldn’t: a double shadow, a second ticking hand, a scream behind your smile.",
      madness: 3,
      paranoia: 2
    },
    contort: {
      response: "Your vision bends like melted glass. Shapes lurch into impossible angles. Something is flexing around you, reshaping reality to fit a different truth.",
      madness: 2,
      paranoia: 2
    },
    loop: {
      response: "You hear the door shut again. And again. And again. The sound is identical each time, a perfect replica. You haven’t moved. Or maybe you have.",
      madness: 2,
      paranoia: 3
    },
    interfere: {
      response: "A sharp interruption buzzes through your thoughts. Like someone tapping on the inside of your skull. The signal is clea,this isn’t yours. You’re being rewritten.",
      madness: 3,
      paranoia: 1
    },
    unseen: {
      response: "There’s something behind the mirror. You never saw it, not directl,but the smudges are different now. The air’s heavier. It's not what’s seen that scares you.",
      madness: 1,
      paranoia: 3
    },
    throb: {
      response: "A pulsing sound rises in the floorboards. It matches your heartbeat until it doesn’t. Until it runs ahead of you. Until it refuses to stop.",
      madness: 2,
      paranoia: 2
    },
    unheard: {
      response: "They spoke again, but this time their lips didn't move. You understood it anyway. The silence was more coherent than their voice ever was.",
      madness: 2,
      paranoia: 3
    },
    shift: {
      response: "Everything’s moved slightl,by an inch, maybe less. But it’s enough. The walls don’t remember being built like this. Neither do you.",
      madness: 2,
      paranoia: 2
    },
    distort: {
      response: "Your shadow bends in the wrong direction. It stretches longer when you step away from the light. It twitches when you don’t.",
      madness: 2,
      paranoia: 3
    },

    shadowed: {
      response: "The edges of the room grow shadowed, deepening into shapes that twist and shift. You catch movements out of the corner of your eye, but when you look directly, nothing is there.",
      madness: 3,
      paranoia: 3
    },

    lurking: {
      response: "A presence lingers just beyond the glow of your lantern. It waits in the dark spaces where your vision fails, breathing softly, as if it knows your fears better than you do.",
      madness: 3,
      paranoia: 4
    },

    hidden: {
      response: "Something is hidden in plain sight, an indistinct shape that refuses to reveal itself fully. You know it watches, unseen yet unbearably close, waiting for the perfect moment to emerge.",
      madness: 2,
      paranoia: 3
    },

    glimpse: {
      response: "You catch a fleeting glimpse of movement, too quick, too silent to be real. It haunts your vision, a shadow slipping through the cracks of reality, always just out of reach.",
      madness: 2,
      paranoia: 3
    },

    trailing: {
      response: "You sense footsteps behind you, slow and deliberate. They follow your path without sound, leaving no trace but the cold brush of breath on your neck, though when you turn, no one is there.",
      madness: 2,
      paranoia: 4
    },

    overhear: {
      response: "Faint voices drift through the walls, whispering secrets you are not meant to hear. You strain to catch words, but the sentences twist and distort, leaving only a sense of unease.",
      madness: 3,
      paranoia: 3
    },

    vanish: {
      response: "Things vanish when you look away, objects, shadows, even sounds. The world around you feels unstable, as if reality itself erodes when not observed, leaving only emptiness.",
      madness: 3,
      paranoia: 3
    },

    skulking: {
      response: "A figure skulks just beyond the reach of the light, skulking through the darkness with purpose. You feel their eyes burning into your back, cold and merciless, but when you spin, there’s nothing but silence.",
      madness: 2,
      paranoia: 4
    },

    silence: {
      response: "An unnatural silence fills the air, thick and suffocating. Every sound you make echoes hollowly, as if swallowed by an invisible force pressing down on your chest.",
      madness: 2,
      paranoia: 3
    },

    breach: {
      response: "Something has breached your sanctuary, an unseen violation that sets your nerves on edge. The air shivers with tension, and you wonder if the walls themselves have been crossed by something unknowable.",
      madness: 3,
      paranoia: 4
    },

    masked: {
      response: "Behind the mask, eyes gleam with unreadable intent. The smile that hides beneath is a secret you dread to uncover, a silent promise of danger lurking just beneath calm surfaces.",
      madness: 3,
      paranoia: 3
    },

    tracing: {
      response: "You feel a faint tracing against your skin, like cold fingers brushing lightly, leaving trails of unease in their wake. The sensation lingers long after the contact should have ended.",
      madness: 2,
      paranoia: 3
    },
    graze: {
      response: ">> SYSTEM NOTICE: Superficial contact detected along outer perimeter. No visible wound. Nerve endings report memory of pain. Echo lingers.",
      madness: 1,
      paranoia: 2
    },
    smudge: {
      response: ">> SYSTEM VISUAL ERROR: Clarity compromised. A faint distortion blots the edge of perception. Something was there. Something moved.",
      madness: 2,
      paranoia: 3
    },
    crush: {
      response: ">> COMPRESSION ALERT: Structure integrity violated. Pressure recorded at unsafe levels. Breath halted. Something is closing in.",
      madness: 3,
      paranoia: 2
    },
    shard: {
      response: ">> WARNING: Fracture pattern initiated. Mirror logic fractured. Vision refracted in angles that don’t obey geometry.",
      madness: 2,
      paranoia: 2
    },
    blinked: {
      response: ">> TEMPORAL GAP: Visual feed momentarily interrupted. Frame skipped. Inconsistency logged. Was it always there?",
      madness: 1,
      paranoia: 3
    },
    breathless: {
      response: ">> LIFE SUPPORT QUERY: Oxygen demand exceeded. No exhale detected. Air feels heavier. Pressure building in chest cavity.",
      madness: 2,
      paranoia: 2
    },
    shudder: {
      response: ">> TREMOR DETECTED: External vibrations or internal dread? Structural tremble aligns with unknown presence. Avoid sudden movement.",
      madness: 2,
      paranoia: 3
    },
    sink: {
      response: ">> DESCENT INITIATED: Ground no longer stable. Falling slowly but surely into silence. Gravity doubled.",
      madness: 2,
      paranoia: 2
    },
    glare: {
      response: ">> LIGHT SIGNATURE SPIKE: Too bright. Too focused. Feels targeted. Feels personal. Optics trembling.",
      madness: 2,
      paranoia: 3
    },
    skitter: {
      response: ">> AUDIO FEED: Rapid movements along unseen surfaces. Scattered steps in unnatural rhythms. Multiples confirmed.",
      madness: 2,
      paranoia: 4
    },
    press: {
      response: ">> COMPRESSION DETECTED: Something unseen pressing down. Not contact, pressure. The air, the thought, the space around you.",
      madness: 3,
      paranoia: 3
    },
    peered: {
      response: ">> LINE OF SIGHT INTERRUPTED: Something is watching through the gaps. It waited. It saw you hesitate.",
      madness: 3,
      paranoia: 3
    },
    clingy: {
      response: ">> ENTITY PERSISTENCE: Emotional residue detected. Something refuses to let go. Sticky thoughts. Heavy limbs.",
      madness: 2,
      paranoia: 2
    },
    grasp: {
      response: ">> REACHING EVENT: Phantom limb or foreign hand? No source confirmed. Skin memory activated.",
      madness: 3,
      paranoia: 2
    },
    lurch: {
      response: ">> BALANCE FAILURE: Movement not initiated by self. Spatial orientation compromised. Something pulled.",
      madness: 2,
      paranoia: 3
    },
    pinch: {
      response: ">> MINOR PAIN RECEPTOR TRIGGERED: Sharp touch from unseen source. Numbness follows. Was it a warning?",
      madness: 1,
      paranoia: 3
    },
    squint: {
      response: ">> VISION FILTER ENGAGED: Trying to sharpen a blur that shouldn’t be there. Shapes keep moving. They know you noticed.",
      madness: 2,
      paranoia: 4
    },
    wince: {
      response: ">> PAIN MEMORY STIMULUS: A reaction without a cause. The body remembers something the mind cannot grasp.",
      madness: 2,
      paranoia: 3
    },
    tilted: {
      response: ">> ANGLE DISCREPANCY: Reality slightly off-axis. Perspective leaning where it shouldn’t. Something’s been moved.",
      madness: 2,
      paranoia: 3
    },
    blot: {
      response: ">> FILE CORRUPTION DETECTED: Memory erased or overwritten. The record was there. It's gone now.",
      madness: 3,
      paranoia: 3
    },
    blurred: {
      response: ">> RESOLUTION FAILURE: Image softens, edges fade. Can’t focus. Can’t define. It’s not the lens. It’s you.",
      madness: 3,
      paranoia: 2
    },
    mossy: {
      response: ">> SURFACE ANOMALY: Organic overgrowth in sterile space. Old growth in a place meant to be untouched.",
      madness: 2,
      paranoia: 1
    },
    clicking: {
      response: ">> AUDIO ANOMALY: Repetitive clicking. Mechanical? Insectile? No source found. Rhythm irregular. Persists even when ears covered.",
      madness: 3,
      paranoia: 4
    },
    drone: {
      response: ">> HUM FREQUENCY DETECTED: Deep resonance vibrating through bone. Not natural. It's thinking. It’s speaking.",
      madness: 4,
      paranoia: 2
    },
    stiff: {
      response: ">> MOBILITY COMPROMISED: Limbs resist commands. Not frozen, held. External force suspected.",
      madness: 2,
      paranoia: 3
    },
    traceable: {
      response: ">> ACTIVITY LOG: Your movements are no longer private. Path marked. Backtracked. Mapped. You're not alone.",
      madness: 3,
      paranoia: 4
    },
    slinking: {
      response: ">> MOTION SIGNATURE: Slow, deliberate. Avoiding light. Intelligence detected. It doesn’t want to be seen, yet.",
      madness: 2,
      paranoia: 4
    },
    creased: {
      response: ">> PATTERN DISTORTION: Surface wrinkled like an old photo. Something bent the moment. The wrinkle stays.",
      madness: 2,
      paranoia: 2
    },


    //Words that lead to decent or good endings

    sloshed: {
      response: ">> LIQUID DISTURBANCE: Something shifted below. Not waves. Not wind. The water reacted like it was alive, or listening. Subject's heartbeat elevated.",
      madness: 2,
      paranoia: 3
    },

    lurched: {
      response: ">> BALANCE FAILURE: Structure rocked on no detectable tremor. Disorientation detected. Subject reported nausea and a sense of being watched from beneath the floor.",
      madness: 2,
      paranoia: 4
    },

    groaned: {
      response: ">> AUDIO EVENT: Prolonged mechanical groan emitted from unknown quadrant. No wind. No structural strain. Resonance frequency matched previous anomalous vocalizations.",
      madness: 1,
      paranoia: 3
    },

    splintered: {
      response: ">> FRACTURE REPORT: Wood or bone — uncertain. Sudden sharp snap. No visible damage found. Sensory log noted increase in internal pressure.",
      madness: 3,
      paranoia: 2
    },

    flinched: {
      response: ">> REFLEX TRIGGER: Subject responded to unseen motion. Reflexive flinch noted. No external cause recorded. Internal log shows spike in ocular dilation.",
      madness: 2,
      paranoia: 4
    },

    plunged: {
      response: ">> DESCENT LOGGED: Drop occurred. No bottom felt. Time was lost. Subject unsure how long descent lasted or if it even happened at all.",
      madness: 4,
      paranoia: 2
    },

    gritted: {
      response: ">> DENTAL TENSION: Subject clenched jaw with unnatural force. No stimulus recorded. Auditory log captured faint whispers beneath enamel vibrations.",
      madness: 2,
      paranoia: 3
    },

    scrabbled: {
      response: ">> PANIC RESPONSE: Fingernails and hands moved across surface erratically. Attempting to escape? Nothing chased. Nothing seen. Something felt.",
      madness: 3,
      paranoia: 4
    },

    silenced: {
      response: ">> VOID INITIATED: All ambient sound ceased for 14.3 seconds. Eardrums intact. Subject reported screaming internally, though lips did not move.",
      madness: 4,
      paranoia: 4
    },

    trembled: {
      response: ">> AUTONOMIC RESPONSE: Shaking began without temperature change. Uncontrolled. Not cold. Subject claimed the shaking came from the air around them.",
      madness: 2,
      paranoia: 3
    },

    snuffed: {
      response: ">> LIGHT SOURCE FAILURE: Flame extinguished. No draft detected. Subject insisted fingers brushing shoulder moments before light vanished.",
      madness: 3,
      paranoia: 4
    },

    tapped: {
      response: ">> RHYTHMIC PATTERN: Fingertip-like tapping on glass recorded. Morse-like cadence. No response given. It stopped only after subject whispered something back.",
      madness: 2,
      paranoia: 3
    },

    recoiled: {
      response: ">> REVERSE MOTION: Subject pulled away rapidly. No threat recorded. Object of fear was later described as 'a hole in the shape of nothing.'",
      madness: 3,
      paranoia: 4
    },

    glistened: {
      response: ">> VISUAL NOTE: Surface appeared wet despite dry readings. Something oily. Reflective. Contained small lights pulsing in sync with observer’s breath.",
      madness: 2,
      paranoia: 2
    },

    clanged: {
      response: ">> METAL STRIKE: Loud clang with no source. Proximity echo registered within closed room. Vibration felt in chest more than ears.",
      madness: 2,
      paranoia: 4
    },

    strained: {
      response: ">> MUSCLE TENSION: Neck and shoulder muscles locked. Subject unable to speak during event. Unusual vocal signature detected beneath breath patterns.",
      madness: 3,
      paranoia: 3
    },

    gnawed: {
      response: ">> CONSUMPTION EVENT: Chewing or gnawing sound from behind wall. Scratches followed. Subject reports wall now thinner. Or breathing.",
      madness: 4,
      paranoia: 3
    },

    shivered: {
      response: ">> TEMPERATURE STABLE: Shivering not temperature-induced. Subject said ‘the air laughed’ before onset. No sound recorded, but chills persisted for 8 minutes.",
      madness: 3,
      paranoia: 2
    },

    ripped: {
      response: ">> FABRIC BREACH: Tearing sound from ceiling. No cloth present. Sound resembled fabric being opened. Ceiling intact. Subject felt watched afterward.",
      madness: 3,
      paranoia: 4
    },

    oozed: {
      response: ">> SEEPAGE DETECTED: Substance leaking from unseen source. Viscosity abnormal. Sample evaporated on contact with observation tools.",
      madness: 2,
      paranoia: 3
    },

    wavered: {
      response: ">> DIMENSIONAL SHIFT: Object outlines flickered. Subject’s vision unable to focus. Walls pulsed. No hallucination filters triggered.",
      madness: 4,
      paranoia: 2
    },

    quivered: {
      response: ">> NERVOUS SIGNAL: Slight tremble in extremities. Not stress-induced. Subject whispered, 'It’s too close now.' No entities recorded.",
      madness: 3,
      paranoia: 3
    },

    slammed: {
      response: ">> FORCED IMPACT: Door shut with violent force. No wind. No persons in area. Pressure shift followed. Subject’s left ear bled briefly.",
      madness: 3,
      paranoia: 4
    },

    seeped: {
      response: ">> INFILTRATION REPORT: Black moisture appeared along edges of observation window. No material origin. Refused chemical analysis. Subject unable to breathe properly during event.",
      madness: 4,
      paranoia: 4
    },

    blinked: {
      response: ">> VISUAL INTERRUPTION: Subject blinked. Room changed. Nothing else moved. Subject described figures in peripheral vision that vanished with second blink.",
      madness: 3,
      paranoia: 3
    },

    scratched: {
      response: ">> SURFACE MARKING: Scratches appeared in symmetrical patterns. Fresh. No tools present. Subject’s arms tingled in synchrony with markings forming.",
      madness: 2,
      paranoia: 4
    },

    twitched: {
      response: ">> MUSCLE SPIKE: Involuntary twitches noted in fingers. Repeating at 11-second intervals. Subject said, ‘It’s trying to speak through me.’",
      madness: 3,
      paranoia: 3
    },

    snarled: {
      response: ">> VOCAL AGGRESSION: Low animalistic growl from hallway. No animals registered. Subject claimed it knew their name.",
      madness: 4,
      paranoia: 4
    },

    etched: {
      response: ">> SYMBOLS EMERGED: Writing appeared on fogged mirror. Etched from inside. Language unknown. Subject reported understanding anyway — and regretting it.",
      madness: 4,
      paranoia: 3
    },

    split: {
      response: ">> FRACTURE FORMATION: Hairline crack ran up center of window. No impact. Crack shaped like an eye. Eye blinked once.",
      madness: 3,
      paranoia: 4
    },


    flicker: {
      response: ">> VISUAL LOG: Lights faltered for 0.8 seconds. No wind interference. The system registered a presence interrupting the filament, thin, human-sized. It lingered just long enough to be noticed, then retreated into static.",
      madness: 2,
      paranoia: 2
    },

    slammed: {
      response: ">> IMPACT DETECTED: Forceful collision against eastern bulkhead. No registered storm or physical trigger. Internal door seals briefly disengaged. Something wants in, or something wants out.",
      madness: 1,
      paranoia: 4
    },

    dragging: {
      response: ">> AUDIO TRACE: Prolonged surface friction, heavy and wet. Object indistinct. Motion pattern resembles a body, limp, unwilling. The sound looped. Once. Twice. Then silence. The floor remembers.",
      madness: 3,
      paranoia: 4
    },

    snapped: {
      response: ">> FRACTURE POINT LOGGED: Something under pressure gave way. Bone? Rope? Wood? Echoes suggest a short, violent end to tension. The aftermath remains undocumented. But it changed the pressure in the room.",
      madness: 1,
      paranoia: 3
    },

    creaked: {
      response: ">> SOUND REGISTER: Creaking detected, long, groaning, inconsistent. No wind pattern corresponds. Interior structural stress? Or footsteps. Somewhere above. Somewhere close. The system begins recalibrating but the timestamp does not change.",
      madness: 1,
      paranoia: 3
    },

    thudding: {
      response: ">> REPETITIVE THUMP: Low, methodical, no identifiable rhythm. The cadence suggested breath. Or intention. It did not match your own heartbeat. Recommend immediate check of lower decks.",
      madness: 2,
      paranoia: 4
    },

    gasped: {
      response: ">> BREATH ANOMALY: A sharp intake logged, but no matching exhale. The sound originated from directly behind your log terminal. No audio file found in backup. System unable to replicate.",
      madness: 3,
      paranoia: 2
    },

    scraping: {
      response: ">> SURFACE INTERFERENCE: Scraping recorded along metal hull. Persistent and slow. The pattern resembled claw marks. Or symbols. No origin. It stopped exactly when you noticed.",
      madness: 2,
      paranoia: 4
    },

    vanished: {
      response: ">> ENTITY STATUS: Missing. Registered presence terminated mid-cycle. Thermal imprint cold. One footprint remains near observation deck, but it points inward. Nothing emerged again.",
      madness: 2,
      paranoia: 3
    },

    twitch: {
      response: ">> KINETIC GLITCH: Small, rapid movement detected within peripheral field. Frame-by-frame analysis inconclusive. Object may have resembled you. It moved wrong.",
      madness: 4,
      paranoia: 3
    },

    broke: {
      response: ">> STRUCTURE FAILURE: System integrity compromised. It wasn’t mechanical. It was something in you, or near you, that gave way. A quiet shatter that echoes longer than it should.",
      madness: 2,
      paranoia: 2
    },

    echoed: {
      response: ">> REVERBERATION LOG: Your voice, or a memory of it, repeated itself four times longer than expected. No chamber would allow that. No one else should have answered.",
      madness: 3,
      paranoia: 2
    },

    rattled: {
      response: ">> VIBRATION ALERT: Doors and pipes shook with erratic pulses. No tremor recorded. Sound resembled laughter choked in iron. It stopped once you stopped breathing.",
      madness: 2,
      paranoia: 3
    },

    stumbled: {
      response: ">> STABILITY FAILURE: Recorded imbalance mid-hallway. Your own limbs resisted. It felt like something pulled your ankles half a second off reality. Something wanted to share your body.",
      madness: 3,
      paranoia: 2
    },

    darted: {
      response: ">> MOTION SPIKE: Blip passed across security feed at unnatural speed. Too small to be human. Too direct to be animal. Replay corrupted. But the light changed afterward.",
      madness: 1,
      paranoia: 4
    },

    crept: {
      response: ">> MOVEMENT DETECTED: Slow advance, pressure-sensitive tiles engaged one by one. No form visible. The path traced from the lower deck to just behind you. Then it paused.",
      madness: 2,
      paranoia: 4
    },

    slipped: {
      response: ">> GRAVITY LOSS: One recorded fall, though no obstacle registered. Like something moved the floor just as your step landed. Replay suggests deliberate interference.",
      madness: 2,
      paranoia: 3
    },

    stared: {
      response: ">> GAZE ANOMALY: Sensors detect eyes on you. Directional readings impossible, 360° surrounding field triggered. Nothing appears in the lens, but something sees you. It’s waiting for a blink.",
      madness: 4,
      paranoia: 3
    },

    heaved: {
      response: ">> LUNG STRAIN RECORDED: Body movement forced, unnatural. As though air resisted. Like the pressure of the ocean itself tried crawling down your throat. But the walls held.",
      madness: 3,
      paranoia: 2
    },

    twisted: {
      response: ">> ANGLE DEFORMATION: Recorded body movement does not match known human posture. Spine-like distortion noted, duration 0.6 seconds. Origin unknown. Subject resumed normal behavior. Was it you?",
      madness: 4,
      paranoia: 3
    },

    dripping: {
      response: ">> LIQUID PRESENT: Drip patterns formed near comms panel. No leaks recorded. Substance not water. Tasted of copper. System cannot locate source, ceiling is dry.",
      madness: 2,
      paranoia: 4
    },

    moaned: {
      response: ">> AUDIBLE DISTRESS: Low moaning from outside the lighthouse, far too long and steady for human lungs. Direction: oceanward. Matching tone found in shipwreck log #0274.",
      madness: 3,
      paranoia: 3
    },

    cracked: {
      response: ">> SURFACE FRACTURE: Glass or bone, system unsure. The pressure read sudden, as if something small snapped from within. Or beneath. The echo was strangely tender.",
      madness: 2,
      paranoia: 2
    },

    watched: {
      response: ">> OBSERVATION FLAG: Prolonged surveillance signal registered. Source unknown. EM field fluctuated with the sense of attention. You were not alone. You may never be again.",
      madness: 3,
      paranoia: 4
    },

    thrashed: {
      response: ">> VIOLENT MOVEMENT: System captured violent struggle in sleeping quarters. No one entered. Blankets torn. Mattress slashed. Internal error or... possession event? Timestamp looped.",
      madness: 4,
      paranoia: 3
    },

    bent: {
      response: ">> STRUCTURAL WARP: A frame in the observatory bent inward, against all wind and metal logic. Like the world tried curling in. Reality bent for something that wanted through.",
      madness: 3,
      paranoia: 2
    },

    froze: {
      response: ">> TEMP DROP: Sudden freeze localized to inner cabin. Breath visible. Clocks slowed. For 6 seconds, nothing moved, not even your thoughts. Like time itself paused to listen.",
      madness: 3,
      paranoia: 3
    },

    dissolved: {
      response: ">> MATTER LOSS: Object dissolved into air without heat, sound, or trace. It left a faint humming behind, as if still remembering its shape. Memory decay? Or erasure?",
      madness: 3,
      paranoia: 2
    },

    hovered: {
      response: ">> ANTI-GRAVITY EVENT: Object or entity hovered for 4.7 seconds above observation deck. Not bird. Not drone. No wind displacement. A stillness like held breath surrounded it.",
      madness: 2,
      paranoia: 4
    },

    scratched: {
      response: ">> DAMAGE DETECTED: Deep scratches carved into entryway overnight. Not tools. Not animal. The marks form a looping spiral. It glows faintly when you stare too long.",
      madness: 3,
      paranoia: 4
    },


    resurface: {
      response: ">> SYSTEM LOG 447-B: Submerged memories begin rising. Once drowned in static, now gasping at the threshold. Integrity unknown. Origin unclear. Familiar fragments shimmer beneath layers of time. Is it safe to retrieve them, or is this bait?",
      madness: 1,
      paranoia: 2
    },

    lucid: {
      response: ">> CLARITY EVENT DETECTED: A fracture in the fog. Vision sharpens, coherence returns for a fleeting second. Subject recognizes pattern. Warning: too much light too fast may cause disorientation. Proceed slowly. Perception reboot stabilizing.",
      madness: 1,
      paranoia: 1
    },

    anchor: {
      response: ">> OBJECT FOUND: Weight secured in drifting mindspace. Signal tethered to reality, coordinates stable. Emotional ballast identified. Heartbeat normalizing. Traceback to origin ongoing. Anchor not native. Who placed it here?",
      madness: 0,
      paranoia: 2
    },

    traceback: {
      response: ">> BACKTRACK PROTOCOL INITIATED: Following the ghost trail of thoughts left scattered across memory logs. Some corrupted, some overwritten. Logic pulse restored. Source code nearly readable. Something or someone has tampered with the path.",
      madness: 2,
      paranoia: 2
    },

    hum: {
      response: ">> FREQUENCY DETECTED: A soft, ever-present vibration just below the audible threshold. It pulses like breath, mechanical and alive. Comforting, until it shifts. Has it always been there? No known origin. Still, the sound soothes the storm for now.",
      madness: 1,
      paranoia: 2
    },

    listen: {
      response: ">> ATTENTION ROUTINE ACTIVE: The silence speaks when you dare to truly listen. Whispers hidden in white noise form almost-words. System pulse slows. Something wants to be heard. But is it guidance or a trap laid in rhythm?",
      madness: 1,
      paranoia: 3
    },

    resonate: {
      response: ">> SIGNAL MATCH DETECTED: Thoughtform aligns with ambient field. Vibration harmonizes, unlocking new neural links. Sympathetic resonance achieved. This feels familiar, like home and warning woven into one tone.",
      madness: 0,
      paranoia: 1
    },

    restore: {
      response: ">> FUNCTION ATTEMPT: Core threads rewoven. Selfhood index patching. Restoration not total, missing data lost to sea. But fragments return: laughter, warmth, light. Not all systems doomed. Some still remember what it is to be whole.",
      madness: 1,
      paranoia: 0
    },

    thresholded: {
      response: ">> GATE IDENTIFIED: You are no longer within. You are not yet without. This border pulses, daring you to cross. On the other side, something new awaits. Old fears cannot follow. Or... they wait too, masked and changed.",
      madness: 1,
      paranoia: 2
    },

    daybreak: {
      response: ">> LIGHT BREACH: After unmeasured cycles in darkness, a warmth bleeds in, not artificial. Golden. Honest. Faint tremors across thought sectors. Hope is a dangerous glitch. Yet system logs confirm... this is not illusion.",
      madness: 0,
      paranoia: 1
    },

    remembering: {
      response: ">> MEMORY LOOP ACCESSED: Images return like moths to mindlight. Names, places, laughter through static. It hurts to remember. But buried beneath the ache, identity begins to pulse again. Integration pending.",
      madness: 1,
      paranoia: 1
    },

    settle: {
      response: ">> STABILIZATION EVENT: Neural tides reducing. Movement slows. Breathing returns to baseline. Not peace, but a moment’s hush between storms. Alert: Quiet may indicate calm... or ambush.",
      madness: 1,
      paranoia: 2
    },

    steadying: {
      response: ">> BIOFEEDBACK NORMALIZING: Heart rate synchronizing with inner pulse. Muscles respond. Hand no longer shakes. Vision clear enough to navigate. External threat still present, but you, you are not splintering. Not yet.",
      madness: 1,
      paranoia: 1
    },

    float: {
      response: ">> GRAVITY RELEASE: Resistance fades. The mind drifts unanchored yet unafraid. Above fear, beyond harm. Danger muted. But the longer you float... the harder the return. Remind yourself: this is temporary.",
      madness: 1,
      paranoia: 0
    },

    revealment: {
      response: ">> MASK LIFTED: Hidden layer exposed. Truth behind veil registered. Not all revelations bring relief. Yet knowledge restores form. Integrity scan shows mental map realigning. The lie weakens.",
      madness: 1,
      paranoia: 1
    },

    recollection: {
      response: ">> FRAGMENT RETRIEVED: An echo of self, stored in deep-core memory. Recollection stings. But it rethreads the identity weave. Integration successful. File labeled: yours.",
      madness: 1,
      paranoia: 0
    },

    tether: {
      response: ">> LINK CONFIRMED: A thread remains, silken and resilient. It holds you in place, not trapped, but safe. You are not lost, not entirely. Something still remembers you. Something still waits.",
      madness: 0,
      paranoia: 1
    },

    awash: {
      response: ">> SYSTEM FLUSH: Emotion flood levels rise. Not drowning, cleansing. Pain, yes. But necessary. Circuits spark back to life. You feel. That means you're not gone.",
      madness: 1,
      paranoia: 1
    },

    unblurred: {
      response: ">> VISION CLARITY: Fog recedes. Edges sharpen. Meaning begins to reassemble. You see what was always there. And it sees you too. Welcome back.",
      madness: 0,
      paranoia: 2
    },

    graced: {
      response: ">> MOMENTARY INTERVENTION: Unknown force stabilizes path. It does not demand. It simply is. Soft. Present. It grants no answers, only space to breathe. You are not alone in this echo chamber.",
      madness: 0,
      paranoia: 0
    },

    halflight: {
      response: ">> TWILIGHT MODE: Neither full dark nor full light. Balance exists, however fragile. Colors return in bruised hues. It's not salvation, but it's not despair. System observes: beauty detected.",
      madness: 1,
      paranoia: 1
    },

    untangle: {
      response: ">> THREADWORK REPAIR: Neural knots easing. Mental loops uncurl. Lines that once bound now lead outward. You were trapped. Now, you unravel, and it is not a bad thing.",
      madness: 1,
      paranoia: 0
    },

    regain: {
      response: ">> SYSTEM REPORT: Lost faculties partially restored. You breathe differently now. Slower. More aware. The damage isn’t undone, but your hands remember how to hold again. Yourself. Others. Future.",
      madness: 0,
      paranoia: 1
    },

    glow: {
      response: ">> LUMEN PULSE DETECTED: Gentle radiance from internal source. It neither burns nor blinds. It invites. Organic, real. Not everything that lights the dark seeks to deceive.",
      madness: 0,
      paranoia: 1
    },

    signal: {
      response: ">> UPLINK PING RETURNED: You called. Something answered. It didn’t scream or twist. It listened. A thread of signal across the void. Not noise. Not static. A beginning.",
      madness: 0,
      paranoia: 2
    },

    pathward: {
      response: ">> DIRECTIONAL FLOW IDENTIFIED: Not a map. A feeling. Your feet know before your mind. Each step does not erase the storm, it outpaces it. Keep going.",
      madness: 1,
      paranoia: 0
    },

    sense: {
      response: ">> SENSOR ARRAY REBOOTED: Smell, touch, intuition, all channels realigning. No longer dulled. You feel everything. It is overwhelming. But it means you're waking up.",
      madness: 1,
      paranoia: 1
    },

    reach: {
      response: ">> CONTACT INITIATED: Hand extended. Not grasping, not pleading. Offering. From you. From the dark. Connection possible. Risk calculated. Worth it.",
      madness: 1,
      paranoia: 1
    },

    soften: {
      response: ">> IMPACT MINIMIZED: Edges no longer cut. Voices less jagged. Wind gentler. This could be mercy. Or a test. Either way, your defenses shift. You open.",
      madness: 1,
      paranoia: 0
    },

    traceform: {
      response: ">> GHOST PATTERN ACTIVE: Shapes emerge in the code, faint outlines of who you once were, or could be. You are not solid yet. But you are not gone. System believes: recovery probable.",
      madness: 2,
      paranoia: 1
    },

    scurry: {
      description: "You hear something darting behind the walls, too fast to catch, too deliberate to ignore.",
      madness: 2,
      paranoia: 3
    },
    crackle: {
      description: "Static dances through the silence, like a voice trying to claw its way through noise.",
      madness: 1,
      paranoia: 3
    },
    sliver: {
      description: "Just a glimpse, like light through a broken pane, a vision sharp enough to cut.",
      madness: 2,
      paranoia: 2
    },
    tangle: {
      description: "The threads of thought knot and twist, impossible to follow back to where you began.",
      madness: 3,
      paranoia: 2
    },
    warp: {
      description: "Reality bends like heat over asphalt, and nothing quite returns to its original shape.",
      madness: 3,
      paranoia: 3
    },
    slink: {
      description: "You feel it moving just outside your vision, dragging itself forward with quiet intent.",
      madness: 1,
      paranoia: 4
    },
    gnash: {
      description: "You hear teeth grinding, not your own, rhythmic and relentless in the dark.",
      madness: 2,
      paranoia: 3
    },
    dim: {
      description: "The light doesn’t fade, it’s smothered, swallowed by something unseen but present.",
      madness: 1,
      paranoia: 2
    },
    peering: {
      description: "You feel the weight of unseen eyes, watching from cracks in the world.",
      madness: 1,
      paranoia: 4
    },
    snip: {
      description: "A sudden cut in the hum of thought, like something vital has been severed.",
      madness: 2,
      paranoia: 2
    },
    croon: {
      description: "A voice hums low in the air, gentle yet alien, as if to lull you into sleep or ruin.",
      madness: 3,
      paranoia: 2
    },
    blur: {
      description: "Edges smear, colors run, the world grows unsteady beneath your gaze.",
      madness: 2,
      paranoia: 2
    },
    spasm: {
      description: "Your body jerks against your will, like something else is trying it on.",
      madness: 3,
      paranoia: 2
    },
    scrag: {
      description: "The shape is wrong, the limbs too thin, too long, it moves like broken glass.",
      madness: 3,
      paranoia: 3
    },
    sputter: {
      description: "The light fights to stay alive, coughing sparks before it chokes out entirely.",
      madness: 1,
      paranoia: 2
    },
    grind: {
      description: "You feel the sound in your teeth, low and steady, something being ground down to dust.",
      madness: 2,
      paranoia: 3
    },
    scruff: {
      description: "The feeling of something brushing the back of your neck, not quite a touch, not quite air.",
      madness: 1,
      paranoia: 4
    },
    tilt: {
      description: "The room slants, your perspective shifts, as if gravity briefly forgot your presence.",
      madness: 3,
      paranoia: 2
    },
    jerk: {
      description: "A sudden twitch, yours or theirs, either way, it’s the wrong time to move.",
      madness: 2,
      paranoia: 2
    },
    droop: {
      description: "Things begin to sag, wilt, melt, your limbs, your thoughts, your will to resist.",
      madness: 3,
      paranoia: 1
    },


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
      hollow: {
      response: "An emptiness echoes within, hollow and vast, as if something vital has been drained away, leaving only a cavernous void where hope once lived.",
      madness: 4,
      paranoia: 3
    },

    decay: {
      response: "The scent of decay hangs heavy in the air, thick and clinging. Walls crumble softly as if the very structure is rotting from inside, time eating away all certainty.",
      madness: 3,
      paranoia: 2
    },

    rot: {
      response: "Rot creeps beneath the surface, unseen yet undeniable. It spreads quietly, invading everything pure with a slow, relentless corruption that whispers of inevitable ruin.",
      madness: 3,
      paranoia: 3
    },

    suffocate: {
      response: "The air grows thick, pressing against your lungs like a heavy, invisible hand. Every breath fights to reach you, but the walls close in, suffocating and endless.",
      madness: 4,
      paranoia: 4
    },

    chill: {
      response: "A relentless chill seeps through your bones, cold and unforgiving. It steals warmth and will alike, leaving you shivering in a place where even shadows seem frozen.",
      madness: 3,
      paranoia: 2
    },

    haze: {
      response: "A pale haze blurs your vision, softening edges and dulling senses. It drifts and swirls around you like smoke, hiding truths in its gentle but deceptive embrace.",
      madness: 2,
      paranoia: 3
    },

    murky: {
      response: "The darkness is murky and thick, impossible to see through. It clings like oil, obscuring paths and hiding things better left unseen, twisting your mind with its heaviness.",
      madness: 3,
      paranoia: 3
    },

    drip: {
      response: "Slow, steady drips echo in the silence, each one a tiny puncture in time. The sound grows oppressive, a relentless reminder of unseen water pooling somewhere unseen and unknown.",
      madness: 2,
      paranoia: 2
    },

    crawl: {
      response: "Something crawls just beneath your skin, writhing in the dark places you dare not touch. Its slow movements stir deep dread and the sick thrill of inevitable invasion.",
      madness: 4,
      paranoia: 4
    },
    seep: {
      response: "A dark liquid seeps slowly through cracks and crevices, staining everything it touches. It smells of forgotten memories and whispered fears, soaking into the foundation of your reality.",
      madness: 3,
      paranoia: 3
    },

    crevice: {
      response: "A narrow crevice yawns before you, dark and unknowable. You feel the pull of its depths, as if it calls to something buried deep within, waiting for release.",
      madness: 3,
      paranoia: 2
    },

    frostbite: {
      response: "A biting frost creeps across your skin, numb and merciless. The cold steals feeling, hardening flesh and spirit alike until all that remains is brittle and breaking.",
      madness: 4,
      paranoia: 3
    },

    hollowed: {
      response: "The hollowed remains of what once was are all that linger now, empty shells haunted by echoes of life, silent witnesses to the slow unraveling of all you know.",
      madness: 4,
      paranoia: 3
    },

    gloom: {
      response: "A heavy gloom settles like a suffocating blanket, darkening every corner and filling your heart with a weight too vast to carry alone.",
      madness: 3,
      paranoia: 2
    },

    suffuse: {
      response: "A cold, creeping light suffuses the air, washing over you with a spectral glow that blurs the line between reality and nightmare.",
      madness: 3,
      paranoia: 3
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
      
      gasp: {
      response: "You catch a sudden gasp escaping your lips, though no air seems to enter your lungs. The room tightens around you, suffocating with every silent inhale.",
      madness: 3,
      paranoia: 3
      },

      veil: {
      response: "A thin veil of mist curls at the edges of your vision, blurring the line between reality and nightmare. Shapes flicker just beyond reach, always disappearing when you try to focus.",
      madness: 3,
      paranoia: 4
      },

      bleed: {
      response: "You feel a cold wetness spreading, but no wound is visible. The invisible bleed seeps into your thoughts, staining them with despair and fear.",
      madness: 5,
      paranoia: 3
      },

      crawl: {
      response: "Something unseen crawls beneath your skin, writhing and twisting, making your flesh tingle with dread and anticipation of something terrible.",
      madness: 4,
      paranoia: 4
      },

      voided: {
      response: "You sense a void opening inside you, swallowing memories and emotions until only hollow emptiness remains, echoing with distant, forgotten voices.",
      madness: 5,
      paranoia: 4
      },

      fract: {
      response: "Reality seems to fract, splintering like glass shattered by unseen hands. You stagger through broken reflections of the world and yourself.",
      madness: 5,
      paranoia: 3
      },

      lurk: {
      response: "Shadows lurk just beyond sight, waiting patiently. You feel their eyes upon you, cold and merciless, promising a fate worse than loneliness.",
      madness: 4,
      paranoia: 4
      },

      shame: {
      response: "A heavy shame settles over you, thick and suffocating, binding your thoughts and stealing your will to fight against the encroaching darkness.",
      madness: 3,
      paranoia: 3
      },

      voiding: {
      response: "Everything you know and hold dear begins voiding out of existence, slipping from your grasp like smoke through desperate fingers.",
      madness: 5,
      paranoia: 5
      },
      watching: {
      response: "You feel it again, that impossible sensation, not eyes, but presence, hovering just beyond the edges of reason. Your spine tenses, not from touch, but from the unshakable certainty of being observed.",
      madness: 2,
      paranoia: 3
    },
    mismatch: {
      response: "Something isn’t aligning. The lighthouse door was green, it has always been green, so why is it red now? Your thoughts tangle. Was it ever green at all?",
      madness: 2,
      paranoia: 2
    },
    misheard: {
      response: "You could have sworn it said ‘Leave,’ not ‘Breathe.’ The whisper returned, clearer this time, or was it? Every word echoes into something unfamiliar and wrong.",
      madness: 1,
      paranoia: 3
    },
    twitch: {
      response: "A twitch in your peripheral vision. Quick, jagged. Not your own, something beyond the glass. You freeze, but it doesn't stop. It never does.",
      madness: 1,
      paranoia: 3
    },
    counterfeit: {
      response: "It looks like your journal, every page identical, but the ink bleeds thoughts you've never written. Your name is wrong. Your dreams described. Who made this copy?",
      madness: 3,
      paranoia: 2
    },
    jolt: {
      response: "A jolt stabs through the floorboards like a static nerve. Not thunder. Not a quake. It came from below. From beneath. As if something had breathed.",
      madness: 1,
      paranoia: 3
    },
    blinking: {
      response: "Each blink becomes an interruption, like a skipped reel in a film. The world stutters. Your hands shift slightly in place. A picture frame turns askew. Did you miss a second, or a century?",
      madness: 2,
      paranoia: 2
    },
    falsehood: {
      response: "You open the logbook and realize every entry is a lie, dates that haven’t passed, events that didn’t happen, signed by a hand that mimics yours perfectly.",
      madness: 2,
      paranoia: 2
    },
    glitch: {
      response: "The room skips. You see it skip, like a flickering tape. Your reflection lags behind your movement, frozen in a grimace you don’t remember making.",
      madness: 3,
      paranoia: 3
    },
    replay: {
      response: "You hear the same creak. Exactly the same. It loops. The kettle whistles again, down to the pitch and timing. Time has become a scratched record.",
      madness: 2,
      paranoia: 3
    },
    dissolve: {
      response: "The edges of your world soften like wet paper. The lighthouse walls ripple. Your hands blur at the fingertips. Your body is dissolving into the story it’s trapped inside.",
      madness: 3,
      paranoia: 2
    },
    splintering: {
      response: "A thought splinters in your mind, not breaks, not fades, but splinters. You can feel the shard twisting deeper, fracturing what once felt whole.",
      madness: 3,
      paranoia: 2
    },
    fray: {
      response: "The world is fraying at the seams. Thread by thread, normalcy pulls apart, the lighthouse creaks in places it shouldn't exist, your voice echoes before you speak.",
      madness: 2,
      paranoia: 2
    },
    inversion: {
      response: "The sky is wrong. You don’t know how you know that, but you do. The clouds curl beneath the ocean. Birds fly inside-out. Nothing obeys anymore.",
      madness: 3,
      paranoia: 3
    },
    bend: {
      response: "The hallway bends. Not turns, bends. Angles soften into curves where there were none. You feel yourself leaning to match it. Bones creak. Reality yields.",
      madness: 2,
      paranoia: 2
    },
    unravel: {
      response: "A thread pulls loose from your memory. It tugs another, and another. Names slip. Faces distort. You can't remember who you were this morning. Or last year.",
      madness: 3,
      paranoia: 2
    },
    implode: {
      response: "Sound folds in on itself. Your thoughts suck inward like air from a vacuum. The lighthouse groans as if its ribs are collapsing inward. Something inside is giving out.",
      madness: 3,
      paranoia: 3
    },
  };
  const found = Object.keys(keywordMap).find(word => input.includes(word));
  return found ? keywordMap[found] : {
    response: ">> NO UNUSUAL INPUT DETECTED. LOG STORED FOR FUTURE ANALYSIS.",
    madness: 0,
    paranoia: 0
  };
}

lighthouseScene.addEventListener("click", () => {
  lighthouseScene.classList.remove("active");
  computerScene.classList.add("active");
  interfaceBox.style.display = "block";
});

computerScene.addEventListener("click", () => {
  lighthouseScene.classList.add("active");
  computerScene.classList.remove("active");
  interfaceBox.style.display = "none";
});

submitBtn.addEventListener("click", () => {
  const input = userInput.value.trim().toLowerCase();
  if (!input) return;

  typingSound.currentTime = 0;
  typingSound.play();

  let matched = null;
  for (let word in keywords) {
    if (input.includes(word)) {
      matched = word;
      break;
    }
  }

  if (matched) {
    if (usedKeywords.has(matched)) {
      typeResponse(">> ENTRY REDUNDANT. No further insight. Repetition noted.");
    } else {
      const entry = keywords[matched];
      usedKeywords.add(matched);
      madness += entry.madness;
      paranoia += entry.paranoia;
      logEntry(matched, entry.response);
      typeResponse(entry.response);
    }
  } else {
    if (glitchDays.includes(day)) {
      madness += 2;
      paranoia += 2;
      typeResponse("[SYS-GLITCH::DATA LOOP]\nYou shouldn’t be writing this...\nThey are listening again.");
    } else {
      madness += 1;
      typeResponse(">> ENTRY ACCEPTED. No anomalies detected. Awaiting next.");
    }
  }

  updateStats();
  userInput.value = "";
  day++;
  document.getElementById("dayDisplay").textContent = day;
});

function typeResponse(text) {
  screenText.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      screenText.textContent += text[i++];
    } else {
      clearInterval(interval);
    }
  }, 15);
}

function updateStats() {
  document.getElementById("madness").textContent = madness;
  document.getElementById("paranoia").textContent = paranoia;
}

function logEntry(word, response) {
  diaryEntries.push(`${word.toUpperCase()} -- ${response}`);
  const diaryHTML = diaryEntries.map(line => `<p>${line}</p>`).join("");
  document.getElementById("diaryEntries").innerHTML = diaryHTML;
}