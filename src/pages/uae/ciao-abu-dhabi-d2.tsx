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

const CiaoAbuDhabiD2 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿布達比 – 酋長皇宮文華東方酒店、Abu Dhabi 羅浮宮" />
      <CreatedDate date={"2024-04-10"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787187/IMG_2467_adchj1.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="30 Nov 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787200/IMG_3299-scaled_bxlre6.jpg`,
          }}
        />
        <Paragraph>
          阿布達比第二天的計畫是早上先悠閒吃早午餐，接著去酋長皇宮酒店參觀 -&gt;
          阿布達比羅浮宮 -&gt; 晚餐
        </Paragraph>
      </Section>

      {/* Fil Florist & Cafe */}
      <Section>
        <SubTitle title="Fil Florist & Cafe" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751787215/IMG_3296-scaled_tkm4zd.jpg`}
          text="選擇這間咖啡店不僅距離阿提哈德塔近，而且環境愜意，尤其店內裝潢的超級美（雖然我們坐戶外哈哈哈），是直接在 Google Map 瀏覽找到的<br />食物不錯吃，但是份量少又貴，但其實這一排都是類似的餐廳，所以可以多比較！"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787184/IMG_2452_e9raxe.jpg`,
          }}
        />
        <Paragraph>
          吃完早午餐本來是計劃搭公車去酋長皇宮的，不過公車不接受零錢，所以我們就用走的
          <br />
          阿提哈德塔看起來雖然近在眼前，實際上走過去還要 40 分鐘…. 即便是 11
          月底，接近中午時分還是頗熱，毫無遮蔽物
        </Paragraph>
      </Section>

      {/* Etihad Towers */}
      <Section>
        <SubTitle title="Etihad Towers 阿提哈德塔" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787185/IMG_2454_lkom1q.jpg`,
          }}
        />
        <Paragraph>
          路上的人行道規劃的很好，只是沒什麼路人
          <br />
          這一帶就是我們印象中阿布達比的樣子（和第一天從杜拜搭巴士過來市區的樣子差好多）
          <br />
          5座現代建築群組成的阿提哈德塔，充分展現出阿布達比身為阿聯酋首都的氣派，不免又想起了玩命關頭七的飛車場景（這集真的是看電視重播很多次ＸＤ）
        </Paragraph>
      </Section>

      {/* Emirates Palace Mandarin Oriental */}
      <Section>
        <SubTitle title="Emirates Palace Mandarin Oriental" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787189/IMG_2469_pmabm5.jpg`,
          }}
        />
        <Paragraph>
          酋長皇宮就在阿提哈德塔對面，粉嫩顏色的飯店外觀我好像第一次看到
          <br />
          前方的飯店工作人員站一排，我以為他們是要迎接哪位重量級貴賓
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787188/IMG_2472_ni8xvm.jpg`,
          }}
        />
        <Paragraph>原來是升旗典禮😂，一瞬間感到莊嚴肅穆</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751787199/IMG_2483_quq49s.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751787192/IMG_2488_avqsxy.jpg` },
          ]}
        />
        <Paragraph>我的腦海都是玩命關頭七大家從樓梯走下來的樣子</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787190/IMG_2498_aftbtc.jpg`,
          }}
        />
        <Paragraph>
          雖然住不到，但來參觀過過乾癮也是不錯的，親眼見證所謂全世界最奢華是什麼模樣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787195/IMG_2499_f3qqaj.jpg`,
          }}
        />
        <Paragraph>
          一進飯店金光直接閃瞎我眼睛，非～～常氣派
          <br />
          還有 UAE 國旗蘭花🇦🇪～ 太可愛了吧
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787193/IMG_2503_a94qwf.jpg`,
          }}
        />
        <Paragraph>
          休息區一隅，有一種低調典雅
          卻又藏不住貴氣奢華的感覺，坐在這裡會有身份地位大耀進的錯覺哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751787202/IMG_3302-scaled_owk8yc.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751787202/IMG_3304-scaled_m9w9s5.jpg`,
            },
          ]}
        />
        <Paragraph>
          怎麼可以不來廁所朝聖一下，連這裡都金碧輝煌、璀璨耀眼，任何細節都不放過
          <br />
          上個廁所好舒適，而且在裡面拖了好久
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787205/IMG_2511_iezl2z.jpg`,
          }}
        />
        <Paragraph>非常有中東風情</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787211/IMG_2516_bfaqm0.jpg`,
          }}
        />
        <Paragraph>草皮上有大大的🇦🇪</Paragraph>
      </Section>

      {/* Louvre Abu Dhabi */}
      <Section>
        <SubTitle title="Louvre Abou Dabi 阿布達比羅浮宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787197/IMG_2523_f4rbit.jpg`,
          }}
        />
        <Paragraph>
          經歷了酋長皇宮的大開眼界後，我們隨後來參觀阿布達比羅浮宮
          <br />
          阿布達比羅浮宮是法國與阿聯酋協議的合作成果，建築本身更是一件藝術品
          <br />
          館內除了有阿布達比羅浮宮自己的收藏，另有多件藏品是從法國羅浮宮和其他法國知名博物館借出
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787209/IMG_2526_ylgpft.jpg`,
          }}
        />
        <Paragraph>館內展區佔地廣大，我們逛一個下午逛到腳酸走不完</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787204/IMG_2530_eymfgi.jpg`,
          }}
        />
        <Paragraph>
          銀色的穹頂(dome)，籠罩整座博物館，鏤空的幾何圖形結構，讓投射在穹頂的陽光
          如穿透椰棗樹葉子，獨特的光影效果充滿詩意，也象徵阿拉伯精神
        </Paragraph>
      </Section>

      {/* DIN TAI FUNG */}
      <Section>
        <SubTitle title="DIN TAI FUNG The Galleria Al Maryah Island 阿布達比" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787207/IMG_3328-scaled_sociom.jpg`,
          }}
        />
        <Paragraph>
          話說從杜拜、沙迦到阿布達比，目前的阿聯酋之旅已到最後一天，已經很想念台式食物，中東料理也好吃，只是餐餐的話我有些消化不良，而且又缺乏蔬菜
          <br />
          我們迫不急待地決定造訪阿布達比的鼎泰豐，在 Galleria Mall 一樓
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751787213/IMG_3324-scaled_xkjcnf.jpg`}
          text="UAE 國旗限定小籠包 🇦🇪<br />有羊肉、海鮮、雞肉、蟹黃四種口味，羊肉意外好吃！再炒個青菜、肉絲，搭配酸辣湯，我太滿足了"
        />
      </Section>
    </div>
  </div>
);

export default CiaoAbuDhabiD2;
