import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import {
  CLOUDINARY_BASE,
  CLOUDINARY_VIDEO_BASE,
} from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import Video from "@root/components/typography/Video";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoGrid from "@root/components/typography/VideoGrid";

const CiaoLisbon = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="漫步歐洲文化之都 - 里斯本(Lisbon)" />
      <CreatedDate date={"2021-06-22"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937983/7516817536_IMG_8751-scaled_kwhb7v.jpg`,
          }}
        />
      </Section>

      <MyDate date={"3 July 2018 - 5 July 2018"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937978/IMG_9774-1024x768_zi1vxc.jpg`,
          }}
        />
        <Preface>
          早上六點多到葡萄牙公車總站，看了一下地圖覺得好像走路離 hostel
          也不會太遠，所以就決定這麼上路，結果走了一小時…
          <br />
          到 hostel
          剛好是他們的早餐時間，我在那邊遇到很棒的波蘭室友，他沒有手機很酷，靠地圖旅行，帶著一隻刺蝟
          <br />
          hostel 女主人超級熱情，人很好，雖然還無法 check in
          但讓我可以洗澡一起吃東西
        </Preface>
      </Section>

      <Section>
        <SubTitle title="賈梅士廣場（Praça Luís de Camões）" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937967/IMG_9775-768x1024_enqk9d.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937968/IMG_9777-768x1024_agaiw2.jpg`,
            },
          ]}
        />
        <Paragraph>
          賈梅士廣場（Praça Luís de
          Camões）是里斯本的一個傳統廣場，位於里斯本上城
          <br />
          在此交匯的道路包括迷迭香街（Rua do Alecrim）、憐憫街（Rua da
          Misericórdia）、洛雷托街（Rua do Loreto）、乾花園街（Rua da Horta
          Seca）、弗洛雷斯街（Rua das Flores）
          <br />
          廣場上有詩人賈梅士雕像，以及巴西領事館
          <br />
          這裡有評價也很高的 Manteigaria
          蛋塔專賣店，我來一直很期待吃蛋塔，迫不及待先買了，店內只有蛋塔和飲品，進店自己找空位，有位子就可以站，或是外帶也可以
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745937987/IMG_9862-768x1366_k8ckle.jpg`}
          text="我外帶到廣場上吃，他們有附上糖粉和肉桂粉，喜不喜歡肉桂都要加爆！灑這麼多，肉桂味也不會太過搶戲，奶油香氣依舊，外酥內軟甜而不膩！"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937969/IMG_9785-1024x768_zvvm2h.jpg`,
          }}
        />
        <Paragraph>位在丘陵地的里斯本，地形崎嶇起伏、坡街到處都是</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937970/IMG_9787-1024x768_rmhluz.jpg`,
          }}
        />
        <Paragraph>
          就算是夏天 這邊的日夜溫差也有點大，平均高溫約
          25°C，最低溫15°C，所以跑去 H&amp;M 買了一件長袖，太冷了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937970/IMG_9788-1024x768_z8jfe3.jpg`,
          }}
        />
        <Paragraph>
          在里斯本我其實沒特別規劃要怎麼走怎麼逛，一路都是憑感覺，就都會莫名走到景點
          <br />
          這裡我也是一路往下坡，就到了河邊
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937972/IMG_9790-1024x576_wrpiwk.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937972/IMG_9792-1024x768_iphgqh.jpg`,
          }}
        />
        <Paragraph>
          好 chill，現在回頭看到照片 才想到我找了好久才有一張空椅讓我躺
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937973/IMG_9794-768x576_lsfjaa.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937974/IMG_9795-768x576_c2l5fa.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937975/IMG_9804-1024x768_kxhihi.jpg`,
          }}
        />
        <Paragraph>
          亂走的同時就找到這裡了！最美的纜車行走路線。
          <br />
          全程2分多鐘，可以看到遠方大海，陡峭的街道和交錯而過的纜車及行走的路人，和乘客揮手
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1745938004/IMG_9809_vu3y6d.mp4`}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937976/IMG_9806-1024x768_qogyn0.jpg`,
          }}
        />
        <Paragraph>在這可以待很久耶，兩旁也有一些店家、酒吧</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937977/IMG_9807-1024x576_bsggju.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937977/IMG_9808-1024x576_xdlcuu.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937981/IMG_9821-1024x768_tkvwrv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937983/IMG_9829-1024x768_qx0i5x.jpg`,
            },
          ]}
        />
        <Paragraph>
          里斯本因為地形起伏大，早期建設纜車讓人方便上下坡，但現在纜車已被電氣化電車取代，變成觀光用途。
          <br />
          還有在運作的纜車有三條路線：Bica纜車線，Gloria纜車線，Lavra纜車線
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937981/IMG_9826-1024x768_u826wt.jpg`,
          }}
        />
        <Paragraph>
          World Cup
          開打，很幸運我在這段時間旅行歐洲的不同國家，感受每個地方對於足球的瘋狂和熱愛
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937985/IMG_9851-1024x768_gpdf7r.jpg`,
          }}
        />
        <Paragraph>
          目前里斯本還有在營運的6條電車路線有：12號線、15號線、18號線、24號線、25號線、28號線
          <br />
          準備和朋友在里斯本主教堂見面！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Alfama 阿爾法瑪" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937931/7516803456_IMG_7935-1024x683_cbgfrb.jpg`,
          }}
        />
        <Paragraph>
          Alfama
          的陡峭街道，是里斯本最古老的地區之一，街道兩旁林立著出售傳統手工藝品的商店和咖啡館。
          <br />
          我們從里斯本主教堂附近找了間賣票的買電車票，乘客擠滿電車一路往上，穿過阿爾法瑪
          (Alfama) 前往 11 世紀的聖若熱城堡 (São Jorge Castle)。
          <br />
          然後在聖露西亞景觀台這下車
          <br />
          晚上這邊可以在一些經營很久的餐廳裡，聽到憂鬱的法多 (Fado) 音樂。
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937940/7516803456_IMG_7953-1024x683_dwwalq.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937986/IMG_9860-1024x576_kvlijd.jpg`,
          }}
        />
        <Paragraph>街頭藝人的表演</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Miradouro de Santa Luzia 聖露西亞觀景台" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937933/7516803456_IMG_7903-1024x683_mpgshy.jpg`,
          }}
        />
        <Paragraph>
          聖露西亞觀景台所在處的高度不高，往下望磚橘紅色三角屋頂的白色小房子，彷彿近在咫尺，伸手一摸就可以碰觸到
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937934/7516803456_IMG_7898-1024x683_fudags.jpg`,
          }}
        />
        <Paragraph>
          除了聖露西亞之外還有山上聖母觀景台（Miradouro da Senhora do
          Monte）、恩寵景觀台（Miradouro da Graça）、太陽門景觀台（Largo Portas
          do Sol）
          <br />
          有的視野比較高可以俯瞰的比較廣
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937936/7516803456_IMG_7974-1024x683_zvy280.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937935/7516803456_IMG_7991-1024x683_frjql7.jpg`,
            },
          ]}
        />
        <Paragraph>在這邊也要隨時防備扒手噢，聽說這邊很多</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937985/IMG_9848-1024x768_yqlnkr.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Arco da Rua Augusta 奥古斯塔街" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937985/IMG_9846-1024x768_ukqdyl.jpg`,
          }}
        />
        <Paragraph>
          1875 年的精緻凱旋門，上面有人物雕塑，上去可眺望市中心風光
          <br />
          奧古斯塔街兩旁好多店，好多餐廳，人也好多，是很熱鬧的！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Comur 1942" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937979/IMG_0338-1024x768_o5vgpg.jpg`,
          }}
        />
        <Paragraph>
          沒有去百年魚罐頭老店 Conserveira de
          Lisboa，而是來這間可以挑出生年份或特殊紀念日的魚罐頭店，很有特色
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937955/7516828016_IMG_8044-1024x683_hddgh9.jpg`,
          }}
        />
        <Paragraph>
          這邊的街道白天經過根本看不出它的迷人所在，到了晚上整個脫胎換骨！氣氛很讚
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937954/7516828016_IMG_8081-1024x683_mvxldf.jpg`,
          }}
        />
        <Paragraph>太誇張我居然在餐廳不小心睡著 😂</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Tasca do Chico" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937988/IMG_9927-1024x768_s4xays.jpg`,
          }}
        />
        <Paragraph>
          選定這間法朵餐酒館，氣氛不錯，服務生忙到沒空好好理你，點幾道 tapas
          小酌、欣賞法朵的演出
          <br />
          真的沒辦法忘記這隻章魚，又甜又彈牙
        </Paragraph>
      </Section>

      <Section>
        <VideoGrid
          videos={[
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1745938009/IMG_9925_x9lhtq.mp4`,
            },
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1745938012/IMG_9926_heoy56.mp4`,
            },
          ]}
        />
        <Paragraph>
          簡介一下什麼是法朵（Fado）？
          <br />
          《法朵的歷史 Historia do Fado》中是這麼定義的：Fado 的歌詞和音樂「
          <span style={{ color: "#5599dd" }}>
            反映出人生無常的波折，不幸者多舛的命運，命運的嘲弄，愛情的錐心之痛，沈重的失落或絕望，沮喪地啜泣，渴望的哀愁，人心的善便，難以言諭的心靈交會，短暫相擁的愛戀時刻
          </span>
          」
          <br />
          這種葡萄牙傳統樂曲起源於 1820 年代的里斯本，又被稱做
          <strong>葡萄牙命運之歌/葡萄牙怨曲</strong>。
          <br />
          歌如其名，它傳唱的內容主要也就圍繞在對命運的叩問和對宿命的哀嘆，曲調大多帶點悲愴的氣氛。
          <br />
          也因為葡萄牙自古海運發達，所以水手對愛人、故土的思念，以及妻女對水手的牽掛，就成了
          Fado 很常見的主題。
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937954/7516828016_IMG_8043-1024x683_mitprx.jpg`,
          }}
        />
        <Paragraph>夜晚又再次經過，人也是蠻多的</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937931/7516817536_IMG_8557-1024x683_ybxoat.jpg`,
          }}
        />
        <Paragraph>葡萄牙的第二天在辛特拉，第三天則安排貝倫區</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937935/7516817536_IMG_8574-1024x683_xyxocp.jpg`,
          }}
        />
        <Paragraph>
          廣場地面的磁磚藏著一個世界地圖，要從紀念碑頂樓往下看才看得出來
          <br />
          葡萄牙是第一個探索到非洲最南端好望角的國家，也是首次人類航海繞地球一周的國家，並從海洋貿易獲得許多財富和統治許多殖民地，因此在地理大發現時代成為世界強權。
          <br />
          這些航海霸權的出發點，就是從里斯本貝倫區的港口為起點
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Monumento aos Descobrimentos 發現者紀念碑" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937931/7516817536_IMG_8559-1024x683_kwkz24.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937932/7516817536_IMG_8596-1024x683_oges3o.jpg`,
            },
          ]}
        />
        <Paragraph>
          16世紀，葡萄牙靠著領先全球的航海技術，讓整個國家達到全盛時期
          <br />
          紀念碑的位置就是以前葡萄牙水手出航的地方，歷史意義深厚
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Doca de Belém" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937934/7516817536_IMG_8579-1024x683_osfwuc.jpg`,
          }}
        />
        <Paragraph>
          這裡不算觀光景點，路過看見船在那裡漂著，看起來很療癒
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Ponte 25 de Abril 4月25號橋" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937931/7516817536_IMG_8589-1024x683_sr4kbi.jpg`,
          }}
        />
        <Paragraph>
          四月二十五號大橋曾是歐洲第一長橋，其實這名字是為紀念 1974/4/25
          葡萄牙結束獨裁而命名的，至今已有半個世紀的歷史
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937937/7516817536_IMG_8597-1024x683_oelwl6.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937937/7516817536_IMG_8599-1024x683_rlofni.jpg`,
          }}
        />
        <Paragraph>旁邊是太加斯河，遠方可以看到貝倫塔和出海口</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937938/7516817536_IMG_8614-1024x683_k2qsxa.jpg`,
          }}
        />
        <Paragraph>騎腳踏車踩出來的新鮮果汁，最適合炎炎夏日</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Torre de Belém 貝倫塔" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937941/7516817536_IMG_8640-1024x683_ywwl2z.jpg`,
          }}
        />
        <Paragraph>
          貝倫塔是葡萄牙里斯本的重要指標之一，位於里斯本最南邊的港口，原先是建來防禦用，後來隨著港口的重要性下降，也曾作為海關、電報站、燈塔，甚至是監獄使用
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937940/7516817536_IMG_8621-1024x683_iexsca.jpg`,
          }}
        />
        <Paragraph>
          1520
          年葡萄牙國王曼努埃爾一世為慶祝航海家達伽馬從這港口出發航行世界一周
          以及保護首都里斯本，於是建立這座防禦塔
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937939/7516817536_IMG_8618-1024x683_vbyty2.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937942/7516817536_IMG_8649-1024x683_bwyp0a.jpg`,
          }}
        />
        <Paragraph>
          大熱天正中午底下排隊太多人了，幾經思考還是決定放棄進去參觀，來去吃蛋塔
          😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937947/7516817536_IMG_8658-1024x683_wuqkwd.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937942/7516817536_IMG_8661-1024x683_cot20l.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937943/7516817536_IMG_8662-1024x683_sxltam.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937944/7516817536_IMG_8668-1024x683_vs4snl.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937945/7516817536_IMG_8670-1024x683_tu5pbp.jpg`,
            },
          ]}
        />
        <Paragraph>
          經過熱羅尼莫斯修道院（Mosteiro dos Jerónimos），看到排隊的人龍也是放棄
          XD
          <br />
          這座修道院融合晚期哥德式與曼努埃爾式風格，其翼樓為考古與海事博物館，和貝倫塔在
          20世紀末期被聯合國教科文組織列為世界文化遺產
          <br />
          達伽馬曾經在此祈禱後出海，方才發現了印度、串起了歐亞航線，也正是葡萄牙航海大發現之初
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937946/7516817536_IMG_8678-1024x683_knxjis.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Flor dos Jerónimos" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937962/IMG_0345-scaled-e1624175208753-1024x768_kp1tep.jpg`,
          }}
        />
        <Paragraph>很多遊客都會在這用餐，因為這附近餐廳不多</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Pastéis de Belém 貝倫蛋塔老店" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937949/7516817536_IMG_8679-1024x683_x8rcf2.jpg`,
          }}
        />
        <Paragraph>蛋塔始祖我來了！沒來這裡，好像就沒來葡萄牙哈哈哈</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937945/7516817536_IMG_8681-1024x683_i7efgv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937948/7516817536_IMG_8686-1024x683_lkxzyn.jpg`,
            },
          ]}
        />
        <Paragraph>
          葡式蛋塔原來是 葡萄牙里斯本貝倫區 傑羅尼莫斯修道院 Mosteiro dos
          Jerónimos
          的修女發明的，主要因為蛋白被廣泛運用製衣漿紗、過濾酒，剩下很多蛋黃，因此修道院就發明了不少用蛋黃製作的甜點，蛋塔就是其中之一
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937963/IMG_0348-1024x768_xhx8or.jpg`,
          }}
        />
        <Paragraph>
          內用座位區的排隊人潮相當可觀，外帶到附近草地躺著吃也是不錯的選擇
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Ascensor da Bica" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937951/7516817536_IMG_8771-1024x683_adfclo.jpg`,
          }}
        />
        <Paragraph>
          在里斯本的第三天又到這裡了，這次的天氣比較好，拍出來的照片比較漂亮
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937947/7516817536_IMG_8740-1024x683_flkh8u.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937950/7516817536_IMG_8741-1024x683_klzdij.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937958/7516817536_IMG_8760-1024x683_dg1zjr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937951/7516817536_IMG_8757-1024x683_pzoecv.jpg`,
            },
          ]}
        />
        <Paragraph>
          待在這邊的午後真的很療癒，雖然說身邊的觀光客很多，但卻讓我感覺很日常
          <br />
          在水溝蓋上睡著的貓咪、陽台上探出頭的可愛小狗、來去的人潮、趴在電車窗上的乘客
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937953/7516817536_IMG_8777-1024x683_qzp0ig.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937952/7516817536_IMG_8776-1024x683_v4nyqb.jpg`,
          }}
        />
        <Paragraph>里斯本不只有黃色電車，還有紅的、綠的，都相當可愛</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Elevador de Santa Justa 聖胡斯塔升降機" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937956/7518819488_IMG_8782-1024x683_zcdb9y.jpg`,
          }}
        />
        <Paragraph>
          建於 1902
          年的鑄鐵電梯，採用金屬細絲裝飾，連結卡莫廣場與地勢較低的街道，電梯裡滿滿的復古味
          <br />
          我已經天色快暗才來了，所以排隊沒有排太久，要不然也可以從上面搭下來，會比較少人
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937956/7518819488_IMG_8785-1024x683_zgjog7.jpg`,
          }}
        />
        <Paragraph>在等待的同時來看一下這趟吃得有多肥</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937959/7518819488_IMG_8800-1024x683_vq7xcc.jpg`,
          }}
        />
        <Paragraph>360度環繞里斯本美景</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937963/7518819488_IMG_8812-1024x683_xzs1ew.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937957/7518819488_IMG_8792-1024x683_r8ze15.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937960/7518819488_IMG_8817-1024x683_zhwno3.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937959/7518819488_IMG_8814-1024x683_j27ygu.jpg`,
            },
          ]}
        />
        <Paragraph>各個角度的里斯本市景，都充滿魅力</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937971/7518819488_IMG_8840-1024x683_knz9i9.jpg`,
          }}
        />
        <Paragraph>
          搭乘升降梯後可到達卡爾莫修道院（Convento do Carmo），修道院是 1755
          年受到地震摧殘的哥德式教堂遺址，有露天中殿和博物館，雖然說現在是廢墟，但是我喜歡這種殘缺美感
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937961/7518819488_IMG_8851-1024x683_swcams.jpg`,
          }}
        />
        <Paragraph>這邊有戶外電影院！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937967/7518819488_IMG_8858-1024x683_yhyjve.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Casa Portuguesa do Pastel de Bacalhau" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937966/7518819488_IMG_8864-1024x683_j2o9q5.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745937964/IMG_0502-768x1024_hygkya.jpg`,
              caption: "里斯本的海鮮也很有名，鱈魚最常見的里斯本美食",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745937965/IMG_0543-768x1024_r4ugum.jpg`,
              caption: "在里斯本喝白酒的 Sangría",
            },
          ]}
        />
      </Section>

      <Section>
        <SubTitle title="Lisboa 對我來說 ..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745937932/7516803456_IMG_7966-1024x683_kjgevi.jpg`,
          }}
        />
        <Paragraph>
          里斯本真的挺適合生活的，在這裡遇到的人也都很親切，喜歡電車穿梭在街巷，高高低低的坡帶我看見各種不同美景，從俯瞰大片紅磚屋頂
          到見證一切大航海時代開端的港口
          <br />
          這裡的建築有各種活潑的色調，也有我最喜歡的花磚，在里斯本市區整體的感覺非常舒適宜人，夜生活也熱鬧
          <br />
          在里斯本的最後一個晚上，喝完 Sangrīa
          後一身燥熱到機場，準備前往英國，朋友和我一起搭地鐵送我去，這次要先暫時分道揚鑣，到巴黎再見
          <br />
          一定會很想念里斯本的一切，我已經可以想像下一次再來我要吃什麼、去哪裡玩了
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoLisbon;
