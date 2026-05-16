# ⛳ Disc Golf Sonntagsrunde - Live Score Tracker

A lightweight, browser-based disc golf score tracking application designed for live gameplay with real-time standings, game history, and data persistence.

## Features

✨ **Live Score Entry** - Track scores for up to 10 players across 1-30 holes  
📊 **Real-Time Standings** - View leaderboard with automatic rankings and vs Par calculation  
🏆 **Game History** - Complete archive of all rounds with detailed breakdowns  
💾 **Data Persistence** - All data saved to browser LocalStorage automatically  
📥 **Export/Import** - Download rounds as JSON or restore from backup  
🎯 **Course Templates** - Save and reuse course layouts  
👥 **Player Templates** - Quick setup by reusing previous player groups  
📱 **Responsive Design** - Works on desktop and mobile devices  
⚡ **Zero Dependencies** - Pure HTML/CSS/JavaScript, no backend required  

## Project Structure

```
Sonntagsrunde/
├── src/
│   ├── index.html          # Main application
│   ├── js/
│   │   └── main.js         # Core logic & data persistence
│   ├── css/
│   │   └── styles.css      # Styling & responsive design
│   ├── components/
│   │   ├── header.html     # Header template
│   │   └── footer.html     # Footer template
│   └── data/
│       ├── sample.json     # Sample data structure
│       └── Default18.json  # Default 18-hole course
├── package.json            # Project metadata
├── .gitignore              # Git configuration
└── README.md               # This file
```

## Quick Start

### Option 1: Direct Browser Access
1. Clone the repository: `git clone <repo-url>`
2. Open `src/index.html` directly in your web browser
3. Start tracking your first round!

### Option 2: Local Server (Optional)
1. Ensure Node.js is installed
2. Run: `npm install`
3. Run: `npm start`
4. Open `http://localhost:8080` in your browser

## How to Use

### Starting a New Round
1. Set the round date
2. Choose number of players (1-10)
3. Select number of holes (1-30)
4. Enter player names
5. Create a new course or load an existing one
6. Begin live score entry

### During the Game
- Enter strokes for each player per hole
- View real-time running totals
- Navigate between holes with Previous/Next buttons
- Halftime standings display automatically at the midpoint
- Color-coded performance (vs Par): Red (over), Green (under), Yellow (even)

### After the Game
- View final leaderboard with rankings and medals (🥇🥈🥉)
- Navigate to Game History for detailed breakdown
- View hole-by-hole performance grid
- Export data as JSON for backup or sharing

## Data Management

### LocalStorage
All data is automatically saved to your browser's LocalStorage:
- Current round scores
- Game history with timestamps
- Saved courses and player templates
- Complete data schema

### Export Data
Click **📥 Export Data** to download all your data as a JSON file:
- Filename: `disc-golf-data_YYYY-MM-DD.json`
- Includes all rounds, courses, and templates
- Portable and shareable

### Import Data
Click **📤 Import Data** to restore from a previously exported JSON file:
- Restores all rounds and templates
- Validates data integrity
- Merges with existing data

## Data Structure

### Round
```json
{
  "id": "round_1234567890",
  "date": "2026-05-16",
  "location": "Local Course",
  "courseName": "Championship 18",
  "players": ["Alice", "Bob", "Charlie"],
  "holes": [
    { "number": 1, "par": 3, "length": 125 }
  ],
  "scores": [
    [3, 4, 2, ...],  // Alice's scores
    [4, 3, 3, ...]   // Bob's scores
  ],
  "standings": [
    { "name": "Alice", "total": 54 },
    { "name": "Bob", "total": 56 }
  ],
  "completedAt": "2026-05-16T14:30:00Z"
}
```

### Course Template
```json
{
  "id": "course_1234567890",
  "name": "Championship 18",
  "holes": [
    { "number": 1, "par": 3, "length": 125 },
    { "number": 2, "par": 4, "length": 185 }
  ],
  "createdAt": "2026-05-16T14:00:00Z"
}
```

## Browser Support

Works on all modern browsers with LocalStorage support:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

### Storage Limits
- LocalStorage: ~10MB per domain
- Sufficient for 100+ rounds with detailed scoring data

## Screenshots & Demo

### Setup Phase
1. Enter round details and player count
2. Input player names
3. Configure course (pars and distances)

### Live Scoring
- Real-time score entry grid
- Running totals per player
- Current hole indicator
- vs Par calculation

### Results & History
- Final leaderboard with rankings
- Hole-by-hole breakdown
- Game history archive
- Export/import functionality

## Technical Details

### Architecture
- **Frontend**: Pure vanilla JavaScript (no frameworks)
- **Storage**: Browser LocalStorage with JSON
- **UI Framework**: Custom CSS with dark theme
- **Data Management**: GameDatabase class for CRUD operations

### Key Functions
- `GameDatabase` - Manages all data persistence
- `displayCourse()` - Renders score entry UI
- `displayGameHistory()` - Shows all past rounds
- `exportGameData()` - Downloads JSON file
- `importData()` - Restores from JSON file

## Performance

- **Load Time**: < 1 second (no network requests)
- **Score Entry**: Instant updates with LocalStorage sync
- **Scaling**: Tested with 10 players × 30 holes = 300 score entries
- **Memory**: ~2-5MB for 100 rounds

## Known Limitations

- Single-device usage (no cloud sync)
- Data lost if browser cache is cleared
- No user authentication (assumes single user per device)
- LocalStorage limited to ~10MB
- Horizontal scrolling for very wide score grids on mobile

## Future Enhancements

- Multi-device synchronization via backend
- Performance analytics and trends
- Tournament mode with multiple rounds
- Handicap system and rating calculations
- Real-time collaborative scoring
- Mobile app versions (iOS/Android)
- Voice input for scores
- Statistical analysis dashboard

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

See LICENSE file for details.

## Support

For issues or questions:
- Create a GitHub issue
- Check existing issues for similar problems
- Provide details about your browser and OS

---

Made with ⛳ for disc golf enthusiasts