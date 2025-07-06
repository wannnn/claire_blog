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
import VideoTextRow from "@root/components/typography/VideoTextRow";
import MyDate from "@root/components/typography/MyDate";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const WfhChiangMai3 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="在清邁 WFH – Weekend1 – Jing Jia Market、瓦洛洛市場、城市柱慶典、拉花冠軍咖啡" />
      <CreatedDate date={"2023-07-29"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575971/IMG_9589-scaled_qksetr.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date={"20 May 2023"} />
        <SubTitle title="Jing Jai Market 真心市集" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575951/IMG_0856-1024x683_dzhlrl.jpg`,
          }}
        />
        <Paragraph>
          Jing Jai Market 真心市集在禮拜六日 6:00 – 13:00
          營業，是清邁當地的文創農夫市集
          <br />
          我們在早上九點到，逛到十一點就差不多了 超級熱
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575951/IMG_0858-1024x683_egauod.jpg`,
          }}
        />
        <Paragraph>
          市集內的衣服、包包和飾品是真的都好好看，葉子拓印的上衣和洋裝，還有各種充滿度假風情的編織包
          <br />
          但我發現更多的是
          許多攤位都有人手機架著在直播帶貨，逛的時候還要特意繞過他們的鏡頭
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575952/IMG_0867-1024x683_aaxbbg.jpg`,
          }}
        />
        <Paragraph>
          只不過販售的價格真的很不便宜！（也可能剛好是我中意的都很貴😅）
          <br />
          最後只買了馬克杯、零錢包、沐浴球等小東西當紀念，喔對了我們買最多的就是水ＸＤＤ
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575953/IMG_0860-1024x683_wl0o8m.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575951/IMG_0861-1024x683_zargvw.jpg`,
            },
          ]}
        />
        <Paragraph>
          真心市集除了文創商品當然也是少不了吃的，看到這些小吃簡直讓人口水直流，後來我有跟右邊的阿嬤買煎蛋飯
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747575991/IMG_9327_lwcml9.mov`}
          text="市集內熱鬧的部分，我們買了杯菊花茶消消暑，冰塊滿杯很爽"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575970/IMG_9573-1024x768_ccrrtf.jpg`,
          }}
        />
        <Paragraph>
          這些泰式小點心賣像看起來很美味可口，但當時在場有很多蒼蠅在上方飛，我就想說算了
        </Paragraph>
      </Section>

      <Section>
        <Paragraph>
          逛完 Jing Jia Market
          後我們打算去瓦洛洛溜噠，本來想說不然搭個嘟嘟車好了，沒想到居然不給殺價，反正他也直接擺明不做你生意了，還是叫
          Grab 便宜價格透明又有冷氣吹
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Warorot Market 瓦洛洛市場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575957/IMG_0871-1024x683_cdm28u.jpg`,
          }}
        />
        <Paragraph>
          瓦洛洛市場有三層樓，一樓有豐富的伴手禮、果乾、農產品、零食等等…
          其實很多攤都大同小異，二三樓偏向日常生活用品、布匹雜貨以及泰服
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575958/IMG_0868-1024x683_uckn6t.jpg`,
          }}
        />
        <Paragraph>
          我們後來買了羊奶片 (男友阿姨指定！！)、椰子糖
          (按摩完的小點心吃了覺得還不錯)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575952/IMG_0870-1024x683_kflszc.jpg`,
          }}
        />
        <Paragraph>
          市場地下一樓有美食街，問了阿姨點了一碗相對不辣的，還是吃的鼻涕直流，但是好吃！！簡單的美味那種，一碗才30泰銖
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575953/IMG_0877-1024x683_rniq6t.jpg`,
          }}
        />
        <Paragraph>
          瓦洛洛市場的西出口，沒想到這裡有武廟，進去要脫鞋子
          (我根本漏看到告示，真拍謝)
          <br />
          和廟旁的爺爺買泰奶，推腳踏車的攤位未喝就先給100分，後來事實證明真的是好喝的啦！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575954/IMG_0880-1024x683_uggyce.jpg`,
          }}
        />
        <Paragraph>
          買完泰奶我們走去附近一間竹編店 Maha-Saan l
          มหา-สาน，貼心的男友找的，知道我一直很想買這種竹編包，買了一個在他心目中=小廢包的零錢斜背包哈哈哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Wyenumpueng Changmoi Furniture" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575959/IMG_0885-1024x683_thxzsb.jpg`,
          }}
        />
        <Paragraph>
          在搭車去瓦洛洛的路上我看到這間店，眼睛為之一亮，就想說逛完瓦洛洛一定要來
          <br />
          真的便宜又好買！！！！闆娘奶奶也很可愛，說我拿的那個包包很適合去參加趴踢啦～
          結果後來又再多買了兩咖包，太滿足
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Brewginning coffe" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575954/IMG_0886-1024x683_ipsdxn.jpg`,
          }}
        />
        <Paragraph>
          竹編包對面轉角的咖啡店，看起來小巧可愛
          雖然我當時沒有進去喝一杯咖啡，對街又是另一間蠻多人的咖啡店 millilit
          cafe
          我都叫他兔兔咖啡，也在我的名單之內，由於晚上要去參加清邁一年一度的盛大慶典在柴迪隆寺，所以我們先回家放戰利品
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575967/IMG_9330-768x1024_pejltv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575964/IMG_9615-768x1024_ipaebi.jpg`,
            },
          ]}
        />
        <Paragraph>
          這次的慶典活動是我們 Airbnb 房東邀請我們參加的，我們會先在一間 Art
          Gallery 集合製作花束
          <br />
          在等待的同時路邊有一個泰北烤腸小攤，一吃驚為天人我愛上！！裡面有包有細小的冬粉，還會附上生高麗菜
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575966/IMG_9616-768x1024_swvrvu.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575963/IMG_9619-768x1024_cppgev.jpg`,
            },
          ]}
        />
        <Paragraph>
          花束外面也是可以買到，不過自己手做誠意滿滿，而且又充滿樂趣
          <br />
          先把香蕉葉捲成冰淇淋甜筒的樣子，用釘書機釘起來，再將花束放入，插上兩支香及一根蠟燭就完成了🎉
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747576001/IMG_9335_wccixr.mov`}
          text="清邁的城市柱祭祀，活動為期約6-8天，非常多的清邁人聚集在這邊祭拜、祈福、獻花，是清邁相當重要的活動"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575950/531dd47d-15a1-48da-a4e9-bb88c7d0757e-1024x768_bjgu3v.jpg`,
          }}
        />
        <Paragraph>人潮擠得水泄不通，我跟著眾人的步伐將花束一一獻上</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575956/IMG_0887-1024x683_kb2q8m.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575955/IMG_0891-1024x683_oltyvo.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575960/IMG_0892-1024x683_ek1jsq.jpg`,
          }}
        />
        <Paragraph>
          柴迪隆寺入口進去後的左手邊供奉著因它印柱，是清邁的城市柱，代表整座城市的興旺和穩定繁榮，不過殿內是禁止女生進入的
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747575997/IMG_9341_hbbvrg.mov`}
          text="這個很有趣，大家會協力把裝在容器裡的水慢慢往上拉，然後倒在最上面，應該也算是祈福的一種吧，感覺不容易成功"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575957/IMG_0907-1024x683_qyokaz.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575962/IMG_9653-768x1024_mydobi.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575969/IMG_9643-768x1024_ieuta3.jpg`,
            },
          ]}
        />
        <Paragraph>
          祈福的尾聲～柴迪隆寺依舊熱鬧非凡，真的有幸可以參與到清邁的大盛事開開眼界
          <br />
          肚子已餓得我們要往南去清邁門那邊逛夜市了
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Wua Lai Walking Street" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575969/IMG_9657-768x1024_k3lp5k.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575965/IMG_9344-768x1024_jbqjf4.jpg`,
            },
          ]}
        />
        <Paragraph>
          清邁週六夜市，位於瓦萊路步行街
          <br />
          我點了一碗雞肉粥外加炸餛飩皮，今日吃了兩次炸餛飩皮，早上在 Jing Jia
          Market 路邊攤買，晚上誤點到哈哈哈，以為真的是皮包肉結果來的是皮
          <br />
          我是一個超超超愛喝果汁的人，但千萬要記得請店家不要加糖，沒喝完我就丟了，會很崩潰，因為他不是微糖是全糖😭
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575967/IMG_9664-768x1024_dlv0wi.jpg`}
          text="清邁的夜市真的都太大啦！逛都逛不完，一區攤位比上一區多，我逛到體力不支到素攀寺那邊就叫
          Grab 回去了，逛清邁夜市請儲備好體力💪"
        />
      </Section>

      <Section>
        <MyDate date="21 May 2023" />
        <SubTitle title="Kao Soy Nimman" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575970/IMG_9552-1024x768_s5olk1.jpg`,
          }}
        />
        <Paragraph>
          隔天美好的週日沒有特別計畫，懶洋洋地睡起來
          就來吃據說鄧麗君生前的愛店，也是米其林必比登推薦店家
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747575976/35cc245454324a38b5a827eaaaa109e7_zt2ise.mp4`}
          text="極度怕熱又很會流汗的我 還是坐室內位置比較舒服
          <br />
          我們點了兩碗不同口味的 Kao Soy，海鮮的和燉豬肉，炒個菜和兩杯飲料"
        />
      </Section>

      <Section>
        <SubTitle title="Roast8ry Lab" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747575962/IMG_9556-768x1024_fjqpnm.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747575968/IMG_9680-768x1024_opuknr.jpg`,
            },
          ]}
        />
        <Paragraph>
          吃飽飯我們來造訪清邁很熱門的的 Roast8ry Lab，老闆曾拿下世界拉花冠軍
          <br />
          店內走輕工業風，座位也不算太多，如果能耐熱的話戶外座位也是一個選擇
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747575950/7ED84539-2FEC-4100-93E5-8943F701143E-652x1024_jqa76o.jpg`}
          text="厲害爆的拉花鉅作
          <br />
          尤其是獨角獸拉花實在是太美了🦄️"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575959/IMG_0917-1024x683_ms6afm.jpg`,
          }}
        />
        <Paragraph>
          喝完咖啡之後也沒有什麼計畫，在尼曼的巷弄間隨意的左彎右拐
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575961/IMG_0918-1024x683_bm6qid.jpg`,
          }}
        />
        <Paragraph>
          路上到處拍拍，有店就進去逛，接著就回家休息等晚餐時間
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575965/IMG_0919-1024x683_wbarab.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575961/IMG_9561-1024x768_ih709c.jpg`,
          }}
        />
        <Paragraph>
          晚餐純粹只是不想再吃泰式了，所以路過一間拉麵店就給他一次機會，我連地標都沒存所以就是還好哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Guu Fusion Roti & Tea" />
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747575991/IMG_9562_alc9wf.mov`}
          text="每次吃完晚餐總是覺得 還要再來份甜的收尾才是完美
          <br />
          香蕉煎餅我們來清邁後都還沒嚐過，於是就來外帶回去吃吃看，這間除了 Roti 之外也還有其他正餐
          <br />
          看他餅皮現場在邊甩，ㄆㄧㄚ 好療癒"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747575956/IMG_9564-1024x768_qr5kij.jpg`,
          }}
        />
        <Paragraph>
          選了一甜一鹹的口味，蒜味起司和香蕉蜂蜜，當然是香蕉蜂蜜完勝！不過吃完盒子底部超油，心想我剛到底吃了多少油
          😂
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default WfhChiangMai3;
