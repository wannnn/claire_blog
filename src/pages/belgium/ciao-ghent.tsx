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
import Video from "@root/components/typography/Video";
import Preface from "@root/components/typography/Preface";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoGhent = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="無意間逛到可以吃飯的教堂 - 根特(Ghent)" />
      <CreatedDate date={"2022-07-30"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552581/IMG_4232-scaled_chsqw5.jpg`,
          }}
        />
      </Section>

      <MyDate date={"20 July 2018"} />

      <Section>
        <Preface>
          搭上前往根特的火車，我不習慣向後移動的感覺，莎士比雅書店的袋子現在被我拿來放雜物，我捨不得丟掉它
        </Preface>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747552607/IMG_4160_nxdhso.mp4`}
        />
      </Section>

      <Section>
        <SubTitle title="Sint-Michielskerk 聖米歇爾大教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552577/IMG_4163_koaby1.jpg`,
          }}
        />
        <Paragraph>
          下火車後徒步前往市中心，首先遇到的是聖米歇爾大教堂，天氣實在不怎麼好，感覺隨時要下雨的樣子
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747552608/IMG_4169_l84wds.mp4`}
        />
        <Paragraph>兩個帥哥 sup 也太養眼了吧</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552576/IMG_4170-1024x576_twbglz.jpg`,
          }}
        />
        <Paragraph>
          初來到根特，覺得他的城市風貌和布魯日很像，在聖米歇爾橋上停一下，欣賞香草河岸及穀物河岸(Graslei
          and Korenlei)
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Sint-Niklaaskerk 聖尼古拉斯教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552577/IMG_4175_spjdqg.jpg`,
          }}
        />
        <Paragraph>
          從火車站到城中心大約走了20分鐘，本來有考慮要搭公車還是電車，但還是決定步行了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552578/IMG_4181_azvm4w.jpg`,
          }}
        />
        <Paragraph>
          聖尼古拉斯教堂建於西元 13 世紀，整體藝術風格為哥德式建築，與鐘樓
          Belfort、後面的聖巴夫主教座堂
          Sint-Baafskathedraal，成為根特最經典的「三塔連線」建築
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552577/IMG_4188_zf3ppc.jpg`,
          }}
        />
        <Paragraph>
          現在的 Graslei and Korenlei 已分別成為河岸兩旁的兩條街道名稱
          <br />
          Graslei 是香草與蔬菜的街道，在利斯河右岸
          <br />
          Korenlei 是小麥的街道，在利斯河左岸
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552578/IMG_4192_k8rhpa.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552577/IMG_4195_tiup92.jpg`,
          }}
        />
        <Paragraph>運河遊船在歐洲的河道城市隨處可見</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552578/IMG_4201_wkwf7b.jpg`,
          }}
        />
        <Paragraph>
          根特的鼻子糖👃，是這邊特別的零食，看起來很可愛但我不覺得我會喜歡吃，所以就沒有買了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552580/IMG_4202_ehg18i.jpg`,
          }}
        />
        <Paragraph>
          漫無目的的我穿梭在各個街巷，根特的遊客相比布魯日更多，可能是人們更集中
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552580/IMG_4207_wasrsx.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552579/IMG_4208_qkzrwv.jpg`,
          }}
        />
        <Paragraph>
          河岸兩旁餐廳林立，當時的我老實說有些旅遊疲乏，加上天氣又灰濛濛的，有些提不起勁好好享受
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747552579/IMG_4215_f15ass.jpg`}
          text="薯條當正餐，這是我在根特唯一吃的食物"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552581/IMG_4222_jcfxci.jpg`,
          }}
        />
        <Paragraph>
          對面緊鄰河畔的戶外座位太享受了吧，之前在希臘也有很多像這樣的店家
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552580/IMG_4239_fl6toy.jpg`,
          }}
        />

        <Paragraph>不只河岸邊，大街小巷都遍佈著餐廳</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552582/IMG_4241_pm34wp.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552589/IMG_4247_qxow1o.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552587/IMG_4251_bwxxig.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Sint-Jacobskerk 聖雅各伯堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552582/IMG_4263_xgw9gj.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552587/IMG_4258_fcjdn1.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552583/IMG_4264_pipf2k.jpg`,
          }}
        />
        <Paragraph>
          我無意間走進去的一座教堂，發現裡面居然能用餐！！沒想到這是我在小小根特駐足的過程中發現的最大驚喜
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747552603/IMG_4257_gpx77d.mp4`}
        />
        <Paragraph>
          還是覺得很酷，我應該坐下來喝一杯才對
          <br />
          其實在教堂外剛好有 Bij Sint-Jacobs 跳蚤市場，是週末才有，剛好被我遇見
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Het Belfort van Gent 根特鐘樓" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552583/IMG_4272_c94hgy.jpg`,
          }}
        />
        <Paragraph>
          根特鐘樓在1999年，與比利時的32座鐘樓列入世界遺產，右邊是市政廳
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747552611/IMG_4298_cawywe.mp4`}
        />
        <Paragraph>在看表演的過程中剛好下起雨，雨中享受也是蠻棒的</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552585/IMG_4289_ndkzc6.jpg`,
          }}
        />
        <Paragraph>
          還好雨停得快，再次抬頭望一下根特的天空，感覺街上越來越擁擠了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552585/IMG_4299_ascti0.jpg`,
          }}
        />
        <Paragraph>真的是短暫的停留，大約六小時的根特快閃</Paragraph>
      </Section>

      <Section>
        <SubTitle title="根特對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747552585/IMG_4301_afrego.jpg`,
          }}
        />
        <Paragraph>
          這是快到布魯塞爾的時候火車上拍的
          <br />
          河岸城市對我來說總是吸引人，在根特這小而美的城市，是時間的不足所以也沒有挖掘的特別深入，真的可以說是簡單的城市巡禮而已，但該去的景點都有踩到，還是有些小驚喜，根特的
          Stepped Gable
          山形屋也是我覺得很可愛的，如果可以的話我覺得一定要找間河岸咖啡廳，度過悠閒放空的午後，因為在像根特這樣的中世紀小鎮，除了要懂享受還是要享受
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoGhent;
