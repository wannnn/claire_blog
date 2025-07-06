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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoTextRow from "@root/components/typography/VideoTextRow";
import Preface from "@root/components/typography/Preface";

const CiaoVaduz = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="『列支敦士登』瓦杜茲(Vaduz) - 來到最有錢的迷你國家" />
      <CreatedDate date={"2021-07-23"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025037/IMG_4735-scaled_twpb2a.jpg`,
          }}
        />
      </Section>

      <MyDate date={"April 13 2018"} />

      <Section>
        <Preface>
          從聖加侖離開後前往世界上最有錢的郵票小國 - 列支敦士登 🇱🇮
          <br />
          世界上僅有的兩個雙重內陸國之一，夾在瑞士與奧地利兩國間
          <br />
          其首都瓦杜茲（Vaduz）座落於萊因河河谷沿岸的一處高地上，人口約 5,000
          上下
          <br />
          今日的 Vaduz
          是列支敦士登重要的金融中心，市區內也有用來展示皇家收藏的美術館和一家郵票博物館，旅遊觀光業興盛
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025029/IMG_4642-1024x768_o2ipgb.jpg`,
          }}
        />
        <Paragraph>在瑞士開車真的是一大享受耶！風景簡直美的不可思議</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Schloss Vaduz（瓦杜茲城堡）" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025031/IMG_4669-1024x768_ynl80i.jpg`,
          }}
        />
        <Paragraph>
          從瑞士駛過了萊茵河上的小橋，就到了列支敦士登
          <br />
          和瑞士德語區一樣使用德語，貨幣一樣是瑞郎，這邊沒有海關查驗，沒有火車站也沒有機場，完全沒有出國的感覺！
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746025034/IMG_4667_swjvw9.jpg`}
          text="當開車接近瓦杜茲時，遠遠便注意到瓦杜茲城堡
          <br />
          這座城堡是列支敦斯登在位親王和親王家族的居所，不對外開放
          <br />
          我們爬坡上山在外面拍拍照，這裡有很好的視野可以俯瞰瓦杜茲小城"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025030/IMG_4654-1024x768_klsn3a.jpg`,
          }}
        />
        <Paragraph>這裡實在是很好拍照，大方坐下來都沒在怕</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025030/IMG_4750-1024x768_dh7aul.jpg`,
          }}
        />
        <Paragraph>春天的氣息，感受季節變化的美，我看得出神</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025031/IMG_4684-1024x768_kfpzh0.jpg`,
          }}
        />
        <Paragraph>只是想拍一張和阿爾卑斯山的唯美照 XD</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025030/IMG_5679-1024x768_x8dybd.jpg`,
          }}
        />
        <Paragraph>正好陽光灑落，在四月這個時候覺得暖暖的</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746025042/IMG_4753_lboitz.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746025038/IMG_4663_oclqoc.jpg`,
            },
          ]}
        />
        <Paragraph>
          雖然說城堡是私人的無法進入，不過附近有一些簡單的小路可以漫步
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025033/IMG_4885-1024x768_nvf2sq.jpg`,
          }}
        />
        <Paragraph>
          慢下腳步，感受周圍帶來的寧靜
          <br />
          一棟木屋矗立在路邊，顯得有點孤寂感，如果是周邊景色優美但只有我一戶住在這，我好像不行哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025031/IMG_4947-1024x682_do09py.jpg`,
          }}
        />
        <Paragraph>我要躺在大自然的懷抱</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746025032/IMG_4948-1024x682_xvkx1l.jpg`}
          text="感謝朋友幫我拍下這張
          <br />
          用我的眼睛努力裝下更多美景，更要把意識專注在當下
          <br />
          儘管兩年後的今天我可能忘了那天做了什麼
          <br />
          但感受和體悟永遠會在"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025032/IMG_4900-1024x768_vxhqwl.jpg`,
          }}
        />
        <Paragraph>倒是拍了一堆奇怪的照片</Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1746025043/IMG_4912_elsxo6.mp4`}
          text="在瓦杜茲城堡那玩了好久，下山時天色已漸黑
          <br />
          我趴在車窗上看一幕一幕風景經過，像幻燈片一樣播放"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025035/IMG_4913-1024x768_yrwvvn.jpg`,
          }}
        />
        <Paragraph>
          市區店家已經都打烊休息，街上也沒多少人，公車似乎也停駛，宛若空城，以下這些景點：
          <br />
          ❌ 列支敦斯登藝術博物館（Kunstmuseum Liechtenstein）
          <br />
          ❌ 瓦杜茲郵票博物館（Postage Stamp Museum）
          <br />
          ❌ 瓦杜茲主教座堂（Kathedrale St. Florin）
          <br />
          ❌ 列支敦士登國家博物館（Liechtenstein National Museum）
          <br />
          ❌ 列支敦士登國家會議廳（Landtag des Fürstentums Liechtenstein）
          <br />
          全部錯過 😂
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746025037/IMG_4919_knyxgx.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746025036/IMG_4920_jra16r.jpg`,
            },
          ]}
        />
        <Paragraph>我們就是隨意閒晃，走進社區裡，看著街燈亮起</Paragraph>
      </Section>

      <Section>
        <SubTitle title="列支敦士登對我來說…" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746025033/IMG_4924-1024x768_j8el9t.jpg`,
          }}
        />
        <Paragraph>
          列支敦士登是個嬌小可愛的國家，人口也不多，卻擁有人均國民生產總值世界排名前三的高國民收入水準
          <br />
          雖然短暫停留，但留下最深刻印象的卻是最後要離開時
          家家戶戶溫暖燈光亮起，透過窗戶看到餐桌上的菜餚和酒
          <br />
          在天色還沒全暗之前的白色山頭，感受瓦杜茲小城帶給我前所未有的寧靜
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoVaduz;
