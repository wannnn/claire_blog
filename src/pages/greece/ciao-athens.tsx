import CreatedDate from "@root/components/typography/LastUpdate";
import ImageCarousel from "@root/components/typography/ImageCarousel";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";

const CiaoAthens = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="古典與現代並存的城市 - 雅典(Athens)" />
      <CreatedDate date={"2020-11-24"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675531/IMG_5531-scaled_gftka7.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 13 2018 - June 16 2018"}></MyDate>

      <Section>
        <Preface>
          這一定要從出發前說起，在羅馬有兩個機場，一個是主要的 Aeroporto
          Internazionale Leonado da Vinci 達文西國際機場(FCO)，一個是小的
          CiamPino 錢皮諾機場(CIA)
          專飛廉航，我一早6點多的班機，前一天晚上就決定去睡機場了，剛好這次從
          CIA
          出發，我真的沒想到機場會12點就關門，只好在外面花圃周圍的椅子睡到4點開門再進去。
          <br />
          <br />
          更慘的是登機前我的20吋登機箱塞不進量行李的架子，我看大概19吋才可以，就這樣被罰了20€，我機票才38€耶！之後再搭瑞安航空(Ryan
          Air) 就知道，多花個7~8€買優先登機最保險
        </Preface>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745675528/IMG_5428_x7sqk2.png`}
          text="6月中晚上好冷，才一開始就變流浪漢了😂"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675527/IMG_5427-3-1024x768_nzntxk.jpg`,
          }}
        />
        <Paragraph>
          從羅馬飛到雅典很快，大約兩個多小時就抵達，雖然身體很累，但當落地的那一瞬間，看到不同景色，手機電信變了
          那一刻還是整個興奮起來。機場到市區我選擇搭地鐵最方便，買了3日套票，可以隨意搭乘
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="跳蚤市場 Monastiraki Flea Market" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675528/IMG_5430-1024x768_kmwbfx.jpg`,
          }}
        />
        <Paragraph>
          Monastiraki 地鐵站一出站就是跳蚤市場，這個廣場人潮聚集相當熱鬧
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675536/IMG_5716-1024x768_kwmusy.jpg`,
          }}
        />
        <Paragraph>
          皮件、包包、二手物、古董、紀念品……等，超多東西可以在這裡挖到。雅典吃這些小東西算是挺便宜的，3~4€
          可以搞定！
        </Paragraph>
      </Section>

      <Section>
        <ImageCarousel
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745675532/IMG_5591-768x1024_qv88fx.jpg`,
              caption: "希臘優格就和羅馬Gelato一樣都是我瘋狂最愛",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675538/IMG_5872-2-768x1024_ct3w25.jpg`,
              caption: "Pita榮登我最愛的希臘美食！",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675538/IMG_5886-768x1024_zkyhyd.jpg`,
              caption: "希臘連鎖的咖啡店Grēgórēs",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675537/IMG_5753-768x1024_xb4yfz.jpg`,
              caption: "一天當中的第三次優格",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675528/IMG_5436-768x1024_v9eq07.jpg`,
              caption: "自己挑選配料結果不小心超貴",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675528/IMG_5429-768x1024_orvygi.jpg`,
              caption: "剛到雅典的第一餐",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675531/IMG_5590-768x1024_cvnmci.jpg`,
              caption: "這實在不怎麼好吃沒味道",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675539/IMG_6478-768x1024_tb45b3.jpg`,
              caption: "ouzo茴香酒，其實味道我不喜歡",
            },
          ]}
        />
      </Section>

      <Section>
        <SubTitle title="哈德良圖書館 Hadrian's Library" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675528/IMG_5433-1024x768_bwgmpi.jpg`,
          }}
        />
        <Paragraph>
          哈德良圖書館裡面已經殘破不堪了，只剩下入口的柱子比較完整
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="古羅馬阿哥拉 Roman Agora of Athens" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675529/IMG_5438-1024x768_dadbq6.jpg`,
          }}
        />
        <Paragraph>雅典娜之門</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675529/IMG_5443-1-1024x768_isgnf9.jpg`,
          }}
        />
        <Paragraph>
          古羅馬市集裡面最顯眼的就是那座八角型大理石建築 –
          風之塔，說真的我剛好正中午抵達這裡，看到完全沒遮蔽我整個放棄😂
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="狄俄倪索斯劇場 Theatre of Dionysus" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675530/IMG_5458-1024x768_tcss2j.jpg`,
          }}
        />
        <Paragraph>世界最古老的劇場之一</Paragraph>
      </Section>

      <Section>
        <SubTitle title="衛城 Acropolis" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675529/IMG_5454-1024x768_afp62w.jpg`,
          }}
        />
        <Paragraph>
          衛城在布拉卡區的山坡上，在前往的路上，越走近就越被他雄偉的氣場震懾住，白天這邊真的很熱，晚上就有很多人來這邊坐著喝啤酒聊天看夜景
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="帕德嫩神廟 Temple of Parthenon" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675530/IMG_5505-1024x768_vkkuk7.jpg`,
          }}
        />
        <Paragraph>
          神廟最經典的圓柱有對稱和協調之美，為古典建築的典範，對於我這個喜歡對稱的人來說，看了完全舒暢
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675530/IMG_5512-1024x768_wyrtfe.jpg`,
          }}
        />
        <Paragraph>
          這裡供奉的是雅典守護女神雅典娜，其中一面樑柱因為戰爭炸毀，至今還沒修復
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675540/IMG_9789-1024x768_vbe6ar.jpg`,
          }}
        />
        <Paragraph>腳上的疤也太明顯了吧</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675531/IMG_5557-1024x768_dqnvf1.jpg`,
          }}
        />
        <Paragraph>帕德嫩神廟的另一側</Paragraph>
      </Section>

      <Section>
        <SubTitle title="伊瑞克提翁神殿 Temple of Erechtheion" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675530/IMG_5510-1024x768_sacetz.jpg`,
          }}
        />
        <Paragraph>
          這裡供奉海神波賽頓和雅典娜，門口則是六位少女雕像，不過看到的是複製品，真跡被移到衛城博物館收藏
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675539/IMG_9743-1024x230_ls5bz8.jpg`,
          }}
        />
        <Paragraph>俯瞰雅典市景</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675531/IMG_5572-1024x768_ie1m1o.jpg`,
          }}
        />
        <Paragraph>路上隨處可見藝術家</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675531/IMG_5580-1024x576_iophga.jpg`,
          }}
        />
        <Paragraph>
          巷弄的風景總是很能吸引我目光，或許是驚喜、或許是寧靜、或許是偶遇、又或者什麼都沒發生
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675536/IMG_5726-1024x768_j0ajuf.jpg`,
          }}
        />
        <Paragraph>
          前往衛城的途中都是上坡路，有時與樓梯交錯，在這些縱橫間還穿插了許多餐廳，連座位都擺到了階梯間，我想這晚上在這邊吃飯應該感覺很棒
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="奧林匹雅宙斯神廟 The Temple of Olympian Zeus" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675537/IMG_5761-1024x768_hmyjdc.jpg`,
          }}
        />
        <Paragraph>
          裡面供奉的是天神宙斯，雅典大部分古蹟都暴露在豔陽底下，這裡的熱應該每張照片都看得出來，要做好防曬和多喝水，不然真的會乾掉
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="哈德良拱門 Arch of Hadrian" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675537/IMG_5757-1024x768_bgw7be.jpg`,
          }}
        />
        <Paragraph>
          和圖書館是同一個哈德良，這個拱門是紀念他並且區隔雅典的新城區與舊城區
        </Paragraph>
      </Section>
      <Section>
        <SubTitle title="國會大廈 Greek Parliament" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675533/IMG_5629-1024x768_dah0it.jpg`,
          }}
        />
        <Paragraph>
          士兵的後方是 無名烈士之墓(Tomb of unknown solders)
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675532/IMG_5612-1024x576_ijtgfc.jpg`,
          }}
        />
        <Paragraph>
          來到憲法廣場對面的國會大廈就不能錯過整點的衛兵交接，姿勢怪的有趣，動作也很大，加上鞋子踩踏的聲響，很像在跳舞
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="憲法廣場 Syntagma" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675533/IMG_5646-1024x768_qjhfgi.jpg`,
          }}
        />
        <Paragraph>
          憲法廣場剛好就在地鐵出口，廣場中央有個大噴水池，累了是個很適合休憩的地方
        </Paragraph>
      </Section>
      <Section>
        <SubTitle title="國家公園 National Garden" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745675534/IMG_5656-1-1024x768_byk3en.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675534/IMG_5660-1024x768_h7xmki.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675533/IMG_5655-1024x768_ygndmt.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745675534/IMG_5682-1024x768_nu2xly.jpg`,
            },
          ]}
        />
        <Paragraph>
          國家公園就位於市中心而已，而且佔地很廣大，來這邊走走也很不錯，路上也看到好多烤玉米的小攤販
        </Paragraph>
      </Section>
      <Section>
        <SubTitle title="Church of Panaghia Kapnikarea" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675535/IMG_5688-1024x768_x6a5lu.jpg`,
          }}
        />
        <Paragraph>
          沿著精品街 艾爾姆街(Ermou)
          到底可以看到雅典最知名的拜占庭式教堂，建於11世紀
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675535/IMG_5695-1024x768_grslrh.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675536/IMG_5706-1024x768_nwdnn3.jpg`,
          }}
        />
        <Paragraph>夜晚眺望衛城</Paragraph>
      </Section>

      <Section>
        <SubTitle title="阿塔羅柱廊 Stoa of Attalos" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675539/IMG_6002-1-1024x768_v3bg0u.jpg`,
          }}
        />
        <Paragraph>
          這裡在之前是一座市集與聚會場所，除了欣賞美輪美奐的建築以外，流竄在大理石圓柱間的涼風，簡直就是雅典炎熱天氣下的救贖
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745675539/IMG_6482-1024x768_onyxs0.jpg`,
          }}
        />
        <Paragraph>
          雅典的第三天早上我找了間咖啡廳打我的交換學生心得報告，將我在羅馬的生活做個總結，順便規劃著我接下來的兩個月旅行
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="雅典對我來說....." />
        <Paragraph>
          雅典是世界最古老的城市，而我最喜歡的是這座城市古蹟與現代並存之美，以前歷史課本上的故事、報章雜誌上的照片無法產生共鳴，去一趟終於能親眼見證！雅典消費並不算太高，可能希臘破產後旅遊不會很貴，加上學生身分也有一些優勢，博物館處處不用錢，關於治安我覺得是不管去到歐洲哪個城市都是需要小心的，某天早上在雅典的連鎖咖啡店我才看到有人想偷摸一位亞洲人的包包…總之，這個城市充滿了歷史氣息，重要古蹟又和市區距離蠻近，天氣的話真的是超熱，不過是乾熱，身上不會有黏黏的感覺，整體還是非常值得一遊！
          <br />
          很巧的是，在我出國2018那年剛好遇到世界盃足球賽，整個旅程中充滿了球賽的氣氛，我真的賺到哈哈哈
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoAthens;
