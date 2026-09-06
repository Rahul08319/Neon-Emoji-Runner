<div align="center">

# ⚡ Neon Emoji Arena

### A glowing, high-energy emoji action game built for **YouTube Playables**

[![YouTube Playables](https://img.shields.io/badge/YouTube-Playables-red?style=for-the-badge&logo=youtube)](https://developers.google.com/youtube/gaming/playables)
[![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Made with 💜 by [Rahul Kumar](https://github.com/Rahul08319)**  
`Rahul08319@gmail.com`

---

### 🎮 Play Modes

| Mode | Description |
|------|-------------|
| 🏃 **Run** | Endless neon runner – race to the edge |
| ⚔️ **Fight** | Battle other emojis with strength |
| 🏊 **Swim** | Dive upward through glowing waters |
| 🐕 **Chase** | Escape the pack or turn the tables |
| 💃 **Dance** | Free-flow neon dance arena |
| 🦘 **Jump** | Bounce & leap over obstacles |
| 🌀 **Dodge** | Survive the swirling emoji storm |

---

### ✨ Features

- **Pure Neon Aesthetic** – pulsing glow, particle trails, animated grid
- **7 Unique Modes** – each with different movement & scoring
- **Power-ups** ⭐ Speed · ⚡ Strength
- **Dynamic Obstacles** 🌪️ 💥
- **Touch + Keyboard** (Arrow / WASD)
- **High Score** saved locally + YouTube Playables cloud ready
- **Responsive** – works on any aspect ratio (9:16 → 32:9)
- **YouTube Playables SDK** fully integrated
  - `firstFrameReady()` / `gameReady()`
  - Pause / Resume callbacks
  - Mute support
  - Score submission
- **Zero external assets** (except official SDK) – tiny bundle
- **No monetization code** – clean & ready for certification

---

### 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Rahul08319/Neon-Emoji-Runner.git
cd Neon-Emoji-Runner

# Serve (any static server)
npx serve .
# or
python -m http.server 8000
```

Open `http://localhost:8000` and hit **PLAY**.

---

### 📺 YouTube Playables Ready

This project follows official requirements:

- ✅ SDK loaded first
- ✅ `firstFrameReady` + `gameReady`
- ✅ Pause / Resume / Mute handled
- ✅ Responsive to all aspect ratios
- ✅ No external network calls (except SDK)
- ✅ Relative paths only
- ✅ Touch + mouse support
- ✅ Small pure HTML/JS/Canvas footprint

Test with the official [YouTube Playables SDK Test Suite](https://developers.google.com/youtube/gaming/playables).

---

### 🛠️ Suggested Future Features

| Idea | Why it’s cool |
|------|---------------|
| Combo multiplier | Reward skillful play |
| Skin unlocks | Collect neon skins for 😺 |
| Daily challenge | One shared mode every day |
| Particle trails behind player | Even more neon juice |
| Mini boss emoji every 100 pts | Escalating excitement |
| Local multiplayer (2 cats) | Couch co-op |
| Sound design (optional muteable) | Neon synth + whooshes |
| Achievement badges | “Survived 60s in Dodge” etc. |

---

### 📁 Project Structure

```
Neon-Emoji-Runner/
├── index.html          # Complete self-contained game
├── README.md           # This file
└── (future) assets/    # Optional extra neon skins
```

---

### 📜 License

MIT – free to use, modify, and ship to YouTube Playables.

---

<div align="center">

**Neon. Glow. Play.**  
Built for the YouTube Playables era ✨

</div>
