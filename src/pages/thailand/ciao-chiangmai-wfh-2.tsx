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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoTextRow from "@root/components/typography/VideoTextRow";

const WfhChiangMai2 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="在清邁 WFH - 週五不上班" />
      <CreatedDate date={"2023-07-01"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575841/IMG_0825_mi8hye.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="19 May 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575832/IMG_0819-1024x683_srauzq.jpg`,
          }}
        />
        <Paragraph>
          禮拜五不工作請假，來清邁古城區這邊逛逛
          <br />
          第一個目的地是融合藝術、工藝和文化的空間 Kalm Village
          Chiangmai，有咖啡廳、餐館、藝術展覽等等
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575832/IMG_0818-1024x683_u2gamg.jpg`,
          }}
        />
        <Paragraph>
          園區是免費開放的，本來以為裡面店家應該很涼
          有冷氣能避避暑，但似乎還不是最熱的時間點幾乎都沒開ＸＤ
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575840/IMG_9506-768x1024_ieoin3.jpg`}
          text="在 Kalm Village 的頂樓有個空間可以休息、俯瞰清邁，能看到柴迪隆寺"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575832/IMG_0822-1024x683_lvrajg.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575833/IMG_0824-1024x683_gnf0cf.jpg`,
          }}
        />
        <Paragraph>
          Kalm Village 沒有待上太久，接近中午
          我們打算邊往柴迪隆寺的方向走，然後看有什麼吃的
          <br />
          充滿綠意的小路好好拍，感覺純樸、愜意
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575833/IMG_0831-1024x683_ldrxqa.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575837/IMG_0833-1024x683_mognsc.jpg`,
          }}
        />
        <Paragraph>
          午餐吃在柴迪隆寺對面的 Poppy&apos;s
          Kitchen，門口那顆大大的芒果樹也太吸睛
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575833/IMG_9302-768x1024_hl3pir.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575836/IMG_9520-768x1024_xhxgjs.jpg`,
            },
          ]}
        />
        <Paragraph>
          Poppy&apos;s 的價位比較偏高，不過我們點 Khao Soi 、 綠咖哩 with Roti
          以及一道炒菜表現都很好！好吃的！
          <br />
          還特地和服務生說不要太辣🌶️ 哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575832/IMG_0841-1024x683_kaenck.jpg`,
          }}
        />
        <Paragraph>
          柴迪隆寺因為隔天房東邀請我們去寺廟活動，所以我們先跳過
          去了隔壁的盼道寺
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575834/IMG_0843-1024x683_nefbub.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575835/IMG_0837-1024x683_rktkbm.jpg`,
          }}
        />
        <Paragraph>
          木建築的佛寺，柚木由外延伸至內，接著看到金光閃閃的大佛，讓人心情得以沈澱、感到安心
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575841/IMG_9538-768x1024_luvanx.jpg`}
          text="木寺令人感到格外溫馨，寺廟外面有罩衫讓服儀不合格的人使用，就不用再自己帶外套了"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575835/IMG_0846-1024x683_s8prke.jpg`,
          }}
        />
        <Paragraph>
          繼續穿梭在清邁古城的街道，唯一缺點熱以外，我是很喜歡清邁給我的感覺，也很喜歡走在清邁路上
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575833/IMG_0847-1024x683_fvy7sg.jpg`,
          }}
        />
        <Paragraph>好像可以去看看泰拳比賽哈哈哈</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575837/IMG_9546-1024x768_uzbi39.jpg`,
          }}
        />
        <Paragraph>表情管理 👎</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575834/IMG_0851-1024x683_zo5til.jpg`,
          }}
        />
        <Paragraph>
          趁著烈日當頭，找間清邁特色咖啡店去享受一下是必要的，Akha Ama Phrasingh
          進去後撲鼻的咖啡香、寬敞的空間規劃很舒適
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575839/IMG_9560-768x1024_ob33yz.jpg`}
          text="在咖啡店的同時外面下了一場大雨，剛好把暑氣消去"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575841/IMG_0852-1024x683_eyuauy.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575838/IMG_9311-768x1024_cetm6i.jpg`}
          text="沒帶傘的我們直接去隔壁 Its Good Kitchen 吃個點心
          <br />
          芒果糯米飯還做成熊熊的樣子好可愛哈哈哈，旁邊的炸蝦很小巧，沾上泰式酸辣醬很讚
          <br />
          餐廳還有非常多泰北家常菜，可惜這次不能享用，因為晚點我們已經預定了
          Ginger Farm"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575836/IMG_0853-1024x683_sprgve.jpg`,
          }}
        />
        <Paragraph>
          吃完點心雨還在下，直接去咖啡店隔壁的 DeepSense Massage 全身按摩
          <br />
          在外面整天留了一堆汗，剛好按摩還可以順便沖洗一下
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575840/IMG_9317-768x1024_oicu5q.jpg`}
          text="One Nimman 這邊很多餐廳都有上必比登推薦，Ginger Farm
          也是看到非常多文章推薦"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575840/IMG_9316-1024x768_f4kiec.jpg`,
          }}
        />
        <Paragraph>
          餐廳的木質調和竹編風格我很喜歡，Ginger Farm
          菜色非常多！光是菜單就可以看很久決定很久
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747575849/IMG_9315_vqey4r.mov`}
          text="最推脆皮豬！！皮香脆 肉鮮嫩多汁
          <br />
          綠色茄子也好好吃！煎蛋又香又有料，每一口都可以吃到肉末"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575835/IMG_9319-768x1024_ezdvds.jpg`}
          text="好幾次路過這間小酒吧，裡面也有賣水果冰棒
          <br />
          吃一隻山竹冰，好像吃不太出明顯的山竹味道"
        />
      </Section>

      <Section>
        <Title title="🗺️ 今天的吃吃喝喝" />
        <Paragraph>
          🍴：
          <br />
          Poppy&apos;s Kitchen
          <br />
          Its Good Kitchen(ครัวลำดี)
          <br />
          Ginger Farm Kitchen
          <br />
          ☕️：
          <br />
          Akha Ama Phrasingh
          <br />
          💆：
          <br />
          DeepSense Massage
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default WfhChiangMai2;
