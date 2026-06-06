/* =========================================================================
   三重・伊勢路ドライブ 2026.6.7  ―  データ & レンダリング
   情報の追加・変更は基本このファイルの DATA を編集すればOK。
   ========================================================================= */

/* ---------- 定数 ---------- */
const TYPE_LABELS = { spot: "スポット", restaurant: "レストラン", cafe: "カフェ" };
const TYPE_ICONS  = { spot: "🌿", restaurant: "🍽", cafe: "☕" };
const CAT_LABELS  = { confirmed: "確定", backup: "予備", warning: "要確認" };

/* ---------- データ ---------- */
const DATA = {
  /* === スポット === */
  spots: [
    {
      name: "二見興玉神社・夫婦岩", area: "伊勢市二見町 / 海辺",
      coords: [34.5083, 136.7888], category: "backup",
      images: ["images/meotoiwa.jpg", "images/meotoiwa_2.jpg", "images/meotoiwa_3.jpg"],
      links: [{ label: "観光情報", url: "https://futamiokitamajinja.or.jp/" }],
      badges: [{ text: "海辺散歩", cls: "priority-alt" }, { text: "未確定", cls: "priority-alt" }],
      desc: "海辺・夫婦岩・神社・景色がそろう本命寄り道。ロマンチックだが重すぎず、海辺散歩からゆったり始められる。",
      meta: [["参拝", "境内自由"], ["所要", "30〜45分の散歩"]],
      notes: "<strong>メモ:</strong> 晴れならしっかり、雨なら短めに。海風の上着があると安心。",
      maps: "二見興玉神社 夫婦岩"
    },
    {
      name: "伊勢シーパラダイス", area: "伊勢市二見町 / 夫婦岩めおと横丁併設",
      coords: [34.5074, 136.7913], category: "backup",
      images: ["images/seaparadise.jpg"],
      links: [{ label: "公式サイト", url: "https://ise-seaparadise.com/" }],
      badges: [{ text: "当日判断", cls: "priority-alt" }, { text: "水族館", cls: "priority-alt" }],
      desc: "アザラシやセイウチとの距離が近い「ふれあい」が名物の水族館。1〜1.5時間で軽く楽しめる。",
      meta: [["所要", "1〜1.5時間"], ["相性", "二見とセットにしやすい"]],
      notes: "<strong>注意:</strong> VISONと両方入れると忙しめ。時間・疲れ次第で外してOK。",
      maps: "伊勢シーパラダイス"
    },
    {
      name: "伊勢夫婦岩めおと横丁", area: "伊勢市二見町 / シーパラダイス併設",
      coords: [34.5076, 136.7910], category: "backup",
      images: ["images/meotoyokocho.jpg"],
      links: [{ label: "公式サイト", url: "https://meotoyokocho.jp/" }],
      badges: [{ text: "休憩・お土産", cls: "priority-alt" }],
      desc: "飲食・お土産・休憩スポット。二見散策やランチ・軽食のハブに便利。",
      meta: [["用途", "ランチ / 軽食 / お土産"]],
      notes: "",
      maps: "伊勢夫婦岩めおと横丁"
    },
    {
      name: "伊勢神宮（内宮）", area: "伊勢市宇治館町 / 神社",
      coords: [34.4569, 136.7230], category: "backup",
      images: ["images/isejingu.jpg", "images/isejingu_2.jpg"],
      links: [{ label: "公式サイト", url: "https://www.isejingu.or.jp/" }],
      badges: [{ text: "伊勢の中心", cls: "priority-alt" }],
      desc: "天照大御神を祀る日本有数の神社。五十鈴川と杜に包まれた参道が清々しい。おかげ横丁とセットで。",
      meta: [["所要", "1〜1.5時間"], ["参拝", "境内自由"]],
      notes: "<strong>メモ:</strong> 内宮はおかげ横丁・おはらい町と隣接。二見からは車で約20分。",
      maps: "伊勢神宮 内宮"
    },
    {
      name: "おかげ横丁", area: "伊勢市宇治中之切町 / おはらい町",
      coords: [34.4624, 136.7229], category: "backup",
      images: ["images/okage.jpg", "images/okage_2.jpg"],
      links: [{ label: "公式サイト", url: "https://www.okageyokocho.com/" }],
      badges: [{ text: "食べ歩き・散策", cls: "priority-alt" }],
      desc: "内宮門前のおはらい町にある江戸〜明治の町並み再現エリア。食べ歩き・お土産・甘味で散策が楽しい。",
      meta: [["所要", "1時間程度"], ["名物", "赤福・伊勢うどん・食べ歩き"]],
      notes: "<strong>メモ:</strong> 内宮参拝とセットで。人気エリアなので人混みは多め。",
      maps: "おかげ横丁 伊勢"
    },
    {
      name: "瀧原宮", area: "度会郡大紀町 / 森の参道",
      coords: [34.3670, 136.4242], category: "backup",
      images: ["images/takihara.jpg", "images/takihara_2.jpg", "images/takihara_3.jpg"],
      links: [{ label: "伊勢神宮（別宮）", url: "https://www.isejingu.or.jp/about/bekku/" }],
      badges: [{ text: "ゆったり版向き", cls: "priority-alt" }],
      desc: "「遥宮（とおのみや）」と呼ばれる伊勢神宮の別宮。森の参道が美しく空気が良い。人混み少なめ。",
      meta: [["所要", "1時間程度"], ["参拝", "境内自由"]],
      notes: "<strong>メモ:</strong> 静かめの場所なので長居しすぎない。VISONから足を伸ばす形。",
      maps: "瀧原宮 大紀町"
    },
    {
      name: "東海道関宿", area: "亀山市関町 / 道中",
      coords: [34.8526, 136.3913], category: "backup",
      images: ["images/sekijuku.jpg", "images/sekijuku_2.jpg"],
      links: [{ label: "亀山市観光", url: "https://kameyama-kanko.com/" }],
      badges: [{ text: "レトロ散策", cls: "priority-alt" }],
      desc: "東海道五十三次の宿場町。古い町並みが残り、レトロ散策・写真・カフェ休憩に。",
      meta: [["所要", "1時間程度"], ["相性", "道中に1か所寄りたいとき"]],
      notes: "<strong>メモ:</strong> 大阪→VISONの道中で寄りやすい。海辺の二見の方が優先度は高め。",
      maps: "東海道関宿"
    },
    {
      name: "朝熊山頂展望台", area: "伊勢志摩スカイライン / 朝熊岳",
      coords: [34.4530, 136.7833], category: "backup",
      images: ["images/asama.jpg", "images/asama_2.jpg"],
      links: [{ label: "伊勢志摩スカイライン", url: "https://www.iseshima-skyline.com/" }],
      badges: [{ text: "絶景", cls: "priority-alt" }],
      desc: "伊勢湾を見渡す絶景スポット。海と山の眺めが良く、天空のポストや足湯も。",
      meta: [["所要", "30〜45分"], ["注意", "スカイラインは有料道路"]],
      notes: "<strong>注意:</strong> 二見方面に行くなら候補。詰め込みになりやすいので時間に余裕があれば。",
      maps: "朝熊山頂展望台 伊勢志摩スカイライン"
    },
    {
      name: "青山高原", area: "津市・伊賀市境 / 高原",
      coords: [34.6810, 136.2640], category: "backup",
      images: ["images/aoyama.jpg", "images/aoyama_2.jpg"],
      links: [{ label: "青山高原観光", url: "https://aoyamakogen.jp/" }],
      badges: [{ text: "優先度低", cls: "priority-alt" }],
      desc: "風車と高原の絶景ドライブ。晴れた日向き。",
      meta: [["相性", "晴天の絶景ドライブ"]],
      notes: "<strong>メモ:</strong> VISON・二見と組み合わせると移動増。今回は優先度低め。",
      maps: "青山高原 風車"
    },
    {
      name: "赤目四十八滝", area: "名張市赤目町 / 渓谷",
      coords: [34.5665, 136.0841], category: "warning",
      images: ["images/akame.jpg", "images/akame_2.jpg"],
      links: [{ label: "赤目四十八滝", url: "https://www.akame48taki.com/" }],
      badges: [{ text: "歩く量多め", cls: "priority-warn" }],
      desc: "渓谷の滝めぐり。自然が豊かだが歩く量が多い。",
      meta: [["注意", "往復で2〜3時間歩く"]],
      notes: "<strong>注意:</strong> 良い場所だが同日に入れると詰め込みになるため今回は見送り候補。",
      maps: "赤目四十八滝"
    },
    {
      name: "三井アウトレットパーク 滋賀竜王", area: "滋賀県竜王町 / アウトレット",
      coords: [35.0583, 136.0990], category: "backup",
      images: ["images/ryuo.jpg", "images/ryuo_2.jpg"],
      links: [{ label: "公式サイト", url: "https://mitsui-shopping-park.com/mop/shiga/" }],
      badges: [{ text: "買い物", cls: "priority-alt" }, { text: "ルート外", cls: "priority-alt" }],
      desc: "約240店舗の大型アウトレット。ファッション・雑貨の買い物に。名神・新名神からアクセスしやすい。",
      meta: [["所要", "1.5〜3時間"], ["注意", "滋賀県（伊勢方面とは別方向）"]],
      notes: "<strong>注意:</strong> 三重の二見・VISONからは離れた滋賀。立ち寄るなら往復ルートの組み直しが必要。",
      maps: "三井アウトレットパーク 滋賀竜王"
    }
  ],

  /* === レストラン === */
  restaurants: [
    {
      name: "松阪まるよし 鎌田本店", area: "松阪市鎌田町 / 締めのディナー",
      coords: [34.5790, 136.5360], category: "backup",
      images: ["images/matsusaka.jpg", "images/matsusaka_2.jpg"],
      links: [{ label: "公式サイト", url: "https://www.matsusakaushi.co.jp/" }],
      badges: [{ text: "ディナー候補", cls: "priority-alt" }, { text: "未確定", cls: "priority-alt" }],
      desc: "松阪牛の名店。すき焼き・焼肉・ステーキ。三重ドライブの締めに特別感が出る。",
      meta: [["想定", "17:45〜19:00 ディナー"], ["予約", "週末は予約推奨"]],
      notes: "<strong>メモ:</strong> 夕食候補（未確定）。VISON外に出してメリハリを付ける案。",
      maps: "松阪まるよし 鎌田本店"
    },
    {
      name: "二見・めおと横丁ランチ", area: "伊勢市二見町 / 軽めランチ",
      coords: [34.5078, 136.7908], category: "backup",
      images: ["images/meotoyokocho.jpg"],
      links: [{ label: "めおと横丁", url: "https://meotoyokocho.jp/" }],
      badges: [{ text: "軽めランチ", cls: "priority-alt" }],
      desc: "海鮮・和食・軽食。二見散策とセットで軽めランチに。後半に余白を残せる。",
      meta: [["想定", "12:15 ごろ"]],
      notes: "",
      maps: "伊勢夫婦岩めおと横丁 ランチ"
    },
    {
      name: "いせもん本店", area: "津市 / 日本料理（ランチ選択①）",
      coords: [34.7331, 136.5122], category: "backup",
      images: ["images/isemon.jpg"],
      links: [{ label: "食べログ", url: "https://tabelog.com/mie/A2401/A240101/24001833/" }],
      ratings: { tabelog: "3.50" },
      badges: [{ text: "ランチ候補", cls: "priority-top" }, { text: "松阪牛", cls: "priority-alt" }],
      desc: "名物は松阪牛のレアステーキ重。津で味わう、贅沢な松阪牛ランチ。",
      meta: [["名物", "松阪牛のレアステーキ重"], ["立地", "津市（伊勢道沿い・往路で寄りやすい）"]],
      notes: "<strong>ランチ:</strong> 4店からの選択式。松阪牛をしっかり食べたいとき。",
      maps: "いせもん本店 津"
    },
    {
      name: "れんが", area: "津市南が丘 / ハンバーグ（ランチ選択②）",
      coords: [34.6904, 136.5134], category: "backup",
      images: ["images/renga.jpg"],
      links: [{ label: "食べログ", url: "https://tabelog.com/mie/A2401/A240101/24001367/" }],
      ratings: { tabelog: "3.43" },
      badges: [{ text: "ランチ候補", cls: "priority-top" }, { text: "松阪牛", cls: "priority-alt" }],
      desc: "松阪牛ハンバーグが名物。カジュアルに松阪牛を楽しめる、重すぎないランチ。",
      meta: [["名物", "松阪牛ハンバーグ"], ["立地", "津市南が丘（伊勢道沿い）"]],
      notes: "<strong>ランチ:</strong> 4店からの選択式。夜も松阪牛なら軽めのこちらも◎。",
      maps: "れんが 津 南が丘 ハンバーグ"
    },
    {
      name: "漣（さざなみ）伊勢店", area: "伊勢市 / 食堂（ランチ選択③）",
      coords: [34.4953, 136.7202], category: "backup",
      images: ["images/sazanami.jpg"],
      links: [{ label: "食べログ", url: "https://tabelog.com/mie/A2403/A240301/24001215/" }],
      ratings: { tabelog: "3.66" },
      badges: [{ text: "ランチ候補", cls: "priority-top" }, { text: "二見に近い", cls: "priority-alt" }],
      desc: "伊勢名物のジャンボエビフライが看板。二見エリアに近く、散策とつなげやすい。",
      meta: [["名物", "ジャンボエビフライ"], ["立地", "伊勢市（二見寄り）"]],
      notes: "<strong>ランチ:</strong> 4店からの選択式。二見の海辺とセットにしやすい。",
      maps: "漣 伊勢店 エビフライ"
    },
    {
      name: "うなふじ支店", area: "津市河芸 / うなぎ（ランチ選択④）",
      coords: [34.7983, 136.5544], category: "backup",
      images: ["images/unafuji.jpg"],
      links: [{ label: "食べログ", url: "https://tabelog.com/mie/A2401/A240101/24000358/" }],
      ratings: { tabelog: "3.53" },
      badges: [{ text: "ランチ候補", cls: "priority-top" }, { text: "うなぎ", cls: "priority-alt" }],
      desc: "ふっくら焼き上げるうなぎが名物。津で味わう、特別感のあるランチ。",
      meta: [["名物", "うなぎ"], ["立地", "津市河芸（伊勢道沿い・往路で寄りやすい）"]],
      notes: "<strong>ランチ:</strong> 4店からの選択式。あっさり和の選択肢。",
      maps: "うなふじ支店 津 河芸 うなぎ"
    },
    {
      name: "笠庵 賛否両論", area: "VISON / 和食",
      coords: [34.4586, 136.5144], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "VISON内", cls: "priority-alt" }],
      desc: "和食ランチ候補。落ち着いた和の献立で会話もしやすい。",
      meta: [["場所", "VISON 和ヴィソン"]],
      notes: "", maps: "笠庵 賛否両論 VISON"
    },
    {
      name: "NOUNIYELL（ノウニエール）", area: "VISON / 農園レストラン",
      coords: [34.4590, 136.5150], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "VISON内", cls: "priority-alt" }],
      desc: "農園レストラン。カジュアルで重すぎない。",
      meta: [["場所", "VISON マルシェエリア"]],
      notes: "", maps: "NOUNIYELL VISON"
    },
    {
      name: "スギモト", area: "VISON / 松阪牛・お肉",
      coords: [34.4583, 136.5148], category: "backup",
      images: ["images/matsusaka_2.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "VISON内", cls: "priority-alt" }],
      desc: "松阪牛・お肉系。VISON内で肉を食べたいときの候補。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "スギモト VISON"
    },
    {
      name: "うなぎ四代目菊川", area: "VISON / うなぎ・和食",
      coords: [34.4592, 136.5138], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "VISON内", cls: "priority-alt" }],
      desc: "うなぎ・和食寄り。夕食候補にもなる。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "うなぎ四代目菊川 VISON"
    },
    {
      name: "竜吟虎嘯（りゅうぎんこしょう）", area: "VISON / 肉",
      coords: [34.4581, 136.5151], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "VISON内", cls: "priority-alt" }],
      desc: "少し特別感を出したいときの肉系候補。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "竜吟虎嘯 VISON"
    }
  ],

  /* === カフェ・雑貨・温浴 === */
  cafes: [
    {
      name: "Confiture H", area: "VISON / サンセバスチャン通り",
      coords: [34.4585, 136.5145], category: "confirmed",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "確定（VISONカフェ）", cls: "priority-top" }],
      desc: "パティシエ辻口博啓氏のジャム＆スイーツ店。VISONでのカフェはここを軸に（確定）。",
      meta: [["想定", "VISONで最初に立ち寄り"]],
      notes: "<strong>メモ:</strong> 甘いもの好きと相性◎。", maps: "Confiture H VISON"
    },
    {
      name: "minä perhonen museum / shop", area: "VISON / 美術館・ファッション",
      coords: [34.4587, 136.5148], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "VISON内", cls: "priority-alt" }],
      desc: "ファッション・美術館要素。重すぎないミュージアム感で会話もしやすい。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "ミナペルホネン VISON"
    },
    {
      name: "D&DEPARTMENT MIE by VISON", area: "VISON / 雑貨・暮らし",
      coords: [34.4584, 136.5135], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "VISON内", cls: "priority-alt" }],
      desc: "雑貨・暮らし系のショップ。おしゃれなもの好きと相性良し。会話もしやすい。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "D&DEPARTMENT MIE VISON"
    },
    {
      name: "マルシェ ヴィソン", area: "VISON / 食材・お土産",
      coords: [34.4595, 136.5150], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "時間が余れば", cls: "priority-alt" }],
      desc: "食材・お土産マルシェ。軽く見るだけでも会話が広がりやすい。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "マルシェ ヴィソン"
    },
    {
      name: "cafe Tomiyama", area: "VISON / カフェ休憩",
      coords: [34.4590, 136.5140], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "休憩候補", cls: "priority-alt" }],
      desc: "落ち着いたカフェ休憩候補。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "cafe Tomiyama VISON"
    },
    {
      name: "HAPPA STAND", area: "VISON / お茶",
      coords: [34.4593, 136.5143], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "軽い休憩", cls: "priority-alt" }],
      desc: "お茶系の軽い休憩に良い。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "HAPPA STAND VISON"
    },
    {
      name: "たいやき わらしべ VISON店", area: "VISON / たい焼き",
      coords: [34.4600, 136.5130], category: "backup",
      images: ["images/warashibe.jpg"],
      links: [{ label: "食べログ", url: "https://tabelog.com/mie/A2401/A240103/24018091/" }],
      ratings: { tabelog: "3.46" },
      badges: [{ text: "食べ歩き", cls: "priority-alt" }],
      desc: "焼きたてのたい焼きが名物。VISON散策の合間に、軽いおやつ・食べ歩きにちょうどいい。",
      meta: [["名物", "たい焼き"], ["場所", "VISON"]],
      notes: "", maps: "たいやき わらしべ VISON"
    },
    {
      name: "本草湯", area: "VISON / 薬草湯（保険）",
      coords: [34.4580, 136.5130], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "雨・疲れの保険", cls: "priority-alt" }],
      desc: "薬草湯。温浴好きなら相性良。雨・疲れたときの保険として。",
      meta: [["注意", "入れると滞在が延びる"]],
      notes: "", maps: "本草湯 VISON"
    },
    {
      name: "Le Furo", area: "VISON / ミネラルミスト浴",
      coords: [34.4582, 136.5128], category: "backup",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "特別体験", cls: "priority-alt" }],
      desc: "ミネラルミスト浴。特別体験だが滞在が長くなりやすい。",
      meta: [["注意", "VISON滞在が延びやすい"]],
      notes: "", maps: "Le Furo VISON"
    }
  ],

  /* === スケジュール（プラン） === */
  plans: [
    {
      title: "ほぼ決定プラン", featured: true,
      route: "",
      items: [
        ["09:30", "日産レンタカー 大阪上本町店 で受取", "確定"],
        ["10:00", "鴫野駅でピックアップ", "確定"],
        ["12:00", "いせもん本店", "確定"],
        ["13:30", "時間が余ったらどこかスポット挟む", "未確定"],
        ["14:30", "VISON でカフェ（Confiture H ほか）", "確定"],
        ["16:30", "時間が余ったらどこかスポット挟む", "未確定"],
        ["17:30", "漣（さざなみ）伊勢店　時間が余れば", "未確定"],
        ["19:00", "三重出発締め切り", "確定"],
        ["21:30", "日産レンタカー 大阪上本町店 へ返却", "確定"]
      ]
    }
  ],

  branches: [
    { cls: "sun",   title: "☀️ 晴れの場合", text: "二見の海辺散歩をしっかり。余裕があれば伊勢シーパラダイスも入れる。" },
    { cls: "rain",  title: "🌧 雨の場合", text: "海辺散歩は短め。シーパラダイスを入れ、VISONは屋内（Confiture H / minä perhonen / D&DEPARTMENT）中心。疲れたら本草湯を保険に。" },
    { cls: "tired", title: "😪 疲れ気味の場合", text: "水族館を外す。海辺散歩は軽め、VISONも90分。夕食早めで帰りを遅くしすぎない。" },
    { cls: "fun",   title: "😊 余裕がある場合", text: "水族館を入れる or VISONを2.5時間まで延長（3時間超は注意）。" }
  ],

  /* === 移動ルート === */
  legs: [
    { from: "日産レンタカー 大阪上本町店", to: "鴫野駅（ピックアップ）", time: "約10分", note: "【確定】9:30受取 → 10:00ピックアップ" },
    { from: "鴫野（大阪）", to: "三重・ランチ4店のいずれか", time: "約1時間40分〜2時間20分", note: "津エリア（いせもん/れんが/うなふじ）は手前、漣 伊勢店は二見寄り" },
    { from: "ランチ", to: "二見興玉神社・夫婦岩", time: "約20〜60分", note: "津エリアからは約50分、漣からは約20分" },
    { from: "二見", to: "伊勢シーパラダイス", time: "約3分", note: "二見エリア内。徒歩圏のことも" },
    { from: "二見", to: "VISON", time: "約40分", note: "伊勢二見鳥羽ライン〜伊勢自動車道経由" },
    { from: "VISON", to: "松阪まるよし 鎌田本店", time: "約25分", note: "勢和多気IC〜松阪方面" },
    { from: "VISON", to: "瀧原宮", time: "約20分", note: "ゆったり版の場合。国道42号" },
    { from: "松阪", to: "大阪", time: "約2時間", note: "夜は流れやすい。19:30頃出発が理想" }
  ],

  /* === 持ち物 === */
  packing: [
    { group: "必須", items: ["免許証", "財布 / 現金（お賽銭の小銭）", "スマホ + モバイルバッテリー", "充電ケーブル（車載用も）", "ETCカード"] },
    { group: "海辺・屋外散策", items: ["歩きやすい靴", "羽織れる上着（海風・冷房対策）", "日焼け止め", "帽子 / サングラス", "折りたたみ傘 or レインウェア"] },
    { group: "あると便利", items: ["ウェットティッシュ / ティッシュ", "エコバッグ（マルシェ・お土産用）", "常備薬 / 酔い止め", "飲み物（車内用）", "カメラ"] },
    { group: "運転まわり", items: ["高速料金 / 駐車場代", "ナビに目的地を事前登録（二見・VISON・松阪まるよし）", "休憩用SA/PAの目星"] }
  ],

  /* === 注意・要確認 === */
  info: [
    { warn: true,  title: "営業日・予約の確認", text: "VISON各店・松阪牛店は週末営業時間と予約可否を事前確認。Confiture H / minä perhonen / D&DEPARTMENT の最終入店時間も要チェック。" },
    { warn: false, title: "日の入りの目安（6月初旬）", text: "三重の日の入りは19:00頃。二見の海辺・朝熊の絶景は明るいうちに。夕食前に景色スポットを済ませると安心。" },
    { warn: false, title: "有料道路・スマートIC", text: "伊勢自動車道・伊勢二見鳥羽ライン・勢和多気IC（VISON最寄り）を利用。朝熊は伊勢志摩スカイライン（有料）。ETC推奨。" },
    { warn: true,  title: "道路工事・渋滞", text: "出発前に高速道路の工事・渋滞情報を確認（日本道路交通情報センター 等）。日曜午前の往路と夕方の帰路がピーク。" },
    { warn: false, title: "VISONは長居しない", text: "1.5〜2時間がベスト。食事まで入れると長くなるのでスイーツ・雑貨中心に。3時間超はVISON中心になりすぎ注意。" }
  ],

  /* 天気を取得する代表地点（二見・伊勢） */
  weatherPoint: { lat: 34.51, lon: 136.79, label: "二見・伊勢エリア", tripDate: "2026-06-07" }
};

