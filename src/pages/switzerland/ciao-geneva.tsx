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

const CiaoGeneva = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="瑞士最國際化的城市 - 日內瓦(Geneva)" />
      <CreatedDate date={"2022-01-16"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408470/IMG_7921-scaled_ypl06k.jpg`,
          }}
        />
      </Section>

      <MyDate date={"21 April 2018"} />

      <Section>
        <Preface>
          日內瓦絕對是瑞士最國際化的城市，聯合國的歐洲總部和紅十字會總部的所在地，並以&quot;和平之都&quot;著稱
        </Preface>
      </Section>

      <Section>
        <SubTitle title="Place de Neuve 新廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408456/7585975552_IMG_6886-1024x683_s4cvts.jpg`,
          }}
        />
        <Paragraph>
          新廣場(Place Neuve)
          為日內瓦的文化聖地，周圍有日內瓦音樂學院、日內瓦大劇院、拉特美術館
          <br />
          而廣場中心豎立的是瑞士民族英雄-杜福爾將軍的騎馬雕像
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Musée Rath 拉特美術館" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408456/7585975552_IMG_6888-1024x683_u8cybj.jpg`,
          }}
        />
        <Paragraph>
          恰巧我們抵達日內瓦停車在拉特美術館附近，他是瑞士歷史最為悠久的一所美術館
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408457/7585975552_IMG_6893-1024x683_amaopk.jpg`,
          }}
        />
        <Paragraph>
          在拉特美術館右側的這條街，街景我超喜歡！整排的瑞士國旗🇨🇭
          從這個拍照角度看過去建築整齊劃一
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Grand-Rue" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408457/7585975552_IMG_6896-1024x683_yywjih.jpg`,
          }}
        />
        <Paragraph>
          我們穿梭在
          Grand-Rue，日內瓦保存最完好的一條街，街上林立各種紀念品店、餐廳等等
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747408458/7585975552_IMG_6902-1024x683_kymp3l.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747408457/7585975552_IMG_6899-1024x683_cz6wx8.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408459/7585975552_IMG_6906-1024x683_qwxugd.jpg`,
          }}
        />
        <Paragraph>
          Grand-Rue 是偉大的啟蒙思想家、教育家盧梭(Jean-Jacques Rousseau)
          的出生地
          <br />
          日內瓦也被視為思想勝地，「法蘭西思想之父 – 伏爾泰」、「英國政治思想家
          – 拜倫」、「蘇聯第一位領袖 – 列寧」等人都曾經來過
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408462/7585975552_IMG_6913-1024x683_aonf65.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408458/7585975552_IMG_6904-1024x683_u1bjlo.jpg`,
          }}
        />
        <Paragraph>
          每個歐洲城市都有自己的 Old Town，我很喜歡這種城區帶給我的感覺
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Cathédrale Saint-Pierre Genève 聖彼得大教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408460/7585975552_IMG_6912-1024x683_jddm4u.jpg`,
          }}
        />
        <Paragraph>超過 850 年歷史的古老教堂</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408461/7585975552_IMG_6917-1024x683_tchnzb.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408464/7585975552_IMG_6923-1024x683_mjidiq.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408464/7585975552_IMG_6927-1024x683_fo5k91.jpg`,
          }}
        />
        <Paragraph>一些可愛的小店</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408463/7585975552_IMG_6929-1024x683_evaleq.jpg`,
          }}
        />
        <Paragraph>還有一隻超可愛的狗狗</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408460/7585975552_IMG_6930-1024x683_gahpzr.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Jardin Anglais 英國花園 ＆ L'Horloge Fleurie 日內瓦花鐘" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408462/7585975552_IMG_6931-1024x683_drlm04.jpg`,
          }}
        />
        <Paragraph>
          隨意捕捉的畫面，現在回頭看彷彿還可以感受到那溫馨的氣氛
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408465/7585975552_IMG_6981-1024x683_l78mgm.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408472/IMG_7955_e144s0.jpg`,
          }}
        />
        <Paragraph>
          英國花園旁的花鐘地標，以及象徵日內瓦鐘錶的世界地位，參觀完拍完照一分鐘內結束
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Jet d'Eau 大噴泉" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408465/7585975552_IMG_6942-1024x683_jc7btp.jpg`,
          }}
        />
        <Paragraph>🌈</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408466/7585975552_IMG_6986-1024x683_qrcs9v.jpg`,
          }}
        />
        <Paragraph>
          大噴泉是日內瓦湖畔的一座大型人工噴泉，也是日內瓦著名地標
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408467/7585975552_IMG_6988-scaled_mth5qe.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408467/7585975552_IMG_6999-1024x683_csyrp2.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408468/7585975552_IMG_7029-1024x683_vst5cn.jpg`,
          }}
        />
        <Paragraph>
          一旁的堤道聚集不少人，大噴泉噴出的湖水隨著風向傾盆而下在堤道上
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408469/IMG_7891-scaled_dupbuk.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408469/IMG_7915-scaled_lbzq9k.jpg`,
          }}
        />
        <Paragraph>
          小女孩非常可愛，自己一個玩得不亦樂乎，我也在旁邊默默幫他拍了一堆照片
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408472/IMG_7947_mtle05.jpg`,
          }}
        />
        <Paragraph>被夕陽染黃的整個日內瓦，很暖很暖</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408472/IMG_7948_taosls.jpg`,
          }}
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747408518/IMG_7871_z5fwbv.mp4`}
        />
        <Paragraph>Rue du Rhône & Rue du Marché 很好逛街的地方</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408477/IMG_7958_tudgj4.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408473/IMG_7961_uvmqfb.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Broken Chair" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408474/IMG_8036-scaled_zsvqjb.jpg`,
          }}
        />
        <Paragraph>
          斷腳椅這個裝置藝術紀念著因地雷而傷亡的人，是由瑞士著名雕塑家丹尼爾·伯塞特於1997年創作而成
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Palais des Nations 萬國宮" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408475/IMG_8041-scaled_ti7lch.jpg`,
          }}
        />
        <Paragraph>聯合國歐洲總部，時間晚了這次沒有機會參觀到</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408475/IMG_8038-scaled_f5pvdx.jpg`,
          }}
        />
        <Paragraph>整條的國旗星光大道非常壯觀</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747408516/IMG_8049_qwdxxw.mp4`}
        />
        <Paragraph>
          這是沒在預期內的行程，我們跑到法國去啦，看著手機電信商傳來我們跑到法國的簡訊，還急忙截圖😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408475/IMG_8048-scaled_fr2y7o.jpg`,
          }}
        />
        <Paragraph>就只是吃頓晚餐，食物超普通，不過年輕就是要衝動</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408475/IMG_8058-scaled_ihzvqv.jpg`,
          }}
        />
        <Paragraph>
          我們連最後一晚的住宿也省了，睡日內瓦機場
          清晨的飛機回羅馬，有誰比我們克難可以出來比較一下...
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747408489/IMG_8060_ghyf5e.mp4`}
          text="回到羅馬的家，連門都開不好😅"
        />
      </Section>

      <Section>
        <SubTitle title="日內瓦對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747408459/7585975552_IMG_6910-1024x683_ed0jbc.jpg`,
          }}
        />
        <Paragraph>
          日內瓦
          ，因為羅納河的經過串起了法國與瑞士的地理關係，日內瓦就像小小的大都會，不只是大家所熟知的會議之城，也是文化和歷史中心，舊城區有迷人的湖和碼頭、湖畔步行大道、星羅棋布的公園、有趣的小巷隱藏著風格典雅的店鋪，和各式各樣的餐廳！日內瓦的生氣蓬勃絕對令人充滿活力，豐富的姿彩讓人勾起再度來訪的慾望
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoGeneva;
