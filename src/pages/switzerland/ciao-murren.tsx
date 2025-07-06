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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import Video from "@root/components/typography/Video";
import Preface from "@root/components/typography/Preface";
import VideoTextRow from "@root/components/typography/VideoTextRow";
import VideoGrid from "@root/components/typography/VideoGrid";

const CiaoMurren = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="雪朗峰山腳、瑞士最美小山村 - 米倫小鎮(Mürren)" />
      <CreatedDate date={"2021-08-22"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360259/IMG_6939_fkmgji.jpg`,
          }}
        />
      </Section>

      <MyDate date={"17 April 2018"} />

      <Section>
        <Preface>
          和昨天前往 Lauterbrunnen 比起來，今天太陽整個大露臉，讓藍天白雲和
          少女峰顏色完全鮮明起來
          <br />
          我們今天的行程 Mürren 是在雪朗峰山腳一座富有魅力的小山村
          <br />
          要去米倫小鎮一樣先到 Lauterbrunnen
          搭乘纜車，停車場這邊看到有人在玩拖曳傘
        </Preface>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360244/IMG_5928-1024x768_fez4dy.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360244/IMG_5929-1024x768_kplgvq.jpg`,
          }}
        />
        <Paragraph>抬頭望一下 這就是等一下的纜車路線</Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1746360281/IMG_5933_ka81cm.mp4`}
          text="纜車搭到終點站，一出來就有鞦韆，身後就是如此壯麗的山景，覺得很浪漫"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360261/IMG_5947_opxxse.jpg`,
          }}
        />
        <Paragraph>
          這邊還不是米倫小鎮的中心點，我們要沿著山路慢慢走到那邊
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746360291/IMG_5956_srikxb.mp4`}
        />
        <Paragraph>好可愛的小馬😍 最後他鼻子湊過來聞我嚇得收手哈哈哈</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360244/IMG_5952-1024x768_amv4km.jpg`,
          }}
        />
        <Paragraph>
          一切景色都令人非常心曠神怡，你會發現走在這條小徑上會不時地回頭看，想要把整片風景都看夠
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360244/IMG_5966-1024x465_uoqvcn.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360245/IMG_5994-1024x768_kie77y.jpg`,
          }}
        />
        <Paragraph>
          走走停停、又走走停停
          <br />
          四面群山環繞包圍，我們一行人踏著超輕快的步伐，手機才剛收進口袋又立馬拿出來
          — 拍照
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360259/IMG_6232-scaled_thkhfj.jpg`,
          }}
        />
        <Paragraph>
          四月的積雪融了一些，聽著山泉水沖刷的聲音，有些刺眼的陽光把石頭上的青苔照得發亮
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360256/IMG_6951-1024x682_qixhra.jpg`,
          }}
        />
        <Paragraph>我笑得可開心了，瑞士限定的風景真的很像活在夢中</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360256/IMG_6948-1024x682_n4mz35.jpg`,
          }}
        />
        <Paragraph>我與我的團員 翹課出國玩</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360246/IMG_6251-1024x768_laebi4.jpg`,
          }}
        />
        <Paragraph>
          這個視角實在太棒了！在聖托里尼的海邊我可以待整天，在這裡我可以待半天（到時候下不了山😂）
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360244/IMG_6273-1024x768_iha7na.jpg`,
          }}
        />
        <Paragraph>米倫人口僅有450人，但擁有2000個酒店的床位</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360245/IMG_6333-1024x768_mqdhk8.jpg`,
          }}
        />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746360246/IMG_6411-1024x768_hqzbi9.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360251/IMG_6424-1024x768_ktulej.jpg`,
            },
          ]}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360249/IMG_6428-1024x650_ybyhqc.jpg`,
          }}
        />
        <Paragraph>
          米倫小鎮海拔 1,650
          米，坐擁艾格峰(Eiger)、僧侶峰(Mönch)、少女峰(Jungfrau)三座高聳山峰的景色
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360245/7516837376_IMG_6105-scaled_hjwngx.jpg`,
          }}
        />
        <Paragraph>
          這個天氣 這個風景😍 抵達米倫小鎮之後我徹底喜歡上這個村莊
          <br />
          那些山峰感覺離你很近卻又遙不可及，這種距離的美感很令人著迷
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360243/7516837376_IMG_6206-1024x683_fchqqs.jpg`,
          }}
        />
        <Paragraph>攝影教學中</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746366822/IMG_6891_xdi4ce.jpg`}
          text="有時候我也不知道在幹麻"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360248/IMG_6467-1024x768_qpma7x.jpg`,
          }}
        />
        <Paragraph>
          米倫小鎮的中心，這邊比較熱鬧些 餐廳店家集中，也有 Coop 可以買糧食
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360250/IMG_6473-1024x768_wmha6l.jpg`,
          }}
        />
        <Paragraph>
          這邊沒有過多的商業化，四月的遊客數量也比較少，逛起來很舒服，可以很享受米倫小鎮原始的風貌、沈浸大自然給予的美麗景色
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360253/IMG_6516-1024x768_ouesqd.jpg`,
          }}
        />
        <Paragraph>
          木屋雪景 還有雪堆漸融之後露出的一片綠地，這個時節來的好處是
          可以參與到春天大地甦醒的過程
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360246/IMG_6476-1024x768_m4ve7m.jpg`,
          }}
        />
        <Paragraph>要往哪走呢？</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360248/IMG_6479-1024x768_qedzhb.jpg`,
          }}
        />
        <Paragraph>古色古香的木屋，木材的顏色在雪地裡感覺很溫暖</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360247/IMG_6565-1024x768_tyobgh.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746360245/IMG_6589-1024x768_rpncnd.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360247/IMG_6592-1024x768_z68oll.jpg`,
            },
          ]}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360249/IMG_6598-1024x768_zex2cp.jpg`,
          }}
        />
        <Paragraph>
          這一路邊玩邊拍實在是不亦樂乎，好好把握難得的美景！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360249/IMG_6635-1024x768_fznn6z.jpg`,
          }}
        />
        <Paragraph>
          繼續往這個方向都沒遇到人，越往裡面走兩旁的積雪越厚
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746360288/IMG_6643_c1dqte.mp4`}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360252/IMG_6659-1024x768_gcwt7w.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360250/IMG_6673-1024x399_zmdjrt.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746360251/IMG_6696-1024x768_uioyci.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360263/IMG_6699_lwrtiy.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360262/IMG_6703_hywern.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360252/IMG_6704-1024x768_ouadv2.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360262/IMG_6727-scaled_e0yile.jpg`,
          }}
        />
        <Paragraph>
          回頭看這些照片真的是最好的紀念，人生有多少時候可以讓你這樣漫無目的的亂走也不用煩惱
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746360259/IMG_6903_hh1z2t.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360258/IMG_6898_ugki9p.jpg`,
            },
          ]}
        />
        <Paragraph>
          就有人說要找什麼鮮花小徑，結果走到這邊已經沒辦法繼續了啦😂
          <br />
          原來是要等雪季完全結束後，阿爾卑斯山會開始成為野花野草的絢麗舞臺，才有所謂的鮮花小徑
        </Paragraph>
      </Section>

      <Section>
        <VideoGrid
          videos={[
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1746360275/SNOW-4_uoweol.mp4`,
            },
            {
              src: `${CLOUDINARY_VIDEO_BASE}/v1746360269/SNOW-10_hh7aix.mp4`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360253/IMG_6738-1024x768_cxledh.jpg`,
          }}
        />
        <Paragraph>太陽漸漸地在下山，也代表我們也差不多該回程了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360253/IMG_6757-1024x768_qqruee.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746360255/IMG_6912-768x1024_rrfdtb.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360243/7516837376_IMG_6331-683x1024_wcdfij.jpg`,
            },
          ]}
        />
        <Paragraph>雪堆高度示意圖，都比我人還高</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746360275/IMG_6759_ersson.mp4`}
        />
        <Paragraph>紀錄一下沿路的視角</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360254/IMG_6764-1024x768_gmft9h.jpg`,
          }}
        />
        <Paragraph>這間「Hotel Alpenruh」是在 Mürren 非常有名的飯店</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360255/IMG_6767-1024x768_etmlnr.jpg`,
          }}
        />
        <Paragraph>
          我們回到山下 天色暗的有點快，夕陽把山峰的白雪染成金黃色
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360254/IMG_6819-1024x768_pcg6yf.jpg`,
          }}
        />
        <Paragraph>在車上隨手拍下的月亮</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746360257/IMG_6822-1024x768_ilf7ej.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746360264/IMG_6823_xq0nyh.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360257/IMG_6831-1024x768_jl5lkv.jpg`,
          }}
        />
        <Paragraph>大家躺著看星星</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746360288/IMG_6925_azzq4n.mp4`}
        />
        <Paragraph>開車的人累到睡著還要被我們這樣欺負</Paragraph>
      </Section>

      <Section>
        <SubTitle title="米倫小鎮對我來說 …" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746360262/IMG_6630_f0ezzt.jpg`,
          }}
        />
        <Paragraph>
          如果說米倫小鎮是瑞士最美麗的村莊，我非常同意！這裡是徒步的天堂，而且艾格峰、僧侶峰和少女峰的美景就環繞在身邊，你只需要走山路、欣賞自然風光，聽牛嘎嘎地吃草，任由這片風景在你腳下蔓延開來就可以了！盡情的享受這片世外桃源，讓他成為旅途中最棒的回憶
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoMurren;
