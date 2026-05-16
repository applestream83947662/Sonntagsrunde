// ==================== LOCALSTORAGE MANAGEMENT ====================
class GameDatabase {
  constructor() {
    this.loadFromStorage();
  }

  loadFromStorage() {
    const stored = localStorage.getItem('discGolfData');
    if (stored) {
      try {
        this.data = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse LocalStorage data:', e);
        this.initializeData();
      }
    } else {
      this.initializeData();
    }
  }

  initializeData() {
    this.data = {
      version: '1.0',
      rounds: [],
      courses: [],
      players: [],
      savedCourses: [],
      savedPlayers: []
    };
  }

  saveToStorage() {
    localStorage.setItem('discGolfData', JSON.stringify(this.data));
  }

  saveRound(round) {
    const roundWithTimestamp = {
      ...round,
      id: `round_${Date.now()}`,
      completedAt: new Date().toISOString()
    };
    this.data.rounds.push(roundWithTimestamp);
    this.saveToStorage();
    return roundWithTimestamp.id;
  }

  getRounds() {
    return this.data.rounds.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
  }

  getRoundById(id) {
    return this.data.rounds.find(r => r.id === id);
  }

  saveCourseTemplate(course) {
    if (!this.data.savedCourses.find(c => c.name === course.name)) {
      this.data.savedCourses.push({
        id: `course_${Date.now()}`,
        name: course.name,
        holes: course.holes,
        createdAt: new Date().toISOString()
      });
      this.saveToStorage();
    }
  }

  getSavedCourses() {
    return this.data.savedCourses;
  }

  savePlayerTemplate(players) {
    const playersKey = `players_${players.join('_')}`;
    if (!this.data.savedPlayers.find(p => p.key === playersKey)) {
      this.data.savedPlayers.push({
        id: `players_${Date.now()}`,
        key: playersKey,
        names: players,
        createdAt: new Date().toISOString()
      });
      this.saveToStorage();
    }
  }

  getSavedPlayers() {
    return this.data.savedPlayers;
  }

  exportAllData() {
    return JSON.stringify(this.data, null, 2);
  }

  importData(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      if (imported.version && imported.rounds !== undefined) {
        this.data = imported;
        this.saveToStorage();
        return true;
      }
      return false;
    } catch (e) {
      console.error('Failed to import data:', e);
      return false;
    }
  }
}

const db = new GameDatabase();

// ==================== DEFAULT PLAYER NAMES ====================
const DEFAULT_PLAYER_NAMES = ["Philipp", "Basti", "Swen", "Thomas", "Michael", "BastiHe"];

// ==================== ROUND DATA ====================
let roundData = {
  id: null,
  date: new Date().toISOString().split('T')[0],
  location: '',
  players: [],
  courses: [],
  scores: [],
  currentCourse: 0,
  previousRankings: [],
  courseName: ''
};

let pendingCourses = []; // Temporary storage for new courses

function setupPlayers() {
  const numPlayers = parseInt(document.getElementById('num-players').value);
  const numCourses = parseInt(document.getElementById('num-courses').value);
  
  if (numPlayers < 1 || numPlayers > 10) {
    alert('Please enter between 1 and 10 players');
    return;
  }
  
  roundData.players = Array(numPlayers).fill('');
  roundData.courses = Array(numCourses).fill(null);
  roundData.scores = Array(numPlayers).fill(null).map(() => Array(numCourses).fill(0));
  pendingCourses = Array(numCourses).fill(null);
  
  roundData.date = document.getElementById('round-date').value || new Date().toISOString().split('T')[0];
  
  document.getElementById('round-setup').style.display = 'none';
  document.getElementById('players-setup').style.display = 'block';
  
  const playersInput = document.getElementById('players-input');
  playersInput.innerHTML = '';
  
  for (let i = 0; i < numPlayers; i++) {
    const options = DEFAULT_PLAYER_NAMES.map(name => `<option value="${name}">${name}</option>`).join('');
    playersInput.innerHTML += `
      <div class="form-group player-selector">
        <label for="player-${i}">Spieler ${i + 1}:</label>
        <div class="player-input-group">
          <select id="player-${i}" class="player-dropdown" onchange="togglePlayerCustomInput(${i})">
            <option value="">-- Wählen Sie einen Namen --</option>
            ${options}
            <option value="custom">-- Eigene eingeben --</option>
          </select>
          <input type="text" id="player-custom-${i}" class="player-custom-input" placeholder="Eigener Name..." style="display: none;">
        </div>
        <div class="default-names-cards">
          ${DEFAULT_PLAYER_NAMES.map(name => `<button type="button" class="name-card" onclick="selectPlayerName(${i}, '${name}')">${name}</button>`).join('')}
        </div>
      </div>
    `;
  }
}

