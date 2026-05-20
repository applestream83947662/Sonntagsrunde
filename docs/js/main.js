// ==================== LANGUAGE SUPPORT ====================
let appLanguage = localStorage.getItem('appLanguage') || 'de';

// Embedded translations as fallback/primary source
let TRANSLATIONS = {
  "de": {
    "header": {
      "title": "⛳ Disc Golf Sonntagsrunde",
      "subtitle": "von Philipp",
      "export": "📥 Export",
      "import": "📤 Import",
      "export_title": "Alle Daten als JSON herunterladen"
    },
    "round_setup": {
      "heading": "Neue Runde",
      "label_date": "Datum:",
      "label_players": "Anzahl Spieler:",
      "label_courses": "Anzahl Bahnen:",
      "button_next": "Spieler erstellen"
    },
    "players_setup": {
      "heading": "Spieler Name:",
      "label_player": "Spieler",
      "placeholder_name": "Namen eingeben",
      "button_next": "Kurseinstellung",
      "error_name_required": "Spielernamen eingeben:"
    },
    "course_selection": {
      "heading": "Kurseinstellung",
      "button_new": "neuer Kurs",
      "button_load": "Kurs laden..."
    },
    "courses_setup": {
      "heading": "neue Kursdetails",
      "label_hole": "Bahn",
      "label_par": "Par:",
      "label_length": "Länge (m):",
      "label_name": "Kurs Name:",
      "button_back": "← Zurück",
      "button_start": "Starte Runde..."
    },
    "load_course": {
      "heading": "Kurs laden...",
      "label_file": "Auswahl:",
      "preview_title": "Kurs Vorschau",
      "preview_name": "Name:",
      "table_hole": "Bahn",
      "table_par": "Par",
      "table_length": "Länge (m)",
      "button_back": "← Zurück",
      "button_load": "Kurs laden",
      "error_select": "Bitte wählen Sie eine Datei",
      "error_invalid": "Ungültige JSON Datei",
      "error_format": "Ungültige Kursformat",
      "error_loading": "Fehler beim Laden der Datei:"
    },
    "save_course": {
      "heading": "Kurs speichern",
      "label_name": "Kurs Name:",
      "placeholder_name": "geb mir einen Namen...",
      "button_cancel": "Abbruch",
      "button_save": "Kurs speichern",
      "error_name": "Bitte geben Sie einen Kursnamen ein"
    },
    "scoring": {
      "heading": "Bahn:",
      "of": "von",
      "label_par": "Par:",
      "label_length": "Länge:",
      "table_player": "Spieler",
      "table_throws": "Würfe",
      "table_total": "Gesamt",
      "button_previous": "← Letzte",
      "button_next": "Nächste →",
      "button_halftime": "Halftime Standing →",
      "button_results": "Ergebnisse anzeigen →"
    },
    "halftime": {
      "heading": "⏸️ Halbzeit",
      "button_continue": "Weiter geht's"
    },
    "results": {
      "heading": "🏆 Endstand",
      "table_position": "Position",
      "table_player": "Spieler",
      "table_total": "Gesamt Würfe",
      "table_vs_par": "vs Par",
      "button_history": "📊 Historie...",
      "button_new_round": "Neue Runde",
      "button_save_course": "Kurs speichern",
      "label_date": "Datum:"
    },
    "history": {
      "heading": "📊 Bislang gespielte Runden",
      "table_date": "Datum",
      "table_players": "Spieler",
      "table_winner": "Gewinner",
      "table_score": "Punkte",
      "table_action": "Aktion",
      "button_view": "Ansehen",
      "button_back": "← zurück",
      "leaderboard": "Rangliste",
      "hole_breakdown": "Bahn nach Bahn Übersicht",
      "no_rounds": "Noch keine Runden aufgezeichnet.",
      "label_course": "Kurs",
      "label_leaderboard": "Rangliste",
      "label_breakdown": "Bahn nach Bahn Übersicht",
      "label_date": "Datum",
      "medal_first": "🥇",
      "medal_second": "🥈",
      "medal_third": "🥉"
    },
    "common": {
      "alert_error": "Fehler",
      "alert_success": "Erfolg",
      "button_ok": "OK",
      "button_cancel": "Abbruch",
      "vs_par_even": "E",
      "vs_par_plus": "+",
      "vs_par_minus": "-"
    }
  },
  "en": {
    "header": {
      "title": "⛳ Disc Golf Sunday Round",
      "subtitle": "by Philipp",
      "export": "📥 Export",
      "import": "📤 Import",
      "export_title": "Download all data as JSON"
    },
    "round_setup": {
      "heading": "New Round",
      "label_date": "Date:",
      "label_players": "Number of Players:",
      "label_courses": "Number of Holes:",
      "button_next": "Create Players"
    },
    "players_setup": {
      "heading": "Player Names:",
      "label_player": "Player",
      "placeholder_name": "Enter name",
      "button_next": "Course Setup",
      "error_name_required": "Enter player name:"
    },
    "course_selection": {
      "heading": "Course Setup",
      "button_new": "New Course",
      "button_load": "Load Course..."
    },
    "courses_setup": {
      "heading": "Course Details",
      "label_hole": "Hole",
      "label_par": "Par:",
      "label_length": "Length (m):",
      "label_name": "Course Name:",
      "button_back": "← Back",
      "button_start": "Start Round..."
    },
    "load_course": {
      "heading": "Load Course...",
      "label_file": "Select:",
      "preview_title": "Course Preview",
      "preview_name": "Name:",
      "table_hole": "Hole",
      "table_par": "Par",
      "table_length": "Length (m)",
      "button_back": "← Back",
      "button_load": "Load Course",
      "error_select": "Please select a file",
      "error_invalid": "Invalid JSON file",
      "error_format": "Invalid course format",
      "error_loading": "Error loading file:"
    },
    "save_course": {
      "heading": "Save Course",
      "label_name": "Course Name:",
      "placeholder_name": "Give me a name...",
      "button_cancel": "Cancel",
      "button_save": "Save Course",
      "error_name": "Please enter a course name"
    },
    "scoring": {
      "heading": "Hole:",
      "of": "of",
      "label_par": "Par:",
      "label_length": "Length:",
      "table_player": "Player",
      "table_throws": "Throws",
      "table_total": "Total",
      "button_previous": "← Previous",
      "button_next": "Next →",
      "button_halftime": "Halftime Standing →",
      "button_results": "See Results →"
    },
    "halftime": {
      "heading": "⏸️ Halftime",
      "button_continue": "Continue"
    },
    "results": {
      "heading": "🏆 Final Results",
      "table_position": "Position",
      "table_player": "Player",
      "table_total": "Total Throws",
      "table_vs_par": "vs Par",
      "button_history": "📊 History...",
      "button_new_round": "New Round",
      "button_save_course": "Save Course",
      "label_date": "Date:"
    },
    "history": {
      "heading": "📊 Played Rounds",
      "table_date": "Date",
      "table_players": "Players",
      "table_winner": "Winner",
      "table_score": "Score",
      "table_action": "Action",
      "button_view": "View",
      "button_back": "← Back",
      "leaderboard": "Leaderboard",
      "hole_breakdown": "Hole-by-Hole Breakdown",
      "no_rounds": "No rounds recorded yet.",
      "label_course": "Course",
      "label_leaderboard": "Leaderboard",
      "label_breakdown": "Hole-by-Hole Breakdown",
      "label_date": "Date",
      "medal_first": "🥇",
      "medal_second": "🥈",
      "medal_third": "🥉"
    },
    "common": {
      "alert_error": "Error",
      "alert_success": "Success",
      "button_ok": "OK",
      "button_cancel": "Cancel",
      "vs_par_even": "E",
      "vs_par_plus": "+",
      "vs_par_minus": "-"
    }
  }
};

