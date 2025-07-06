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
import ImageGallery from "@root/components/typography/ImageGallery";
import VideoTextRow from "@root/components/typography/VideoTextRow";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoGrid from "@root/components/typography/VideoGrid";

const WfhChiangMai4 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="在清邁 WFH – week2" />
      <CreatedDate date={"2023-07-31"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576159/406BE1D1-03B0-413F-8C09-4BBDD694F0D0_pjslla.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="22 May 2023" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576145/IMG_9588-768x1024_hc0flx.jpg`}
          text="新的一週開始，咖啡永遠是最佳良伴，每天早晨去買咖啡的例行公事卻也成為我在清邁最喜歡的事之一"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576153/IMG_9591-768x1024_nnfsny.jpg`}
          text="時間很快地又來到中午，盡量配合台灣時間，我們在清邁大多都十一點就去吃午餐了
          <br />
          這間我愛冬蔭功在我們住的地方附近，常常經過看到老闆都坐在外面向路人招呼，我們來給他一次機會
          <br />
          冬蔭功湯是一定要點的，除了我覺得好辣之外味道是還不錯！蝦也很大隻，鳳梨炒飯我覺得非常好吃！是相對清爽的炒飯不會吃到最後很膩，價格稍貴"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576147/IMG_9593-768x1024_b3demr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576146/IMG_9594-768x1024_fqs6tr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576157/IMG_9606-768x1024_f5o2oh.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576156/IMG_9596-768x1024_tyuxyw.jpg`,
            },
          ]}
        />
        <Paragraph>
          平常的工作日，每日紀錄就是一日三餐 😂
          依照慣例大概下班前一小時我就開始在找晚餐要吃什麼了，通常我都在地圖上亂滑，發現這家
          Pasta Corner，換換口味來吃義大利麵吧！
          <br />
          不得不說，這間 Pasta Corner
          我覺得超讚！手工現做的義大利麵，麵香溢滿在口中，我點的是經典的肉醬義大利麵，男友點的是奶油培根
          Gnocchi，焗烤了一個菠菜，接著飯後怎麼能少了提拉米蘇呢？
          <br />
          對於在清邁來說這餐小貴，但食物水準有到，我覺得很 ok
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="23 May 2023" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576156/IMG_9599-768x1024_drtlio.jpg`}
          text="週二換個心情工作，家裡附近的 Only Cafe
          很早就開了，閣樓舒服的座位也都有插座，唯一一個缺點是廁所不在店內，你要拋下你的東西
          到旁邊幾步之遙的大樓公共廁所"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576166/IMG_9602-768x1024_ksxc4l.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576149/IMG_9608-768x1024_skbt9y.jpg`,
            },
          ]}
        />
        <Paragraph>
          因為上廁所不方便，我也決定中午就回家，順路買了路邊的煎蛋飯，闆娘怕我正中午太熱還拿了傘要讓我撐
          <br />
          煎蛋也有各種不同配料，這也是我在清邁很愛吃的小吃之一，便宜又美味，只是如果只有蛋太乾了，所以我又買了冬蔭功湯來配，剛好完美
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576154/IMG_0922-1024x683_eqmvcn.jpg`,
          }}
        />
        <Paragraph>
          下班去逛清邁大學夜市，我們直接從尼曼用走的過來
          <br />
          提早彎入一條路，結果發現夜市還沒到，這邊是市場
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576155/IMG_0920-1024x683_xorh9b.jpg`,
          }}
        />
        <Paragraph>🐘</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576149/IMG_0935-1024x683_eqm0ho.jpg`,
          }}
        />
        <Paragraph>
          大學夜市的入口處都是服飾店，接著才會來到這邊搭棚子的美食街＋整排攤販
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576160/IMG_0934-1024x683_ziqxsz.jpg`,
          }}
        />
        <Paragraph>
          清邁大學夜市很接地氣，更有當地的感覺
          <br />
          我彷彿回到學生時期很愛逛一中街 學區附近鬧區的感覺
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1747576177/IMG_9611_tvxqtn.jpg` },
            {
              url: `${CLOUDINARY_BASE}/v1747576160/IMG_9614-768x1024_cmhtyg.jpg`,
            },
          ]}
        />
        <Paragraph>
          本來是想吃一間排骨湯的，但是坐錯到隔壁攤的座位，店員很快就將菜單遞了上來，想說算了
          <br />
          結果大踩雷，燴飯的海鮮完全不新鮮… 炒飯吃了也好口渴 ❌
          <br />
          吃飽後逛到一間水果攤，拍了張照來數一下蒼蠅有幾隻
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576148/IMG_0924-1024x683_dyqjof.jpg`,
          }}
        />
        <Paragraph>夜市少不了各式各樣的服飾攤位</Paragraph>
      </Section>
      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576146/IMG_0925-1024x683_r03jta.jpg`,
          }}
        />
        <Paragraph>好可愛 這間是算命小店</Paragraph>
      </Section>
      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576152/IMG_0928-1024x683_xnt6jv.jpg`,
          }}
        />
        <Paragraph>
          清邁大學夜市逛到最後，順便買了小點心回家吃，甜鹹都有，便宜又美味
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="24 May 2023" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576150/IMG_9638-768x1024_dplzcu.jpg`}
          text="週三依舊是一杯咖啡的起手式，這家 Smoko 是我們住的大樓
          一樓的溫馨小咖啡店，有個年輕靦腆的老闆，拿鐵50泰銖，絕對比任何一間都便宜，我們也很常喝還拿了集點卡"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576160/IMG_9639-768x1024_okzxsr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576168/IMG_9750-768x1024_y1sk8z.jpg`,
            },
          ]}
        />
        <Paragraph>午餐來吃這家髒髒咖哩</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576170/IMG_9756-1024x768_b1xtx0.jpg`,
          }}
        />
        <Paragraph>
          咖哩不錯吃，香料味很香，但是上面淋的辣油真是把我辣爆了，他的味道像是我們沾水餃的那種，有加香油或是麻油
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576167/IMG_9641-768x1024_fixt8t.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576152/IMG_9643-1-768x1024_lvqwxs.jpg`,
            },
          ]}
        />
        <Paragraph>
          髒髒咖哩的對面在賣
          Banoffee，店小小的不過室內室外都裝飾得很精緻優雅，在清邁尼曼這邊我最喜歡的
          就是這些具有特色的店家
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576164/IMG_9648-768x1024_ysfoc7.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576171/IMG_9763-768x1024_t78nd1.jpg`,
            },
          ]}
        />
        <Paragraph>
          時間飛快之晚餐時間又到了，我在清邁怎麼都只記錄三餐😂 沒什麼上班點滴
          <br />
          Kuakai Nimman 泰式餐廳 整體感覺是溫馨的家庭式，大部分都是當地人來用餐
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576176/IMG_9774-1024x768_p7asrk.jpg`,
          }}
        />
        <Paragraph>
          我們點了
          <br />
          鐵板板條(用鐵板裝還要加錢😂)、煎蛋飯、泰北香腸(辣🌶️)、椰奶冬蔭功湯(料很多！)
          還有菊花茶，吃得好飽
        </Paragraph>
      </Section>

      <Section>
        <VideoGrid
          videos={[
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1747576199/d7103ad5e4a6425b95d94a175a0618fc_x7uil7.mp4`,
            },
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1747576192/IMG_9644_qszwfj.mov`,
            },
          ]}
        />
        <Paragraph>吃飽後晚間散步 + 在清邁過馬路都覺得好恐怖</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576175/IMG_9656-768x1024_fk6s8q.jpg`}
          text="大麻中文教學？？？"
        />
      </Section>

      <Section>
        <SubTitle title="25 May 2023" />
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747576202/IMG_9782_n3ah1o.mov`}
          text="不知不覺 每到週四就已經覺得一週要結束了
          <br />
          午餐到我們家外面那條路覓食，每次經過這間看到他的脆皮豬從甕窯裡拿出來，就快受不了
          <br />
          豬油還在滴，外皮金黃酥脆的樣子在發亮看起來好可口"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576161/IMG_9785-768x1024_ijczyq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576151/IMG_9670-768x1024_ocxgrx.jpg`,
            },
          ]}
        />
        <Paragraph>
          一份脆皮豬便當再煎個荷包蛋90元泰銖，他的脆皮豬還會再炒過，加入九層塔，不得不說
          有夠好吃！
          <br />
          週四固定下午開會，開完我就烙跑去按摩
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576144/2286583A-E694-4E2C-A47C-E5CB8AED7E38-576x1024_grrqoh.jpg`}
          text="下午五點，下班時間到路上的車漸漸多了起來"
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747576197/IMG_9674_siq4kr.mov`}
          text="晚餐我們到 Maya 去吃 MK，泰國的連鎖火鍋店，口味不會太重我都先給👍"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576179/IMG_9795_sz7sh0.jpg`}
          text="因為火鍋我們沒有點太多，所以胃還有空間再吃個小東西，瑪雅百貨對面的戶外空間有許多餐廳和店家，看到章魚燒好心動所以就點了一份來吃
          <br />
          結果又踩雷，又貴又不好吃😓"
        />
      </Section>

      <Section>
        <SubTitle title="26 May 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576166/IMG_9694-1024x768_retk8i.jpg`,
          }}
        />
        <Paragraph>
          週五啦！！！今天很特別，因為今天我們不在家工作，我們要去共同工作空間 –
          Yellow 體驗一下
          <br />
          當初在出發清邁前，我們就有在想要不要去 coworking space
          上班，清邁其實有蠻多間的，Yellow
          較多人推薦，我們看了一下也有許多方案可選擇 Day
          pass/Month/Year，後來我們就先買一天試試看
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576172/IMG_9799-1024x768_yoaqxa.jpg`,
          }}
        />
        <Paragraph>
          Yellow 的空間環境很舒適，Day Pass
          289泰銖，一杯免費咖啡，續杯半價，我覺得很可以
          <br />
          在咖啡 bar 那邊付款並且登記你要什麼咖啡後，會拿一張 wifi
          帳號密碼紙條，就可以去找位置了，店員咖啡泡好會送過來
          <br />
          千萬要記得附註咖啡無糖，我又再次崩潰了，全糖咖啡我真的喝不下 😂
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576145/0B788F95-B671-4082-BAD8-3AA199CA87D3-576x1024_itf1fz.jpg`}
          text="我知道清邁有許多外國人在這邊遠端，整個 coworking space 幾乎都是歐美人"
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747576181/0c7f85d5b9654955b2c5e7964308c481_nkkykc.mp4`}
          text="Yellow 他很讚，位置的型態有很多種，有長桌式、榻榻米區域、懶骨頭.. 等等
          <br />
          二樓有較大間的會議室，如果要開會的話也有像電話亭的小空間，不怕吵到別人"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576174/IMG_9693-1024x768_nezvjp.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576170/IMG_9801-1024x768_zyrnuc.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576162/IMG_9690-768x1024_k0ev7t.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576165/IMG_9692-768x1024_eqgmxx.jpg`,
            },
          ]}
        />
        <Paragraph>
          中午吃飯，還是要將包包收一收，重要資產帶在身上，吃飽回去再另外找新位置
          <br />
          我們午餐吃得的這間 Meat Noodles 離 Yellow
          不遠，專賣牛肉料理，也有牛肉火鍋，基本上你可以自由搭配你要的麵條形式 +
          肉的部位，味道不錯，但口味較重
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576165/IMG_9702-1024x768_oh4q3d.jpg`,
          }}
        />
        <Paragraph>
          還不到下班我又開始發散了哈哈哈，想著晚餐要吃什麼，結束了一天 yellow
          coworking space 體驗，晚上我們到 One Nimman 附近吃飯
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576173/IMG_9704-768x1024_feitst.jpg`}
          text="泰式餐廳的菜單總是有超級多選擇，我們兩個食量不大，除了主食頂多再點兩樣菜
          😅
          <br />
          這次吃了泰北咖哩麵、啪泰、炒個菜和炸蛋❓
          <br />
          很不幸的是，我本來是想跟他們說果汁不要加糖的，但後來想想果汁應該不會加吧，結局＝崩潰再加一"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576144/0D20DD8A-FAB4-4E7F-AD3A-41D66A4AF906-576x1024_hxsv2z.jpg`}
          text="這間 Hong Tauw Inn 餐廳也很家庭式，餐廳佈置的既優雅又溫馨"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576176/IMG_9820-768x1024_rdutkh.jpg`}
          text="神明也喜歡喝不健康的飲料嗎🤔"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576145/72BF545F-1A86-44D8-9E2C-91AB6C3D4899-576x1024_mnpbmd.jpg`}
          text=""
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747576206/3c00552346a04460aabb81e187412877_os0jct.mp4`}
          text="夜晚的 Nimman，熱鬧非凡，街頭藝人在吹的那個超長笛子感覺很厲害"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576171/IMG_9831-768x1024_aylzuk.jpg`}
          text="買了一串烤蔬菜看表演，享受尼曼晚上的魅力"
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747576213/ed9149f0a91341cdbeb3df1a53509fd6_qfc7e6.mp4`}
          text="默默的我們也坐在那邊看兩位帥哥拉了一首又一首，順便逼男友快點重拾他的小提琴拉給我聽😂
          <br />
          就用卡農來結束今天這美好的一天吧！清邁晚安，明天要去清萊一日遊，必須早點回去睡覺了"
        />
      </Section>

      <Section>
        <Title title="🗺️ 吃吃喝喝" />
        <Paragraph>
          🍝：
          <br />
          I Love Tomyumkung
          <br />
          Pasta Corner
          <br />
          Dirty Curry
          <br />
          Kuakai Nimman
          <br />
          CRISPY PORK SHOP
          <br />
          MK Restaurant
          <br />
          Meat Noodles
          <br />
          Hong Tauw Inn
          <br />
          ☕️：
          <br />
          Toffee Roasters
          <br />
          Only Coffee
          <br />
          Smoko Nimman
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default WfhChiangMai4;