function selectPlayerName(playerIdx, name) {
  document.getElementById(`player-${playerIdx}`).value = name;
  document.getElementById(`player-custom-${playerIdx}`).style.display = 'none';
}

function togglePlayerCustomInput(playerIdx) {
  const dropdown = document.getElementById(`player-${playerIdx}`);
  const customInput = document.getElementById(`player-custom-${playerIdx}`);
  
  if (dropdown.value === 'custom') {
    customInput.style.display = 'block';
    customInput.focus();
  } else {
    customInput.style.display = 'none';
  }
}

function setupCourses() {
  for (let i = 0; i < roundData.players.length; i++) {
    const dropdown = document.getElementById(`player-${i}`);
    let name = '';
    
    if (dropdown.value === 'custom') {
      // Use custom input if selected
      name = document.getElementById(`player-custom-${i}`).value.trim();
    } else {
      // Use dropdown selection
      name = dropdown.value.trim();
    }
    
    if (!name) {
      alert(`Spielernamen eingeben: ${i + 1}`);
      return;
    }
    roundData.players[i] = name;
  }
  
  if (roundData.previousRankings.length > 0) {
    roundData.players = roundData.players.sort((a, b) => {
      const aRank = roundData.previousRankings.indexOf(a);
      const bRank = roundData.previousRankings.indexOf(b);
      return (aRank === -1 ? roundData.players.length : aRank) - (bRank === -1 ? roundData.players.length : bRank);
    });
  }
  
  document.getElementById('players-setup').style.display = 'none';
  document.getElementById('course-selection').style.display = 'block';
}

function showNewCourseSetup() {
  document.getElementById('course-selection').style.display = 'none';
  document.getElementById('courses-setup').style.display = 'block';
  
  const coursesInput = document.getElementById('courses-input');
  coursesInput.innerHTML = '';
  
  for (let i = 0; i < pendingCourses.length; i++) {
    coursesInput.innerHTML += `
      <div class="course-input">
        <h4>Hole ${i + 1}</h4>
        <div class="form-row">
          <div class="form-group">
            <label for="course-par-${i}">Par:</label>
            <input type="number" id="course-par-${i}" min="1" value="3">
          </div>
          <div class="form-group">
            <label for="course-length-${i}">Länge (m):</label>
            <input type="number" id="course-length-${i}" min="1" value="50">
          </div>
        </div>
      </div>
    `;
  }
}

function showLoadCourseSetup() {
  document.getElementById('course-selection').style.display = 'none';
  document.getElementById('load-course').style.display = 'block';
}

function goBackToCourseSelection() {
  document.getElementById('courses-setup').style.display = 'none';
  document.getElementById('load-course').style.display = 'none';
  document.getElementById('course-selection').style.display = 'block';
}

function handleCourseFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById('load-btn').disabled = false;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const courseData = JSON.parse(e.target.result);
        displayCoursePreview(courseData);
      } catch (error) {
        alert('Invalid JSON file');
        document.getElementById('load-btn').disabled = true;
      }
    };
    reader.readAsText(file);
  }
}

function displayCoursePreview(courseData) {
  const preview = document.getElementById('loaded-course-preview');
  let html = '<h3>Course Preview</h3>';
  
  if (courseData.name) {
    html += `<p><strong>Name:</strong> ${courseData.name}</p>`;
    roundData.courseName = courseData.name;
  }
  
  html += '<table><tr><th>Hole</th><th>Par</th><th>Length (m)</th></tr>';
  courseData.courses.forEach((course, idx) => {
    html += `<tr><td>${idx + 1}</td><td>${course.par}</td><td>${course.length}</td></tr>`;
  });
  html += '</table>';
  
  preview.innerHTML = html;
}

