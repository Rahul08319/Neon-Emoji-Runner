# 🏃 Neon Emoji Runner

<p align="center">
  <img src="https://img.shields.io/badge/YouTube-Playables%20Ready-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube Playables">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/Pure%20JS-No%20Deps-00ffcc?style=for-the-badge" alt="Pure JS">
  <img src="https://img.shields.io/badge/Made%20by-Rahul%20Kumar-ff00ff?style=for-the-badge" alt="Author">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT">
</p>

<p align="center">
  <strong>A neon-soaked endless runner built for the web<br>and fully certified for YouTube Playables.</strong>
</p>

<p align="center">
  Dodge glowing obstacles • Collect power-ups • Chain combos • Survive the neon streets
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Neon Aesthetic** | Animated cyan grid, glowing horizon, particle bursts, neon trail, screen shake |
| **Smooth Physics** | Gravity jump, responsive left/right movement |
| **Dynamic Obstacles** | 🧱 🚧 🚨 💣 ⚡ 🪨 – ground & flying, speed ramps with score |
| **Power-Ups** | ⭐ / 🛡️ Invincibility • 💫 Magnet • 🚀 Speed boost |
| **Combo System** | Chain successful dodges for bonus points + visual feedback |
| **Touch + Keyboard** | Full mobile buttons + Arrow / WASD / Space |
| **Progressive Difficulty** | Spawn rate & speed scale with score |
| **High Score** | `localStorage` + YouTube `saveData` / `loadData` |
| **Audio** | Procedural Web Audio (jump, collect, hit, combo) – respects platform mute |
| **Pause / Resume** | P / Esc + YouTube `onPause` / `onResume` |
| **Responsive** | Fills viewport on every aspect ratio (9:16, 16:9, 1:1, ultrawide…) |

---

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Move Left | ← or A | ◀ button |
| Move Right | → or D | ▶ button |
| Jump | ↑ / W / Space | ▲ button |
| Pause | P or Esc | — |

---

## 📺 YouTube Playables Compatibility

Built to satisfy the official certification requirements:

- ✅ Loads official SDK `https://www.youtube.com/game_api/v1` **before** game code
- ✅ `firstFrameReady()` after first paint
- ✅ `gameReady()` only when the start screen is interactable
- ✅ Handles `onPause` / `onResume` (stops game loop)
- ✅ Respects `isAudioEnabled` + `onAudioEnabledChange`
- ✅ Optional `sendScore` on game over
- ✅ Cloud save via `saveData` / `loadData` (fallback to localStorage)
- ✅ Fully responsive – works in all required aspect ratios
- ✅ Touch + mouse + keyboard
- ✅ No external network calls (except the official SDK)
- ✅ Tiny single-file payload (~20 KB) – well under 30 MB initial limit
- ✅ No monetization, no ads, no tracking

### Test with the official SDK Test Suite

1. Serve the folder locally (`npx serve .` or `python -m http.server`)
2. Open the [YouTube Playables SDK Test Suite](https://developers.google.com/youtube/gaming/playables/reference/test_suite_guide)
3. Point it at your local `index.html`
4. Verify firstFrameReady → gameReady → pause/resume → audio → score flow

---

## 🚀 Run Locally

```bash
# any static server
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:3000` (or 8000).  
You can also open `index.html` directly in Chrome / Firefox.

---

## 🛠️ Tech Stack

- **HTML5 + CSS3** (neon grid, animations, responsive)
- **Vanilla JavaScript** (ES6+, no frameworks)
- **Web Audio API** (tiny procedural SFX)
- **YouTube Playables SDK v1**
- Zero build step • Zero dependencies

---

## 💡 Suggested Future Features (No Monetization)

Ideas that stay Playables-friendly and keep the payload tiny:

1. **Unlockable runners** – score milestones unlock 🐱 🤖 🦊 etc.
2. **Daily challenge seed** – same obstacle sequence for everyone that day
3. **Ghost runner** – neon trail of your previous best run
4. **More power-ups** – ⏳ Time freeze, 🧲 Super magnet, 💥 Clear screen
5. **Boss emoji** – occasional giant obstacle with special pattern
6. **Theme shifts** – neon palette changes every 500 points
7. **Haptic feedback** – `navigator.vibrate` on jump / hit (mobile)
8. **Achievements** – “Survive 60 s”, “10× combo”, “Collect 30 stars”
9. **Reduced-motion mode** – accessibility toggle
10. **Local top-5 leaderboard** – pure localStorage, no external calls

---

## 📁 Project Structure

```
Neon-Emoji-Runner/
├── index.html      # Complete game (HTML + CSS + JS)
└── README.md       # This file
```

---

## 👨‍💻 Author

**Rahul Kumar**  
GitHub: [Rahul08319](https://github.com/Rahul08319)

---

## 📄 License

MIT License – play, remix, and ship to YouTube Playables freely.

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
