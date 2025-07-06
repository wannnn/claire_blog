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

const CiaoMuharraq = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="巴林 - 穆哈拉格" />
      <CreatedDate date={"2024-09-14"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751808091/IMG_3374_iymkgn.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="7 Dec 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807869/IMG_3337_wconyb.jpg`,
          }}
        />
        <Paragraph>
          天氣很好的巴林☀️
          早上在飯店吃過了早餐(還蠻豐盛的)，今天的行程規劃是去大清真寺，逛完叫車去逛穆哈拉格島
          (Muharraq)，也就是機場所在的那個島，再回來我們飯店週邊逛紀念品店吃晚餐
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Al Fateh Grand Mosque جامع مركز أحمد الفاتح الإسلامي" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807868/IMG_3333_vzcuuk.jpg`,
          }}
        />
        <Paragraph>
          看了地圖，大清真寺只離我們住的地方 Ramada by Wyndham Bahrain (Adliya)
          走路 15
          分鐘，於是我們決定走路前往，沒想到走到一個十字路口那邊在大範圍施工，最後繞道
          Oasis Mall 才有機會過馬路到對面，12 月的巴林白天其實也是有點熱
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807867/IMG_3331_ugpee4.jpg`,
          }}
        />
        <Paragraph>每個清真寺都那麼乾淨的背後，連地板都會反光 </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807870/IMG_3322_bztirq.jpg`,
          }}
        />
        <Paragraph>
          在巴林大清真寺，遊客會被安排一位導覽，這是強制的，但也不收費，不過我覺得很不錯，除了觀賞清真寺，又可以更了解伊斯蘭教，不管你是否認同他的教義
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807867/IMG_3328-1_vi4qkl.jpg`,
          }}
        />
        <Paragraph>可蘭經第一章</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Our Old House مطعم ومقهى بيتنا القديم" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751807882/IMG_3766-1-scaled_ea6kwk.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751807882/IMG_3767-scaled_fkrhj0.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807872/IMG_3345_npqqlo.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751807886/IMG_4386-scaled_ymikw8.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751807884/IMG_3794-scaled_yzzfgg.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807874/IMG_3363_tjehj9.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807875/IMG_3364_ev6j5o.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751807888/IMG_3798_raigqt.jpg`}
          text=""
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807871/IMG_3365_xcxamq.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807876/IMG_3372_axd0ii.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Sa'ada Sea Front مشروع سعادة" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807877/IMG_3375_djynnj.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807879/IMG_3376_akhrsq.jpg`,
          }}
        />
        <Paragraph>海灣夕陽</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807881/IMG_3382_b2sp9w.jpg`,
          }}
        />
      </Section>
    </div>
  </div>
);

export default CiaoMuharraq;
