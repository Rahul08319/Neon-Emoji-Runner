/**
 * Build Script: Neon Emoji Runner Multi-Platform Exporter
 * Generates native platform-ready packages without any third-party or Playgama SDK dependencies.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const PLATFORMS_DIR = path.join(ROOT_DIR, 'platforms');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');

if (!fs.existsSync(PLATFORMS_DIR)) {
  fs.mkdirSync(PLATFORMS_DIR, { recursive: true });
}

// Base game template
const baseHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

// Target platforms definition
const PLATFORMS = [
  {
    id: 'youtube-playables',
    name: 'YouTube Playables',
    sdkScript: '<script src="https://www.youtube.com/game_api/v1"></script>',
    extraFiles: {}
  },
  {
    id: 'facebook-instant-games',
    name: 'Facebook Instant Games',
    sdkScript: '<script src="https://connect.facebook.net/en_US/fbinstant.6.3.js"></script>',
    extraFiles: {
      'fbapp-config.json': JSON.stringify({
        "instant_games": {
          "platform_version": "RICH_GAMEPLAY",
          "orientation": "LANDSCAPE",
          "navigation_menu_version": "NAV_FLOATING"
        }
      }, null, 2)
    }
  },
  {
    id: 'poki',
    name: 'Poki',
    sdkScript: '<script src="https://game-cdn.poki.com/scripts/v2/poki-sdk.js"></script>',
    extraFiles: {}
  },
  {
    id: 'crazygames',
    name: 'CrazyGames',
    sdkScript: '<script src="https://sdk.crazygames.com/crazygames-sdk-v3.js"></script>',
    extraFiles: {}
  },
  {
    id: 'yandex-games',
    name: 'Yandex Games',
    sdkScript: '<script src="https://yandex.ru/games/sdk/v2"></script>',
    extraFiles: {}
  },
  {
    id: 'game-distribution',
    name: 'Game Distribution',
    sdkScript: `<script>
  window["GD_OPTIONS"] = {
    "gameId": "neon-emoji-runner",
    "onEvent": function(event) {}
  };
</script>
<script src="https://html5.api.gamedistribution.com/main.min.js"></script>`,
    extraFiles: {}
  },
  {
    id: 'discord-activities',
    name: 'Discord Activities',
    sdkScript: '<script type="module" src="https://cdn.jsdelivr.net/npm/@discord/embedded-app-sdk@1/dist/index.min.js"></script>',
    extraFiles: {}
  },
  {
    id: 'jiogames',
    name: 'JioGames',
    sdkScript: '<script src="https://jiogames.jio.com/sdk/jiogames-v1.js"></script>',
    extraFiles: {}
  },
  {
    id: 'y8',
    name: 'Y8 Games',
    sdkScript: '<script src="https://cdn.y8.com/api/sdk.js"></script>',
    extraFiles: {}
  },
  {
    id: 'lagged',
    name: 'Lagged',
    sdkScript: '<script src="https://lagged.com/api/v2/lagged.js"></script>',
    extraFiles: {}
  },
  {
    id: 'microsoft-store',
    name: 'Microsoft Store PWA',
    sdkScript: '<link rel="manifest" href="manifest.json">',
    extraFiles: {
      'manifest.json': JSON.stringify({
        "name": "Neon Emoji Runner",
        "short_name": "NeonRunner",
        "start_url": "index.html",
        "display": "fullscreen",
        "orientation": "any",
        "background_color": "#050010",
        "theme_color": "#00ffcc",
        "description": "High-octane cyberpunk neon arcade runner."
      }, null, 2)
    }
  },
  {
    id: 'web-standalone',
    name: 'Web Standalone (PWA / Itch.io / HTML5 Portals)',
    sdkScript: '<!-- Clean Standalone Web Build -->',
    extraFiles: {}
  }
];

function buildAll() {
  console.log('⚡ Generating Native Multi-Platform Game Editions (Zero Playgama Dependencies)...');

  PLATFORMS.forEach(platform => {
    const targetDir = path.join(PLATFORMS_DIR, platform.id);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Replace the SDK script tag in index.html specifically for this platform
    let platformHtml = baseHtml.replace(
      /<!-- YouTube Playables SDK v1.*?-->\s*<script src="https:\/\/www\.youtube\.com\/game_api\/v1"><\/script>/s,
      `<!-- Native ${platform.name} SDK Integration -->\n  ${platform.sdkScript}`
    );

    // Ensure title reflects the platform edition
    platformHtml = platformHtml.replace(
      /<title>.*?<\/title>/,
      `<title>Neon Emoji Runner | ${platform.name} Edition</title>`
    );

    // Write index.html for this platform
    fs.writeFileSync(path.join(targetDir, 'index.html'), platformHtml, 'utf8');

    // Write extra platform manifests (e.g. fbapp-config.json, manifest.json)
    for (const [filename, content] of Object.entries(platform.extraFiles)) {
      fs.writeFileSync(path.join(targetDir, filename), content, 'utf8');
    }

    // Copy assets if folder exists
    const targetAssetsDir = path.join(targetDir, 'assets');
    if (!fs.existsSync(targetAssetsDir)) {
      fs.mkdirSync(targetAssetsDir, { recursive: true });
    }
    if (fs.existsSync(ASSETS_DIR)) {
      const assets = fs.readdirSync(ASSETS_DIR);
      assets.forEach(asset => {
        fs.copyFileSync(path.join(ASSETS_DIR, asset), path.join(targetAssetsDir, asset));
      });
    }

    console.log(`  ✅ Generated: ${platform.name} -> platforms/${platform.id}/`);
  });

  // Package each platform into releases/*.zip
  const RELEASES_DIR = path.join(ROOT_DIR, 'releases');
  if (!fs.existsSync(RELEASES_DIR)) {
    fs.mkdirSync(RELEASES_DIR, { recursive: true });
  }

  console.log('\n📦 Compressing platform release packages into releases/ ...');
  const { execSync } = require('child_process');
  PLATFORMS.forEach(platform => {
    const srcDir = path.join(PLATFORMS_DIR, platform.id);
    const destZip = path.join(RELEASES_DIR, `${platform.id}.zip`);
    try {
      execSync(`powershell -Command "Compress-Archive -Path '${srcDir}/*' -DestinationPath '${destZip}' -Force"`);
      console.log(`  🎁 Packaged: releases/${platform.id}.zip`);
    } catch (err) {
      console.warn(`  ⚠️ Could not zip ${platform.id}:`, err.message);
    }
  });

  console.log('\n🎉 Successfully created all native platform builds and release zips without any Playgama dependencies!');
}

buildAll();
