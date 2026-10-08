/** @typedef {'ja'|'en'|'zh'} AppLang */

export const APP_LANGS = /** @type {const} */ (['ja', 'en', 'zh']);

/** @param {string} [lang] @returns {AppLang} */
export function normalizeAppLang(lang) {
  return APP_LANGS.includes(/** @type {AppLang} */ (lang)) ? /** @type {AppLang} */ (lang) : 'ja';
}

/** @param {AppLang} lang @returns {AppLang} */
export function nextAppLang(lang) {
  const i = APP_LANGS.indexOf(normalizeAppLang(lang));
  return APP_LANGS[(i + 1) % APP_LANGS.length];
}

/** @param {AppLang} lang */
export function documentLangTag(lang) {
  const l = normalizeAppLang(lang);
  if (l === 'en') return 'en';
  if (l === 'ja') return 'ja';
  return 'zh-CN';
}

/** English UI literals → Japanese (inline toasts / labels). */
export const INLINE_JA = {
  'Open workspace file': 'ワークスペースファイルを開く',
  Link: 'リンク',
  Screenshot: 'スクリーンショット',
  'No draft': '下書きがありません',
  'Draft gone': '下書きが無効です',
  'Artifact missing': 'ファイルが見つかりません',
  'Download started': 'ダウンロードを開始しました',
  'Preview open failed': 'プレビューを開けませんでした',
  'Need API Key': 'API キーの設定が必要です',
  Clipboard: 'クリップボード',
  Video: '動画',
  'Could not open that page': 'そのページを開けませんでした',
  'Could not jump to that element': '要素へ移動できませんでした',
  'Paw failed — refresh the page': 'パウ選択に失敗しました — ページを更新してください',
  Task: 'タスク',
  'Suggestions after you stop selecting…': '選択終了後に提案を表示します…',
  'Inferring from your selection…': '選択内容から推論中…',
  Running: '実行中',
  Rename: '名前変更',
  'Delete task': 'タスクを削除',
  'Delete this task workspace': 'このタスクワークスペースを削除',
  'Session name': 'セッション名',
  Traj: 'トレース',
  'Task 1': 'タスク 1',
  '(empty reply)': '（空の返答）',
  Stopped: '停止しました',
  'Please clarify': '補足してください',
  'Your answer…': '回答を入力…',
  'Select files first': '先にファイルを選択してください',
  'Could not open preview': 'プレビューを開けませんでした',
  'Removed from workspace': 'ワークスペースから削除しました',
  'No group': 'グループ未選択',
  'Rename group': 'グループ名を変更',
  'Delete group': 'グループを削除',
  'No groups yet': 'グループがありません',
  'New group name': '新しいグループ名',
  Confirm: '確認',
  Delete: '削除',
  Cancel: 'キャンセル',
  'On page': '現在のページ',
  Editor: 'エディター',
  'Artifact preview': '成果物プレビュー',
  'already downloaded': 'ダウンロード済み',
  'Download again': '再ダウンロード',
  'Confirm download': 'ダウンロードを確認',
  Close: '閉じる',
  'No download payload': 'ダウンロードデータがありません',
  'Already in chat attachments': 'すでにチャット添付にあります',
  'Added to chat attachments': 'チャット添付に追加しました',
  'Failed to attach image': '画像の添付に失敗しました',
  'Generated image': '生成した画像',
  'Add to chat': 'チャットに追加',
  Download: 'ダウンロード',
  Done: '完了',
  'Image generation failed': '画像生成に失敗しました',
  'No active task': 'アクティブなタスクがありません',
  'No task': 'タスクがありません',
  'Export failed: ': 'エクスポート失敗: ',
  'Trajectory export disabled in Settings':
    'トレースのエクスポートは無効です — ⚙️ 設定で「開発者：トレースエクスポートを有効」をオンにしてください',
  'Download failed': 'ダウンロード失敗',
  'Download failed: ': 'ダウンロード失敗: ',
  打开工作区文件: 'ワークスペースファイルを開く',
  链接: 'リンク',
  截图: 'スクリーンショット',
  没有草稿: '下書きがありません',
  草稿已失效: '下書きが無効です',
  文件不存在: 'ファイルが見つかりません',
  已开始下载: 'ダウンロードを開始しました',
  预览打开失败: 'プレビューを開けませんでした',
  需配置 Key: 'API キーの設定が必要です',
  剪切板: 'クリップボード',
  视频: '動画',
  无法打开该元素所在页面: 'そのページを開けませんでした',
  无法跳转到该元素: '要素へ移動できませんでした',
  '伸爪失败，请刷新页面后重试': 'パウ選択に失敗しました。ページを更新して再試行してください',
  任务: 'タスク',
  伸爪结束后将生成建议…: 'パウ選択終了後に提案を表示します…',
  正在根据选区推断…: '選択内容から推論中…',
  进行中: '実行中',
  重命名: '名前変更',
  删除任务: 'タスクを削除',
  删除此任务工作区: 'このタスクワークスペースを削除',
  会话名称: 'セッション名',
  轨迹: 'トレース',
  '任务 1': 'タスク 1',
  '（空回复）': '（空の返答）',
  已停止: '停止しました',
  请补充说明: '補足してください',
  '输入您的回答...': '回答を入力…',
  请先勾选工作区文件: '先にファイルを選択してください',
  无法打开预览: 'プレビューを開けませんでした',
  已从工作区删除: 'ワークスペースから削除しました',
  未选择组: 'グループ未選択',
  '重命名 Group': 'グループ名を変更',
  '删除 Group': 'グループを削除',
  '还没有 Group': 'グループがありません',
  '新建 Group 名称': '新しいグループ名',
  请确认: '確認',
  确认: '確認',
  删除: '削除',
  取消: 'キャンセル',
  当前页: '現在のページ',
  编辑器: 'エディター',
  产物预览: '成果物プレビュー',
  已下载: 'ダウンロード済み',
  重新下载: '再ダウンロード',
  确认下载: 'ダウンロードを確認',
  关闭: '閉じる',
  无下载数据: 'ダウンロードデータがありません',
  已在聊天附件中: 'すでにチャット添付にあります',
  已加入聊天附件: 'チャット添付に追加しました',
  加入附件失败: '画像の添付に失敗しました',
  生成的图片: '生成した画像',
  加入附件: 'チャットに追加',
  下载: 'ダウンロード',
  完成: '完了',
  图像生成失败: '画像生成に失敗しました',
  无当前任务: 'アクティブなタスクがありません',
  无任务: 'タスクがありません',
  '**Error:** ': '**エラー:** ',
  '**错误:** ': '**エラー:** ',
  '**Notice:** ': '**お知らせ:** ',
  '**提示:** ': '**お知らせ:** '
};

/**
 * Inline UI copy when no i18n key exists.
 * @param {AppLang} lang
 * @param {string} en
 * @param {string} zh
 */
export function uiText(lang, en, zh) {
  const l = normalizeAppLang(lang);
  if (l === 'en') return en;
  if (l === 'zh') return zh;
  return INLINE_JA[en] ?? INLINE_JA[zh] ?? en;
}

/** @param {AppLang} lang */
export function langToggleLabel(lang) {
  const l = normalizeAppLang(lang);
  if (l === 'ja') return 'EN';
  if (l === 'en') return '中';
  return 'JA';
}

/** @param {AppLang} lang */
export function moreLangButtonLabel(lang) {
  const l = normalizeAppLang(lang);
  if (l === 'ja') return '言語 · 日本語';
  if (l === 'en') return 'Language · EN';
  return '语言 · 中文';
}
