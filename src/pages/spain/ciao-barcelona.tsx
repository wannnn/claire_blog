import CreatedDate from "@root/components/typography/LastUpdate";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageCarousel from "@root/components/typography/ImageCarousel";

const CiaoBarcelona = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="來過肯定愛上城市 - 巴賽隆納(Barcelona)" />
      <CreatedDate date={"2021-04-17"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758197/IMG_7922-2-scaled_xm1is3.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 24 2018 - June 27 2018"} />

      <Section>
        <Preface>
          和雅典說再見👋 前往巴賽隆納
          <br />
          現在時間凌晨 2:00，預計抵達巴賽 4:00，而且班機 delay 了
          <br />
          到巴賽隆納的時間還早，我只好待在機場消磨時間，等六七點捷運開放，幾乎沒睡很累但也不敢睡覺
          <br />
          不過還是很期待，每到一個新的城市的感覺
        </Preface>
      </Section>

      <Section>
        <SubTitle title="24 June (Day1)" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758183/IMG_7844-1024x768_wbqoeu.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758166/IMG_7781-1024x768_dtixdv.jpg`,
            },
          ]}
        />
        <Paragraph>
          歷經了還搞不清楚這裡捷運路線風波後，先去青旅寄放行李，再去附近找間店吃早餐
          <br />
          我住的地方就在 Passeig de Gràcia，非常市中心，逛街景點都超近
          <br />
          順便小抱怨一下青旅男女混宿味道真的可怕，他們又習慣早上才洗澡晚上酒吧玩樂回來躺了就睡，襪子也不脫
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Casa Milà" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758172/IMG_7784-1024x768_kfmj59.jpg`,
          }}
        />
        <Paragraph>
          第一天沒有特別安排什麼，西班牙的景點門票算是挺貴的，礙於預算我就只能忍痛挑一些了
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758203/IMG_7772_qibl1e.jpg`,
              caption: "Casa Batlló",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758202/IMG_7830-scaled_vq885v.jpg`,
              caption: "La Sagrada Família",
            },
          ]}
        />
        <Paragraph>
          就算亂走，莫名也會走到景點，聖家堂過幾天才會進去參觀，先在外頭看看他的樣子，真的很壯觀
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Casa de les Punxes" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758178/IMG_7797-1024x768_tbafja.jpg`,
          }}
        />
        <Paragraph>
          接近六月底的南歐好熱，經過這個路口覺得這個建築很好看，巴賽隆納真的是處處建築驚喜
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Montjuïc Castle" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758175/IMG_7852-1024x768_krd5ag.jpg`,
          }}
        />
        <Paragraph>
          荒謬的認識到一個在西班牙的台灣人，荒謬的一起喝了
          Sangria，沒想到卻微醺的回青旅
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="25 June(Day 2)" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758196/IMG_7873-scaled_vyiq5y.jpg`,
              caption: "Granja M. Viader",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758191/IMG_7871-scaled_ejmvfl.jpg`,
              caption: "Spanish breakfast",
            },
          ]}
        />
        <Paragraph>
          早上和朋友會合
          先來這間百年老店吃早餐，一定要體驗的西班牙豆漿油條！油條說是要沾巧克力吃(我是沒這樣吃啦)，覺得很不錯！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="La Lambla" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758208/img_7895-1_yhzi2q.jpg`,
          }}
        />
        <Paragraph>
          熱鬧的爛芭樂大道，感覺就相當於台北的忠孝東路、巴黎的香榭麗舍，直走通往海邊
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Mercat de La Boqueria" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758173/IMG_7876-1024x768_cpugqp.jpg`,
          }}
        />
        <Paragraph>
          有好幾百年歷史的市場！近年來轉變為觀光市場，最喜歡逛這種地方，覺得更貼近當地人的生活，更了解當地的飲食
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758193/IMG_7894-1024x768_dc8v5r.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758176/IMG_7885-1024x768_w7w28y.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758131/IMG_5602-1024x683_xzbmai.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758132/IMG_5615-1024x683_w01xec.jpg`,
            },
          ]}
        />
        <Paragraph>
          市場裡的蔬果攤顏色鮮豔，伊比利豬和起司條看起來有夠美味，還有各式各樣的水果，我就狂吃櫻桃，便宜又甜
          <br />
          我們在市場裡吃午餐，簡單吃了墨魚燉飯和西班牙烘蛋，接著要去奎爾公園
          <br />
          我的肩膀整個黑掉，還有斜背包的痕跡，這就是曬大概十幾天的成果
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Park Güell" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758134/IMG_5644-1024x683_oqcssq.jpg`,
          }}
        />
        <Paragraph>
          這真的是我見過最有趣，最繽紛，最有特色的建築，奎爾公園位在有點高處，向後望去延伸至海邊
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758132/IMG_5620-1024x683_jpruum.jpg`,
          }}
        />
        <Paragraph>
          早起8點前到這免費參觀，想省錢還是有撇步的，本來計畫當場買票就好，殊不知票已賣光！！(沒做好功課的下場)
          <br />
          當我們在售票處不知道怎麼辦的同時，剛好有對情侶因為不想等到入場時間想把票賣給我們，還算我們
          5€ 就好！也太幸運
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758189/IMG_8056-1024x768_qzpvno.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758177/IMG_8023-1024x768_wxu5xk.jpg`,
            },
          ]}
        />
        <Paragraph>就是要搶何先生的相機來玩</Paragraph>
      </Section>

      <Section>
        <ImageCarousel
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758136/IMG_5660-1024x683_v9k6wt.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758136/IMG_5662-1024x683_y0kxib.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758138/IMG_5665-1024x683_babfae.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758139/IMG_5668-1024x683_gygy6f.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758133/IMG_5621-1024x683_r9dqih.jpg`,
            },
          ]}
        />
        <Paragraph>奧地利花園裡的花花草草和磁磚</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758140/IMG_5680-1024x683_qlvgrw.jpg`,
          }}
        />
        <Paragraph>
          高地的建築不難看出大自然的元素融入在裡頭，每個細節都值得探究，我很喜歡這種貼近自然的構想
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Hospital de la Santa Creu i Sant Pau" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758170/IMG_6503-1024x683_wek9mw.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758162/IMG_6498-1024x683_vuzoos.jpg`,
          }}
        />
        <Paragraph>
          歐洲最美最古老的醫院，建築師多明尼克使用紅磚、馬賽克磚、彩繪玻璃等加泰隆尼亞建築裝飾手法
          <br />
          忘了當初怎麼沒進去參觀，只留下這幾張外觀照😂
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="La Fonda" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758189/IMG_8070-1024x768_m2lc21.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758179/IMG_8069-1024x768_s5rd1m.jpg`,
            },
          ]}
        />
        <Paragraph>
          晚餐來到這間當地蠻有名西班牙燉飯餐廳，來西班牙怎麼能不吃呢？
          我們一口氣點兩種口味，是說我們才兩個人也太會吃了吧？
          口味比較重，不過還不錯
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Port Vell" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758141/IMG_5705-1024x683_ob5gwi.jpg`,
          }}
        />
        <Paragraph>
          晚餐後再爛芭樂大道上找間店喝 sangria
          聊聊天，再走到底去港口晃晃，巴賽的晚上實在好美。才第二天而已就有不想離開的感覺了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758142/IMG_5706-1024x683_mwy74a.jpg`,
          }}
        />
        <Paragraph>
          身上還帶著整天下來的黏膩，到了晚上轉為舒適，微涼的風吹來瞬間清爽起來，晚上在港口溜達來結束這回合
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="26 June(Day3)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758143/IMG_5716-1024x683_i8whle.jpg`,
          }}
        />
        <Paragraph>
          第三天一早來到加泰隆尼亞區鑽小巷，這種小徑總會讓我深深抓住我目光，然後不由自主拍幾張照，我真的是巷子控
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758144/img_5723-1-1024x683_ipp57p.jpg`,
          }}
        />
        <Paragraph>
          仔細觀察這的建築、住戶掛的加泰隆尼亞旗子、陽台上的植物、晾著的衣物被單...這麼簡單的日常卻出國才被放大
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758146/IMG_5725-1024x683_rmekwn.jpg`,
          }}
        />
        <Paragraph>陽光越來越大，快接近11點店家才開始紛紛營業</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Pastelería Hofmann" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758147/IMG_5733-1024x683_nnrfln.jpg`,
          }}
        />
        <Paragraph>
          米其林女主廚開設的甜點店，以可頌最出名，2010
          年榮獲西班牙奶油可頌麵包師大賽的金牌，有「金牌可頌」的稱呼
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758181/IMG_8081-768x1024_kdkwt4.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758184/IMG_8348-768x1024_cdorok.jpg`,
            },
          ]}
        />
        <Paragraph>
          我挑的是覆盆莓口味，真的太好吃了！然後天氣太熱順道買支冰吃
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Els Quatre Gats" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758154/IMG_5770-1024x683_blatm9.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758155/IMG_5771-1024x683_kfijrk.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758192/IMG_8090-1024x768_neppen.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758198/img_8091-2_fciuj8.jpg`,
            },
          ]}
        />
        <Paragraph>
          吃完可頌後到畢卡索美術館逛逛，就在附近而已，小小排隊了一下。接著到畢卡索生前有段時間長待著創作的四隻貓咖啡朝聖
          <br />
          當時沒做太多功課，反而是回來才把畢卡索生平故事給看完，我想下次去才會更有感覺！
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745758194/IMG_8094_jm9uqc.jpg`}
          text="點杯卡布奇諾，稍微消化一下逛博物館的資訊，美好的下午在陽光灑入的咖啡店裡，好悠閒的時光"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758148/IMG_5734-1024x683_l4dybm.jpg`,
          }}
        />
        <Paragraph>超可愛的狗狗！</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Palau de la Música Catalana" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758150/IMG_5753-1024x683_fc1s40.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758149/IMG_5749-1024x683_fuilhg.jpg`,
            },
          ]}
        />
        <Paragraph>也是建築師多明尼克的作品，外觀非常華麗</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758152/IMG_5763-1024x683_suwh4t.jpg`,
          }}
        />
        <Paragraph>
          覺得這個裝置藝術實在太酷，很有立體感，其實在這區處處帶有濃厚加泰隆尼亞現代主義，強調自然，將大自然融入建築裡，並以花、鳥、動物、植物等元素做裝飾
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Placa Reial" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758153/IMG_5769-1024x683_nfksjn.jpg`,
          }}
        />
        <Paragraph>
          在巴賽有不少精品街區，亂走一通也來到了皇家廣場，為了晚點去海邊我還逛街買了泳衣
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Old Town" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758158/IMG_5774-1024x683_wjwm2i.jpg`,
          }}
        />
        <Paragraph>
          每個國家好像都有 old town，後方是主教堂
          <br />
          西班牙景點真是玩不玩，如果每個都參觀肯定是一筆不小支出
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Bogatell" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758187/IMG_8108-1024x768_yyi4od.jpg`,
          }}
        />
        <Paragraph>
          我俗辣不敢裸體，哈哈這就是文化差異啦！原本想要隨俗一下享受這種奔放的感覺，還是放不開😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758182/IMG_8260-1024x768_scblfx.jpg`,
          }}
        />
        <Paragraph>這海灘其實沒很乾淨，而且有漂浮垃圾</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758159/IMG_5852-1024x683_urezhm.jpg`,
          }}
        />
        <Paragraph>
          享受生活真好，不管今天是禮拜幾
          覺得很難得我能這樣旅行，要把每天都過得精彩
          <br />
          電視和人群傳來陣陣的歡呼，球賽又開打了，我們停下腳步看一下，雖然我是不大懂，但心情卻隨著大家一起高昂
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="27 June(Day4)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758205/img_8266-1_eexntk.jpg`,
          }}
        />
        <Paragraph>Casa Vicens 是高第的第一個作品</Paragraph>
      </Section>

      <Section>
        <SubTitle title="La Sagrada Familia" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758168/IMG_6395-1024x683_dl6s9m.jpg`,
          }}
        />
        <Paragraph>
          終於來參觀我朝思暮想的聖家堂，預計2026完工，到時候絕對還要來參觀一次
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758160/IMG_6256-1024x683_wjiuyz.jpg`,
          }}
        />
        <Paragraph>高地長眠於此</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745758161/IMG_6360-1024x683_xxdleh.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758164/IMG_6371-1024x683_tz6jze.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758165/IMG_6376-1024x683_kn1lz6.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745758206/IMG_8320_przvsl.jpg`,
            },
          ]}
        />
        <Paragraph>
          20€ 門票 +
          導覽，建築的內部讓我大大驚嘆，這實在是我見過最美的教堂不誇張
          <br />
          自然界一直都是高第的靈感來源，教堂的柱子拱頂也讓人聯想到叢林樹冠，整體結構讓人驚嘆連連
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745758202/IMG_8340_cl4yfh.jpg`}
          text="花紋圖案的彩繪玻璃窗使整個聖家堂內部充滿繽紛光線，好像身在廣闊森林中在樹叢間透出來的光"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758171/IMG_6439-1024x683_eg0mfh.jpg`,
          }}
        />
        <Paragraph>
          『直線屬於人類，曲線屬於上帝』
          <br />
          高第在他的設計中極力的追求自然
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758170/IMG_6466-1024x683_aqqqbu.jpg`,
          }}
        />
        <Paragraph>唯一一座未完工即被列為世界遺產的建築</Paragraph>
      </Section>

      <Section>
        <SubTitle title="The Magic Fountain" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758186/IMG_8425-1024x576_ghq5ut.jpg`,
          }}
        />
        <Paragraph>
          很努力伸長手才拍下的，人爆多，而且歐洲人都人高馬大的，一直被擋住😂
          <br />
          被水舞秀擋住的後方是加泰隆尼亞國立美術館
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758201/IMG_8432_u3nd3r.jpg`,
          }}
        />
        <Paragraph>
          短短四天就在噴泉這裡結尾了，再來要搭夜車去馬德里，晚上11點
          我想我一定又會睡不好
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Barcelona 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745758156/IMG_5772-1024x683_xfytzw.jpg`,
          }}
        />
        <Paragraph>
          終於回憶完巴賽隆納，找不到有什麼更鏗鏘有力的形容詞來描述我對這個城市的熱愛，短短幾天就讓我著迷，逛巴賽隆納安排四天真的不夠，無論是建築、美食、運動、音樂等等....
          各方各面都表現傑出，不難想像各路人才來到這個城市尋找他要的知識、靈感
          <br />
          這個城市的活力，繽紛俏皮在我心中烙下了深刻記憶
          <br />
          這個城市的建築，除了人人熟悉的高第，還有更多優秀創新的建築師
          <br />
          這個城市的美食，相信旅人都不會錯過
          <br />
          宜人的天氣，走幾步就到的海灘，西班牙人的熱情慵懶，各式美食佳餚酒精，生活在這裡根本不想離開！
          <br />
          帶著一如往常 又要驅車移動的留戀感、複雜感交錯，巴賽隆納再見了🙋
          至於還沒參觀到的景點下次再來！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBarcelona;
