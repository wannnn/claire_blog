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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import Preface from "@root/components/typography/Preface";

const CiaoSabah = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="KK, Sabah Day1 亞庇市區慢慢走" />
      <CreatedDate date={"2023-01-09"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568103/IMG_0043-scaled_at1x4j.jpg`,
          }}
        />
      </Section>

      <MyDate date={"29 Dec 2022 Kota Kinabalu, Sabah (Day1)"} />

      <Section>
        <Paragraph>
          時隔四年，因為 Covid 打亂計劃，終於在 2022 年底出國玩了！
          <br />
          這次很臨時決定把特休集中請掉，於是我們在兩天內就敲定了去馬來西亞第六大城市
          也是沙巴州的首府！
          <br />
          亞庇，當地人都說 KK，位於婆羅洲西北方的海岸區，朝向 South China Sea
          <br />
          西側有著名的東姑·阿布都拉曼公園，東側有京那巴魯山，這座山也是亞庇馬來語名稱的來源
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568097/IMG_0024-1024x683_ki8txk.jpg`,
          }}
        />
      </Section>

      <Section>
        <Preface>
          這可能要先從出發前的機場說起，那時我們在 Air Asia 櫃檯那排超長的隊伍要
          check
          in，搭訕了一位來台北玩要回沙巴的當地人，男友問她哪裡好吃好玩，我比較俗辣
          本來還覺得不要打擾人家😂 後來因為飛機 delay，我們在候機的同時 那位女生
          Jec
          過來和我們介紹景點，我們也交換了聯絡方式，甚至她還說要帶我們玩！覺得也太棒了！在旅程的一開始就讓我們遇到很熱心的人
          :))
        </Preface>
      </Section>

      <Section>
        <SubTitle title="Sinsuran Sang Nyuk Mee（新蘇蘭生肉麵）" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568096/IMG_0021-1024x683_yuzh7z.jpg`,
          }}
        />
        <Paragraph>
          我們和 Jec 約好隔天一起吃早餐，她帶我們來新蘇蘭
          <br />
          新蘇蘭有多間分店，我們去的是
          <a
            href="https://www.google.com.tw/maps/place/Sinsuran+Sang+Nyuk+Mee+Metro+Town+Restaurant/@5.9765303,116.1122358,17z/data=!3m1!4b1!4m6!3m5!1s0x323b6969d5943a43:0xad91aa9d865f85!8m2!3d5.9765303!4d116.1122358!16s%2Fg%2F11cmycjbzj?hl=zh-TW&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            這間
          </a>
          ，離市區是有小段距離
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747568099/IMG_7282-768x1024_yewwp9.jpg`}
          text="在這邊很特別
          會看到當地餐廳把餐具泡在熱水裡端給你，我想應該是一種高溫殺菌的概念？"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568096/IMG_0022-1024x683_cymy5s.jpg`,
          }}
        />
        <Paragraph>
          我點的米粉裡面有貢丸、蔬菜、粉腸、豬肚、生肉片等料，還蠻豐富的，上面有油蔥增加香氣，他們的肉片因為很薄
          所以吃起來很軟，而米粉比較像是越南米線那種感覺
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568117/IMG_7285-1024x768_lr0zey.jpg`,
          }}
        />
        <Paragraph>
          吃飽後我們在旁邊的市場逛逛，這邊有很多馬來小點 看起來都很好吃！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568104/IMG_0025-1024x683_iaqbyf.jpg`,
          }}
        />
        <Paragraph>
          這時候還是沙巴的暑假，氣溫大約 25~30
          度左右，也應該算是雨季的尾巴，但還是很有機會碰到大雨，不過根據當地人說雨是來的又快又急，最好是都要帶著傘
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568096/IMG_0026-1024x683_frijcf.jpg`,
          }}
        />
        <Paragraph>
          在東南亞普遍好像都用 Grab 來叫車，就像 Uber 一樣，
          價錢真的是很甜而且定位又準！我們在 KK 的這一週都是用這個代步！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Teluk Likas Beach" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568096/IMG_0027-1024x683_kravxc.jpg`,
          }}
        />
        <Paragraph>
          在我們前往水上清真寺的路上有一排漂亮的海岸線，後方的大樓是政府單位機構
          <br />
          岸邊的水非常混濁，因為前幾天下了場大雨水淹到馬路上才導致的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568109/IMG_7286-1024x768_rsmcl9.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Masjid Bandaraya Kota Kinabalu（沙巴清真寺）" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568099/IMG_0039-1024x683_n0osnp.jpg`,
          }}
        />
        <Paragraph>非常美的水上清真寺！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568097/IMG_0044-1024x683_bggcyw.jpg`,
          }}
        />
        <Paragraph>
          清真寺在白天、傍晚和夜晚各有不同的美～
          但只有拍到白天的樣子，其他都是搭車經過時看到的，很常會經過這邊
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747568116/IMG_7287-768x1024_jcr7d0.jpg`}
          text="男友此趟沙巴亞庇拍照表現良好，記嘉獎一隻"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568109/IMG_7290-1024x768_y1snzh.jpg`,
          }}
        />
        <Paragraph>
          進入清真寺前
          要先向遊客服務中心租借服裝以符合服儀規定，男生的話其實短袖長褲就可以，只是都來了還是租一下體驗看看哈哈哈
          😂 女生則是都要租借，門票 5RM + 服裝 5RM，換算台幣才 70 元也不貴
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568113/IMG_0066-1024x683_rjsju7.jpg`,
          }}
        />
        <Paragraph>
          在這邊遇到一位從吉隆坡來玩的遊客和我們搭話，推薦我們要去仙本那，只可惜這次沒計畫，又是一個下次再來的理由了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568115/IMG_0065-1024x683_wjgqyo.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568114/IMG_0048-1024x683_ilnofq.jpg`,
          }}
        />
        <Paragraph>
          遊客只能止步於前面階梯那，在裡面就不能進去了，中間這塊空地很大，許多人坐在這裡休息好像自己家客廳那樣
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747568098/IMG_0056-1024x683_rdyyyn.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747568102/IMG_0052-1024x683_zp2spd.jpg`,
            },
          ]}
        />
        <Paragraph>
          穿這樣真的是頗熱，頭巾還是不織布那種材質，還好清真寺裡面有超大吊扇
          <br />
          右邊那位真的很好笑，很像在賣 Kebab 還是土耳其冰淇淋的
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Nook Cafe" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568111/IMG_0067-1024x683_pznho5.jpg`,
          }}
        />
        <Paragraph>
          結束了清真寺行程我們來咖啡店輕鬆一下，這條街有蠻多好咖啡店、bar
          或墨西哥餐廳，是相對較多異國風情餐廳的地方
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568110/IMG_7305-1024x768_m7obfc.jpg`,
          }}
        />
        <Paragraph>Nook 氛圍蠻放鬆的，也有人在這邊工作</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747568107/IMG_7304-768x1024_rvm9em.jpg`}
          text="點了一份早午餐一起吃"
        />
      </Section>

      <Section>
        <SubTitle title="KK Waterfront" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568106/IMG_0071-1024x683_cpbdiz.jpg`,
          }}
        />
        <Paragraph>
          KK waterfront 這邊非常適合從 happy hour
          待到晚上順便吃晚餐！我們才剛喝完咖啡馬上又跑來肚子裝啤酒
          <br />
          海景第一排吹海風看夕陽，越夜越熱鬧，當然價錢相對也比較高囉
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568100/IMG_0068-1024x683_iv6232.jpg`,
          }}
        />
        <Paragraph>
          遠遠的那一排可以看到水上屋
          <br />
          突然想到再從 Nook 走來 waterfront
          的途中，我們有經過菲律賓市場，而且被一個小朋友纏住要你買東西，市場有點髒亂偶爾會飄臭味，裡面大多賣的是乾貨
          <br />
          我們都有被每位遇到的當地人提醒那邊要小心，尤其晚上，所以我相機都收緊緊的，包包用手壓好，市場也不敢進去逛，我應該是過度緊張啦，也是看到裡面有遊客在逛的！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568112/IMG_0073-1024x683_qlmhbw.jpg`,
          }}
        />
        <Paragraph>
          waterfront 這裡餐廳酒吧選擇很多，通常在夕陽時人就會開始多起來
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568102/IMG_0072-1024x683_np4orx.jpg`,
          }}
        />
        <Paragraph>
          記得我坐在這邊看海喝啤酒，還覺得很爽人家還在上班我已經在玩了
          (很幼稚ＸＤ)
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747568101/KK_230118-1024x768_maik9v.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747568108/KK_230117-1024x768_eb2uuk.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747568125/98a4af44b41a4f7fb524e10238e5b075_aoultd.mp4`}
          text={"這邊有兩艘在尬船"}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568105/IMG_0076-1024x683_d18nib.jpg`,
          }}
        />
        <Paragraph>
          晚上的景色也很美，氣溫舒適 海風吹來更是舒服，偶爾飛機還會從頭上飛過
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568107/IMG_0080-1024x683_fu4isd.jpg`,
          }}
        />
        <Paragraph>
          對了這邊要分享一下在亞庇過馬路幾乎當地人都看沒車就直接穿越了...
          真的有車就舉起手擋這樣
          <br />
          較大的馬路口會有斑馬線，一開始我們還會乖乖走去有行人紅綠燈那，但有時候真的好遠，最後都跟他們一樣過馬路了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568116/IMG_0082-1024x683_hyunpl.jpg`,
          }}
        />
        <Paragraph>
          沒想到 KK
          的韓國遊客蠻多的耶，而且很多韓國人會來這邊打高爾夫，之後幾天的一日遊行程我們也都一直遇到
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Imperial Seafood Restaurant（知味海鮮餐廳）" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747568118/IMG_0085-1024x683_yxl56y.jpg`,
          }}
        />
        <Paragraph>
          剛抵達 KK 那天來接機的 Tommy
          哥，也剛好是我們隔天跳島行程的導遊，推薦這間比大茄來好吃的海鮮餐廳
          <br />
          老闆非常專業的推薦菜色並且幫你抓剛好的份量，用餐時也會來關心是否合胃口，讓我用餐體驗很好！真心推薦👍👍
          <br />
          我們點了金沙軟殼蟹、海鮮粥 (煮粥的海鮮可以自己挑！)、沙巴當地蔬菜
          (忘了叫什麼，吃起來有點像蘆筍的感覺)
          <br />
          海鮮粥我真的超愛，而且很特別是小米，搭配海鮮的鮮甜這碗簡直完美！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="To be continue..." />
        <Paragraph>
          KK 的第一天，我們走一個比較不耗體力的路線，先簡單在 KK
          市區走走逛逛解鎖一些美食，想到 Tommy 對我們說，在 KK
          一切就是都要慢慢的
          <br />
          早餐吃完生肉麵 Jec 買了好多小點心給我 😊
          有炸香蕉、椰漿麻糬、粿裡面包鹹料等等，我好喜歡炸香蕉酸酸甜甜！但其實更喜歡馬來人的好客和熱情！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoSabah;