/* ---------- ユーティリティ ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

/* 全場所をフラットに（type 付き） */
function allPlaces() {
  return [
    ...DATA.spots.map(p => ({ ...p, type: "spot" })),
    ...DATA.restaurants.map(p => ({ ...p, type: "restaurant" })),
    ...DATA.cafes.map(p => ({ ...p, type: "cafe" }))
  ];
}
const placeId = (type, name) => `${type}:${name}`;
function getPlaceById(id) {
  const i = id.indexOf(":");
  const type = id.slice(0, i), name = id.slice(i + 1);
  return allPlaces().find(p => p.type === type && p.name === name) || null;
}

/* =========================================================================
   カードレンダリング
   ========================================================================= */
function renderImageBlock(p) {
  const imgs = p.images || [];
  if (!imgs.length) return `<div class="card-imgwrap"><div class="card-noimg">${TYPE_ICONS[p.type] || "🖼"}</div>${catRibbon(p)}</div>`;
  const data = esc(JSON.stringify(imgs));
  const main = `<button class="card-img-btn" data-images='${data}' data-index="0" aria-label="拡大">
      <img class="card-img" src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy"></button>`;
  let thumbs = "";
  if (imgs.length > 1) {
    thumbs = `<div class="card-thumbs">` + imgs.slice(1, 4).map((src, k) =>
      `<button class="thumb-btn" data-images='${data}' data-index="${k + 1}" aria-label="拡大"><img class="thumb" src="${esc(src)}" alt="" loading="lazy"></button>`
    ).join("") + `</div>`;
  }
  return `<div class="card-imgwrap">${main}${catRibbon(p)}</div>${thumbs}`;
}
function catRibbon(p) {
  return `<span class="cat-ribbon cat-${p.category}">${CAT_LABELS[p.category] || ""}</span>`;
}
function ratingChips(p) {
  if (!p.ratings) return "";
  const r = p.ratings, chips = [];
  if (r.tabelog) chips.push(`<span class="rating-chip tabelog">🍴 食べログ ${esc(r.tabelog)}${r.reviews ? `（${esc(r.reviews)}件）` : ""}</span>`);
  if (r.google)  chips.push(`<span class="rating-chip google">⭐ Google ${esc(r.google)}</span>`);
  return chips.length ? `<div class="ratings">${chips.join("")}</div>` : "";
}
function linkPills(p) {
  const pills = [`<a class="pill maps" href="${mapsUrl(p.maps || p.name)}" target="_blank" rel="noopener">📍 Googleマップ</a>`];
  (p.links || []).forEach(l => {
    const cls = /食べログ|tabelog/i.test(l.label) ? "pill tabelog" : "pill";
    const icon = /食べログ/.test(l.label) ? "🍴" : "🔗";
    pills.push(`<a class="${cls}" href="${esc(l.url)}" target="_blank" rel="noopener">${icon} ${esc(l.label)}</a>`);
  });
  pills.push(`<button class="pill add-route" data-add="${esc(placeId(p.type, p.name))}">＋ ルートに追加</button>`);
  return `<div class="card-links">${pills.join("")}</div>`;
}
function renderCard(p) {
  const badges = (p.badges || []).map(b => `<span class="badge ${esc(b.cls)}">${esc(b.text)}</span>`).join("");
  const meta = (p.meta || []).map(m => `<li><b>${esc(m[0])}</b><span>${esc(m[1])}</span></li>`).join("");
  return `<article class="card">
    ${renderImageBlock(p)}
    <div class="card-body">
      <h3 class="card-title">${esc(p.name)}</h3>
      <div class="card-area">${esc(p.area)}</div>
      ${badges ? `<div class="badges">${badges}</div>` : ""}
      ${ratingChips(p)}
      <p class="card-desc">${esc(p.desc)}</p>
      ${meta ? `<ul class="card-meta">${meta}</ul>` : ""}
      ${p.notes ? `<div class="card-notes">${p.notes}</div>` : ""}
      ${linkPills(p)}
    </div>
  </article>`;
}
function renderCards(targetId, items, type) {
  $(targetId).innerHTML = items.map(p => renderCard({ ...p, type })).join("");
}

