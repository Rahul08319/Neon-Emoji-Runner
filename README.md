# 🏃 Neon Emoji Runner

<p align="center">
  <img src="https://img.shields.io/badge/YouTube-Playables%20Ready-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube Playables">
  <img src="https://img.shields.io/badge/HTML5-Pure%20JS-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/No%20Dependencies-Zero%20Build-00ffcc?style=for-the-badge" alt="Pure JS">
  <img src="https://img.shields.io/badge/Made%20by-Rahul%20Kumar-ff00ff?style=for-the-badge" alt="Author">
</p>

<p align="center">
  <b>Dodge • Collect • Survive the Neon Streets</b><br>
  A fast, glowing endless runner built entirely with neon emojis<br>
  Fully responsive • Touch + Keyboard • YouTube Playables certified ready
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Neon Visuals** | Animated grid, glowing horizon, particle bursts, invincibility pulse |
| **Endless Runner** | Increasing difficulty, flying + ground obstacles |
| **Power-Ups** | ⭐ Invincible • 💫 Magnet • 🛡️ Shield |
| **Combo System** | Chain obstacle passes for score multipliers |
| **Touch Controls** | On-screen left / jump / right buttons (auto-hide on desktop) |
| **Keyboard** | Arrow keys or WASD + Space / Up to jump |
| **Audio** | Procedural Web Audio beeps (respects YouTube mute) |
| **Cloud Save** | High score via YouTube `saveData` + localStorage fallback |
| **Responsive** | Works on every aspect ratio (portrait, landscape, ultrawide) |
| **Pause / Resume** | Full platform integration |

---

## 🎮 How to Play

1. Tap **PLAY**
2. Move left / right to dodge obstacles
3. Jump over ground obstacles or under flying ones
4. Collect power-ups for temporary advantages
5. Survive as long as possible and beat your high score!

**Controls**
- **Desktop**: `←` `→` or `A` `D` to move • `Space` / `↑` / `W` to jump
- **Mobile**: On-screen neon buttons

---

## 📺 YouTube Playables Support

This game is built to pass the official YouTube Playables requirements and Test Suite:

| Requirement | Status |
|-------------|--------|
| SDK loaded first (`https://www.youtube.com/game_api/v1`) | ✅ |
| `firstFrameReady()` called early | ✅ |
| `gameReady()` only when interactive | ✅ |
| `onPause` / `onResume` handlers | ✅ |
| `isAudioEnabled` + `onAudioEnabledChange` | ✅ |
| `sendScore` on game over | ✅ |
| `saveData` / `loadData` for high score | ✅ |
| Fully responsive (all aspect ratios) | ✅ |
| Touch + mouse + keyboard | ✅ |
| Relative paths only | ✅ |
| No external network calls (except official SDK) | ✅ |
| Tiny single-file payload | ✅ |
| No monetization / ads / tracking | ✅ |

### How to test in the official suite

1. Go to the [YouTube Playables SDK Test Suite](https://developers.google.com/youtube/gaming/playables/reference/test_suite_guide)
2. Point it at your hosted `index.html` (or local server)
3. Verify the flow: firstFrameReady → gameReady → pause/resume → audio → score

---

## 🚀 Run Locally

```bash
# Any static server works
python -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` in Chrome / Firefox / Edge.

---

## 🛠️ Tech Stack

- Pure **HTML5 + CSS3 + Vanilla JavaScript**
- Web Audio API (no sound files)
- YouTube Playables SDK v1
- Zero dependencies • Zero build step • Instant load

---

## 💡 Suggested Future Features (No Monetization)

Ideas that stay 100% Playables-friendly and keep the payload tiny:

1. **Daily Challenge Seed** – Same obstacle sequence every day so friends can compete
2. **Emoji Skins** – Unlock new runner emojis (🦊 🐯 🐲) via score milestones
3. **Ghost Replay** – Show a neon trail of your best run
4. **More Power-ups** – ⏳ Time Freeze • 🧲 Super Magnet • 💥 Screen Clear
5. **Boss Moments** – Occasional giant emoji that requires a special dodge pattern
6. **Particle Themes** – Different particle styles that change with score
7. **Haptic Feedback** – Optional vibration on mobile when collecting / crashing
8. **Accessibility** – High-contrast mode + reduced-motion toggle
9. **Local Top-5** – Mini leaderboard stored only in saveData
10. **Night / Day Neon Cycle** – Background color subtly shifts over time

All of the above can stay inside a single HTML file.

---

## 📁 Project Structure

```
Neon-Emoji-Runner/
├── index.html          # Complete game (HTML + CSS + JS)
└── README.md           # This file
```

---

## 👨‍💻 Author

**Rahul Kumar**  
GitHub: [Rahul08319](https://github.com/Rahul08319)  
Email: Rahul08319@gmail.com

---

## 📄 License

MIT – play, remix, and ship to YouTube Playables freely.

---

<p align="center">
  <b>Made with 💜 neon energy</b><br>
  <i>Run. Glow. Survive.</i>
</p>
