# 🪩 Neon Emoji Memory

<div align="center">

![Neon](https://img.shields.io/badge/Neon-Theme-ff00ff?style=for-the-badge&logo=css3&logoColor=white)
![YouTube Playables](https://img.shields.io/badge/YouTube-Playables%20Ready-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Game-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Made by Rahul](https://img.shields.io/badge/Made%20by-Rahul%20Kumar-00ffff?style=for-the-badge)

**A beautiful neon memory matching game**  
Match glowing emojis in a cyberpunk atmosphere.

[Play Locally](#-how-to-run) · [YouTube Playables](#-youtube-playables-ready) · [Features](#-features)

</div>

---

## ✨ Features

- **Neon Aesthetic** – Animated floating emoji particles, glowing cards, cyan + magenta neon effects
- **3 Difficulty Levels**
  - Easy → 4×4 (8 pairs)
  - Normal → 6×4 (12 pairs)
  - Hard → 8×4 (16 pairs)
- **Combo System** – Match streaks trigger neon “COMBO xN!” popups
- **Timer + Moves + Best Score** – High scores saved (YouTube cloud save + localStorage fallback)
- **Sound Effects** – Pure Web Audio (no external files)
- **Fully Responsive** – Works on all aspect ratios (portrait, landscape, ultrawide)
- **Touch + Mouse + Keyboard** – Enter / Space to start or restart
- **YouTube Playables Ready** – Full SDK integration

---

## 🎮 How to Play

1. Choose difficulty on the start screen
2. Click / tap two cards to flip them
3. Match the same neon emojis
4. Clear the board as fast as possible with the fewest moves
5. Beat your best score!

---

## 🚀 How to Run

Just open `index.html` in any modern browser.

```bash
# or serve locally
npx serve .
# or
python -m http.server 8080
```

---

## 📺 YouTube Playables Ready

This game fully supports the **YouTube Playables** requirements:

| Requirement                  | Status |
|-----------------------------|--------|
| Loads SDK first             | ✅     |
| `firstFrameReady()`         | ✅     |
| `gameReady()`               | ✅     |
| Pause / Resume              | ✅     |
| Responsive (all ratios)     | ✅     |
| Touch + Mouse               | ✅     |
| Relative paths only         | ✅     |
| No external network calls   | ✅     |
| `saveData` / `loadData`     | ✅     |
| Small single-file bundle    | ✅     |

### Test Suite
You can test it in the official [YouTube Playables Test Suite](https://developers.google.com/youtube/gaming/playables/reference/test_suite).

---

## 🛠 Tech Stack

- Pure **HTML5 + CSS3 + Vanilla JavaScript**
- Canvas particle system
- Web Audio API
- YouTube Playables SDK

No frameworks. No build step. Instant load.

---

## 📁 Project Structure

```
Neon-Emoji-Runner/
├── index.html          # Complete game (single file)
└── README.md           # This file
```

---

## 💡 Suggested Future Features (no monetization)

- Daily challenge mode
- More neon emoji packs (unlockable themes)
- Leaderboard (local only)
- Power-ups (peek, freeze timer)
- Particle trails on card flip
- Dark / Light neon themes toggle
- Accessibility: high-contrast mode + screen reader labels

---

## 👤 Author

**Rahul Kumar**  
GitHub: [Rahul08319](https://github.com/Rahul08319)  
Email: Rahul08319@gmail.com

---

<div align="center">

Made with 💜 neon love

⭐ Star this repo if you enjoy the glow!

</div>
