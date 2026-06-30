// AuraESL App Interactive Logic Engine
// Manages routing, dynamic rendering, sound synthesis, recording simulations, and quiz grading

let currentTab = 'dashboard';
let currentSubtab = 'if-intro';
let selectedCoursePhaseExerciseAnswers = {}; // tracks selected option buttons
let wordOrderAnswers = {}; // tracks word order arrays for each question
let userProgress = {
  phase1: {},
  phase2: {},
  phase3: {},
  tenses: {},
  ifClauses: {},
  grammarLib: {}
};

// Web Audio API Synthesizer for premium sound effects
let audioCtx = null;
function playTone(freq, type, duration) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Audio synthesis not supported or blocked by user gesture", e);
  }
}

function playSuccessSound() {
  playTone(523.25, 'sine', 0.15); // C5
  setTimeout(() => playTone(659.25, 'sine', 0.25), 100); // E5
}

function playFailureSound() {
  playTone(180, 'triangle', 0.3); // Low G
}

function playMicBeep(start) {
  if (start) {
    playTone(880, 'sine', 0.1); // High A
  } else {
    playTone(880, 'sine', 0.05);
    setTimeout(() => playTone(880, 'sine', 0.05), 80);
  }
}

// ----------------------------------------------------
// Text-to-Speech (TTS) using Web Speech API
// ----------------------------------------------------
function speakText(text) {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    // Attempt to pick a premium English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en-US') && v.name.includes('Google')) || 
                        voices.find(v => v.lang.startsWith('en-US')) || 
                        voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }
    
    utterance.rate = 0.9; // Slightly slower for language learners
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Speech synthesis is not supported in this browser.");
  }
}

// Ensure voices are loaded (Chrome loads them asynchronously)
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

// ----------------------------------------------------
// App Initialization
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Setup Tab Navigation
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      switchTab(item.getAttribute("data-tab"));
    });
  });

  // Setup If-clause Sub-tabs
  document.querySelectorAll(".sub-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      switchSubtab(tab.getAttribute("data-subtab"));
    });
  });

  // Load content
  renderCoursePhases();
  renderConditionalTensesIndex();
  renderIfClausesPages();
  renderGrammarLibraryIndex();
  
  // Initialize overall progress display
  updateProgress();
});