/* =========================================================================
   スケジュール / ルート / 持ち物 / 注意
   ========================================================================= */
function planCardHtml(pl, opts = {}) {
  const isUser = opts.kind === "user";
  const tl = pl.items.map(([t, b, s]) =>
    `<li><span class="tl-time">${esc(t)}</span><span class="tl-body">${esc(b)}${s ? `<span class="tl-sub">${esc(s)}</span>` : ""}</span></li>`
  ).join("");
  const tag = isUser
    ? `<span class="tag user">保存</span>`
    : (pl.tag ? `<span class="tag top">${esc(pl.tag)}</span>` : (pl.featured ? '<span class="tag top">本命</span>' : '<span class="tag alt">別案</span>'));
  const exportBtn = isUser ? `<button class="plan-export" data-key="${esc(opts.key)}">共有用に書き出す</button>` : "";
  const actions = `<div class="plan-actions">
      <button class="plan-copy" data-key="${esc(opts.key)}">コピー</button>
      ${exportBtn}
      <button class="plan-del" data-key="${esc(opts.key)}" aria-label="このプランを削除">削除</button>
    </div>`;
  return `<div class="plan-card ${pl.featured ? "featured" : ""} ${isUser ? "userplan" : ""}" data-key="${esc(opts.key)}">
      <div class="plan-head"><span class="plan-handle" title="ドラッグで並び替え">≡</span><h3>${esc(pl.title)}</h3>${tag}${actions}</div>
      ${pl.route ? `<p class="plan-route">${esc(pl.route)}</p>` : ""}
      <ol class="timeline">${tl}</ol>
    </div>`;
}

