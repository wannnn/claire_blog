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
import VideoTextRow from "@root/components/typography/VideoTextRow";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoMuranoLido = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="威尼斯跳島 Part II 玻璃島和利多島 (Murano y Lido)" />
      <CreatedDate date={"2022-12-27"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557622/7583857120_IMG_8817-scaled_vqtgle.jpg`,
          }}
        />
      </Section>

      <MyDate date={"29 May 2018 (威尼斯Day3)"} />

      <Section>
        <Paragraph>
          第三天在威尼斯一樣是風和日麗的好天氣，早上依然先搭乘水上巴士，我們要去玻璃島逛逛
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557606/7583857120_IMG_8789-1024x683_azdd2v.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747557606/7583857120_IMG_8747-1024x683_bylgvt.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557609/7583857120_IMG_8748-1024x683_adhmeh.jpg`,
            },
          ]}
        />
        <Paragraph>
          威尼斯玻璃生產的鼎盛時期是15世紀到16世紀，產品幾乎獨占歐洲市場
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Rio dei vetrai" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557606/7583857120_IMG_8750-1024x683_dehtvj.jpg`,
          }}
        />
        <Paragraph>
          站在橋上欣賞玻璃工匠運河，我覺得這是最棒的角度！遠遠還可以看見聖米歇爾教堂的鐘樓
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557607/7583857120_IMG_8752-1024x683_cnuizw.jpg`,
          }}
        />
        <Paragraph>轉過身向後再拍一張，好喜歡這種對稱的感覺</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557608/7583857120_IMG_8796-1024x683_lakfea.jpg`,
          }}
        />
        <Paragraph>
          一艘艘小艇井然有序停靠著，在運河邊什麼角度都不想錯過快門的我
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557605/7583857120_IMG_8737-1024x683_fkxhzx.jpg`,
          }}
        />
        <Paragraph>
          接著我們沿著運河散步繼續往主廣場前進，其實 Murano 整體的感覺和 Burano
          也是有點像
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747557666/IMG_2153_eaxof0.mp4`}
        />
        <Paragraph>
          這邊有街頭藝人在彈奏玻璃！而且可以看到玻璃杯裡裝著高低不同的水位，聽起來好像水晶音樂，是很舒服的那種
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747557651/IMG_2164_thbubr.mp4`}
        />
        <Paragraph>
          在這邊拍了一個好像沒什麼重點的縮時哈哈哈，表達橋上熙來攘往的人群
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Campo Santo Stefano (聖斯德望廣場)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557605/7583857120_IMG_8730-1024x683_citmdv.jpg`,
          }}
        />
        <Paragraph>
          廣場上著名的鐘樓是在1890年建造的，鐘樓下有個很美的藍色玻璃彗星藝術創作
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Ponte Longo Lino Toffolo" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557608/7583857120_IMG_8792-1024x683_nvtolq.jpg`,
          }}
        />
        <Paragraph>
          在 Ponte Longo 上眺望剛剛經過的廣場，還可以看到那顆彗星
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557609/7583857120_IMG_8816-1024x683_i5mcry.jpg`,
          }}
        />
        <Paragraph>
          街道上的房子不像 Burano 那樣顏色飽和，而是更柔和的色調
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557610/7583857120_IMG_8822-1024x683_bpzpsl.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Duomo Basilica dei Santi Maria e Donato (聖瑪利亞聖多拿狄聖殿)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557615/7583857120_IMG_8806-1024x683_gqmquf.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557615/7583857120_IMG_8810-1024x683_mbvfdy.jpg`,
          }}
        />
        <Paragraph>
          Murano 上的主要教堂，也是整個威尼斯瀉湖區最古老的教堂之一。建於7世紀
          <br />
          只是好可惜當時沒進去，看評論都說內部的裝飾很值得一看
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="CAMPO SAN DONATO" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557607/7583857120_IMG_8833-1024x683_sasknt.jpg`,
          }}
        />
        <Paragraph>
          我在運河邊愜意的時光，這邊剛好是一個很好的拍照點，就在剛剛的古老教堂附近
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747557636/IMG_2913-1024x683_njsxdj.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557613/7583857120_IMG_8837-1024x683_y1ljrr.jpg`,
            },
          ]}
        />
        <Paragraph>隨著風輕輕擺動，看著一艘又一艘的小艇駛過</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Libreria Acqua Alta" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557623/7583857120_IMG_8921-1024x683_n4ibad.jpg`,
          }}
        />
        <Paragraph>
          結束了 Murano 的上午巡禮，我們搭船回到本島，去尋找威尼斯的特色書店
          <br />
          沈船書店最迷人的地方，除了一進店的貢多拉書櫃，還有被水淹過舊書堆疊而成的樓梯，走上去會有美麗的風景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557628/IMG_2304-1024x768_zlsxjv.jpg`,
          }}
        />
        <Paragraph>
          店裡滿滿滿的書籍，義大利文看不懂，一旁的明信片和小紀念品比較吸引我😂
        </Paragraph>
      </Section>

      <Section>
        <VideoTextRow
          videoSrc={`${CLOUDINARY_VIDEO_BASE}/v1747557639/IMG_3083_q3j6pz.mp4`}
          text={"我的天 書店裡太可愛的貓咪！用他的貓掌吃東西有夠療癒"}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557632/IMG_2329-1024x768_ojxnrm.jpg`,
          }}
        />
        <Paragraph>
          爬上舊書階梯後映入眼簾的就像是時間變緩慢了一樣，真的很適合打開一本書享受這片寧靜
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557624/7583857120_IMG_9060-1024x683_mub3ch.jpg`,
          }}
        />
        <Paragraph>
          再度回到我們威尼斯最熟悉的聖馬可廣場！Gelato
          可以代表我在義大利生活的一切，看我吃的這麼圓就知道冰淇淋佔生活多大部分
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747557655/IMG_2332_lhkx7a.mp4`}
        />
        <Paragraph>今天再度進入主教堂內和室內博物館</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747557632/IMG_2338-768x1024_fxtjhr.jpg`}
          text="戶外店家看到的可愛人型支架"
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557617/7583857120_IMG_9047-1024x683_gkexyq.jpg`,
          }}
        />
        <Paragraph>金碧輝煌的教堂內部</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557610/7583857120_IMG_9082-1024x683_hmp480.jpg`,
          }}
        />
        <Paragraph>
          吃飽喝足後我們繼續啟程前往下個目的地 利多島
          <br />
          Lido
          有11公里長，狹長的地形不太適合徒步探索，幸好島上公車還算方便，可以讓我們輕鬆遊覽
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557618/IMG_2341-1024x768_zedjz6.jpg`,
          }}
        />
        <Paragraph>
          Lido
          可能不會是大家的首選，但會來造訪應該都是為了這片長長的海灘，也是我們來這唯一去的景點
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747557612/7583857120_IMG_9226-1024x683_qeuexz.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557629/7583857120_IMG_9230-1024x683_wlqzdc.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557611/7583857120_IMG_9107-1024x683_hba9an.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557615/7583857120_IMG_9144-1024x683_wd7cbm.jpg`,
            },
          ]}
        />
        <Paragraph>
          我們在海邊度過了很難忘的下午，彷彿回到小時候很無憂無慮地在玩那種感覺
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747557621/7583857120_IMG_9170-1024x683_ul91ay.jpg`}
          text="被我們欺負的很慘"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557614/7583857120_IMG_9250-1024x683_q0yxii.jpg`,
          }}
        />
        <Paragraph>邊走邊玩慢慢晃去搭船</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557612/7583857120_IMG_9260-1024x683_rib5xz.jpg`,
          }}
        />
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747557659/IMG_2353_ujq9il.mp4`}
        />
        <Paragraph>
          一天之中又來到了夕陽時分，很滿足能在 Lido 欣賞這片美景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557630/IMG_2914-1024x682_hmguvf.jpg`,
          }}
        />
        <Paragraph>
          實在是太太太太太喜歡這張了，感謝同行好友拍攝！
          <br />
          我們眼中的威尼斯，在夕陽照射下把整個畫面染的橘黃
          實在感同身受夕陽無限好
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557623/7583857120_IMG_9266-1024x683_cphmf9.jpg`,
          }}
        />
        <Paragraph>結束 Lido 回到威尼斯本島上</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557619/7583857120_IMG_9268-1024x683_dgelsk.jpg`,
          }}
        />
        <Paragraph>街上的每個角落都美的想讓人紀錄</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557627/7583857120_IMG_9270-1024x683_pweg8h.jpg`,
          }}
        />
        <Paragraph>簡約又溫馨</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557620/7583857120_IMG_9274-1024x683_exra4u.jpg`,
          }}
        />
        <Paragraph>第三天終於要來搭乘貢多拉了！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557624/IMG_2374-1024x576_ids5sb.jpg`,
          }}
        />
        <Paragraph>充滿威尼斯元素的一張照片，如此令人著迷</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557635/IMG_2379-1024x768_xw5wqp.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747557626/IMG_2578-scaled-2-1024x768_rulcza.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557630/IMG_2521-1024x768_jdgewp.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557628/IMG_2401-1024x768_ix3yrx.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557626/IMG_2581-scaled-2-1024x768_bwdotf.jpg`,
            },
          ]}
        />
        <Paragraph>四張糊到不行的自拍，還要自己打光</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557621/7583857120_IMG_9334-1024x683_k130tl.jpg`,
          }}
        />
        <Paragraph>
          夜晚降臨的很快，天色轉黑，船尾的那盞小燈隨著船身搖曳，伴著滑水聲，我們的貢多拉船夫好像不怎麼喜歡和我們聊天哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557616/7583857120_IMG_9402-2-1024x682_twek7x.jpg`,
          }}
        />
        <Paragraph>覺得又好笑又可愛，這張怎麼那麼像全家福</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557618/7583857120_IMG_9441-1024x683_cgpgli.jpg`,
          }}
        />
        <Paragraph>回到聖馬可廣場，搜集夜晚的樣貌</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557625/7583857120_IMG_9473-1024x683_odt0sz.jpg`,
          }}
        />
        <Paragraph>聖馬可教堂的水面倒影，拍起來很有氣氛</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747557664/IMG_2607_vtarrk.mp4`}
        />
        <Paragraph>廣場上餐廳的音樂表演精彩絕倫，讓人忍不住駐足欣賞</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747557633/IMG_2625-1024x768_j9n3np.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557634/IMG_2626-1024x768_x11u21.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557635/IMG_2630-1024x768_n70irr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747557637/IMG_2631-1024x768_vrtcxc.jpg`,
            },
          ]}
        />
        <Paragraph>
          待在威尼斯的第四天也是最後一個早晨，早起去逛當地市場，有繽紛的蔬果和海鮮
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Ｍurano y Lido 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747557631/7583857120_IMG_9515-1024x683_ab0oe8.jpg`,
          }}
        />
        <Paragraph>
          我不會說 Murano 或 Lido
          這些跳島必去或是不容錯過，每個旅人都會依自己的喜好安排適合的島嶼且找到樂趣．
          <br />
          在這兩個島上我感覺非常放鬆，&ldquo;小島&rdquo;總像有無形的魔力一樣，拖著你把步調放慢，把每個小細節放大，把情緒拉到最滿
          <br />
          感覺也不是因為有哪裡必訪，內心會因為這些簡單的美好而感動、一抹夕陽或和善的當地人
          <br />
          在威尼斯迷路和到處體驗的這幾天成了心底很棒的回憶，人事物加起來才是旅程最值得回味之處
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoMuranoLido;
