import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import {
  CLOUDINARY_BASE,
  CLOUDINARY_VIDEO_BASE,
} from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import VideoTextRow from "@root/components/typography/VideoTextRow";
import Video from "@root/components/typography/Video";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoKKDay4 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="亞庇加雅街假日市集、秘密景點咖啡、丹絨亞路夕陽 Day4" />
      <CreatedDate date={"2023-01-25"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572168/IMG_0414-scaled_n4tekc.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date={"1 Jan 2023 (Day4)"} />
        <Paragraph>
          迎接2023年的第一天！就從加雅街假日市集開始！今天我們的好朋友 Jec
          要和我們一起逛 KK
          最熱鬧的加雅街，品嚐美食，接著帶我們去她的秘密景點，傍晚還有我最期待的
          sunset bar！等不及要好好展開這一天了
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572166/IMG_0356-1024x683_lz9de9.jpg`,
          }}
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747572183/c86295f48bc24b69a5037c48959a908d_pd86s6.mp4`}
          text={"傳統樂器演奏是美好一天的開端"}
        />
      </Section>

      <Section>
        <SubTitle title="Tamu Gaya Street (加雅街假日市集)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572165/IMG_0327-1024x683_hgqrlv.jpg`,
          }}
        />
        <Paragraph>
          我已經準備好要探索加雅街市集了，才剛逛沒多久就已經有許多攤吸引我目光，各式各樣的商品都感到新奇
          <br />
          從日常的蔬菜水果，到當地的馬來小吃糕點、充滿度假風情的洋裝草帽及草編包包，還有我最最最愛的捕夢網！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572166/IMG_0357-1024x683_m2hrhy.jpg`,
          }}
        />
        <Paragraph>可可愛愛的冰淇淋車</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747572165/IMG_0330-1024x683_xfhrej.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747572165/IMG_0346-1024x683_qjze0n.jpg`,
            },
          ]}
        />
        <Paragraph>
          Jec
          沿路買了一些水果晚點要讓我們嚐嚐這些特色，也買了一瓶豆漿給我試試看，和台灣的不同，但我真的不曉得要怎麼形容他的差別😅
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Keng Wan Hing (瓊萬興肉包)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572164/IMG_0331-1024x683_brbz7l.jpg`,
          }}
        />
        <Paragraph>
          當地人推薦必來吃的早餐店！老闆非常客氣店家服務態度也好，食物好吃且銅板價，CP值實在高
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572165/IMG_0333-1024x683_epfl4w.jpg`,
          }}
        />
        <Paragraph>
          烘麵包類我們點了奶油口味，酥餅類我們點了豆沙、咖哩牛、叉燒，我個人本來就偏好鹹食，鹹的口味都超對我胃！
          <br />
          平常我不大愛吃麵包類，不過他的奶酥烘麵包我一顆吃光，一定要熱熱軟軟的才好吃
          <br />
          飲料我們喝檸檬紅茶還有 Kopi-O aka 咖啡烏，也就是黑咖啡～～～
          除了這些之外還有麵食類可以選擇，非常多元
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747572165/IMG_0339-1024x683_bprqqu.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747572164/IMG_0336-1024x683_iogmet.jpg`,
            },
          ]}
        />
        <Paragraph>
          瓊萬興的肉包真的太讚了👍
          QQ的皮搭配大方的內餡，有蛋、香菇還有好多肉！推推再來一杯美祿或可可，對了
          Jec 說當地人都很喜歡喝美祿哈哈哈！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Laksa Yee Fung (怡豐茶室)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572167/IMG_0347-1024x683_g6xqg9.jpg`,
          }}
        />
        <Paragraph>
          早餐才剛吃完就立馬來吃午餐了，很有名氣的怡豐，排隊雖然長但也不至於等太久，我在沙巴發現幾乎每間餐廳不管什麼類型都一定會有喝的耶，茶室類型的那種，即便他店名沒有茶室後綴，店家裡面都會有專門調製飲料的區域且種類也不少，有拉茶、檸檬紅茶、美祿、薏米水和各個店家色色飲料等等
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572166/IMG_0353-1024x683_ylyxck.jpg`,
          }}
        />
        <Paragraph>
          我們點了怡豐叻沙和怡豐牛雜，份量對剛吃完早餐的我們來說剛好，兩樣味道我都喜歡但偏鹹，沙煲雞飯也許多人推薦，但這次胃空間不夠了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572165/IMG_0341-1024x683_q90wqr.jpg`,
          }}
        />
        <Paragraph>
          失心瘋買了捕夢網和一件洋裝，Jec 還幫我殺價有當地人陪我真的何等幸運😂
          不至於被坑
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572166/IMG_0358-1024x683_hbtnrj.jpg`,
          }}
        />
        <Paragraph>
          市集除了主要那條路之外隔壁條也有攤位，大多賣蔬果海鮮較多
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Universiti Malaysia Sabah (馬來西亞沙巴大學)" />
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747572179/video_17397859294469-HdsbJ8GY_hfh8pe.mp4`}
        />
        <Paragraph>
          原本不在此次計劃之內的粉紅清真寺，在 Jec
          載我們前往下個景點時經過，那怎麼能錯過呢
          <br />
          清真寺在馬來西亞沙巴大學內，學校景色非常優美，還有個水族館，校區非常大！一面迎向蔚藍的海洋，另一面則面向京那巴魯山
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572166/IMG_0375-1024x683_ncuthr.jpg`,
          }}
        />
        <Paragraph>
          穆斯林一天要祈禱五次，而且很有趣的是他們都會廣播出來讓整個外面都聽到
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572167/IMG_0385-1024x683_qhudzs.jpg`,
          }}
        />
        <Paragraph>
          繼續向北，往斗亞蘭 (Tuaran) 的方向會經過 Mengkabong River
          Bridge，橋上視野非常美可以從很棒的角度看神山
          <br />
          Jec
          要帶我們去她的秘密景點，先停在了路邊，走進一個小村落，這是菲律賓移工們居住的環境，斗亞蘭附近正在開發新的渡假酒店，將來也許會是一個新的觀光勝地
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747572167/IMG_0392-1024x683_hmrdau.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747572169/IMG_0393-1024x683_owsb0l.jpg`,
            },
          ]}
        />
        <Paragraph>
          零星的餐廳、慵懶的狗狗、平靜的海水和柔和的陽光，海風陣陣吹來拂過你的髮絲和臉龐，我知道為什麼
          Jec
          喜歡在假日來這裡散步也好，喝個咖啡也好，我也有一樣的感覺，這種慵懶是會愛上的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572167/IMG_0389-1024x683_dlde5g.jpg`,
          }}
        />
        <Paragraph>
          你可以看到那些水上人家，依賴水邊的民族捕撈漁獲，接近當地生活
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572169/IMG_7449-1024x768_ue6sj6.jpg`,
          }}
        />
        <Paragraph>
          我們要去的咖啡店一路上可不簡單，前些日子的大雨水還積在坑洞，如前面文章所提到沙巴有些路況是非常不好，我們開車的時候左閃右閃才好不容易迎來較為平坦的路面
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="ICETHETIC CAFE" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572169/IMG_7452-1024x768_ypo1ir.jpg`,
          }}
        />
        <Paragraph>
          沒想到小村落裡還隱藏了一間如此文青的咖啡店，佈置得充滿綠意，令人感到放鬆
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572169/IMG_0396-1024x683_zdgwh7.jpg`,
          }}
        />
        <Paragraph>在咖啡店裡看海放空，左邊還能看到我們來時的橋</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572168/IMG_0398-1024x683_hjer2y.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747572169/IMG_7457-768x1024_bv3zkq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747572170/IMG_7465-768x1024_wfkhdm.jpg`,
            },
          ]}
        />
        <Paragraph>
          懷念炸香蕉的滋味，酥酥的外皮還帶有點溼潤，上面灑滿起司還有黑糖！是我意想不到的組合卻令人回味無窮，就算高熱量也瞬間拋在腦後啦
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572171/IMG_7458-1024x768_ompscq.jpg`,
          }}
        />
        <Paragraph>
          我們在 KK 最棒的朋友，東聊西聊很開心，能更認識馬來西亞、沙巴、亞庇
          到巴夭族....等等 收穫滿滿，對我來說也是出來玩最大的意義
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747572164/E00E4779-07C4-4DA7-BFBE-E481C506BF7C-576x1024_eomc54.jpg`}
          text="沙巴水果試吃大會！
                <br /><br />
                山竹 (Mangosteen) - 我最喜歡！酸甜多汁
                <br />
                紅毛丹 (Rambutan) - 像荔枝一樣的口感
                <br />
                波羅蜜 (Jackfruit) - 很甜我甚至覺得香氣有點像香蕉
                <br />
                香波羅 (Tarap) - 接地氣吃法用手扳開，果肉香甜
                <br />
                蛇皮果 (Salak/Snake fruit) - 吃起來很澀，最後一名"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572167/IMG_0395-1024x683_k1jhxn.jpg`,
          }}
        />
        <Paragraph>
          鄉下的小黃狗總是很友善，跟著我們一前一後，我很喜歡這張 樸實的感覺
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Sunset Bar" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572167/IMG_0404-1024x683_ypjuby.jpg`,
          }}
        />
        <Paragraph>
          在香格里拉酒店內的 sunset bar ，如果想要 sun longue
          的座位出發前就要先在網路上寫信預約，和高腳座位兩者低消不同，入座後服務生還會再和你確認一次
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572167/IMG_0419-1024x683_wqshoe.jpg`,
          }}
        />
        <Paragraph>
          Cheers for 2023!
          海景第一排沐浴在金黃色的夕陽，額頭被曬到發燙，舉起酒杯敬美好的旅程，捨不得這太陽落下，希望時間停留在這刻
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572168/IMG_0422-1024x683_it2e4x.jpg`,
          }}
        />
        <Paragraph>
          我們的沙爹肉串和酒精們，聽著海浪聲夾雜人們的談笑聲，環顧一下四周，大家都各自和家人朋友愛人們共度這一天之中最浪漫的時光
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747572168/IMG_0437-683x1024_enwcc3.jpg`}
          text="sunset bar 的服務生拍照都非常專業和敬責😂 拍到你滿意為止"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572168/IMG_0424-1024x683_hxjaiy.jpg`,
          }}
        />
        <Paragraph>
          丹絨雅路海灘 (Tanjung Aru Beach) 有知名的夕陽美景，可以到公共海灘或
          sunset bar 這邊看日落
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572168/IMG_0428-1024x683_acpdgl.jpg`,
          }}
        />
        <Paragraph>
          夕陽越落下整片天空被染得更橘紅，當天的雲層較厚，雖然遮擋了夕陽，但依然不減他的魅力，這片景色也是要看運氣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572168/IMG_0432-1024x683_klmisz.jpg`,
          }}
        />
        <Paragraph>
          我感覺我已經完全融入這廣闊的天空和大海之中，真的會看到癡迷誒
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572169/IMG_0448-1024x683_tadip7.jpg`,
          }}
        />
        <Paragraph>
          日落後換來星空，大約七點時人潮已減少大半，外面的海灘夜市尋覓晚餐是好選擇
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747572169/IMG_0452-1024x683_wnv9s8.jpg`,
          }}
        />
        <Paragraph>
          喝完酒吃完肉串和一些炸海鮮之後肚子還飽飽的，先回我們的飯店休息
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747572170/IMG_7483-768x1024_tw8mug.jpg`}
          text="Jec 買給我們的點心，這就是我要的椰子布丁！一顆大到可以吃到烙賽ＸＤＤ
          <br />
          我真的深深愛上，布丁的口感其實比較像豆花，旁邊的果肉還可以刮下來吃，既清涼又美味消暑！"
        />
      </Section>

      <Section>
        <SubTitle title="To Be Continue..." />
        <Paragraph>
          新年第一天從加雅街假日市集開始，把我們口袋名單上的瓊萬興和怡豐打勾，熱鬧的市集、炎熱的天氣，再到少女心爆發的粉紅清真寺、秘境咖啡，離斗亞蘭麵很近差點要吃到，但有我們更期待的
          sunset
          bar，丹絨亞路的日落難忘，那延伸看不到盡頭的海，一整片橘紅就在那端落下
          <br />
          明天也是重頭戲，我們要去美人魚島！是直接和旅行社訂的比較便宜，不過
          2023 年開始所有行程都漲價，未來也可能會越來越貴
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoKKDay4;
