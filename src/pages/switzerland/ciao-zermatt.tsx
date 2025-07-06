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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import VideoGrid from "@root/components/typography/VideoGrid";
import VideoTextRow from "@root/components/typography/VideoTextRow";

const CiaoZermatt = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="Zermatt 滑雪，搭火車去 Gornergrat 看馬特洪峰！" />
      <CreatedDate date={"2021-09-18"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368511/20180419_180424_0117_a82vrw.jpg`,
          }}
        />
      </Section>

      <MyDate date={"19 April 2018"} />

      <Section>
        <Paragraph>
          一早走在鐵路旁，前往滑雪場搭纜車的路上
          <br />
          因為沒有車輛通行，所以策馬特很好地保留清新原貌，可以放心地大口呼吸
          <br />
          路上看到的都是電瓶車，會載一些行李..等等
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368518/IMG_7041-scaled_per69u.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368518/IMG_7047_trdp3e.jpg`,
          }}
        />
        <Paragraph>
          停下腳步欣賞瑞士的象徵 - 馬特洪峰 (Matterhorn)
          ，他是瑞士引以爲傲且不可分割的地標
          <br />
          策馬特 (Zermatt) 位於馬特洪峰 (Matterhorn)
          腳下，這裡得天獨厚的地理位置，擁有龐大的健行和滑雪網絡，成爲世上最著名的渡假村之一，該地區也被譽為&ldquo;馬特洪峰冰川天堂
          Matterhorn glacier paradise&rdquo;
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368514/20180419_180424_0059_us36mb.jpg`,
          }}
        />
        <Paragraph>shout out to Matterhorn</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746368513/IMG_7057-1024x768_mh00s9.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368512/IMG_7059-2-1024x768_q0u3rv.jpg`,
            },
          ]}
        />
        <Paragraph>
          原本在猶豫是要玩飛行傘呢還是滑雪，兩項活動都不便宜，不過都來了！這錢就是要選一樣花😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368517/IMG_7062-scaled_tirer6.jpg`,
          }}
        />
        <Paragraph>
          超興奮的可以來這麼漂亮的地方滑雪，獻出我的第一次哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368515/IMG_7086-scaled_pv4jfl.jpg`,
          }}
        />
        <Paragraph>不愧是滑雪天堂</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746368522/IMG_8885_prm2sy.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368520/IMG_7090_ronlij.jpg`,
            },
          ]}
        />
        <Paragraph>
          朋友教學中，有預感之後幾個小時應該就是一直摔而已 XD
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746368510/20180419_180424_0028-1024x768_lcf3uz.jpg`,
              caption: "居然在瑞士愛上了這個蘋果汁🍎",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368514/IMG_7098_hpvwt5.jpg`,
              caption: "這陽光很毒辣",
            },
          ]}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368511/20180419_180424_0056-1024x768_ht8wi7.jpg`,
          }}
        />
        <Paragraph>請路人幫我們和 Matterhorn 拍個照</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746368515/20180419_180425_0011_kjsbs2.jpg`}
          text="一開始的時候我們誤闖人家高級賽道，旁邊全是呼嘯而過，超怕被撞，後來才找到新手區
          <br />
          
          一開始四個人 結果有一個隊友莫名消失了"
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746368569/IMG_8930_ny1wjg.mov`}
        />
        <Paragraph>不管看幾次都覺得... 我也太好笑</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746368521/IMG_8983_l6fudt.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368526/IMG_8995_xnysjx.jpg`,
            },
          ]}
        />
        <Paragraph>我很努力了，不過幸好沒摔成豬頭</Paragraph>
      </Section>

      <Section>
        <VideoGrid
          videos={[
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1746368559/IMG_1764_ugbdzd.mp4`,
            },
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1746368544/IMG_1790_asanrp.mp4`,
            },
          ]}
        />
        <Paragraph>滑不好就開始亂玩</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Gornergrat" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368511/20180419_180424_0123-1024x682_lj9wwc.jpg`,
          }}
        />
        <Paragraph>
          結束滑雪行程後下山，我的臉居然已經曬傷！剩下戴墨鏡眼睛周圍還是白的...
          超像貓熊
          <br />
          我們再來要前往 Gornergrat，另一個不同的角度欣賞
          Matterhorn，憑滑雪票可以免費搭乘，剛好趕上最後一班小火車
          <br />
          不過有人在滑雪的時候票飛走了 XD 所以我們決定自行前往丟下他在 Zermatt
          市區🤣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368510/20180419_180424_0115-1024x682_rww2zo.jpg`,
          }}
        />
        <Paragraph>
          Gornergrat 景觀台位於海拔高度 3089
          米處，搭乘齒軌鐵路抵達，一路上坐擁馬特洪峰與高納冰川(Gorner glacier)
          的美麗景緻
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746368565/IMG_7132_yeauna.mp4`}
        />
        <Paragraph>
          最後一班車沒什麼人，我們安安靜靜地欣賞窗外的景色，美到轉頭說一句話的時間都不想錯過，雙眼就這麼緊緊跟隨著車窗外的風景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368523/IMG_7143_sld9tm.jpg`,
          }}
        />
        <Paragraph>離雪好近，在陽光的反射下閃閃發亮</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368521/IMG_7151_guei7l.jpg`,
          }}
        />
        <Paragraph>移動的過程捕捉到晃動的照片，我卻異常的喜歡</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746368557/IMG_7157_fxc3r2.mp4`}
        />
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1746368571/IMG_7170_hbfmmh.mp4`}
          text="一路上紀錄沿途美景，這條路線是歐洲第一的電動式齒軌火車路線，到 Zermatt 一定不能錯過"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368520/IMG_7149_geqr8g.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368522/IMG_7173_ewyw7j.jpg`,
          }}
        />
        <Paragraph>
          看大多數的人不是一早來
          要不然就是中午來比較多，我們末班車看到夕陽覺得也是別有一番風味
        </Paragraph>
      </Section>

      <Section>
        <Video src={`${CLOUDINARY_VIDEO_BASE}/v1746368532/SNOW-3_ucvana.mp4`} />
        <Paragraph>好～興～奮～啊～</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746368517/IMG_7189_qeaddi.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368523/IMG_7195_cvkuhn.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368514/IMG_7211_xvm65j.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368519/IMG_7202_jidonn.jpg`,
            },
          ]}
        />
        <Paragraph>
          最後一班火車發車前是我們停留的時間，隨意地拍照，享受這寧靜的時刻
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746368535/IMG_7192_sryuoj.mp4`}
        />
        <Paragraph>高山上雪非常厚，夕陽格外刺眼</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368512/20180419_180424_0130-1024x682_s8xmvp.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746368511/20180419_180424_0086-768x1024_o2mj00.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746368511/20180419_180424_0087-768x1024_apkoh9.jpg`,
            },
          ]}
        />
        <Paragraph>吃了一口脆脆的冰柱</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368517/IMG_7214_janc4v.jpg`,
          }}
        />
        <Paragraph>
          瑞士境內有 48 座超過 4000 公尺的高山，在這可以一次收納其中29座
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Zermatt 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746368523/IMG_7228_vqpjnm.jpg`,
          }}
        />
        <Paragraph>
          Zermatt 不只是滑雪人的天堂，也是台灣人喜愛的瑞士小鎮，隨時一抬頭
          馬特洪峰就能映入眼簾，在這裡能以各種角度、不同活動去品味瑞士代表的山峰，既悠哉身心靈也完全達到放鬆
          <br />
          我在這體驗到了人生第一次滑雪，到 Gornergrat
          景觀台看夕陽冰川，享受瑞士獨有的風景，下山時太陽已經落到山後，山腳下木屋燈光亮起，也是我們要離開
          zermatt 的時候了
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoZermatt;
