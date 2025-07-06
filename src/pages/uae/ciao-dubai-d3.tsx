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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoTextRow from "@root/components/typography/VideoTextRow";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import Video from "@root/components/typography/Video";

const CiaoDubaiD3 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="杜拜路跑🏃‍♀️ F1 阿布達比 GP 2023🏎️ – Day3" />
      <CreatedDate date={"2024-01-15"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751785101/IMG_1974_qldtql.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="26 Nov 2023" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751783109/IMG_2007-scaled_xw3lun.jpg`}
          text="路跑當天四點多起床，杜拜捷運凌晨就開始營運了<br />滿滿的橘衣人潮～"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751783109/IMG_2041-scaled_dp9ykb.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751783102/IMG_2117-scaled_dvd9bi.jpg`,
            },
          ]}
        />
        <Paragraph>
          集合點在未來博物館，天還沒亮，趁這個時候多拍幾張照
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751783127/IMG_2278_qsucdp.mp4`}
          text="這感覺就像超大型的戶外派對哈哈哈<br />享受杜拜路跑！"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751783110/IMG_2286-scaled_n0b5oc.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751783108/IMG_2288-scaled_glbmjs.jpg`,
            },
          ]}
        />
        <Paragraph>
          看著天色漸漸亮起來，呈現漂亮的粉橘色，兩旁聳立的高樓大廈將中間圍著，不管是開車經過這條路，都覺得我好渺小
          <br />
          參加的人很多是來杜拜工作的外籍移工，主持人將每個國家都 cue
          了一遍，有菲律賓、巴基斯坦、印度等等的國家
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751783111/IMG_2294-scaled_grtao5.jpg`}
          text="終於開跑了！！這次的杜拜路跑有 10K 和 5K，我們志在參加"
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1751783125/IMG_2295_hkcmo8.mp4`}
          text="開跑之後動不太起來 😅<br />不曉得是因為人太多 還是5K的大家想偷懶ＸＤ"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783116/IMG_2149-scaled_ejkxli.jpg`,
          }}
        />
        <Paragraph>
          機會難得可以走在 Sheikh Zayed 路上，超酷！不過這人群實在是…
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751783108/IMG_2179-scaled_rdljkc.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751783112/IMG_2182-scaled_eg2geg.jpg`,
            },
          ]}
        />
        <Paragraph>好不容易人潮比較稀疏了，跑起來！</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751783113/IMG_2233-scaled_dbtnea.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751783117/IMG_2239-scaled_jtlue1.jpg`,
            },
          ]}
        />
        <Paragraph>
          5K 的終點在杜拜 Mall，在路中間和哈里發塔合照，機會難得
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751783104/IMG_2302-scaled_hoidzk.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751783115/IMG_2316-scaled_uxphid.jpg`,
            },
          ]}
        />
        <Paragraph>哈里發塔總看不膩</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751783106/IMG_2198-scaled_xittjt.jpg`}
          text="為我的杜拜路跑劃下句點，早上雖然沒怎麼跑到但也走夠多路，從飯店出發就走了近40分鐘到捷運站，走完5K後現在一樣要再搭捷運回去"
        />
      </Section>

      {/* Yas Marina Circuit */}
      <Section>
        <SubTitle title="Yas Marina Circuit" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783120/IMG_2645-scaled_dholdi.jpg`,
          }}
        />
        <Paragraph>
          下午我們從杜拜飯店出發，來到阿布達比 Yas 島的碼頭賽道看 GP 決賽
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783099/IMG_1892_uo3nai.jpg`,
          }}
        />
        <Paragraph>
          人生第一次看 F1賽車🏎️
          很興奮，可以看到對面港灣已經停了不少遊艇，上面的人開始狂歡
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783114/IMG_2257-scaled_t6eahc.jpg`,
          }}
        />
        <Paragraph>平常沒有在看賽車的，感受氣氛也覺得很熱血</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783098/IMG_1910_lvq0u0.jpg`,
          }}
        />
        <Paragraph>
          親臨現場才知道賽車呼嘯而過有多大聲，看到超車時很興奮、看到車輪冒火光心裡很擔心😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783100/IMG_1940_pdm9od.jpg`,
          }}
        />
        <Paragraph>此時比賽已接近尾聲，快跑完58圈了</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1751785720/IMG_2318_udp8nz.mp4`}
        />
        <Paragraph>比賽結束！美麗的煙火結尾</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783103/IMG_2321-scaled_yh7m6g.jpg`,
          }}
        />
        <Paragraph>值得留念一下，畢竟也不知道有沒有下一次哈哈哈</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          itemsPerRow={3}
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751783105/IMG_2693-scaled_wfailt.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751783102/IMG_2694-scaled_uzax4d.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751783101/IMG_2696-scaled_es1emw.jpg`,
            },
          ]}
        />
        <Paragraph>看完 F1 後真的餓慘，餓的時候什麼都好吃</Paragraph>
      </Section>

      {/* Café del Mar Restaurant */}
      <Section>
        <SubTitle title="Café del Mar Restaurant" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751783119/IMG_2692-scaled_syyvsj.jpg`,
          }}
        />
        <Paragraph>
          用酒吧結束超累的路跑賽車日，非常充實
          也都是很難得的體驗，這篇寫得有夠流水帳，不過當下的開心和享受都已牢牢記在心裡，也是在杜拜除了跳傘之外最精彩的一天！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoDubaiD3;