function getText(path) {
  if (!path) return '';
  const keys = path.split('.');
  let value = TRANSLATIONS[appLanguage];
  for (let key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path;
    }
  }
  return value || path;
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'de') return;
  appLanguage = lang;
  localStorage.setItem('appLanguage', lang);
  if (roundData instanceof Round) {
    roundData.language = lang;
  }
  updateLanguageSwitcher();
  updatePageLanguage();
}

function updateLanguageSwitcher() {
  const btnDE = document.getElementById('lang-de');
  const btnEN = document.getElementById('lang-en');
  if (btnDE) {
    btnDE.style.backgroundColor = appLanguage === 'de' ? '#a78bfa' : 'rgba(124, 58, 237, 0.7)';
    btnDE.style.color = appLanguage === 'de' ? '#ffffff' : '#e0e0e0';
  }
  if (btnEN) {
    btnEN.style.backgroundColor = appLanguage === 'en' ? '#a78bfa' : 'rgba(124, 58, 237, 0.7)';
    btnEN.style.color = appLanguage === 'en' ? '#ffffff' : '#e0e0e0';
  }
}

async function loadTranslations(filePath = 'data/translations.json') {
  // Translations are embedded directly in the script
  // Try to load from file to update, but don't fail if it doesn't work
  try {
    const response = await fetch(filePath);
    if (response.ok) {
      const fileTranslations = await response.json();
      TRANSLATIONS = fileTranslations;
      console.log('Translations loaded from file:', TRANSLATIONS);
    }
  } catch (error) {
    console.log('Using embedded translations:', error);
  }
}

