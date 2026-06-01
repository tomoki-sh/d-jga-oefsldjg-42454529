# 三重・伊勢路ドライブ 2026.6.7 — 共有サイト

大阪発・三重/伊勢方面の日帰りドライブ計画を、同行者と共有するための1ページサイトです。
外部ビルド不要の **素のHTML/CSS/JS**。GitHub Pages にそのまま置けば公開できます。

## ファイル構成

```
.
├─ index.html        メインページ（タブUI）
├─ style.css         デザイン（和風・伊勢路テーマ）
├─ app.js            データ＆描画ロジック ← 情報の追加・変更は基本ここ
├─ images/           各場所の写真
├─ itinerary.md      元ネタ: スケジュール
├─ spots.md          元ネタ: スポット
├─ restaurants.md    元ネタ: レストラン
├─ cafes.md          元ネタ: カフェ・雑貨・温浴
├─ packing.md        元ネタ: 持ち物
└─ README.md         このファイル
```

## サイトの機能

- **タブUI**: スケジュール / マップ / スポット / レストラン / カフェ / ルート / 持ち物 / 天気 / 注意
- **マップ**（Leaflet + OpenStreetMap, APIキー不要）: 種別ピン・フィルタ・ルート編集（ドラッグ&ドロップ、番号バッジ、`localStorage`保存）
- **カード**: メイン写真＋サムネ → クリックでライトボックス拡大（← →／ESC）
- **天気**: Open-Meteo の7日予報を自動取得（当日 6/7 が範囲に入ると強調表示）
- **持ち物チェック**: チェック状態は端末に保存

## 情報の編集方法

すべてのデータは [`app.js`](app.js) 冒頭の `DATA` オブジェクトに集約しています。
場所を足す・直すときは、該当の配列（`spots` / `restaurants` / `cafes`）にカードを追加するだけ。

```js
{
  name: "店名／スポット名",
  area: "エリア表記",
  coords: [34.50, 136.79],        // [緯度, 経度]
  category: "confirmed",           // confirmed=確定 / backup=予備 / warning=要確認
  images: ["images/x.jpg"],        // images/ に置いた写真
  links: [{ label: "公式サイト", url: "https://..." }],
  badges: [{ text: "確定", cls: "priority-top" }],
  desc: "30〜80字の短い説明",
  meta: [["営業時間", "..."]],
  notes: "<strong>注意:</strong> ...",
  maps: "Googleマップ検索クエリ"
}
```

座標の取り方のヒント:
- 食べログ店舗ページのHTMLに `"latitude":34.xx,"longitude":136.xx` が埋め込まれている
- OpenStreetMap Nominatim（`https://nominatim.openstreetmap.org/search?format=json&q=...`）で地名検索

---

# GitHub Pages 公開手順（はじめての方向け）

> **GitHub Pages とは?** GitHub のリポジトリに置いた HTML/CSS/JS を、そのまま Web サイトとして無料公開してくれる仕組みです。サーバー契約不要。`https://ユーザー名.github.io/リポジトリ名/` というURLで見られるようになります。

## 公開方針: URL推測困難方式

今回は「検索には出したくないが、URLを知っている二人だけが見られればよい」という方針です。

- **Public リポジトリ**（GitHub Pages を無料で使うため）
- **推測されにくいリポジトリ名**（例: `trip-mie-7yq3k8`）
- **`noindex` メタタグ**（`index.html` に設定済み → 検索エンジンに載りにくい）

> ⚠️ これは「鍵付き」ではなく「見つかりにくくする」方式です。URLを知っていれば誰でも見られます。完全に非公開にしたい場合は、リポジトリを Private にして GitHub Pages を使わず、ローカルやパスワード付きホスティングで共有してください（個人名等を入れていないのはこのためです）。

## 手順 ①: GitHub で空のリポジトリを作る

1. GitHub にログイン →右上「＋」→ **New repository**
2. **Repository name**: 推測されにくい名前（例 `trip-mie-7yq3k8`）。下のコマンドで乱数案を作れます:
   ```bash
   echo "trip-mie-$(openssl rand -hex 3)"
   ```
3. **Public** を選択
4. README/.gitignore/license は **追加しない**（このフォルダに既にあるため）
5. **Create repository**

## 手順 ②: ローカルを Git 化して push

