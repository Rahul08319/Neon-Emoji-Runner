# 🌟 Neon Emoji Arena

<p align="center">
  <img src="https://img.shields.io/badge/YouTube-Playables%20Ready-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube Playables">
  <img src="https://img.shields.io/badge/HTML5-Canvas-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/No%20Dependencies-Pure%20JS-00ffcc?style=for-the-badge" alt="Pure JS">
  <img src="https://img.shields.io/badge/Made%20by-Rahul%20Kumar-ff00ff?style=for-the-badge" alt="Author">
</p>

<p align="center">
  <b>A neon-soaked emoji action arena</b><br>
  Control 😺 • Fight • Race • Dance • Survive<br>
  Fully responsive • Touch + Keyboard • YouTube Playables compatible
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **9 Game Modes** | Run, Fight, Swim, Chase, Dance, Jump, Battle Royale, Collect, Dodge |
| **Neon Visuals** | Cycling neon backgrounds, glowing trails, particle explosions, pulsing emojis |
| **Power-Ups** | ⭐ Speed • ⚡ Strength • 💖 Heal • 🌀 Slow-mo |
| **Obstacles** | 🌪️ Tornado & 💥 Boom that move in sinusoidal patterns |
| **Combo System** | Chain actions for multiplier scoring |
| **Levels** | Difficulty ramps every 60 points |
| **Responsive** | Works on any aspect ratio (portrait & landscape) |
| **Controls** | Arrow keys / WASD + on-screen touch buttons |
| **Audio** | Lightweight Web Audio beeps (respects YouTube mute) |
| **Save** | High score saved via YouTube cloud save (or localStorage fallback) |

---

## 🎮 How to Play

1. Click **START GAME**
2. Choose a mode (or hit **RANDOM**)
3. Move 😺 with **Arrow keys / WASD** or the on-screen buttons
4. Complete the objective of the current mode
5. Collect power-ups, avoid obstacles, build combos!

### Mode Goals

- **🏃 Run** – Reach the right edge
- **⚔️ Fight** – Touch weaker enemies to defeat them
- **🏊 Swim** – Reach the top of the screen
- **😱 Chase** – Make the chasers miss you
- **💃 Dance** – Keep moving for continuous points
- **🦘 Jump** – Run right while dodging dangers
- **👑 Battle** – Defeat everyone (strength matters)
- **💎 Collect** – Gather all the gems
- **🌀 Dodge** – Survive chaotic movement patterns

---

## 📺 YouTube Playables Support

This game is built to satisfy the official YouTube Playables requirements:

- ✅ Loads official SDK: `https://www.youtube.com/game_api/v1`
- ✅ Calls `firstFrameReady()` early
- ✅ Calls `gameReady()` only when the player can interact
- ✅ Handles `onPause` / `onResume`
- ✅ Respects `isAudioEnabled` + `onAudioEnabledChange`
- ✅ Sends score via `sendScore`
- ✅ Saves progress with `saveData` / `loadData`
- ✅ Fully responsive (all aspect ratios)
- ✅ Touch + mouse + keyboard
- ✅ No external network calls (except the official SDK)
- ✅ Pure Canvas + Vanilla JS (tiny initial payload ~30 KB)
- ✅ No monetization / no external ads / no tracking

### Test Suite

1. Open the [YouTube Playables SDK Test Suite](https://developers.google.com/youtube/gaming/playables/reference/test_suite_guide)
2. Point it at your hosted `index.html` (or local server)
3. Verify firstFrameReady → gameReady → pause/resume → audio → score flow

---

## 🚀 Run Locally

```bash
# Simple static server
python -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a modern browser (Chrome / Firefox recommended).

---

## 🛠️ Tech Stack

- **HTML5 Canvas** (2D)
- **Vanilla JavaScript** (ES6+)
- **Web Audio API** (tiny procedural SFX)
- **YouTube Playables SDK v1**
- Zero build step • Zero dependencies

---

## 💡 Suggested Future Features (No Monetization)

Want to make it even cooler? Here are ideas that fit the neon emoji theme and stay Playables-friendly:

1. **Emoji Evolution** – Collect enough points to evolve 😺 → 😸 → 😻 with new abilities
2. **Daily Challenge Seed** – Same random seed every day so friends can compete
3. **Replay Ghost** – Show a neon trail of your best run in the same mode
4. **More Power-ups** – 🛡️ Shield, 🧲 Magnet, ⏳ Time Freeze
5. **Boss Emoji** – Occasional giant emoji with special attack patterns
6. **Skin Unlock** – Unlock new player emojis (🦊 🐯 🐲) via score milestones
7. **Particle Themes** – Different particle styles per mode (bubbles in Swim, sparks in Fight)
8. **Haptic Feedback** – Optional vibration on mobile when collecting / hitting
9. **Accessibility** – High-contrast mode + reduced motion toggle
10. **Mini Leaderboard** – Local top-5 scores per mode (still no external calls)

All of the above can stay inside the single-file / pure-JS constraint and keep the payload tiny.

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

---

## 📄 License

MIT – feel free to play, remix, and ship to YouTube Playables.

---

<p align="center">
  <b>Made with 💜 neon energy</b><br>
  <i>Control the cat. Rule the arena.</i>
</p>