function updatePageLanguage() {
  // Update static page elements
  document.querySelector('header h1').textContent = getText('header.title');
  document.querySelector('header p').textContent = getText('header.subtitle');
  
  // Round setup section
  const roundSetupH2 = document.querySelector('#round-setup h2');
  if (roundSetupH2) roundSetupH2.textContent = getText('round_setup.heading');
  const roundDateLabel = document.querySelector('label[for="round-date"]');
  if (roundDateLabel) roundDateLabel.textContent = getText('round_setup.label_date');
  const numPlayersLabel = document.querySelector('label[for="num-players"]');
  if (numPlayersLabel) numPlayersLabel.textContent = getText('round_setup.label_players');
  const numCoursesLabel = document.querySelector('label[for="num-courses"]');
  if (numCoursesLabel) numCoursesLabel.textContent = getText('round_setup.label_courses');
  const roundSetupBtn = document.querySelector('#round-setup button');
  if (roundSetupBtn) roundSetupBtn.textContent = getText('round_setup.button_next');
  
  // Players setup section
  const playersSetupH2 = document.querySelector('#players-setup h2');
  if (playersSetupH2) playersSetupH2.textContent = getText('players_setup.heading');
  const playersSetupBtn = document.querySelector('#players-setup button');
  if (playersSetupBtn) playersSetupBtn.textContent = getText('players_setup.button_next');
  
  // Course selection section
  const courseSelectionH2 = document.querySelector('#course-selection h2');
  if (courseSelectionH2) courseSelectionH2.textContent = getText('course_selection.heading');
  const newCourseBtn = document.querySelector('#course-selection button:first-child');
  if (newCourseBtn) newCourseBtn.textContent = getText('course_selection.button_new');
  const loadCourseBtn = document.querySelector('#course-selection button:last-child');
  if (loadCourseBtn) loadCourseBtn.textContent = getText('course_selection.button_load');
  
  // Course setup section
  const coursesSetupH2 = document.querySelector('#courses-setup h2');
  if (coursesSetupH2) coursesSetupH2.textContent = getText('courses_setup.heading');
  const coursesBackBtn = document.querySelector('#courses-setup .button-group button:first-child');
  if (coursesBackBtn) coursesBackBtn.textContent = getText('courses_setup.button_back');
  const startRoundBtn = document.querySelector('#courses-setup .button-group button:last-child');
  if (startRoundBtn) startRoundBtn.textContent = getText('courses_setup.button_start');
  
  // Load course section
  const loadCourseH2 = document.querySelector('#load-course h2');
  if (loadCourseH2) loadCourseH2.textContent = getText('load_course.heading');
  const courseFileLabel = document.querySelector('label[for="course-file"]');
  if (courseFileLabel) courseFileLabel.textContent = getText('load_course.label_file');
  const loadBackBtn = document.querySelector('#load-course .button-group button:first-child');
  if (loadBackBtn) loadBackBtn.textContent = getText('load_course.button_back');
  const loadFileBtn = document.querySelector('#load-course #load-btn');
  if (loadFileBtn) loadFileBtn.textContent = getText('load_course.button_load');
  
  // Save course section
  const saveCourseH2 = document.querySelector('#save-course h2');
  if (saveCourseH2) saveCourseH2.textContent = getText('save_course.heading');
  const courseNameLabel = document.querySelector('label[for="course-name"]');
  if (courseNameLabel) courseNameLabel.textContent = getText('save_course.label_name');
  const cancelBtn = document.querySelector('#save-course .button-group button:first-child');
  if (cancelBtn) cancelBtn.textContent = getText('save_course.button_cancel');
  const saveCourseBtn = document.querySelector('#save-course .button-group button:last-child');
  if (saveCourseBtn) saveCourseBtn.textContent = getText('save_course.button_save');
  
  // Scoring section
  const scoringH2 = document.querySelector('#scoring-section h2');
  if (scoringH2) {
    scoringH2.innerHTML = `${getText('scoring.heading')} <span id="current-course">1</span> ${getText('scoring.of')} <span id="total-courses">18</span>`;
  }
  
  // Results section
  const resultsH2 = document.querySelector('#results-section h2');
  if (resultsH2) resultsH2.textContent = getText('results.heading');
  
  // Halftime section
  const halftimeH2 = document.querySelector('#halftime-section h2');
  if (halftimeH2) halftimeH2.textContent = getText('halftime.heading');
  const continueBtn = document.querySelector('#halftime-section button');
  if (continueBtn) continueBtn.textContent = getText('halftime.button_continue');
  
  // History section
  const historyH2 = document.querySelector('#history-section h2');
  if (historyH2) historyH2.textContent = getText('history.heading');
  
  // Redraw current view if playing
  if (document.getElementById('scoring-section').style.display !== 'none') {
    displayCourse();
  } else if (document.getElementById('halftime-section').style.display !== 'none') {
    displayStandings('halftime-standings');
  } else if (document.getElementById('results-section').style.display !== 'none') {
    displayStandings('final-standings', true);
  } else if (document.getElementById('history-section').style.display !== 'none') {
    displayGameHistory();
  }
}

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

