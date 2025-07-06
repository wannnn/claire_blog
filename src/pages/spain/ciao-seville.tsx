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
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoSeville = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="感受原汁原味的西班牙 - 塞維利亞(Seville)" />
      <CreatedDate date={"2021-06-09"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807242/7518910528_IMG_7624-scaled_qw1lmi.jpg`,
          }}
        />
      </Section>

      <MyDate date={"2 July 2018"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807238/7516822336_IMG_7807-1024x683_ae3rqi.jpg`,
          }}
        />
        <Preface>
          塞維利亞曾是一個重要港口，西班牙船隊從新大陸運來大批黃金、白銀，經過塞維利亞後轉往歐洲各地
          <br />
          塞維利亞是安達魯西亞的最大城市、西班牙第四大的城市，也是我待的最後一個城市，不得不說西班牙的行程我排得好極限，四個城市從右邊到左邊全靠夜車移動
          <br />
          還以為在車上補眠就好我太天真了😂
          雖然省了幾晚住宿錢但也消耗掉我的精神，真的是小資窮遊才有辦法發揮成這樣
          <br />
          下次我絕對不會再嘗試 XD
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807238/7516822336_IMG_7811-1024x683_onskib.jpg`,
          }}
        />
        <Paragraph>
          一樣清晨抵達
          <br />
          一樣走在無人的街道
          <br />
          一樣聞著早晨才有的新鮮空氣
          <br />
          一樣先去 hostel 寄放行李
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807238/7516822336_IMG_7813-1024x683_sdvk9x.jpg`,
          }}
        />
        <Paragraph>
          當初都選擇搭夜車就是沒考慮太多，想說省時省錢。 才忽略掉了洗澡這一塊
          <br />
          撇步就是，hostel check in 前、check out
          後一定都可以行李寄放，晚上拿行李出發先借浴室洗澡，隔天抵達時再借浴室洗澡
          🛀
          <br />
          在外奔波身體很髒的，沒洗真的會被自己黏死，喔對了還要隨時找廁所去刷牙洗臉...
          是有多克難搞成這樣哈哈哈哈哈
          <br />
          然後化妝品不是必須的，有防曬就好，也不是防曬黑是防曬傷，然後眉毛有口紅有即可，因為行李重量必須簡化到最輕
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807248/IMG_9428-1024x768_zvwt9v.jpg`,
          }}
        />
        <Paragraph>
          前面紀錄太多細節了😂 但這個不得不說
          <br />
          我到塞維利亞的時候身上現金已經快花完，本來想挑戰看能用卡片撐多久(因為當時匯率好像漲回來了)
          <br />
          結果吃這餐馬上破功，人家沒消費滿10歐不給刷啦，超鬧！
          <br />
          還先欠著出去找提款機領錢，真的是
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Plaza de toros de la Real Maestranza de Caballería de Sevilla 西維爾鬥牛廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807238/7518910528_IMG_7434-1024x683_qs7zxs.jpg`,
          }}
        />
        <Paragraph>
          有多少人是衝著鬥牛而來？這裡是一個重要景點，即便在動物保護理念備受重視之下
          <br />
          人們對這個文化究竟是 &quot;必須維護的民族傳統文化&quot; 或者是
          &quot;一種虐待動物的血腥文化&quot;，存在著爭議
          <br />
          歌劇『卡門』的場景就是設定在塞維利亞，鬥牛場的對面有卡門和鬥牛士的雕像
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745807238/7518910528_IMG_7437-1024x683_tnugk8.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807238/7518910528_IMG_7475-1024x683_hxxdhz.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745854139/IMG_9433-1024x683_ajlzvh.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807239/7518910528_IMG_7480-1024x683_mycvum.jpg`,
            },
          ]}
        />
        <Paragraph>
          付了門票租了導覽，遊客不多，時間一到大家跟著導覽人員聽講解，然後自由在鬥牛場參觀
          <br />
          腳比沙還黑了 👀
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807239/7518910528_IMG_7442-1024x683_qazhmf.jpg`,
          }}
        />
        <Paragraph>實在很難想像場上的廝殺，既血腥又熱鬧的矛盾</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Torre del Oro 黃金塔" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807239/7518910528_IMG_7486-1024x683_wtskjk.jpg`,
          }}
        />
        <Paragraph>
          逛完鬥牛場後繼續走會看到一座顯眼的建築 -
          黃金塔，他是一座軍事瞭望塔，看起來很像 12 邊型的柱體
          <br />
          以前主要用來監視河港的船隻，現在則是航海博物館，裡面陳列了海軍史和哥倫布航行到美洲的第三艘船
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807240/7518910528_IMG_7494-1024x683_vz9fvn.jpg`,
          }}
        />
        <Paragraph>
          塔頂的景色也是值得上來一看，旁邊經過的是瓜達幾維河
          <br />
          這棟很高的建築 是我的夜巴駛進塞維利亞後第一個印入我眼簾的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807239/7518910528_IMG_7495-1024x683_v5nq49.jpg`,
          }}
        />
        <Paragraph>一窺河對面的人流車流 👀</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807239/7518910528_IMG_7489-1024x683_glfoyi.jpg`,
          }}
        />
        <Paragraph>
          這張我好喜歡，這也是我在塔頂上往下拍的，試著在街道中找到對稱協調感
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807239/7518910528_IMG_7501-1024x683_xo0rsj.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807240/7518910528_IMG_7518-1024x683_wlmypi.jpg`,
          }}
        />
        <Paragraph>
          在塞維利亞路上馬車作為交通運輸工具不稀奇，前面這個金髮妞很聰明，行李箱作為交通工具才引人注目
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Palacio de San Telmo 聖特爾莫宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807240/7518910528_IMG_7519-1024x683_ff7vzb.jpg`,
          }}
        />
        <Paragraph>
          州政府的辦公室，後方有皇家菸廠，這一大塊至後方都是塞維利亞大學的範圍
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807242/7518910528_IMG_7522-1024x683_bo4hgr.jpg`,
          }}
        />
        <Paragraph>
          終於要前往我最期待的西班牙廣場好興奮，Google map
          上說他是鋪滿磁磚的地標廣場也太可愛
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Plaza de España 西班牙廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807243/7518910528_IMG_7663-1024x683_qshrv1.jpg`,
          }}
        />
        <Paragraph>
          西班牙摩爾復興建築的縮影
          <br />
          塞維利亞在1929年主辦了西美展覽，為此在瑪利亞路易莎公園的邊緣興建目前的西班牙廣場，舉行西班牙的工業和技術展覽，廣場中心有一個大噴泉
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745807240/7518910528_IMG_7561-1024x683_nbsomn.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807240/7518910528_IMG_7553-1024x683_enodnj.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807241/7518910528_IMG_7575-1024x683_enmv1x.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807243/7518910528_IMG_7668-1024x683_nsc0ry.jpg`,
            },
          ]}
        />
        <Paragraph>
          廣場與主建築之間隔著運河，運河上橫跨四座拱橋
          <br />
          看到這個就讓我想到威尼斯，有不少遊客體驗護城河划船的樂趣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807242/7518910528_IMG_7623-1024x683_quvfry.jpg`,
          }}
        />
        <Paragraph>
          外頭超熱躲進來，最好下午來避開中午，拍照也能順光拍不然會過曝
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807243/7518910528_IMG_7636-1024x683_ce1leb.jpg`,
          }}
        />
        <Paragraph>
          可以看出西班牙廣場的設計半圓形又對稱，我在這裡看好久
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807242/7518910528_IMG_7654-scaled_vhfq7t.jpg`,
          }}
        />
        <Paragraph>
          西班牙廣場上所有的長椅，每張分別代表西班牙每座城市的不同故事
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807242/7518910528_IMG_7655-1024x683_qqg8xb.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745807241/7518910528_IMG_7584-1024x683_tnraer.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807242/7518910528_IMG_7620-1024x683_olv3gx.jpg`,
            },
          ]}
        />
        <Paragraph>
          佛朗明哥舞實際上不是西班牙人所創，而是源於住在西班牙南部安達魯西亞（Andalucia）的吉普賽人
          <br />
          有街頭藝人在表演，看他們用超輕快的腳步踢踏，鞋跟發出清脆的聲音，每次落地都和音樂搭配的完美
          <br />
          這個表演真的很令人享受、驚呼連連、掌聲不斷
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807241/7518910528_IMG_7588-1024x683_ithh1t.jpg`,
          }}
        />
        <Paragraph>
          你可以花幾個小時在這邊細細品味、也可以花半個小時拍拍照就走，看怎麼規劃行程
          <br />
          像我把行程排很鬆的，待在西班牙廣場的時間還有辦法讓同行友人睡一場午覺(但其實是搭夜車搞得太累的下場XD)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807241/7518910528_IMG_7576-1024x683_mqqkrs.jpg`,
          }}
        />
        <Paragraph>
          歐洲這麼多廣場，西班牙廣場絕對是心目中前幾名，他的結構、對稱、拱門、青花瓷、花磚、幾何圖形
          <br />
          我最愛的元素都在裡頭，叫我怎麼不愛 ❤️
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807243/7518910528_IMG_7674-1024x683_w852z2.jpg`,
          }}
        />
        <Paragraph>在西班牙吃了不少次海鮮燉飯，在塞維利亞也不能例外</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745807243/7518910528_IMG_7677-1024x683_hyqhow.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807244/7518910528_IMG_7678-1024x683_h9xvok.jpg`,
            },
          ]}
        />
        <Paragraph>
          又到了建築觀察的時刻，塞維利亞的房屋多由粉、黃、白組成，感覺上很溫暖又很有朝氣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807244/7518910528_IMG_7671-1024x683_mmjdv8.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Jardines de murillo" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807244/7518910528_IMG_7679-1024x683_bji1of.jpg`,
          }}
        />
        <Paragraph>
          一座城市公園，有長椅和許多樹蔭遮蔽可以休憩，這裡還有歷史古蹟
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807244/7518910528_IMG_7683-1024x683_u0rxpu.jpg`,
          }}
        />
        <Paragraph>粉紅小巷</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Plaza Nueva 新廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807244/7518910528_IMG_7686-1024x683_a2lad5.jpg`,
          }}
        />
        <Paragraph>
          新廣場在整個塞維利亞的城市中心，非常廣闊，兩旁還有許多棕梠樹，感覺上很特別
          <br />
          這附近的大眾交通很方便，輕軌也是以這裡為起點
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Real Alcázar de Sevilla 塞維利亞王宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807245/7518910528_IMG_7687-1024x683_olfowv.jpg`,
          }}
        />
        <Paragraph>
          我沒有看冰與火之歌，但塞維利亞皇宮肯定是必訪之地！
          <br />
          人非常多要有排隊的心理準備，我大概 3~4
          點來的吧，熱到一個不行一直跑去旁邊樹陰躲一下
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807245/7518910528_IMG_7736-1024x683_tppxey.jpg`,
          }}
        />
        <Paragraph>
          塞維利亞王宮屬於世界文化遺產
          <br />
          就不說有人在這裡一腳踩進地上的小水池，甩了一堆水出來！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807245/7518910528_IMG_7692-1024x683_q0odbg.jpg`,
          }}
        />
        <Paragraph>
          處女庭院，摩爾風格的皇宮，其實也混雜了文藝復興與伊斯蘭風格，擁有噴泉花園、華麗拱門和
          16 世紀的瓷磚。
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745807245/7518910528_IMG_7700-1024x683_l5jcsd.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807245/7518910528_IMG_7710-1024x683_ogwcdv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807246/7518910528_IMG_7746-1024x683_ewtff2.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807246/7518910528_IMG_7721-1024x683_xbd2bu.jpg`,
            },
          ]}
        />
        <Paragraph>
          王宮內的細節、雕刻、天花板，把我迷的團團轉，但也看得我眼花撩亂
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Patio del Crucero" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807245/7518910528_IMG_7739-1024x683_x8yaqc.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807246/7518910528_IMG_7757-1024x683_ijk12i.jpg`,
          }}
        />
        <Paragraph>
          塞維利亞王宮的後花園，花園內還有一座迷宮，可以溜溜繞繞
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807246/7518910528_IMG_7768-1024x683_tai5pv.jpg`,
          }}
        />
        <Paragraph>發現好漂亮的花牆</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807246/7518910528_IMG_7790-1024x683_zin7jx.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807247/7518910528_IMG_7796-1024x683_dlyghh.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Catedral de Sevilla 塞維利亞主教堂" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745807246/7518910528_IMG_7777-1024x683_f0qcyx.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807248/7518910528_IMG_7798-1024x683_hhu1ke.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807247/7518910528_IMG_7794-1024x683_af9uoe.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745807247/7518910528_IMG_7797-1024x683_ytacof.jpg`,
            },
          ]}
        />
        <Paragraph>
          塞維利亞主教堂前身是阿拉伯穆瓦希德王朝建立的清真寺，後來被基督王朝改建成今日的樣貌
          <br />
          哥德式建築，擁有標誌性的摩爾式鐘樓，可飽覽城市景觀，還有哥倫布墳墓，進去參觀需要購票
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807248/7518910528_IMG_7802-1024x683_eja69m.jpg`,
          }}
        />
        <Paragraph>感覺非常有鬥牛發源地的味道</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745807249/IMG_9733-768x1024_ocdpdn.jpg`}
          text="晚餐就在這間小餐館簡單吃解決，然後邊看這陣子以來在熟悉不過的球賽<br />電視收訊不好斷斷續續，但還是幸運看到關鍵的進球<br />希望這個夜晚不要結束，每到晚上就感性爆發，一邊消化白天的衝擊、一邊放下奔波一天的身軀<br />唯獨腦袋還無法休息，毫不受控的高速運轉"
        />
      </Section>

      <Section>
        <SubTitle title="Metropol Parasol 都市陽傘" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807238/7516803456_IMG_7817-1024x683_npqxip.jpg`,
          }}
        />
        <Paragraph>
          塞維利亞不只有摩爾建築還有現代建築，看起來像一朵大蘑菇大家可以在底下休息乘涼
          <br />
          這裡我沒有實際到訪因為我已經在葡萄牙的路上，所以只能透過同行友人的照片一探究竟
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Seville 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745807248/7518910528_IMG_7803-1024x683_acry2i.jpg`,
          }}
        />
        <Paragraph>
          在風光明媚的安達魯西亞城市，佛朗明哥舞的起源地，這裡讓我感受到最原始原味的西班牙，揭開我對西班牙的所有印象
          <br />
          粉白黃、黃紅
          勾勒出整片城市的色彩，這裡有絕美的世界遺產西班牙廣場，到處也有摩爾的影子
          <br />
          西班牙之旅在這裡畫下句點，在這裡的每座城市真的一個比一個驚喜，而且各有特色，還有許多南邊的城市期待能快點造訪
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoSeville;