function loadCourseFile() {
  const file = document.getElementById('course-file').files[0];
  if (!file) {
    alert('Please select a file');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const courseData = JSON.parse(e.target.result);
      
      if (courseData.courses && Array.isArray(courseData.courses)) {
        roundData.courses = courseData.courses;
        roundData.courseName = courseData.name || '';
        
        // Adjust scores array if needed
        if (roundData.courses.length > roundData.scores[0].length) {
          roundData.scores = roundData.scores.map(playerScores => 
            [...playerScores, ...Array(roundData.courses.length - playerScores.length).fill(0)]
          );
        }
        
        document.getElementById('load-course').style.display = 'none';
        document.getElementById('scoring-section').style.display = 'block';
        document.getElementById('total-courses').textContent = roundData.courses.length;
        
        roundData.currentCourse = 0;
        displayCourse();
      } else {
        alert('Invalid course file format');
      }
    } catch (error) {
      alert('Error loading file: ' + error.message);
    }
  };
  reader.readAsText(file);
}

function startRound() {
  for (let i = 0; i < pendingCourses.length; i++) {
    roundData.courses[i] = {
      number: i + 1,
      par: parseInt(document.getElementById(`course-par-${i}`).value),
      length: parseInt(document.getElementById(`course-length-${i}`).value)
    };
  }
  
  document.getElementById('courses-setup').style.display = 'none';
  document.getElementById('scoring-section').style.display = 'block';
  document.getElementById('total-courses').textContent = roundData.courses.length;
  
  roundData.currentCourse = 0;
  displayCourse();
}

function displayCourse() {
  const course = roundData.courses[roundData.currentCourse];
  document.getElementById('current-course').textContent = roundData.currentCourse + 1;
  
  const courseInfo = document.getElementById('course-info');
  courseInfo.innerHTML = `
    <p><strong>Par:</strong> ${course.par} | <strong>Length:</strong> ${course.length}m</p>
  `;
  
  // Calculate cumulative par for holes played (excluding current hole)
  const cumulativePar = roundData.courses.slice(0, roundData.currentCourse).reduce((sum, c) => sum + c.par, 0);
  
  const scoringTable = document.getElementById('scoring-table');
  let html = '<table><tr><th>Player</th><th>Throws</th><th>Total</th></tr>';
  
  const standings = calculateStandingsForDisplay();
  
  for (let standing of standings) {
    const playerIdx = standing.idx;
    const score = roundData.scores[playerIdx][roundData.currentCourse];
    
    // Calculate cumulative vs par for this player (excluding current hole)
    const cumulativeScore = roundData.scores[playerIdx].slice(0, roundData.currentCourse).reduce((a, b) => a + b, 0);
    const cumulativeVsPar = cumulativeScore - cumulativePar;
    const vsParSymbol = cumulativeVsPar > 0 ? '+' : cumulativeVsPar < 0 ? '' : '';
    const playerDisplayName = cumulativeVsPar === 0 ? `${roundData.players[playerIdx]} (E)` : `${roundData.players[playerIdx]} (${vsParSymbol}${cumulativeVsPar})`;

    
    html += `
      <tr>
        <td>${playerDisplayName}</td>
        <td>
          <input type="number" id="score-${playerIdx}" min="1" value="${score || ''}" 
                 onchange="updateScore(${playerIdx}, ${roundData.currentCourse})">
        </td>
        <td><strong>${standing.total}</strong></td>
      </tr>
    `;
  }
  html += '</table>';
  scoringTable.innerHTML = html;
  
  const nextBtn = document.getElementById('next-btn');
  const isHalftime = roundData.currentCourse === Math.floor(roundData.courses.length / 2) - 1;
  const isLastCourse = roundData.currentCourse === roundData.courses.length - 1;
  
  if (isHalftime) {
    nextBtn.textContent = 'Halftime Standing →';
  } else if (isLastCourse) {
    nextBtn.textContent = 'See Results →';
  } else {
    nextBtn.textContent = 'Next →';
  }
}

function calculateStandingsForDisplay() {
  // Keep the current order of players without sorting
  const standings = roundData.players.map((name, idx) => {
    const total = roundData.scores[idx].slice(0, roundData.currentCourse + 1).reduce((a, b) => a + b, 0);
    return { name, idx, total };
  });
  
  return standings.map((standing, position) => ({
    ...standing,
    position: position + 1
  }));
}

function calculateStandings() {
  // Sort by total throws for final standings and halftime
  const standings = roundData.players.map((name, idx) => {
    const total = roundData.scores[idx].slice(0, roundData.currentCourse + 1).reduce((a, b) => a + b, 0);
    return { name, idx, total };
  }).sort((a, b) => a.total - b.total);
  
  return standings.map((standing, position) => ({
    ...standing,
    position: position + 1
  }));
}