// ==================== OBJECT-ORIENTED CLASS STRUCTURE ====================

/**
 * Course class - represents a single hole
 */
class Course {
  constructor(number, par, length) {
    this.number = number;
    this.par = par;
    this.length = length;
  }

  getInfo() {
    return { number: this.number, par: this.par, length: this.length };
  }
}

/**
 * Courses class - collection of Course objects
 */
class Courses {
  constructor() {
    this.courses = [];
  }

  add(course) {
    if (course instanceof Course) {
      this.courses.push(course);
      return true;
    }
    return false;
  }

  addCourseData(number, par, length) {
    const course = new Course(number, par, length);
    this.courses.push(course);
    return course;
  }

  get(index) {
    return this.courses[index] || null;
  }

  getAll() {
    return [...this.courses];
  }

  get length() {
    return this.courses.length;
  }

  clear() {
    this.courses = [];
  }

  getTotalPar(upToIndex = null) {
    const endIdx = upToIndex === null ? this.courses.length : Math.min(upToIndex, this.courses.length);
    return this.courses.slice(0, endIdx).reduce((sum, course) => sum + course.par, 0);
  }

  toJSON() {
    return {
      courses: this.courses.map(c => ({ par: c.par, length: c.length }))
    };
  }

  static fromJSON(data) {
    const courses = new Courses();
    if (data.courses && Array.isArray(data.courses)) {
      data.courses.forEach((courseData, idx) => {
        courses.addCourseData(idx + 1, courseData.par, courseData.length);
      });
    }
    return courses;
  }
}

/**
 * Player class - represents a single player
 */
class Player {
  constructor(name) {
    this.name = name;
    this.scores = [];
  }

  addScore(courseIndex, score) {
    // Ensure scores array is large enough
    while (this.scores.length <= courseIndex) {
      this.scores.push(0);
    }
    this.scores[courseIndex] = score;
  }

  getScore(courseIndex) {
    return this.scores[courseIndex] || 0;
  }

  getTotalScore(upToIndex = null) {
    const endIdx = upToIndex === null ? this.scores.length : Math.min(upToIndex, this.scores.length);
    return this.scores.slice(0, endIdx).reduce((sum, score) => sum + score, 0);
  }

  getVsPar(courses, upToIndex = null) {
    const totalScore = this.getTotalScore(upToIndex);
    const totalPar = courses.getTotalPar(upToIndex);
    return totalScore - totalPar;
  }

