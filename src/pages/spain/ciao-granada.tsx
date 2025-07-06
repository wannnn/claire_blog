import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoGranada = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="保留中世紀摩爾建築之美 - 格拉納達(Granada)" />
      <CreatedDate date={"2021-06-06"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806862/IMG_7202-scaled_ybgczt.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 30 - July 1 2018"} />

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806763/7516819696_IMG_6856-1024x683_sjuzvq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806763/7516819696_IMG_6851-1024x683_glofet.jpg`,
            },
          ]}
        />
        <Preface>
          又是一個搭夜車奔波的節奏，清晨抵達空蕩蕩的
          Granada，還要從公車總站到市區，忘了我是怎麼移動的，是搭公車嗎還是走路，總之等
          hostel
          有工作人員上班之前，我是在左邊那個小公園等待的，搭配右邊那張狼狽不堪的模樣
          XD
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806768/7516819696_IMG_6866-1024x683_ofjlje.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806765/7516819696_IMG_6860-1024x683_umfs0v.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806766/7516819696_IMG_6862-1024x683_q8wyqm.jpg`,
          }}
        />
        <Paragraph>
          陽光漸漸灑進街道，慢慢的有人出來，我們也順利寄放行李，準備出門探索
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806886/IMG_9053-1024x768_x8xuri.jpg`,
          }}
        />
        <Paragraph>
          在西班牙的日子每天早上都來份超道地早餐，實在有夠幸福，尤其那個西班牙豆漿我超愛喝！！！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806771/7516819696_IMG_6874-1024x683_fvyqgy.jpg`,
          }}
        />
        <Paragraph>
          格拉納達景點主要有分三大區：阿爾罕布拉宮、阿爾拜辛區、市區
          <br />
          第一天我們先逛阿爾拜辛區和市區，第二天全部留給阿爾罕布拉宮
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Plaza Isabel la Católica 伊莎貝拉廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806772/7516819696_IMG_6881-1024x683_lqogbw.jpg`,
          }}
        />
        <Paragraph>格拉納達市中心的廣場</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806769/7516819696_IMG_6873-1024x683_yyey1s.jpg`,
          }}
        />
        <Paragraph>
          天氣好<del>(熱)</del>的不像話
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806775/7516819696_IMG_6883-1024x683_jsyy1s.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806774/7516819696_IMG_6885-1024x683_tju7vb.jpg`,
            },
          ]}
        />
        <Paragraph>
          還不到中午就炎熱不堪，隨性地在店家逛逛，買了一本圖騰筆記本和一些紀念品
          <br />
          順便在附近遊客中心詢問購買阿爾罕布拉宮門票的事宜，好在我們幸運的從網路上訂到了！做事總是拖到最後一刻
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Albayzín 阿爾拜辛區" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806777/7516819696_IMG_6887-1024x683_p5hfta.jpg`,
          }}
        />
        <Paragraph>
          <b>阿爾拜辛</b>
          （Albayzín）是西班牙安達盧西亞城市格拉納達的一個區，保留了狹窄而蜿蜒的中世紀摩爾街道
          <br />
          1984年與著名的阿爾罕布拉宮一同列為世界遺產
          <br />
          阿爾拜辛位於面對阿爾罕布拉宮的小山上，不少旅客到阿爾拜辛，主要是從聖尼古拉教堂的角度，來觀賞阿爾罕布拉宮。
          <br />
          阿爾拜辛區的亮點包括阿拉伯浴室、格拉納達考古博物館，和修建在摩爾人清真寺遺址上的救主教堂（San
          Salvador），阿爾拜辛還包含一些原來摩爾人的房子，各種餐館，其中幾條街道經營北非小吃店
          <br />— from Wikipedia
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806778/7516819696_IMG_6888-1024x683_hhst4b.jpg`,
          }}
        />
        <Paragraph>決定晚上一定要來體驗一下北非料理，超超超想吃的</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806780/7516819696_IMG_6889-1024x683_w0xbfr.jpg`,
          }}
        />
        <Paragraph>
          充滿風情的店，紀念品、燈飾等都是我好喜歡的風格，想全部搬回家
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806782/7516819696_IMG_6900-1024x683_pv4q37.jpg`,
          }}
        />
        <Paragraph>
          格拉納達保留最古老的中世紀摩爾街道，也是最古老的伊斯蘭街區
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806783/7516819696_IMG_6901-1024x683_qz5jgg.jpg`,
          }}
        />
        <Paragraph>有種北非就在西班牙的感覺，不用去非洲也能感受到</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806785/7516819696_IMG_6904-1024x683_y2noaj.jpg`,
          }}
        />
        <Paragraph>準備往上探索</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806888/IMG_9070-1024x768_aaza5e.jpg`,
          }}
        />
        <Paragraph>想坐下來休息了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806786/7516819696_IMG_6906-1024x683_paskyq.jpg`,
          }}
        />
        <Paragraph>
          窄窄的小巷，中午時分在外閒晃的遊客不多，大部分都找間餐廳喝個啤酒吃東西
          等太陽漸弱再出來
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806790/7516819696_IMG_6909-scaled_ddsy7j.jpg`,
              caption: "隨處可見的北非風情",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806872/7516819696_IMG_6915-scaled_nma7xl.jpg`,
              caption: "搭配幾何圖案的雕刻",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806790/7516819696_IMG_6912-scaled_dhwwps.jpg`,
              caption: "百搭的白色在妝點其他色彩",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806791/7516819696_IMG_6927-scaled_izfpjw.jpg`,
              caption: "被丟棄的西瓜",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806794/7516819696_IMG_6946-1024x683_wgtszh.jpg`,
          }}
        />
        <Paragraph>
          在格拉納達觀察到的建築是以白色為主，在這炎熱的南邊顯得非常清爽
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806792/7516819696_IMG_6949-1024x683_u0woxf.jpg`,
          }}
        />
        <Paragraph>
          我永遠會記得這旅途路上遇到的人，他們相遇在當地的餐廳
          男生是服務生，女生是遊客，就這樣為了愛留下來
          <br />
          本來我們在拍照的，結果被這兩個有趣的人亂入，也因此我們聊開、也分享了許多旅行上的事
          <br />
          非常熱情還邀請我們晚餐呢
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806797/7516819696_IMG_6967-1024x683_xjyqt0.jpg`,
          }}
        />
        <Paragraph>來到了像城門的地方</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806795/7516819696_IMG_6966-1024x683_rndrzi.jpg`,
          }}
        />
        <Paragraph>
          看起來沒辦法再繼續往上了，這裡荒涼一片，不過右邊往下看是整個市景
          <br />
          在這裡逗留了一下，準備和同行夥伴暫時分開
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806800/7516819696_IMG_6972-1024x683_q6tbfd.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806803/7516819696_IMG_6989-1024x683_rpiuit.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806799/7516819696_IMG_6969-1024x683_hlieku.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806805/7516819696_IMG_6991-1024x683_hp3amh.jpg`,
            },
          ]}
        />
        <Paragraph>
          正值世足賽開打的時候，大家都到 bar 去看球賽了，對我的 partner
          也是，所以我獲得短暫悠閒的個人時光自己晃晃
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806811/7516819696_IMG_6998-1024x683_m8opaa.jpg`,
          }}
        />
        <Paragraph>
          聖尼可拉斯附近的餐廳，店名叫做星星的尼可拉斯？？ 😳
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806802/7516819696_IMG_6987-scaled_cteo7a.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806808/7516819696_IMG_6992-scaled_mza2ih.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806809/7516819696_IMG_6994-scaled_z9sbhz.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806845/7516819696_IMG_6993-scaled_eipfl5.jpg`,
            },
          ]}
        />
        <Paragraph>
          屋外的小盆栽裝飾牆面，花花草草掛在窗臺上，在阿爾拜辛的小街道隨處可見，真的很繽紛可愛
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806810/7516819696_IMG_6996-1024x683_vnaopq.jpg`,
          }}
        />
        <Paragraph>
          我們一路都徒步上來的，沒搭任何公車，我也沒想到我這麼會走哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806814/7516819696_IMG_7001-1024x683_tydede.jpg`,
          }}
        />
        <Paragraph>
          終於快到了在阿爾拜辛亂走的重頭戲，這裡有絕佳的視野眺望阿爾罕布拉，夕陽時分更是聚集超多人一起度過這浪漫時刻
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Mirador San Nicolás 聖尼古拉斯瞭望台" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806816/7516819696_IMG_7012-1024x683_h9hns3.jpg`,
          }}
        />
        <Paragraph>
          事後才知道這個景點的名字，其實在逛阿爾拜辛基本上根本不用找點看地圖，一直上走、跟著大家走、自己亂走就夠了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806813/7516819696_IMG_7000-1024x683_wk20p3.jpg`,
          }}
        />
        <Paragraph>
          望著整個西班牙南部，這裡有最壯麗的景觀，下面密密麻麻的房子是許多階層人群混居的住宅區
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Alcaicería" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806818/IMG_7139-1024x683_ypyhgb.jpg`,
          }}
        />
        <Paragraph>格拉納達的手工藝品商店街</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806820/IMG_7209-1024x683_dgiphf.jpg`,
          }}
        />
        <Paragraph>
          陶器、木製品及中東風情彩色玻璃燈、摩洛哥皮製品…等都可以在這裡找到
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806875/IMG_7223-scaled_qlklql.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806875/IMG_7226-scaled_fry8zu.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806867/IMG_7181-scaled_vmj8xs.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806851/IMG_7174-scaled_iciucc.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806822/IMG_7224-1024x683_m6mbg7.jpg`,
          }}
        />
        <Paragraph>逛這種市集我最喜歡了！越貼近當地風俗文化的我越愛</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806821/IMG_7222-1024x683_jasr5q.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806825/IMG_7232-scaled_kc2fkx.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806824/IMG_7227-scaled_pm3t12.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <SubTitle title="Catedral de Granada 格拉納達主教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806827/IMG_7233-1024x683_m5xndt.jpg`,
          }}
        />
        <Paragraph>
          格拉納達市中心的天主教座堂，是西班牙第一座文藝復興風格教堂
          <br />
          雖然沒有進去參觀，不過外觀很壯麗輝煌(好像歐洲每個教堂都這樣齁XD)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806833/IMG_7237-1024x683_e2k6zw.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806889/IMG_9072-1-1024x768_hljysl.jpg`,
          }}
        />
        <Paragraph>
          達羅河附近的教堂，剛好遇到有人要來結婚，我就趴在上面那邊看
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806857/IMG_7245-scaled_ua3u4l.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806859/IMG_7247-scaled_xwgx2n.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806829/IMG_7248-1024x683_jnosr6.jpg`,
          }}
        />
        <Paragraph>
          第二天天氣依舊，不過終於要逛我朝思暮想的 Alhambra 就興奮到不行
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806852/IMG_7252-1024x683_jdcdyd.jpg`,
          }}
        />
        <Paragraph>前往 Alhambra 的上坡路途中遇到的景色</Paragraph>
      </Section>

      <Section>
        <SubTitle title="La Alhambra 阿爾罕布拉宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806854/IMG_7256-1024x683_t9v8l0.jpg`,
          }}
        />
        <Paragraph>
          在阿拉伯語是：الحمراء 別名為紅宮 (the red one)，意即紅色的城堡
          <br />
          為阿拉伯式宮殿庭院建築的優秀代表並結合完美的造園技藝，於1984年選入世界文化遺產
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806862/IMG_7272-scaled_ix57z1.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806856/IMG_7270-scaled_knillp.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806832/IMG_7279-scaled_zxbovm.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806830/IMG_7275-scaled_qrmx5a.jpg`,
            },
          ]}
        />
        <Paragraph>
          阿爾罕布拉宮佔地非常廣大，大致可以分為以下區塊：
          <ul>
            <li>- 奈斯爾宮殿 (Palacios Nazaríes)</li>
            <li>- 卡洛斯五世宮殿 (Palacios de Carlos V)</li>
            <li>- 堡壘 (Alcazaba)</li>
            <li>- 赫內拉利費宮 (Palacios del Gerneralife) 與花園區</li>
          </ul>
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806850/IMG_7281-1024x683_tjonao.jpg`,
          }}
        />
        <Paragraph>
          阿爾罕布拉宮其主要組成為：
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>梅斯亞爾廳 (Mexuar)</strong>
                <div style={{ marginLeft: "10px" }}>
                  宮裡最古老的部分，是用於蘇丹公務的廳堂，聽政、判決。
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>科瑪萊斯宮 (Comares)</strong>
                <div style={{ marginLeft: "10px" }}>
                  蘇丹會見大臣的地方，有時也在此喝茶，抽水煙，談論國事。
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>香桃木院 (Patio de los Arrayanes)</strong>
                <div style={{ marginLeft: "10px" }}>
                  香桃木享有「愛神木」美稱，花的花語是愛情蜜語
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>使節廳 (Salon de Embajadores)</strong>
                <div style={{ marginLeft: "10px" }}>
                  宮裡最大最豪華的廳堂。蘇丹在這裡接見外賓，牆上複雜的花紋取材於貝殼，花和星星等大自然中的要素為題材。
                  伊斯蘭有規矩不能用人和動物圖案作裝飾。阿拉伯的銘文描繪的是伊斯蘭教的七層天。
                  古蘭經有幾處經文談到「七層天」真主在兩日內創造了七層天。
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>獅子庭院 (Patio de los Leones)</strong>
                <div style={{ marginLeft: "10px" }}>
                  周圍一圈都是柱子，總共有124根。中間是12頭石獅子馱起的水池。
                  池子向四方向引出四條小渠，代表四條河名為水河、乳河、酒河、蜜河。
                  古蘭經中講樂園有一百等級，每兩等之間的距離，如霄壤之遙。
                  極樂園最為高級，樂園四河由此湧出，上面是真主的寶座。阿拉伯的庭院中經常會建這樣的十字形的水渠。
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>兩姐妹廳 (Sala de las Dos Hermanas)</strong>
                <div style={{ marginLeft: "10px" }}>
                  頂部形如鐘乳石的裝飾是宮裡最精美的部分
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>阿本莎拉赫廳 (Sala de los Abencerrajes)</strong>
                <div style={{ marginLeft: "10px" }}>
                  名自貴族家庭，圖案的靈感來自畢達哥拉斯定理，即直角三角形斜邊平方等於兩直角邊平方之和，
                  曾經是宮內最血腥的地方，國王聽信讒言在此殺死36位武士和宮廷里的親戚。
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginLeft: "20px" }}>
                • <strong>國王廳 (Sala del Rey)</strong>
                <div style={{ marginLeft: "10px" }}>
                  曾經舉辦宴會的地方，天花板上描繪有王朝歷代的十位國王像，畫是畫在皮革上的。
                  天花板雕的像個山洞，伊斯蘭教傳說聖人默罕默德就是住在山洞裡。
                </div>
              </div>
            </li>
          </ul>
          <br />— from Wikipedia
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Patio de los Arrayanes 香桃木院" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806879/IMG_7138-1024x682_hyelmy.png`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806835/IMG_7291-1024x683_x2f0jo.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Palacios del Generalife 赫內拉利費宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806837/IMG_7298-1024x683_j5c43a.jpg`,
          }}
        />
        <Paragraph>
          據說在古蘭經裡，穆罕默德將天堂描述成一個溪水流淌的花園，宮殿則依花園和溪水而建
          <br />
          於是這裡成了對天堂美景嚮往的最終意境
          <br />
          實際上，阿拉伯的噴泉設計主要也是取其泉水流經各臥室，達到夏天降溫的效果
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Patio de los Leones 獅子庭院" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806762/116721644_3195140423913653_4235825875468968528_n-1024x676_lo8zcd.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806840/IMG_7316-1024x683_txpquy.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806838/IMG_7306-1024x683_rbb8uy.jpg`,
          }}
        />
        <Paragraph>今天換從這眺望阿爾拜辛區</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806841/IMG_7320-1024x683_d5ia4e.jpg`,
          }}
        />
        <Paragraph>不曉得是哪一座山，上頭還有殘餘的白雪</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806870/IMG_7324-scaled_kyn8yy.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806877/IMG_7322-scaled_xmtfk2.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806864/IMG_7317-scaled_at68vu.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806867/IMG_7332-scaled_i4tylw.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <SubTitle title="Palacio de Carlos V 卡洛斯五世宮殿" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806845/IMG_7325-1024x683_knwtjf.jpg`,
          }}
        />
        <Paragraph>
          查理五世從摩爾人手中收復格拉那達後，在摩爾人的碉堡下方大興土木建造卡洛斯五世宮殿
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806847/IMG_7328-1024x683_uhlu2i.jpg`,
          }}
        />
        <Paragraph>
          整座中庭環繞著32根圓柱，分上下兩層，下層是阿爾罕布拉宮博物館，上層是美術館
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806885/IMG_7355-1024x683_rhwjte.jpg`,
          }}
        />
        <Paragraph>
          其實 Nasrid Palaces 是有限定入場時間的，必須依照票上入場時間入內參觀
          <br />
          我們以為那是園區的入場時間，整個搞錯，於是就錯過最精華的地方 😭
          <br />
          雖然真的好遺憾也不知道下次什麼時候會再來了，但這不就是旅程中的一部份嗎？
          不會時時刻刻完美
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806883/IMG_7411-1024x683_m1dhy3.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806881/IMG_7372-1024x683_v3tvvb.jpg`,
          }}
        />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806880/IMG_7339-1024x683_aabheo.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806868/IMG_7338-1024x683_mo3r0v.jpg`,
            },
          ]}
        />
        <Paragraph>
          在這邊吹吹風，觀賞堡壘和城市風景
          <br />
          還在不敢相信自己眼睛剛剛瀏覽過的壯麗建築，和第一次見過如此華麗的衝擊
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Plaza Nueva 新廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806893/IMG_9105-1024x768_bsx1xc.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806894/IMG_9098-1024x768_gb4ayu.jpg`,
          }}
        />
        <Paragraph>遇到教堂婚禮？大家都盛裝打扮，場面熱鬧</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806896/IMG_9120-1024x768_nfyhfm.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745806900/IMG_9136-768x1024_trcgs7.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745806898/IMG_9129-768x1024_nnspyd.jpg`,
            },
          ]}
        />
        <Paragraph>
          這兩天的晚餐，如期嚐道我期待的塔吉鍋，覺得還不錯欸是我喜歡的，而且蔬菜和肉都燉的很軟入口即化，搭上甜膩的薄荷茶，就差沒來個水煙啦
          <br />
          還有我找到的一間 kebab 店，叫我 kebab 忠實愛好者，真的到哪都吃
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806891/IMG_7427-1024x683_qazdcw.jpg`,
          }}
        />
        <Paragraph>
          回到伊莉莎白廣場，看到正在進行的球賽又忍不住停下來看一下
          <br />
          等等回 hostel 後要整理整理，前往搭夜車去塞維利亞了
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Granada 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745806848/IMG_7335-1024x683_acdktq.jpg`,
          }}
        />
        <Paragraph>
          這趟格拉納達對我來說是非常燦爛、澎湃且震撼的回憶，儘管旅程中總有不完美之處，但也構成下次再回來的理由
          <br />
          Albayzín
          滿滿的摩爾古蹟及伊斯蘭風情讓我招架不住，讓此行沒機會去北非的我興奮不已
          <br />
          Alhambra
          偉大的和幾近完美的建築呈現，相較於中世紀混沌的歐洲，此時的伊斯蘭文明顯得更絢麗
          <br />
          旅行更重要的不是只是看到那些名勝古蹟，而是了解其歷史故事和含義再來親眼見證的激動
          <br />
          頂著豔陽穿梭過高矮交錯的街區中，遇見健談活潑的人們
          <br />
          發掘一些格拉納達住家可愛的點綴
          <br />
          見證充滿歷史的伊斯蘭宮殿建築
          <br />
          一杯甜膩薄荷茶
          <br />
          走在大大小小的上坡路
          <br />
          手中停不下來的快門
          <br />
          喜歡格拉納達隻字片語難表達，不過肯定的是我會再回去，彌補一下這趟的ㄎㄧㄤ
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoGranada;
