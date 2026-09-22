/**
 * Neon Emoji Runner - Native Multi-Platform Bridge
 * 100% Zero-Dependency / Direct Native SDKs (No Playgama or 3rd-party intermediaries)
 * 
 * Supports:
 * - YouTube Playables (ytgame)
 * - Facebook Instant Games (FBInstant)
 * - Poki (PokiSDK v2)
 * - CrazyGames (CrazyGames SDK v3)
 * - Yandex Games (YaGames v2)
 * - GameDistribution (gdsdk)
 * - Discord Activities (DiscordSDK)
 * - JioGames (JioGames HTML5 SDK)
 * - Y8 Games (Y8 SDK)
 * - Lagged (LaggedAPI)
 * - Standalone Web / Microsoft Store / PWA
 */

(function(global) {
  class NativePlatformBridge {
    constructor() {
      this.platform = 'web';
      this.isInitialized = false;
      this.audioEnabled = true;
      this.locale = 'en';
      this.yandexSDK = null;
      this.yandexPlayer = null;
      this.pauseCallbacks = [];
      this.resumeCallbacks = [];
      this.audioCallbacks = [];
      
      this.detectPlatform();
      this.setupVisibilityListeners();
    }

    detectPlatform() {
      if (typeof ytgame !== 'undefined') {
        this.platform = 'youtube';
      } else if (typeof FBInstant !== 'undefined') {
        this.platform = 'facebook';
      } else if (typeof PokiSDK !== 'undefined') {
        this.platform = 'poki';
      } else if (typeof window.CrazyGames !== 'undefined') {
        this.platform = 'crazygames';
      } else if (typeof YaGames !== 'undefined') {
        this.platform = 'yandex';
      } else if (typeof gdsdk !== 'undefined') {
        this.platform = 'gamedistribution';
      } else if (typeof DiscordSDK !== 'undefined') {
        this.platform = 'discord';
      } else if (typeof JioGames !== 'undefined') {
        this.platform = 'jiogames';
      } else if (typeof LaggedAPI !== 'undefined') {
        this.platform = 'lagged';
      } else if (typeof Y8 !== 'undefined') {
        this.platform = 'y8';
      } else {
        this.platform = 'web';
      }
    }

    setupVisibilityListeners() {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.triggerPause();
        } else {
          this.triggerResume();
        }
      });
      window.addEventListener('blur', () => this.triggerPause());
      window.addEventListener('focus', () => this.triggerResume());
    }

    async init() {
      try {
        switch (this.platform) {
          case 'youtube':
            if (ytgame.system) {
              if (typeof ytgame.system.isAudioEnabled === 'function') {
                this.audioEnabled = ytgame.system.isAudioEnabled();
              }
              if (typeof ytgame.system.onAudioEnabledChange === 'function') {
                ytgame.system.onAudioEnabledChange((enabled) => {
                  this.audioEnabled = !!enabled;
                  this.triggerAudioChange(this.audioEnabled);
                });
              }
              if (typeof ytgame.system.onPause === 'function') {
                ytgame.system.onPause(() => this.triggerPause());
              }
              if (typeof ytgame.system.onResume === 'function') {
                ytgame.system.onResume(() => this.triggerResume());
              }
              if (typeof ytgame.system.getLanguage === 'function') {
                const lang = await ytgame.system.getLanguage();
                if (lang) this.locale = lang.split('-')[0].toLowerCase();
              }
            }
            break;

          case 'facebook':
            if (typeof FBInstant !== 'undefined') {
              await FBInstant.initializeAsync();
              this.locale = (FBInstant.getLocale() || 'en').split('_')[0].toLowerCase();
            }
            break;

          case 'poki':
            if (typeof PokiSDK !== 'undefined') {
              await PokiSDK.init();
              this.locale = (navigator.language || 'en').split('-')[0].toLowerCase();
            }
            break;

          case 'crazygames':
            if (window.CrazyGames && window.CrazyGames.SDK) {
              await window.CrazyGames.SDK.init();
              this.locale = (navigator.language || 'en').split('-')[0].toLowerCase();
            }
            break;

          case 'yandex':
            if (typeof YaGames !== 'undefined') {
              this.yandexSDK = await YaGames.init();
              this.locale = (this.yandexSDK.environment.i18n.lang || 'en').toLowerCase();
              try {
                this.yandexPlayer = await this.yandexSDK.getPlayer({ scopes: false });
              } catch (_) {}
            }
            break;

          case 'gamedistribution':
            if (typeof gdsdk !== 'undefined') {
              this.locale = (navigator.language || 'en').split('-')[0].toLowerCase();
            }
            break;

          default:
            this.locale = (navigator.language || 'en').split('-')[0].toLowerCase();
            break;
        }
      } catch (err) {
        console.warn(`[NativePlatformBridge] Init warning for ${this.platform}:`, err);
      }
      this.isInitialized = true;
      return this.platform;
    }

    setLoadingProgress(percent) {
      const pct = Math.min(100, Math.max(0, percent));
      try {
        if (this.platform === 'facebook' && typeof FBInstant !== 'undefined') {
          FBInstant.setLoadingProgress(pct);
        } else if (this.platform === 'poki' && typeof PokiSDK !== 'undefined') {
          PokiSDK.gameLoadingProgress({ percentageCompleted: pct / 100 });
        }
      } catch (_) {}
    }

    firstFrameReady() {
      try {
        if (this.platform === 'youtube' && typeof ytgame !== 'undefined' && ytgame.game?.firstFrameReady) {
          ytgame.game.firstFrameReady();
        }
      } catch (_) {}
    }

    async gameReady() {
      try {
        switch (this.platform) {
          case 'youtube':
            if (typeof ytgame !== 'undefined' && ytgame.game?.gameReady) {
              ytgame.game.gameReady();
            }
            break;
          case 'facebook':
            if (typeof FBInstant !== 'undefined') {
              await FBInstant.startGameAsync();
            }
            break;
          case 'poki':
            if (typeof PokiSDK !== 'undefined') {
              PokiSDK.gameLoadingFinished();
            }
            break;
          case 'crazygames':
            if (window.CrazyGames?.SDK?.game?.loadingStop) {
              window.CrazyGames.SDK.game.loadingStop();
            }
            break;
          case 'yandex':
            if (this.yandexSDK?.features?.LoadingAPI?.ready) {
              this.yandexSDK.features.LoadingAPI.ready();
            }
            break;
        }
      } catch (e) {
        console.warn('[NativePlatformBridge] gameReady notice:', e);
      }
    }

    gameplayStart() {
      try {
        if (this.platform === 'poki' && typeof PokiSDK !== 'undefined') {
          PokiSDK.gameplayStart();
        } else if (this.platform === 'crazygames' && window.CrazyGames?.SDK?.game?.gameplayStart) {
          window.CrazyGames.SDK.game.gameplayStart();
        }
      } catch (_) {}
    }

    gameplayStop() {
      try {
        if (this.platform === 'poki' && typeof PokiSDK !== 'undefined') {
          PokiSDK.gameplayStop();
        } else if (this.platform === 'crazygames' && window.CrazyGames?.SDK?.game?.gameplayStop) {
          window.CrazyGames.SDK.game.gameplayStop();
        }
      } catch (_) {}
    }

    async showInterstitialAd() {
      try {
        switch (this.platform) {
          case 'youtube':
            if (typeof ytgame !== 'undefined' && ytgame.ads?.requestInterstitialAd) {
              await ytgame.ads.requestInterstitialAd();
            }
            break;

          case 'poki':
            if (typeof PokiSDK !== 'undefined') {
              await PokiSDK.commercialBreak();
            }
            break;

          case 'crazygames':
            if (window.CrazyGames?.SDK?.ad?.requestAd) {
              await new Promise((resolve) => {
                window.CrazyGames.SDK.ad.requestAd('midgame', {
                  adFinished: resolve,
                  adError: resolve
                });
              });
            }
            break;

          case 'yandex':
            if (this.yandexSDK?.adv?.showFullscreenAdv) {
              await new Promise((resolve) => {
                this.yandexSDK.adv.showFullscreenAdv({
                  callbacks: { onClose: resolve, onError: resolve }
                });
              });
            }
            break;

          case 'facebook':
            if (typeof FBInstant !== 'undefined') {
              const ad = await FBInstant.getInterstitialAdAsync('INT_PLACEMENT_ID');
              await ad.loadAsync();
              await ad.showAsync();
            }
            break;

          case 'gamedistribution':
            if (typeof gdsdk !== 'undefined' && typeof gdsdk.showAd === 'function') {
              await gdsdk.showAd();
            }
            break;

          default:
            break;
        }
      } catch (err) {
        console.warn('[NativePlatformBridge] Interstitial ad handled gracefully:', err);
      }
    }

    async showRewardedAd(rewardId = 'reward-1') {
      try {
        switch (this.platform) {
          case 'youtube':
            if (typeof ytgame !== 'undefined' && ytgame.ads?.requestRewardedAd) {
              return !!(await ytgame.ads.requestRewardedAd(rewardId));
            }
            return true;

          case 'poki':
            if (typeof PokiSDK !== 'undefined') {
              return await new Promise((resolve) => {
                PokiSDK.rewardedBreak().then((success) => resolve(!!success)).catch(() => resolve(false));
              });
            }
            return true;

          case 'crazygames':
            if (window.CrazyGames?.SDK?.ad?.requestAd) {
              return await new Promise((resolve) => {
                window.CrazyGames.SDK.ad.requestAd('rewarded', {
                  adFinished: () => resolve(true),
                  adError: () => resolve(false)
                });
              });
            }
            return true;

          case 'yandex':
            if (this.yandexSDK?.adv?.showRewardedVideo) {
              return await new Promise((resolve) => {
                this.yandexSDK.adv.showRewardedVideo({
                  callbacks: {
                    onRewarded: () => resolve(true),
                    onClose: () => resolve(false),
                    onError: () => resolve(false)
                  }
                });
              });
            }
            return true;

          case 'facebook':
            if (typeof FBInstant !== 'undefined') {
              const ad = await FBInstant.getRewardedVideoAsync('REWARD_PLACEMENT_ID');
              await ad.loadAsync();
              await ad.showAsync();
              return true;
            }
            return true;

          case 'gamedistribution':
            if (typeof gdsdk !== 'undefined' && typeof gdsdk.showAd === 'function') {
              await gdsdk.showAd('rewarded');
              return true;
            }
            return true;

          default:
            return true;
        }
      } catch (err) {
        console.warn('[NativePlatformBridge] Rewarded ad fallback:', err);
        return false;
      }
    }

    async saveData(key, dataObj) {
      const serialized = JSON.stringify(dataObj);
      try {
        switch (this.platform) {
          case 'youtube':
            if (typeof ytgame !== 'undefined' && ytgame.game?.saveData) {
              ytgame.game.saveData(serialized);
            }
            break;

          case 'facebook':
            if (typeof FBInstant !== 'undefined') {
              const payload = {};
              payload[key] = dataObj;
              await FBInstant.player.setDataAsync(payload);
            }
            break;

          case 'yandex':
            if (this.yandexPlayer) {
              const payload = {};
              payload[key] = dataObj;
              await this.yandexPlayer.setData(payload);
            }
            break;

          default:
            break;
        }
        localStorage.setItem(key, serialized);
      } catch (_) {
        try { localStorage.setItem(key, serialized); } catch (e) {}
      }
    }

    async loadData(key) {
      try {
        switch (this.platform) {
          case 'youtube':
            if (typeof ytgame !== 'undefined' && ytgame.game?.loadData) {
              const d = await ytgame.game.loadData();
              if (d) return JSON.parse(d);
            }
            break;

          case 'facebook':
            if (typeof FBInstant !== 'undefined') {
              const data = await FBInstant.player.getDataAsync([key]);
              if (data && data[key]) return data[key];
            }
            break;

          case 'yandex':
            if (this.yandexPlayer) {
              const data = await this.yandexPlayer.getData([key]);
              if (data && data[key]) return data[key];
            }
            break;

          default:
            break;
        }
        const local = localStorage.getItem(key);
        return local ? JSON.parse(local) : null;
      } catch (_) {
        const local = localStorage.getItem(key);
        return local ? JSON.parse(local) : null;
      }
    }

    sendScore(value) {
      const val = Math.floor(value);
      try {
        if (this.platform === 'youtube' && typeof ytgame !== 'undefined' && ytgame.engagement?.sendScore) {
          ytgame.engagement.sendScore({ value: val });
        } else if (this.platform === 'facebook' && typeof FBInstant !== 'undefined') {
          FBInstant.getLeaderboardAsync('NeonHighScores').then(lb => lb.setScoreAsync(val)).catch(() => {});
        } else if (this.platform === 'yandex' && this.yandexSDK?.getLeaderboards) {
          this.yandexSDK.getLeaderboards().then(lb => lb.setLeaderboardScore('highScore', val)).catch(() => {});
        }
      } catch (_) {}
    }

    onPause(cb) { if (typeof cb === 'function') this.pauseCallbacks.push(cb); }
    onResume(cb) { if (typeof cb === 'function') this.resumeCallbacks.push(cb); }
    onAudioChange(cb) { if (typeof cb === 'function') this.audioCallbacks.push(cb); }

    triggerPause() { this.pauseCallbacks.forEach(cb => { try { cb(); } catch(_) {} }); }
    triggerResume() { this.resumeCallbacks.forEach(cb => { try { cb(); } catch(_) {} }); }
    triggerAudioChange(enabled) { this.audioCallbacks.forEach(cb => { try { cb(enabled); } catch(_) {} }); }
  }

  global.NativePlatformBridge = new NativePlatformBridge();
})(typeof window !== 'undefined' ? window : this);