// Routing
function switchTab(tabId) {
  currentTab = tabId;
  
  // Update sidebar active states
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.getAttribute("data-tab") === tabId || 
        (tabId.startsWith('course-') && item.getAttribute("data-tab") === tabId)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Manage custom course navigation highlighting in sidebar
  document.querySelectorAll(".nav-item").forEach(item => {
    const itemTab = item.getAttribute("data-tab");
    if (itemTab === tabId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Show/Hide Screens
  document.querySelectorAll(".tab-screen").forEach(screen => {
    if (screen.id === `tab-${tabId}`) {
      screen.classList.add("active");
    } else {
      screen.classList.remove("active");
    }
  });

  // Set page headers
  let title = "Dashboard";
  if (tabId === 'course-phase1') title = "Phase 1: A1 Foundations";
  if (tabId === 'course-phase2') title = "Phase 2: A1-A2 Transition";
  if (tabId === 'course-phase3') title = "Phase 3: A2 Level Consolidation";
  if (tabId === 'conditional-tenses') title = "Tenses for Conditionals";
  if (tabId === 'if-clauses') title = "If Clause Type 0 & 1";
  if (tabId === 'grammar-library') title = "A1/A2 Grammar Reference Library";
  
  document.getElementById("page-title").innerText = title;
  
  // Scroll to top of main content
  document.querySelector(".main-content").scrollTop = 0;
}

function switchSubtab(subtabId) {
  currentSubtab = subtabId;
  
  // Update tabs selection
  document.querySelectorAll(".sub-tab").forEach(tab => {
    if (tab.getAttribute("data-subtab") === subtabId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Show subtab content
  document.querySelectorAll(".subtab-content").forEach(content => {
    if (content.id === `subtab-${subtabId}`) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}

// ----------------------------------------------------
// Dynamic Rendering: Course Phases (1, 2, 3)
// ----------------------------------------------------
function renderCoursePhases() {
  const { phases } = window.eslContent.courseContent;
  
  phases.forEach(phase => {
    const container = document.getElementById(`${phase.id}-container`);
    if (!container) return;
    
    // Render intro and metadata card
    let html = `
      <div class="lesson-header-card">
        <span class="badge" style="background: rgba(139,92,246,0.1); color: var(--accent-purple); padding: 4px 8px; border-radius: 4px; font-weight:700; font-size:11px;">
          ⏱️ ${phase.duration} • ${phase.difficulty}
        </span>
        <h2 style="margin-top: 8px;">${phase.title}</h2>
        <p>${phase.intro}</p>
      </div>
      
      <div class="lesson-grid">
        <!-- Vocabulary Section -->
        <div>
          <h3 class="card-group-title"><i data-lucide="book"></i> Essential Vocabulary (Kelime Hazinesi)</h3>
          <div class="feature-card">
            <table class="vocab-table">
              <thead>
                <tr>
                  <th>Word (Kelime)</th>
                  <th>Turkish Meaning (Anlamı)</th>
                  <th>Example (Örnek)</th>
                </tr>
              </thead>
              <tbody>
                ${phase.vocabulary.map(v => `
                  <tr>
                    <td class="vocab-word">${v.word}</td>
                    <td>${v.meaning}</td>
                    <td class="vocab-ex">${v.example}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Grammar Lessons Section -->
        <div>
          <h3 class="card-group-title"><i data-lucide="award"></i> Core Grammar Points (Dilbilgisi)</h3>
          <div class="grammar-container">
            ${phase.grammarPoints.map((g, idx) => `
              <div class="grammar-block">
                <h5>${idx + 1}. ${g.title}</h5>
                <p style="font-size:14px; color: var(--text-main);">${g.explanation}</p>
                <span class="turkish-note" style="margin: 10px 0 5px 0;">💡 <strong>Türkçe Açıklama:</strong> ${g.turkishNote}</span>
                <div class="grammar-examples">
                  <span style="font-size: 12px; font-weight:700; color: var(--text-muted);">EXAMPLES:</span>
                  ${g.examples.map(ex => `
                    <div class="example-item">
                      <div class="example-eng">${ex.english}</div>
                      <div class="example-tr">${ex.turkish}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Quizzes Section -->
        <div>
          <h3 class="card-group-title"><i data-lucide="edit-3"></i> Interactive Exercises (Alıştırmalar)</h3>
          <div class="exercises-container">
            ${phase.exercises.map((ex, idx) => renderExerciseCard(ex, phase.id, idx)).join('')}
          </div>
        </div>

        <!-- Interactive Speaking Section -->
        <div>
          <h3 class="card-group-title"><i data-lucide="mic"></i> Speaking Practice with Sample Answers (Konuşma Pratiği)</h3>
          <p style="color: var(--text-muted); margin-bottom: 12px; font-size:13.5px;">Click the microphone to simulate recording yourself. After completion, check the sample answer and hear the correct pronunciation.</p>
          <div class="speaking-exercises-container" style="display: flex; flex-direction: column; gap: 20px;">
            ${phase.speaking.map((sp, idx) => renderSpeakingCard(sp, phase.id, idx)).join('')}
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML = html;
  });
  
  // Re-create icons for dynamically generated content
  lucide.createIcons();
}

function renderExerciseCard(ex, phaseId, index) {
  let cardHtml = `
    <div class="exercise-card" id="card-${ex.id}">
      <div class="exercise-question">
        <span style="color: var(--accent-purple); font-weight:700; margin-right:8px;">Q${index + 1}.</span>${ex.question}
      </div>
  `;

  if (ex.type === "multiple-choice") {
    cardHtml += `
      <div class="options-list">
        ${ex.options.map(opt => `
          <button class="option-btn" onclick="selectCourseExerciseOption('${phaseId}', '${ex.id}', '${opt}', this)">
            ${opt}
          </button>
        `).join('')}
      </div>
      <button class="btn btn-secondary" style="align-self: flex-start;" onclick="checkCourseExerciseMC('${phaseId}', '${ex.id}')">Submit Answer</button>
    `;
  } else if (ex.type === "fill-in-the-blank") {
    cardHtml += `
      <div class="input-answer-container">
        <input type="text" class="input-answer" placeholder="Type your answer here..." id="input-${ex.id}">
        <button class="btn btn-secondary" onclick="checkCourseExerciseInput('${phaseId}', '${ex.id}')">Check</button>
      </div>
    `;
  } else if (ex.type === "word-order") {
    wordOrderAnswers[ex.id] = [];
    cardHtml += `
      <div class="word-puzzle">
        <div class="puzzle-slots" id="slots-${ex.id}" onclick="clearWordPuzzle('${ex.id}')">
          <span class="text-muted" style="font-size:13px; pointer-events:none;">Click words below to arrange them here. Click box to clear.</span>
        </div>
        <div class="puzzle-words">
          ${shuffleArray([...ex.words]).map((word, wIdx) => `
            <span class="word-pill" id="pill-${ex.id}-${wIdx}" onclick="clickWordPuzzleWord('${ex.id}', '${word}', ${wIdx})">${word}</span>
          `).join('')}
        </div>
        <button class="btn btn-secondary" style="align-self: flex-start;" onclick="checkCourseExerciseWordOrder('${phaseId}', '${ex.id}')">Verify Sentence</button>
      </div>
    `;
  }

  cardHtml += `
      <div class="exercise-feedback" id="feedback-${ex.id}"></div>
    </div>
  `;
  return cardHtml;
}

function renderSpeakingCard(sp, phaseId, index) {
  return `
    <div class="feature-card" style="background: rgba(255,255,255,0.015);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:700; color: var(--accent-blue); font-size:14px;">SPEAKING DRILL #${index + 1}</span>
        <span class="badge" style="background: rgba(59,130,246,0.1); color: var(--accent-blue); border:1px solid rgba(59,130,246,0.2); font-size:11px; padding: 2px 6px; border-radius:4px;">${sp.grammarNote}</span>
      </div>
      <p class="bold" style="font-size:15px; margin-top:8px;">${sp.prompt}</p>
      
      <!-- Speaking Sim Device -->
      <div class="speaking-recording-area" style="padding: 20px; margin-top:12px; background: rgba(0,0,0,0.15);">
        <div class="mic-btn-container" id="mic-container-${sp.id}">
          <button class="mic-btn" onclick="simulateSpeakingRecording('${phaseId}', '${sp.id}')" id="mic-${sp.id}">
            <i data-lucide="mic" style="width:28px; height:28px;"></i>
          </button>
          <div class="recording-ripple" id="ripple-${sp.id}"></div>
        </div>
        <div class="speaking-status" id="status-${sp.id}">Click microphone to record your answer</div>
        <div class="audio-waves" id="waves-${sp.id}">
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
        </div>
      </div>

      <!-- Compare Box (Hidden initially) -->
      <div class="speaking-comparison hidden" id="compare-${sp.id}">
        <div class="comparison-header">
          <span class="comparison-title">✨ Recommended Model Answer:</span>
          <button class="btn-tts" onclick="speakText('${sp.sampleAnswer.replace(/'/g, "\\'")}')">
            <i data-lucide="volume-2" style="width:14px; height:14px;"></i> Listen Pronunciation
          </button>
        </div>
        <div class="sample-answer-text">${sp.sampleAnswer}</div>
        <div class="sample-translation"><strong>Türkçe Çeviri:</strong> ${sp.translation}</div>
        <div class="turkish-note" style="margin: 8px 0 0 0; font-size:12.5px;">💡 <strong>Gramer İpucu:</strong> ${sp.grammarNote}</div>
      </div>
    </div>
  `;
}

// Helper: Shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ----------------------------------------------------
// Quiz Logic: Course Phase Exercises
// ----------------------------------------------------
function selectCourseExerciseOption(phaseId, exerciseId, optionText, element) {
  selectedCoursePhaseExerciseAnswers[exerciseId] = optionText;
  
  // Highlight only this option
  const parent = element.parentElement;
  parent.querySelectorAll(".option-btn").forEach(btn => {
    btn.classList.remove("selected");
  });
  element.classList.add("selected");
}

function checkCourseExerciseMC(phaseId, exerciseId) {
  const { phases } = window.eslContent.courseContent;
  const phase = phases.find(p => p.id === phaseId);
  const exercise = phase.exercises.find(e => e.id === exerciseId);
  const selectedAnswer = selectedCoursePhaseExerciseAnswers[exerciseId];
  
  const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
  const cardEl = document.getElementById(`card-${exerciseId}`);
  
  if (!selectedAnswer) {
    alert("Please select an answer first!");
    return;
  }

  // Remove previous classes
  cardEl.querySelectorAll(".option-btn").forEach(btn => {
    btn.classList.remove("correct", "incorrect");
  });

  if (selectedAnswer === exercise.answer) {
    playSuccessSound();
    feedbackEl.innerHTML = `<strong>Correct! (Doğru!)</strong> ${exercise.explanation}`;
    feedbackEl.className = "exercise-feedback correct";
    
    // Highlight correct
    cardEl.querySelectorAll(".option-btn").forEach(btn => {
      if (btn.innerText.trim() === exercise.answer) {
        btn.classList.add("correct");
      }
    });

    // Mark as completed
    userProgress[phaseId][exerciseId] = true;
    updateProgress();
  } else {
    playFailureSound();
    feedbackEl.innerHTML = `<strong>Incorrect! (Yanlış!)</strong> Try again. Hint: ${exercise.explanation}`;
    feedbackEl.className = "exercise-feedback incorrect";

    // Highlight incorrect
    cardEl.querySelectorAll(".option-btn").forEach(btn => {
      if (btn.innerText.trim() === selectedAnswer) {
        btn.classList.add("incorrect");
      }
    });
  }
}

function checkCourseExerciseInput(phaseId, exerciseId) {
  const { phases } = window.eslContent.courseContent;
  const phase = phases.find(p => p.id === phaseId);
  const exercise = phase.exercises.find(e => e.id === exerciseId);
  const inputVal = document.getElementById(`input-${exerciseId}`).value.trim();
  
  const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
  
  if (!inputVal) {
    alert("Please type your answer!");
    return;
  }

  // Case insensitive match
  if (inputVal.toLowerCase() === exercise.answer.toLowerCase()) {
    playSuccessSound();
    feedbackEl.innerHTML = `<strong>Correct! (Doğru!)</strong> ${exercise.explanation}`;
    feedbackEl.className = "exercise-feedback correct";
    
    userProgress[phaseId][exerciseId] = true;
    updateProgress();
  } else {
    playFailureSound();
    feedbackEl.innerHTML = `<strong>Incorrect! (Yanlış!)</strong> You wrote: "${inputVal}". Keep trying!`;
    feedbackEl.className = "exercise-feedback incorrect";
  }
}

// Word Order Puzzle Logic
function clickWordPuzzleWord(exerciseId, word, wordIdx) {
  const slotsEl = document.getElementById(`slots-${exerciseId}`);
  const pillEl = document.getElementById(`pill-${exerciseId}-${wordIdx}`);
  
  if (pillEl.classList.contains("used")) return;
  
  // Add to answer array
  wordOrderAnswers[exerciseId].push({ word, index: wordIdx });
  pillEl.classList.add("used");
  
  // Render slots
  renderWordPuzzleSlots(exerciseId);
}

function clearWordPuzzle(exerciseId) {
  wordOrderAnswers[exerciseId] = [];
  
  // Reset pills
  const puzzleEl = document.getElementById(`card-${exerciseId}`);
  puzzleEl.querySelectorAll(".word-pill").forEach(pill => {
    pill.classList.remove("used");
  });
  
  renderWordPuzzleSlots(exerciseId);
}

function renderWordPuzzleSlots(exerciseId) {
  const slotsEl = document.getElementById(`slots-${exerciseId}`);
  const list = wordOrderAnswers[exerciseId];
  
  if (list.length === 0) {
    slotsEl.innerHTML = `<span class="text-muted" style="font-size:13px; pointer-events:none;">Click words below to arrange them here. Click box to clear.</span>`;
  } else {
    slotsEl.innerHTML = list.map(item => `
      <span class="word-pill" style="background:var(--accent-purple); border-color:transparent; color:white;">${item.word}</span>
    `).join('');
  }
}

function checkCourseExerciseWordOrder(phaseId, exerciseId) {
  const { phases } = window.eslContent.courseContent;
  const phase = phases.find(p => p.id === phaseId);
  const exercise = phase.exercises.find(e => e.id === exerciseId);
  const userList = wordOrderAnswers[exerciseId];
  
  const userSentence = userList.map(i => i.word).join(" ");
  const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
  
  if (userList.length === 0) {
    alert("Please arrange the words first!");
    return;
  }

  // Normalize string comparisons (replace double spaces, commas etc)
  const normUser = userSentence.replace(/\s+/g, ' ').trim().toLowerCase();
  const normCorrect = exercise.answer.replace(/\s+/g, ' ').trim().toLowerCase();

  if (normUser === normCorrect) {
    playSuccessSound();
    feedbackEl.innerHTML = `<strong>Correct Sentence! (Doğru Cümle!)</strong> ${exercise.explanation}`;
    feedbackEl.className = "exercise-feedback correct";
    
    userProgress[phaseId][exerciseId] = true;
    updateProgress();
  } else {
    playFailureSound();
    feedbackEl.innerHTML = `<strong>Try again!</strong> Your structure: "${userSentence}". Check the word order rule.`;
    feedbackEl.className = "exercise-feedback incorrect";
  }
}

// ----------------------------------------------------
// Recording Simulation Engine
// ----------------------------------------------------
function simulateSpeakingRecording(tabGroup, speakingId) {
  const micEl = document.getElementById(`mic-${speakingId}`);
  const statusEl = document.getElementById(`status-${speakingId}`);
  const wavesEl = document.getElementById(`waves-${speakingId}`);
  const rippleEl = document.getElementById(`ripple-${speakingId}`);
  const compareEl = document.getElementById(`compare-${speakingId}`);

  if (micEl.classList.contains("recording")) {
    // Manually stop recording
    stopMockRecording(tabGroup, speakingId, micEl, statusEl, wavesEl, rippleEl, compareEl);
  } else {
    // Start recording
    playMicBeep(true);
    micEl.classList.add("recording");
    rippleEl.style.display = 'block';
    wavesEl.classList.add("active");
    
    let secondsLeft = 4;
    statusEl.innerHTML = `🔴 Recording... Speak now! (${secondsLeft}s)`;
    
    const interval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft <= 0) {
        clearInterval(interval);
        if (micEl.classList.contains("recording")) {
          stopMockRecording(tabGroup, speakingId, micEl, statusEl, wavesEl, rippleEl, compareEl);
        }
      } else {
        statusEl.innerHTML = `🔴 Recording... Speak now! (${secondsLeft}s)`;
      }
    }, 1000);
    
    // Save interval ID on the mic element to clear if user clicks early
    micEl.dataset.intervalId = interval;
  }
}

function stopMockRecording(tabGroup, speakingId, micEl, statusEl, wavesEl, rippleEl, compareEl) {
  if (micEl.dataset.intervalId) {
    clearInterval(parseInt(micEl.dataset.intervalId));
  }
  
  playMicBeep(false);
  micEl.classList.remove("recording");
  rippleEl.style.display = 'none';
  wavesEl.classList.remove("active");
  
  statusEl.innerHTML = `💚 Recording saved! Check the recommended answer below.`;
  
  // Reveal comparison model and TTS trigger
  compareEl.classList.remove("hidden");
  compareEl.style.animation = "fadeIn 0.4s ease-out forwards";
  
  // Record progress
  userProgress[tabGroup][speakingId] = true;
  updateProgress();
}

// ----------------------------------------------------
// Dynamic Rendering: Tenses for Conditionals Masterclass
// ----------------------------------------------------
function renderConditionalTensesIndex() {
  const { questions, intro } = window.eslContent.conditionalTensesContent;
  
  // Set intro text
  document.getElementById("ct-intro-text").innerHTML = intro;
  
  // Pop list
  const listEl = document.getElementById("ct-question-list");
  listEl.innerHTML = questions.map((q, idx) => `
    <button class="list-item" id="ct-item-${q.id}" onclick="selectConditionalTenseQuestion('${q.id}')">
      <span class="item-title">${idx + 1}. ${q.tense}</span>
      <span class="item-sub">${q.focus}</span>
    </button>
  `).join('');
}

function selectConditionalTenseQuestion(qId) {
  const { questions } = window.eslContent.conditionalTensesContent;
  const q = questions.find(item => item.id === qId);
  if (!q) return;

  // Active state in sidebar
  document.querySelectorAll("#ct-question-list .list-item").forEach(item => {
    item.classList.remove("active");
  });
  document.getElementById(`ct-item-${qId}`).classList.add("active");

  // Render detail panel
  const panelEl = document.getElementById("ct-speaking-panel");
  panelEl.innerHTML = `
    <div class="speaking-console">
      <div class="speaking-heading">
        <span class="badge">${q.tense}</span>
        <h3 style="margin-top: 8px;">Conditional Tense Practice</h3>
        <p style="color: var(--text-muted); font-size:13px; margin-top:2px;">Focus: ${q.focus}</p>
      </div>

      <div class="speaking-prompt-box">
        <h4>QUESTION PROMPT:</h4>
        <div class="speaking-prompt-text">${q.question}</div>
      </div>

      <div class="speaking-recording-area">
        <div class="mic-btn-container">
          <button class="mic-btn" onclick="simulateSpeakingRecording('tenses', '${q.id}')" id="mic-${q.id}">
            <i data-lucide="mic" style="width:28px; height:28px;"></i>
          </button>
          <div class="recording-ripple" id="ripple-${q.id}"></div>
        </div>
        <div class="speaking-status" id="status-${q.id}">Click microphone to record your voice answer</div>
        <div class="audio-waves" id="waves-${q.id}">
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
        </div>
      </div>

      <!-- Comparison card (starts hidden) -->
      <div class="speaking-comparison hidden" id="compare-${q.id}">
        <div class="comparison-header">
          <span class="comparison-title">✨ Ideal Speaking Model Answer:</span>
          <button class="btn-tts" onclick="speakText('${q.sampleAnswer.replace(/'/g, "\\'")}')">
            <i data-lucide="volume-2" style="width:14px; height:14px;"></i> Listen Pronunciation
          </button>
        </div>
        <div class="sample-answer-text">${q.sampleAnswer}</div>
        <div class="sample-translation"><strong>Türkçe Çeviri:</strong> ${q.translation}</div>
        
        <span class="turkish-note" style="margin: 10px 0 0 0; font-size:13px;">
          💡 <strong>Gramer Analizi (Türkçe Not):</strong> ${q.turkishNote}
          <br><br>
          <em>Grammar Rule:</em> ${q.explanation}
        </span>
      </div>
    </div>
  `;
  
  // Re-render Lucide icons
  lucide.createIcons();
}

// ----------------------------------------------------
// Dynamic Rendering: If Clauses Type 0 & Type 1
// ----------------------------------------------------
function renderIfClausesPages() {
  const { intro, type0, type1, comparison, exercises } = window.eslContent.ifClausesContent;
  
  // 1. Render Intro
  document.getElementById("subtab-if-intro").innerHTML = `
    <div class="feature-card" style="margin-bottom:24px;">
      <h2>Understanding Conditionals (Koşul Cümleleri Giriş)</h2>
      <p style="margin-top:10px; font-size:15px;">${intro}</p>
    </div>
    
    <div class="grid-layout">
      <div class="feature-card pointer" onclick="switchSubtab('if-type0')">
        <div class="card-icon">⚙️</div>
        <h3>If Clause Type 0</h3>
        <p>Scientific facts, laws of nature, and constant truths. Always true.</p>
        <strong style="color:var(--accent-purple); font-size:13px;">If + Present Simple, Present Simple</strong>
      </div>
      <div class="feature-card pointer" onclick="switchSubtab('if-type1')">
        <div class="card-icon">🚀</div>
        <h3>If Clause Type 1</h3>
        <p>Real-life future predictions, consequences, promises, or threats.</p>
        <strong style="color:var(--accent-blue); font-size:13px;">If + Present Simple, Will + Verb</strong>
      </div>
    </div>
  `;

  // 2. Render Type 0
  document.getElementById("subtab-if-type0").innerHTML = `
    <div class="lesson-header-card" style="margin-bottom:24px;">
      <h2>${type0.title}</h2>
      <div style="margin-top:12px;">${type0.explanation}</div>
    </div>
    
    <h3 class="section-title">Type 0 Examples (Örnek Cümleler)</h3>
    <div class="lesson-grid">
      ${type0.examples.map(ex => `
        <div class="grammar-block">
          <div class="example-eng" style="font-size:16px; color: var(--accent-purple);">${ex.english}</div>
          <div class="example-tr" style="font-size:14px; margin-top:4px;">${ex.turkish}</div>
          <div style="color:var(--text-muted); font-size:12px; margin-top:6px; font-style:italic;">Note: ${ex.note}</div>
        </div>
      `).join('')}
    </div>
  `;

  // 3. Render Type 1
  document.getElementById("subtab-if-type1").innerHTML = `
    <div class="lesson-header-card" style="margin-bottom:24px;">
      <h2>${type1.title}</h2>
      <div style="margin-top:12px;">${type1.explanation}</div>
    </div>
    
    <h3 class="section-title">Type 1 Examples (Örnek Cümleler)</h3>
    <div class="lesson-grid">
      ${type1.examples.map(ex => `
        <div class="grammar-block" style="border-left-color: var(--accent-blue);">
          <div class="example-eng" style="font-size:16px; color: var(--accent-blue);">${ex.english}</div>
          <div class="example-tr" style="font-size:14px; margin-top:4px;">${ex.turkish}</div>
          <div style="color:var(--text-muted); font-size:12px; margin-top:6px; font-style:italic;">Note: ${ex.note}</div>
        </div>
      `).join('')}
    </div>
  `;

  // 4. Render Comparison
  document.getElementById("subtab-if-comparison").innerHTML = `
    <div class="feature-card">
      <h2>${comparison.title}</h2>
      <div style="margin-top:12px;">${comparison.explanation}</div>
    </div>
  `;

  // 5. Render Quiz list
  const quizContainer = document.getElementById("if-quiz-questions");
  quizContainer.innerHTML = exercises.map((ex, idx) => renderExerciseCard(ex, 'ifClauses', idx)).join('');
  lucide.createIcons();
}

function gradeIfQuiz() {
  const { exercises } = window.eslContent.ifClausesContent;
  let correctCount = 0;
  
  exercises.forEach(ex => {
    let userAns = "";
    if (ex.type === "multiple-choice") {
      userAns = selectedCoursePhaseExerciseAnswers[ex.id] || "";
    } else if (ex.type === "fill-in-the-blank") {
      userAns = document.getElementById(`input-${ex.id}`).value.trim();
    } else if (ex.type === "word-order") {
      userAns = wordOrderAnswers[ex.id].map(i => i.word).join(" ");
    }

    const feedbackEl = document.getElementById(`feedback-${ex.id}`);
    const cardEl = document.getElementById(`card-${ex.id}`);
    
    // Normalize string spaces & casing
    const normUser = userAns.replace(/\s+/g, ' ').trim().toLowerCase();
    const normCorrect = ex.answer.replace(/\s+/g, ' ').trim().toLowerCase();
    
    if (normUser === normCorrect && normCorrect !== "") {
      correctCount++;
      feedbackEl.innerHTML = `<strong>Correct!</strong> ${ex.explanation}`;
      feedbackEl.className = "exercise-feedback correct";
      
      if (ex.type === "multiple-choice") {
        cardEl.querySelectorAll(".option-btn").forEach(btn => {
          if (btn.innerText.trim() === ex.answer) btn.classList.add("correct");
        });
      }
      userProgress.ifClauses[ex.id] = true;
    } else {
      feedbackEl.innerHTML = `<strong>Incorrect!</strong> Correct answer is: <span class="bold">${ex.answer}</span>. <br>${ex.explanation}`;
      feedbackEl.className = "exercise-feedback incorrect";
      
      if (ex.type === "multiple-choice" && userAns !== "") {
        cardEl.querySelectorAll(".option-btn").forEach(btn => {
          if (btn.innerText.trim() === userAns) btn.classList.add("incorrect");
          if (btn.innerText.trim() === ex.answer) btn.classList.add("correct");
        });
      }
    }
  });

  const resultEl = document.getElementById("if-quiz-result");
  resultEl.classList.remove("hidden");
  
  if (correctCount >= 8) {
    playSuccessSound();
    resultEl.innerHTML = `
      <h3 style="color: var(--color-success)">🎉 Outstanding Job!</h3>
      <p style="margin-top:6px;">You got <strong>${correctCount} / 10</strong> questions correct. You have mastered If Clause Type 0 & 1!</p>
    `;
  } else {
    playFailureSound();
    resultEl.innerHTML = `
      <h3 style="color: var(--color-warning)">📚 Review & Try Again</h3>
      <p style="margin-top:6px;">You got <strong>${correctCount} / 10</strong> correct. Read through the structural comparison tabs and try again to improve your score.</p>
    `;
  }
  
  updateProgress();
  
  // Scroll to results box
  resultEl.scrollIntoView({ behavior: 'smooth' });
}

// ----------------------------------------------------
// Dynamic Rendering: Grammar Library
// ----------------------------------------------------
function renderGrammarLibraryIndex() {
  const listEl = document.getElementById("grammar-topics-list");
  listEl.innerHTML = window.eslContent.grammarLibrary.map((g, idx) => `
    <button class="list-item" id="grammar-item-${idx}" onclick="selectGrammarTopic(${idx})">
      <span class="item-title">${g.topic}</span>
      <span class="item-sub">Level: ${g.level}</span>
    </button>
  `).join('');
}

function selectGrammarTopic(idx) {
  const g = window.eslContent.grammarLibrary[idx];
  if (!g) return;

  // Active state in left sidebar
  document.querySelectorAll("#grammar-topics-list .list-item").forEach(item => {
    item.classList.remove("active");
  });
  document.getElementById(`grammar-item-${idx}`).classList.add("active");

  // Mark this topic as viewed in userProgress
  userProgress.grammarLib[idx] = true;
  updateProgress();

  // Render detail panel
  const panelEl = document.getElementById("grammar-article-panel");
  panelEl.innerHTML = `
    <div class="lib-detail-card">
      <span class="badge">Level ${g.level} Topic</span>
      <h2>${g.topic}</h2>
      <p style="color: var(--text-muted); font-size:14px; margin-bottom:20px;">${g.description}</p>
      
      <div style="font-size:14.5px; line-height:1.7;">
        ${g.explanation}
      </div>

      <h4 class="section-title" style="margin-top:32px;">Practice Examples (Örnekler)</h4>
      <div class="lesson-grid">
        ${g.examples.map(ex => `
          <div class="grammar-block">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="example-eng" style="font-size:15px; color: var(--accent-purple);">${ex.english}</span>
              <button class="btn-tts" style="padding:4px 8px; font-size:11px;" onclick="speakText('${ex.english.replace(/'/g, "\\'")}')">
                <i data-lucide="volume-2" style="width:12px; height:12px;"></i> Speak
              </button>
            </div>
            <div class="example-tr" style="font-size:13.5px; margin-top:6px;">${ex.turkish}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Re-create icons
  lucide.createIcons();
}

// ----------------------------------------------------
// Global Progress Engine
// ----------------------------------------------------
function updateProgress() {
  const { phases } = window.eslContent.courseContent;
  const tensesQuestions = window.eslContent.conditionalTensesContent.questions;
  const ifExercises = window.eslContent.ifClausesContent.exercises;
  const grammarLibItems = window.eslContent.grammarLibrary;
  
  // 1. Phase 1 Progress
  const p1Total = phases[0].exercises.length + phases[0].speaking.length;
  const p1Solved = Object.keys(userProgress.phase1).length;
  const p1Percent = p1Total > 0 ? Math.round((p1Solved / p1Total) * 100) : 0;
  document.getElementById("p1-percent").innerText = `${p1Percent}% Completed`;
  document.getElementById("p1-bar").style.width = `${p1Percent}%`;

  // 2. Phase 2 Progress
  const p2Total = phases[1].exercises.length + phases[1].speaking.length;
  const p2Solved = Object.keys(userProgress.phase2).length;
  const p2Percent = p2Total > 0 ? Math.round((p2Solved / p2Total) * 100) : 0;
  document.getElementById("p2-percent").innerText = `${p2Percent}% Completed`;
  document.getElementById("p2-bar").style.width = `${p2Percent}%`;

  // 3. Phase 3 Progress
  const p3Total = phases[2].exercises.length + phases[2].speaking.length;
  const p3Solved = Object.keys(userProgress.phase3).length;
  const p3Percent = p3Total > 0 ? Math.round((p3Solved / p3Total) * 100) : 0;
  document.getElementById("p3-percent").innerText = `${p3Percent}% Completed`;
  document.getElementById("p3-bar").style.width = `${p3Percent}%`;

  // 4. Conditional Tenses Progress
  const ctTotal = tensesQuestions.length;
  const ctSolved = Object.keys(userProgress.tenses).length;
  const ctPercent = ctTotal > 0 ? Math.round((ctSolved / ctTotal) * 100) : 0;
  document.getElementById("ct-percent").innerText = `${ctPercent}% Completed`;
  document.getElementById("ct-bar").style.width = `${ctPercent}%`;
  
  // Set checkmark in the list items of tenses list if solved
  tensesQuestions.forEach(q => {
    const listEl = document.getElementById(`ct-item-${q.id}`);
    if (listEl) {
      if (userProgress.tenses[q.id]) {
        listEl.classList.add("completed");
      } else {
        listEl.classList.remove("completed");
      }
    }
  });

  // 5. If Clauses Quiz Progress
  const ifTotal = ifExercises.length;
  const ifSolved = Object.keys(userProgress.ifClauses).length;
  const ifPercent = ifTotal > 0 ? Math.round((ifSolved / ifTotal) * 100) : 0;
  document.getElementById("if-percent").innerText = `${ifPercent}% Completed`;
  document.getElementById("if-bar").style.width = `${ifPercent}%`;

  // 6. Grammar Library Progress
  const libTotal = grammarLibItems.length;
  const libSolved = Object.keys(userProgress.grammarLib).length;
  const libPercent = libTotal > 0 ? Math.round((libSolved / libTotal) * 100) : 0;
  document.getElementById("lib-percent").innerText = `${libPercent}% Viewed`;
  document.getElementById("lib-bar").style.width = `${libPercent}%`;
  
  // Set checkmark in grammar topic lists if viewed
  grammarLibItems.forEach((g, idx) => {
    const listEl = document.getElementById(`grammar-item-${idx}`);
    if (listEl) {
      if (userProgress.grammarLib[idx]) {
        listEl.classList.add("completed");
      } else {
        listEl.classList.remove("completed");
      }
    }
  });

  // 7. Overall Progress Calculation
  const totalItems = p1Total + p2Total + p3Total + ctTotal + ifTotal + libTotal;
  const solvedItems = p1Solved + p2Solved + p3Solved + ctSolved + ifSolved + libSolved;
  const overallPercent = totalItems > 0 ? Math.round((solvedItems / totalItems) * 100) : 0;
  
  document.getElementById("overall-percentage").innerText = `${overallPercent}%`;
  document.getElementById("overall-progress-bar").style.width = `${overallPercent}%`;
}
