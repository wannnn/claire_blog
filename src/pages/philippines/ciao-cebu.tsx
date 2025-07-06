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

const CiaoCebu = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="宿霧市區 Cebu 一日遊，街上的感覺和我想的不一樣" />
      <CreatedDate date={"2023-10-31"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771498/IMG_1259_dfgynd.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="21 Oct 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771487/IMG_1020-scaled_ohibn5.jpg`,
          }}
        />
        <Paragraph>
          出發宿霧五天四夜，這次的行李有夠少，手提搞定
          <br />
          第一次搭星宇航空，必須給燒肉胡同一個版面，好好吃！
        </Paragraph>
      </Section>

      {/* Colon St */}
      <Section>
        <SubTitle title="Colon St" />
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751771511/IMG_1027_nljhhm.mov`}
          text="抵達宿霧機場出境後，我們叫了車但卻像迷途羔羊一樣找不上車地點，馬上就有菲律賓人主動幫忙，我也不曉得為什麼司機是停在 T1 那邊，總之從 T2 走到 T1 也不遠，大概10分鐘
          <br /><br />抵達飯店寄放行李後，我們就外出晃晃了，因為我們住在科隆老街附近，距離主要景點不遠，步行很方便，街上的小攤販跟店家很多，人潮熙來攘往"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771488/IMG_1028-scaled_zoy1dv.jpg`,
          }}
        />
        <Paragraph>
          賣吃的看起來.. 很難提起食慾，必須說
          市容看起來有些髒亂，烏煙瘴氣，騎樓也隨處可見流浪漢
          <br />
          甚至還看到裸男在街上跑…
          肖誒在街角亂叫，說真的很危險嗎？當一切亂糟糟時自然會覺得安全感沒那麼高，保持警惕、低調即可
        </Paragraph>
      </Section>

      {/* Basilica de Santo Niño */}
      <Section>
        <SubTitle title="Basilica de Santo Niño 聖嬰大教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771494/IMG_1245_gopz6k.jpg`,
          }}
        />
        <Paragraph>
          世界文化遺產的教堂，菲律賓最古老的羅馬天主教堂，巴洛克式建築
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771495/IMG_1246_gpczea.jpg`,
          }}
        />
        <Paragraph>剛好遇到大家在做禮拜，教堂內滿滿的信徒在唱聖歌</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771496/IMG_1247_s8ghbu.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771494/IMG_1242_tqxdxt.jpg`,
          }}
        />
        <Paragraph>看到熟悉的西文字，不枉費我學西文了哈哈哈</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771495/IMG_1244_by68ro.jpg`,
          }}
        />
        <Paragraph>
          宿霧聖嬰大教堂內的小花園和水池，直接在這和兩個學生聊起來ＸＤ
          因為他們和我用中文打招呼
        </Paragraph>
      </Section>

      {/* Magellan's Cross */}
      <Section>
        <SubTitle title="Magellan's Cross 麥哲倫十字架" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771497/IMG_1252_rhnzgu.jpg`,
          }}
        />
        <Paragraph>
          這裡是我很期待的一個景點，因為他的歷史故事，當麥哲倫抵達宿霧後和當地部落土著衝突被殺了，這個木十字架，就是當時所留下的，象徵著西方的天主教就此傳入
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771496/IMG_1251_zszqbe.jpg`,
          }}
        />
        <Paragraph>
          在麥哲倫十字架這個小小的亭子裡，也有人買彩色蠟燭，會有專人進行祈福儀式
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771489/IMG_1036-scaled_hqx7tw.jpg`,
          }}
        />
        <Paragraph>
          逛完麥哲倫十字架後，天色看起來不太妙，於是我們先返回飯店 Check-in
          <br />
          在宿霧街頭，有時候紅綠燈好像裝飾用的，很多人看沒車就過了，這裡的電線也像在清邁一樣一大陀外露
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751771488/IMG_1044_bydtfu.jpg`}
          text="果然下起了午後雷陣雨，我們趁著一陣一陣的雨邊跑回飯店，順便去飯店旁伊莉莎白Mall 外面買咖啡<br />店員都很可愛拍照很配合ＸＤ"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771484/32777984_Unknown_ipmcm6.jpg`,
          }}
        />
        <Paragraph>回飯店 Check-in 順便休息一下躲雨</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771485/32778112_Unknown_jeo7lp.jpg`,
          }}
        />
        <Paragraph>
          雨很快就停了，太陽又露臉，我們又回到伊莉莎白Mall去逛超市，看看這裡都賣什麼
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751771512/07ffedbee2b948faa0bfa30964176d59_ztbuvc.mp4`}
          text="慌亂之中跳上一台 Jeepney 不知道怎麼付錢，也還沒和司機說我們要去哪，幸好當地乘客都很願意幫忙我們，讓我們順利抵達聖佩德羅堡<br /><br />Jeepney 沿路穿越了好幾個熱鬧街區，最當地人的交通方式，很新奇有趣，和我們一同在聖佩德羅堡下車的女孩，也很好心的提醒我們要顧好包包，讓我感到充滿善意"
        />
      </Section>

      {/* Fuerza de San Pedro */}
      <Section>
        <SubTitle title="Fuerza de San Pedro 聖佩德羅堡" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771486/32779776_Unknown_dbja5k.jpg`,
          }}
        />
        <Paragraph>
          西班牙侵略菲律賓後建造的聖佩德羅堡，是菲律賓古老城堡之一，進入門票 30
          披索
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751771485/32778704_Unknown-rotated_crcekx.jpg`}
          text="路人都超會拍的耶！"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771485/32778816_Unknown_tz2ldm.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771486/32779168_Unknown_jgxkcj.jpg`,
          }}
        />
        <Paragraph>
          整個堡壘的範圍不會太大，傍晚時分來逛也很剛好，從落日到晚上還會看到聖佩德羅堡打上燈光
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771498/IMG_1271_hnsaqf.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771485/32779520_Unknown_f7nqz2.jpg`,
          }}
        />
        <Paragraph>我和老寶一致最愛的宿霧市區景點就是聖佩德羅堡～～</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771490/IMG_1057-scaled_h7nkmr.jpg`,
          }}
        />
        <Paragraph>越來越美了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771499/IMG_1272_peym89.jpg`,
          }}
        />
        <Paragraph>
          對面的獨立廣場 Plaza Independencia 很有活力，許多學生在廣場上練 k-pop
          的舞，不少人在此散步、運動，充滿生氣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771499/IMG_1279_ao3znn.jpg`,
          }}
        />
        <Paragraph>
          天色暗下來後，我們走去附近的 Jollibee
          吃晚餐，在餐廳外被一群孩子們纏上，要錢
          要吃，說他們肚子餓，我回答去找你們的爸爸媽媽呀，邊擺脫他們，自己是第一次遇到這種狀況，也不曉得我是不是該幫他們，有點震驚和同情，更意識到身處台灣的幸福。
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751771490/IMG_1066-scaled_rkhxxr.jpg`}
          text="因為來宿霧前得了唇炎還沒好，無法吃太油就沒吃炸雞了，點了一個義大利麵和 Peach Mango Pie，派還可 麵很普，沒事還是別吃 Jollibee"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771492/IMG_1070-1-scaled_lkfrka.jpg`,
          }}
        />
        <Paragraph>
          Jollibee 吃飽後，我們接著要去 Carbon Night Market，我在 Google Map
          上看到的
          <br />
          在走過去的路途到了他們的海景第一排ＸＤ
          許多情侶或家庭晚上在這裡看夜景，眺望 CCLEX
          這座橋，連接著宿霧和拉普拉普市
        </Paragraph>
      </Section>

      {/* Carbon Night Market */}
      <Section>
        <SubTitle title="Carbon Night Market" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771492/IMG_1076-scaled_id0tih.jpg`,
          }}
        />
        <Paragraph>好不容易到了夜市 卻不是我以為的夜市</Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751771517/IMG_1075_k2rn8c.mov`}
          text="原來是晚上的果菜市場，人超級多，非常熱鬧<br />雖然說是誤入，但很有趣，這裡幾乎沒有觀光客，只有辛勤工作的攤販和各式各樣的蔬果"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771493/IMG_1077-scaled_nz3pka.jpg`,
          }}
        />
        <Paragraph>
          這太好笑了，朋友一臉恐懼的想快離開亂糟糟的市場，對比兩位小哥比YA拍照😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771491/IMG_1083-scaled_pqesvy.jpg`,
          }}
        />
        <Paragraph>
          好不容易穿越市場後連接大馬路，隨手亂拍記錄一下宿霧街頭攤販
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771494/IMG_1084-scaled_dqaubg.jpg`,
          }}
        />
        <Paragraph>
          夜晚依舊非常熱鬧，可能是星期六吧，我們也在回程路上隨意逛了幾間商場，會注意到這裡很多店家門口都會有
          security guide
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751771486/32779952_Unknown_u1izkw.jpg`,
          }}
        />
        <Paragraph>
          Night night Cebu 🇵🇭
          <br />
          明天準備搭船前往薄荷島 🚢
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoCebu;
