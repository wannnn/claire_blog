import { CLOUDINARY_BASE } from "@root/constants/cloudinary";

export interface PostMetadata {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
  category: string;
}

export const metadata: PostMetadata[] = [
  // {
  //   id: "ciao-muharraq",
  //   title: "巴林 - 穆哈拉格",
  //   description: "TODO",
  //   thumbnailUrl: `${CLOUDINARY_BASE}/v1751808091/IMG_3374_iymkgn.jpg`,
  //   createdAt: "2023-11-09",
  //   category: "bahrain",
  // },
  {
    id: "ciao-nepal-budget",
    title: "尼泊爾19天花費紀錄 + 健行裝備清單",
    description:
      "尼泊爾對我來說除了是熱門的旅遊地點，擁有多個世界文化遺產，也是許多登山愛好者的天堂。他一直在我的旅遊清單內，但我對這個南亞國家不是很了解，這篇先記錄剛好有難得的19天來健行 + 城市巡禮的全部花費分配和裝備準備，之後再來好好寫每一天都在做什麼",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751794172/IMG_6610-scaled_kb1i92.jpg`,
    createdAt: "2024-05-14",
    category: "nepal",
  },
  {
    id: "ciao-bahrain-visa",
    title: "巴林簽證教學 🇧🇭 2023 Bahrain e-visa",
    description:
      "波斯灣之旅第三個國家 - 巴林，雖然說網路上辦巴林簽證的資料不多，但實際上申請下來其實還蠻容易的（不用教學文自己搞也完全沒問題啦）但我就記錄一下整個申請過程，居然當天超快就拿到簽證（付款後根本不到半小時）可以出發了✈️",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751806354/bahrain_cx4tvh.jpg`,
    createdAt: "2023-11-09",
    category: "bahrain",
  },
  {
    id: "ciao-muscat-d2",
    title: "阿曼 - [馬斯喀特] 卡布斯蘇丹大清真寺",
    description:
      "阿曼最終站 - 卡布斯蘇丹大清真寺，12 月的天氣下穿著袍子還是感覺悶熱，清真寺的花園維護得非常好，建築主體的黃色大理石令人感覺溫暖，整體氛圍寧靜莊重。離開了阿曼大約一小時的飛行抵達巴林王國，波斯灣之旅第三站繼續",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751791706/IMG_3294_gqzpyh.jpg`,
    createdAt: "2024-09-14",
    category: "oman",
  },
  {
    id: "ciao-muscat-d1",
    title: "阿曼 - [馬斯喀特] Mutrah (馬托拉) 一日遊",
    description:
      "說到阿曼的首都馬斯喀特，一定不會錯過 Mutrah (馬托拉)，許多馬斯喀特的標誌性景點都在此，沿著 Mutrah Corniche，會抵達阿曼國家博物館和蘇丹皇宮，安排一天的時間逛這區再適合不過，慢慢逛市集、在濱海漫步、參觀碉堡",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751791663/IMG_3056_o8auiq.jpg`,
    createdAt: "2024-07-25",
    category: "oman",
  },
  {
    id: "ciao-sur-wadi-shab",
    title: "阿曼海岸線 - 小漁村 Sur、河谷健行 Wadi Shab、Bimmah Sinkhole",
    description:
      "離開了沙漠，沿著阿曼灣海岸線先來到了寧靜的小漁村 - Sur，風光明媚的小鎮讓我感到放鬆，再順著主要道路往北，熱門景點 Wadi Shab 絕對值得冒險，他是阿曼著名的乾河之一。天坑 Bimmah Sinkhole 獨特地景有著隕石墜落造成的傳說",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751791581/IMG_2999_c2wl53.jpg`,
    createdAt: "2024-06-23",
    category: "oman",
  },
  {
    id: "ciao-bidiyah",
    title: "阿曼 - 在 Bidiyah 沙漠睡一晚貝都因帳篷！",
    description:
      "一直想體驗看看沙漠住宿，剛好中東之旅有很多這樣的機會。選擇阿曼的 Bidiyah 沙漠相較清幽，不過度商業化，我在沙漠度過了非常難忘的一天！吃椰棗配阿拉伯紅茶，望著帳篷外的駱駝低頭吃草，沙漠的風一直吹，但躲在貝都因帳篷內很溫暖",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751791033/IMG_2942-2_m8bhqy.jpg`,
    createdAt: "2024-05-24",
    category: "oman",
  },
  {
    id: "ciao-nizwa-d2",
    title: "阿曼 - [尼日瓦] 走訪堡壘之國的世界遺產！賈布林堡、巴赫萊要塞",
    description:
      "尼日瓦堡、賈布林堡、巴赫萊要塞可以說是在尼日瓦最重要的三堡景點了，各有特色，值得全部參觀，建議分個兩天避免堡壘疲勞。我喜歡尼日瓦這種歷史感圍繞，越是保有且維護傳統的城市越獨樹一幟，真心推薦來阿曼一定要在尼日瓦住幾天！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751790000/IMG_2796_vvgr0m.jpg`,
    createdAt: "2024-05-16",
    category: "oman",
  },
  {
    id: "ciao-nizwa-d1",
    title: "阿曼 - [尼日瓦] 曾經的舊首都(Nizwa)",
    description:
      "尼日瓦 (Nizwa) 是我在阿曼最喜歡的城市，連過海關被問到要到哪邊旅遊時，海關人員聽到尼日瓦都讚不絕口。老城區販賣傳統手工藝品、隨處可見的阿曼式傳統建築還有堡壘，都顯現出這個城市的獨特迷人。天色漸暗後籠罩在暖黃的燈光下，漫步城區，更能感受到尼日瓦入夜的魅力",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751789219/IMG_3008-scaled_tnfkdk.jpg`,
    createdAt: "2024-04-18",
    category: "oman",
  },
  {
    id: "ciao-abu-dhabi-d2",
    title: "阿布達比 - 酋長皇宮文華東方酒店、Abu Dhabi 羅浮宮",
    description:
      "阿布達比完整的兩日遊，就在美麗的酋長皇宮與阿布達比羅浮宮結束，對於法拉利博物館及其他景點就沒什麼興趣，因此我們要前往下個國家 - 阿曼了，在中東還能吃到一餐鼎泰豐深感幸福，在 Galleria Mall 裡面，我實在是沒辦法每餐都是中東口味",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751787187/IMG_2467_adchj1.jpg`,
    createdAt: "2024-04-10",
    category: "uae",
  },
  {
    id: "ciao-abu-dhabi-d1",
    title: "阿布達比 - 謝赫扎耶德大清真寺 Sheikh Zayed Grand Mosque",
    description:
      "被震撼到的阿布達比大清真寺，親自造訪後充分感受到他的純白高尚、低調奢華，其中不乏許多看點，特殊而獨特的元素如地毯、水晶吊燈及來自世界各國的高級建材及工藝，絕對讓人驚呼連連，瞠目結舌，目前依舊是我心目中第一名的清真寺",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751787143/IMG_2227_mxw4z5.jpg`,
    createdAt: "2024-03-11",
    category: "uae",
  },
  {
    id: "ciao-dubai-d5",
    title: "杜拜 Day5 - 朱美拉 souk、公共海灘",
    description:
      "位於杜拜朱美拉地區的 Souk Madinat Jumeirah，是個享有冷氣且仿傳統市集的商場，順便欣賞帆船飯店，距離朱美拉公共海灘也不遠，適合一天慢慢逛，再走去海邊，喝杯咖啡找間餐廳吃飯，簡單結束我在杜拜的最後一天",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751785935/IMG_2097_wnpqbd.jpg`,
    createdAt: "2024-03-06",
    category: "uae",
  },
  {
    id: "ciao-sharjah",
    title: "阿拉伯聯合大公國🇦🇪 沙迦半日遊 - Day4",
    description:
      "沙迦位於杜拜和阿治曼之間，阿聯酋的第三大城市，也是中東地區的文化名城，文化氛圍、宗教氣氛較濃厚，城市的美化別具用心，直得花上一天的時間來細細品味沙迦這個酋長國的魅力，只可惜半日遊的團比不上自由行的彈性，或許下次還有機會再回到沙迦，更深入的探索他的迷人之處",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751785101/IMG_1974_qldtql.jpg`,
    createdAt: "2024-02-15",
    category: "uae",
  },
  {
    id: "ciao-dubai-d3",
    title: "杜拜路跑🏃‍♀️ F1 阿布達比 GP 2023🏎️ - Day3",
    description:
      "杜拜路跑日四點起了一個大早，一年就這麼一次能跑在 Sheikh Zayed Rd，雖然人太多幾乎跑不動，扎扎實實地走了 5K，但能剛好在杜拜遇到這場活動已經很幸運。更幸運的是我們下午見證了 Abu Dhabi GP 2023🏎️，實在非常震撼和精彩！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751783118/IMG_2261-scaled_rfqrko.jpg`,
    createdAt: "2024-01-15",
    category: "uae",
  },
  {
    id: "ciao-dubai-d2",
    title: "杜拜跳傘！瘋狂又刺激！一定要試試看飛起來的感覺 - Day2",
    description:
      "杜拜的二天非常充實，一早起床我們就直奔 SkyDive 進行我們這次最期待的活動 - 跳傘！跳下來那一刻真的不後悔，美麗的朱美拉棕梠島呈現在我眼前，我驚呼聲從沒停過，現在回想起來還是會不自覺的嘴角上揚，哈里發塔水舞秀也值得駐足欣賞，充分感受杜拜的魅力",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751782926/G0030101-scaled_vv7cvs.jpg`,
    createdAt: "2024-01-06",
    category: "uae",
  },
  {
    id: "ciao-dubai-d1",
    title: "杜拜 Day1 - 老城區感受阿拉伯風情",
    description:
      "波灣之旅開跑，首站是台灣有直飛的杜拜，抵達時看著沿途街景覺得非常不可思議，高樓大廈林立，杜拜畫框和未來博物館也很標誌性，第一天先不急著感受都市叢林，先從舊杜拜作為開端，穿梭在歷史的街區，好好感受一下我沒體驗過的阿拉伯風情",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751781164/IMG_1629-scaled_ihfiwr.jpg`,
    createdAt: "2023-12-28",
    category: "uae",
  },
  {
    id: "ciao-napaling",
    title: "宿霧薄荷島 Bohol Day3 - Napaling 浮潛看沙丁魚風暴",
    description:
      "宿霧是潛水天堂，所有旅人來都會一探究竟這美麗的海底世界，雖然說相比其他專業的潛客，我能看到的美麗景色不多，但還是相當滿足了，尤其是壯觀的沙丁魚群以及深不見底的峽谷，薄荷島上的日子步調非常輕鬆，真的有充飽電的感覺",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751774745/2023-11-19-%E4%B8%8B%E5%8D%8812.44.36_z1zznl.png`,
    createdAt: "2023-12-13",
    category: "philippines",
  },
  {
    id: "ciao-virgin-island",
    title: "宿霧薄荷島 Bohol Day2 - 包船去兩個處女島！",
    description:
      "時間來到在薄荷島的第二天，我很期待的處女島一日遊，不管是大小處女島都美到不行，潔白的沙洲月灣，湛藍無比的天空映射在清透的海平面上，感覺好不真實。下午一個人的咖啡和晚餐菲律賓烤肉，在這裡遇到的人事物都好難忘，越來越喜歡這純樸的薄荷島",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751773660/IMG_1431_bmjage.jpg`,
    createdAt: "2023-11-13",
    category: "philippines",
  },
  {
    id: "ciao-bohol",
    title: "宿霧薄荷島 Bohol Day1",
    description:
      "宿霧第二天，起床吃完早餐就直奔港口搭船去薄荷島，剛抵達薄荷島，搭上嘟嘟車沒多久就開始下雨，但還好到邦勞的時候雨就停了，Check-in 完後第一件事當然就是去 Alona Beach，還有一點夕陽可以看，當作薄荷島第一天完美的開端！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751771578/IMG_1312_heogxr.jpg`,
    createdAt: "2023-11-08",
    category: "philippines",
  },
  {
    id: "ciao-cebu",
    title: "宿霧市區 Cebu 一日遊，街上的感覺和我想的不一樣",
    description:
      "宿霧行的第一日是城市巡禮，麥哲倫十字架、聖嬰大教堂及聖佩德羅堡都是值得造訪的景點，頗具歷史意義。搭乘 Jeepney 穿梭，感受宿霧熱鬧（亂糟糟？）的街頭，誤入果菜市場的冒險，最令人難忘的還是友善的當地人，愛聊天又樂於幫助",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1751771498/IMG_1259_dfgynd.jpg`,
    createdAt: "2023-10-31",
    category: "philippines",
  },
  {
    id: "ciao-chiangrai",
    title: "在清邁 WFH – 清萊一日遊",
    description:
      "位在清邁東北邊的清萊，車程大約三小時左右，主要景點被打包成白廟、藍廟、黑廟、長頸族部落及金三角的一日遊，藝術家揮灑下的華麗廟宇十分驚艷，滿足好奇心的泰、緬、寮金三角也值得到此一遊，遊船在湄公河上，了解不同的歷史",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747576335/IMG_9866-scaled_bmcq1r.jpg`,
    createdAt: "2023-10-11",
    category: "thailand",
  },
  {
    id: "ciao-chiangmai-wfh-4",
    title: "在清邁 WFH - Week2",
    description:
      "第二週在清邁遠端，每天早上都去發掘不同的咖啡店、每天午晚餐都吃不同的路邊攤或餐廳。週五的一日清邁 coworking space 體驗也非常印象深刻，很有 digital nomad 的感覺，工作效率大爆發因為迫不急待趕快下班去探索城市",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747576159/406BE1D1-03B0-413F-8C09-4BBDD694F0D0_pjslla.jpg`,
    createdAt: "2023-07-31",
    category: "thailand",
  },
  {
    id: "ciao-chiangmai-wfh-3",
    title:
      "在清邁 WFH - Weekend1 - Jing Jia Market、瓦洛洛市場、城市柱慶典、拉花冠軍咖啡",
    description:
      "來到清邁遠端工作後的第一個週末，清邁的夜市、文青市集真的不能錯過，我覺得既新奇又好逛，再來剛好遇到清邁城市柱慶典在柴迪隆寺也是很難得的經驗，跟著當地人參與他們的盛事總是令人興奮。週日吃美食找個厲害的咖啡店，對我來說就是完美的假日了",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747575971/IMG_9589-scaled_qksetr.jpg`,
    createdAt: "2023-07-29",
    category: "thailand",
  },
  {
    id: "ciao-chiangmai-wfh-2",
    title: "在清邁 WFH - 週五不上班",
    description:
      "週五請假逛清邁古城，當一個路上觀察家、逛間寺廟、吃一餐道地的泰式料理、有特色的店都進去逛、找間有情調的咖啡店避暑，外面還在下雨就去泰式按摩，晚餐再來吃好的。原本覺得自己今天步調很慢，但發現這一天之中也是做了好多事，清邁是一個偷偷將時間拉長的地方",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747575841/IMG_0825_mi8hye.jpg`,
    createdAt: "2023-07-01",
    category: "thailand",
  },
  {
    id: "ciao-chiangmai-wfh-1",
    title: "在清邁 WFH - Week1",
    description:
      "走在清邁街上散發的是很輕鬆慵懶的氛圍，隨處可見的咖啡廳、共同工作空間對於我們來說非常友善，加上物價的加持才待兩天而已 我就好想一直待在這了，除了天氣我還是受不了以外(我真的很怕熱)，食物也是非常習慣，給讚！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747575753/IMG_0785_i04bii.jpg`,
    createdAt: "2023-06-09",
    category: "thailand",
  },
  {
    id: "ciao-kk-d6",
    title: "沙巴亞庇最後市區巡禮(就都在吃東西) Day6 & Day7",
    description:
      "轉眼七天的亞庇咻一下就過了，每天都玩得很充實，留下了好多珍貴回憶，對我來說在亞庇這座城市，美食文化非常豐富，景點動靜皆有，面山面海，無論想放鬆、探索自然還是了解當地的文化和歷史，水上活動等都可以在這裡找到適合自己的活動，更令人喜愛的是當地風土民情，熱情好客、文化多元",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747574645/IMG_0624-scaled_mtj76m.jpg`,
    createdAt: "2023-03-18",
    category: "malaysia",
  },
  {
    id: "ciao-mantanani",
    title: "沙巴美人魚島 (Mantanani)、卡哇咔哇紅樹林 Day5",
    description:
      "比起沙比島和馬奴干島的話，美人魚島的浮潛確實更美麗，清幽的環境、更細的沙子以及藍綠色的海水，就算路途舟車勞頓也值得，再搭配下午的紅樹林遊船探索這片生態系，讓整天的行程更加豐富，晚上夜賞螢火蟲完美結束一日遊，最開心的是這趟又讓我們認識了不少人，回程鬧哄哄的小巴上大家暢聊，討論著各自的旅途，身體累了但精神依舊亢奮",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747573683/IMG_0460-scaled_kebrbm.jpg`,
    createdAt: "2023-02-04",
    category: "malaysia",
  },
  {
    id: "ciao-kk-d4",
    title: "亞庇加雅街假日市集、秘密景點咖啡、丹絨亞路夕陽 Day4",
    description:
      "新年第一天從加雅街假日市集開始，把我們口袋名單上的瓊萬興和怡豐打勾，熱鬧的市集、炎熱的天氣，再到少女心爆發的粉紅清真寺、秘境咖啡，離斗亞蘭麵很近差點要吃到，但有我們更期待的 sunset bar，丹絨亞路的日落難忘，那延伸看不到盡頭的海，一整片橘紅就在那端落下",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747572168/IMG_0414-scaled_n4tekc.jpg`,
    createdAt: "2023-01-25",
    category: "malaysia",
  },
  {
    id: "ciao-kinabalu",
    title: "沙巴神山公園 - 京那巴魯山 (Kinabalu) Day3",
    description:
      "2022 年的最後一天我們造訪了東南亞的最高峰京那巴魯，親眼看見了令人驚豔的大王花，走過刺激的樹冠吊橋，沿途山路欣賞了許多美景、山上人家，隨著車身擺動的身體，上下搖晃，時而飛速前進，我都來不及拿起相機紀錄，透過後照鏡四目交接的雙眼，我忍不住好奇，每天都是同條路上山是什麼感覺？",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747570693/IMG_0238-scaled_gzgt3v.jpg`,
    createdAt: "2023-01-16",
    category: "malaysia",
  },
  {
    id: "ciao-sapi-manukan",
    title:
      "KK 一日跳島 沙比島(Sapi Island)、馬奴干島(Manukan Island)、加雅街夜市 Day2",
    description:
      "出發前就一直蠻期待沙巴跳島的，湛藍的天空和寶石般的海水對我來說實在非常療癒，在沙比島和馬奴干島上就是盡情享受和放鬆，想下水的時候就去看看魚和珊瑚礁，想休息的時候就在沙灘上躺著曬曬陽光，渴了來顆椰子水，什麼都不用想 只要在乎眼前這片美景就好！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747569413/IMG_0203-scaled_gjkbzg.jpg`,
    createdAt: "2023-01-16",
    category: "malaysia",
  },
  {
    id: "ciao-kk-d1",
    title: "KK, Sabah Day1 亞庇市區慢慢走",
    description:
      "KK 的第一天，我們走一個比較不耗體力的路線，先簡單在 KK 市區走走逛逛解鎖一些美食，想到當地人對我們說，在 KK 一切就是都要慢慢的～ 早餐吃完生肉麵新朋友 Jesi 買了好多小點心給我，我最喜歡炸香蕉酸酸甜甜的！但其實更喜歡馬來人的好客和熱情！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747568103/IMG_0043-scaled_at1x4j.jpg`,
    createdAt: "2023-01-09",
    category: "malaysia",
  },
  {
    id: "ciao-murano-lido",
    title: "威尼斯跳島 Part II 玻璃島和利多島 (Murano y Lido)",
    description:
      "我不會說 Murano 或 Lido 這些跳島必去或是不容錯過，每個旅人都會依自己的喜好安排適合的島嶼且找到樂趣．在 Murano 和 Lido 島上我感覺非常放鬆，‘小島’總像有無形的魔力一樣，拖著你把步調放慢，把每個小細節放大，把情緒拉到最滿，感覺也不是因為有哪裡必訪，內心會因為這些簡單的美好而感動，人事物加起來才是旅程最值得回味之處",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747557622/7583857120_IMG_8817-scaled_vqtgle.jpg`,
    createdAt: "2022-12-27",
    category: "italy",
  },
  {
    id: "ciao-burano",
    title: "威尼斯跳島 Part I 在彩虹島找色彩(Ciao Burano)",
    description:
      "期待走進這巨大的調色盤，就當我們在抵達的那刻起，就無時無刻被這些色彩療癒著，簡單的走走看看漁村日常生活，幻想著我住這裡也會有一艘小艇當交通工具，島上就是這麼愜意、與世無爭",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747555676/7518854608_IMG_8426-scaled_ianx56.jpg`,
    createdAt: "2022-12-08",
    category: "italy",
  },
  {
    id: "ciao-venice",
    title: "浪漫水上之都～ 海上絲綢之路 - 威尼斯 (Venezia)",
    description:
      "浪漫的水都，昔日的國際金融中心、海上絲路的節點，其獨特的景觀由大運河、縱橫的支線水道及多座橋樑交錯而成，其中最令我陶醉的還是那潟湖水面上船槳掀起的漣漪、來往穿梭的船隻、熱鬧擁擠的街道，彷彿看到13世紀末時最繁榮的威尼斯",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747554158/7516758736_IMG_7629-scaled_ux4htk.jpg`,
    createdAt: "2022-11-14",
    category: "italy",
  },
  {
    id: "ciao-ghent",
    title: "無意間逛到可以吃飯的教堂 - 根特(Ghent)",
    description:
      "河岸城市對我來說總是吸引人，在根特這小而美的城市，是時間的不足所以也沒有挖掘的特別深入，真的可以說是簡單的城市巡禮而已，根特的 Stepped Gable 山形屋也是我覺得很可愛的，如果可以的話我覺得一定要找間河岸咖啡廳，度過悠閒放空的午後，因為在像根特這樣的中世紀小鎮，除了要懂享受還是要享受",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747552581/IMG_4232-scaled_chsqw5.jpg`,
    createdAt: "2022-07-30",
    category: "belgium",
  },
  {
    id: "ciao-bruges",
    title: "保存完好的中世紀小鎮 - 布魯日(Bruges)",
    description:
      "比利時最具中世紀韻味的小鎮非布魯日莫屬，充滿歷史氣息的古城搭配悠悠的運河，而你穿梭在這個有故事的城市，用相機和文字記下這些所見所聞，無意間布魯日鐘樓下的音樂會，為我這趟旅程增添了一抹色彩，讓這塊旅行畫布越來越繽紛",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747457593/IMG_3995-scaled_tpzcmp.jpg`,
    createdAt: "2022-04-17",
    category: "belgium",
  },
  {
    id: "ciao-bologna",
    title: "世界最古老大學、拱廊之城 - 波隆那(Bologna)",
    description:
      "波隆那這座城市雖然我們停留的短暫，但從踏入的第一刻就能感受到義大利的中世紀風情及文藝氣息，在清晨時分隨意漫晃波隆那市區、欣賞保存完善的古典建築、世界最古老大學的學生酒醉？以及無限的拱廊街道，不是在人潮眾多的時段造訪也更能專注欣賞波隆那的特色",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747455933/7516758736_IMG_7405-scaled_iogqnn.jpg`,
    createdAt: "2022-01-31",
    category: "italy",
  },
  {
    id: "ciao-geneva",
    title: "瑞士最國際化的城市 - 日內瓦(Geneva)",
    description:
      "日內瓦 ，因為羅納河的經過串起了法國與瑞士的地理關係，日內瓦就像小小的大都會，不只是大家所熟知的會議之城，也是文化和歷史中心，舊城區有迷人的湖和碼頭、湖畔步行大道、星羅棋布的公園、有趣的小巷隱藏著風格典雅的店鋪，和各式各樣的餐廳！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747408470/IMG_7921-scaled_ypl06k.jpg`,
    createdAt: "2022-01-16",
    category: "switzerland",
  },
  {
    id: "ciao-lausanne",
    title: "萊芒湖和阿爾卑斯山擁抱的 - 洛桑(Lausanne)",
    description:
      "雖然在這個城市停留的極其短暫，也沒有充分時間在這裡探索，不過我對這座城市的第一印象很好 非常舒適宜人，回想起漫步湖畔的悠閒時光和享受生活的當地人們，洛桑真的很適合放鬆，身為重視文化和體育的洛桑，也有奧林匹克之都的美名",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747406571/7518858928_IMG_6868-scaled_vfeb0e.jpg`,
    createdAt: "2022-01-11",
    category: "switzerland",
  },
  {
    id: "ciao-bern",
    title: "被純樸、靜謐中世紀氣氛圍繞的現代化城市- 伯恩(Bern)",
    description:
      "四月的伯恩有著溫暖的陽光，純樸的首都還完美保有著中世紀的風貌，一邊漫步老城 一邊感受瑞士歷史的變遷，磚紅色屋頂、古老的石塊街道及巧匠精心雕琢的各種造型噴泉，都是伯恩的獨特之處．靜靜體會這座被古老外表包圍的現代化城市，打從心底覺得這裡很適合居住，是個值得細細品味的城市",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1747403102/IMG_7326-scaled_o0cfej.jpg`,
    createdAt: "2021-10-23",
    category: "switzerland",
  },
  {
    id: "ciao-zermatt",
    title: "Zermatt 滑雪，搭火車去 Gornergrat 看馬特洪峰！",
    description:
      "Zermatt 不只是滑雪人的天堂，也是台灣人喜愛的瑞士小鎮，隨時一抬頭 馬特洪峰就能映入眼簾，在這裡能以各種角度、不同活動去品味瑞士代表的山峰，既悠哉身心靈也完全達到放鬆，我在這體驗到了人生第一次滑雪，到 Gornergrat 景觀台看夕陽冰川，享受瑞士獨有的風景，度過美好一天",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746368511/20180419_180424_0117_a82vrw.jpg`,
    createdAt: "2021-09-18",
    category: "switzerland",
  },
  {
    id: "ciao-interlaken-to-zermatt",
    title: "從茵特拉肯(Interlaken) 前往策馬特(Zermatt)！第一次汽車搭火車",
    description:
      "在 Kandersteg 👉🏻 Goppenstein 這段路之間全是高山，於是有這條鐵路 (Lötschberg Railway) 配上汽車專用的火車，帶我們穿越勒奇山隧道 (Lötschberg Tunnel)",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746367108/IMG_6971-scaled_zvla8t.jpg`,
    createdAt: "2021-08-27",
    category: "switzerland",
  },
  {
    id: "ciao-murren",
    title: "雪朗峰山腳、瑞士最美小山村 - 米倫小鎮(Mürren)",
    description:
      "如果說米倫小鎮是瑞士最美麗的村莊，我非常同意！這裡是徒步的天堂，而且艾格峰、僧侶峰和少女峰的美景就環繞在身邊，你只需要走山路、欣賞自然風光，聽牛嘎嘎地吃草，任由這片風景在你腳下蔓延開來就可以了！盡情的享受這片世外桃源，讓他成為旅途中最棒的回憶",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746360259/IMG_6939_fkmgji.jpg`,
    createdAt: "2021-08-22",
    category: "switzerland",
  },
  {
    id: "ciao-lauterbrunnen-wengen",
    title: "瀑布小鎮盧達本納(Lauterbrunnen)、溫根(Wengen) 少女峰地區一日遊",
    description:
      "Lauterbrunnen 的美好光看網路上介紹的那樣感受不到，要親自走進這絕美的瑞士村莊，體驗到其壯麗的山谷地形，才能感受到心理的衝擊，Lauterbrunnen 不大，很適合搭配 Wengen 或 Grindelwald 一起玩，來瑞士絕對不能錯過",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746357018/IMG_6848_nganw3.jpg`,
    createdAt: "2021-08-01",
    category: "switzerland",
  },
  {
    id: "ciao-luzern",
    title: "瑞士的中心！湖畔如畫美的不真實 - 琉森(Luzern)",
    description:
      "琉森這座湖畔城市，就如他的名字一樣晶瑩剔透，鑲嵌在令人難忘的山嶺間，這裡是前往瑞士中部旅行的理想出發地．無論是在琉森湖邊漫步、老城區逛街、歐洲最古老的木橋歷史巡禮，每個旅人都可以在這座保存良好且景色醉人的古城，找到其趣味及發掘自己獨一無二的旅行方式",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746203325/IMG_5478-scaled_o4fgwg.jpg`,
    createdAt: "2021-07-28",
    category: "switzerland",
  },
  {
    id: "ciao-zurich",
    title: "歐洲最富裕的城市 - 蘇黎世(Zürich)",
    description:
      "蘇黎世是個很適合徒步閒逛的城市，以蘇黎世車站為出發點，往蘇黎世湖一路向南，有精品街可以感受瑞士時尚、有中世紀古城小巷可以穿梭找靈感、有高處的公園可以俯瞰蘇黎世、有三大教堂搭配河畔風景放空閒聊，逛起來非常舒適且應有盡有，不愧是世界排名前幾的城市，很值得走走！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746026049/IMG_5126-scaled_boylbv.jpg`,
    createdAt: "2021-07-27",
    category: "switzerland",
  },
  {
    id: "ciao-vaduz",
    title: "『列支敦士登』瓦杜茲(Vaduz) - 來到最有錢的迷你國家",
    description:
      "列支敦士登是個嬌小可愛的國家，人口也不多，卻擁有人均國民生產總值世界排名前三的高國民收入水準，雖然短暫停留，但留下最深刻印象的卻是最後要離開時 家家戶戶溫暖燈光亮起，透過窗戶看到餐桌上的菜餚和酒，在天色還沒全暗之前的白色山頭，感受小城帶給我前所未有的寧靜",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746025037/IMG_4735-scaled_twpb2a.jpg`,
    createdAt: "2021-07-23",
    category: "liechtenstein",
  },
  {
    id: "ciao-st-gallen",
    title: "瑞士半日輕旅行 - 聖加倫(St. Gallen)",
    description:
      "在聖加侖這座城市我看到極具特色並充滿童趣的建築，凸窗和濕壁畫很容易吸引目光，不自覺得進入讚嘆模式，聖加侖修道院和圖書館帶來的體驗更是超乎想像，當我腳踩在吱吱作響的圖書館地板時，更能強烈感受其歷史悠久，很推薦一遊！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746023872/IMG_4425-scaled_jqbpsc.jpg`,
    createdAt: "2021-07-23",
    category: "switzerland",
  },
  {
    id: "ciao-rome-to-swiss",
    title: "從羅馬出發瑞士！",
    description:
      "都在歐洲了，想去任何國家都非常容易，所以打算在交換期間來個小旅行！本來是很想去摩洛哥的，不過需要簽證會來不及，於是最後決定去最有童話故事氛圍、最夢幻的瑞士🇨🇭",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1746022732/IMG_9218_e416cr.jpg`,
    createdAt: "2021-07-22",
    category: "switzerland",
  },
  {
    id: "ciao-sintra",
    title: "里斯本避暑勝地 - 辛特拉(Sintra)",
    description:
      "辛特拉就像是過往王宮貴族浪漫夢想的實現，宛若童話的小城 封存著一段最美好的時光，因涼爽氣候、綠蔭蔥蘢而發展為王室貴族的避暑勝地，當15～16 世紀大航海時代來臨，貴族與富豪紛紛在辛特拉建立起漂亮的別墅皇宮，開啟了辛特拉的輝煌年代",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745938100/7516828016_IMG_8380-scaled_p928nv.jpg`,
    createdAt: "2021-07-10",
    category: "portugal",
  },
  {
    id: "ciao-lisbon",
    title: "漫步歐洲文化之都 - 里斯本(Lisbon)",
    description:
      "里斯本真的挺適合生活的，在這裡遇到的人也都很親切，喜歡電車穿梭在街巷，高高低低的坡帶我看見各種不同美景，從俯瞰大片紅磚屋頂 到見證一切大航海時代開端的港口，這裡的建築有各種活潑的色調，也有我最喜歡的花磚，在里斯本市區整體的感覺非常舒適宜人，夜生活也熱鬧",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745937983/7516817536_IMG_8751-scaled_kwhb7v.jpg`,
    createdAt: "2021-06-22",
    category: "portugal",
  },
  {
    id: "ciao-seville",
    title: "感受原汁原味的西班牙 - 塞維利亞(Seville)",
    description:
      "在風光明媚的安達魯西亞城市，佛朗明哥舞的起源地，這裡讓我感受到最原始原味的西班牙，揭開我對西班牙的所有印象．粉白黃、黃紅 勾勒出整片城市的色彩，這裡有絕美的世界遺產西班牙廣場，到處也有摩爾的影子．西班牙之旅在這裡畫下句點，在這裡的每座城市真的一個比一個驚喜，而且各有特色，還有許多南邊的城市期待能快點造訪",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745807242/7518910528_IMG_7624-scaled_qw1lmi.jpg`,
    createdAt: "2021-06-09",
    category: "spain",
  },
  {
    id: "ciao-granada",
    title: "保留中世紀摩爾建築之美 - 格拉納達(Granada)",
    description:
      "這趟格拉納達對我來說是非常燦爛、澎湃且震撼的回憶，儘管旅程中總有不完美之處，但也構成下次再回來的理由。Albayzín 滿滿的摩爾古蹟及伊斯蘭風情讓我招架不住，讓此行沒機會去北非的我興奮不已。Alhambra 偉大的和幾近完美的建築呈現，相較於中世紀混沌的歐洲，此時的伊斯蘭文明顯得更絢麗",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745806862/IMG_7202-scaled_ybgczt.jpg`,
    createdAt: "2021-06-06",
    category: "spain",
  },
  {
    id: "ciao-segovia",
    title: "馬德里近郊一日遊 - 塞哥維亞(Segovia)",
    description:
      "這裡是寧靜且風景極具特色的古城，大小適中讓你一天逛完還有活力可以去酒吧👍 放慢速度欣賞老城每個角落，悠悠哉哉地走在復古的街道，欣賞歷史遺跡，敞洋在塞哥維亞獨特的氛圍中，我覺得很舒服又很愜意，絕對值得來一趟！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745764792/IMG_8666-scaled_qgxhci.jpg`,
    createdAt: "2021-05-22",
    category: "spain",
  },
  {
    id: "ciao-madrid",
    title: "I ❤️ Madrid - 馬德里",
    description:
      "有一點吵雜，有一點髒亂，方方正正的太陽門廣場，還有多才多藝的街頭藝人，這裡是我在馬德里最常經過的地方，馬德里逛起來很舒服，雖然對我來說沒有太致命的吸引力，但花上一天半的時間來走跳還是很可以！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745763172/IMG_6634-scaled_pgij4r.jpg`,
    createdAt: "2021-04-19",
    category: "spain",
  },
  {
    id: "ciao-barcelona",
    title: "來過肯定愛上城市 - 巴賽隆納(Barcelona)",
    description:
      "找不到有什麼更鏗鏘有力的形容詞來描述我對這個城市的熱愛，短短幾天就讓我著迷，逛巴賽隆納安排四天真的不夠，無論是建築、美食、運動、音樂等等.... 各方各面都表現傑出，不難想像各路人才來到這個城市尋找他要的知識、靈感",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745758197/IMG_7922-2-scaled_xm1is3.jpg`,
    createdAt: "2021-04-17",
    category: "spain",
  },
  {
    id: "ciao-naxos",
    title: "希臘寧靜小島推推 - 納克索斯(Naxos)",
    description:
      "Naxos 沒有很多觀光客，沒有喧鬧的街道，沒有擁擠的景點，很適合讓自己放鬆到最極限，不輸其他希臘海灘，這裡的海水也很乾淨清澈，一本書耳機戴上，也是一個美好下午，不難感受到這個小島的寧靜與世無爭，如果想要遠離塵囂的話，來這裡就對了，可以安心把自己放在最單純沒煩惱的生活",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745660061/IMG_7625_phwoqb.jpg`,
    createdAt: "2021-03-04",
    category: "greece",
  },
  {
    id: "ciao-hydra",
    title: "希臘一日跳島說走就走 - 伊茲拉島(Hydra)",
    description:
      "在與內心糾結的同時來到 Hydra，正好是我覺得很適合調劑身心的小島，小巧可愛，風景優美，說是來這裡學習怎麼過生活都不為過，有足夠時間的話覺得住上一天感覺會很棒，這裡的慵懶慢步調很適合放鬆，剔透的海水隨時可以跳下去游泳，島上景色更不用說不愧是人稱的藝術家之島",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745754011/IMG_6211-scaled_vkga1g.jpg`,
    createdAt: "2021-02-12",
    category: "greece",
  },
  {
    id: "ciao-santorini",
    title: "希臘必去藍白夢幻小島 - 聖托里尼(Santorini)",
    description:
      "聖托里尼整個就是藍白代表，一生一定要去一次的夢幻小島，有特色又充滿了度假風情，對很多人來說是如此，對我好像又有點不一樣，多了一份情感，一些對人事物的眷戀...希臘必去海島的藍是最令人印象深刻，好像可以包容所有的事物，心胸非常寬大，島上建築因應地勢形成一種特色也顯得獨特可愛",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745750447/IMG_7589_vkajdx.jpg`,
    createdAt: "2020-12-27",
    category: "greece",
  },
  {
    id: "ciao-athens",
    title: "古典與現代並存的城市 - 雅典(Athens)",
    description:
      "雅典是世界最古老的城市，而我最喜歡的是這座城市古蹟與現代並存之美！雅典消費並不算太高，可能希臘破產後旅遊不會很貴，關於治安我覺得是不管去到歐洲哪個城市都是需要小心的，某天早上在雅典的連鎖咖啡店我才看到有人想偷摸一位亞洲人的包包... 總之，這個城市充滿了歷史氣息，重要古蹟又和市區距離蠻近，天氣的話真的是超熱，不過是乾熱，身上不會有黏黏的感覺，整體還是非常值得一遊！",
    thumbnailUrl: `${CLOUDINARY_BASE}/v1745675531/IMG_5531-scaled_gftka7.jpg`,
    createdAt: "2020-11-24",
    category: "greece",
  },
];
