import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoBidiyah = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿曼 – 在 Bidiyah 沙漠睡一晚貝都因帳篷！" />
      <CreatedDate date={"2024-05-24"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791033/IMG_2942-2_m8bhqy.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="3 Dec 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791031/IMG_2822_hccnmd.jpg`,
          }}
        />
        <Paragraph>
          離開了尼日瓦繼續往東邊開，我們要前往阿曼的 Bidiyah desert
          住一個晚上，是我在阿曼最期待的行程
          <br />
          沙漠住宿通常都是貝都因帳篷的形式，在 booking
          上也有看到更高級一點的度假村
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791033/IMG_3247-scaled_n9havf.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791033/IMG_3752-scaled_sfnjcb.jpg`,
            },
          ]}
        />
        <Paragraph>
          和今晚的帳篷主人事先確認好 meeting
          point，因為我們在阿曼不是租四輪傳動的車，無法將他開進沙漠，所以需要接送
          (來回 10 OMR)，我們把車停在 <strong>Al Mintarib Castle</strong>
          ，帳篷主人會來載我們，行李箱丟車內，換上各自後背包
          <br />
          約了下午兩點，我們提早抵達了，等待的同時，我們去附近的咖啡店吹冷氣休息一下
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791033/IMG_3258-scaled_bffzwq.jpg`,
          }}
        />
        <Paragraph>
          帳篷主人似乎叫做易卜拉欣，我沒聽錯的話（這應該是中東人的菜市場名）人非常好，很親切的跟我們聊天
          <br />
          抵達我們住的地方好像也只開了10-15分鐘而已，其實離市區不遠
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791032/IMG_2840_vnriaj.jpg`,
          }}
        />
        <Paragraph>
          今晚我們在 Bidiyah
          住的帳篷長這樣～超可愛的！我夢寐以求來中東一定要在沙漠著上一晚，就獻給阿曼了
          <br />
          帳篷內有燈有插座，但是電力很微弱，這邊還算不錯
          洗沐用品和毛巾都有附，床摸起來都沙沙的😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791031/IMG_2836_wrmj12.jpg`,
          }}
        />
        <Paragraph>
          廁所都是像這樣外接而且很有趣是露天的，我們住的房型有被升級，是高腳的帳篷不是放在地面上的，廁所有連起來，不用走到外面
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791032/IMG_2842_oqorq5.jpg`,
          }}
        />
        <Paragraph>
          行李安頓好後開始在這片 Bidiyah desert 探索，中東這邊的駱駝是單峰駱駝🐪
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791033/IMG_3283-scaled_dnyrw0.jpg`,
          }}
        />
        <Paragraph>
          來我們的交誼廳坐坐，喝杯紅茶吃椰棗
          <br />
          貝都因意思是居住在沙漠的人，我想像自己是逐水草而居的遊牧民族
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791031/IMG_2846_o6crnw.jpg`,
          }}
        />
        <Paragraph>杯子沙沙，紅茶也沙沙，這就是沙漠！</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791034/IMG_3768-scaled_aelh7w.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791034/IMG_3766-scaled_gzq6kn.jpg`,
            },
          ]}
        />
        <Paragraph>
          在這邊耍廢的時候，也剛好來了另一組客人，是哥倫比亞人和英國人，開始和他們天南地北亂聊
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751791031/IMG_2852_mkmcev.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791031/IMG_2854_kgizsb.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791032/IMG_2888-2_qtjzx9.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791032/IMG_2855_m14xdj.jpg` },
          ]}
        />
        <Paragraph>
          沙漠也是有一些付費活動像騎駱駝、飆沙，我們都沒參與
          <br />
          看駱駝這麽可愛我捨不得騎他，而飆沙我可能無法 會暈車
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791033/IMG_3298-scaled_hwkl8h.jpg`,
          }}
        />
        <Paragraph>
          雖然說沒參加那些活動在沙漠中就真的無事可做了，但難得有機會遠離都市塵囂放空一天，也是蠻好的
          <br />
          如此寬廣的沙漠，我感覺自己心也更開闊了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791033/IMG_3304-1-scaled_gdfcbo.jpg`,
          }}
        />
        <Paragraph>回到我們帳篷前的小草皮，吹著沙漠的風等待日落</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791031/IMG_2884_xlmuct.jpg`,
          }}
        />
        <Paragraph>等到天色暗了發現原來這裡還可以看到市區夜景</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791035/IMG_3832-scaled_upxbyy.jpg`}
          text="晚餐是沒有算在房價內的，要另外付錢，每人 5 OMR，有必備的餅和鷹嘴豆泥、烤肉、生菜、falafel<br />還有 biryani 以及 pasta，算是豐富"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791033/IMG_3332-scaled_eq0uft.jpg`,
          }}
        />
        <Paragraph>
          用完晚餐後大家圍在一起烤火，12
          月初的沙漠我以為晚上會很冷，但在阿曼好像還好，大概 18 度左右
          <br />
          喝杯紅茶大家聊天、觀星，這會是我在阿曼很難忘的回憶之一
          <br />
          回歸此時此刻，遠離手機，好好與身邊在乎的人相處
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791034/IMG_3835-scaled_a78uez.jpg`}
          text="我們的帳篷主人"
        />
      </Section>

      <Section>
        <MyDate date="4 Dec 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791032/IMG_2892-2_rz9lvv.jpg`,
          }}
        />
        <Paragraph>
          前一個晚上覺得不方便沒洗澡，想說早點睡六點起來看日出
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791034/IMG_3838-2-scaled_qsggc7.jpg`}
          text="前一天傍晚到晚上風有點大，白天總算是平息了<br />享用簡單的早餐，我覺得還算不錯<br />不過我好想吃煮熟的蔬菜"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751791032/IMG_2908-2_x7mcwh.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791032/IMG_2921-2_h0epcy.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791032/IMG_2926-2_y8xucu.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791032/IMG_2915-2_uif8yp.jpg` },
          ]}
        />
        <Paragraph>
          天氣超級好
          我們在沙漠裡到處拍照，玩到差不多十點多退房讓帳篷主人載我們出沙漠
          <br />
          沙漠的住宿是現金付款的！這裡沒有刷卡機哈哈哈，房價不包餐食接送，所以錢要算好
          <br />
          我們還拿到乳香精油當作紀念品，實在是太讚了！味道非常舒服
          <br />
          結束阿曼奇幻的沙漠之旅我們要繼續接下來的行程了，會沿路往北，停中間幾個景點，回到阿曼首都馬斯喀特！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBidiyah;
