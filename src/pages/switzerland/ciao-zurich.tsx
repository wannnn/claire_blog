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
import VideoTextRow from "@root/components/typography/VideoTextRow";
import Video from "@root/components/typography/Video";

const CiaoZurich = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="歐洲最富裕的城市 - 蘇黎世(Zürich)" />
      <CreatedDate date={"2021-07-27"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026049/IMG_5126-scaled_boylbv.jpg`,
          }}
        />
      </Section>

      <MyDate date={"April 14 2018"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026048/IMG_5201-1024x768_jn8njf.jpg`,
          }}
        />
        <Paragraph>
          早晨外面一樣是空蕩蕩的，大片雲層覆蓋看不見陽光
          <br />
          今天要在蘇黎世待上一整天，很棒的是
          下午我會和很久沒見的高中同學見面！！！
          <br />
          當我還在羅馬的時候就有和他說我會去瑞士玩，於是我們就約了，實在很興奮
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026039/IMG_4352-1024x768_c1ksaj.jpg`,
          }}
        />
        <Paragraph>
          前往蘇黎世市區的路上，整路隨手亂拍
          <br />
          蘇黎世是座擁有兩千年歷史的古城，是瑞士最大城市，也是全歐洲最富裕的城市、瑞士銀行業的代表城市，世界金融中心之一
          <br />
          除此之外也擁有50多座博物館（包含瑞士國立博物館）、20多座圖書館、100多家美術館，以及音樂廳及歌劇院，是文化氣息相當濃厚的城市
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026043/IMG_6835-1024x682_lkmzq1.jpg`,
          }}
        />
        <Paragraph>
          經過一座小綠地，坐下來休息一下
          <br />
          誒不是我們看起來好像不認識對方一樣 XD 而且左邊看起來好呆滯 🤣
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="St. Peter 蘇黎世聖彼得教堂" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746026048/IMG_4367_ljsj4e.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746026050/IMG_4368_vehhte.jpg`,
            },
          ]}
        />
        <Paragraph>
          聖彼得教堂塔鐘樓上有歐洲最大的教堂鐘指針盤
          <br />
          途中剛好經過他，不過這次我們不打算進去
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026040/IMG_4374-1024x768_pd3xgk.jpg`,
          }}
        />
        <Paragraph>
          蘇黎世這座位於歐洲中心地帶的城市擁有國際都市的各種現代化便利設施，同時擁有保存完好的自然環境
          <br />
          在生活品質方面，蘇黎世一直是位居世界頂級城市之列，這座精緻的城市雖然小巧玲瓏卻包羅萬象
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026039/IMG_4371-1024x768_rtinpp.jpg`,
          }}
        />
        <Paragraph>
          在瑞士的超市『Coop』
          <br />
          逛超市是我的最愛，各種零食糖果餅乾飲料，和超市的三明治(莫名好吃)，可以成為我的三餐哈哈哈
          <br />
          沒有吃餐廳的時候就是超市解決！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026058/IMG_4938_l4diat.jpg`,
          }}
        />
        <Paragraph>
          我們以蘇黎世車站作為出發點，火車站門口出來即是班霍夫大街
          (Bahnhofstrasse)
          <br />
          我們先在車站內的遊客中心拿份地圖，服務人員介紹怎麼玩，發現蘇黎世景點真的很多，我們一天沒辦法全逛完
          <br />
          於是決定行程如下：
          <br />
          瑞士國立博物館 ⇾ 舊城區隨意閒逛 ⇾ 蘇黎世大教堂 ⇾ 林登霍夫山 ⇾
          奧古斯丁巷 ⇾ 蘇黎世聯邦理工學院(林登霍夫對面的一個制高點) ⇾ 蘇黎世湖 ⇾
          晚餐 ⇾ 酒吧
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Schweizerisches Nationalmuseum 瑞士國立博物館" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026040/IMG_4932-1024x768_m2odvl.jpg`,
          }}
        />
        <Paragraph>
          博物館主要展示瑞士歷史的各個層面，並有著手工藝品、居家用品和軍械庫堡壘，進去需要門票
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746026042/IMG_4934-1024x768_g0fi6d.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746026047/IMG_4966-1024x768_cwe7r3.jpg`,
            },
          ]}
        />
        <Paragraph>
          博物館的外觀很美，在這樣的陽光下餐廳露天座位真的很棒，如果在台灣應該坐沒五分鐘汗就狂滴，我太怕熱了😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026040/IMG_4953-1024x768_kp62o8.jpg`,
          }}
        />
        <Paragraph>
          從大量藝術和手工藝遺產到普通的日常用品，博物館展示瑞士人從史前到現在的生活
          <br />
          瑞士國家博物館定期舉辦臨時展覽，主題涉及歷史、文化或社會相關主題，同時舉辦辯論、演講、閱讀或工作坊等活動
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746026044/IMG_5682-1024x768_beau4j.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746026066/IMG_4951_jkl2an.jpg`,
            },
          ]}
        />
        <Paragraph>這是從圓形窗戶看出去的景色</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026064/IMG_4957_ronhqn.jpg`,
          }}
        />
        <Paragraph>博物館廣場</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026041/IMG_4960-1024x768_w51bsa.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Zürich Old Town 蘇黎世舊城區" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026054/IMG_4971_ywgdno.jpg`,
          }}
        />
        <Paragraph>
          舊城區是文化、社會和歷史的匯聚點，這裡有俱樂部、購物大道，也是文化交流活躍之地
          <br />
          同時這一切皆在古城的中世紀歷史建築作為背景，相當迷人
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026058/IMG_4974_xrj6w2.jpg`,
          }}
        />
        <Paragraph>橋上好多愛心鎖</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026055/IMG_4987_oqttda.jpg`,
          }}
        />
        <Paragraph>
          其實原先我們在規劃瑞士的時候 是因為蘇黎世在4個月有
          春季最大歷史性節慶「六鳴節」（Sechseläuten）遊行與世界最大露天電音派對「Street
          Parade」
          <br />
          <span style={{ color: "#f78da7" }}>什麼是六鳴節？</span>
          <br />
          這個節慶傳統可上溯至16世紀，當時工匠們的工時受日照時間長短影響，夏天工時比冬天長一個小時。由各行會代表組成的市政委員會定在春分後的第1個週一，蘇黎世大教堂的鐘會在6點敲響，宣告春天起始與新的收工時間。這個節日稱為六鳴節（Sechseläuten），方言詞義為「六點的鐘聲」，如今已象徵春季的開端
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026050/IMG_4990_atmo67.jpg`,
          }}
        />
        <Paragraph>
          六鳴節在4月的第3個週一，前一天是孩童遊行，兩天節慶的結尾會在歌劇院前的六鳴節廣場（Sechseläutenplatz）
          <br />
          廣場中有巨大木堆，頂端架有雪人，將會在晚間6點準時點燃，這個活動稱為「
          <span style={{ color: "#8ed1fc" }}>燒雪人</span>」，是六鳴節的重頭戲
          <br />
          名為「<span style={{ color: "#8ed1fc" }}>Böögg</span>
          」的雪人頭部裝有爆竹，人們認為，火越快燒爆雪人的頭，當年夏天就會越溫暖
          <br />
          更好玩的是 一般居民在燒雪人活動結束後烤香腸
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Grossmünster 蘇黎世大教堂" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746026052/IMG_4988_jpf1sy.jpg`}
          text="蘇黎世大教堂著名的雙塔是這座城市的地標
          <br />
          教堂結合了羅馬風格、後哥德風格以及新哥德風格。地下聖堂和聖歌隊席位都是蘇黎世大教堂現存最古老的部分，很值得參觀"
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746026178/IMG_5098_vmzhdl.mp4`}
        />
        <Paragraph>
          上塔頂需要 2€，上來的景色絕對值得，可以360度環抱蘇黎世市區景色
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026041/IMG_5197-1024x682_ouvfw4.jpg`,
          }}
        />
        <Paragraph>
          瑞士最浪漫的瞬間就是到處都可以眺望阿爾卑斯山
          <br />
          教堂行程結束後我就要和高中朋友見面了！就約在大教堂這，之後的行程都是她帶😂
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Lindenhof 林登霍夫山" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026061/IMG_5127_opvknb.jpg`,
          }}
        />
        <Paragraph>
          這座城市公園算是附近制高點，可以遠眺大教堂及當地風光
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026043/IMG_5128-1024x768_mxxqch.jpg`,
          }}
        />
        <Paragraph>
          俯瞰利馬特河，相信這邊夜景一定也很棒！只可惜這次無法體會到
          <br />
          從這個角度能看見舊城的屋頂、蘇黎世聯邦理工學院和聖母大教堂的藍色尖頂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026049/IMG_5131-scaled_zfyrdc.jpg`,
          }}
        />
        <Paragraph>這邊還有個小市集！非常熱鬧</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026067/IMG_5136_yqzw9g.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Augustinergasse 奧古斯汀巷" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026054/IMG_5138_vohzii.jpg`,
          }}
        />
        <Paragraph>
          奧古斯丁巷是蘇黎世一條知名小巷
          <br />
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746026055/IMG_5151_vo8juz.jpg`}
          text="中世紀時期的古老房屋，由不同色彩的房子併排而成，連接著聖彼得教堂 (St.Peterhofstatt)"
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746026052/IMG_5149_nvkso5.jpg`}
          text="
          許多旗子看得我目不暇給，絕對可以在這拍出精美照片"
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746026201/IMG_5148_rgn1sa.mp4`}
        />
        <Paragraph>
          不曉得遇到什麼活動，不過我喜歡街上這種熱鬧的氣氛！也感染了我的心情
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026060/IMG_5162_yr5uhy.jpg`,
          }}
        />
        <Paragraph>
          剛好是林登霍夫的對面，我們從不同的角度品味蘇黎世，這邊比較少人比較安靜
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Eidgenössische Technische Hochschule Zürich 蘇黎世聯邦理工學院" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026045/IMG_5164-1024x768_jud7fn.jpg`,
          }}
        />
        <Paragraph>
          歐陸第一的大學，也是全世界最國際化的大學，愛因斯坦也從這裡畢業
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Sternen Grill 蘇黎世烤香腸" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746026045/IMG_5166_bphbex.jpg`}
          text="朋友請我吃的烤香腸，小小一根就要 7瑞郎
          <br />
          坐在蘇黎世湖邊，聊著彼此的以前、現在和未來
          <br />
          相隔多年重新聯絡而且是在遙遠的地方見面，這感覺太不可思議了"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026065/IMG_5173_gm3ga9.jpg`,
          }}
        />
        <Paragraph>
          這趟瑞士最期待的就是這餐了
          <br />
          想品嚐蘇黎世在地料理，可以選擇蘇黎世小牛肉、起司鍋、烤起司等瑞士料理
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026056/IMG_5170_byucl2.jpg`,
          }}
        />
        <Paragraph>
          小牛馬鈴薯煎餅是瑞士傳統食物，配上 cheese fondue 真的讓我讚不絕口！
          <br />
          回羅馬後甚至回台灣我都還念念不忘，偶爾還是會去瑞士餐廳解饞
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026063/IMG_5176_uhfzeb.jpg`,
          }}
        />
        <Paragraph>
          晚上的蘇黎世帶來不同的感覺，我們吃飽沿著河邊散步，欣賞夜景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026066/IMG_5178_ramhdv.jpg`,
          }}
        />
        <Paragraph>朋友帶路的酒吧，這裡很酷只有夏天才會開</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746026060/IMG_5184_u8bqny.jpg`}
          text="續攤繼續喝，直到午夜才回去
          <br />
          來瑞士就是要喝當地的啤酒
          <br />
          還記得我們都有點醉了，一路興奮的蹦跳"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746026065/IMG_5194_xz9aaq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746026055/IMG_5185_durfwn.jpg`,
            },
          ]}
        />
        <Paragraph>
          最感謝的還是朋友帶我一起玩，在異鄉和時隔多年未見的朋友相聚實在再珍惜不過
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="FIFA World Football Museum FIFA 世界足球博物館" />
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1746026069/7800773162584_uelem5.mp4`}
          text="並沒有想去足球博物館，而且那時我和朋友已經有約，於是原本的四人分道揚鑣
          <br />
          不過看到這個獎盃還是覺得很酷！ 必須放上來"
        />
      </Section>

      <Section>
        <SubTitle title="蘇黎世對我來說…" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746026059/IMG_4992_mwf6wm.jpg`,
          }}
        />
        <Paragraph>
          蘇黎世是個很適合徒步閒逛的城市，以蘇黎世車站為出發點，往蘇黎世湖一路向南，有精品街可以感受瑞士時尚、有中世紀古城小巷可以穿梭找靈感、有高處的公園可以俯瞰蘇黎世、有三大教堂搭配河畔風景放空閒聊，逛起來非常舒適且應有盡有，不愧是世界排名前幾的城市，很值得走走！
          <br />
          而這次差兩天就是六鳴節了，很可惜因為行程規劃的關係沒辦法參與到，又是一個下次再來的理由！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoZurich;
