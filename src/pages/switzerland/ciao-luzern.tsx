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
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import Video from "@root/components/typography/Video";

const CiaoLuzern = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="瑞士的中心！湖畔如畫美的不真實 - 琉森(Luzern)" />
      <CreatedDate date={"2021-07-28"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203325/IMG_5478-scaled_o4fgwg.jpg`,
          }}
        />
      </Section>

      <MyDate date={"15 April 2018"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203331/IMG_5513-1024x768_kuc6za.jpg`,
          }}
        />
        <Paragraph>
          第三天我們前往瑞士的中心琉森（Lucerne）琉森聞名於他美麗的自然風光和獨特的人文情懷
          <br />
          群山圍繞又以湖泊為中心的琉森 不僅可以遊湖也可以登峰，吸引遊人無數
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203324/IMG_5208-1024x768_eaykgn.jpg`,
          }}
        />
        <Paragraph>
          從蘇黎世開車過來不過一個多小時，找好停車位後 下車伸個懶腰
          準備步行玩琉森
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746203334/IMG_5512_dikqq9.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746203329/IMG_5509_k4fleh.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203330/IMG_5510-1024x768_qxosfj.jpg`,
          }}
        />
        <Paragraph>粉色的樹叢透露著春天的氣息</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203324/IMG_5210-1024x768_geao35.jpg`,
          }}
        />
        <Paragraph>
          棕紅色的建築像故事書裡的插圖，瑞士和別的國家最不一樣的就是
          他們的建築真的都好童話好可愛，且充滿想像力
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203324/IMG_5213-1024x359_xgdpvj.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Katholische Hofkirche St. Leodegar 聖萊奧德伽爾教堂" />
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746203364/IMG_5227_sxu0jo.mp4`}
        />
        <Paragraph>
          建立於
          750年前的聖萊奧德伽爾教堂，古老哥德式建築，看起來居民們是剛做完禮拜
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746203325/IMG_5238-1024x768_z9hr06.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746203325/IMG_5234-1024x768_bv50wz.jpg`,
            },
          ]}
        />
        <Paragraph>
          懷抱著寧靜的心情踏入這神聖殿堂，雖然說信仰不同，但殊途同歸！此時此刻我很高興有機會到訪這裡
          <br />
          教堂內最特別之處是入門口左手邊，有受&quot;聖洗&quot;小朋友的名字、性別，月份，直至講壇前有一個空間供小朋友受洗所用，亦有圖書解說神蹟故事
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203325/IMG_5239-1024x768_joqxec.jpg`,
          }}
        />
        <Paragraph>
          關於琉森在 1300 多年前，原來是琉森湖畔的一個小漁村，直到西元
          750年左右，當地建立本篤會聖萊奧德伽爾 Saint Leodegar
          修道院後，琉森才逐漸發展起來
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203325/IMG_5241-1024x768_zu774g.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Amorino 雪糕店" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746203326/IMG_5250-768x1024_dzbeiw.jpg`}
          text="我最愛冰淇淋了😋<br>玫瑰花瓣樣子很像精品冰淇淋的感覺（5.5瑞郎）<br>重點是也很好吃！"
        />
      </Section>

      <Section>
        <SubTitle title="Vierwaldstättersee 琉森湖" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746203333/IMG_5662-1024x682_pitihg.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746203326/IMG_5324-1024x768_vwg1el.jpg`,
            },
          ]}
        />
        <Paragraph>
          吃完冰淇淋我們沿著琉森湖畔慢慢逛，沿著走就會經過天鵝廣場（Schwanenplatz），接著遇到卡貝爾橋
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203327/IMG_5435-1024x768_wkdyup.jpg`,
          }}
        />
        <Paragraph>
          湖畔有許多咖啡廳，歐洲人鍾愛戶外座位，若是時間允許的話在這放鬆一下很不錯
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203326/IMG_5433-1024x768_rnurl3.jpg`,
          }}
        />
        <Paragraph>
          這些天鵝大搖大擺地逛起來，雪白的身體搖搖晃晃走路好可愛
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746203327/IMG_5440_ldpgqs.jpg`}
          text="琉森湖是瑞士第四大的湖，這邊可以乘船遊覽，欣賞湖光山色，周圍群山仍被雪覆蓋著，和來自世界各地的旅人一起坐在湖畔，感覺無比美好"
        />
      </Section>

      <Section>
        <SubTitle title="Kapellbrücke 卡貝爾橋" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203330/IMG_5448_pfjvim.jpg`,
          }}
        />
        <Paragraph>
          卡貝爾橋是琉森主要地標，14 世紀的木橋，有宏偉的石頭水塔，以及 17
          世紀藝術裝飾的屋頂，跨越羅伊斯河（Reuss）兩岸
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203324/IMG_5474-1024x768_hgtjfz.jpg`,
          }}
        />
        <Paragraph>
          太陽依舊不賞臉，手機拍出來的照片也都灰灰的，冷色系的琉森
          <br />
          中間有一座
          140英尺高的八角形水塔（Wasserturm），由磚建成，這個水塔原本用作監獄、拷問所、瞭望台及金庫
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203327/IMG_5443-1024x768_jqagb8.jpg`,
          }}
        />
        <Paragraph>
          老舊的卡貝爾木橋，不難看出他滿是歷史的顏色軌跡，在 1993
          發生大火後重建後，橋上的木片因燒過而有不一樣的顏色堆疊拼湊
          <br />
          走到後面有一間小商店，販售明信片和各種瑞士製的商品像刀具和時鐘等...
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746203349/IMG_5462_zr1lea.mp4`}
        />
        <Paragraph>
          橋墩上有 120
          幅十七世紀時所繪的琉森歷史三角壁畫，雖然不是很了解瑞士的歷史，不過走著走著也有穿越古今的錯覺
          <br />
          古時候這座橋是琉森用來抵禦外兵的重要屏障，更深感這座橋對於這座城市的歷史地位有多高
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203324/IMG_5470_uuzrz9.jpg`,
          }}
        />
        <Paragraph>
          河岸上有一排的咖啡館、義大利餐廳、冰淇淋店、酒吧等 .... ，都很有人氣
          <br />
          人們可隨意地坐在橋邊，或是選一間咖啡店駐足，享受橋的寧靜與浪漫
          <br />
          看著湖面波光粼粼，映著建築物的倒影，讓我覺得美景真的能去除心中任何雜念
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203325/IMG_5475-1024x768_wck1tu.jpg`,
          }}
        />
        <Paragraph>
          欣賞著湖邊海鷗低飛，來往的遊客聚集在湖畔兩側，是琉森最美麗的風光!
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203326/IMG_5485_gpzwqf.jpg`,
          }}
        />
        <Paragraph>
          河岸對面的耶穌會教堂（Jesuitenkirche）非常醒目，是瑞士最古老的巴洛克式教堂，塔頂像兩顆綠色大蒜
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203326/IMG_5480_jthrxx.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Kornschütte" />
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746203372/IMG_5486_jzwxf6.mp4`}
        />
        <Paragraph>
          塔上有個錶鐘，廣場上有個大藝術品，建築物裡面是像藝術市集的感覺，可以進去逛逛
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203327/IMG_5494_yc2u9x.jpg`,
          }}
        />
        <Paragraph>這條街有精美紀念品和名錶專門店</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203326/IMG_5497-1024x768_hlompa.jpg`,
          }}
        />
        <Paragraph>人偶噴水池的臉有點嚇人 XD</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Bachmann" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203327/IMG_5501-scaled_agwivy.jpg`,
          }}
        />
        <Paragraph>
          這間應該是琉森市中心最大間的 Bachmann，這個巧克力瀑布看起來好可口
          <br />
          琳瑯滿目的巧克力很適合買回去當伴手禮，很推來逛逛 👍
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746203333/IMG_5500_axvopw.jpg`}
          text="我買了一個甜派，裡面的水果是蘋果<br>琉森當地有傳統的美食 – 琉森派（Luzerner Chügelipastete）<br>以培根、起司、番茄、韭菜及雞蛋一起製成，聽起來好好吃啊，不過這次沒品嚐到"
        />
      </Section>

      <Section>
        <SubTitle title="Löwendenkmal 垂死獅子像" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203328/IMG_5502_wzcctk.jpg`,
          }}
        />
        <Paragraph>
          琉森必訪景點，獅子比我想像中的還要巨
          <br />
          刻在岩石表面的垂死雄獅紀念碑，紀念著 1792
          年法國大革命於巴黎協和廣場上戰死的瑞士傭兵
          <br />
          這一段歷史的悲痛，透過丹麥雕塑家將它烙在花崗岩牆中，垂死獅子像栩栩如生，看他的表情真的會有哀傷的感受
          <br />
          難怪馬克吐溫說這是他看過最讓人感傷的雕像！
          <br />
          石像上方刻著拉丁文「HELVETIORUM FIDEI AC
          VIRTUTI」，意思是「獻給忠誠和勇敢的瑞士」
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203329/IMG_5505_kxhfnu.jpg`,
          }}
        />
        <Paragraph>紀念品店前的這隻牛很搶眼</Paragraph>
      </Section>

      <Section>
        <SubTitle title="琉森對我來說…" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203324/IMG_5212-1024x768_popqe9.jpg`,
          }}
        />
        <Paragraph>
          琉森這座湖畔城市，就如他的名字一樣晶瑩剔透，鑲嵌在令人難忘的山嶺間，這裡是前往瑞士中部旅行的理想出發地
          <br />
          無論是在琉森湖邊漫步、老城區逛街、歐洲最古老的木橋歷史巡禮，每個旅人都可以在這座保存良好且景色醉人的古城，找到其趣味及發掘自己獨一無二的旅行方式
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746203349/IMG_5543_olhda2.mp4`}
        />
        <Paragraph>逛完琉森我們繼續驅車前往茵特拉肯👉🏻</Paragraph>
      </Section>

      <Section>
        <SubTitle title="茵特拉肯(Interlaken)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203330/IMG_5551_lnbydm.jpg`,
          }}
        />
        <Paragraph>我們前往少女峰地區的這兩天會住在茵特拉肯</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746203351/IMG_5554_opf8qb.mp4`}
        />
        <Paragraph>
          check in
          完依照慣例就是開始亂逛時間，這時候的茵特拉肯路上很安靜，配上遠上矗立的山峰，我們像被包夾在裡面被保護得好好的
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746203332/IMG_5555-1024x768_jlvfuz.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746203331/IMG_5561-1024x768_xcca10.jpg`,
            },
          ]}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746203332/IMG_5558-1024x768_r8smpx.jpg`,
          }}
        />
        <Paragraph>
          這裡非常寧靜 空氣新鮮又愜意，在瑞士旅遊都感到很安全且放鬆！
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746203333/IMG_5563-1024x768_cxrcop.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746203332/IMG_5630-1024x768_z1qplf.jpg`,
            },
          ]}
        />
        <Paragraph>亂走走到人家露營區，裡面有個湖泊，天還沒全暗</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746203333/IMG_5659_bzrtbg.jpg`}
          text="茵特拉肯天黑後繞來繞去居然都沒找到吃的！只有找到這間餐廳裡面都沒人，點了我最愛的 kebab，和我的臉一樣大！要10 瑞郎"
        />
      </Section>
    </div>
  </div>
);

export default CiaoLuzern;
