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
import Preface from "@root/components/typography/Preface";

const CiaoBern = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="被純樸、靜謐中世紀氣氛圍繞的現代化城市- 伯恩(Bern)" />
      <CreatedDate date={"2021-10-23"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403102/IMG_7326-scaled_o0cfej.jpg`,
          }}
        />
      </Section>

      <MyDate date={"20 April 2018"} />

      <Section>
        <Preface>
          從 Zermatt 離開後繼續開車前往
          Bern，那天晚上沒有訂住宿，我們開夜車然後睡車上！
          <br />
          車子停在 Bern 的一個小社區，大家窩在車上睡覺 難睡到我現在都不願回想 XD
          腰痠背痛 手腳僵硬
        </Preface>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403101/IMG_7251_aloyjc.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747403103/IMG_7242_jh1zzq.jpg`}
          text="在車上沒睡好，當太陽逐漸刺眼時更難睡
          <br />
          索性下車伸懶腰"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403100/IMG_7252-1024x768_ut0fsq.jpg`,
          }}
        />
        <Paragraph>
          我們實在太克難了，經歷整晚夜車，早上只能到伯恩火車站裡花錢去廁所刷牙洗臉，一天沒洗澡
          <br />
          接著去 Coop 買三明治當早餐，我都不知道瑞士行可以被我們弄的這麼極致😂
          一度覺得我是流浪漢
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="UNESCO-Altstadt von Bern 伯恩古城" />
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747403513/IMG_7259_r1jycs.mp4`}
        />
        <Paragraph>
          伯恩(Bern)
          是瑞士首都，坐落在萊茵河（Rhine）的支流阿勒河(Aera）兩岸，其舊城已被列入聯合國教科文組織文化世界遺産名錄，擁有許多噴泉、砂岩外牆、狹窄街道和歷史悠久的塔樓、拱廊，散發獨一無二的中世紀氣息
          <br />
          <br />
          雖然這座城市交通非常便利，不過我覺得步行還是最適合發覺這座城市之美的方式
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403101/IMG_7261_phxors.jpg`,
          }}
        />
        <Paragraph>
          天氣非常非常好，戶外餐廳的座位幾乎全滿
          <br />
          <br />
          這時我才知道原來伯恩曾在 1405
          年遭逢大火，老城幾乎毀於火災，後來在沙岩上重建，保留至今
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Zytglogge 時鐘塔" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403100/IMG_7262_jljndv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403100/IMG_7270_qqcwlu.jpg`,
            },
          ]}
        />
        <Paragraph>
          伯恩的地標，在大火後於16世紀修建，整點時會有機械人偶報時，塔上還有天文鐘
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Einsteinhaus Bern 艾因斯坦故居" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403100/IMG_7277_dckkbl.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403100/IMG_7281_kmjf7h.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747403099/20180419_180424_0062-768x1024_zurilm.jpg`}
          text="愛因斯坦之家，見證了這位物理學天才20世紀初在 Bern
          的生活，喜歡他事蹟的人非常推薦參觀"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403101/IMG_7291_vtwqmr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403103/IMG_7296_verayi.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <SubTitle title="Berner Münster 伯恩大教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403102/IMG_7312_fp76ry.jpg`,
          }}
        />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747403105/IMG_7396_hpky2b.jpg`}
          text="結束愛因斯坦故居晃著來到伯恩大教堂，哥德式建築風格，以繪於 15 世紀的彩繪玻璃和雕飾精美的大門而聞名"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403103/IMG_7327-1024x378_v3yrek.jpg`,
          }}
        />
        <Paragraph>
          走上 344 階的旋轉樓梯爬上塔樓頂，一定要上來這裡將伯恩美景盡收眼底
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403105/IMG_7373_iwivcb.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403104/IMG_7385_ekzup9.jpg`,
            },
          ]}
        />
        <Paragraph>
          阿勒河(River Aare)
          飽和的藍綠色對比紅磚屋頂，建構出這座城市的色彩讓人感到很多溫暖
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403099/7516837376_IMG_6586-1024x683_ichd6y.jpg`,
          }}
        />
        <Paragraph>沒洗頭看起來還油油的🤣</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747403512/IMG_7376_blc1w9.mp4`}
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747403493/IMG_7391_mtwkx1.mp4`}
        />
        <Paragraph>
          大門上方「最後的審判 Last Judgment」雕塑，是伯恩大教堂最著名的一部分
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403114/IMG_7393_y7mt4q.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403105/IMG_7397_bfdbhi.jpg`,
            },
          ]}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403103/IMG_7392_mp7omb.jpg`,
          }}
        />
        <Paragraph>
          教堂前方的公共廣場(Münsterplatz) 建於 1191
          年，已列入聯合國科教文組織文化遺產
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Bundeshaus 聯邦宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403105/IMG_7400-1024x768_bjxwow.jpg`,
          }}
        />
        <Paragraph>瑞士聯邦議會的所在地，就聳立在城區內</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403107/IMG_7415_kqc9rr.jpg`,
          }}
        />
        <Paragraph>議會後方的風景，這邊超好拍照，整個人融入風景</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403106/IMG_7402-1024x768_yhvcqu.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403105/IMG_7426_g12glo.jpg`,
            },
          ]}
        />
        <Paragraph>議會前廣場，很多孩子們在玩耍，在那邊繞著跑呀跑</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403107/IMG_7430_lauuxd.jpg`,
          }}
        />
        <Paragraph>
          議會廣場逗留一會兒之後，繼續我們的行程漫步前往熊公園
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403108/IMG_7438_ya6tck.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403107/IMG_7446-1024x768_dy4zcg.jpg`,
          }}
        />
        <Paragraph>
          我們沿著阿勒河前進，在歐洲我總喜歡沿著河邊的路，不同國家不同的感覺
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747403109/IMG_7447_hwv3ci.jpg`}
          text="四處都能看到伯恩大教堂的尖塔，其鐘樓高達100.6米，是瑞士最高的教堂，被列為國家文化財產"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403114/IMG_7453_ygwcmm.jpg`,
              caption: "左邊的窗戶打開了是不是會和別家碰在一起？",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403109/IMG_7457-scaled_tk6aj9.jpg`,
              caption: "我自己覺得這張好有復古的味道",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403109/IMG_7458-1024x768_vrdxal.jpg`,
              caption: "伯恩路上看到的名車跑車其實是挺多的",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403109/IMG_7462-1024x768_eswvd1.jpg`,
              caption: "安安靜靜一路上 感覺特別棒",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403110/IMG_7466-1024x768_xf3mn5.jpg`,
              caption: "這台紅色腳踏車好搶戲",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403109/IMG_7464-1024x768_y3nv05.jpg`,
              caption: "這邊的路線有點妙，我們要往右邊樓梯上走去",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403109/IMG_7477-1024x768_lsnrhu.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Bärengraben 熊公園" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403110/IMG_7482-1024x768_ljrub2.jpg`,
          }}
        />
        <Paragraph>
          熊公園是個小丘陵公園，有 19
          世紀的熊坑，現在是許多棕熊的家，伯恩的市徽上和熊有著密切關係，是這座城市的象徵
          <br />
          看到三隻毛茸茸的棕熊在裡面奔走，真的是超可愛
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747403494/IMG_7475_wsbfhr.mp4`}
        />
        <Paragraph>熊公園距離玫瑰園很近，爬一小段坡可到</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403112/IMG_7492_gijkdd.jpg`,
          }}
        />
        <Paragraph>翠綠的草地和樹葉，伯恩處處都傳遞著春的氣息</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Rosengarten 玫瑰花園" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403113/IMG_7496_vaun98.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403111/IMG_7511_jm9iqt.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403111/IMG_7502-scaled_e1pbri.jpg`,
              caption: "來和愛因斯坦合照",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403112/IMG_7508_l9u9wc.jpg`,
              caption: "還是冬天的關係，玫瑰園沒有玫瑰",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403486/IMG_7505_enzi7e.jpg`,
              caption: "這片草地很放鬆 也有店家可以買到食物來野餐",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403484/IMG_7497-scaled_jcbdfg.jpg`,
              caption: "剛好都背光 拍不好",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403483/7516837376_IMG_6737-scaled_htgsds.jpg`,
          }}
        />
        <Paragraph>不一樣的視野一探伯恩舊城的美麗</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403484/7516837376_IMG_6744-scaled_lrabva.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403484/7516837376_IMG_6751-scaled_use4um.jpg`,
            },
          ]}
        />
        <Paragraph>
          不知不覺幫這兩個小孩拍好多照，天真無邪的樣子實在是太可愛
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747403484/IMG_7719_cafvxy.jpg`}
          text="good friend 在我最狼狽的時候盡量拍成最不狼狽的樣子😂"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403485/IMG_7520_nkcu0x.jpg`,
          }}
        />
        <Paragraph>待在玫瑰花園直到太陽下山</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747403487/IMG_7539_bqj6yf.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747403487/IMG_7543_b7f1kv.jpg`,
            },
          ]}
        />
        <Paragraph>
          回程到市區一樣是沿著河走，輕鬆愜意地散步 隨手亂拍著
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747403502/IMG_7537_uz1hvp.mp4`}
        />
        <Paragraph>看了捏一把冷汗，還以為他什麼防護措施都沒有</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403485/IMG_7550_xjt8cj.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="伯恩對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747403485/IMG_7551_ngpzrb.jpg`,
          }}
        />
        <Paragraph>
          四月的伯恩有著溫暖的陽光，純樸的首都還完美保有著中世紀的風貌，一邊漫步老城
          一邊感受瑞士歷史的變遷
          <br />
          磚紅色屋頂、古老的石塊街道及巧匠精心雕琢的各種造型噴泉，都是伯恩的獨特之處
          <br />
          靜靜體會這座被古老外表包圍的現代化城市，打從心底覺得這裡很適合居住，是個值得細細品味的城市
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBern;
