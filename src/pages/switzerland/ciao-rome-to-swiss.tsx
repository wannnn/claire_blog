import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import Preface from "@root/components/typography/Preface";

const CiaoRomeToSwiss = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="從羅馬出發瑞士！" />
      <CreatedDate date={"2021-07-22"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022732/IMG_9218_e416cr.jpg`,
          }}
        />
      </Section>

      <MyDate date={"April 12 2018"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746023581/IMG_4296-scaled_milnke.jpg`,
          }}
        />
        <Preface>
          終於到我的瑞士系列啦 🎉
          <br />
          四月初復活節才去佛羅倫斯玩回來，不到 10 天又要玩一波了！
        </Preface>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746022733/IMG_4299-768x1024_cgbumi.jpg`}
          text="上完語言課，下課立馬回家整理行李出發羅馬達文西機場！
          <br /><br />
          我們在交換期間安排了一個小旅行，原先很想去摩洛哥的但是要簽證，最後於是決定去我們目中最像童話故事最夢幻的瑞士🇨🇭"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022731/IMG_4304-1024x768_c0etdq.jpg`,
          }}
        />
        <Paragraph>
          傍晚的航班，預計抵達蘇黎世已經是晚上
          <br />
          我們的行程是蘇黎世進，日內瓦出，而且我們會租車
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022732/IMG_4318-1024x768_p7qa8v.jpg`,
          }}
        />
        <Paragraph>
          出發！
          <br />
          坐靠窗就是讚 👍 這個視角很棒
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746022732/IMG_4315-scaled_tlbzpc.jpg`,
              caption: "起飛前總是掩不住心裡的興奮",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746022733/IMG_4321-scaled_x4xmyc.jpg`,
              caption: "才過沒多就我們就一團棉花糖包圍了",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022732/IMG_4331-1024x768_lrdgrz.jpg`,
          }}
        />
        <Paragraph>從羅馬到瑞士很快！全程來不及睡著就已經降落</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022733/IMG_4332-1024x768_tncbhs.jpg`,
          }}
        />
        <Paragraph>下飛機就有 Roger Federer 的歡迎哈哈哈</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022732/IMG_4949-1024x768_ghzcxc.jpg`,
          }}
        />
        <Paragraph>
          和我們的車合照，到底為什麼照片好糊好像很有歷史感一樣
          <br />
          總之，一群很 ㄎㄧㄤ 的人要上路了。瑞士人要小心 😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022733/IMG_4344-1024x768_mtrlpe.jpg`,
          }}
        />
        <Paragraph>
          抵達我們的飯店，就在蘇黎世車站不遠處
          <br />
          check in
          完後我們出來附近亂晃一下，時間還沒有到很晚但看起來卻好像深夜12點一樣
          <br />
          也沒什麼吃的，還好出發前有先去羅馬超市買了一堆罐頭糧食
          <br />
          多少省一下瑞士這趟的旅費，交換生的窮遊先從飲食下手 XD
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746022733/IMG_4346-1024x768_pzlwpe.jpg`,
          }}
        />
        <Paragraph>
          房間很乾淨，到瑞士後第一個晚上就這樣落幕，準備隔天大玩蘇黎世了 👋
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoRomeToSwiss;
