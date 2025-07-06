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
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoVirginIsland = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="宿霧薄荷島 Bohol Day2 – 包船去兩個處女島！" />
      <CreatedDate date={"2023-11-13"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773660/IMG_1431_bmjage.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="23 Oct 2023" />
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751773679/6950a005298f47f0a34aefe6f7ab464d_bmjzba.mp4`}
          text="第一天到薄荷島的時候我們就在前往 Alona Beach 的路上跟其中一位路邊推銷的人買了行程，真心到當地買比 kkday 便宜非常多！再加上我們的殺價功力，包船去任選兩個島一人才 1000 披索！
          <br />我們約好早上 9:00 到飯店大廳等候接駁"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751773658/IMG_1271-1-scaled_ljyliv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751773658/IMG_1270-scaled_psspqg.jpg`,
            },
          ]}
        />
        <Paragraph>
          導遊 JUNE 以下簡稱阿尊很準時出現，我們還一頭霧水
          阿不是要接駁嗎怎麼只有一台機車
          <br />
          沒想到 居然是 三貼！！真是想不到…. 都快掉下去了ＸＤＤ
          機車把手還掛一大桶寶特瓶要去加油站裝船油
          <br />
          一早也太荒謬了哈哈哈哈哈 😂 很有趣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773665/IMG_1506_xkms7y.jpg`,
          }}
        />
        <Paragraph>
          阿尊買了餅乾和現泡一杯即溶咖啡，跟我說這是菲式早餐，真的嗎 😅
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773664/IMG_1500_no9nnu.jpg`,
          }}
        />
        <Paragraph>
          車就停在剛剛的雜貨店，我們走向海邊，穿過重重的海草，大家的螃蟹船都停在那
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773659/IMG_1358_rttald.jpg`,
          }}
        />
        <Paragraph>
          經過一個晚上的考慮，我們後來還決定去兩個處女島，本來在路上討論行程的時候，我問他有沒有什麼
          secret island，他好像不大懂，但推薦了處女島很漂亮，有 local virgin
          island 和 secret virgin
          island，我一直都有點搞不清楚到底哪個是哪個，在網路上也有人說是大小處女島，總之感覺都很美，那就都去吧！雖然也是蠻想去巴里卡薩島的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773659/IMG_1365_hvxi5k.jpg`,
          }}
        />
        <Paragraph>海好藍好美，水看起來不深，清澈見底，海星超多</Paragraph>
      </Section>

      {/* Virgin Island 大處女島 */}
      <Section>
        <SubTitle title="Virgin Island 大處女島" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773659/IMG_1292-scaled_wh0jbk.jpg`,
          }}
        />
        <Paragraph>
          阿尊問，我要跟你們一起下去
          還是你們自己在島上玩，當然是要來一起幫拍照囉ＸＤＤＤ
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773659/IMG_1374_sk2o1n.jpg`,
          }}
        />
        <Paragraph>水～好～清～～</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751773659/IMG_1303-scaled_ozenh4.jpg`}
          text="阿尊一直叫我們跳
          <br />然後他幫我們拍的每張照片呢 都是歪的 🤣
          <br />對於阿尊的拍照技術我們給予 20 分，他已經使出全力了哈哈哈哈哈"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773660/IMG_1376_qrfgci.jpg`,
          }}
        />
        <Paragraph>退潮後才會出現的處女島，整個沙洲呈現月牙灣狀</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751773660/IMG_1379_de5nd5.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751773659/IMG_1394_l6gzgb.jpg` },
          ]}
        />
        <Paragraph>湛藍的天空、清透的海水 加上太陽加持，拍爆</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773660/IMG_1410_cwymg9.jpg`,
          }}
        />
        <Paragraph>
          本來阿尊要去幫我們找海膽吃，好可惜沒找到
          <br />
          要拍比基尼照我們的洋裝、防曬、外套包包、相機都往他身上攬，真是辛苦他了
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751773658/IMG_0351-scaled_ihvwqj.jpg`}
          text="我老寶幫我拍的美照，實在太滿意了 😎"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773661/IMG_1420_izvw1j.jpg`,
          }}
        />
        <Paragraph>
          還好島上不是人爆多的狀態，為了拍下處女島的地標我們還是等了好幾組，也幫了好幾組拍照
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773660/IMG_1424_kbnmc7.jpg`,
          }}
        />
        <Paragraph>回我們的螃蟹船嚕～</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773660/IMG_1435_ob6rsa.jpg`,
          }}
        />
        <Paragraph>
          發現坐在船尾也太好拍了吧，海天一線讓我想到天空之鏡，底下的海草也看的一清二楚
          <br />
          甚至回頭再來看照片的時候都覺得人像Ｐ上去的
        </Paragraph>
      </Section>

      {/* Virgin Island 小處女島 */}
      <Section>
        <SubTitle title="Virgin Island 小處女島" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773662/IMG_1454_rpmgxe.jpg`,
          }}
        />
        <Paragraph>
          過了不到15分鐘？我們就抵達了另一個處女島，依舊是一抹月牙灣，規模較小
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773661/IMG_1458_am2nxe.jpg`,
          }}
        />
        <Paragraph>海水分層的顏色太令人讚嘆，是非常柔和的 baby blue</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773661/IMG_1456_skkk8r.jpg`,
          }}
        />
        <Paragraph>阿尊很盡責的繼續幫我們拍照紀錄</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773662/IMG_1464_tjncgo.jpg`,
          }}
        />
        <Paragraph>
          小處女島就是阿尊所說的 secret virgin island，遊客少很多
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773661/IMG_1460_pcrf4l.jpg`,
          }}
        />
        <Paragraph>
          不管是大小處女島，島上都沒有遮蔽物，千萬不要像我（也沒人會這樣吧）沒防曬！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773661/IMG_1462_krkoba.jpg`,
          }}
        />
        <Paragraph>
          沙洲尾巴的延伸是一處私人的島，上面有一座教堂，我確定進入是要付費，預約的話我就沒多問了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773663/IMG_1479_bx55h1.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751773662/IMG_1467_bpguon.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751773662/IMG_1470_wu3riv.jpg` },
          ]}
        />
        <Paragraph>
          雖然沒有進入園區內，但外面的休憩區還是可以稍做休息，躲一下毒辣的太陽
          <br />
          我們在這裡待了一下
          聊了好多，關於他們的工作型態、菲律賓的文化、觀念等等
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773664/IMG_1471_misjhr.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773662/IMG_1481_huap0k.jpg`,
          }}
        />
        <Paragraph>是說他們都把行程表插在屁股內… 是方便隨時銷售嗎 😂</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773663/IMG_1483_tmgyn5.jpg`,
          }}
        />
        <Paragraph>不曉得是誰挖的愛心</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773663/IMG_1495_qa0sj6.jpg`,
          }}
        />
        <Paragraph>
          結束了處女島們的行程，回程我們都安靜的看著海，真的會看到癡迷
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773664/IMG_1497_ztbbmo.jpg`,
          }}
        />
        <Paragraph>
          此次一起出船的助手，在船的前方還有阿尊的姊姊，有他們今天的處女島行程才能如此順利
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773664/IMG_1504_ttahp3.jpg`,
          }}
        />
        <Paragraph>回來一樣要通過一堆海菜，海水熱到變溫泉的溫度</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773665/IMG_1508_f3xpya.jpg`,
          }}
        />
        <Paragraph>
          為了謝謝阿尊，拍照真是太為難他了哈哈哈哈哈，我們決定晚上請他吃飯
        </Paragraph>
      </Section>

      {/* Toto e Peppino */}
      <Section>
        <SubTitle title="Toto e Peppino" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751773658/4DE6071B-071B-40BF-ACAD-A2EE3E732654_syi2pj.jpg`}
          text="從早上九點就出發處女島，我們回來是一點多，剛好餓到不行可以吃一頓好料，飯店巷口的義大利披薩非常美味！份量絕對能吃飽"
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751773674/e0f739c499994249a49fc29468697428_t7bcu3.mp4`}
          text="回飯店泳池玩起來，這時我已經感覺到我的肩膀在燒了… 泡個水降降溫"
        />
      </Section>

      {/* OVERGROWN Café & Bar */}
      <Section>
        <SubTitle title="OVERGROWN Café & Bar" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751773666/IMG_1648-scaled_j1ugfu.jpg`}
          text="老寶累到去睡午覺，我則跑到隔壁的咖啡廳喝杯拿鐵，享受一下悠閒的午後時光
          <br />再順便到巷口對面的 Baan Zen Thai Massage Spa 去按摩一下，太滿意今天的規劃"
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751773684/IMG_1650_joq6h5.mov`}
          text="晚上六點半，阿尊準時來接我們，一樣是三貼出發哈哈哈，我們說想吃當地人在吃的，於是他帶我們去烤肉店"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773666/IMG_1514_inwipy.jpg`,
          }}
        />
        <Paragraph>
          遠離鬧區、遠離 Alona 觀光地帶，我們停在了一家烤肉店前
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773667/IMG_1513_amk6xd.jpg`,
          }}
        />
        <Paragraph>
          簡單的座位，卻讓人覺得格外溫馨，右邊爺爺也很親切的問候我們
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773666/IMG_1517_xanuzc.jpg`,
          }}
        />
        <Paragraph>旁邊有一攤小雜貨店可以買啤酒，買瓶來配烤肉</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773666/IMG_1515_sdnqcb.jpg`,
          }}
        />
        <Paragraph>
          時常在路邊看到煙霧瀰漫的攤位，旁邊都是用一盒一盒的保鮮盒裝肉串，本來很好奇，剛好今天就來光顧了
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751773679/345b6654ce354a2ca3d6969213526466_fxw41n.mp4`}
          text="點個白飯配肉串，我東挑西選，才總算挑了一些豬/雞
          <br />還沒烤之前我不曉得他們刷上了什麼醬，看起來都紅紅的，而且肉串的部位我都不是很喜歡，嚴格來說應該是看起來不好吃款(台) 😅
          <br /><br />果然口味不合，偏甜鹹，但菲式烤肉晚餐的經驗遠超於食物的美味，在繁天星抖的夜裡，遠離一下塵囂走進當地人的生活，一直都會是記憶最深刻的"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751773669/IMG_1527_w8q5as.jpg`,
          }}
        />
        <Paragraph>
          想當然烤肉沒吃飽，回來我們在路邊找小哥買個 Beef
          Soup，我其實昨天已經來同一攤買過燒賣了哈哈哈，他還記得我們
          <br />
          小哥與他的朋友們很有趣，我們亂聊很開心，食物就…
          不好說，那個湯喝起來就像泡麵的調味粉包
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoVirginIsland;
