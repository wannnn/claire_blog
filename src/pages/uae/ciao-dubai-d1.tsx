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

const CiaoDubaiD1 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="杜拜 Day1 – 老城區感受阿拉伯風情" />
      <CreatedDate date={"2023-12-28"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781164/IMG_1629-scaled_ihfiwr.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="24 Nov 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781148/IMG_1609_l6tm22.jpg`,
          }}
        />
        <Paragraph>
          這是 2023 下半年最重磅的旅遊計畫✨ 波斯灣之旅
          <br />
          因為男友員旅杜拜的契機，所以我們順勢規劃了附近幾個國家一起玩，把特休全部請下去（好久沒飛長途了
          <br />
          在阿拉伯聯合大公國我們會玩杜拜、阿布達比以及沙迦，接下來會去阿曼、巴林、卡達，回台灣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781149/IMG_1604_zmq03l.jpg`,
          }}
        />
        <Paragraph>
          搭乘阿聯酋抵達杜拜的時間很早，弄一弄大概九點多十點就可以開始玩了，首站我們先來杜拜老城區，叫了
          Uber 在杜拜大清真寺下車
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781149/IMG_1612_limm3f.jpg`,
          }}
        />
        <Paragraph>
          11月的中東天氣算是很舒服，中午可能會來到接近 30
          度，但走在路上完全沒問題
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781149/IMG_1619_f8w54f.jpg`,
          }}
        />
        <Paragraph>
          我身後的這條杜拜運河 (Dubai Creek)，搭船到對面就是黃金、香料市集
        </Paragraph>
      </Section>

      {/* Bur Dubai Souk Market */}
      <Section>
        <SubTitle title="Bur Dubai Souk Market" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781151/IMG_1625_gudxas.jpg`,
          }}
        />
        <Paragraph>
          還未過杜拜灣之前我們這側的河畔市集，販售著許多香料、紡織品、燈具、香水、紀念品等等
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781156/IMG_1629-1_nbjkyk.jpg`,
          }}
        />
        <Paragraph>
          各式各樣的香料在店舖外整排展示，對我來說很新奇，店家也會向客人解釋各種香料的用途，有的作為薰香，有的可食用或泡茶
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781151/IMG_1628_obkocc.jpg`,
          }}
        />
        <Paragraph>
          杜拜市集的每個店家都會一直召喚你進來逛，來試他們的香氛、喀什米爾圍巾、阿拉伯頭巾等等等
          <br />
          直接把東西為圍你身上，有點煩
          但別理他們就好，有時出於好奇，不過一但問了價錢他們就更饞了，他會覺得你有機會買
          <br />
          招呼起手式：Hello my friend~ Where are you from? Japan? China?
          (全部鄰近國家猜一遍) Come to try, I&apos;ll give you a good price
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751781174/IMG_1968-scaled_iqbebr.jpg`}
          text="我好像不太適合纏成這樣哈哈哈哈哈"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781153/IMG_1634_wirkmh.jpg`,
          }}
        />
        <Paragraph>這裡好像才是 souq 的正門入口，我從反方向逛過來</Paragraph>
      </Section>

      {/* Al Shandagah Watch Tower */}
      <Section>
        <SubTitle title="Al Shandagah Watch Tower" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781149/IMG_1637_clcdeo.jpg`,
          }}
        />
        <Paragraph>
          持續沿著 Dubai creek 向西，會來到一個 historical
          place，這裡有一些博物館和餐廳
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751781166/IMG_1639_hxssfn.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751781159/IMG_1643_xxbgjn.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751781151/IMG_1635_akrlri.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751781167/IMG_1644_vezn3k.jpg` },
          ]}
        />
        <Paragraph>
          沿著運河旁走很愜意，時間接近中午，歷史園區內有的場館我不曉得是中午休息還是根本沒開
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          itemsPerRow={3}
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751781154/IMG_1449-scaled_o6bttz.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751781150/IMG_1446-scaled_ayl84e.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751781158/IMG_1498-scaled_p9jkzk.jpg`,
            },
          ]}
        />
        <Paragraph>與沙色建築的合照</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781159/IMG_1652_mvdslu.jpg`,
          }}
        />
        <Paragraph>
          午餐和男友同事約好一起吃，所以我們慢慢向餐廳移動
          <br />
          途中經過的這間 Arabian Tea House Restaurant 是傳統的風塔建築，在
          Google Map 上有很多評論，也是連鎖店
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781170/IMG_1654_gqecen.jpg`,
          }}
        />
        <Paragraph>網美座位區，打卡座位區😂</Paragraph>
      </Section>

      {/* Al Fahidi Historical Neighbourhood */}
      <Section>
        <SubTitle title="Al Fahidi Historical Neighbourhood" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781163/IMG_1535-scaled_tpfk6n.jpg`,
          }}
        />
        <Paragraph>
          來到杜拜阿法迪歷史街區，融合現代設施，傳統與現代的影子都可見，新舊交織著
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781171/IMG_1661_xxgu1g.jpg`,
          }}
        />
        <Paragraph>
          我們的餐廳就在這個歷史街區內，但在路途上卻花不少時間，原因是被迷人的老城區拖住了我們的腳步
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781170/IMG_1665_fervl3.jpg`,
          }}
        />
        <Paragraph>幾乎是隨處可見的阿拉伯薰香</Paragraph>
      </Section>

      {/* Al Khayma Heritage Restaurant */}
      <Section>
        <SubTitle title="Al Khayma Heritage Restaurant" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781164/IMG_1679_qwvm8w.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781157/IMG_1666_h78xw9.jpg`,
          }}
        />
        <Paragraph>
          杜拜老城區的這家 Al Khayma Heritage Restaurant
          也是多人推薦，一進入到餐廳內那自然採光和綠意造景真的非常美
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751781173/IMG_1973-scaled_adckxd.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751781149/IMG_1550-scaled_w1uitp.jpg`,
            },
            { url: `${CLOUDINARY_BASE}/v1751781158/IMG_1673_ltcojq.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751781153/IMG_1675_eop673.jpg` },
          ]}
        />
        <Paragraph>
          我的第一次正宗中東餐廳體驗，從環境到座位到食物，什麼都覺得好新奇，我們人多因此坐包廂，席地吃飯
          <br />
          食物照忘了放，我們讓服務生推薦各點了羊肉和雞肉米飯、通心麵和綜合烤串，份量超多根本吃不完
          <br />
          在戶外座位每隔一段時間還有表演可以欣賞，非常身歷其境在傳統阿拉伯的氛圍裡，推薦
          👍
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751781184/c68c987d35cf4bd0bed6ccdc68638ab0_tkh4qj.mp4`}
          text="餐廳內還有現做的餅，香氣撲鼻"
        />
      </Section>

      {/* Coffee Museum */}
      <Section>
        <SubTitle title="Coffee Museum" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781172/IMG_1681_c17v0b.jpg`,
          }}
        />
        <Paragraph>只是在咖啡博物館外休息ＸＤ</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781162/IMG_1690_si8hma.jpg`,
          }}
        />
        <Paragraph>
          我們到訪杜拜的時間點剛好 UAE 國慶日將至，四處都可見國旗懸掛
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751781167/IMG_1689_ehryk8.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751781170/IMG_1697_jn6iul.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751781165/IMG_1693_tomkvp.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751781172/IMG_1699_iuhkns.jpg` },
          ]}
        />
        <Paragraph>
          我喜歡的老城區角落，吃飽飯後很適合在這漫步，慢慢感受舊城散發的魅力
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781154/IMG_1705_dstcrm.jpg`,
          }}
        />
        <Paragraph>
          約莫下午兩三點得時候，大部分的店都關著，應該都祈禱去了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781154/IMG_1709_qoleer.jpg`,
          }}
        />
        <Paragraph>下午的行程是搭船去對面的黃金市集</Paragraph>
      </Section>

      {/* Dubai Spice Souk */}
      <Section>
        <SubTitle title="Dubai Spice Souk" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781161/IMG_1716_faulil.jpg`,
          }}
        />
        <Paragraph>這個 Souq 也是遊客來杜拜必逛的，人潮眾多</Paragraph>
      </Section>

      {/* Dubai Gold Souk */}
      <Section>
        <SubTitle title="Dubai Gold Souk" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781161/IMG_1718_xdnw4s.jpg`,
          }}
        />
        <Paragraph>在 Gold Souq 這裡就不太會出現店家招攬人的場景了😂</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781162/IMG_1721_qtokrz.jpg`,
          }}
        />
        <Paragraph>
          我看大部分在裡面消費的都是穿黑袍白袍，有觀光客特地來這裡買黃金嗎？
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781156/IMG_1728_usreyz.jpg`,
          }}
        />
        <Paragraph>
          逛完黃金市集後我們搭捷運到未來播物館，要在附近領取路跑活動的號碼牌
          <br />
          是的我們要在杜拜路跑！！剛好在出發杜拜的前幾天得知這個一年一度的活動，毫不猶豫地報名，而且免費
        </Paragraph>
      </Section>

      {/* Museum of The Future */}
      <Section>
        <SubTitle title="Museum of The Future" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781159/IMG_1621-scaled_rec6hr.jpg`,
          }}
        />
        <Paragraph>
          每次經過未來博物館，視線都一直離不開他，這建築是在是太特別
          <br />
          哦對了，在這廣場上要拍照時我用相機被制止，他們說只能用手機拍，可能怕你拿去商業用途之類的…
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781165/IMG_1982-scaled_uv3dwp.jpg`,
          }}
        />
        <Paragraph>未來博物館的內部，得提前一個月預約才能參觀</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781167/IMG_1732_vrxbvd.jpg`,
          }}
        />
        <Paragraph>
          領完路跑號碼牌後天已黑，因為太晚報名，所以衣服已經沒有了
          <br />
          一樣搭了捷運要回我們的飯店，下了捷運還得走 30-40
          分鐘，中間的路十幾線道實在太寬太大條，必須走好遠才有地方過馬路
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751781168/IMG_1733_yelili.jpg`,
          }}
        />
        <Paragraph>
          不過邊走邊欣賞杜拜的夜景也還不錯，很難想像這片曾是荒漠的地帶居然能這樣萬丈高樓平地起，如今已是多麽現代化的城市
          <br />
          隔天是這次來杜拜最期待的重頭戲 – 我們要去跳傘 🪂
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoDubaiD1;
