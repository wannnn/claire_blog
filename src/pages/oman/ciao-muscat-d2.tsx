import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoMuscatD2 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿曼 – [馬斯喀特] 卡布斯蘇丹大清真寺" />
      <CreatedDate date={"2024-09-14"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791706/IMG_3294_gqzpyh.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="6 Dec 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791701/IMG_3211_ed9nir.jpg`,
          }}
        />
        <Paragraph>
          最後一個早上在阿曼馬斯喀特的行程 – 卡布斯蘇丹大清真寺
          <br />
          前一天晚上已經去加油站洗好車，結束後直接機場還車，前往下一個國家巴林
        </Paragraph>
      </Section>

      {/* Sultan Qaboos Grand Mosque */}
      <Section>
        <SubTitle title="Sultan Qaboos Grand Mosque 卡布斯蘇丹大清真寺" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791699/IMG_3213_wkkbsb.jpg`,
          }}
        />
        <Paragraph>
          卡布斯蘇丹大清真寺（或蘇丹卡布斯大清真寺）是阿曼的主清真寺，也是世界第三大的清真寺
          <br />
          非穆斯林的參觀時間在週六至週四上午8點到11點
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791700/IMG_3216_lmukqc.jpg`,
          }}
        />
        <Paragraph>
          大清真寺絕對是來阿曼馬斯喀特的必遊之地，每次觀賞清真寺複雜的設計和裝飾，都令人嘆為觀止
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791700/IMG_3240_ekkgwd.jpg`,
          }}
        />
        <Paragraph>
          好喜歡這個光影斜射進來， 漫步過去感受光線交錯的感覺～
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791703/IMG_3245_f3zvez.jpg`,
          }}
        />
        <Paragraph>一進入主祈禱廳，一名虔誠的穆斯林信徒印入眼簾</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791700/IMG_3246_bbjfdr.jpg`,
          }}
        />
        <Paragraph>
          阿曼這間清真寺在我眼中有混合現代的感覺，不完全是傳統伊斯蘭氛圍，來到阿曼絕對值得來欣賞其建築和藝術之美
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791708/IMG_4226-scaled_tjomzh.jpg`,
          }}
        />
        <Paragraph>
          主祈禱廳的施華洛世奇水晶吊燈，巨大手工編織地毯，實在令人瞠目結舌
          <br />
          在欣賞的同時，也有熱心的工作人員陪同我們做解說
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791710/IMG_4221-scaled_qmbzwv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791708/IMG_4225-scaled_aeujkx.jpg`,
            },
          ]}
        />
        <Paragraph>
          細緻的幾何圖案和鮮豔的色彩展現了伊斯蘭藝術，反映出阿曼的傳統工藝
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791701/IMG_3265_hippbz.jpg`,
          }}
        />
        <Paragraph>
          清真寺外頭的花園也整理的舒服整潔，地板也乾淨到發光
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791705/IMG_3267_b5dnwv.jpg`,
          }}
        />
        <Paragraph>來自世界各地的遊客以歐洲人偏多</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791701/IMG_3268_gzq3tf.jpg`,
          }}
        />
        <Paragraph>黃色大理石建構的牆面、柱子大器壯觀</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791702/IMG_3273_fbm5cq.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791705/IMG_3277_zzqqlp.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791704/IMG_3283-1_au5d4i.jpg`}
          text="我在卡布斯蘇丹大清真寺拍了超級多這種列柱光影交錯的照片😂 太喜歡了"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791708/IMG_3285_lagjp0.jpg`,
          }}
        />
        <Paragraph>
          一些清真寺建築的精緻細節，我喜歡伊斯蘭建築的繁複雕刻，充滿藝術性以及文化底蘊
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791703/IMG_3291_orarv1.jpg`,
          }}
        />
        <Paragraph>
          對於整個卡布斯蘇丹大清真寺逛下來我感覺非常寧靜舒適
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791707/IMG_3689-scaled_cnqs0l.jpg`,
          }}
        />
        <Paragraph>
          雖然卡布斯蘇丹大清真寺在一天當中的開放時間不長，但八點準時到時間也足夠逛
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791702/IMG_3298-1_nmp6zn.jpg`}
          text="時間差不多工作人員也在清場了
          <br />
            我們從這個出口離開
            <br />
            先脫掉身上超熱的袍子，準備前往機場還車"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791704/IMG_3709-scaled_ne5vr2.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791701/IMG_3713-scaled_xp4f8m.jpg`,
            },
          ]}
        />
        <Paragraph>
          搭乘阿曼航空前往巴林王國，感覺同班機的大多數乘客都是外籍移工來中東工作
          <br />
          窗外的藍天和地平線光線刺眼到眼睛會不舒服，飛到 UAE
          上空時仔細看下面還有個小棕梠島，還有油田？那幾顆圓圈應該是吧
          <br />
          落地巴林已是下午，機場在 Muharraq
          穆哈拉格島，但一開始就被巴林計程車司機坑一把
          😠，下車時不照跳錶數字結算，刻意人下車把刷卡機拿出來亂按一個數字轉移你注意力，收了兩倍價格，害我一來就對這裡印象不好
        </Paragraph>
      </Section>

      {/* Bahrain World Trade Center */}
      <Section>
        <SubTitle title="Bahrain World Trade Center 巴林世界貿易中心" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791706/IMG_3310-rotated_y8pzbv.jpg`}
          text="第一個景點是巴林的標誌性建築 –  巴林世界貿易中心
          <br />
        矗立在麥納麥的天際線上，將風力渦輪機融入設計中，表達永續能源的概念，一樓大廳是 Moda Mall，都沒什麼人，走進去又走出來我們叫了車前往 The Avenues，另一間大型購物中心，吃了一頓海鮮晚餐（每次落地第一餐都吃最貴XD）、隨意逛逛、俯瞰海邊，再回飯店"
        />
      </Section>
    </div>
  </div>
);

export default CiaoMuscatD2;