  clear() {
    this.scores = [];
  }

  toJSON() {
    return { name: this.name, scores: this.scores };
  }

  static fromJSON(data) {
    const player = new Player(data.name);
    player.scores = data.scores || [];
    return player;
  }
}

/**
 * Players class - collection of Player objects
 */
class Players {
  constructor() {
    this.players = [];
  }

  add(player) {
    if (player instanceof Player) {
      this.players.push(player);
      return true;
    }
    return false;
  }

  addPlayer(name) {
    const player = new Player(name);
    this.players.push(player);
    return player;
  }

  get(index) {
    return this.players[index] || null;
  }

  getAll() {
    return [...this.players];
  }

  getNames() {
    return this.players.map(p => p.name);
  }

  get length() {
    return this.players.length;
  }

  clear() {
    this.players = [];
  }

  getStandings(courses = null, upToIndex = null) {
    const standings = this.players.map((player, idx) => ({
      position: 0,
      index: idx,
      name: player.name,
      total: player.getTotalScore(upToIndex),
      vsPar: courses ? player.getVsPar(courses, upToIndex) : 0
    }));
    
    // Sort by total score (ascending - lowest is best in disc golf)
    standings.sort((a, b) => a.total - b.total);
    
    // Add positions
    standings.forEach((standing, pos) => {
      standing.position = pos + 1;
    });
    
    return standings;
  }

  toJSON() {
    return this.players.map(p => p.toJSON());
  }

  static fromJSON(data) {
    const players = new Players();
    if (Array.isArray(data)) {
      data.forEach(playerData => {
        players.add(Player.fromJSON(playerData));
      });
    }
    return players;
  }
}

/**
 * Round class - represents the entire game/round
 */
class Round {
  constructor(date = null) {
    this.id = null;
    this.date = date || new Date().toISOString().split('T')[0];
    this.courseName = '';
    this.players = new Players();
    this.courses = new Courses();
    this.currentCourse = 0;
    this.previousRankings = [];
    this.language = appLanguage;
  }

  addPlayer(name) {
    const player = new Player(name);
    this.players.add(player);
    return player;
  }

  addCourse(par, length) {
    const courseNumber = this.courses.length + 1;
    return this.courses.addCourseData(courseNumber, par, length);
  }

  setPlayerScore(playerIndex, courseIndex, score) {
    const player = this.players.get(playerIndex);
    if (player) {
      player.addScore(courseIndex, score);
    }
  }

  getPlayerScore(playerIndex, courseIndex) {
    const player = this.players.get(playerIndex);
    return player ? player.getScore(courseIndex) : 0;
  }

  nextCourse() {
    if (this.currentCourse < this.courses.length - 1) {
      this.currentCourse++;
      return true;
    }
    return false;
  }

  previousCourse() {
    if (this.currentCourse > 0) {
      this.currentCourse--;
      return true;
    }
    return false;
  }

  getCurrentCourse() {
    return this.courses.get(this.currentCourse);
  }

  isHalftime() {
    const halfwayPoint = Math.floor(this.courses.length / 2) - 1;
    return this.currentCourse === halfwayPoint;
  }

  isFinal() {
    return this.currentCourse === this.courses.length - 1;
  }

  getDisplayStandings() {
    // Returns standings in original player order (for scoring display)
    return this.players.players.map((player, idx) => {
      const total = player.getTotalScore(this.currentCourse + 1);
      return { index: idx, name: player.name, total };
    });
  }

  getStandings(upToIndex = null) {
    return this.players.getStandings(this.courses, upToIndex);
  }

  getHalftimeStandings() {
    return this.getStandings(this.currentCourse + 1);
  }

  getFinalStandings() {
    return this.getStandings();
  }

  toJSON() {
    return {
      id: this.id,
      date: this.date,
      courseName: this.courseName,
      players: this.players.toJSON(),
      courses: this.courses.getAll().map(c => ({ par: c.par, length: c.length })),
      currentCourse: this.currentCourse,
      previousRankings: this.previousRankings
    };
  }