/* 組込(DATA.plans)＋保存プランを安定キー付きで統合 */
function masterPlans() {
  return [
    ...DATA.plans.map(p => ({ plan: p, key: "b:" + p.title, kind: "builtin" })),
    ...userPlans.map(p => ({ plan: p, key: "u:" + p.id, kind: "user" }))
  ];
}
function findPlanByKey(key) { return masterPlans().find(e => e.key === key); }
function orderedPlans() {
  const list = masterPlans().filter(e => !planView.hidden.includes(e.key));
  const rank = k => { const i = planView.order.indexOf(k); return i < 0 ? Infinity : i; };
  return list.map((e, i) => ({ e, i }))
    .sort((a, b) => (rank(a.e.key) - rank(b.e.key)) || (a.i - b.i))
    .map(x => x.e);
}

function renderSchedule() {
  const cards = orderedPlans().map(e => planCardHtml(e.plan, { key: e.key, kind: e.kind })).join("");
  const hiddenN = planView.hidden.length;
  const reset = (planView.order.length || hiddenN)
    ? `<div class="plan-list-tools"><button class="btn-ghost" id="plan-view-reset">並び順・表示をリセット${hiddenN ? `（非表示 ${hiddenN} 件）` : ""}</button></div>`
    : "";
  const branches = `<h3 style="color:var(--ai);margin:1.4rem 0 .6rem;">当日の調整方針</h3>
    <div class="branch-grid">${DATA.branches.map(b =>
      `<div class="branch ${b.cls}"><h4>${esc(b.title)}</h4><p>${esc(b.text)}</p></div>`).join("")}</div>`;
  $("#schedule-content").innerHTML =
    `<div class="plan-list" id="plan-list">${cards || '<p class="muted">表示できるプランがありません。</p>'}</div>${reset}${branches}`;
  $$("#plan-list .plan-copy").forEach(b => b.addEventListener("click", () => copyPlan(b.dataset.key, b)));
  $$("#plan-list .plan-del").forEach(b => b.addEventListener("click", () => deletePlanByKey(b.dataset.key)));
  $$("#plan-list .plan-export").forEach(b => b.addEventListener("click", () => exportUserPlanToData(+b.dataset.key.slice(2))));
  const rb = $("#plan-view-reset");
  if (rb) rb.addEventListener("click", () => { planView = { order: [], hidden: [] }; savePlanView(); renderSchedule(); });
  setupPlanSortable();
}

