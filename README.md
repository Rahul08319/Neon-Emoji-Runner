<div align="center">

# ⚡ Neon Emoji Runner

### A glowing endless-runner built for **YouTube Playables**

[![YouTube Playables](https://img.shields.io/badge/YouTube-Playables%20Ready-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://developers.google.com/youtube/gaming/playables)
[![HTML5](https://img.shields.io/badge/HTML5-Canvas-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![Zero Dependencies](https://img.shields.io/badge/Zero-Dependencies-00ffcc?style=for-the-badge)](#)
[![Made by Rahul Kumar](https://img.shields.io/badge/Made%20by-Rahul%20Kumar-ff00ff?style=for-the-badge)](https://github.com/Rahul08319)

**Dodge • Collect • Survive** the neon streets  
Fully responsive • Touch + Keyboard • Official YouTube Playables SDK

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Neon Visuals** | Animated grid, horizon glow, particle explosions, invincibility pulse |
| **Power-ups** | ⭐ Invincible • 💫 Magnet • 🛡️ Shield |
| **Obstacles** | 🧱 🚧 🚨 💣 ⚡ 🌪️ – ground & flying |
| **Combo System** | Chain dodges & collections for multipliers |
| **Difficulty Ramp** | Speed & spawn rate increase with score |
| **Responsive** | Works on every aspect ratio (9:16 → 32:9) |
| **Controls** | Arrow / WASD / Space + on-screen touch buttons |
| **Audio** | Tiny Web-Audio beeps (respects YouTube mute) |
| **Save** | High-score via YouTube `loadData` / `saveData` + localStorage fallback |
| **Score** | Sends best score through `engagement.sendScore` |

---

## 📺 YouTube Playables Compliance

This game follows the official requirements:

- ✅ SDK loaded first → `https://www.youtube.com/game_api/v1`
- ✅ `ytgame.game.firstFrameReady()` called early
- ✅ `ytgame.game.gameReady()` only when the start screen is interactive
- ✅ `ytgame.system.onPause` / `onResume` fully handled
- ✅ `ytgame.system.isAudioEnabled` + `onAudioEnabledChange`
- ✅ Cloud save: `loadData` awaited **before** any `saveData`
- ✅ Score submitted with `ytgame.engagement.sendScore({ value })`
- ✅ Fully responsive (no orientation lock)
- ✅ Touch + mouse + keyboard
- ✅ No external network calls (except official SDK)
- ✅ Pure HTML/CSS/JS – tiny initial payload
- ✅ **No monetization / no external ads / no tracking**

### Test with the Official Suite

1. Open the [YouTube Playables SDK Test Suite](https://developers.google.com/youtube/gaming/playables/reference/test_suite_guide)
2. Point it at the hosted `index.html` (or a local static server)
3. Verify: firstFrameReady → gameReady → pause/resume → audio mute → score flow

---

## 🚀 Run Locally

```bash
git clone https://github.com/Rahul08319/Neon-Emoji-Runner.git
cd Neon-Emoji-Runner

# any static server
python -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` and hit **PLAY**.

---

## 🎮 How to Play

- **Move** ← → (or A / D / on-screen buttons)
- **Jump** Space / ↑ / W / jump button
- Collect ⭐ 💫 🛡️ for power-ups
- Avoid obstacles – hit one without protection = Game Over
- Build combos for higher scores

---

## 💡 Suggested Future Features (No Monetization)

| Idea | Why it’s cool |
|------|---------------|
| Emoji skins unlock | 🏃 → 🦊 → 🐯 → 🐲 via score milestones |
| Daily challenge seed | Same run for everyone that day |
| Ghost replay | Neon trail of your best run |
| Boss emoji | Occasional giant obstacle with pattern |
| Particle themes | Different particle style per power-up |
| Haptic feedback | Optional vibration on mobile |
| Accessibility | High-contrast + reduced-motion toggle |
| Local top-5 | Per-mode high-score list (still offline) |

All of the above stay inside a single-file, pure-JS constraint and keep the payload tiny.

---

## 📁 Project Structure

```
Neon-Emoji-Runner/
├── index.html      # Complete self-contained game
└── README.md       # This file
```

---

## 👨‍💻 Author

**Rahul Kumar**  
GitHub: [Rahul08319](https://github.com/Rahul08319)  
Email: Rahul08319@gmail.com

---

## 📄 License

MIT – free to play, remix, and ship to YouTube Playables.

---

<div align="center">

**Neon. Glow. Survive.**  
Built for the YouTube Playables era ✨

</div>
