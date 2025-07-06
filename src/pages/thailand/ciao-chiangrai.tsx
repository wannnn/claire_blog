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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoTextRow from "@root/components/typography/VideoTextRow";
import MyDate from "@root/components/typography/MyDate";

const CiaoChiangRai = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="在清邁 WFH – 清萊一日遊" />
      <CreatedDate date={"2023-10-11"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576335/IMG_9866-scaled_bmcq1r.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="27 May 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576303/IMG_0938_ly6qaf.jpg`,
          }}
        />
        <Paragraph>
          待在清邁的期間想去清萊玩，幾經考慮後還是覺得報個 kkday
          行程比較方便（當然看行程表就知道將會是很累的一天，拉車遠＋行程趕）不過我們沒有打算要住個一晚租車玩，所以最終還是決定一日遊
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576302/IMG_0939_dpce7v.jpg`,
          }}
        />
        <Paragraph>
          一早小巴會抵達飯店載人，拼團多人一起出發，首站我們抵達一個溫泉公園稍作停留休息上廁所
          <br />
          旁邊攤販賣一些大象褲紀念品等等的東西，溫泉區也可以去煮溫泉蛋
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="White Temple วัดร่องขุ่น (Wat Rong Khun)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576304/IMG_0944_zzfazm.jpg`,
          }}
        />
        <Paragraph>
          第一個景點是白廟，也被稱作白龍寺，位置就在大馬路旁，還好遊客數不是超爆多
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576312/IMG_0950_nlpl73.jpg`,
          }}
        />
        <Paragraph>
          白廟華麗的外觀讓人歎為觀止，純白無暇如一件完美的藝術品
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1747576301/IMG_0962_q9wimx.jpg` },
            { url: `${CLOUDINARY_BASE}/v1747576305/IMG_0963_cgrxqt.jpg` },
          ]}
        />
        <Paragraph>看起來受盡折磨，猙獰的臉很嚇人</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576325/IMG_0957_ldgcxu.jpg` }}
        />
        <Paragraph>白廟真的好美啊！氣勢非凡</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576305/IMG_0954_obda08.jpg` }}
        />
        <Paragraph>
          一雙雙渴望從地獄中解脫獲得救贖的手，其中塗了紅色指甲油比中指的手最為醒目
          <br />
          不過為什麼會有雙彩繪指甲的手呢？據所知是當時建造白廟的藝術家認為
          99%下地獄都是男人，只有1%為女人
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576337/IMG_9883-scaled_sb00pi.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576333/IMG_9891-scaled_lrmrip.jpg`,
            },
          ]}
        />
        <Paragraph>
          穿過了地獄之後走向天堂。嗯…我記得是不能停留、不能回頭的…回眸應該不算
          <br />
          白廟主廟內不能拍照，裡面很有趣，還有漫威英雄們、卡通人物的壁畫
          <br />
          不過最吸引我的還是裡面描述了人生老病死的過程，接著再走向投胎重生
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576311/IMG_0977_a9h1wu.jpg` }}
        />
        <Paragraph>不免俗的來一張合掌 🙏</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576319/IMG_0996_zmv5jr.jpg` }}
        />
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576321/IMG_0998_ubp9cq.jpg` }}
        />
        <Paragraph>
          前面白廟本體的白是耀眼奪目，而後面庭園的建築則是多了一份莊重
        </Paragraph>
      </Section>
      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576319/IMG_0986-rotated_wtcyqs.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576336/IMG_9929-scaled_dspwyw.jpg`,
            },
          ]}
        />
        <Paragraph>這個往天上衝的感覺，像是一股白色火焰</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576317/67f2f6c9d01eb64715893e11ff545d53-scaled_oskrlo.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Blue Temple วัดร่องเสือเต้น (Wat Rong Suea Ten)" />
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576307/IMG_1038_koh4vs.jpg` }}
        />
        <Paragraph>
          藍廟又稱舞虎寺，相較於白廟較為小巧，外觀被大量金黃色覆蓋
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576322/IMG_1026_qichl0.jpg` }}
        />
        <Paragraph>藍廟精雕細琢，還有老虎的雕刻，處處充滿細節</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576326/IMG_1014_ijqpj4.jpg` }}
        />
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576324/IMG_1015_uxrwfa.jpg` }}
        />
        <Paragraph>
          藍廟的藍有種安定的力量，讓人感到沈穩，每每逛泰國佛寺總覺得神聖且可以安心的向佛祖傾訴
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576329/IMG_1031_d7lhaj.jpg` }}
        />
        <Paragraph>這位比丘尼很可愛，自動走來中間供大家拍照</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576309/IMG_1045_jouo84.jpg` }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576339/IMG_9977-scaled_leqzrv.jpg`}
          text="導遊推薦的甜點，藍廟旁有一兩間在賣，椰果肉、糯米和蝶豆花染成藍色的椰子冰淇淋，非常好吃！"
        />
      </Section>

      <Section>
        <SubTitle title="Baandam Museum พิพิธภัณฑ์บ้านดำ (黑屋博物館)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576309/IMG_0006-scaled_mcq6di.jpg`,
          }}
        />
        <Paragraph>無須再贅述黑廟不是廟 😂 他只是外觀長得像廟</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1747576313/IMG_1056_pvnxy3.jpg` },
            { url: `${CLOUDINARY_BASE}/v1747576328/IMG_1065_bvuopv.jpg` },
            { url: `${CLOUDINARY_BASE}/v1747576330/IMG_1070_w4dfkz.jpg` },
            { url: `${CLOUDINARY_BASE}/v1747576331/IMG_1078_vugqzz.jpg` },
          ]}
        />
        <Paragraph>
          黑屋博物館內的館藏多以黑色概念為主，各式獸皮、動物骨骸，有種暗黑的現代藝術感
          <br />
          博物館建築群也可以看到蘭納建築的高挑特色，除了防潮散熱外還能防止昆蟲
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="長頸族部落" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576323/IMG_1081_faslty.jpg`,
          }}
        />
        <Paragraph>
          在苗族部落中，我們遇到了一個曾經在台灣工作過的攤販老闆，回到家鄉來經營這些手工藝紀念品
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576321/IMG_1085_aw7yts.jpg` }}
        />
        <Paragraph>
          補捉了編織手工藝品的瞬間，我不曉得他們這樣經營容不容易，但往往來像這樣需要觀光支持的部落或村落，總不禁有這樣的想法
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576322/IMG_1090_r1rifz.jpg` }}
        />
        <Paragraph>我喜歡這張照片再自然不過的氛圍</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576333/IMG_1093_rjj3ow.jpg` }}
        />
        <Paragraph>由於我們沒有加購去看長頸族，所以在外頭休息等待</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Golden Triangle สามเหลี่ยมทองคำ (金三角公園)" />
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576314/IMG_1116_hobyet.jpg` }}
        />
        <Paragraph>
          泰國、寮國、緬甸交界地帶曾經毒品充斥，經過整頓之後，從原本種植罌粟花改為種植經濟作物
          <br />
          而這尊湄公河畔的金大佛也非常巨大，有三四層樓高
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747576318/IMG_0061-scaled_mf58bb.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747576300/IMG_0062-scaled_rngoml.jpg`,
            },
          ]}
        />
        <Paragraph>
          在金三角公園的時候我們完全沒走到這塊地標，本來想說集合時間到了放棄沒拍也沒關係，但同團的大哥大姐很堅持都來了怎麼可以不拍😂
          硬是叫我們快點去然後幫我們掙取時間
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576310/IMG_1103_q7kjui.jpg` }}
        />
        <Paragraph>
          掃蕩後的金三角，如今成了一個普通的旅遊景點，曾經歷史上的毒梟勝地，還算值得到這裡滿足一下好奇心！
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576316/IMG_0045-scaled_iqnisd.jpg`}
          text="可以爬到大象神的背上拍照，正當我還狂按快門的同時，我的相機沒電了 真是居居，都還沒開始搭船呢👀 真是欲哭無淚"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576334/IMG_0065-scaled_pym2oq.jpg`,
          }}
        />
        <Paragraph>
          距離三國交界最近的金三角，遊走在邊緣的興奮感，遠遠眺望對面視力好還可以看到“金三角經濟特區歡迎您”的字樣
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747576343/IMG_9741_rl78qs.mp4`}
          text="超可愛的白色小奶狗，我快被融化慘了！"
        />
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576311/IMG_1106_m2kokc.jpg` }}
        />
        <Paragraph>
          混濁的湄公河，遊船的一路上都有解說，風吹著 聽歷史故事
          <br />
          我們觀光客坐在船上 一群好奇寶寶，真不曉得河的對面會是怎樣的世界
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747576302/IMG_0076-scaled_slpu2v.jpg`,
          }}
        />
        <Paragraph>黃色的罌粟花狀建築是寮國的賭場，中資進駐的</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1747576332/IMG_1111_gtcxgc.jpg` }}
        />
        <Paragraph>
          這天下午的觀光客真的很少，對面那排攤販賣著服飾及各式紀念品，沿路也有些小吃
          <br />
          照片中的男友為何看起來像待宰🐷隻哈哈哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747576307/IMG_0087-scaled_yytva8.jpg`}
          text="好不容易回到清邁了，清萊一路上坐車屁股痛，而且司機飆超快，遇到紅綠燈都直接右轉ㄎㄠ迴轉就不用等了😂<br />回到我們家外面的巷子吃晚餐，泰式簡餐依舊被辣得鼻涕狂流，還眼睜睜看蟑螂大剌剌在桌上爬過"
        />
      </Section>
    </div>
  </div>
);

export default CiaoChiangRai;