/* プラン例のドラッグ並び替え（ハンドル ≡） */
function setupPlanSortable() {
  const el = $("#plan-list");
  if (!el || typeof Sortable === "undefined") return;
  Sortable.create(el, {
    animation: 150, handle: ".plan-handle", draggable: ".plan-card",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onEnd: () => {
      planView.order = $$("#plan-list .plan-card").map(c => c.dataset.key);
      savePlanView();
    }
  });
}

/* プラン内容をテキストでコピー（LINE等に貼れる形式） */
function copyPlan(key, btn) {
  const e = findPlanByKey(key); if (!e) return;
  const pl = e.plan;
  const text = `【${pl.title}】` + (pl.route ? `\n${pl.route}` : "") + "\n" +
    pl.items.map(([t, b, s]) => `${t}  ${b}${s ? `（${s}）` : ""}`).join("\n");
  const done = () => { if (btn) { const o = btn.textContent; btn.textContent = "コピー済"; setTimeout(() => { btn.textContent = o; }, 1200); } };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => window.prompt("コピーしてください:", text));
  else window.prompt("コピーしてください:", text);
}

/* 削除: 保存プランは実削除、組込プランはこの端末で非表示（リセットで復活） */
function deletePlanByKey(key) {
  const e = findPlanByKey(key); if (!e) return;
  if (e.kind === "user") {
    if (!window.confirm(`「${e.plan.title}」を削除しますか？`)) return;
    const id = +key.slice(2);
    userPlans = userPlans.filter(p => p.id !== id);
    saveUserPlans();
    planView.order = planView.order.filter(k => k !== key);
  } else {
    if (!window.confirm(`「${e.plan.title}」を非表示にしますか？（「並び順・表示をリセット」で戻せます）`)) return;
    if (!planView.hidden.includes(key)) planView.hidden.push(key);
  }
  savePlanView();
  renderSchedule();
}

/* 保存プランを DATA.plans 用のオブジェクトとして書き出す（commitで全員に共有） */
function exportUserPlanToData(id) {
  const pl = userPlans.find(p => p.id === id); if (!pl) return;
  const items = pl.items.map(([t, b, s]) => `    [${JSON.stringify(t)}, ${JSON.stringify(b)}, ${JSON.stringify(s || "")}]`).join(",\n");
  const out = `{
  title: ${JSON.stringify(pl.title)},
  featured: false,
  route: "",
  items: [
${items}
  ]
},`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("この内容を app.js の DATA.plans 配列に追加して commit すると、全員のプラン例に表示されます（クリップボードにもコピー済み）:", out);
}

/* ---- 保存プラン＆プラン例の表示状態（この端末に保存） ---- */
const USERPLAN_KEY = "mie-trip-userplans";
const PLANVIEW_KEY = "mie-trip-planview";
function loadUserPlans() {
  try { const s = JSON.parse(localStorage.getItem(USERPLAN_KEY)); if (Array.isArray(s)) return s; } catch (e) {}
  return [];
}
function saveUserPlans() { localStorage.setItem(USERPLAN_KEY, JSON.stringify(userPlans)); }
function loadPlanView() {
  try { const s = JSON.parse(localStorage.getItem(PLANVIEW_KEY)); if (s && typeof s === "object") return { order: Array.isArray(s.order) ? s.order : [], hidden: Array.isArray(s.hidden) ? s.hidden : [] }; } catch (e) {}
  return { order: [], hidden: [] };
}
function savePlanView() { localStorage.setItem(PLANVIEW_KEY, JSON.stringify(planView)); }
let userPlans = loadUserPlans();
let planView = loadPlanView();

function addCurrentScheduleAsPlan() {
  if (!schedule.length) { window.alert("スケジュールが空です。先に予定を入れてください。"); return; }
  const def = "保存プラン " + (userPlans.length + 1);
  const title = (window.prompt("プラン名を入力してください:", def) || "").trim();
  if (!title) return;
  const items = schedule.map(it => [it.time || "—", it.text || "", it.status === "confirmed" ? "確定" : "未確定"]);
  const id = (userPlans.reduce((m, p) => Math.max(m, p.id || 0), 0) + 1);
  userPlans.push({ id, title, items });
  saveUserPlans();
  renderSchedule();
  window.alert(`「${title}」をプラン例に追加しました。`);
}

/* ---- 編集できるスケジュール（ドラッグ並び替え・時刻入力・確定切替・localStorage保存） ----
   ★共有の初期表示（A仕様）: 下の SCHED_DEFAULT が「全員に配られる初期スケジュール」。
     並びを確定したら「共有用に書き出す」ボタンの出力を SCHED_DEFAULT に貼り替え、
     必ず SCHED_VERSION を +1 して commit すること。
     → 各端末は保存済みバージョンが古いと自動で新しい初期表示に更新される。 */
