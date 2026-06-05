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
      coords: [34.5083, 136.7888], category: "confirmed",
      images: ["images/meotoiwa.jpg", "images/meotoiwa_2.jpg", "images/meotoiwa_3.jpg"],
      links: [{ label: "観光情報", url: "https://futamiokitamajinja.or.jp/" }],
      badges: [{ text: "確定", cls: "priority-top" }, { text: "海辺スタート", cls: "priority-alt" }],
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
    }
  ],

  /* === レストラン === */
  restaurants: [
    {
      name: "松阪まるよし 鎌田本店", area: "松阪市鎌田町 / 締めのディナー",
      coords: [34.5790, 136.5360], category: "confirmed",
      images: ["images/matsusaka.jpg", "images/matsusaka_2.jpg"],
      links: [{ label: "公式サイト", url: "https://www.matsusakaushi.co.jp/" }],
      badges: [{ text: "本命ディナー", cls: "priority-top" }, { text: "松阪牛", cls: "priority-alt" }],
      desc: "松阪牛の名店。すき焼き・焼肉・ステーキ。三重ドライブの締めに特別感が出る。",
      meta: [["想定", "17:45〜19:00 ディナー"], ["予約", "週末は予約推奨"]],
      notes: "<strong>メモ:</strong> 夕食をVISON外に出してメリハリを付ける。",
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
      badges: [{ text: "本命スイーツ", cls: "priority-top" }],
      desc: "パティシエ辻口博啓氏のジャム＆スイーツ店。ケーキ・スイーツ休憩の本命。VISONに行くなら外さない。",
      meta: [["想定", "VISONで最初に立ち寄り"]],
      notes: "<strong>メモ:</strong> 甘いもの好きと相性◎。", maps: "Confiture H VISON"
    },
    {
      name: "minä perhonen museum / shop", area: "VISON / 美術館・ファッション",
      coords: [34.4587, 136.5148], category: "confirmed",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "回りたい", cls: "priority-top" }],
      desc: "ファッション・美術館要素。重すぎないミュージアム感で会話もしやすい。",
      meta: [["場所", "VISON"]],
      notes: "", maps: "ミナペルホネン VISON"
    },
    {
      name: "D&DEPARTMENT MIE by VISON", area: "VISON / 雑貨・暮らし",
      coords: [34.4584, 136.5135], category: "confirmed",
      images: ["images/vison.jpg"],
      links: [{ label: "VISON公式", url: "https://vison.jp/" }],
      badges: [{ text: "回りたい", cls: "priority-top" }],
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
      title: "本命プラン（おすすめ）", featured: true,
      route: "大阪（レンタカー）→ ランチ4店から選択 → 二見興玉神社・夫婦岩 → 伊勢シーパラダイス（気分次第）→ VISON短時間 → 松阪牛ディナー → 大阪",
      items: [
        ["9:30", "日産レンタカー 大阪上本町店 で受取", "【確定】レンタカー受取"],
        ["10:00", "鴫野駅でピックアップ → 出発", "【確定】高速で三重方面へ。SA/PA休憩1回"],
        ["12:00", "三重でランチ（4店から選択）", "いせもん本店 / れんが / 漣 伊勢店 / うなふじ支店 ※下のレストランタブ参照"],
        ["13:30", "二見興玉神社・夫婦岩 着", "海辺を軽く散歩。景色・夫婦岩・神社"],
        ["14:15", "伊勢シーパラダイス（任意）", "1〜1.5時間で軽く。疲れ・時間次第で外してOK"],
        ["15:45", "VISON 着", "Confiture H → minä perhonen → D&DEPARTMENT → マルシェ"],
        ["17:15", "VISON 発", "滞在は1.5〜2時間がベスト"],
        ["17:45", "松阪牛ディナー", "松阪まるよし 鎌田本店 など"],
        ["19:30", "帰路", "大阪着は21:30〜22:00前後"]
      ]
    },
    {
      title: "ゆったり版", featured: false,
      route: "大阪 → 松阪牛ランチ → VISON → 瀧原宮 → 軽め夕食 → 大阪",
      items: [
        ["9:30", "日産レンタカー 大阪上本町店 で受取", "【確定】"],
        ["10:00", "鴫野駅でピックアップ → 出発", "【確定】"],
        ["12:15", "松阪まるよし で松阪牛ランチ", "昼にしっかりお肉（ランチ4店から選択も可）"],
        ["14:00", "VISON（1.5〜2時間）", "Confiture H → minä perhonen → D&DEPARTMENT → マルシェ少し"],
        ["16:15", "瀧原宮", "森の参道を散策、1時間程度"],
        ["18:00", "軽め夕食 or カフェ", "昼にしっかりなら軽めでOK"],
        ["19:30", "帰路", ""]
      ]
    },
    {
      title: "関宿寄り道版", featured: false,
      route: "大阪 → 東海道関宿 → VISON → 瀧原宮 or 松阪ディナー → 大阪",
      items: [
        ["9:30", "日産レンタカー 大阪上本町店 で受取 → 鴫野でピックアップ", "【確定】受取後すぐ出発"],
        ["11:00", "東海道関宿", "古い町並みを軽く散策"],
        ["13:15", "VISON（2時間程度）", "スイーツ・雑貨・ミュージアム"],
        ["15:30", "瀧原宮 or カフェ休憩", "歩く気分なら瀧原宮"],
        ["18:00", "松阪牛ディナー", ""],
        ["19:30", "帰路", ""]
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
function renderSchedule() {
  const plans = DATA.plans.map(pl => {
    const tl = pl.items.map(([t, b, s]) =>
      `<li><span class="tl-time">${esc(t)}</span><span class="tl-body">${esc(b)}${s ? `<span class="tl-sub">${esc(s)}</span>` : ""}</span></li>`
    ).join("");
    return `<div class="plan-card ${pl.featured ? "featured" : ""}">
      <div class="plan-head"><h3>${esc(pl.title)}</h3>${pl.featured ? '<span class="tag top">本命</span>' : '<span class="tag alt">別案</span>'}</div>
      <p class="plan-route">${esc(pl.route)}</p>
      <ol class="timeline">${tl}</ol>
    </div>`;
  }).join("");
  const branches = `<h3 style="color:var(--ai);margin:1.4rem 0 .6rem;">当日の調整方針</h3>
    <div class="branch-grid">${DATA.branches.map(b =>
      `<div class="branch ${b.cls}"><h4>${esc(b.title)}</h4><p>${esc(b.text)}</p></div>`).join("")}</div>`;
  $("#schedule-content").innerHTML = plans + branches;
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
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
