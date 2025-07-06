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
import Preface from "@root/components/typography/Preface";
import Video from "@root/components/typography/Video";

const CiaoStGallen = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="瑞士半日輕旅行 - 聖加倫(St. Gallen)" />
      <CreatedDate date={"2021-07-23"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023872/IMG_4425-scaled_jqbpsc.jpg`,
          }}
        />
      </Section>

      <MyDate date={"April 13 2018"} />

      <Section>
        <Preface>
          聖加侖是瑞士東北第一大城市，其地理位置得天獨厚，位於瑞士、德國、奧地利和列支敦士登公國四國交界處
          <br />
          中世紀時，聖加侖成爲歐洲重要的文化和教育中心，是一個以經濟學科爲主的大學城
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023871/IMG_4392-1024x768_lcmayv.jpg`,
          }}
        />
        <Paragraph>
          某同行友人昨天開車還開到電車道上，差點沒嚇死
          <br />
          說真的瑞士這趟自駕真的是發生很多事 XD
          <br />
          被瑞士人狂按喇叭、走錯Ｎ條路、在因特拉肯的時候莫名熄火打點話求助...
          太多太多啦真的哭笑不得
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023872/IMG_4405-1024x768_ldzoli.jpg`,
          }}
        />
        <Paragraph>
          用最慢的速度開進這條路，總覺得在瑞士的任何地方都不會看到人車太多的情況
          (除了蘇黎世之外)
          <br />
          社區住宅區擁有很高品質的生活，街道也超乾淨！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023871/IMG_4401-1024x768_o95kcm.jpg`,
          }}
        />
        <Paragraph>
          好不容易找到了停車位，在瑞士停車也有大學問：『記得要先付錢💰』
          <br />
          在瑞士 <span style={{ color: "#0693e3" }}>藍色</span>
          停車格為限時免費停車、<span style={{ color: "#fcb900" }}>黃色</span>
          停車格為私人車位，<span style={{ color: "#7f7f7f" }}>白色</span>
          停車格為付費停車位
          <br />
          簡單來說還是把車停在停車場才是最安全的方式
          <br />
          瑞士交通號誌基本上很好懂，但是違反交通規則罰金卻很驚人 ⚠️
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="舊城區" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023871/IMG_4412-1024x768_ca4siq.jpg`,
          }}
        />
        <Paragraph>
          在聖加侖小城內擁有一個迷人、禁止汽車駛入的舊城區
          <br />
          聖加侖市區的景點不多，主要還是以聖加侖修道院為主，排個半日遊很剛好
          <br />
          另外聖加侖的建築很有特色，有色彩繽紛的凸窗（顧名思義就是向外凸出的窗戶）還有溼壁畫藝術！
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746024033/IMG_4410_ldrgee.mp4`}
        />
        <Paragraph>
          天氣很好，歐洲隨處就有個小廣場，待在廣場就很讚了，而且周圍也會連帶有很多餐廳店家
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746023874/IMG_4614-1024x768_gfbfdy.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746023872/IMG_4408-1024x768_z8sf9k.jpg`,
            },
          ]}
        />
        <Paragraph>
          不曉得是不是因為假日的關係，總覺得都沒什麼人，商店、露天咖啡店餐廳也是
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023871/IMG_4416-scaled_qm33fp.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="ABBEY OF SAINT GALL 聖加侖修道院" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746023872/IMG_4442_pdc7vc.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746023872/IMG_4419_zheecq.jpg`,
            },
          ]}
        />
        <Paragraph>
          聖加侖修道院是這座城市的地標，和旁邊的修道院圖書館在 1983
          年被列為世界文化遺產之一
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746024026/IMG_4430_l4tcxi.mp4`}
        />
        <Paragraph>
          巴洛克風格的大教堂，流露出一種獨特的歷史氛圍
          <br />
          影片中 教堂內管風琴音樂真的很好聽，而且會讓心情有很平靜的感覺
          <br />
          細細觀察教堂內部的雕刻細節，綠色白色的搭配也是非常特別，和我在其他教堂看到的不一樣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023875/IMG_4940-1024x682_ivoewo.jpg`,
          }}
        />
        <Paragraph>
          在這裡靜靜坐著，抬頭仰望天花板上的每一則故事
          <br />
          內心那條上下波動的線似乎有被拉平的感覺，每每在教堂坐下都有這種感覺
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023872/IMG_4445-1024x768_jt7bgi.jpg`,
          }}
        />
        <Paragraph>開始大拍特拍</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023873/IMG_4447_t8mgh3.jpg`,
          }}
        />
        <Paragraph>躺在草地上曬四月的陽光，舒服又享受</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023876/IMG_5195-1024x768_fmu3ck.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746023874/IMG_4612_sr7bix.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746023875/IMG_4622_delgzs.jpg`,
            },
          ]}
        />
        <Paragraph>
          在聖加侖逛的時候不妨可以多注意店家的招牌或門牌，都設計得別出心裁（雖然我沒拍照留存）
          <br />
          生動細緻充滿藝術氣息
          <br />
          進去逛一間古物店，裡面有很多居家擺設藝術品，不過價錢也不便宜對我來說
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023873/IMG_4561-1024x768_fcpiho.jpg`,
          }}
        />
        <Paragraph>
          隨心所欲的在舊城區走跳，就算都沒什麼店家營業，不過某種程度上我也很喜歡這樣空蕩蕩的街景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023875/IMG_4943-1024x682_fgwwv0.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="ABBEY LIBRARY OF SAINT GALL 聖加侖修道院圖書館" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023871/gofl6929_nosfwz.jpg`,
          }}
        />
        <Paragraph>
          有『世界最美圖書館』稱號的修道院圖書館，建築物幾乎是和聖加侖修道院連在一起
          <br />
          進入前還要換上他們的拖鞋，由於裡面是無法拍照的，所以我從網路找一張圖
          <br />
          裡面許多館藏和手稿，依稀可以感受到昔日本篤會修士在這裡苦心攢研的氣息，圖書館又被稱爲
          Seelenapotheke (撫慰心靈的地方)
          <br />
          其中吸引到我的是 中間有一具 2,700 年前的古埃及木乃伊 Shepenese
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="聖加侖對我來說…" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023875/IMG_4625-1024x768_ruwgmg.jpg`,
          }}
        />
        <Paragraph>
          聖加侖的半日輕旅行結束了，接著要前往列支敦士登 👉🏻
          <br />
          在這座城市我看到極具特色並充滿童趣的建築，凸窗和濕壁畫很容易吸引目光，不自覺得進入讚嘆模式
          <br />
          聖加侖修道院和圖書館帶來的體驗更是超乎想像，當我腳踩在吱吱作響的圖書館地板時，更能強烈感受其歷史悠久
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoStGallen;
