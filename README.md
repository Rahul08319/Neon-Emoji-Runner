# 🏃 Neon Emoji Runner

<p align="center">
  <img src="https://img.shields.io/badge/YouTube-Playables%20Ready-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube Playables">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT">
</p>

<p align="center">
  <strong>A sleek, neon-soaked endless runner built for the web and fully compatible with YouTube Playables.</strong>
</p>

<p align="center">
  Dodge glowing obstacles • Collect power-ups • Chain combos • Survive the neon streets
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Neon Aesthetic** | Animated cyan grid, horizon glow, particle bursts, pulsing invincibility |
| **Smooth Physics** | Gravity-based jumping, responsive left/right movement |
| **Dynamic Obstacles** | 🧱 🚧 🚨 💣 ⚡ – ground & flying variants that speed up over time |
| **Power-Ups** | ⭐ Invincibility / Shield • 💫 Magnet – pull nearby power-ups |
| **Combo System** | Chain successful dodges for bonus points |
| **Touch + Keyboard** | Full mobile touch controls + Arrow keys / WASD / Space |
| **Progressive Difficulty** | Obstacle speed & spawn rate scale with score |
| **High Score** | Persists via `localStorage` + YouTube Playables `saveData` |
| **Audio** | Procedural Web Audio tones (jump, collect, hit, combo) – respects platform mute |
| **Pause / Resume** | Keyboard (P / Esc) + YouTube platform pause/resume callbacks |
| **Responsive** | Works across all aspect ratios (9:16, 16:9, 1:1, ultrawide, etc.) |

---

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Move Left | ← or A | ◀ button |
| Move Right | → or D | ▶ button |
| Jump | ↑ / W / Space | ▲ button |
| Pause | P or Esc | — |

---

## 🚀 Quick Start

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. Click **PLAY** and start running!

No build step, no dependencies – pure HTML + CSS + JavaScript.

---

## 📺 YouTube Playables Compatibility

This game is built to pass the YouTube Playables certification requirements:

- ✅ Loads the official Playables SDK (`game_api/v1`) before game code
- ✅ Calls `firstFrameReady()` and `gameReady()` correctly
- ✅ Respects `onPause` / `onResume`
- ✅ Respects `isAudioEnabled` / `onAudioEnabledChange`
- ✅ Uses only standard web APIs (no external network calls)
- ✅ Responsive across all required aspect ratios
- ✅ Maintains state on window resize
- ✅ Touch + mouse/keyboard input
- ✅ Small single-file footprint (well under size limits)
- ✅ High score via `saveData` / `loadData` when available
- ✅ Optional `sendScore` on game over

### Testing with the Playables SDK Test Suite

1. Go to the [YouTube Playables SDK Test Suite](https://developers.google.com/youtube/gaming/playables/reference/test_suite_guide)
2. Serve this folder locally (e.g. `npx serve .` or any static server)
3. Point the Test Suite at your local `index.html`
4. Verify firstFrameReady, gameReady, pause/resume, audio, and scoring

---

## 🛠️ Project Structure

```
Neon-Emoji-Runner/
├── index.html      # Complete game (HTML + CSS + JS)
└── README.md       # This file
```

---

## 💡 Future Feature Ideas (No Monetization)

Here are cool ideas you can add next:

- **Multiple characters** – unlock different emoji runners (cat, robot, alien…)
- **Daily challenge seed** – same obstacle sequence for everyone that day
- **Ghost runner** – race against your own previous best run
- **Neon trails** – particle trail that follows the player
- **Weather / zones** – rain, glitch zones, speed boost sections
- **Achievements** – “Survive 60s”, “10x Combo”, “Collect 50 stars”
- **Simple level themes** – switch neon color palette every 500 points
- **Haptic feedback** – `navigator.vibrate` on mobile for jumps & hits
- **Offline PWA** – add a service worker so it works without network
- **Replay system** – record inputs and let players share short runs

---

## 👨‍💻 Author

**Rahul Kumar**  
GitHub: [Rahul08319](https://github.com/Rahul08319)

---

## 📄 License

MIT License – feel free to use, modify, and share.

```
MIT License

Copyright (c) 2026 Rahul Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<p align="center">
  <strong>Stay neon. Keep running.</strong> 🏃‍♂️💨
</p>
