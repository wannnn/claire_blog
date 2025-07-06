import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoKKDay6 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="沙巴亞庇最後市區巡禮(就都在吃東西) Day6 & Day7" />
      <CreatedDate date={"2023-03-18"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574645/IMG_0624-scaled_mtj76m.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date={"3 Jan 2023"} />
        <Paragraph>
          時間來到 KK
          的第六天，不知不覺我們也在這邊快一週了，還有很多口袋名單沒吃，今天在市區好好吃一下
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574642/IMG_0587-1024x683_lxbxxg.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="味雅海南雞飯" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574642/IMG_0585-1024x683_rpxm75.jpg`,
          }}
        />
        <Paragraph>
          外面一早下了小雨，今天已經是普通上班日，在 KK
          他們的假期已過，店內大約六成滿，時不時也有外送訂單進來（這邊習慣用
          Grab 叫）
          <br />
          我們點了叉燒、燒肉、海南雞、油菜，當然還要加飲料，薏米水養生又好喝 👍
          粒粒分明的飯吃進嘴裡香氣很足，肉類下面都還有鋪上洋蔥哦！解膩滿分，早餐這樣一口飯肉菜，很滿足！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574642/IMG_0588-1024x683_hv0ayh.jpg`,
          }}
        />
        <Paragraph>
          海南雞吃飽後我們要去商場逛逛買伴手禮，在路上觀察著 KK 的市容、建築
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574642/IMG_0590-1024x683_bbxurk.jpg`,
          }}
        />
        <Paragraph>這個美金香看起來很在地，只是我對肉乾真的還好</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574646/IMG_7538-1024x768_yi0npv.jpg`,
          }}
        />
        <Paragraph>覺得在這邊走天橋還是比較安全ＸＤＤ</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747574646/IMG_7535-768x1024_vwdbth.jpg`}
          text="其實我們也沒特別想買什麼，就想帶包咖啡回去而已，店員很專業非常熱心介紹，後來我們帶了咖啡豆，還有當地有名的丹南咖啡、沙巴紅茶"
        />
      </Section>

      <Section>
        <SubTitle title="Biru Biru" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574642/IMG_0591-1024x683_bfdk1d.jpg`,
          }}
        />
        <Paragraph>
          Biru Biru 和 我們第一天去的 Nook 咖啡就在同條街而已，Jec
          和我說這間年輕人很喜歡去，我們中午就來，只有我們一組客人
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747574646/IMG_7531-768x1024_a8htji.jpg`}
          text="因為海南雞還飽飽的，所以只點了一份鬆餅和拿鐵"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574643/IMG_0594-1024x683_fnq0zm.jpg`,
          }}
        />
        <Paragraph>
          來沙巴都還沒去按摩呢，今天總算有時間，我們找到了 Zenbo
          這間，剛好在大茄來附近，按完順便吃晚餐
          <br />
          我選擇兩小時含全身去角質，老闆人很好知道我們是台灣人還給我們折扣，他說很久沒看到台灣遊客了誒，對呀！疫情後現在大家都去日本韓國嘛😂
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="大茄來海鮮餐廳" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574643/IMG_0603-1024x683_lqfbda.jpg`,
          }}
        />
        <Paragraph>
          大茄來是網路上搜尋到最多人推薦的餐廳，雖然對當地人來說不是第一名（我覺得第一天的知味我比較喜歡！），但口味其實也不差，座位超級多！我覺得算是本地人和觀光客皆會來的一間餐廳，很符合他們餐廳的名字哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574643/IMG_0599-1024x683_cmf2ju.jpg`,
          }}
        />
        <Paragraph>
          海鮮也都會明確的標示價錢，店員也會介紹及給你份量上的建議
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574643/IMG_0598-1024x683_a6meud.jpg`,
          }}
        />
        <Paragraph>
          奶油老虎蝦是我最期待的也是最貴的一道，但老虎蝦真的沒有失望！超大又超甜超彈牙，炒奶油的話我覺得蠻特別的所以想試試看，也有別種料理方式！菜也有好幾種能選，在海鮮水缸旁邊也有展示蔬菜，唯獨炒飯最不
          OK，因為他們不是現炒已經先準備好了，所以來的時候是溫溫的
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747574643/IMG_0600-1024x683_xusnvm.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747574643/IMG_0601-1024x683_w4vhqp.jpg`,
            },
          ]}
        />
        <Paragraph>結帳的時候看到他們的出餐口，菜都看起來好好吃啊🤤</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Restoran Salim" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574643/IMG_0604-1024x683_ppw9t2.jpg`,
          }}
        />
        <Paragraph>
          晚餐結束後我們回到飯店，等等 Tommy
          我們沙比島的導遊要帶我們去喝茶，在沙巴期間他非常熱心關照我們即便他很忙，人也非常好有時間就要帶我們去吃東西，他說他們的喝茶是正常的哈哈哈，不是什麼奇怪的事
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747574644/IMG_0610-683x1024_y6vc2n.jpg`}
          text="到沙巴之後都還一直沒機會去吃印度料理，Tommy 帶我們（和他的小老弟😂）來一間印度餐廳，點了這間最有名的烤餅和拉茶"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574644/IMG_0615-1024x683_hs9ozu.jpg`,
          }}
        />
        <Paragraph>
          烤餅的麵香撲鼻，服務生端來的時候小心翼翼，放稍微涼之後更脆，從上面撕下來吃，烤餅微甜有些油膩，大家慢慢品嚐然後聊天，Tommy
          還說了我們前幾天去的島的鬼故事，還好我回來了
        </Paragraph>
      </Section>

      <Section>
        <MyDate date={"4 Jan 2023"} />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574644/IMG_0622-1024x683_nxtfkm.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="富源茶室" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747574646/IMG_7571-1024x768_y5und2.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747574646/IMG_7573-1024x768_jfijce.jpg`,
            },
          ]}
        />
        <Paragraph>
          本來以為富源就是簡簡單單只有吐司類，沒想到早餐選擇種類這麼多元！還有燒賣
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747574644/IMG_0618-1024x683_fujvph.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747574646/IMG_0619-1024x683_mrtcke.jpg`,
            },
          ]}
        />
        <Paragraph>
          我選了椰漿飯，包成三角狀很可愛，打開後裡面主要配著上面的辣小魚花生吃，真的好辣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574644/IMG_0621-1024x683_cbqjp4.jpg`,
          }}
        />
        <Paragraph>經典咖椰吐司 + Kopi O</Paragraph>
      </Section>

      <Section>
        <SubTitle title="丹絨亞路海灘" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574645/IMG_0628-1024x683_st4fen.jpg`,
          }}
        />
        <Paragraph>
          最後一天在沙巴了，本來是想說吃完早餐退房後再去市區吃馬來菜，後來卻臨時改變主意來丹絨亞路
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574645/IMG_0645-1024x683_jmv0ha.jpg`,
          }}
        />
        <Paragraph>最後還是希望旅程完美的句點由海邊畫下</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574645/IMG_0655-1024x683_vnrlqt.jpg`,
          }}
        />
        <Paragraph>所以又來吹海風了，再留戀一下這片海</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Lucy's Kitchen" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574646/IMG_7578-1024x768_hicohn.jpg`,
          }}
        />
        <Paragraph>
          平日中午的露西廚房很少客人，零星的上班族
          <br />
          我們點了斗雅蘭麵和冬蔭炒米粉還有甜點，份量超大！可以吃得超飽
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747574645/IMG_0658-1024x683_s7j0ha.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747574645/IMG_0663-1024x683_v5uyqz.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574646/IMG_0667-1024x683_rasfct.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="KK 對我來說" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747574645/IMG_0670-1024x683_zb7uvj.jpg`,
          }}
        />
        <Paragraph>
          轉眼七天的亞庇咻一下就過了，每天都玩得很充實，留下了好多珍貴回憶，對我來說在亞庇這座城市，美食文化非常豐富，景點動靜皆有，面山面海，無論想放鬆、探索自然還是了解當地的文化和歷史，水上活動等都可以在這裡找到適合自己的活動，更令人喜愛的是當地風土民情，熱情好客、文化多元，可以看到馬來、華人、印度人和原住民的文化融合
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747574647/IMG_7582-768x1024_kwnvcz.jpg`}
          text="回程時還能看到那幾座我們去過的小島"
        />
      </Section>
    </div>
  </div>
);

export default CiaoKKDay6;
