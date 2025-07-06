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
import Preface from "@root/components/typography/Preface";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoTextRow from "@root/components/typography/VideoTextRow";

const WfhChiangMai1 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="在清邁 WFH - week1" />
      <CreatedDate date={"2023-06-09"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575753/IMG_0785_i04bii.jpg`,
          }}
        />
      </Section>

      <Section>
        <Preface>
          遠端工作的自由就是可以挑選你想去的城市工作，而這次的清邁計畫就是想先試個水溫，看看這個模式適不適合我，畢竟在台北還有房租，也不能出走太久，所以就挑選了比較近，同時也很適合數位遊牧民族駐紮的城市
          – 清邁，展開一個月個生活
        </Preface>
      </Section>

      <Section>
        <SubTitle title={"16 May 2023"} />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575751/IMG_9194-768x1024_muqahe.jpg`}
          text="還好男友的主管允許他也可以遠端一陣子，我才不用孤單的出去，雖然如果真的只有我自己也是可以啦，趁著剛好他們五月也在泰國普吉島員工旅遊，結束後就直接清邁集合！真的好久沒有獨自出國了"
        />
      </Section>

      <Section>
        <SubTitle title={"17 May 2023"} />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575751/IMG_9201-768x1024_r9mqoy.jpg`}
          text="在清邁 WFH 的第一天，都是乖乖上班，午餐去吃我們家巷口對面的 The Salad Concept，菜單內多到好難選，也可以自己客製沙拉，smoothie 超超超好喝❤️ 健康又滿足的一餐，如果在清邁想要吃很多青菜就要來這裡"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575750/IMG_0782-1024x683_evil8d.jpg`,
          }}
        />
        <Paragraph>
          下午五點準時下班，因為慢台灣一個小時，所以一直有種偷到時間的錯覺，很喜歡下班了還這樣早早的，還有很足夠的時間在清邁探索
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575750/IMG_0786-1024x683_z62wys.jpg`,
          }}
        />
        <Paragraph>
          在清邁我們租了尼曼區的 Airbnb，對尼曼的熟悉大於古城區
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575750/IMG_0787-1024x683_juqhwg.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575755/IMG_9380-1024x768_xuupcj.jpg`,
          }}
        />
        <Paragraph>再亂晃前往 One Nimman 的路上經過了拉花冠軍咖啡</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575750/IMG_0789-1024x683_yivfbw.jpg`,
          }}
        />
        <Paragraph>
          路口的這間牛肉店我們之後有來吃！到時候再來寫一下心得，不過當初拍下這張照片是想紀錄，看看清邁路上這每一隻電線桿，錯綜復雜的電線纏得跟什麼一樣😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575751/IMG_0790-1024x683_tgpt70.jpg`,
          }}
        />
        <Paragraph>
          文青文青的尼曼區，有好多精緻的小店、裝潢新穎、獨樹一格，尼曼的街區是簡約樸實的，但兩旁卻藏有太多充滿驚喜的店家
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575751/IMG_0791-1024x683_p4vzlz.jpg`,
          }}
        />
        <Paragraph>
          晚餐的泰北菜在 Tong Tem Toh 餐廳！生意非常好，應該是網紅餐廳
          <br />
          五月中的天氣漸熱，晚上也沒有比較緩和，大多的餐廳不會有冷氣，就算有，戶外座位也還是最先客滿，Respect
          大家
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575754/IMG_9205-768x1024_c0norl.jpg`}
          text="經典的泰北開胃菜，香腸辣辣辣辣辣，醬我更是一口都沒吃，剛剛上面那些菜帶有紅色的都辣爆，忘記和他們說要小辣，超過小辣我就不行了🥵"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575750/IMG_9387-1024x576_ixd9tu.jpg`,
          }}
        />
        <Paragraph>這是汗如雨下前的一張自拍</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575759/IMG_9396-1024x768_lzkenk.jpg`,
          }}
        />
        <Paragraph>
          結束晚餐散步回家，賣水果的阿姨會說中文，不過這邊就算路邊攤也都會有中文菜單，原本以為都要靠
          Google 拍照翻譯來過這個月了，發現完全不需要
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575756/IMG_9392-768x1024_kntd3b.jpg`}
          text="多虧男友出來都會很愛幫我拍照，我才有照片可發 💯
          <br />
          不然我相機幾乎都是風景"
        />
      </Section>

      <Section>
        <SubTitle title={"18 May 2023"} />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575754/IMG_9223-768x1024_ljabgl.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575758/IMG_9402-768x1024_cmpucv.jpg`,
            },
          ]}
        />
        <Paragraph>
          上班日第二天！每天都要去尋覓不同的咖啡店，yesterday cafe
          離我們很近，環境也很舒適，有些座位有插座可以工作
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575757/IMG_9419-768x1024_rmsfks.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575755/IMG_9417-768x1024_egxgct.jpg`,
            },
          ]}
        />
        <Paragraph>
          要配合台灣的時間，我們都差不多11點多就去吃午餐，高怡海南雞也有米其林推薦，便宜好吃
          <br />
          我覺得在清邁一份餐點的份量對我來說非常剛好！不多不少
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575752/IMG_9236-1024x768_bmgb0u.jpg`,
          }}
        />
        <Paragraph>吃飽海南雞後在附近看到一間飲料店</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575755/IMG_9422-1024x768_xi6c6h.jpg`,
          }}
        />
        <Paragraph>
          買了一杯既不像泰奶也不太像珍奶的黑糖 Jelly
          奶茶，後來看地圖才知道原來這間是珍珠奶茶店，好險能調甜度
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575756/IMG_9430-768x1024_ns3lov.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575759/IMG_9438-768x1024_hbr39s.jpg`,
            },
          ]}
        />
        <Paragraph>
          下班的溜達時間！每天下班都忍不住又要讚嘆一下，下班啦！還好早！天還亮！
          <br />
          今天我們要往南的方向走，去松達寺，再順便看看附近有什麼，順路吃了個小點心，泰式…餅？雞蛋糕？真的忘了叫什麼哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575757/IMG_9437-1024x768_l2d9cw.jpg`,
          }}
        />
        <Paragraph>
          和這個小攤車的阿嬤買，有口味可以選，我選蔥，內餡口感是椰子麵糊的感覺，加上少許的蔥，很香！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575751/IMG_0811-1024x683_glc7n3.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575750/IMG_0793-1024x683_cjmldj.jpg`,
          }}
        />
        <Paragraph>這些白白一座一座的都是陵寢</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575752/IMG_0795-1024x683_fjdl6g.jpg`,
          }}
        />
        <Paragraph>後來我們也只外面拍拍照而已，沒有進去</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575752/IMG_0805-1024x683_c24o9j.jpg`,
          }}
        />
        <Paragraph>寺廟旁的一群小朋友在踢足球，好快樂</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575751/IMG_0809-1024x683_dljrrx.jpg`,
          }}
        />
        <Paragraph>清邁街上日常</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575760/IMG_9460-1024x768_an11on.jpg`,
          }}
        />
        <Paragraph>
          去松達寺的路上經過這個路邊攤，看起來都是當地人在吃，大家桌上那個陶鍋看起來超厲害的！所以我們決定晚餐就吃這個了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575759/IMG_9458-1024x768_cjusml.jpg`,
          }}
        />
        <Paragraph>一旁的燒烤，香氣逼人</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575758/IMG_9467-768x1024_ltkaqh.jpg`}
          text="Google Map 上有地標，就叫陶罐小火鍋
          <br />
          火鍋是泰式檸檬香茅，我們點了牛肉，包含牛肚，烤松阪豬，加點一份青菜，泰式青木瓜蝦子沙拉"
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747575783/IMG_9245_onti1h.mov`}
          text="陶罐小火鍋 CP值超高，我們兩個人才吃了兩百多塊
          <br />
          鍋真的很好吃，肉的話不用有太大期待，但是烤松阪豬超讚的！沙拉的蝦子是生的那種黑蝦子，魚露味，新鮮嗎我不覺得
          <br />
          在路邊吃的揮汗如雨，第一次吃到腳都在流汗，膝蓋後面關節流汗"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575753/IMG_0816-1024x683_zt8llf.jpg`,
          }}
        />
        <Paragraph>
          又晃回了這邊，think park 那邊的戶外空間總是非常熱鬧，旁邊餐廳也有駐唱
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575753/IMG_0817-1024x683_vgngqa.jpg`,
          }}
        />
        <Paragraph>
          來 MAYA 百貨逛逛，接近八九點
          百貨內有的店關了有的還營業，真的很奇特，不是應該要統一嗎哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575758/IMG_9480-1024x768_b6assh.jpg`,
          }}
        />
        <Paragraph>
          記錄一下每次都要等非常久的十字路口，因為每次都只有一邊可以通車
        </Paragraph>
      </Section>

      <Section>
        <Title title="🗺️ 吃吃喝喝" />
        <Paragraph>
          🍜：
          <br />
          The Salad Concept
          <br />
          Tong Tem Toh
          <br />
          高怡海南雞飯
          <br />
          陶罐小火鍋
          <br />
          ☕️：
          <br />
          yesterday cafe&apos;
          <br />
          Tea of Us
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default WfhChiangMai1;