function updateScore(playerIdx, courseIdx) {
  const score = parseInt(document.getElementById(`score-${playerIdx}`).value);
  if (score > 0) {
    roundData.scores[playerIdx][courseIdx] = score;
  }
}

function previousCourse() {
  if (roundData.currentCourse > 0) {
    roundData.currentCourse--;
    displayCourse();
  }
}

function nextCourse() {
  const isHalftime = roundData.currentCourse === Math.floor(roundData.courses.length / 2) - 1;
  const isLastCourse = roundData.currentCourse === roundData.courses.length - 1;
  
  if (isLastCourse) {
    showResults();
  } else if (isHalftime) {
    showHalftime();
  } else {
    roundData.currentCourse++;
    displayCourse();
  }
}

function showHalftime() {
  document.getElementById('scoring-section').style.display = 'none';
  document.getElementById('halftime-section').style.display = 'block';
  
  displayStandings('halftime-standings');
}

function continueRound() {
  document.getElementById('halftime-section').style.display = 'none';
  document.getElementById('scoring-section').style.display = 'block';
  
  roundData.currentCourse++;
  displayCourse();
}

function showResults() {
  document.getElementById('scoring-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';
  
  displayStandings('final-standings', true);
  
  const standings = roundData.players.map((name, idx) => {
    const total = roundData.scores[idx].reduce((a, b) => a + b, 0);
    return { name, total };
  }).sort((a, b) => a.total - b.total);
  
  roundData.previousRankings = standings.map(s => s.name);
  
  // Save round to database
  roundData.id = db.saveRound({
    date: roundData.date,
    location: roundData.location,
    courseName: roundData.courseName,
    players: roundData.players,
    holes: roundData.courses,
    scores: roundData.scores,
    standings: standings
  });
}

function displayStandings(elementId, isFinal = false) {
  // Determine how many holes to include in the calculation
  let holesToInclude = roundData.courses.length;
  if (!isFinal) {
    // For halftime, include holes up to and including currentCourse
    holesToInclude = roundData.currentCourse + 1;
  }
  
  const standings = roundData.players.map((name, idx) => {
    const total = roundData.scores[idx].slice(0, holesToInclude).reduce((a, b) => a + b, 0);
    return { name, idx, total };
  }).sort((a, b) => a.total - b.total);
  
  const element = document.getElementById(elementId);
  let html = '<table><tr><th>Position</th><th>Player</th><th>Total Throws</th><th>vs Par</th></tr>';
  
  const totalPar = roundData.courses.slice(0, holesToInclude).reduce((sum, course) => sum + course.par, 0);
  
  standings.forEach((player, position) => {
    const medal = position === 0 ? '🥇' : position === 1 ? '🥈' : position === 2 ? '🥉' : '';
    const vsPar = player.total - totalPar;
    const vsParText = vsPar > 0 ? `+${vsPar}` : vsPar === 0 ? 'E' : `${vsPar}`;
    
    html += `<tr><td>${medal} ${position + 1}</td><td>${player.name}</td><td>${player.total}</td><td>${vsParText}</td></tr>`;
  });
  
  if (isFinal) {
    html += `<tr><td colspan="4"><strong>Date: ${roundData.date}</strong></td></tr>`;
  }
  
  html += '</table>';
  element.innerHTML = html;
}

function promptSaveCourse() {
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('save-course').style.display = 'block';
}

function saveCourseFile() {
  const courseName = document.getElementById('course-name').value.trim();
  if (!courseName) {
    alert('Please enter a course name');
    return;
  }
  
  const courseData = {
    name: courseName,
    holes: roundData.courses
  };
  
  // Save to database templates
  db.saveCourseTemplate(courseData);
  
  // Also export as file
  const dataStr = JSON.stringify(courseData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${courseName.replace(/\s+/g, '_')}.json`;
  link.click();
  URL.revokeObjectURL(url);
  
  cancelSaveCourse();
}

function cancelSaveCourse() {
  document.getElementById('save-course').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';
  document.getElementById('course-name').value = '';
}

// ==================== DATA HISTORY & MANAGEMENT ====================

function showGameHistory() {
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('history-section').style.display = 'block';
  displayGameHistory();
}

function displayGameHistory() {
  const rounds = db.getRounds();
  const historyContainer = document.getElementById('history-list');
  
  if (rounds.length === 0) {
    historyContainer.innerHTML = '<p>No rounds recorded yet.</p>';
    return;
  }
  
  let html = '<table><tr><th>Date</th><th>Players</th><th>Winner</th><th>Score</th><th>Action</th></tr>';
  
  rounds.forEach(round => {
    const winner = round.standings[0];
    const totalPar = round.holes.reduce((sum, hole) => sum + hole.par, 0);
    const vsParText = winner.total - totalPar > 0 ? `+${winner.total - totalPar}` : 
                      winner.total - totalPar === 0 ? 'E' : `${winner.total - totalPar}`;
    
    html += `
      <tr>
        <td>${new Date(round.date).toLocaleDateString()}</td>
        <td>${round.players.join(', ')}</td>
        <td>${winner.name}</td>
        <td>${winner.total} (${vsParText})</td>
        <td><button onclick="viewRoundDetails('${round.id}')">View</button></td>
      </tr>
    `;
  });
  
  html += '</table>';
  historyContainer.innerHTML = html;
}

function viewRoundDetails(roundId) {
  const round = db.getRoundById(roundId);
  if (!round) return;
  
  const detailsContainer = document.getElementById('round-details');
  const totalPar = round.holes.reduce((sum, hole) => sum + hole.par, 0);
  
  let html = `<h3>${round.courseName || 'Course'} - ${new Date(round.date).toLocaleDateString()}</h3>`;
  html += '<h4>Leaderboard</h4>';
  html += '<table><tr><th>Position</th><th>Player</th><th>Total</th><th>vs Par</th></tr>';
  
  round.standings.forEach((player, idx) => {
    const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : '';
    const vsPar = player.total - totalPar;
    const vsParText = vsPar > 0 ? `+${vsPar}` : vsPar === 0 ? 'E' : `${vsPar}`;
    html += `<tr><td>${medal} ${idx + 1}</td><td>${player.name}</td><td>${player.total}</td><td>${vsParText}</td></tr>`;
  });
  html += '</table>';
  
  // Hole-by-hole breakdown
  html += '<h4>Hole-by-Hole Breakdown</h4>';
  html += '<table><tr><th>Hole</th><th>Par</th>';
  round.players.forEach(player => {
    html += `<th>${player}</th>`;
  });
  html += '</tr>';
  
  round.holes.forEach((hole, holeIdx) => {
    html += `<tr><td>${holeIdx + 1}</td><td>${hole.par}</td>`;
    round.scores.forEach(playerScores => {
      html += `<td>${playerScores[holeIdx]}</td>`;
    });
    html += '</tr>';
  });
  html += '</table>';
  
  detailsContainer.innerHTML = html;
}

function goBackToResults() {
  document.getElementById('history-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';
}

function exportGameData() {
  const data = db.exportAllData();
  const dataBlob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `disc-golf-data_${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const success = db.importData(e.target.result);
      if (success) {
        alert('Data imported successfully!');
        document.getElementById('import-file-input').value = '';
      } else {
        alert('Invalid data format');
      }
    } catch (error) {
      alert('Error importing data: ' + error.message);
    }
  };
  reader.readAsText(file);
}

function resetTracker() {
  const currentRankings = roundData.previousRankings;
  
  // Save player template
  if (roundData.players.length > 0) {
    db.savePlayerTemplate(roundData.players);
  }
  
  roundData = {
    id: null,
    date: new Date().toISOString().split('T')[0],
    location: '',
    players: [],
    courses: [],
    scores: [],
    currentCourse: 0,
    previousRankings: currentRankings,
    courseName: ''
  };
  
  document.getElementById('round-setup').style.display = 'block';
  document.getElementById('players-setup').style.display = 'none';
  document.getElementById('course-selection').style.display = 'none';
  document.getElementById('courses-setup').style.display = 'none';
  document.getElementById('load-course').style.display = 'none';
  document.getElementById('save-course').style.display = 'none';
  document.getElementById('scoring-section').style.display = 'none';
  document.getElementById('halftime-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('history-section').style.display = 'none';
  
  document.getElementById('round-date').valueAsDate = new Date();
  document.getElementById('course-file').value = '';
}

// Set initial date and event listeners
window.addEventListener('load', () => {
  document.getElementById('round-date').valueAsDate = new Date();
  document.getElementById('course-file').addEventListener('change', handleCourseFileSelect);
  document.getElementById('import-file-input').addEventListener('change', handleImportFile);
});