> ⚠️ **iCloud Drive 配下の注意**: このフォルダは iCloud Drive 内にあります。iCloud の同期と `.git` フォルダが競合してまれに不具合が出ることがあります。安全策として、**作業用にローカル（例 `~/Projects/`）へコピーしてから git 操作する**のがおすすめです。
> ```bash
> cp -R "$(pwd)" ~/Projects/trip-mie && cd ~/Projects/trip-mie
> ```
> そのまま iCloud 配下で作業する場合は、push 中に他端末で同フォルダを編集しないよう注意してください。

ターミナルでこのフォルダに移動してから:

```bash
git init
git add .
git commit -m "三重・伊勢路ドライブ 共有サイト 初版"
git branch -M main
# ↓ URL は手順①で作ったものに置き換え（HTTPS の例）
git remote add origin https://github.com/ユーザー名/trip-mie-7yq3k8.git
git push -u origin main
```

> 初回 push 時に認証を求められます。HTTPS なら **Personal Access Token**（GitHub → Settings → Developer settings → Tokens）をパスワード代わりに入力します。SSH 鍵を設定済みなら `git@github.com:ユーザー名/リポジトリ名.git` 形式でもOK。

## 手順 ③: GitHub Pages を有効化

1. リポジトリの **Settings** → 左メニュー **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / フォルダ `/ (root)` → **Save**
4. 1〜2分待つと、上部に公開URLが表示されます:

```
https://ユーザー名.github.io/trip-mie-7yq3k8/
```

このURLを同行者に共有すれば完成です（スマホでそのまま開けます）。

## 手順 ④: 内容を更新したいとき

`app.js` などを編集したら、同じフォルダで:

```bash
git add .
git commit -m "スポットを追加"
git push
```

push から数十秒〜数分で公開サイトに反映されます。

---

# 二端末運用ルール（Mac ⇄ iPhone）

このフォルダは **iCloud Drive 上に置いたまま、Mac 側の作業コピー**として使います。
**正本（バックアップ・公開・AI修正の基準）は GitHub** です。iPhone では **Working Copy** アプリで
GitHub から pull し、同じ iCloud Drive のフォルダへ反映する運用を想定しています。

> ⚠️ iCloud 同期と Git は別の仕組みです。**二重同期による競合**を避けるため、
> 「どの端末が最新を持っているか」を常に Git（commit/push/pull）で一本化します。
> iCloud の自動同期に頼らず、端末切替の前後で必ず Git 操作を挟むのがコツです。

## 黄金ルール

1. **端末を切り替える前に、必ず `git status` を確認する**（未コミットの変更がないか）。
2. **Mac で作業したら → `commit` して `push` してから** iPhone 作業に移る。
3. **iPhone で AI 修正や PR merge をしたら → Working Copy で `pull`** し、iCloud Drive のフォルダへ反映する。
4. **Mac に戻ったら → まず `git status`、必要に応じて `git pull`** してから作業を始める。
5. **未コミットの変更がある状態で、別端末から上書きしない**（競合・消失の元）。
6. **公開してはいけない情報（予約番号・個人情報・詳細住所・私的メモ）は repo に入れない**。
   → `private/` フォルダや `*.local.md` に置けば `.gitignore` で除外されます。

## Mac での1サイクル（例）

```bash
git status            # ① まず状態確認
git pull              # ② リモートが進んでいれば取り込む
# … 編集 …
git add .
git commit -m "内容を更新"
git push              # ③ iPhoneに移る前に必ず push
```

## iPhone（Working Copy）での1サイクル（例）

1. Working Copy でリポジトリを開き **Pull**（最新を取得）
2. 編集 / AI修正 / PR merge
3. **Commit → Push**
4. 必要なら Working Copy の同期先（iCloud Drive の本フォルダ）へ反映

> 競合が出たら、慌てて上書きせず `git status` / `git stash` で退避してから `git pull` し、
> 差分を確認してマージしてください。

---

## よくあるつまずき

| 症状 | 対処 |
|---|---|
| ページが 404 | Pages の Branch が `main` / `(root)` か確認。反映に数分かかることも |
| 画像が出ない | `images/` をコミットし忘れ。`git status` で確認して `git add images` |
| 地図が出ない | ネット接続を確認（Leaflet/タイルはCDN・オンライン必須） |
| 天気が出ない | Open-Meteo にオンライン接続が必要。圏外では表示されません |
| 検索に出てしまう | `noindex` 済みだが完全防止は不可。URL自体を限られた相手にだけ共有 |

## クレジット

- 地図: © OpenStreetMap contributors（タイル: openstreetmap.org）
- 写真: Wikimedia Commons 等（各ファイルの出典ライセンスに従う）
- ライブラリ: Leaflet 1.9.4 / SortableJS 1.15.2 / Open-Meteo / Google Fonts（CDN）
