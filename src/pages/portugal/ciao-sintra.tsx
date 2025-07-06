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

const CiaoSintra = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="里斯本避暑勝地 - 辛特拉(Sintra)" />
      <CreatedDate date={"2021-07-10"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938100/7516828016_IMG_8380-scaled_p928nv.jpg`,
          }}
        />
      </Section>

      <MyDate date={"July 4 2018"} />

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745938083/IMG_9930-768x1024_x21nhc.jpg`}
          text="今天要和朋友在 Rossio 車站見面，先去旁邊搭 一下電車 再搭火車去辛特拉
          <br />
          早上起床先和 hostel
          的室友一起吃早餐玩了一陣，因為有遇到這些熱情親切的人，所以在里斯本住宿的經驗算是很不錯"
        />
      </Section>

      <Section>
        <SubTitle title="Ascensor da Gloria" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938070/7516828016_IMG_8104-1024x683_rbqek4.jpg`,
          }}
        />
        <Paragraph>
          榮耀升降梯在
          1885年10月開放營運，運轉動力歷經水力、蒸氣到現在的電力，也於
          2002年列入國家古蹟
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938066/7516828016_IMG_8121-1024x683_lhhyjf.jpg`,
          }}
        />
        <Paragraph>
          電車的身上被畫滿塗鴉，沿途上來兩旁的牆壁也是充滿塗鴉
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938091/IMG_9945-1024x768_g00un4.jpg`,
          }}
        />
        <Paragraph>電車緩緩地往上，車內好復古</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938067/7516828016_IMG_8125-1024x683_j3b6ca.jpg`,
          }}
        />
        <Paragraph>
          真的很喜歡站在里斯本坡地高處俯瞰
          <br />
          徒步下去回 Rossio 後準備搭火車到辛特拉，車程約40分鐘
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938068/7516828016_IMG_8130-1024x683_pl82yo.jpg`,
          }}
        />
        <Paragraph>
          辛特拉小鎮，是以前葡萄牙皇室喜愛的避暑勝地，於是在這裏留下了許多建於
          15 至 19 世紀的建築
          <br />
          從石頭到充滿阿拉伯氣息、色彩繽紛的城堡都能找到，非常夢幻，於 1995
          年被聯合國教科文組織列爲世界遺產
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1745938113/IMG_9959_mhf2mw.mp4`}
        />
        <Paragraph>
          我們抵達後才在看辛特拉要怎麼規劃，最後決定不搭公車，而是先爬山到摩爾人城堡
          <br />
          路上還看到有人在吹簫？有種山林間的仙氣那種感覺
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Castelo dos Mouros 摩爾人城堡" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938071/7516828016_IMG_8152-1024x683_lrzenw.jpg`,
          }}
        />
        <Paragraph>
          於 10 世紀建於懸崖頂的摩爾式城堡，周圍有多條能夠享受全景視野的路徑
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938069/7516828016_IMG_8189-1024x683_oyhj8t.jpg`,
          }}
        />
        <Paragraph>
          上面這邊風蠻大的，是 7 月耶但我在葡萄牙這幾天老是覺得外面會冷😅
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938074/7516828016_IMG_8252-1024x683_rdxpjv.jpg`,
          }}
        />
        <Paragraph>
          風景非常美麗原始，下面就是我們穿越上來的森林，在這邊還可以俯瞰到辛特拉宮
          (Palácio Nacional de Sintra)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938086/IMG_9991-1024x768_imhmyi.jpg`,
          }}
        />
        <Paragraph>回顧我的眉毛真是慘不忍睹，青春無極限啦</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938094/IMG_9971-1024x768_abke1p.jpg`,
          }}
        />
        <Paragraph>
          我就站在當時摩爾人建的軍事城牆上，好難想像中古時期的摩爾人怎麼在這裡跑來跑去
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938095/IMG_0001-1024x768_pvqgsq.jpg`,
          }}
        />
        <Paragraph>
          摩爾人是誰呢？
          <br />
          約 8 至 9 世紀，阿拉伯人佔領了伊比利亞半島，當時他們便興建了這座城堡。
          <br />
          摩爾人不是一個特定的族，而是泛指在伊比利亞半島的伊斯蘭征服者，主要由衣索比亞人、撒哈拉人、阿拉伯人和柏柏爾人組成
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938090/IMG_9967-1024x768_q2hwrr.jpg`,
          }}
        />
        <Paragraph>城堡猶如迷宮，有些小路甚至只能一人通過</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938073/7516828016_IMG_8266-1024x683_ddoqlj.jpg`,
          }}
        />
        <Paragraph>
          望著這一整片森林延伸到海邊，再和天空連接，風景之美到我都說不出話了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938084/IMG_0012-1024x768_e2irbo.jpg`,
          }}
        />
        <Paragraph>
          在這邊也可以看到佩納宮 (Parque e Palácio Nacional da Pena)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938071/7516828016_IMG_8308-1024x683_s11zfp.jpg`,
          }}
        />
        <Paragraph>
          我們後來走到佩納宮的時候也是排隊太多人，當初沒有先查好訂好票，礙於時間關係只好果斷放棄
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745938092/7516828016_IMG_8287-1024x683_cgesnq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938072/7516828016_IMG_8285-1024x683_ulapck.jpg`,
            },
          ]}
        />
        <Paragraph>右圖友人研究的新拍法，我看不懂 XDD</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938100/IMG_0038-1024x768_e0arfi.jpg`,
          }}
        />
        <Paragraph>我很喜歡的一個角度！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938096/IMG_0040-1024x768_pycyh9.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938087/IMG_0046-1024x768_ssnncg.jpg`,
          }}
        />
        <Paragraph>要去哪呢？</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938099/IMG_0047-1024x768_wgyhfo.jpg`,
          }}
        />
        <Paragraph>大部分的人還是搭公車下山，不過我們選擇走下山</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938094/IMG_0048-1024x768_pptwdw.jpg`,
          }}
        />
        <Paragraph>
          記得真的走了很久，也走到很餓，不過有朋友們一路嬉笑打鬧，這段路對我來說也充滿趣味
          <br />
          而且一路也可以看到一般辛特拉的住家，感覺更走進他們的生活圈
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745938085/IMG_0050-768x1024_sio45k.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938069/7516828016_IMG_8331-683x1024_bkqcz2.jpg`,
            },
          ]}
        />
        <Paragraph>
          下山後找到一間餐廳，我們已經快餓翻，點了好多也吃得很滿足，最後一定要來個蛋塔
          😋
          <br />
          吃飽喝足我們準備等公車到天涯海角，認真我來辛特拉都沒做功課，天涯海角也是旁邊兩位說了我才知道
          <br />
          算好時間最後一班車去最後一班回來，都來了是不會錯過的！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938080/7516828016_IMG_8334-1024x683_t65mpo.jpg`,
          }}
        />
        <Paragraph>
          公車上的華人面孔蠻多的！而且這個時間點要去羅卡角的人也還是很多
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Cabo da Roca 羅卡角" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938075/7516828016_IMG_8342-1024x683_dpuzjs.jpg`,
          }}
        />
        <Paragraph>
          羅卡角 Cabo da Roca
          位於大西洋的一個海岬，也是歐亞大陸最西端，有抵達『世界的盡頭』意義
          <br />
          這裡有一座小燈塔、一座十字架紀念碑，除此之外就是一片無盡的海洋
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938075/7516828016_IMG_8346-1024x683_xelbox.jpg`,
          }}
        />
        <Paragraph>太興奮了直接衝到柵欄邊瘋狂拍</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745938086/7516828016_IMG_8356-1024x683_wqgrjt.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938093/7516828016_IMG_8366-1024x683_lgkf5h.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938081/7516828016_IMG_8368-1024x683_tnzezf.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938082/7516828016_IMG_8358-1024x683_u0pgvo.jpg`,
            },
          ]}
        />
        <Paragraph>沒錯就是拍照狂按就對了，總會有幾張你喜歡的</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938076/7516828016_IMG_8395-1024x683_pcymxm.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938088/7516828016_IMG_8473-1024x683_ykjeym.jpg`,
          }}
        />
        <Paragraph>
          羅卡角位於 Parque Natural de Sintra-Cascais
          國家自然公園內，沿海都有步道可走
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745938080/7516828016_IMG_8437-1024x683_rbjath.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938079/7516828016_IMG_8459-1024x683_aw3fqo.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938089/7516828016_IMG_8507-1024x683_n3iu59.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745938077/7516828016_IMG_8426-1024x683_uytwkx.jpg`,
            },
          ]}
        />
        <Paragraph>海邊照片每張都想放</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938078/7516828016_IMG_8472-1024x683_pg77tx.jpg`,
          }}
        />
        <Paragraph>
          看到這大片海洋，真的好大好藍好寬闊，不禁好奇一直過去碰到的陸地會是長怎樣
          <br />
          站在這裡
          我覺得好像被大海伸出雙臂擁抱著、海風一陣一陣的吹過我全身，嘴角舔一下有鹹鹹的味道
          <br />
          當下的我真的好享受，什麼都不想，就是好好的覺知眼前的一切
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938097/7516828016_IMG_8527-1024x683_xg7pje.jpg`,
          }}
        />
        <Paragraph>
          紀念碑上的詩句，是葡萄牙詩人 卡蒙斯 Luís Vaz de Camões 的作品
          <br />
          <span style={{ color: "#3366ff" }}>「陸止於此、海始於斯」</span>
          <br />
          路的盡頭就是海了，在地理大發現以前的時代，羅卡角以外的這片大西洋就是人們以為的「世界盡頭」，海的那一端是未知的、危險的
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1745938170/7516828016_MVI_8369_dul0ub.mp4`}
        />
        <Paragraph>
          雖然沒辦法等到太陽下山，不過我覺得最後一班公車的時間超棒，是很剛好的！
          <br />
          人也沒那麼多，太陽也不會那麼毒辣，歐洲夏天白天實在太長啦
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Sintra 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745938065/7516817536_IMG_8551-1024x683_sioevr.jpg`,
          }}
        />
        <Paragraph>
          躺在辛特拉火車站的椅子上想著回里斯本要吃什麼，旅行的煩惱真的好容易呀！
          <br />
          辛特拉就像是過往王宮貴族浪漫夢想的實現，宛若童話的小城
          封存著一段最美好的時光，因涼爽氣候、綠蔭蔥蘢而發展為王室貴族的避暑勝地，當
          15～16
          世紀大航海時代來臨，貴族與富豪紛紛在辛特拉建立起漂亮的別墅皇宮，開啟了辛特拉的輝煌年代
          <br />
          如果說每個點都要去到建議是安排兩天才夠！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoSintra;
