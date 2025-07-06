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
import Video from "@root/components/typography/Video";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoMantanani = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="沙巴美人魚島 (Mantanani)、卡哇咔哇紅樹林 Day5" />
      <CreatedDate date={"2023-02-04"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573683/IMG_0460-scaled_kebrbm.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date={"2 Jan 2023 (Day5)"} />
        <Paragraph>
          我們在沙巴的第二個跳島！也是我蠻期待的美人魚島，在照片上看都非常吸引人，不過在今天一早醒來，窗外不像前幾天那樣豔陽高照，我只希望別下雨就好
          <br />
          自從一月一號之後沙巴行程都漲價，還好我們當時美人魚島還沒在
          kkday上預訂，是去沙比島之後直接和導遊敲定，不然都漲價了還要多平台費用，能省則省
          <br />
          今天的同團有澳洲人、韓國人，要前往美人魚島的港口在古打毛律鎮（Kota
          Belud），走的路和作天一樣經過了斗亞蘭，還有那坐瞭望神山景觀很棒的橋，車速很快，今天的導遊小黃和我們說，在沙巴州是沒有時速限制的，那些坑坑疤疤的路自然就會幫忙限速了😂
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573678/IMG_7527-1024x768_ufysth.jpg`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          接近港口的小路中，還有牛隻在路上漫步，當車子一個轉彎進入一處民宅？還在想說這什麼地方原來就是搭船之處，在簽過一些說明切結書後，大家在旁邊噴防曬防蚊準備出發，我們是當天第一批，船也會和其他遊客併
          <br />
          這裡很酷，在紅樹林兩旁，周邊都有水上人家，當船開過去時要放慢速度不影響居民，過了之後就會開始飆起來
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573673/IMG_0455-1024x683_t0gdxz.jpg`,
          }}
        />
        <Paragraph>
          抵達美人魚島！雲層太厚了太陽都被擋住，就算有點灰灰的還是可以看出來水非常清澈！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573673/IMG_0458-1024x683_icvdux.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573673/IMG_0457-1024x683_big3wx.jpg`,
          }}
        />
        <Paragraph>
          美人魚島的沙子很細，相較於東姑拉曼，美人魚島的遊客比較少
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573675/IMG_0519-1024x683_ciff1g.jpg`,
          }}
        />
        <Paragraph>
          島上有住宿，如果時間很夠的話，美人魚島待個兩天一夜好像也不錯
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747573678/IMG_7510-1024x768_bnul4i.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747573674/IMG_7522-1024x768_fyoqn3.jpg`,
            },
          ]}
        />
        <Paragraph>
          我們在美人魚島有兩處浮潛，船載我們到海中央，大家噗通噗通的跳下去開始探索這片水下世界
          <br />
          我不會游泳(也只是不會換氣啦ＸＤ)，導遊讓我拉著游泳圈他帶我玩，也太讚了因為他知道哪裡漂亮
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747573675/IMG_7518-1024x768_wlbfv9.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747573675/IMG_7520-1024x768_gnk9bi.jpg`,
            },
          ]}
        />
        <Paragraph>
          美人魚島的浮潛真的很美👍
          我第一次看到如此壯觀的海底世界，超大片的珊瑚礁、寶藍色的海星、各式各樣的魚穿梭
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573673/IMG_0487-1024x683_jlqk9c.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573674/IMG_7525-1024x768_ywax5f.jpg`,
          }}
        />
        <Paragraph>
          就算天色不佳，美人魚島的牛奶海還是很明顯，好大一片
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573674/IMG_0517-1024x683_izhbr5.jpg`,
          }}
        />
        <Paragraph>突然看到牛隻出現在島上，真是想不到</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573679/IMG_0520-1024x683_iivbrq.jpg`,
          }}
        />
        <Paragraph>
          可愛的小店，我們同夥的另一個澳洲人去買他們的椰子水來喝，話說我們和他聊得很開心，很健談而且他以前在台灣住過四年！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573674/IMG_0518-1024x683_hnmrbj.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747573680/IMG_7488-768x1024_w5qntj.jpg`}
          text="午餐一樣有包含在行程內，吃飽後的自由時間有人去玩水，而我們到處晃晃拍照，在這邊發呆看海好療癒，睡個午覺也幸福"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573678/IMG_7504-1024x768_xcrtkj.jpg`,
          }}
        />
        <Paragraph>
          短暫的美人魚島行程，可是回憶滿滿滿，要離開了雲層才稍稍散去，露出微微的陽光
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573676/IMG_7526-1024x768_vk0rdt.jpg`,
          }}
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747573697/IMG_7490_lkptzc.mov`}
        />
        <Paragraph>再見👋 美人魚島牛奶海</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573675/IMG_0522-1024x683_cdoiwu.jpg`,
          }}
        />
        <Paragraph>
          快要回到紅樹林的出海口處，旁邊都是水上人家，這邊也都是巴夭族的住處
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747573680/IMG_0532-1024x683_kt9h1k.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747573679/IMG_0536-1024x683_r7nal7.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747573676/IMG_0547-1024x683_lp5xe7.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747573680/IMG_0526-1024x683_rxn42p.jpg`,
            },
          ]}
        />
        <Paragraph>
          從美人魚島回來後我們還有卡哇卡哇河遊船，接著晚上看螢火蟲
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573679/IMG_0528-1024x683_xynky2.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573683/IMG_0538-1024x683_tlisjb.jpg`,
          }}
        />
        <Paragraph>
          再遊船的過程中我們見到了幾隻獼猴，在紅樹林間跳上跳下，眼尖的導遊和船夫都會幫我們搜索這附近生物出沒的動靜，但卻沒能夠看到馬來西亞的國寶級動物
          – 長鼻猴，因為他實在太害羞了
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747573676/IMG_0553-1024x683_puc1o3.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747573677/IMG_0574-1024x683_t7x4be.jpg`,
            },
          ]}
        />
        <Paragraph>
          說實在的紅樹林遊船也得靠運氣才能看到稀有動物！所以也不會太失落，吹吹風看看這片生態系也算悠閒
          <br />
          在夜晚賞螢火蟲前，行程還有包含晚餐，更棒的是傍晚還會帶我們到附近海邊看夕陽！不讓我們錯過在沙巴最浪漫的時刻
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573676/IMG_0577-1024x683_nryvfl.jpg`,
          }}
        />
        <Paragraph>好喜歡這片寬廣的海</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573677/IMG_0581-1024x683_mzixpk.jpg`,
          }}
        />
        <Paragraph>
          可以看得出來今天的多雲擋住了夕陽，只捕捉到微微的粉橘色
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573674/IMG_7497-1024x768_efprg0.jpg`,
          }}
        />
        <Paragraph>導遊很會喔，會很多招網美照</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573679/IMG_0582-1024x683_x1cvb6.jpg`,
          }}
        />
        <Paragraph>
          晚餐在一間餐廳，感覺應該是長期和旅行社配合的那種，一樣是有人打菜給你，食物很豐富，餓了都好吃
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747573675/IMG_8043-1024x768_sa8ksa.jpg`,
          }}
        />
        <Paragraph>
          賞螢火蟲我們依舊坐回那條小船，遊同一片紅樹林，因為不能有任何燈光拍照，所以我收起了相機只用手機拍下這張
          <br />
          導遊幫忙把螢火蟲引過來，在無光害滿天星斗的夜裡，兩旁的樹一顆顆得像聖誕樹一樣發光，螢火蟲朝著我們飛來，我伸手將他握在手心，第一次看到這麼密集發亮的螢火蟲很驚喜
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="To Be Continue..." />
        <Paragraph>
          比起沙比島和馬奴干島的話，美人魚島的浮潛確實更美麗，清幽的環境、更細的沙子以及藍綠色的海水，就算路途舟車勞頓也值得，再搭配下午的紅樹林遊船探索這片生態系，讓整天的行程更加豐富，晚上夜賞螢火蟲完美結束一日遊，最開心的是這趟又讓我們認識了不少人，回程鬧哄哄的小巴上大家暢聊，討論著各自的旅途，身體累了但精神依舊亢奮
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoMantanani;