const SCHED_KEY = "mie-trip-schedule";
const SCHED_VERSION = 3;   // SCHED_DEFAULT を更新したら必ず +1 する
const SCHED_DEFAULT = [
  { time: "09:30", text: "日産レンタカー 大阪上本町店 で受取", status: "confirmed" },
  { time: "12:00", text: "三重でランチ（いせもん / れんが / 漣 伊勢店 / うなふじ から選択）", status: "confirmed" },
  { time: "13:30", text: "時間が余ったらどこかスポット挟む", status: "tentative" },
  { time: "14:30", text: "VISON でカフェ（Confiture H ほか）", status: "confirmed" },
  { time: "16:30", text: "時間が余ったらどこかスポット挟む", status: "tentative" },
  { time: "17:30", text: "時間が余れば夕食。なければ大阪帰ってから", status: "tentative" },
  { time: "19:00", text: "三重出発締め切り", status: "confirmed" },
  { time: "21:30", text: "日産レンタカー 大阪上本町店 へ返却", status: "confirmed" }
];
let schedule = loadSchedule();
function loadSchedule() {
  try {
    const raw = JSON.parse(localStorage.getItem(SCHED_KEY));
    // 保存バージョンが現行と一致する場合のみローカル編集を採用。
    // 古い／無い場合は新しい共有初期表示(SCHED_DEFAULT)に更新する。
    if (raw && raw.v === SCHED_VERSION && Array.isArray(raw.items)) return raw.items;
  } catch (e) {}
  return SCHED_DEFAULT.map(x => ({ ...x }));
}
function saveSchedule() { localStorage.setItem(SCHED_KEY, JSON.stringify({ v: SCHED_VERSION, items: schedule })); }

/* 現在の並びを SCHED_DEFAULT 用のコード片として書き出す（A仕様の更新を簡単に） */
function exportSchedule() {
  const lines = schedule.map(it =>
    `  { time: ${JSON.stringify(it.time || "")}, text: ${JSON.stringify(it.text || "")}, status: ${JSON.stringify(it.status || "tentative")} }`
  ).join(",\n");
  const out = `const SCHED_DEFAULT = [\n${lines}\n];`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("この内容を app.js の SCHED_DEFAULT に貼り替え、SCHED_VERSION を +1 して commit すると全員の初期表示が更新されます（クリップボードにもコピー済み）:", out);
}

function renderScheduleEditor() {
  const list = $("#sched-list");
  if (!list) return;
  if (!schedule.length) {
    list.innerHTML = `<li class="sched-empty">予定がありません。「＋ 空の行」や「候補から追加」で作成できます。</li>`;
  } else {
    list.innerHTML = schedule.map((it, i) => `
      <li class="sched-item ${it.status === "confirmed" ? "confirmed" : "tentative"}" data-i="${i}">
        <span class="sched-handle" aria-label="ドラッグして並び替え" title="ドラッグで並び替え">≡</span>
        <input class="sched-time" type="time" value="${esc(it.time || "")}" data-i="${i}" aria-label="時刻">
        <input class="sched-text" type="text" value="${esc(it.text || "")}" data-i="${i}" placeholder="予定を入力" aria-label="予定">
        <button class="sched-status st-chip ${it.status === "confirmed" ? "confirmed" : "tentative"}" data-i="${i}" title="確定／未確定を切替">${it.status === "confirmed" ? "確定" : "未確定"}</button>
        <button class="sched-rm" data-i="${i}" aria-label="この行を削除">✕</button>
      </li>`).join("");
  }
  // 入力・操作イベント（textはinputで都度保存、フォーカス維持のため再描画しない）
  $$("#sched-list .sched-time").forEach(el => el.addEventListener("change", e => { schedule[+e.currentTarget.dataset.i].time = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-text").forEach(el => el.addEventListener("input", e => { schedule[+e.currentTarget.dataset.i].text = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-status").forEach(el => el.addEventListener("click", e => {
    const i = +e.currentTarget.dataset.i;
    schedule[i].status = schedule[i].status === "confirmed" ? "tentative" : "confirmed";
    saveSchedule(); renderScheduleEditor();
  }));
  $$("#sched-list .sched-rm").forEach(el => el.addEventListener("click", e => {
    schedule.splice(+e.currentTarget.dataset.i, 1); saveSchedule(); renderScheduleEditor();
  }));
}

function populateSchedAddSelect() {
  const sel = $("#sched-add-place"); if (!sel) return;
  const groups = [["spots", "🌿 スポット"], ["restaurants", "🍽 レストラン"], ["cafes", "☕ カフェ"]];
  sel.innerHTML = `<option value="">＋ 候補から追加…</option>` + groups.map(([key, label]) =>
    `<optgroup label="${label}">` + DATA[key].map(p => `<option value="${esc(p.name)}">${esc(p.name)}</option>`).join("") + `</optgroup>`
  ).join("");
  sel.addEventListener("change", () => {
    if (!sel.value) return;
    schedule.push({ time: "", text: sel.value, status: "tentative" });
    saveSchedule(); renderScheduleEditor(); sel.value = "";
  });
}

/* 右側の候補リスト（スポット/レストラン/カフェ）を描画。ドラッグまたは⊕で左へ追加。
   filter: "all" | "spots" | "restaurants" | "cafes" */
function renderSchedCandidates(filter = "all") {
  const el = $("#sched-candidates"); if (!el) return;
  const groups = [["spots", "🌿 スポット", "spot"], ["restaurants", "🍽 レストラン", "restaurant"], ["cafes", "☕ カフェ", "cafe"]];
  const shown = filter === "all" ? groups : groups.filter(g => g[0] === filter);
  const withHead = filter === "all";  // 「すべて」のときだけ見出しを挟む
  el.innerHTML = shown.map(([key, label, emoji]) => {
    const head = withHead ? `<li class="sched-cand-head">${label}</li>` : "";
    const items = DATA[key].map(p =>
      `<li class="sched-cand-item" data-name="${esc(p.name)}">
        <span class="type-emoji">${TYPE_ICONS[emoji]}</span>
        <span class="nm">${esc(p.name)}</span>
        <button class="cand-add" data-name="${esc(p.name)}" aria-label="左に追加">⊕</button>
      </li>`).join("");
    return head + items;
  }).join("");
  $$("#sched-candidates .cand-add").forEach(b => b.addEventListener("click", () => {
    schedule.push({ time: "", text: b.dataset.name, status: "tentative" });
    saveSchedule(); renderScheduleEditor();
  }));
}

/* 候補リストのサブタブ（すべて／スポット／レストラン／カフェ）切替 */
function setupSchedCandTabs() {
  const bar = $("#sched-cand-tabs"); if (!bar) return;
  $$(".sched-cand-tab", bar).forEach(t => t.addEventListener("click", () => {
    $$(".sched-cand-tab", bar).forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    renderSchedCandidates(t.dataset.filter);
  }));
}

let schedSortInit = false;
function setupScheduleSortable() {
  if (schedSortInit || typeof Sortable === "undefined" || !$("#sched-list")) return;
  schedSortInit = true;
  // タイムスケジュール: 内部並び替え＋候補からの受け入れ
  Sortable.create($("#sched-list"), {
    group: { name: "sched-shared", pull: false, put: true },
    animation: 150, handle: ".sched-handle", draggable: ".sched-item",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onAdd: (evt) => {
      // 候補リストから落ちてきた要素を予定に変換
      const name = evt.item.dataset.name;
      const at = Array.prototype.indexOf.call($("#sched-list").children, evt.item);
      evt.item.remove();
      if (name != null) {
        schedule.splice(at < 0 ? schedule.length : at, 0, { time: "", text: name, status: "tentative" });
        saveSchedule(); renderScheduleEditor();
      }
    },
    onUpdate: () => {
      const order = $$("#sched-list .sched-item").map(li => +li.dataset.i);
      schedule = order.map(i => schedule[i]);
      saveSchedule(); renderScheduleEditor();
    }
  });
  // 候補リスト: クローンを引き出すだけ
  Sortable.create($("#sched-candidates"), {
    group: { name: "sched-shared", pull: "clone", put: false },
    sort: false, animation: 150, draggable: ".sched-cand-item"
  });
}

function renderRoutes() {
  $("#routes-content").innerHTML = DATA.legs.map(l =>
    `<div class="leg">
      <div class="leg-route"><b>${esc(l.from)}</b><span class="leg-arrow">→</span><b>${esc(l.to)}</b></div>
      <div class="leg-time">${esc(l.time)}</div>
      ${l.note ? `<div class="leg-note">${esc(l.note)}</div>` : ""}
    </div>`).join("");
}
function renderPacking() {
  const KEY = "mie-trip-packing";
  const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
  $("#packing-content").innerHTML = DATA.packing.map(g =>
    `<div class="pack-group"><h3>${esc(g.group)}</h3><ul class="pack-list">${
      g.items.map(it => {
        const id = g.group + "::" + it;
        return `<li><label><input type="checkbox" data-pack="${esc(id)}" ${saved[id] ? "checked" : ""}><span>${esc(it)}</span></label></li>`;
      }).join("")
    }</ul></div>`).join("");
  $$("#packing-content input[data-pack]").forEach(cb => {
    cb.addEventListener("change", () => {
      saved[cb.dataset.pack] = cb.checked;
      localStorage.setItem(KEY, JSON.stringify(saved));
    });
  });
}
function renderInfo() {
  $("#info-content").innerHTML = DATA.info.map(i =>
    `<div class="info-card ${i.warn ? "warn" : ""}"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div>`).join("");
}

/* =========================================================================
   ライトボックス
   ========================================================================= */
const lb = { images: [], index: 0 };
function openLightbox(images, index) {
  lb.images = images; lb.index = index;
  $("#lightbox").classList.remove("hidden");
  $("#lightbox").setAttribute("aria-hidden", "false");
  updateLightbox();
}
function updateLightbox() {
  $("#lb-img").src = lb.images[lb.index];
  $("#lb-counter").textContent = `${lb.index + 1} / ${lb.images.length}`;
  const multi = lb.images.length > 1;
  $("#lb-prev").style.display = multi ? "" : "none";
  $("#lb-next").style.display = multi ? "" : "none";
}
function closeLightbox() {
  $("#lightbox").classList.add("hidden");
  $("#lightbox").setAttribute("aria-hidden", "true");
}
function lbNext() { lb.index = (lb.index + 1) % lb.images.length; updateLightbox(); }
function lbPrev() { lb.index = (lb.index - 1 + lb.images.length) % lb.images.length; updateLightbox(); }
function setupLightbox() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-img-btn, .thumb-btn");
    if (btn) {
      const imgs = JSON.parse(btn.dataset.images);
      openLightbox(imgs, parseInt(btn.dataset.index, 10) || 0);
    }
  });
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-next").addEventListener("click", lbNext);
  $("#lb-prev").addEventListener("click", lbPrev);
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") lbNext();
    else if (e.key === "ArrowLeft") lbPrev();
  });
}

