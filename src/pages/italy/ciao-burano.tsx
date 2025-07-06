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
import ImageTextRow from "@root/components/typography/ImageTextRow";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoBurano = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="威尼斯跳島 Part I 在彩虹島找色彩(Ciao Burano)" />
      <CreatedDate date={"2022-12-08"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555676/7518854608_IMG_8426-scaled_ianx56.jpg`,
          }}
        />
      </Section>

      <MyDate date={"28 May 2018 (威尼斯Day2)"} />

      <Section>
        <Paragraph>
          在威尼斯的第二天要去赫赫有名的 彩虹島/彩色島/布拉諾島/蕾絲島 (Burano)
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555675/7585945552_IMG_7946-1024x683_ao4n4a.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555678/7585945552_IMG_7964-1024x683_svpxjm.jpg`,
          }}
        />
        <Paragraph>
          網路上大多數人的玩法都是彩虹島和玻璃島在同一天，但我們選擇一天悠閒的彩虹島，另一天再往右邊的玻璃島和利多島
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555686/IMG_4181-1024x768_adwzm3.jpg`,
          }}
        />

        <Paragraph>這張就是快樂的出航</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747555721/IMG_0244_w1dnf9.mp4`}
        />
        <Paragraph>搭乘水上巴士的沿途風光</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747555675/7585945552_IMG_7950-1024x683_uf5bvd.jpg`}
          text="在甲板上到處拍照的時候遇到這對很熱情的夫婦，要我幫他們拍一張😂
          <br />
          雖然說留下了 email 要我把照片傳給他，但我卻搞丟紙條了ＱＱ"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555676/7585945552_IMG_7959-1024x683_np97ol.jpg`,
          }}
        />
        <Paragraph>
          下船後首先印入眼簾的風景，河岸旁的遊客還不多，更顯得早晨的悠閒和慵懶
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555677/7585945552_IMG_7952-1024x683_eevex3.jpg`,
          }}
        />
        <Paragraph>
          漫步彩虹島河岸旁，對每一幢建築都好奇，路過的每一步都探頭
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555679/7585945552_IMG_7961-1024x683_znd1qs.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555681/7585945552_IMG_7957-1024x683_g4mvtl.jpg`,
          }}
        />
        <Paragraph>
          每條巷子都可以去探索看看，有時候人煙稀少的那條路反而更引起好奇心，說不定會遇到驚喜
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555687/7585945552_IMG_7962-1024x683_bkny2n.jpg`,
          }}
        />
        <Paragraph>
          在威尼斯彩虹島上拍下的一張日常生活，真的是超喜歡這張啊！喜歡的是
          我們每天再熟悉不過的日常，當你隻身在外旅遊時，彷彿感受到家似乎在不遠處
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555668/7518854608_IMG_8253-1024x683_rqge7a.jpg`,
          }}
        />
        <Paragraph>
          這張也真的是很喜歡，屋外的烤肉，不過你在想什麼呢？還是只是單純想睡了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555681/7585945552_IMG_7989-1024x683_g01vvw.jpg`,
          }}
        />
        <Paragraph>
          慢慢搜集每一種顏色的房子，窗外的一盆花剛剛好的點綴，能欣賞每位屋主精心佈置的外牆或家門前
          感覺真的很棒
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555685/7585945552_IMG_7992-1024x683_of5g7y.jpg`,
          }}
        />
        <Paragraph>
          彩虹島上這些被漆成不同顏色的房子，真的是一大亮點，並且讓這座小島聲名遠播
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555688/7585945552_IMG_8122-1024x683_wo7sug.jpg`,
          }}
        />
        <Paragraph>彩虹島上拍拍拍，每個角落都要紀錄💗</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555688/7585945552_IMG_8008-1024x683_thseuj.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555683/IMG_2134-1024x682_uqtmmz.jpg`,
          }}
        />
        <Paragraph>
          這張我也好喜歡啊！巷弄的盡頭剛好停著一艘小艇，紅綠對比的房屋在畫面上跳舞，而我笑得燦爛，在美好不過的瞬間
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555668/7518854608_IMG_8287-1024x683_tw8hys.jpg`,
          }}
        />
        <Paragraph>
          在彩虹島上熾熱的陽光被我捕捉下，地面上拉起長長的影子
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555668/7518854608_IMG_8291-1024x683_fa3hao.jpg`,
          }}
        />
        <Paragraph>整個彩虹島就像是調色盤🎨</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555678/7585945552_IMG_8128-1024x683_b7aouk.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555683/7585945552_IMG_8129-1024x683_hsc8vt.jpg`,
          }}
        />
        <Paragraph>
          我其實在羅馬的時候就覺得這樣曬衣好沒安全感，因為我就被風吹掉過 🤔
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555682/7585945552_IMG_8188-1024x683_y0p6ph.jpg`,
          }}
        />
        <Paragraph>
          我們在彩虹島這條熱鬧的街上找間餐廳吃午餐，還記得我吃lasagna，滿滿的肉醬
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747555685/7585945552_IMG_8192-1024x683_dmuoup.jpg`,
              caption: "彩虹島上的蕾絲也是有名的工藝品",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747555671/7518854608_IMG_8460-1024x683_ftepl1.jpg`,
              caption: "很多店家都可以看到蕾絲服飾或小物",
            },
          ]}
        />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747555680/IMG_0422-768x1024_vunmvw.jpg`}
          text="到哪都不能錯過我最愛的 Gelato! 🍦🍦🍦 此生摯愛！因為他而發胖"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555684/7585945552_IMG_7958-1024x683_yiryjj.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555689/7585945552_IMG_8196-1024x683_iqkche.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555691/IMG_2615-1024x681_r23e7c.jpg`,
          }}
        />
        <Paragraph>
          水道兩旁停滿小艇，雖然畫面有些凌亂並且各種五顏六色，但似乎又恰到好處，我還是很享受陽光和煦的下午坐在彩虹島上放鬆
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747555682/7585945552_IMG_8131-1024x683_vinoap.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747555685/IMG_2129-1024x682_cbpuve.jpg`,
            },
          ]}
        />
        <Paragraph>從橋上俯瞰河道兩旁，也是在小小彩虹島上的一大樂趣</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555677/IMG_0789-1024x768_dmk8wj.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747555689/IMG_4184-768x1024_unuhws.jpg`}
          text="在彩虹島上要待多久取決於到底要拍多少 😉"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555669/7518854608_IMG_8453-1024x683_bjd0gd.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555668/7518854608_IMG_8451-1024x683_on4uii.jpg`,
          }}
        />
        <Paragraph>在別人家門遇到一隻超可愛的灰貓</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Chiesa Parrocchiale di San Martino Vescovo" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555669/7518854608_IMG_8461-1024x683_coxsds.jpg`,
          }}
        />
        <Paragraph>
          16世紀至今的教堂，座落在 main square 上，有著名的傾斜鐘塔
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555669/7518854608_IMG_8465-1024x683_d8ltdd.jpg`,
          }}
        />
        <Paragraph>彩虹島上慵懶午後</Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747555704/IMG_0874_m4tmjg.mp4`}
        />
        <Paragraph>好想一起哈哈哈</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555670/7583857120_IMG_8555-1024x683_gjzhsu.jpg`,
          }}
        />
        <Paragraph>
          好！喜！歡！這張！！相信不用什麼浮誇的形容詞，此時心裡你我應該會有相同感覺
          <br />
          夕陽落得恰到好處，兩個人滑著小艇的剪影，船過的話 水不會無痕(不好笑)
          <br />
          話說，彩虹島的照片到這裡已經不知道第幾張我說很喜歡了哈哈哈，就知道彩虹島有多美多好拍多另人喜愛
          ❤️
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747555669/7518854608_IMG_8501-1024x683_v00tzo.jpg`,
              caption: "回程囉～～～",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747555673/7583857120_IMG_8592-1024x683_u8r4eu.jpg`,
              caption: "快回到威尼斯本島時已經差不多太陽落下",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555673/7583857120_IMG_8613-1024x683_xicdko.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747555670/7583857120_IMG_8606-1024x683_fwhbdx.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747555674/7583857120_IMG_8627-1024x683_tighz4.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747555672/7583857120_IMG_8617-1024x683_mnstzv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747555670/7583857120_IMG_8621-1024x683_cbnoli.jpg`,
            },
          ]}
        />
        <Paragraph>
          一系列傍晚的景色，畫面很藍，我都好喜歡啊全都放上來
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555671/7583857120_IMG_8639-1024x683_herxth.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555672/7583857120_IMG_8694-1024x683_ud2qc2.jpg`,
          }}
        />
        <Paragraph>
          原本是沒打算要吃餐廳的，不過有人生日我們只好配合花錢一下哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555675/7583857120_IMG_8673-1024x683_kcp1ha.jpg`,
          }}
        />
        <Paragraph>
          最喜歡夜裡的鵝黃燈光，以及三五好友聚在一起品嚐美食小酌，每當夜幕降臨街燈亮起總有這種感覺，就是要和我們所在乎的人一起聯繫感情
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555679/7583857120_IMG_8665-1024x683_xsbaf8.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747555686/IMG_1190-768x1024_ytha7e.jpg`}
          text="我真的沒有很喜歡這個 Aperol Spritz！"
        />
      </Section>

      <Section>
        <SubTitle title="彩虹島對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747555690/7585945552_IMG_8110-1024x683_tcysci.jpg`,
          }}
        />
        <Paragraph>
          來威尼斯的時候就很期待彩虹島，期待走進這巨大的調色盤，就當我們在抵達的那刻起，就無時無刻被這些色彩療癒著，簡單的走走看看漁村日常生活，幻想著我住這裡也會有一艘小艇當交通工具，島上就是這麼愜意、與世無爭
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBurano;
