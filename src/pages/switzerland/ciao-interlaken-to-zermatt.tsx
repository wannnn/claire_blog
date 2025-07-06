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

const CiaoInterlakenToZermatt = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="從茵特拉肯(Interlaken) 前往策馬特(Zermatt)！第一次汽車搭火車" />
      <CreatedDate date={"2021-08-27"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367108/IMG_6971-scaled_zvla8t.jpg`,
          }}
        />
      </Section>

      <MyDate date={"18 April 2018"} />

      <Section>
        <Paragraph>
          這幾天待在茵特拉肯的早晨我們都會去附近和市中心晃晃，然後到 Coop 買早餐
          <br />
          天氣超級好，出發！👋 茵特拉肯，我們要去策馬特了
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367105/IMG_6932_fnhjsz.jpg`,
          }}
        />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746367106/IMG_6933_cutidi.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746367105/IMG_6930_xn3osb.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367105/IMG_1427_uor5ap.jpg`,
          }}
        />
        <Paragraph>
          哈哈哈想要拍那種 road trip
          的感覺，其實是有段小插曲的，在我們剛剛離開茵特拉肯沒多久，車好像有點怪怪的(事隔多年實在忘了發生啥事，儀表板有問題❓)，我們就停在路邊打給租車公司救援，後來請我們先找一處停車場等人過來處理，於是才有了後車廂照
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367106/IMG_6960_haf9hy.jpg`,
          }}
        />
        <Paragraph>
          所幸那個意外的插曲有獲得解決，我們才能順利地上路，因為我們當天行程只是單純移動而已，所以很
          free
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367105/IMG_6964-1024x768_m5zyk3.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367107/IMG_6968_qqob5l.jpg`,
          }}
        />
        <Paragraph>
          我們順路停在了布里恩茨湖，茵特拉肯就是被夾在西邊圖恩湖 (Thunersee)
          與東邊布里恩茨湖 (Brienzersee)之間，因此有「在湖水之間」的意思
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367108/IMG_6969-1024x768_qflok9.jpg`,
          }}
        />
        <Paragraph>
          碧藍色的湖水在陽光下閃耀的像寶石，如果行程允許的話
          這邊有觀光船、瀑布、步道和阿爾卑斯山美景可以度過很棒的一天
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1746367111/IMG_6976_f4qtaq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1746367106/IMG_6970-1024x768_afl6qm.jpg`,
            },
          ]}
        />
        <Paragraph>在湖邊待了一下下，keep moving</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746367137/IMG_6982_xduztp.mp4`}
        />
        <Paragraph>
          左右兩邊分別是鐵道和自行車道，無論是哪一種方式遊瑞士，都共享這片美好風景，都是敞徉在幸福中！
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746368169/IMG_6988_uroazz.mp4`}
        />
        <Paragraph>
          持續記錄沿途風光，只能說人生有機會一定一定要來瑞士玩
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367107/IMG_6992-1024x768_yefcas.jpg`,
          }}
        />
        <Paragraph>
          還沒搞清楚路況的我們，開到坎德斯泰格
          (Kandersteg)的時候發現奇怪為什麼有個收費站，還以為什麼過路費，花了 22
          瑞郎之後跟在其他車屁股後面 一起上這輛奇特的交通工具，急忙 google
          查一下原來在 Kandersteg 👉🏻 Goppenstein
          這段路之間全是高山，於是有這條鐵路 (Lötschberg Railway)
          配上汽車專用的火車，帶我們穿越勒奇山隧道 (Lötschberg Tunnel)
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1746367181/IMG_6994_mi8kdh.mp4`}
        />
        <Paragraph>
          第一次汽車搭火車的我們很驚奇，而且前一秒才得知則是更加驚喜
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367108/IMG_7010_xq5z3e.jpg`,
          }}
        />
        <Paragraph>
          汽車下火車之後，越往南的景色好像更不同了，這邊的積雪好厚！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367108/IMG_7011_mj3izb.jpg`,
          }}
        />
        <Paragraph>
          因為策馬特是無車小鎮！車子是無法前往的，我們只能把車停在特施
          (Täsch)，然後轉搭冰河列車繼續前往 Zermatt
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367112/IMG_7018_kytiz5.jpg`,
          }}
        />
        <Paragraph>在列車上往外看到一條蜿蜒的小溪，水正潺潺流著</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367110/IMG_7022_fktpbo.jpg`,
          }}
        />
        <Paragraph>
          抵達 Zermatt 小鎮已是傍晚時分，在街上溜達，我們在 Coop
          有找到瑞士餐廳很常出現的馬鈴薯煎餅，晚餐就買回去 Airbnb 自己煮
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367114/IMG_7026_hjjc66.jpg`,
          }}
        />
        <Paragraph>到處都是厚重的積雪</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367110/IMG_7030_n6rpin.jpg`,
          }}
        />
        <Paragraph>
          一天當中我最喜歡的就是傍晚時分，不管春夏秋冬
          夕陽灑落讓人感到慵懶，是最舒服的時刻
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1746367110/IMG_7035-1024x768_oovwik.jpg`,
          }}
        />
        <Paragraph>
          我在前面這間滑雪用品店買了一副手套，明天我們要去滑雪！好興奮
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="從茵特拉肯到策馬特...." />
        <Paragraph>
          這一天的路途旅行讓我們認識了瑞士的精巧交通系統！從意外的汽車上火車體驗，到無車小鎮的轉乘安排，一路上的風景變化多端。從布里恩茨湖的湛藍湖水，到南部山區厚重的積雪，大自然的美景伴隨著我們前進。抵達
          Zermatt
          時的傍晚時光更是為這趟旅程增添了一份寧靜與期待，明天就要挑戰滑雪了！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoInterlakenToZermatt;
