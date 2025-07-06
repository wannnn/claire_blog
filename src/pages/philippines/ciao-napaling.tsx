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

const CiaoNapaling = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="宿霧薄荷島 Bohol Day3 – Napaling 浮潛看沙丁魚風暴" />
      <CreatedDate date={"2023-12-13"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774745/2023-11-19-%E4%B8%8B%E5%8D%8812.44.36_z1zznl.png`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="Oct 24 2023" />
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751774757/IMG_1679-2_dfogm8.mov`}
          text="薄荷島第三天風和日麗的早上，昨晚和阿尊吃串烤的時候他提到薄荷島有一個新開發的區域 Moadto 在 Doljo Beach 那邊，本來他是想問我們吃飽飯要不要去，但我們拒絕了，隔天早晨再去一探究竟
          <br /><br />叫了一輛嘟嘟 和司機順便說好回程時間，怕回不來"
        />
      </Section>

      {/* Moadto Strip Mall */}
      <Section>
        <SubTitle title="Moadto Strip Mall" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774747/IMG_1564-2_u54asu.jpg`,
          }}
        />
        <Paragraph>
          Moadto
          這邊正在慢慢發展中，新穎的購物中心但還沒什麼店家，只有少量的餐廳，不過附近已有不少飯店
        </Paragraph>
      </Section>

      {/* Doljo Beach */}
      <Section>
        <SubTitle title="Doljo Beach" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774742/IMG_1529-2_y8wvzd.jpg`,
          }}
        />
        <Paragraph>
          Doljo Beach
          最漂亮的一段應該是在這邊吧，沙灘非常乾淨潔白，重點是人還蠻少的，很清幽
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751774743/IMG_1553-2_qaz35s.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751774743/IMG_1555-2_kfthl6.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751774743/IMG_1545-2_m1qx4m.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751774746/IMG_1554-2_sevez0.jpg` },
          ]}
        />
        <Paragraph>
          在這邊吃個沙拉當早餐
          喝咖啡看海，這就是海島度假的悠閒，加上無人的美景看到飽
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774742/IMG_1550-2_jssntl.jpg`,
          }}
        />
        <Paragraph>
          來薄荷島除了 Alona，可以的話也去 Dumaluan 或 Dojo beach
          走走，人比較少維護的也很不錯！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774742/IMG_1560-2_rnhxto.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774742/IMG_1566-2_a71slw.jpg`,
          }}
        />
        <Paragraph>
          在 Moadto
          亂晃，經過大門口的警衛人很好一起閒話家常，而且主動幫我拍照，殊不知也沒一張正的
          🤣 回去自己調
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774744/IMG_1570-2_uchc3x.jpg`,
          }}
        />
        <Paragraph>二樓的區域都沒有店家，有的還在裝修中</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774748/IMG_1584-2_zwdv94.jpg`,
          }}
        />
        <Paragraph>從二樓看下去的景色真的很美！非常度假村的感覺</Paragraph>
      </Section>

      {/* Napaling Reef */}
      <Section>
        <SubTitle title="Napaling Reef" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774750/IMG_1690-2-scaled_xtytm2.jpg`,
          }}
        />
        <Paragraph>
          搭乘嘟嘟車回飯店休息一下，準備等阿尊來接送去浮潛，就在昨晚吃晚餐的時候我和他訂了
          Napaling 沙丁魚浮潛的行程，都來薄荷島了！怎麼能不去浮潛看看海底世界呢
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751774753/GOPR9338-2-scaled_y3odeg.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751774746/GOPR9347-2-scaled_ok6nby.jpg`,
            },
          ]}
        />
        <Paragraph>
          沙丁魚風暴只有我自己去，老寶不加入，下水前搞了很久，因為浮潛面罩根本不緊瘋狂吃水，海又超級鹹！後來才終於換了一個可以調鬆緊的給我，教練應該快被搞瘋ＸＤ
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774751/2023-11-19-%E4%B8%8B%E5%8D%8812.39.36_pjykdr.png`,
          }}
        />
        <Paragraph>
          本來想放棄租借 Go Pro
          拍照，因為我也不是很會游泳，後來想想都來了😂（遊客錢真滴好賺）但後來評估租借
          700 披索也不算太貴，教練全程一小時都會幫你拍照錄影，好！答應！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774751/2023-11-19-%E4%B8%8B%E5%8D%8812.47.36_kstbgv.png`,
          }}
        />
        <Paragraph>一直和其他遊客的身體打架ＸＤ</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774751/2023-11-19-%E4%B8%8B%E5%8D%8812.43.12_nde45k.png`,
          }}
        />
        <Paragraph>
          沙丁魚風暴真的很壯觀！魚也不是莫名其妙就圍繞在你身邊的，旁邊有人會引誘
          <br />
          當一團沙丁魚向你衝來真的好興奮，手一滑撥開
          就像直接在魚群中間開出一條路，你不會摸到🐟
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774745/2023-11-19-%E4%B8%8B%E5%8D%8812.53.06_ovyq8r.png`,
          }}
        />
        <Paragraph>每個教練的必備技能吐水圈圈哈哈哈哈哈</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751774743/GOPR9350-2-scaled_pyglxv.jpg`}
          text="除了沙丁魚們還有美美的珊瑚礁、小丑魚們"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774752/2023-11-19-%E4%B8%8B%E5%8D%8812.53.43_u8alnq.png`,
          }}
        />
        <Paragraph>
          教練叫我脫掉救生衣說拍照比較好看，我在水淺的地方試了一下超緊繃的，緊張爆
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751774758/IMG_1692-2_gpvnuq.mov`}
          text="結束了沙丁魚浮潛，浮潛的時間是一小時，所以整個行程大概是兩小時，準備回去和老寶會合吃晚餐"
        />
      </Section>

      {/* Thai Lang Restaurant */}
      <Section>
        <SubTitle title="Thai Lang Restaurant" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751774749/IMG_1697-2-scaled_xjn0lc.jpg`}
          text="晚餐我們吃泰式，餐廳在前往 Alona beach 那條路的入口處，回味一下 Kao soy，想念清邁了啦～～"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774743/IMG_1595-2_ttz7me.jpg`,
          }}
        />
        <Paragraph>吃飽後逛逛海灘，隔天就要打道回府了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774744/IMG_1596-2_lpcqeb.jpg`,
          }}
        />
        <Paragraph>
          進來 Alona beach
          後都往左側走（因為最熱鬧），這次往右邊，看起來也是不少餐廳
        </Paragraph>
      </Section>

      <Section>
        <MyDate date="25 Oct 2023" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751774742/63981664-0AC1-44EF-A9D0-32D90B379AD1_nrtjcq.jpg`}
          text="在宿霧薄荷島的最後一個早晨，天氣依舊是晴朗無比，再度獨自來到飯店旁的咖啡店 OVERGROWN Café & Bar，享受一下一個人的早餐"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774751/IMG_1773-scaled_fdxmvi.jpg`,
          }}
        />
        <Paragraph>打包完行李前往碼頭，和薄荷島說再見 👋</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774749/IMG_1780-scaled_zl0tcn.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774748/IMG_1783-scaled_gspthj.jpg`,
          }}
        />
        <Paragraph>
          搭船回宿霧的路途上，我似乎有看見海豚，不知道我有沒有眼花 😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774746/IMG_1802-scaled_n7bcx4.jpg`,
          }}
        />
        <Paragraph>經過這座陸橋就知道宿霧市快到了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774746/IMG_1804-scaled_q3d3ty.jpg`,
          }}
        />
        <Paragraph>
          回到港口，交通一樣凌亂，叫了一台計程車準備前往機場
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774754/IMG_1809-scaled_lveed1.jpg`,
          }}
        />
        <Paragraph>宿霧機場其實還蠻大蠻新的！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751774753/IMG_1810-scaled_hvhq3u.jpg`,
          }}
        />
        <Paragraph>
          想說沒吃到 Jollibee
          炸雞，不知道他的滋味，最後機場這餐還是嘗試了一下，嗯… 果然還是沒事別吃
          Jollibee
          <br />
          個人認為真的沒有很好吃，不多汁而且有油耗味（可能別間店會好一點？）
          <br />
          最後要回台灣的飛機還延遲了快兩小時，實在等到心急如焚哈哈哈，很想趕快回家
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoNapaling;
