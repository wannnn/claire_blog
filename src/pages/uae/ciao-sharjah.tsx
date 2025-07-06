import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoSharjah = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿拉伯聯合大公國🇦🇪 沙迦半日遊 – Day4" />
      <CreatedDate date={"2024-02-15"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785101/IMG_1974_qldtql.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="27 Nov 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785102/IMG_1949_xt3pls.jpg`,
          }}
        />
        <Paragraph>
          在杜拜的這五天裡，我們規劃了其中半天到沙迦玩，沙迦是位在杜拜北邊的酋長國，阿聯酋的第三大城
          <br />
          為了方便我們直接跟了 kkday
          的團，團裡只有司機，載大家到景點告訴你幾點上車，導覽的部分則是發了一副耳機，在車上聽
        </Paragraph>
      </Section>

      {/* King Faisal Mosque */}
      <Section>
        <SubTitle title="King Faisal Mosque" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785105/IMG_1948_hznu8f.jpg`,
          }}
        />
        <Paragraph>
          首站的清真寺，是酋長國中最大的國王費薩爾清真寺，只能在外面繞一圈拍拍照，無法進去
          <br />
          清真寺建築外觀很特別，層層堆疊的感覺，富有層次感
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785100/IMG_1965_bxhxxa.jpg`,
          }}
        />
        <Paragraph>
          可以感受到沙迦的綠化面積和杜拜相比更加寬廣，沙漠中的綠洲
        </Paragraph>
      </Section>

      {/* Souq Al Shanasiyah */}
      <Section>
        <SubTitle title="Souq Al Shanasiyah" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785101/IMG_1974_qldtql.jpg`,
          }}
        />
        <Paragraph>
          下一站來到 Souq，可以看得出來這裡是老房子經過修復的市場，沒什麼人
          甚至連店家有些都沒開，冷冷清清
          <br />
          主要這裡賣阿拉伯香水、高級訂製服、手工長袍，物價高
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751785108/IMG_1994_qfy3al.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751785109/IMG_1977_ugkzbo.jpg` },
          ]}
        />
        <Paragraph>
          剛剛的 souq 再繼續往裡面逛會來到 Souk Al
          Arsah，這個才是比較知名古老的市場（忘了拍照
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785104/IMG_1983_zmbkvv.jpg`,
          }}
        />
        <Paragraph>同時 souq 也連接濱海路，大好的天氣非常舒適</Paragraph>
      </Section>

      {/* Sharjah Fort (Al Hisn) */}
      <Section>
        <SubTitle title="Sharjah Fort (Al Hisn)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785107/IMG_1999_lf04jl.jpg`,
          }}
        />
        <Paragraph>
          在沙迦市區內就有一座堡壘，阿爾辛沙迦堡博物館，需要門票
          <br />
          由於我們參加了這種走馬看花行程，基本上司機就是載你到點讓你拍完照就要閃人了，根本沒時間進去逛QQ
        </Paragraph>
      </Section>

      {/* Sharjah Museum of Islamic Civilization */}
      <Section>
        <SubTitle title="Sharjah Museum of Islamic Civilization" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785108/IMG_2006_jbfxuf.jpg`,
          }}
        />
        <Paragraph>
          沙迦伊斯蘭博物館的門票是有包含在費用裡的，時間一小時（超不夠
          <br />
          博物館裡深度展現了伊斯蘭文明歷史，涵蓋宗教、藝術、科學、建築等等
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751785102/IMG_2004_bzwwlp.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751785111/IMG_2001_sbj1n8.jpg` },
          ]}
        />
        <Paragraph>
          館內建築精美，文物眾多並且安靜，可以好好欣賞了解歷史
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785103/IMG_2008_puksbu.jpg`,
          }}
        />
        <Paragraph>
          留了一些時間，到沙迦伊斯蘭博物館對面的海濱散步幾分鐘
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785112/IMG_2010_altjiz.jpg`,
          }}
        />
        <Paragraph>
          沙迦目前為止給我的感覺，不同於杜拜的高度發展、奢華，但有他自己的韻味
          <br />
          嶄新乾淨、舒適低調
        </Paragraph>
      </Section>

      {/* Central Souk (Blue Souk) */}
      <Section>
        <SubTitle title="Central Souk (Blue Souk)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785116/IMG_2039_fr9sta.jpg`,
          }}
        />
        <Paragraph>
          藍色市集是沙迦的著名景點，販賣的東西比杜拜便宜，室內還有冷氣
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751785113/IMG_2027_ispjmo.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751785114/IMG_2032_muin2f.jpg` },
          ]}
        />
        <Paragraph>
          在沙迦逛市集舒服很多，不會有過度的招攬，我買了兩條圍巾之後去清真寺可以包頭
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785110/IMG_2041-1_k7tjrm.jpg`,
          }}
        />
        <Paragraph>
          走出市集，來到戶外綠地，緊鄰湖邊，對面有摩天輪的島在地圖看是 The Flag
          Island
          <br />
          藍色市集是我們的最後一站了，短短的四小時一晃而過，我認為這完全不充分的理解沙迦，只是踩點而已
          <br />
          到此一遊的話跟 kkday 還行，不然沙迦自己玩一天還是比較剛好
        </Paragraph>
      </Section>

      {/* Dubai Mall */}
      <Section>
        <SubTitle title="Dubai Mall" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785115/IMG_2047_zhnrpg.jpg`,
          }}
        />
        <Paragraph>告別沙迦回到杜拜，回程停在了杜拜 Mall，順便吃午餐</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751785118/IMG_2426-scaled_duzuoo.jpg`}
          text="白天的哈里發塔，中東的天氣每天都好好"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785119/IMG_2702-scaled_igf5cj.jpg`,
          }}
        />
        <Paragraph>
          總共花了台幣九百多的 Shake
          Shake。。。此生難忘，連薯條都沒有，根本沒吃飽😅
          <br />
          逛完了杜拜 Mall，我們就搭捷運回飯店休息了
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751785123/IMG_2895-scaled_jxsbeo.jpg`}
          text="晚餐跟隨男友的行程，來這間 nonya 亞洲料理餐廳吃飯"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785123/IMG_2468-scaled_yo5i5f.jpg`,
          }}
        />
        <Paragraph>
          餐廳在高樓層可以看杜拜的夜景，遠處還可以看到帆船飯店的小小身影，不管到哪個國家哪座城市，當夜幕降臨
          萬家燈火亮起的那個時刻，精彩才正要開始
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785122/IMG_2083_xqkz7f.jpg`,
          }}
        />
        <Paragraph>
          從餐廳走了幾乎半小時又來到了杜拜 Marina 這邊，就是前幾天遊船的那個碼頭
          <br />
          散步在河邊
          看形形色色的人經過，此起彼落的餐廳招攬聲，有人跑步運動、有人騎電動滑板車，非常多的外國人聚集在這
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785122/IMG_2081_t8r7jr.jpg`,
          }}
        />
        <Paragraph>在杜拜繁華的夜景之下結束一天是完美的🌃</Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoSharjah;
