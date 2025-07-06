import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import Preface from "@root/components/typography/Preface";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoKinabalu = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="沙巴神山公園 - 京那巴魯山 (Kinabalu) Day3" />
      <CreatedDate date={"2023-01-16"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570693/IMG_0238-scaled_gzgt3v.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date={"Dec 31 2022 (Day3)"} />
        <Preface>
          在亞庇的第三天，也是 2022 年最後一天，我們一樣參加了 day tour
          前往馬來群島最高的山 –
          京那峇魯山，昨天在沙比島時導遊就一直說最後一天去神山一定會大塞車，讓我有點擔心
          <br />
          早上大約七點半一樣小巴來接我們，今日同團的還有一組日本遊客，前往神山的路況並不好，時不時就像在坐雲霄飛車那樣，大家要有心理準備😂
          而且小巴司機都開超快，不過幸運的是這一路上我們並沒有遇到什麼塞車
        </Preface>
      </Section>

      <Section>
        <SubTitle title="Mt Kinabalu Viewing Platform" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570692/IMG_0235-1024x683_splcte.jpg`,
          }}
        />
        <Paragraph>
          行程第一站我們到觀賞神山的景觀平台，身為東南亞第一高峰真的是蠻壯觀的，雲朵繚繞在山頂附近，如果有機會的話真的很想登頂看看，這次預算不足，而且每年登山費用都在調高
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Bombon Kg. Marakau (Fish Spa)" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747570718/IMG_7401-768x1024_tuhaax.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570719/IMG_7404-768x1024_fmzbze.jpg`,
            },
          ]}
        />
        <Paragraph>
          下個點我們前往馬拉庫村 (Marakau
          village)，在當地的小溪讓鯉魚按摩腳，我們會把飼料握在手中或夾在腳縫中把魚吸引過來，然後他就會瘋狂吸你哈哈哈(他們沒有牙齒)，而且吸力還蠻大的誒！還把我腳趾吸住感覺超奇妙
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570705/IMG_0255-1024x683_iw0ng8.jpg`,
          }}
        />
        <Paragraph>
          看大王花 (Rafflesia)
          是選擇性行程，如果想看的話費用是一人30RM，與我們同行的兩位日本人沒有興趣，我和男友想說都來了一定要看看世界最大朵的花本人長怎樣，且非常幸運今天有三朵大王花盛開！於是導遊就帶我們進去了
          其他遊客在車上等待
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747570693/IMG_0242-1024x683_mwd4qe.jpg`,
              caption: "baby 時的大王花",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570700/IMG_0254-1024x683_fan5ey.jpg`,
              caption: "超過三天的大王花",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570701/IMG_0244-1024x683_x1nfov.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570695/IMG_0247-1024x683_usz3mx.jpg`,
            },
          ]}
        />
        <Paragraph>
          Rafflesia
          主要分布在東南亞婆羅洲、爪哇、蘇門答臘一帶的熱帶雨林中，花瓣數有五片，少數六片
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570702/IMG_0251-1024x683_oaerwp.jpg`,
          }}
        />
        <Paragraph>
          大王花沒有根、莖、葉，無法進行光合作用，他的生存方式是寄生在一些藤蔓上，要經過7個月才會盛開，而且開花期只有短短的3~4天，沒有特定的開花季節，花期結束後就凋謝成黑色一坨在那邊
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747570725/IMG_7411-1024x768_g6bjt7.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570716/IMG_7409-1024x768_fvbm8p.jpg`,
            },
          ]}
        />
        <Paragraph>
          因為花期很短，所以親眼目睹到大王花的我們真的很開心！
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747570724/IMG_7407-768x1024_kaq7yw.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570728/IMG_7413-768x1024_hj34th.jpg`,
            },
          ]}
        />
        <Paragraph>
          導遊依蓮幫我們拍好多照片而且也解說的很詳細😊
          為了保護大王花外面都會圍出一個距離，不過這三朵我完完全全沒聞到臭味耶！怎麼和我想的不一樣
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Poring Hot Spring (波令溫泉)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570727/IMG_7422-1024x768_z7lo2y.jpg`,
          }}
        />
        <Paragraph>馬來西亞第一個世界自然遺產——神山公園</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570723/IMG_7389-1024x768_bmnmdm.jpg`,
          }}
        />
        <Paragraph>
          因為行程時間的關係導遊帶我們先去走樹頂吊橋/樹冠步道，走完後也沒時間可以來泡腳了
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747570717/IMG_7386-768x1024_kewby5.jpg`}
          text="前往吊橋還需爬一小段山，但都有木棧步道算很好走，也有許多巨木等自然景觀能欣賞，大口呼吸芬多精，如果加上吊橋的話全程大約30-40分鐘 (看你在上面拍多久)"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747570720/IMG_7417-768x1024_j9l3hf.jpg`,
              caption: "準備要開始走我們最期待的吊橋了！",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570728/IMG_7416-768x1024_sgdqnc.jpg`,
              caption: "我穿這樣好不適合爬山，完全不透氣",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570724/IMG_0262-1024x683_pox3yn.jpg`,
          }}
        />
        <Paragraph>
          最刺激的就是樹冠步道吊橋了 (Canopy Walkway Suspension
          Bridge)，只要別隨便往下看都不會腿軟！只要好好鳥瞰沙巴壯麗的自然景觀
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570708/IMG_0265-1024x683_rzs3i8.jpg`,
          }}
        />
        <Paragraph>
          原本以為只有一小段，沒想到一段連接一棵樹接著還有一段連接另一棵樹...
          橋樑總長超過175公尺、離地40公尺
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570696/IMG_0276-1024x683_n6vsyh.jpg`,
          }}
        />
        <Paragraph>
          造型奇特的樹，遠方還有層層疊疊的山，實在非常讚嘆大自然帶給你的震撼
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747570697/IMG_0275-683x1024_uu17rg.jpg`}
          text="拍了一張意義不明的照片哈哈哈😂"
        />
      </Section>

      <Section>
        <SubTitle title="Desa Cattle Dairy Farm (德薩奶牛場)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570703/IMG_0296-1024x683_rplkzq.jpg`,
          }}
        />
        <Paragraph>
          還好導遊依他的經驗評估把奶牛場放在今日最後一個順序，才讓我們當天的行程順順利利都有去到而且沒塞車！
          <br />
          但不得不說去奶牛場的路真的非！常！差！地上超多坑坑洞洞，而且是大的洞喔，司機都非常經驗老道了都能完美閃過
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747570699/IMG_0287-1024x683_mj2aoo.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570698/IMG_0288-1024x683_xcqahw.jpg`,
            },
          ]}
        />
        <Paragraph>
          小牛區這邊可以餵草餵奶，覺得也太萌了小牛隻好可愛，這裡除了觀光團之外
          當地遊客也是蠻多的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570694/IMG_0293-1024x683_ezwhbf.jpg`,
          }}
        />
        <Paragraph>原味的牛奶優格冰，覺得非常好吃味道是濃郁的！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570708/IMG_0291-1024x683_cdbj1t.jpg`,
          }}
        />
        <Paragraph>牛牛們站一排被擠奶</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570707/IMG_0298-1024x683_m0swh7.jpg`,
          }}
        />
        <Paragraph>山上明顯有涼意</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570712/IMG_0302-1024x683_abgbqu.jpg`,
          }}
        />
        <Paragraph>
          在奶牛場的時候導遊就問有沒有要吃烤山豬肉她要先訂(是自費呦不包含在行程內)，我們這團都沒吃，不過還是讓我們下車去拍張照，我想應該是和旅行社合作店家吧
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570711/IMG_0319-1024x683_hrahc6.jpg`,
          }}
        />
        <Paragraph>
          神山一日遊順利的在我們傍晚六點多結束回到亞庇，回飯店小休息一下出門覓食
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570713/IMG_7425-1024x768_n5soxc.jpg`,
          }}
        />
        <Paragraph>
          今天是跨年夜，我們其實也不曉得要去哪跨年，所以又來了 KK waterfront
          想說酒吧比較多應該越夜越美麗
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570710/IMG_0308-1024x683_n889wx.jpg`,
          }}
        />
        <Paragraph>
          本來以為會非常多人，沒想到卻還好，早知道先在市區吃小吃再過來了
          才不用花比較貴的錢在這邊吃餐廳，我還點到雷的
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747570704/IMG_0310-1024x683_zclepg.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747570715/IMG_0318-1024x683_ygsmog.jpg`,
            },
          ]}
        />
        <Paragraph>
          居然還在這裡遇到我們的朋友 Jec 和家人來吃飯！實在是太巧啦
          隔天還要和她一起去逛加雅街假日市集
          <br />
          吃飽後我們在想還有三個多小時才12點，於是決定先離開去逛夜市
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747570709/IMG_0323-1024x683_nmjhrj.jpg`,
          }}
        />
        <Paragraph>
          廣場非常熱鬧有街頭表演，只是沒想到此時卻開始滴雨，依照昨天經驗我們怕越下越大所以馬上決定回飯店，結果似乎沒下下來，於是本想要在沙巴好好跨年的這個計畫就直接睡掉了😂
          <br />
          不過後來聽說海邊那有跨年煙火，現在也只能說服自己沒看到煙火沒關係！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="To be Continue..." />
        <Paragraph>
          2022
          年的最後一天我們造訪了東南亞的最高峰京那巴魯山，當地人也稱神山，親眼看見了令人驚豔的大王花，走過刺激的樹冠吊橋，還有奶牛場好吃的冰淇淋，沿途山路欣賞了許多美景、山上人家，隨著車身擺動的身體，上下搖晃，時而飛速前進，我都來不及拿起相機紀錄，透過後照鏡四目交接的雙眼，我心裡忍不住好奇，每天都是同條路上山是什麼感覺？
          <br />
          今天是幸運的一天，天氣和交通都是，晚上依舊又來到我們在KK最喜歡的海邊，感謝2022的所有，2023繼續好好生活和努力，我們的旅程也繼續
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoKinabalu;
