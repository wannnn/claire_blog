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
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoBruges = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="保存完好的中世紀小鎮 - 布魯日(Bruges)" />
      <CreatedDate date={"2022-04-17"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457593/IMG_3995-scaled_tpzcmp.jpg`,
          }}
        />
      </Section>

      <MyDate date={"19 July 2018"} />

      <Section>
        <Preface>
          我從巴黎搭巴士來到了布魯日，這個保存完好的中世紀城市，剛抵達就被溫暖的夕陽包圍，巴士停靠在布魯日火車站，離老城還有步行約15-20分鐘的距離，而我拖著行李經過石子路真的是一大折磨。布魯日不大所以我安排在這邊住一晚，隔天大約中午去根特
        </Preface>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457577/IMG_3919-1024x576_tjumii.jpg`,
          }}
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747457655/IMG_3937_mfss3f.mp4`}
        />
        <Paragraph>
          Check in
          完青旅之後就是城市探索的時間，七月的白天長，可以在外面逗留很久
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457578/IMG_3943-1024x768_rjtsl9.jpg`,
          }}
        />
        <Paragraph>
          而我住的那間青年旅館比較外圍，在往老城區的路上兩旁到是停了很多車，不過都沒遇到什麼人
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747457633/IMG_3956_zhgyhr.mp4`}
        />
        <Paragraph>
          老實說到布魯日沒有做太多安排，因為景點也蠻集中的，就是隨心所欲的慢走慢看
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457577/IMG_3944-1024x576_k6os2u.jpg`,
          }}
        />
        <Paragraph>
          布魯日從 13
          世紀開始成為國際貿易中心，並且帶來財富，因此在市中心建造了許多華麗的哥德式建築及教堂
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747457588/IMG_3950-scaled_eqx91o.jpg`}
          text="布魯日的階梯形建築真的是讓我覺得典雅可愛"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457579/IMG_3982-1024x576_ypw6sa.jpg`,
          }}
        />
        <Paragraph>
          好喜歡這陽光，這條石子路和兩旁在咖啡店享受午後的人們，人生就該如此美好
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Rozenhoedkaai(玫瑰碼頭)" />
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747457645/IMG_3972_fwp6gh.mp4`}
        />
        <Paragraph>布魯日也和威尼斯一樣，是座充滿運河的城市</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457601/IMG_3990_n6cqtx.jpg`,
          }}
        />
        <Paragraph>運河一景，旁邊的山形屋真是布魯日的一大特色了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457580/IMG_3978-1024x768_yq5gne.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457580/IMG_3984-1024x576_dnsvv8.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457594/IMG_4015_ko4pkx.jpg`,
          }}
        />
        <Paragraph>老城巧克力的氣味，空氣中充滿甜甜的味道</Paragraph>
      </Section>

      <Section>
        <SubTitle title="De Burg(城堡廣場)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457582/IMG_4020-1024x768_skqcws.jpg`,
          }}
        />
        <Paragraph>
          城堡廣場是布魯日最古老的核心之一，古老的鵝卵石鋪面，並且四周圍繞著哥德式建築、商店、酒吧和餐廳
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457583/IMG_4022-1024x768_egtpkf.jpg`,
          }}
        />
        <Paragraph>
          廣場周圍還有一些歷史建築，包括布魯日市政廳、舊民事登記處、聖血聖殿、聖多納廷教長樓...等等
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747457635/IMG_4032_nfe2ts.mp4`}
        />
        <Paragraph>
          漸漸的到了 16
          世紀布魯日已經離開全盛時期，面臨經濟重鎮遷移及產業轉型、河道淤積等問題
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457583/IMG_4029-1024x576_bpjcba.jpg`,
          }}
        />
        <Paragraph>
          雖然布魯日已從世界慢慢淡出，但整座城市保存完好的中世紀樣貌也在2000
          年列入世界文化遺產當中
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457584/IMG_4040-1024x576_zdfzen.jpg`,
          }}
        />
        <Paragraph>這個畫面好有渡假感</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747457585/IMG_4049-1024x768_uyh1df.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747457591/IMG_4052-scaled_np3yaq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747457603/IMG_4066_m3gxyw.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747457586/IMG_4077-1024x768_xaf9v7.jpg`,
            },
          ]}
        />
        <Paragraph>
          布魯日最有魅力的莫過於這吸眼球的街道及建築，美麗寂靜的氛圍再加上運河經過，瞬間想直接定居
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457601/IMG_4087_unjqs6.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457586/IMG_4092-1024x768_edaqdu.jpg`,
          }}
        />
        <Paragraph>看到這一整排的餐廳真的是很想找一間進去</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Provinciaal Hof(布魯日省議會宮)" />
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747457647/IMG_4097_uq6k4h.mp4`}
        />
        <Paragraph>我好像遇到什麼活動了! 遠遠走過來就聽到音樂聲</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457598/IMG_4100_kurd7x.jpg`,
          }}
        />
        <Paragraph>
          我聽到了幾首還不錯的歌曲，我就問旁邊的奶奶說唱這的歌手是誰，奶奶超熱心回答我說是他們的偶像，還叫我一定要去前面看他，因為我沒有買票進場只有在外圍看，她還用口水舔了他的手章蓋在我手背上看能不能印過去😂
          真的是讓我忘不了
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Belfort(布魯日鐘樓)" />
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747457631/IMG_4095_knuwmn.mp4`}
        />
        <Paragraph>
          原來這個歌手叫 Niels Destadsbader 其中有兩首 <strong>Hey Pa</strong>{" "}
          和 <strong>Speeltijd</strong>{" "}
          我覺得很好聽，現在每次聽到還是會讓我回想起布魯日小鎮的感覺
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747457595/IMG_4104_g5ojxg.jpg`}
          text="薯條最好吃哩🍟"
        />
      </Section>

      <Section>
        <SubTitle title="Grote Markt(市集廣場)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457596/IMG_4106_iv0q05.jpg`,
          }}
        />
        <Paragraph>
          廣場 10
          世紀就被作為市場使用，這裡我想應該是無時無刻都聚集很多人，布魯日的歷史中心、觀光熱點
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457592/IMG_4114_jqvnj0.jpg`,
          }}
        />
        <Paragraph>
          晚上的布魯日有著和白天截然不同的感覺，這張也是明信片上的角度，礙於手機拍攝而且不夠廣角，拍起來不是很好看😂
          不過眼睛的感受是很震撼的！平靜的水面上倒映著百年以上的歷史建築，伴隨著溫暖燈光，多平靜且美好的晚上
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747457608/IMG_4132_cabdro.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747457608/IMG_4125_c2qtdu.jpg`,
            },
          ]}
        />
        <Paragraph>
          早上從青年旅館退房，從旅館走到火車站的路上，再次經過昨日的景點，感受一下早上的布魯日鬧區
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457590/IMG_4130-1024x768_cb3ksp.jpg`,
          }}
        />
        <Paragraph>
          又到了玫瑰碼頭，太陽稍微比較露臉，來乘船的遊客變多了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457605/IMG_4136_jegv2e.jpg`,
          }}
        />
        <Paragraph>天啊感覺真是太復古了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457606/IMG_4135_hrmnpk.jpg`,
          }}
        />
        <Paragraph>這裡不管是白天、傍晚或晚上都絕對值得為他停留</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457600/IMG_4142_eevwvv.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457606/IMG_4151_jduhaz.jpg`,
          }}
        />
        <Paragraph>一個可愛的布魯日小角落</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457590/IMG_4149-1024x576_y6afwc.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457603/IMG_4155_bgvlw4.jpg`,
          }}
        />
        <Paragraph>我會想念這石子路的，但不是拖著行李的時候</Paragraph>
      </Section>

      <Section>
        <SubTitle title="布魯日對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747457598/IMG_4062_hxjap2.jpg`,
          }}
        />
        <Paragraph>
          比利時最具中世紀韻味的小鎮非布魯日莫屬，充滿歷史氣息的古城搭配悠悠的運河，而你穿梭在這個有故事的城市，用相機和文字記下這些所見所聞，無意間布魯日鐘樓下的音樂會，為我這趟旅程增添了一抹色彩，讓這塊旅行畫布越來越繽紛
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBruges;
