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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoTextRow from "@root/components/typography/VideoTextRow";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoBohol = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="宿霧薄荷島 Bohol Day1" />
      <CreatedDate date={"2023-11-08"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771578/IMG_1312_heogxr.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="22 Oct 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771575/IMG_1281_oupmip.jpg`,
          }}
        />
        <Paragraph>
          早晨飯店窗外的宿霧風景，昨晚9點就睡了，所以6點多自然醒精神很不錯
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771573/IMG_1087-scaled_sq3lme.jpg`,
          }}
        />
        <Paragraph>
          飯店自助式早餐不錯，終於吃到蔬菜了，還有雞湯粥和包滿料的歐姆蛋，超讚
        </Paragraph>
      </Section>

      {/* Cebu Pier 1 */}
      <Section>
        <SubTitle title="Cebu Pier 1" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771574/IMG_1193-scaled_vwfjzt.jpg`,
          }}
        />
        <Paragraph>
          吃完早餐整理完行李退房，我們就直接上計程車來到港口，船票事先在 kkday
          買好，因為怕現場要排很久
          <br />
          抵達港口人不多，我們也不需要托運行李，繳完碼頭稅，換實體船票就開始買咖啡等待，提前一小時我覺得太早
          😂 半小時好像比較剛好，剛好當天港口人潮不是很多
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751771599/c857fbedd7c0440a83d0dde2474d0dbd_si8pg1.mp4`}
          text="經歷兩小時，抵達薄荷島！剛到塔比拉蘭天氣陰陰的，感覺隨時都會下雨
          <br /><br />一出來很多計程車司機纏著你，我本來猶豫了 但想說先繼續往前走 不要被打擾再來好好查一下是不是當場用 app 叫比較便宜，結果就看到了嘟嘟車，和司機談好兩人到飯店(在 Alona) 400 披索，我還殺了一百元哈哈哈，覺得很可以！走起"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771576/IMG_1285_l7oqsy.jpg`,
          }}
        />
        <Paragraph>
          我們在薄荷島飯店外的大馬路，距離 Alona beach 步行大約 10
          分鐘！非常近，而且沿路有許多餐廳和店家，很熱鬧
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771573/IMG_1209_gmk5rv.jpg`,
          }}
        />
        <Paragraph>
          我們在薄荷島的住宿是 <strong>Alona Vida Beach Hill Resort</strong>
          ，當地人稱 Alona Vida2，搭車時要隨時注意著 google
          map，不然司機可能會誤會把你載到海邊那個五星級飯店
          😂（雖然說出發前我已經再三和他確認了 但還是搞錯）
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751771572/IMG_1207_ajgub7.jpg`}
          text="迎賓鳳梨汁也太好喝 🍍，老寶還天天喝哈哈哈"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771576/IMG_1287_fdjqf6.jpg`,
          }}
        />
        <Paragraph>
          稍微休息一下之後，我們就跑來街上晃晃了，經過這間手工藝品店真的完全是我的菜，捕夢網也太太太美了
          <br />
          店員很熱心的介紹，這裡的商品都是全手工的，後來我在 Alona beach
          那邊也有看到一家在賣相同的捕夢網，但沒比價
          <br />
          大到小尺寸的捕夢網 1200-3000(還是以上忘記了)
          不等，我打算過幾天再來挑一個帶回家
        </Paragraph>
      </Section>

      {/* Alona Beach */}
      <Section>
        <SubTitle title="Alona Beach" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771584/IMG_1310_sqpcrp.jpg`,
          }}
        />
        <Paragraph>很期待的 Alona Beach，迫不急待在這邊放鬆 吹海風</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771574/IMG_1296_zqkqj4.jpg`,
          }}
        />
        <Paragraph>
          和老寶一起在海灘散步，薄荷島的貓狗每隻都皮膚病，一直抓一直抓
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751771577/IMG_1304_bba6jx.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751771574/IMG_1305_gdstex.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751771581/IMG_1319_cjmchh.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751771580/IMG_1321_ldzfga.jpg` },
          ]}
        />
        <Paragraph>
          在 Alona
          到處拍，一些我很喜歡的畫面，海邊漫步太放鬆，腦中忽然閃過如果來薄荷島
          WFH 不知道會怎樣，應該也不錯
          <br />
          偶爾經過一些咖啡店的時候也有看到有人在工作，海島的數位遊牧特別吸引人
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771580/IMG_1318_uduymp.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771579/IMG_1320_ncqsxt.jpg`,
          }}
        />
        <Paragraph>
          Alona Beach
          這裡許多餐廳座位延伸到海灘，已經不少人在小酌，到了晚上一定更漂亮更熱鬧
        </Paragraph>
      </Section>

      {/* SHAKA */}
      <Section>
        <SubTitle title="SHAKA" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771578/IMG_1222-scaled_konckr.jpg`,
          }}
        />
        <Paragraph>
          暫時離開 Alona beach 回到我們飯店附近吃飯，SHAKA
          這家蔬食餐廳就在我們住的巷口對面，我點了漢堡，內餡有
          地瓜混合洋蔥、香料壓成的餅、蘑菇、蔬菜
          還有附上薯條，以及一杯香蕉椰子新鮮果汁，超飽，太滿足了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771582/IMG_1329_vzrxdz.jpg`,
          }}
        />
        <Paragraph>
          吃飽休息一下之後，我們又走來 Alona
          這邊看看晚上的海邊，越夜越美，海灘上的燭光晚餐，顯得很浪漫
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751771584/IMG_1343_x82osk.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751771585/IMG_1342_ktqnfu.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751771586/IMG_1350_lkgx0j.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751771582/IMG_1345_dlezfp.jpg` },
          ]}
        />
        <Paragraph>
          海灘上的街頭藝人表演著宿營才會看到的火舞，增添了不少青春活力
          <br />
          酒吧內暢飲和坐在海灘上chill的人們，感受薄荷島夜生活
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771583/IMG_1352_h47aap.jpg`,
          }}
        />
        <Paragraph>菲式烤肉串</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771587/IMG_1354_msguyy.jpg`,
          }}
        />
        <Paragraph>
          在靠近 Alona
          海邊的小商圈買了一件黑色洋裝很便宜，才300披索，隔天去處女島可以穿
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771588/IMG_1225-scaled_y69h9t.jpg`,
          }}
        />
        <Paragraph>
          回到飯店的巷口，這家義式披薩看起來好好吃（先標起來）
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771580/IMG_1325_knj1ou.jpg`,
          }}
        />
        <Paragraph>回飯店洗洗睡 🛏️</Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBohol;