  static fromJSON(data) {
    const round = new Round(data.date);
    round.id = data.id;
    round.courseName = data.courseName || '';
    round.currentCourse = data.currentCourse || 0;
    round.previousRankings = data.previousRankings || [];

    // Restore players and their scores
    if (data.players && Array.isArray(data.players)) {
      data.players.forEach(playerData => {
        round.players.add(Player.fromJSON(playerData));
      });
    }

    // Restore courses
    if (data.courses && Array.isArray(data.courses)) {
      data.courses.forEach((courseData, idx) => {
        round.addCourse(courseData.par, courseData.length);
      });
    }

    return round;
  }
}

// ==================== DEFAULT PLAYER NAMES ====================
const DEFAULT_PLAYER_NAMES = ["Philipp", "Basti", "Swen", "Thomas", "Michael"];

// ==================== ROUND DATA ====================
let roundData = new Round();

let pendingCourses = []; // Temporary storage for new courses

function setupPlayers() {
  const numPlayers = parseInt(document.getElementById('num-players').value);
  const numCourses = parseInt(document.getElementById('num-courses').value);
  
  if (numPlayers < 1 || numPlayers > 10) {
    alert('Please enter between 1 and 10 players');
    return;
  }
  
  // Hide header during gameplay
  document.querySelector('header').style.display = 'none';
  
  // Clear and initialize players and courses
  roundData.players.clear();
  roundData.courses.clear();
  roundData.currentCourse = 0;
  
  // Initialize scores for new courses
  pendingCourses = Array(numCourses).fill(null);
  for (let i = 0; i < numPlayers; i++) {
    roundData.addPlayer(''); // Add placeholder players
  }
  
  roundData.date = document.getElementById('round-date').value || new Date().toISOString().split('T')[0];
  
  document.getElementById('round-setup').style.display = 'none';
  document.getElementById('players-setup').style.display = 'block';
  
  const playersInput = document.getElementById('players-input');
  playersInput.innerHTML = '';
  
  for (let i = 0; i < numPlayers; i++) {
    const options = DEFAULT_PLAYER_NAMES.map(name => `<option value="${name}">${name}</option>`).join('');
    const playerLabel = getText('players_setup.label_player');
    const selectPlaceholder = getText('players_setup.label_player') === 'Player' 
      ? '-- Select a name --' 
      : '-- Wählen Sie einen Namen --';
    const customOption = appLanguage === 'en'
      ? '-- Enter custom --'
      : '-- Eigene eingeben --';
    const customPlaceholder = appLanguage === 'en'
      ? 'Custom name...'
      : 'Eigener Name...';
    
    playersInput.innerHTML += `
      <div class="form-group player-selector">
        <label for="player-${i}">${playerLabel} ${i + 1}:</label>
        <div class="player-input-group">
          <select id="player-${i}" class="player-dropdown" onchange="togglePlayerCustomInput(${i})">
            <option value="">${selectPlaceholder}</option>
            ${options}
            <option value="custom">${customOption}</option>
          </select>
          <input type="text" id="player-custom-${i}" class="player-custom-input" placeholder="${customPlaceholder}" style="display: none;">
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
  const playerNames = [];
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
      alert(getText('players_setup.error_name_required') + ' ' + (i + 1));
      return;
    }
    playerNames.push(name);
  }
  
  // Update player names in roundData
  roundData.players.clear();
  playerNames.forEach(name => {
    roundData.addPlayer(name);
  });
  
  if (roundData.previousRankings.length > 0) {
    // Sort players by previous rankings
    const sortedPlayers = roundData.players.getAll().sort((a, b) => {
      const aRank = roundData.previousRankings.indexOf(a.name);
      const bRank = roundData.previousRankings.indexOf(b.name);
      return (aRank === -1 ? roundData.players.length : aRank) - (bRank === -1 ? roundData.players.length : bRank);
    });
    roundData.players.clear();
    sortedPlayers.forEach(player => {
      roundData.players.add(player);
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
        <h4>${getText('courses_setup.label_hole')} ${i + 1}</h4>
        <div class="form-row">
          <div class="form-group">
            <label for="course-par-${i}">${getText('courses_setup.label_par')}:</label>
            <input type="number" id="course-par-${i}" min="1" value="3">
          </div>
          <div class="form-group">
            <label for="course-length-${i}">${getText('courses_setup.label_length')}:</label>
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
    html += `<p><strong>${getText('save_course.label_name')}</strong> ${courseData.name}</p>`;
    roundData.courseName = courseData.name;
  }
  
  html += `<table><tr><th>${getText('courses_setup.label_hole')}</th><th>${getText('courses_setup.label_par')}</th><th>${getText('courses_setup.label_length')}</th></tr>`;
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
        // Clear and load courses
        roundData.courses.clear();
        courseData.courses.forEach((courseInfo, idx) => {
          roundData.addCourse(courseInfo.par, courseInfo.length);
        });
        
        roundData.courseName = courseData.name || '';
        
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
  // Add all courses from pending
  roundData.courses.clear();
  for (let i = 0; i < pendingCourses.length; i++) {
    const par = parseInt(document.getElementById(`course-par-${i}`).value);
    const length = parseInt(document.getElementById(`course-length-${i}`).value);
    roundData.addCourse(par, length);
  }
  
  document.getElementById('courses-setup').style.display = 'none';
  document.getElementById('scoring-section').style.display = 'block';
  document.getElementById('total-courses').textContent = roundData.courses.length;
  
  roundData.currentCourse = 0;
  displayCourse();
}

function displayCourse() {
  const course = roundData.getCurrentCourse();
  if (!course) return;
  
  document.getElementById('current-course').textContent = roundData.currentCourse + 1;
  
  const courseInfo = document.getElementById('course-info');
  courseInfo.innerHTML = `
    <p><strong>${getText('scoring.label_par')}:</strong> ${course.par} | <strong>${getText('scoring.label_length')}:</strong> ${course.length}m</p>
  `;
  
  // Calculate cumulative par for holes played (excluding current hole)
  const cumulativePar = roundData.courses.getTotalPar(roundData.currentCourse);
  
  const scoringTable = document.getElementById('scoring-table');
  let html = `<table><tr><th>${getText('scoring.table_player')}</th><th>${getText('scoring.table_throws')}</th><th>${getText('scoring.table_total')}</th></tr>`;
  
  // Display standings in original player order
  const displayStandings = roundData.getDisplayStandings();
  
  displayStandings.forEach(standing => {
    const playerIdx = standing.index;
    const player = roundData.players.get(playerIdx);
    const score = player.getScore(roundData.currentCourse);
    
    // Calculate cumulative vs par for this player (excluding current hole)
    const cumulativeScore = player.getTotalScore(roundData.currentCourse);
    const cumulativeVsPar = cumulativeScore - cumulativePar;
    const vsParSymbol = cumulativeVsPar > 0 ? '+' : cumulativeVsPar < 0 ? '' : '';
    const playerDisplayName = cumulativeVsPar === 0 
      ? `${player.name} (${getText('common.vs_par_even')})` 
      : `${player.name} (${vsParSymbol}${cumulativeVsPar})`;

    
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
  });
  html += '</table>';
  scoringTable.innerHTML = html;
  
  const nextBtn = document.getElementById('next-btn');
  
  if (roundData.isHalftime()) {
    nextBtn.textContent = getText('scoring.button_halftime');
  } else if (roundData.isFinal()) {
    nextBtn.textContent = getText('scoring.button_results');
  } else {
    nextBtn.textContent = getText('scoring.button_next');
  }
}

function updateScore(playerIdx, courseIdx) {
  const score = parseInt(document.getElementById(`score-${playerIdx}`).value);
  if (score > 0) {
    roundData.setPlayerScore(playerIdx, courseIdx, score);
  }
}

function previousCourse() {
  if (roundData.previousCourse()) {
    displayCourse();
  }
}

function nextCourse() {
  if (roundData.isFinal()) {
    showResults();
  } else if (roundData.isHalftime()) {
    showHalftime();
  } else {
    roundData.nextCourse();
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
  
  // Get final standings and save rankings
  const finalStandings = roundData.getFinalStandings();
  roundData.previousRankings = finalStandings.map(s => s.name);
  
  // Save round to database
  roundData.id = db.saveRound({
    date: roundData.date,
    location: '',
    courseName: roundData.courseName,
    players: roundData.players.getNames(),
    holes: roundData.courses.getAll().map(c => ({ par: c.par, length: c.length })),
    scores: roundData.players.getAll().map(p => p.scores),
    standings: finalStandings.map(s => ({ name: s.name, total: s.total }))
  });
}

function displayStandings(elementId, isFinal = false) {
  // Get standings based on whether it's halftime or final
  const standings = isFinal ? roundData.getFinalStandings() : roundData.getHalftimeStandings();
  const holesToInclude = isFinal ? roundData.courses.length : roundData.currentCourse + 1;
  
  const element = document.getElementById(elementId);
  let html = `<table><tr><th>${getText('results.table_position')}</th><th>${getText('results.table_player')}</th><th>${getText('results.table_total')}</th><th>${getText('results.table_vs_par')}</th></tr>`;
  
  const totalPar = roundData.courses.getTotalPar(holesToInclude);
  
  standings.forEach((player) => {
    const medal = player.position === 1 ? '🥇' : player.position === 2 ? '🥈' : player.position === 3 ? '🥉' : '';
    const vsPar = player.total - totalPar;
    const vsParText = vsPar > 0 ? `+${vsPar}` : vsPar === 0 ? getText('common.vs_par_even') : `${vsPar}`;
    
    html += `<tr><td>${medal} ${player.position}</td><td>${player.name}</td><td>${player.total}</td><td>${vsParText}</td></tr>`;
  });
  
  if (isFinal) {
    html += `<tr><td colspan="4"><strong>${getText('results.label_date')}: ${roundData.date}</strong></td></tr>`;
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
    courses: roundData.courses.getAll().map(c => ({ par: c.par, length: c.length }))
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
    historyContainer.innerHTML = `<p>${getText('history.no_rounds')}</p>`;
    return;
  }
  
  let html = `<table><tr><th>${getText('history.table_date')}</th><th>${getText('history.table_players')}</th><th>${getText('history.table_winner')}</th><th>${getText('history.table_score')}</th><th>${getText('history.table_action')}</th></tr>`;
  
  rounds.forEach(round => {
    const winner = round.standings[0];
    const totalPar = round.holes.reduce((sum, hole) => sum + hole.par, 0);
    const vsParText = winner.total - totalPar > 0 ? `+${winner.total - totalPar}` : 
                      winner.total - totalPar === 0 ? getText('common.vs_par_even') : `${winner.total - totalPar}`;
    
    html += `
      <tr>
        <td>${new Date(round.date).toLocaleDateString()}</td>
        <td>${round.players.join(', ')}</td>
        <td>${winner.name}</td>
        <td>${winner.total} (${vsParText})</td>
        <td><button onclick="viewRoundDetails('${round.id}')">${getText('history.button_view')}</button></td>
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
  html += `<h4>${getText('history.leaderboard')}</h4>`;
  html += `<table><tr><th>${getText('results.table_position')}</th><th>${getText('results.table_player')}</th><th>${getText('results.table_total')}</th><th>${getText('results.table_vs_par')}</th></tr>`;
  
  round.standings.forEach((player, idx) => {
    const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : '';
    const vsPar = player.total - totalPar;
    const vsParText = vsPar > 0 ? `+${vsPar}` : vsPar === 0 ? getText('common.vs_par_even') : `${vsPar}`;
    html += `<tr><td>${medal} ${idx + 1}</td><td>${player.name}</td><td>${player.total}</td><td>${vsParText}</td></tr>`;
  });
  html += '</table>';
  
  // Hole-by-hole breakdown
  html += `<h4>${getText('history.hole_breakdown')}</h4>`;
  html += '<table><tr><th>' + getText('courses_setup.label_hole') + '</th><th>' + getText('courses_setup.label_par') + '</th>';
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
    db.savePlayerTemplate(roundData.players.getNames());
  }
  
  // Show header again
  document.querySelector('header').style.display = 'block';
  
  // Create a new Round instance
  roundData = new Round();
  roundData.previousRankings = currentRankings;
  
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
window.addEventListener('load', async () => {
  await loadTranslations();
  updateLanguageSwitcher();
  updatePageLanguage();
  document.getElementById('round-date').valueAsDate = new Date();
  document.getElementById('course-file').addEventListener('change', handleCourseFileSelect);
  document.getElementById('import-file-input').addEventListener('change', handleImportFile);
});