/* =========================================================================
   ルート状態（localStorage）
   ========================================================================= */
const ROUTE_KEY = "mie-trip-route";
const DEFAULT_ROUTE = [
  "spot:二見興玉神社・夫婦岩",
  "spot:伊勢シーパラダイス",
  "cafe:Confiture H",
  "cafe:minä perhonen museum / shop",
  "cafe:D&DEPARTMENT MIE by VISON",
  "restaurant:松阪まるよし 鎌田本店"
];
let routeIds = loadRoute();
function loadRoute() {
  try {
    const s = JSON.parse(localStorage.getItem(ROUTE_KEY));
    if (Array.isArray(s)) return s.filter(getPlaceById);
  } catch (e) {}
  return DEFAULT_ROUTE.slice();
}
function saveRoute() { localStorage.setItem(ROUTE_KEY, JSON.stringify(routeIds)); }
function addToRoute(id) { if (!routeIds.includes(id)) { routeIds.push(id); syncRoute(); } }
function removeFromRoute(id) { routeIds = routeIds.filter(x => x !== id); syncRoute(); }
function routeIndex(id) { return routeIds.indexOf(id); }

/* =========================================================================
   地図（Leaflet）
   ========================================================================= */
let map, markerLayer, routeLine;
const markers = {}; // id -> marker

function makeIcon(p, id) {
  const idx = routeIndex(id);
  let ring = "";
  if (idx >= 0) ring = "ring-route";
  else if (p.category === "confirmed") ring = "ring-confirmed";
  else if (p.category === "warning") ring = "ring-warning";
  const num = idx >= 0 ? `<span class="pin-num">${idx + 1}</span>` : "";
  return L.divIcon({
    className: "",
    html: `<div class="pin pin-${p.type} ${ring}"><span>${TYPE_ICONS[p.type]}</span>${num}</div>`,
    iconSize: [30, 30], iconAnchor: [15, 28], popupAnchor: [0, -28]
  });
}
function popupHtml(p, id) {
  const img = (p.images && p.images[0]) ? `<img src="${esc(p.images[0])}" alt="">` : "";
  return `<div class="popup-card">
    ${img}
    <h4>${esc(p.name)}</h4>
    <div class="p-area">📍 ${esc(p.area)}</div>
    <p class="p-desc">${esc(p.desc)}</p>
    <div class="p-actions">
      <button class="p-btn add" data-add="${esc(id)}">＋ルートに追加</button>
      <a class="p-btn maps" href="${mapsUrl(p.maps || p.name)}" target="_blank" rel="noopener">📍マップ</a>
    </div>
  </div>`;
}
function currentFilters() {
  const get = g => $$(`.filter-group[data-group="${g}"] input:checked`).map(i => i.value);
  return { type: get("type"), category: get("category"), routeOnly: $(`.filter-group[data-group="route"] input`).checked };
}
function applyFilters() {
  const f = currentFilters();
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    const m = markers[id];
    if (!m) return;
    const inRoute = routeIndex(id) >= 0;
    const show = f.type.includes(p.type) && f.category.includes(p.category) && (!f.routeOnly || inRoute);
    if (show) { if (!markerLayer.hasLayer(m)) m.addTo(markerLayer); }
    else { if (markerLayer.hasLayer(m)) markerLayer.removeLayer(m); }
  });
}
function routeCoords() {
  return routeIds.map(getPlaceById).filter(Boolean).map(p => p.coords);
}
function drawRouteLine() {
  const coords = routeCoords();
  if (routeLine) map.removeLayer(routeLine);
  routeLine = L.polyline(coords, { color: "#1f9c9c", weight: 3, dashArray: "7 7", opacity: .85 }).addTo(map);
}
function refreshMarkers() {
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    if (markers[id]) markers[id].setIcon(makeIcon(p, id));
  });
}
function setupMap() {
  map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);

  const pts = [];
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    const m = L.marker(p.coords, { icon: makeIcon(p, id) });
    m.bindPopup(popupHtml(p, id));
    markers[id] = m;
    m.addTo(markerLayer);
    pts.push(p.coords);
  });
  drawRouteLine();
  applyFilters();
  map.fitBounds(L.latLngBounds(pts).pad(0.15));

  // フィルタ
  $$("#map-filters input").forEach(i => i.addEventListener("change", applyFilters));

  // ポップアップ内「追加」
  map.on("popupopen", (e) => {
    const btn = e.popup._contentNode.querySelector("[data-add]");
    if (btn) btn.addEventListener("click", () => { addToRoute(btn.dataset.add); map.closePopup(); });
  });
}

/* =========================================================================
   ルート編集 UI（SortableJS）
   ========================================================================= */
