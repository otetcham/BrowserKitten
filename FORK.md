# BrowserKitten fork

Upstream: [Player-YN/BrowserKitten](https://github.com/Player-YN/BrowserKitten)

This fork (`otetcham/BrowserKitten`) customizes:

- **Extension name:** `BrowserKitten` (`manifest.json`)
- **Default UI language:** Japanese (`ja`), with `ja` / `en` / `zh` cycling in the side panel
- **Locale files:** `src/sidepanel/i18nJa.generated.js` (regenerate with `node scripts/zh-to-ja-locale.mjs && node scripts/build-ja-locale.mjs`)

Load unpacked from this folder in Chrome developer mode (`chrome://extensions` → Load unpacked).
