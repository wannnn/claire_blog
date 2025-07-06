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

const CiaoNizwaD2 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿曼 – [尼日瓦] 走訪堡壘之國的世界遺產！賈布林堡、巴赫萊要塞" />
      <CreatedDate date={"2024-05-16"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790000/IMG_2796_vvgr0m.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="2 Dec 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789975/IMG_2659_wj6kuc.jpg`,
          }}
        />
        <Paragraph>
          來到尼日瓦，大家絕對不會錯過這兩大景點：Jabreen
          Castle（賈布林堡）、Bahla Fort（巴赫萊要塞）
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789974/IMG_2653_x4tumv.jpg`,
          }}
        />
        <Paragraph>
          我們從飯店出發，先開車前往參觀賈布林堡，大約是半小時的路程
        </Paragraph>
      </Section>

      {/* Jabreen Castle */}
      <Section>
        <SubTitle title="Jabreen Castle 賈布林堡" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789979/IMG_2660_cyblky.jpg`,
          }}
        />
        <Paragraph>
          賈布林堡是一座美麗的 17 世紀堡壘，參觀門票 3 OMR，有語音導覽可以租借
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789982/IMG_2668_vx1rrh.jpg`,
          }}
        />
        <Paragraph>
          17 世紀賈布林堡創始人伊瑪目 Bil&apos;arab-bin Sultan al-Yarubi
          被葬在這裡，他幫助阿曼擴張到莫三比克海岸，透過奴隸貿易為國家創造財富。他擊敗了葡萄牙人，甚至襲擊了印度，並擴大了貿易和教育。
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789984/IMG_2675_cvxst5.jpg`,
          }}
        />
        <Paragraph>
          在阿曼參觀各種不同的堡壘都像是進入迷宮一樣，而我們也很享受迷失在裡面的樂趣
          <br />
          四通八達的賈布林堡內部，試圖將他的平面圖在腦海中湊出來，又被打亂，拐個彎又是另一處機關、另一片風景
          <br />
          見識到了賈布林堡的防禦工事，暗藏玄機
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789980/IMG_2683_lasroy.jpg`,
          }}
        />
        <Paragraph>
          賈布林堡頂端的鋸齒狀我一直覺得很可愛，我在尼日瓦市集看到許多販賣的小
          fort，頂端的鋸齒也是做工精細的和真實堡壘一樣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789977/IMG_2692-1_eero0y.jpg`,
          }}
        />
        <Paragraph>
          周圍一片綠洲的景色值得在這邊待一下，畢竟和我們居住的環境差別很大，非常不一樣的感覺
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789992/IMG_2696-1_gmkowr.jpg`,
          }}
        />
        <Paragraph>⛰️✌🏻</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751790036/IMG_3127-scaled_zqmzce.jpg`}
          text="喜歡從這扇木窗看出去一片綠洲<br />有圓圓的堡壘、棕梠樹，後面則是一望無際的荒漠，植被稀少，更遠方是連綿山脈<br />想不到更好的形容詞，就是非常中東！😂"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751789986/IMG_2716_hlzdu5.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751790002/IMG_2719_aipi5a.jpg` },
          ]}
        />
        <Paragraph>
          賈布林堡房間內部的古老阿曼裝飾及地毯，非常精美
          <br />
          遊客真的不多，旅遊團也只遇到一兩組，逛起來極其舒適
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789989/IMG_2728_sbnnvs.jpg`,
          }}
        />
        <Paragraph>從上而下俯瞰的樣子</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789990/IMG_2736_p6iv9g.jpg`,
          }}
        />
        <Paragraph>
          這裡可以說是我最喜歡的賈布林堡小角落了，阿曼式的風格一眼就能認出
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789994/IMG_2747_trx9ci.jpg`,
          }}
        />
        <Paragraph>
          老爺爺現場做陶藝，尼日瓦就是一個充滿手工陶藝術品的城市
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751790047/IMG_3565-scaled_ko2yph.jpg`}
          text="在阿曼的好天氣也是需要天天防曬，否則中東的太陽一不小心就會把人烤焦<br />賈布林堡保存的完整且非常值得參觀，在觀賞各個房間時也別忘了抬頭看看天花板繽紛的畫<br />和巴赫萊要塞比起來，賈布林堡內部裝飾是更為華麗的"
        />
      </Section>

      {/* Bahla Fort */}
      <Section>
        <SubTitle title="Bahla Fort 巴赫萊要塞" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790032/IMG_2801_qrpbes.jpg`,
          }}
        />
        <Paragraph>
          結束了賈布林堡，約開車 15
          分鐘便可以參觀阿曼第一個聯合國教科文組織世界遺產 – 巴赫萊要塞，門票 4
          OMR
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789996/IMG_2753_tyxbs5.jpg`,
          }}
        />
        <Paragraph>
          巴赫萊要塞，也有人說巴赫拉堡，各種翻譯
          <br />
          是西元12世紀到15世紀時部落防禦用的堡壘，規模龐大，也意味著部落當時的強大
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790005/IMG_2760_qz2wjs.jpg`,
          }}
        />
        <Paragraph>
          由於巴赫萊要塞的房間沒有任何裝飾和家具，無法窺探當時生活是什麼樣
          <br />
          沒有導遊狀態下，也難以全面理解建築結構及歷史，這是可惜的地方
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751790049/IMG_3153-scaled_yzrfx2.jpg`}
          text="還好男友都記得幫我拍照<br />我就一直在那拍景，都忘了拍人😂"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790007/IMG_2769_xcrmaz.jpg`,
          }}
        />
        <Paragraph>這片景色實在太震撼了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790008/IMG_2771_a1jchw.jpg`,
          }}
        />
        <Paragraph>站在巴赫萊要塞上方看遠處的車來來去去</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789999/IMG_2784_d2iz2k.jpg`,
          }}
        />
        <Paragraph>巴赫萊是阿曼最古老、最大的堡壘之一</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751790010/IMG_2775_gryd3j.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751790012/IMG_2791_wjhwij.jpg` },
          ]}
        />
        <Paragraph>
          持續漫步泥磚堡壘，我必須老實說逛到最後好像有一點堡壘疲勞😥
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790024/IMG_2789_rgzvjf.jpg`,
          }}
        />
        <Paragraph>
          巴赫萊要塞相較之下比較脆弱，城牆較為斑駁，少數階梯路線看起來也有點毀壞
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790029/IMG_2799_ul0pur.jpg`,
          }}
        />
        <Paragraph>發現了這可愛的小空間</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790030/IMG_2800_oegebs.jpg`,
          }}
        />
        <Paragraph>販賣一些手工藝品</Paragraph>
      </Section>

      {/* A' Sidrah Restaurant */}
      <Section>
        <SubTitle title="A' Sidrah Restaurant" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751790044/IMG_3186-scaled_e3qudt.jpg`}
          text="當時我們計畫結束參觀巴赫萊要塞後，要到附近的 Bahla Historical Souq 覓食，結果整個 Souq 卻沒什麼店家在營業，我們沒有找到什麼餐廳，於是回到大馬路在地圖上找了這間 A' Sidrah Restaurant，只有零星國外遊客有女生，其餘內用的當地人全是男生哈哈哈<br />身上阿曼現金換不夠，本來想說能刷卡，但是店家刷卡機壞掉，還好先前在杜拜的迪拉姆還沒用完，店家允許我們用迪拉姆付款救了我們"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790041/IMG_2803_evoxgn.jpg`,
          }}
        />
        <Paragraph>
          尼日瓦雙堡巡禮結束回到我們的住宿，當時就是在 booking
          上看到這張封面照超喜歡，花朵盛開的環境，又可以住在真正的古建築裡，毫不猶豫的訂下去
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790034/IMG_2808_qoo8nc.jpg`,
          }}
        />
        <Paragraph>回來尼日瓦市集拍攝白天的樣子</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751790015/IMG_2811_t5kq4o.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751790019/IMG_2812_omks5c.jpg` },
          ]}
        />
        <Paragraph>擋不住的陶罐魅力</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790016/IMG_2813_gv4btr.jpg`,
          }}
        />
        <Paragraph>
          尼日瓦對於阿曼來說也算是觀光勝地，路上不少國內外遊客，但不是擁擠的那種，逛起來非常舒適，感到很平衡
        </Paragraph>
      </Section>

      {/* Athar Cafe */}
      <Section>
        <SubTitle title="Athar Cafe" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790040/IMG_3191-scaled_j5ww3f.jpg`,
          }}
        />
        <Paragraph>
          找了一間尼日瓦堡附近的咖啡店，屋頂景觀可以眺望堡壘和清真寺
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790026/IMG_3575-scaled_zfe7c6.jpg`,
          }}
        />
        <Paragraph>
          好好坐下來喝杯咖啡，好像也變成了我到每個城市愛做的事，欣賞著當地的風景，細數著發生的事情
          <br />
          討論這一路的所見所聞，充電、休息
          <br />
          我喜歡這個感覺，即便有時也不說話
          腦袋也不想，就這麼靜靜的看著路人走過，感受現在當下，隨著時間緩緩流過
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790020/IMG_2817_zlxcj3.jpg`,
          }}
        />
        <Paragraph>
          就這樣在咖啡店坐到了天色變暗，離開時結帳，收銀台有可愛的貼紙我們好奇拿起來看，上面有一串阿拉伯文
          <br />
          店員解釋，那段的意思是支持巴勒斯坦
          <br />
          以巴衝突在我們來中東前爆發，當時家人還擔心中東會不會很危險，真的是很希望所有戰事快點和平，烏俄也是
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790022/IMG_2818_zy6as7.jpg`,
          }}
        />
        <Paragraph>每次經過尼日瓦市集都會忍不住拍個幾張</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751790045/IMG_3194-scaled_q9pwo9.jpg`,
          }}
        />
        <Paragraph>
          晚餐我們隨意走在古城裡尋找餐廳，剛好看到有個小花園很多人在用餐，還有現烤的阿曼烤肉
          <br />
          餐廳提供的食物也是固定的，沒有菜單，只要選擇什麼肉跟份量、沙拉類型，鷹嘴豆泥，餅🫓
          <br />
          非常典型中東的一餐！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoNizwaD2;
