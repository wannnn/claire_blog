import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyDate from "@root/components/typography/MyDate";

const CiaoDubaiD5 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="杜拜 Day5 – 朱美拉 souk、公共海灘" />
      <CreatedDate date={"2024-03-06"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785935/IMG_2097_wnpqbd.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="28 Nov 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785942/IMG_2098_zlt5c2.jpg`,
          }}
        />
        <Paragraph>
          今天是最後一天在杜拜，打算在朱美拉附近的景點走走，首站是杜拜的 Souk
          Madinat Jumeirah，是一個像古代集市的購物中心
        </Paragraph>
      </Section>

      {/* Souk Madinat Jumeirah */}
      <Section>
        <SubTitle title="Souk Madinat Jumeirah" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785947/IMG_2099_n9i6gb.jpg`,
          }}
        />
        <Paragraph>
          除了店家，商場內還有一些小攤販，賣駱駝奶冰淇淋
          <br />
          形形色色的地毯、袍子都好吸引我目光，香水店也是隨處可見
        </Paragraph>
      </Section>

      {/* Publique Dubai */}
      <Section>
        <SubTitle title="Publique Dubai" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785951/IMG_2943-scaled_ltiptz.jpg`,
          }}
        />
        <Paragraph>
          商場內找餐廳吃午餐，隨意比較幾間菜單（還是要稍微看一下吃完會不會錢包哭泣😂）
          <br />
          最後選定這間溫馨木屋氛圍的餐廳
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785933/IMG_2093_rgyphe.jpg`,
          }}
        />
        <Paragraph>
          我選了午間套餐的
          Fondue，非常期待！我們在杜拜沒有一直吃中東料理哈哈哈，反而很常吃歐式料理，但不管吃什麼，杜拜餐廳消費基本上
          破千/人 起跳
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785939/IMG_2100_bvjluw.jpg`,
          }}
        />
        <Paragraph>
          Souk Madinat Jumeirah
          這裡還有個非常好的視角可以拍帆船飯店（很明顯不是我站的這個地方ＸＤ也不執著一定要拍到
          <br />
          沒被房子擋住的視角可以拍到棕梠樹、小橋流水和帆船飯店
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785938/IMG_2091_qlacsp.jpg`,
          }}
        />
        <Paragraph>
          令人著迷的土耳其燈，每次看到這樣的店家都會像著了魔一定要走進去，除了燈以外還販售各式杜拜紀念品
          <br />
          我們買了幾罐茶要送朋友 (玫瑰紅茶、香料茶、薄荷茶)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785938/IMG_2105_sejsfq.jpg`,
          }}
        />
        <Paragraph>
          Abaya
          應該是在杜拜市集或百貨商場最常看到的販售商品了，也可以有很多顏色花樣、精美裝飾，或鑲金刺繡等等，不只凸顯個人品味更是身份地位
        </Paragraph>
      </Section>

      {/* Jumeirah Public Beach */}
      <Section>
        <SubTitle title="Jumeirah Public Beach" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785937/IMG_2116_glgqet.jpg`,
          }}
        />
        <Paragraph>
          逛完了商場，我們步行到朱美拉公共海灘，正好趕上夕陽時分
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785941/IMG_2132_l7kolg.jpg`,
          }}
        />
        <Paragraph>整片旗子廣場隨海風擺動</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785934/IMG_2134_r7dujj.jpg`,
          }}
        />
        <Paragraph>這個三角建築物真擋路😅 帆船都被擋了一半</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785943/IMG_2139_slglz8.jpg`,
          }}
        />
        <Paragraph>
          告別男友（他要回去參加公司活動，就是我自己的個人時間了 🤟🏻
          <br />
          我打算沿著這條濱海步道，繼續往北走，看地圖途中還會經過不少海灘
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785948/IMG_2945-scaled_rmf0ri.jpg`,
          }}
        />
        <Paragraph>
          原來 Arabian Tea House 是連鎖店，第一天在杜拜老城區也有看到
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785946/IMG_2141_njinu0.jpg`,
          }}
        />
        <Paragraph>
          往下一個 Kite Beach 前進，杜拜在地圖上看起來走路都很近，實際上很遠ＸＤ
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785952/IMG_2950-scaled_shlb1v.jpg`,
          }}
        />
        <Paragraph>
          海邊還有這些可愛的小餐車，小市集等等，規劃得很不錯，海邊步道上也遇到好幾隻杜拜貓
        </Paragraph>
      </Section>

      {/* German Döner Kebab */}
      <Section>
        <SubTitle title="German Döner Kebab" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751785944/IMG_2956-scaled_gaylhr.jpg`}
          text="從傍晚走到天黑，在地圖上找附近有沒有 kebab 之類的餐廳簡單吃一下，份量很大 我還吃不完外帶"
        />
      </Section>

      <Section>
        <Paragraph>
          吃飽後還天真的想說這樣邊走應該可以走回飯店吧，看看地圖雖然感覺是一個
          block 的距離，但估起來卻要一小時…
          因為杜拜如果要穿越大馬路，是需要多走一大段距離才有地方可以穿越的，而杜拜捷運站與站之間也很遠，下車可能離要去的目的地也很遠，於是我在路邊叫
          Uber 了，車程 10 分鐘就回到飯店
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoDubaiD5;
