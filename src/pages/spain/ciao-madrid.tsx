import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoMadrid = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="I ❤️ Madrid - 馬德里" />
      <CreatedDate date={"2021-04-19"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763172/IMG_6634-scaled_pgij4r.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 28 2018 - June 29 2018"} />

      <Section>
        <Preface>
          經過一個晚上的夜車，下車迎來的是刺眼陽光，我還帶著睡意和一點脾氣
          <br />
          搭著地鐵到太陽門廣場，我們的 hostel
          在這附近，去洗個澡小睡一下，再出發冒險
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763170/IMG_6619-1024x683_tba7ke.jpg`,
          }}
        />
        <Paragraph>
          馬德里主廣場是過去的市政中心，西班牙首都最重要的廣場、主要集會舉辦場所，曾經舉辦鬥牛、宗教法庭審判、死刑等
          <br />
          廣場正中央是菲利普三世的騎馬雕像
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763170/IMG_6630-1024x683_wlvmbh.jpg`,
          }}
        />
        <Paragraph>主廣場周圍有很多出入口，出這個門可以到太陽門廣場</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763173/IMG_6637-1024x683_qqyyaw.jpg`,
          }}
        />
        <Paragraph>
          這些房屋的顏色好俏皮，小睡之後我們出門先在太陽門廣場附近繞繞，熟悉一下馬德里市區
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763172/IMG_6636-1024x683_lsjda3.jpg`,
          }}
        />
        <Paragraph>馬德里街道的氛圍，享受穿梭的感覺</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763203/IMG_8444_cwgjdp.jpg`,
          }}
        />
        <Paragraph>
          在國外看到珍奶店都覺得很新奇，但之前在羅馬喝過一次被雷到，此生最難喝珍奶在羅馬成就達成
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Royal Palace of Madrid 馬德里皇宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763176/IMG_6646-1024x683_f2qkic.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763183/IMG_6727-1024x683_hugjua.jpg`,
          }}
        />
        <Paragraph>
          馬德里皇宮是歐洲第三大皇宮，結合了新古典主義和洛可可風格，是西班牙皇室鼎盛時期的代表性建築，目前僅作為接待外賓和舉辦典禮使用
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Catedral de la Almudena 阿穆德納聖母主教座堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763177/IMG_6655-1024x683_ozts0d.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763174/IMG_6641-1024x683_c9ysa7.jpg`,
          }}
        />
        <Paragraph>主教座堂和馬德里皇宮對望，兩個地標一次搜集</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763178/IMG_6695-1024x683_hionlx.jpg`,
          }}
        />
        <Paragraph>迴廊很好拍照，也很好休息，也很涼</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763184/IMG_6732-1024x683_c4s5gc.jpg`,
          }}
        />
        <Paragraph>
          中庭廣場很寬大，整個皇宮佔地非常廣，往前走能俯瞰馬德里所在的高原
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763182/IMG_6713-1024x683_fimnb9.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763180/IMG_6708-1024x683_fgfqzr.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763182/IMG_6714-1024x683_odnnct.jpg`,
          }}
        />
        <Paragraph>
          皇宮裡上千的廳堂，部分開放參觀，各廳室裝潢華麗，擺滿古董及藝術品，充分展現當時的強大國力，印象最深刻參觀到一個超氣派的餐廳，非常浮誇，不過皇宮裡禁止拍照，所以只能記在腦海
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763186/IMG_6736-1024x683_dvjzpy.jpg`,
          }}
        />
        <Paragraph>
          馬德里的建築都方方正正的，很有規矩，卻在顏色上大膽活潑，顯得很耳目一新
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745763188/IMG_6738-scaled_qcz71h.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745763188/IMG_6743-scaled_c9ipda.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745763190/IMG_6751-scaled_bfxqgh.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745763192/IMG_6752-scaled_uuu11j.jpg`,
            },
          ]}
        />
        <Paragraph>Almudena 教堂的內部，教堂頂部很特別</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Plaza de Oriente 東方廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763192/IMG_6753-1024x683_trmtm2.jpg`,
          }}
        />
        <Paragraph>歐洲真的是廣場最多，中間是菲利普四世的騎馬雕像</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Jardines de Sabatini 摩爾人花園" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763194/IMG_6762-1024x683_ndzjxq.jpg`,
          }}
        />
        <Paragraph>
          在噴水池旁稍微小憩一下，還在這裡遇到硬要推銷的怪人
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Museo National del Prado 普拉多美術館" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763200/IMG_6797-1024x683_jir3ce.jpg`,
          }}
        />
        <Paragraph>
          西班牙最大的美術館，剛好趕在每天閉館前兩個小時來，可以免費參觀
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763195/IMG_6772-1024x683_cgccjk.jpg`,
          }}
        />
        <Paragraph>
          街道上亂走亂晃，西班牙人很愛自己的國家，國旗幾乎在每戶人家處處飄揚
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="San Jerónimo el Real 聖熱羅尼莫堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763199/IMG_6795-1024x683_xux9v3.jpg`,
          }}
        />
        <Paragraph>很漂亮的羅馬天主教堂，就在普拉多博物館的旁邊</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763196/IMG_6778-1024x683_po6m0k.jpg`,
          }}
        />
        <Paragraph>不管在世界哪裡的地鐵風景都差不多，低頭族的人們</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Banco de España 西班牙銀行" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763205/IMG_8485-1024x576_p21fp2.jpg`,
          }}
        />
        <Paragraph>
          西班牙銀行靠近西貝雷斯廣場，這裡很常被當電影題材，全世界最難搶的銀行，親眼看更覺得有趣
          <br />
          我在這蒐集到第二場同志遊行，第一場在羅馬
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Palacio de Cibeles 西貝萊斯廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763197/IMG_6782-1024x683_h24fzz.jpg`,
          }}
        />
        <Paragraph>馬德里地標之一</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Puerta de Alcalà 阿爾卡拉門" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763206/IMG_8480_fluvzu.jpg`,
          }}
        />
        <Paragraph>馬德里的舊城門，矗立在路中間，旁邊是麗池公園</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745763201/IMG_8439_ijpgf9.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745763207/IMG_8502_kkspjp.jpg`,
            },
          ]}
        />
        <Paragraph>
          記錄一下在馬德里簡陋的飲食😳 還有晚上在西班牙廣場上的啤酒談心
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Puerta del Sol 太陽門廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745763209/IMG_9012_ewmabr.jpg`,
          }}
        />
        <Paragraph>
          有一點吵雜，有一點髒亂，方方正正的太陽門廣場，這裡是我在馬德里最常經過的地方，都深夜兩點了卻還聚集著一堆人，這些是都不用睡覺嗎？肚子餓的我們買了麥當勞坐在廣場吃，也和大家一樣一起在廣場熬夜
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="馬德里對我來說..." />
        <Paragraph>
          規劃的整齊方正的馬德里，有規矩的城市，逛起來很舒服，雖然對我來說沒有太致命的吸引力，花上一天半的時間來走跳一下還是很可以
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoMadrid;
