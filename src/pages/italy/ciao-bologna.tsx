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
import Preface from "@root/components/typography/Preface";
import VideoTextRow from "@root/components/typography/VideoTextRow";

const CiaoBologna = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="世界最古老大學、拱廊之城 - 波隆那(Bologna)" />
      <CreatedDate date={"2022-01-31"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455933/7516758736_IMG_7405-scaled_iogqnn.jpg`,
          }}
        />
      </Section>

      <MyDate date={"26 May 2018"} />

      <Section>
        <Preface>
          波隆那位於義大利最重要公路和鐵路樞紐上，是我們前往威尼斯中途經過並且短暫停留的地方，說到這次威尼斯之行也是很突然，下午還在喝奶酒吃哈密瓜猶豫著是否要去，結果就被盧到答應了，在簡單吃完晚餐(我自己做的Kebab!
          超市買皮把喜歡的食材丟進去包一包) 看完足球賽後，我們出發搭 FlixBus
          夜車
        </Preface>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747455957/IMG_9696_g0offs.mp4`}
          text="這個影片不得不放上來，我們中途停靠一個休息站，某人尿尿完沒有上車，所以我打給他 然後去前面和司機說，司機唸了一大串，我只聽得懂其中一句髒話，最後還是回頭去載這個天兵，實在是太鬧了啦！上車假裝不認識他😂"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455942/IMG_9699-1024x768_az9gm5.jpg`,
          }}
        />
        <Paragraph>
          好不容易先抵達了波隆那，已經是清晨，我們會在這邊停留幾個小時，再轉乘其他巴士到威尼斯
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455949/IMG_9706-1024x768_izdhm6.jpg`,
          }}
        />
        <Paragraph>
          說到波隆那呢他是非常非常古老的城市、義大利文藝復興時期重要的城市，也是個充滿活力和國際化的大學城
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455926/7516758736_IMG_7394-1024x683_lzdhfu.jpg`,
          }}
        />
        <Paragraph>
          除此之外 波隆那還擁有強大的工業傳統、高度發達的社會福利
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455926/7516758736_IMG_7406-1024x683_c9lbek.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Università di Bologna 波隆那大學" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455926/7516758736_IMG_7407-1024x683_jt3u0f.jpg`,
          }}
        />
        <Paragraph>波隆那大學是世界最古老的大學</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455927/7516758736_IMG_7415-1024x683_jivlyi.jpg`,
          }}
        />
        <Paragraph>
          環繞在中世紀古老大學四周，迷人的拱廊，還有值得參觀的博物館
          只可惜此次波隆那只是經過
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747455981/7516758736_MVI_7417_lxwvpa.mp4`}
        />
        <Paragraph>
          在波隆那學生喝醉似乎很常見，才六點多而已
          我們就在路上遇到好多剛喝完的學生，伴隨摔酒瓶聲
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747455929/7516758736_IMG_7422-1024x683_lw3wls.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455931/7516758736_IMG_7421-1024x683_gjjsmg.jpg`,
            },
          ]}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455928/7516758736_IMG_7420-1024x683_lcnm4y.jpg`,
          }}
        />
        <Paragraph>路上超級髒亂！不知道昨天到底狂歡了什麼</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455940/7516758736_IMG_7438-1024x683_yjiqjn.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Le due Torri: Garisenda e degli Asinelli 波隆那雙塔" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455930/7516758736_IMG_7424-1024x683_dz1hmu.jpg`,
          }}
        />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747455927/7516758736_IMG_7435-1024x683_cvds7q.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455932/7516758736_IMG_7440-1024x683_lasnki.jpg`,
            },
          ]}
        />
        <Paragraph>
          波隆納城市的地標象徵，由 12 世紀的貴族世家所建，可一覽城市美景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455934/7516758736_IMG_7442-1024x683_wggnbd.jpg`,
          }}
        />
        <Paragraph>早起的鳥兒才能拍到空無一人的街景</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455933/7516758736_IMG_7443-1024x683_hxvyfg.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747455937/7516758736_IMG_7445-1024x683_i2ew92.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455936/7516758736_IMG_7448-1024x683_pmoxmf.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455930/7516758736_IMG_7450-1024x683_jwberq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455935/7516758736_IMG_7449-1024x683_uxskrc.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455947/7516758736_IMG_7475-1024x683_tzkgpe.jpg`,
          }}
        />
        <Paragraph>
          走著走著會發現波隆那人行道常見這種拱門式迴廊建築，是這裡的一大特色！
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747455939/7516758736_IMG_7455-1024x683_cfgjlj.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455936/7516758736_IMG_7458-1024x683_wcfasy.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455956/7516758736_IMG_7472-1024x683_odvvdr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747455946/7516758736_IMG_7464-1024x683_uukec3.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455950/7516758736_IMG_7478-1024x683_ptb3bw.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455938/7516758736_IMG_7480-1024x683_vtruov.jpg`,
          }}
        />
        <Paragraph>軟爛狗</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455945/7516758736_IMG_7484-1024x683_axgltf.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Piazza Maggiore 波隆那主廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455942/7516758736_IMG_7487-1024x683_et5se4.jpg`,
          }}
        />
        <Paragraph>
          波隆納主廣場周邊圍繞著海神噴泉(Fontana di
          Nettuno)、聖白托略大殿(Basilica di San Petronio)、公證人宮(Palazzo dei
          Notai)、達古修宮(Palazzo d&apos;Accursio)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455949/7516758736_IMG_7492-1024x683_jtk8g7.jpg`,
          }}
        />
        <Paragraph>
          廣場旁中世紀和文藝復興時期的建築林立，還有眾多咖啡館
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Basilica di San Petronio 聖白托略大殿" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455952/7516758736_IMG_7495-1024x683_aprinf.jpg`,
          }}
        />
        <Paragraph>
          聖白拖略大殿是世界第五大教堂，尚未完工的正面立面很難讓人不注意到
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455943/7516758736_IMG_7491-1024x683_fvjg6w.jpg`,
          }}
        />
        <Paragraph>
          教堂內部的色系我很喜歡，比較少有看到粉紅色的，剛好早晨的陽光灑進來，感覺非常棒
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Fontana del Nettuno 海神噴泉" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455952/7516758736_IMG_7500-1024x683_v2m2xz.jpg`,
          }}
        />
        <Paragraph>
          青銅色的海神雕像在廣場上引人注目，也是波隆那的重要地標
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455947/7516758736_IMG_7497-1024x683_ekr0gb.jpg`,
          }}
        />
        <Paragraph>好害羞～</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455953/7516758736_IMG_7501-1024x683_cpctqg.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455955/7516758736_IMG_7504-1024x683_krspfe.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Cattedrale Metropolitana di San Pietro 聖伯多祿主教座堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455944/7516758736_IMG_7507-1024x683_ejafwi.jpg`,
          }}
        />
        <Paragraph>這是一座天主教堂，巴洛克式建築外觀宏偉內部莊嚴</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455951/7516758736_IMG_7510-1024x683_xjmy7j.jpg`,
          }}
        />
        <Paragraph>結束波隆那市區遊覽，我們要繼續前往威尼斯了</Paragraph>
      </Section>

      <Section>
        <SubTitle title="波隆那對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747455943/7516758736_IMG_7513-1024x683_mljxdt.jpg`,
          }}
        />
        <Paragraph>
          波隆那這座城市雖然我們停留的短暫，從踏入的第一刻就能感受到義大利的中世紀風情及文藝氣息，在清晨時分隨意漫晃波隆那市區、欣賞保存完善的古典建築、世界最古老大學的學生酒醉？以及無限的拱廊街道，波隆那獨特的景色我很喜歡，不是在人潮眾多的時段造訪也更能專注欣賞波隆那的特色，就缺這次沒有品嚐到美食了！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBologna;
