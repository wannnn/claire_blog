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

const CiaoDubaiD2 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="杜拜跳傘！瘋狂又刺激！一定要試試看飛起來的感覺 – Day2" />
      <CreatedDate date={"2024-01-06"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782926/G0030101-scaled_vv7cvs.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="25 Nov 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782935/IMG_2189-scaled_vi2ztj.jpg`,
          }}
        />
        <Paragraph>
          杜拜跳傘是出發前一直都很期待的活動，當時真的是心一橫
          閉著眼直接官網預約起來，錯過這次的機會就不知道下次何時會有了
          <br />
          所以說想做什麼還是去做吧！懷著既期待又緊張的心情（其實跳傘前也看一堆影片了，算是做足了心理建設）
          <br />
          搭乘計程車來到 SkyDive
          Dubai（司機說他一輩子都不會嘗試這種活動ＸＤ），一進門就有人熱情的接待，問你心情怎麼樣哈哈哈哈哈，接著便在椅子上等候報到量體重，領取手環
        </Paragraph>
      </Section>

      {/* Skydive Dubai */}
      <Section>
        <SubTitle title="Skydive Dubai" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782934/IMG_1679-1-scaled_imupke.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782943/IMG_1705-1-scaled_sv99y5.jpg`,
            },
          ]}
        />
        <Paragraph>
          我們約的時間是10點，也就是 10
          點要來報到，這中間大概要等1個多小時才會輪到你跳
          <br />
          拿到手環之後我們到二樓的景觀台稍作休息，等待發放給我們的震動器響
          再到一樓集合準備
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782917/IMG_1737_bbpdpl.jpg`,
          }}
        />
        <Paragraph>
          眼看著第一批人上車離去，彷彿待宰的豬隻，沒多久時間他們就抵達跑道上，飛機起飛，我們這些等候的人就眼睜睜看著飛機消失在雲層裡
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782911/IMG_1749_yum59r.jpg`,
          }}
        />
        <Paragraph>
          就在欣賞著那些 camera man
          以華麗的姿態落地，以及第一批遊客接連降落時，手中的震動器響了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782916/GOPR0007-scaled_a98um9.jpg`,
          }}
        />
        <Paragraph>
          行前教練會幫你著裝，教你應該擺什麼樣的姿勢，身體該呈現什麼形狀，接著你的
          camera man 會來找你錄一段小採訪
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782916/GOPR0008-scaled_ffrabz.jpg`,
          }}
        />
        <Paragraph>
          終於到了上飛機的那一刻！機上兩排座位大家擠在一起，當抵達一定的高度時，我們會坐到教練大腿上方，兩個人互扣在一起
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782910/G0030037-scaled_wg5d2e.jpg`,
              caption: "幾乎是被拖著到門邊",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782908/G0030044-scaled_mswbn4.jpg`,
              caption: "跳下去的那一刻不由自主的驚呼～哇～～",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782909/G0030048-scaled_wag0nk.jpg`,
              caption: "完全不可怕！超刺激",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782909/G0030068-scaled_bsduh7.jpg`,
              caption: "太好玩了，我飛起來了",
            },
          ]}
        />
        <Paragraph>
          當艙門打開的那一刻，強力的風灌進來（看我的頭髮就知道
          <br />
          沒想到我在跳下去的前一秒完全不緊張！取而代之的是亢奮又期待，我其實想像了很多次跳下來是什麼感覺，絕對比不上親身體驗
          <br />
          在自由落體的時候因為有很大的風拖著，反而沒有我最害怕的失重感！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782925/G0030077-scaled_i6iccy.jpg`,
          }}
        />
        <Paragraph>
          我的天啊 當杜拜棕梠島印入眼簾的那一刻，太美 太震撼 太滿足了，我好衝擊
          好感動 好興奮 好佩服我自己ＸＤ
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782912/G0030105-scaled_eugyiz.jpg`,
              caption: "我超開心的",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782915/G0030116-scaled_jrej8l.jpg`,
              caption: "還好沒有忘記要比動作",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782914/G0030124-scaled_lwi2rq.jpg`,
              caption: "自由落體大約1分鐘，滑翔約5~6分鐘",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782921/G0030127-scaled_s6aiqy.jpg`,
              caption: "開傘後被拉上去的瞬間",
            },
          ]}
        />
        <Paragraph>當天算是反常的雲有點多，教練說通常這裡沒什麼雲</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782929/GOPR0135-scaled_mujnoi.jpg`,
          }}
        />
        <Paragraph>
          安全落地後和教練合照頭髮亂七八糟，我做到了！我完成這次來杜拜最瘋狂最值得紀念的事（大概可以一直說嘴😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782933/IMG_1756_qajea6.jpg`,
          }}
        />
        <Paragraph>
          從 SkyDive
          離開後我還處在一個久久不能自己的狀態，沈浸在剛才的刺激體驗中還沒恢復過來
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782927/IMG_1714-scaled_n73cdq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782932/IMG_1748-scaled_rrtkd2.jpg`,
            },
          ]}
        />
        <Paragraph>
          SkyDive 附近全是密集高樓，杜拜都市叢林體感 +100，摩登都會感
          +200，目瞪口呆指數 +150
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782919/IMG_1759_eyzykm.jpg`,
          }}
        />
        <Paragraph>
          在杜拜步行，30-40
          分鐘都是可接受範圍，其實我覺得杜拜對行人很友善，人行道規劃的很好，車也都會禮讓行人！
        </Paragraph>
      </Section>

      {/* Fish Beach Taverna */}
      <Section>
        <SubTitle title="Fish Beach Taverna" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782940/IMG_2206-scaled_eet4gi.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782941/IMG_2205-scaled_tw4xgu.jpg`,
            },
          ]}
        />
        <Paragraph>
          午餐來吃個海鮮料理，搭配美不勝收的海景，既悠閒又享受
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751782909/9C87D585-6274-4A2C-B242-883F6DA9ECD5_n2cy0h.jpg`}
          text="餐前的麵包非常好吃，還附上了新鮮檸檬和幾顆小蕃茄，沾上橄欖油和醋 撒點玫瑰鹽及胡椒顆粒😋
                前菜冷盤是章魚、我最愛的希臘沙拉（上面那片 feta cheese 是精神）<br />
                主餐則是砂鍋魚料理 FENER KAVURMA，用的是安康魚(monkfish)，佐一些青蔥/胡椒/蘑菇
                整體用餐下來非常滿意，餐點也都合口味很好吃！
                唯一的缺點是戶外座位蒼蠅超多…. 手趕蒼蠅沒停過"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782935/IMG_1763_hbkpui.jpg`,
          }}
        />
        <Paragraph>
          由於剛剛的餐廳是在飯店內，所以這片沙灘是住戶才能使用的
        </Paragraph>
      </Section>

      {/* Dubai Marina */}
      <Section>
        <SubTitle title="Dubai Marina" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782913/IMG_1764_x8vo69.jpg`,
          }}
        />
        <Paragraph>
          杜拜遊船看亞特蘭提斯及帆船飯店是一個不錯的選擇，最好的出船時間在下午四點後
          <br />
          在杜拜碼頭這邊有三間船公司可選擇，我們選了 The Yellow
          Boats，當場買完船票後先去附近的咖啡店休息
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782929/IMG_1757-scaled_zlc3d7.jpg`,
          }}
        />
        <Paragraph>
          Dubai Marina 是富人區，Marina Mall
          聚集眾多時尚品牌，高檔的遊艇在港灣穿梭，餐廳和咖啡廳林立，走在這邊就是極致度假的感覺
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782940/IMG_1758-scaled_nlo8yw.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782924/IMG_1761-scaled_vejh7h.jpg`,
            },
          ]}
        />
        <Paragraph>標準觀光客出發囉～</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782913/IMG_1775_n5hrhr.jpg`,
          }}
        />
        <Paragraph>
          這些船隻看起來是可以在上面晚餐看表演的，Yellow Boats
          會配上一位領隊一路上向我們做介紹
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782918/IMG_1784_xejx8m.jpg`,
          }}
        />
        <Paragraph>
          杜拜特色的建築可真多，挖空的這棟也很奇妙，過了這個沙灘之後船就會開始加快
          <br />
          同船有位沙烏地阿拉伯來的夫妻，妻子不滿意船開太快不爽很多次，還要求讓她下船（根本奧客我也傻眼
          <br />
          當然出發了不可能再回去，更不可能隨便停在岸邊，於是答應她會開慢一點，但我感覺船夫都會偷加速ＸＤ
          等她開始罵了在減速
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782937/IMG_1814-scaled_hsc4vk.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782921/IMG_1846-scaled_ruj4x6.jpg`,
            },
          ]}
        />
        <Paragraph>
          經過重要景點都會停下來讓大家拍照，敬責的拍好拍滿，但浪實在有夠大，會暈的那種
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782913/IMG_1794_h5uepo.jpg`,
          }}
        />
        <Paragraph>一邊是浪漫的夕陽，杜拜精彩的第二天還尚未結束</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782923/IMG_1800_f9tjki.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782910/IMG_1805_jmehts.jpg`,
          }}
        />
        <Paragraph>
          回程經過跳傘的飛機跑道，旁邊起重機吊起來的是杜拜的空中晚餐，可以體驗高空用餐
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751782925/IMG_1891-scaled_rf4wgi.jpg`}
          text="船速再度慢下來，我們快要回到杜拜碼頭了<br />大家已經沒興致拍照哈哈哈，只剩我們拍"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782930/IMG_1818_mctgm7.jpg`,
          }}
        />
        <Paragraph>
          看這些密集的高樓呀，再度感受到杜拜這座城市的繁榮及進步
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782938/IMG_1926-scaled_aut49t.jpg`,
          }}
        />
        <Paragraph>
          來 Marina Mall 裡上廁所順便逛逛超市，排得乾淨整齊的蔬果冰箱
        </Paragraph>
      </Section>

      {/* Burj Khalifa */}
      <Section>
        <SubTitle title="Burj Khalifa" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782933/IMG_1831_aaz811.jpg`,
          }}
        />
        <Paragraph>
          回飯店稍作休息沒多久，我叫 Uber 來到 Dubai Mall（晚上很會塞車）
          <br />
          Mall 逛個沒兩下又走出來，想說先去哈里發塔附近看看水舞秀
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782939/IMG_2247-scaled_bd9rh5.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782937/IMG_2232-scaled_vc2sce.jpg`,
            },
          ]}
        />
        <Paragraph>
          在哈里發塔的周圍有公園綠地圍繞著，一邊散步一邊欣賞世界最高的建築，真的好壯觀，手機都快塞不下了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782931/IMG_1838_zmycrp.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782929/IMG_1847_h8hcmy.jpg`,
          }}
        />
        <Paragraph>
          公園我覺得非常愜意，如果不想在 mall 裡人擠人，這裡是好選擇
        </Paragraph>
      </Section>

      {/* Dubai Mall */}
      <Section>
        <SubTitle title="Dubai Mall" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782917/IMG_1890_pwwah6.jpg`,
          }}
        />
        <Paragraph>
          說實在的我也不怎麼愛逛 mall，這裡的人潮超多，我要從公園走來 Dubai Mall
          和男友會合，一直找不到對方ＸＤ
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751782943/IMG_1980-scaled_e0okic.jpg`}
          text="來美食街覓食，看到有台灣料理 還標榜正宗的牛肉麵，取餐的時候真的笑出來，這泡麵碗還真的是很正宗哈哈哈哈哈接地氣，湯頭味道像是滿漢大餐的味道 🤣
          <br />
            至少麵是現煮的，而且牛肉算很嫩，但湯喝完口很渴
            對面那位掌鏡人吃日式丼飯（不好吃"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782920/IMG_1864_ajt24m.jpg`,
          }}
        />
        <Paragraph>
          吃飽喝足，我終於找到看哈里發水舞秀的觀賞點了，Mall 裡跟著指標走會看到
          <br />
          小橋上擠滿了人，橋下也是
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751782923/IMG_1877-rotated_fqsbco.jpg`}
          text="哈里發塔上的伊瑪爾(EMAAR) 好搶戲 😂
          <br />
          半小時會有一場水舞秀，表演一首歌的時間"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751782909/EF7191AA-2EF4-4338-8C6A-6CCDC082BE3D_mdaeev.jpg`,
              caption: "看到熟悉的鼎泰豐！",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751782922/IMG_1835-rotated_f575jj.jpg`,
              caption: "突然覺得哈里發塔有一點像閃亮的聖誕樹🎄",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751782937/IMG_2256-scaled_npca8o.jpg`,
          }}
        />
        <Paragraph>
          就用這熱鬧非凡的夜晚來結束今天，Dubai Mall
          不管是當地人還是遊客都好多，這裡就像不夜城一樣
          <br />
          有時候的我喜歡這種熱鬧的感覺，周圍鬧哄哄的
          我也是其中一個，漫無目的的逛著，沈浸在杜拜的夜
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoDubaiD2;