function renderRouteEditor() {
  const list = $("#route-list");
  if (!routeIds.length) {
    list.innerHTML = `<li class="route-empty">ルートが空です。候補から追加してください。</li>`;
  } else {
    list.innerHTML = routeIds.map(id => {
      const p = getPlaceById(id); if (!p) return "";
      return `<li class="route-item" data-id="${esc(id)}">
        <span class="num"></span>
        <span class="type-emoji">${TYPE_ICONS[p.type]}</span>
        <span class="nm">${esc(p.name)}</span>
        <button class="rm" data-rm="${esc(id)}" aria-label="削除">✕</button>
      </li>`;
    }).join("");
  }
  const cand = $("#candidates-list");
  cand.innerHTML = allPlaces().map(p => {
    const id = placeId(p.type, p.name);
    const inRoute = routeIndex(id) >= 0;
    return `<li class="cand-item ${inRoute ? "in-route" : ""}" data-id="${esc(id)}">
      <span class="type-emoji">${TYPE_ICONS[p.type]}</span>
      <span class="nm">${esc(p.name)}</span>
      <button class="add" data-addcand="${esc(id)}" aria-label="追加">⊕</button>
    </li>`;
  }).join("");

  $$("#route-list .rm").forEach(b => b.addEventListener("click", () => removeFromRoute(b.dataset.rm)));
  $$("#candidates-list .add").forEach(b => b.addEventListener("click", () => addToRoute(b.dataset.addcand)));
}

/* ルート全体の再同期 */
function syncRoute() {
  saveRoute();
  renderRouteEditor();
  refreshMarkers();
  if (map) { drawRouteLine(); applyFilters(); }
}

/* ドラッグ&ドロップ（並び替え + 候補→ルート追加）。
   コンテナに一度だけバインドすればよい（innerHTML差し替え後も有効）。 */
let sortableInited = false;
function setupSortableCross() {
  if (sortableInited || typeof Sortable === "undefined") return;
  sortableInited = true;
  // ルートリスト: 並び替え可・候補からの受け入れ可
  Sortable.create($("#route-list"), {
    group: { name: "shared", pull: true, put: true },
    animation: 150, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    draggable: ".route-item",
    onAdd: (evt) => {
      const id = evt.item.dataset.id;
      evt.item.remove();          // 落ちてきたクローンを除去（モデルから再描画）
      addToRoute(id);             // syncRoute 内で再描画される
    },
    onUpdate: () => {
      routeIds = $$("#route-list .route-item").map(li => li.dataset.id).filter(Boolean);
      syncRoute();
    }
  });
  // 候補リスト: クローンを引き出すだけ（並び替え・受け入れなし）
  Sortable.create($("#candidates-list"), {
    group: { name: "shared", pull: "clone", put: false },
    sort: false, animation: 150,
    draggable: ".cand-item"
  });
}

/* =========================================================================
   天気（Open-Meteo, APIキー不要）
   ========================================================================= */
const WX_ICONS = { 0:"☀️",1:"🌤",2:"⛅",3:"☁️",45:"🌫",48:"🌫",51:"🌦",53:"🌦",55:"🌧",61:"🌧",63:"🌧",65:"🌧",71:"🌨",80:"🌦",81:"🌧",82:"⛈",95:"⛈",96:"⛈",99:"⛈" };
async function loadWeather() {
  const wp = DATA.weatherPoint;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${wp.lat}&longitude=${wp.lon}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=7`;
  const box = $("#weather-content"), alert = $("#weather-alert");
  try {
    const r = await fetch(url);
    const d = await r.json();
    const dl = d.daily;
    const dows = ["日","月","火","水","木","金","土"];
    box.innerHTML = dl.time.map((iso, i) => {
      const dt = new Date(iso + "T00:00:00+09:00");
      const isTrip = iso === wp.tripDate;
      return `<div class="wx-day ${isTrip ? "is-trip" : ""}">
        <div class="wx-dow">${dows[dt.getDay()]}${isTrip ? " ★" : ""}</div>
        <div class="wx-date">${dt.getMonth()+1}/${dt.getDate()}</div>
        <div class="wx-icon">${WX_ICONS[dl.weather_code[i]] || "❔"}</div>
        <div class="wx-temp"><span class="hi">${Math.round(dl.temperature_2m_max[i])}°</span> / <span class="lo">${Math.round(dl.temperature_2m_min[i])}°</span></div>
        <div class="wx-pop">☔ ${dl.precipitation_probability_max[i] ?? "–"}%</div>
      </div>`;
    }).join("");

    const tripI = dl.time.indexOf(wp.tripDate);
    if (tripI >= 0) {
      const pop = dl.precipitation_probability_max[tripI];
      const wc = dl.weather_code[tripI];
      const rain = wc >= 51 || (pop ?? 0) >= 50;
      alert.innerHTML = `<div class="alert-box ${rain ? "" : "ok"}">
        <b>6/7（旅行当日）の見込み:</b> ${WX_ICONS[wc] || ""} 最高${Math.round(dl.temperature_2m_max[tripI])}° / 最低${Math.round(dl.temperature_2m_min[tripI])}° ・ 降水${pop ?? "–"}%。
        ${rain ? "雨寄りなら水族館＋VISON屋内中心の分岐がおすすめ。" : "晴れ寄りなら二見の海辺散歩をしっかり楽しめそう。"}
      </div>`;
    } else {
      alert.innerHTML = `<div class="alert-box ok">6/7はまだ7日予報の範囲外です。出発が近づいたら再確認を（このページを開くだけで自動更新されます）。</div>`;
    }
  } catch (e) {
    box.innerHTML = `<p class="muted">天気情報を取得できませんでした（オフライン時など）。Open-Meteoに接続できる環境で再読み込みしてください。</p>`;
  }
}

/* =========================================================================
   タブ切替
   ========================================================================= */
function setupTabs() {
  let weatherLoaded = false, mapReady = false;
  $$("#tabs .tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$("#tabs .tab").forEach(t => t.classList.remove("active"));
      $$(".panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const name = tab.dataset.tab;
      $("#panel-" + name).classList.add("active");
      if (name === "map") {
        if (!mapReady) { setupMap(); setupSortableCross(); mapReady = true; }
        setTimeout(() => map && map.invalidateSize(), 60);
      }
      if (name === "weather" && !weatherLoaded) { loadWeather(); weatherLoaded = true; }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================================================================
   初期化
   ========================================================================= */
function init() {
  renderSchedule();
  renderScheduleEditor();
  renderSchedCandidates();
  setupSchedCandTabs();
  populateSchedAddSelect();
  setupScheduleSortable();
  renderCards("#cards-spots", DATA.spots, "spot");
  renderCards("#cards-restaurants", DATA.restaurants, "restaurant");
  renderCards("#cards-cafes", DATA.cafes, "cafe");
  renderRoutes();
  renderPacking();
  renderInfo();
  renderRouteEditor();
  setupLightbox();
  setupTabs();

  // カード内「ルートに追加」
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (b && b.classList.contains("add-route")) addToRoute(b.dataset.add);
  });

  // ルート編集ボタン
  $("#route-reset").addEventListener("click", () => { routeIds = DEFAULT_ROUTE.slice(); syncRoute(); });
  $("#route-clear").addEventListener("click", () => { routeIds = []; syncRoute(); });

  // スケジュール編集ボタン
  $("#sched-add-row").addEventListener("click", () => { schedule.push({ time: "", text: "", status: "tentative" }); saveSchedule(); renderScheduleEditor(); });
  $("#sched-reset").addEventListener("click", () => { schedule = SCHED_DEFAULT.map(x => ({ ...x })); saveSchedule(); renderScheduleEditor(); });
  $("#sched-clear").addEventListener("click", () => { schedule = []; saveSchedule(); renderScheduleEditor(); });
  $("#sched-save-plan").addEventListener("click", addCurrentScheduleAsPlan);
  $("#sched-export").addEventListener("click", exportSchedule);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
