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
import Video from "@root/components/typography/Video";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoLausanne = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="萊芒湖和阿爾卑斯山擁抱的 - 洛桑(Lausanne)" />
      <CreatedDate date={"2022-01-11"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406571/7518858928_IMG_6868-scaled_vfeb0e.jpg`,
          }}
        />
      </Section>

      <MyDate date={"21 April 2018"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406572/IMG_7721_kx2ngr.jpg`,
          }}
        />
        <Paragraph>
          在洛桑的 Airbnb
          醒來，終於舒服的睡上一覺，這邊和房東同住，我們還是他們的第一組客人！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406570/7518858928_IMG_6877-1024x683_dvwmru.jpg`,
          }}
        />
        <Paragraph>
          繁榮的城市洛桑，是日內瓦湖畔的第二大城，被稱爲奧林匹克之都 Olympic
          capital，非常重視體育和文化活動
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406569/7518858928_IMG_6875-1024x683_wtynco.jpg`,
          }}
        />
        <Paragraph>紀念一下在瑞士無時無刻找藍色停車位的我們</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747406573/IMG_7733_bymgbj.jpg`}
          text="Coop 真的是我們在瑞士的好夥伴！三餐總有一餐是在這解決的 👍"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406573/IMG_7734_l5ikcj.jpg`,
          }}
        />
        <Paragraph>洛桑的風景簡直美麗如畫！</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Ouchy(烏契)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406564/7518858928_IMG_6794-scaled_wp00n2.jpg`,
          }}
        />
        <Paragraph>
          散步來到湖畔的烏契(Ouchy)，是深受遊客歡迎的度假勝地
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406574/IMG_7740_timpd0.jpg`,
          }}
        />
        <Paragraph>
          在這邊可以欣賞萊芒湖(Lac Léman) 和阿爾卑斯山的美景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406563/20180419_180424_0100-1024x682_tyu66s.jpg`,
          }}
        />
        <Paragraph>
          與對岸法國城鎮埃維昂萊班的對望，一河之隔的感覺真奇妙
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747406573/IMG_7738_ssup4w.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747406574/IMG_7752_qhbry1.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747406563/7518858928_IMG_6839-1024x683_r0sjjk.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747406565/7518858928_IMG_6840-1024x683_nrxngg.jpg`,
            },
          ]}
        />
        <Paragraph>日內瓦湖畔的美好風光，令人難忘</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406565/7518858928_IMG_6829_yuy3s3.jpg`,
          }}
        />
        <Paragraph>
          河畔捕捉到的爺爺，漂亮風景和音樂相伴，生活實在輕鬆愜意
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406564/7518858928_IMG_6831-scaled_xechx1.jpg`,
          }}
        />
        <Paragraph>
          小小廣場的周圍有不少餐廳，在洛桑感覺也很適合騎腳踏車漫遊
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747406565/7518858928_IMG_6838-scaled_lwl6i6.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747406565/7518858928_IMG_6833-scaled_pexrqo.jpg`,
            },
          ]}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406563/7518858928_IMG_6835-1024x683_l3dd3x.jpg`,
          }}
        />
        <Paragraph>
          洛桑除了擁有日內瓦湖的藍、兩旁行道樹的綠意盎然，還有活潑鮮艷的花團點綴，城市整體散發非常宜人的感受
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747406578/7518858928_MVI_6836_w6vhb6.mp4`}
        />
        <Paragraph>
          最酷的是這位爺爺，戴著耳機沈醉在自己的溜直排輪世界
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Le Musée Olympique(奧林匹克博物館)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406565/7518858928_IMG_6844-1024x683_lxuotu.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747406566/7518858928_IMG_6850-1024x683_bvzzyi.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747406567/7518858928_IMG_6856-1024x683_ynifiy.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747406566/7518858928_IMG_6855-1024x683_grwutf.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747406565/7518858928_IMG_6846-1024x683_lyq6m6.jpg`,
            },
          ]}
        />
        <Paragraph>各種體育項目的雕塑，連身上的肌肉線條都非常逼真</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406567/7518858928_IMG_6860-1024x683_zjxx6m.jpg`,
          }}
        />
        <Paragraph>奧林匹克聖火，傳承的火焰象徵著生生不息</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406570/7518858928_IMG_6862-scaled_uxixrp.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406567/7518858928_IMG_6857-1024x683_yykwlq.jpg`,
          }}
        />
        <Paragraph>
          博物館這裡有最先進的互動展覽、豐富的文件和影像記錄，並珍藏多件來自古希臘至近代與奧運相關的物品
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747406568/7518858928_IMG_6865-1024x683_hy9c0s.jpg`}
          text="短暫的洛桑巡禮就在奧林匹克博物館結束，一個上午的時間，若時間能更長我會待在河邊更久，再來我們驅車到距離不遠的日內瓦"
        />
      </Section>

      <Section>
        <SubTitle title="洛桑對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747406573/IMG_7761-1024x768_zr6yqb.jpg`,
          }}
        />
        <Paragraph>
          雖然在這個城市停留的極其短暫，也沒有充分時間在這裡探索，不過我對這座城市的第一印象很好
          非常舒適宜人，湖畔的悠閒時光和享受生活的當地人們，洛桑真的很適合放鬆(我怎麼覺得每個瑞士的城市都是XDD)，一河之隔對面就是法國，還是感到新奇，我們還在考慮要不要衝了😂
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoLausanne;
