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

const CiaoLauterbrunnenWengen = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="瀑布小鎮盧達本納(Lauterbrunnen)、溫根(Wengen) 少女峰地區一日遊" />
      <CreatedDate date={"2021-08-01"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357018/IMG_6848_nganw3.jpg`,
          }}
        />
      </Section>

      <MyDate date={"16 April 2018"} />

      <Section>
        <Paragraph>
          早上在因特拉肯醒來，住宿的地方有提供早餐，而且還蠻多樣化的！
          <br />
          我們住的地方很舒適，交誼廳環境很溫馨，吃飽喝足體力充滿後今天的行程是 -
          少女峰小鎮的冒險
        </Paragraph>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746357015/IMG_5684-1024x768_fpv4sr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357016/IMG_5687-1024x768_d8hu8l.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357017/IMG_5690-1024x768_hswhie.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357016/IMG_5689-1024x768_ke0v85.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <Preface>
          Lauterbrunnen 是瑞士伯恩州因特拉肯 -
          上哈斯利區的一個小鎮，位於少女峰山腳下，Lauterbrunnen
          德語直譯是很大聲的泉水（Laut -
          Brunnen)，翻成中文是盧達本納或勞特布倫嫩都可以
        </Preface>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746357097/IMG_5702_hksdpr.mp4`}
        />
        <Paragraph>
          自駕的好處就是多了時間上的彈性，而這個瀑布小鎮開車視角實在美得令人屏息！我們在車上已經驚呼連連
          <br />
          『太美了！』『太漂亮了吧！』『天啊！』駕駛都不想開車了只想趕快發朋友圈😏
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357017/IMG_5752-1024x768_t1wvf3.jpg`,
          }}
        />
        <Paragraph>
          Lauterbrunnen
          深深抓住了我的心，生平第一次大開眼界看到這麼美麗的村莊，我像在天堂走路一樣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357017/IMG_5712-1024x768_v62rwv.jpg`,
          }}
        />
        <Paragraph>
          灰濛濛的天氣和零星的遊客，我們在這條主要街道上隨意地走走晃晃，瑞士的傳統木屋真的好童話
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746357999/IMG_5786-1024x768_wqic9h.jpg`}
          text="街旁的店家沒有營業，四月這邊應該不是旺季"
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746357063/IMG_5746_pzu5d1.mp4`}
        />
        <Paragraph>
          Lauterbrunnen
          中間地勢較低，兩側高聳的獨特山形，很適合上到高地觀賞整個低谷，不管是健行路線上去、搭乘纜車上去、搭乘綠黃火車上去，絕對都不虛此行
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357018/IMG_6841_ispxeq.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357019/IMG_6843_bsrd0g.jpg`,
          }}
        />
        <Paragraph>
          路人幫我們拍的照片，覺得好可愛哈哈哈哈
          <br />
          瑞士的大自然實在很難讓人不愛，像走進一幅畫中，想倒在後面那一大片綠地中
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357018/IMG_5759-1024x768_jvqof0.jpg`,
          }}
        />
        <Paragraph>
          左邊有湍急的河流，中間一座小巧教堂，右邊則是瀑布主角
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357018/IMG_6847-1024x682_onmnso.jpg`,
          }}
        />
        <Paragraph>
          感謝朋友相機支援，不然我的相簿就真的只有灰照片了😂
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746357048/IMG_5783_nnrndl.mp4`}
        />
        <Paragraph>
          <strong>施陶河瀑布（Staubbach falls）</strong>
          在瀑布鎮最為有名，高達約300米，水從懸崖峭壁懸空而下，滂薄又有氣勢，走近才真正知道他有多壯觀
          <br />
          瀑布旁有步道可以沿著走上去，不過我們去的時候是被封住的，並沒有開放
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357018/IMG_6850-1024x682_ji5qvg.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="溫根 Wengen" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746357017/IMG_5795-768x1024_hjtpwe.jpg`}
          text="我們搭乘纜車上去 Wengen"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746357015/IMG_5797-1024x768_hahzvu.jpg`,
              caption: "溫根可以搭火車或纜車上來",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357015/IMG_5796-1024x768_usaiim.jpg`,
              caption: "這街上居然空蕩蕩！唯一有開的店是 Coop",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357015/IMG_5803-1024x768_w7secv.jpg`,
          }}
        />
        <Paragraph>
          層層疊疊的山，雲霧繚繞，一處處聚集的木屋，仙境似的感覺
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746357048/IMG_5841_zvx453.mp4`}
        />
        <Paragraph>
          天啊這白雪皚皚的一片覆蓋著山頭，又可以居高臨下的觀看剛剛的瀑布小鎮，在這裡的瑞士人日常應該都很習慣了吧
          <br />
          對於這種大自然的美實在令人敬畏！打從心底的覺得可以身在美景之中是很幸福的事
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746357016/IMG_5817-1024x768_mmaotz.jpg`,
              caption: "都沒人",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357016/IMG_5820-1024x768_dqma6s.jpg`,
              caption: "都沒人 x1",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357016/IMG_5808-1024x768_i3p0ra.jpg`,
              caption: "難道是用來燒熱水？",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357016/IMG_5823-1024x768_pjcz69.jpg`,
              caption: "都沒人 x2",
            },
          ]}
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746357053/IMG_5807_czmos8.mp4`}
        />
        <Paragraph>
          中間的雪都還沒融化，不曉得真正居住在這裡的人有多少，不過我想大部分應該都是民宿
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746357016/IMG_5809-1024x768_ms206z.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357017/IMG_5839-1024x768_lexaxh.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357017/IMG_5856-1024x768_q64sva.jpg`,
          }}
        />
        <Paragraph>
          開始在這邊玩起了雪，童心未泯的感覺，讓我驚覺好像很久沒有這麼無牽無掛的玩了
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746357019/IMG_6866_alxyh3.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357019/IMG_6876_tfbvca.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357019/IMG_6857_m1ggrf.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357019/IMG_6869_pqzhjp.jpg`,
            },
          ]}
        />
        <Paragraph>
          一輩子無法忘記這一刻笑得有多開心，現在回頭看到這些照片好想再回去
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357019/IMG_6872-1024x682_hy8xfk.jpg`,
          }}
        />
        <Paragraph>我在幹嘛😂 而且雪其實很髒</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357014/7516837376_IMG_5799-1024x683_o4ph3l.jpg`,
          }}
        />
        <Paragraph>
          身後的風景不只用相機拍下，眼睛也努力捕捉每個角度，心裡也深深烙下
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746357016/7516837376_IMG_5732-scaled_zdunh5.jpg`,
              caption: "大自然的鬼斧神工",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357018/IMG_6852-1024x682_fqdyyx.jpg`,
              caption: "這張有點呆",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746359171/IMG_5872-1024x768_jaiwtz_c_crop_w_1024_h_682_r46scw.jpg`,
              caption: "捨不得離開",
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357021/IMG_6880-1024x682_mw0q5d.jpg`,
              caption: "拍照拍到最後沒招了",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357020/IMG_6883-1024x682_gy7rna.jpg`,
          }}
        />
        <Paragraph>好像什麼全家福 XD</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746357016/7516837376_IMG_5930-1024x683_p3y44v.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357015/7516837376_IMG_5912-1024x683_i9r1ap.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357015/7516837376_IMG_5935-1024x683_qotmqz.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746357015/7516837376_IMG_5898-1024x683_fw9nar.jpg`,
            },
          ]}
        />
        <Paragraph>
          拍了一堆很鬧的照片，手上還拿我們買來要當晚餐的德腸和麵包
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1746357018/IMG_5899_hdh2wt.jpg`}
          text="回程一路唱嘻哈回去好嗨"
        />
      </Section>

      <Section>
        <SubTitle title="Lauterbrunnen 對我來說…" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746357018/IMG_6856-1024x682_lwez19.jpg`,
          }}
        />
        <Paragraph>
          Lauterbrunnen
          的美好光看網路上介紹的那樣感受不到，要親自走進這絕美的瑞士村莊，體驗到其壯麗的山谷地形，才能感受到心理的衝擊，Lauterbrunnen
          不大，很適合搭配 Wengen 或 Grindelwald 一起玩，來瑞士絕對不能錯過
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoLauterbrunnenWengen;
