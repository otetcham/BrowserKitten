/**
 * Shared UI language for Univer Sheets / Docs (classic ribbon).
 * Excel and Word stay on the same memory so switching one follows the other.
 */

const KEY = 'pawwork_office_locale';
const LEGACY_SHEET_KEY = 'pawwork_sheet_locale';

export function officeUiLang() {
  try {
    const s = String(localStorage.getItem(KEY) || localStorage.getItem(LEGACY_SHEET_KEY) || '').toLowerCase();
    if (s === 'en' || s === 'en-us') return 'en';
    if (s === 'ja' || s === 'ja-jp') return 'ja';
    if (s === 'zh' || s === 'zh-cn') return 'zh';
  } catch {
    /* */
  }
  const nav = String(navigator.language || '').toLowerCase();
  if (/^ja/.test(nav)) return 'ja';
  if (/^en/.test(nav)) return 'en';
  return 'ja';
}

export function persistOfficeUiLang(lang) {
  const v = lang === 'en' ? 'en' : lang === 'zh' ? 'zh' : 'ja';
  try {
    localStorage.setItem(KEY, v);
    localStorage.setItem(LEGACY_SHEET_KEY, v);
  } catch {
    /* */
  }
}

export function applyOfficeDocumentLang(lang) {
  try {
    document.documentElement.lang =
      lang === 'en' ? 'en' : lang === 'zh' ? 'zh-CN' : 'ja';
  } catch {
    /* */
  }
}
