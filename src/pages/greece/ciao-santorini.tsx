import CreatedDate from "@root/components/typography/LastUpdate";
import ImageGallery from "@root/components/typography/ImageGallery";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import MyDate from "@root/components/typography/MyDate";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import ImageCarousel from "@root/components/typography/ImageCarousel";

const CiaoSantorini = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="希臘必去藍白夢幻小島 - 聖托里尼(Santorini)" />
      <CreatedDate date={"2020-12-27"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750447/IMG_7589_vkajdx.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 17 2018 - June 19 2018"} />

      <Section>
        <Preface>
          計畫永遠趕不上變化，本來是要搭夜船到聖托里尼的，結果訂好的船票被取消，只好改成下午5點出發，晚上11點抵達
        </Preface>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745750415/IMG_6486-scaled_x1tcht.jpg`,
              caption: "搭乘 Blue Star 前往 Santorini",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750424/IMG_6508-scaled_cznplh.jpg`,
              caption: "船上都在轉播世界杯足球賽",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750417/IMG_6503-1024x768_nbrmfn.jpg`,
          }}
        />
        <Paragraph>
          站在甲板上看愛琴海的夕陽，背後是喧鬧的人群，配上嘈雜的電視轉播聲，希臘文我聽不懂，只知道大家一陣歡呼，大概是哪個隊又踢進球了吧
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750431/IMG_7081-1024x768_wlz2zf.jpg`,
          }}
        />
        <Paragraph>
          接近深夜抵達，這不是我預期的，沒有多訂今晚住的地方，也只好再多花錢，也習慣旅行中那些意外插曲總是不按牌理出牌。下船後的聖托里尼放眼望去一片荒涼山壁，最熱鬧的鎮必須上山，蜿蜒山路沒路燈又狹窄沒護欄，兩邊會車都好像在考驗技術一樣，我是有點抖抖的，但這就是他們的習慣，他們的日常
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Fira 費拉" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750418/IMG_6525-1024x768_mxiq4h.jpg`,
          }}
        />
        <Paragraph>
          Fira
          是聖托里尼島上最主要城鎮，我的青旅也在這，島上唯一的一家青旅，我看也是最便宜的住宿哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750419/IMG_6558-1024x768_xkyxkl.jpg`,
          }}
        />
        <Paragraph>
          聖托里尼島長得是半月形，Fira 就在中間西部，懸崖上的山城
        </Paragraph>
      </Section>

      <Section>
        <ImageCarousel
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745750417/IMG_6512-768x1024_cndwnv.jpg`,
              caption: "不管捲起來還是攤開都好吃",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750420/IMG_6649-768x1024_fp8rzk.jpg`,
              caption: "天氣太熱就想一直喝果汁",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750449/IMG_8154-768x1024_oskcyr.jpg`,
              caption: "超愛 Greek Salad",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750436/IMG_7352-768x1024_dxtakp.jpg`,
              caption: "在希臘的每一餐幾乎都吃這個",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750452/IMG_8217-768x1024_iatno2.jpg`,
              caption: "到處都在賣就來吃吃看，很甜！",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750422/IMG_6683-768x1024_xmwgjc.jpg`,
              caption: "莓果優格",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750445/IMG_7576-768x1024_bposks.jpg`,
              caption: "我的最愛",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750453/IMG_8218-768x1024_ve7y2c.jpg`,
              caption: "吃到一個很雷義大利麵",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750433/IMG_7127-768x1024_jrp91t.jpg`,
              caption: "海邊放空的時光",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750419/IMG_6645-1024x768_kmjrfz.jpg`,
          }}
        />
        <Paragraph>
          其實 Fira
          主要街道蠻商業化，也有許多國際精品進駐，街道不寬，觀光客倒是很多，走一走拐個彎又是一條岔路可以進去探索，裡面會藏著一些小店，或迎來的絕佳風景
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750424/IMG_6697-1024x768_o8a6f2.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750451/IMG_8214-1024x768_cgtoj6.jpg`,
          }}
        />
        <Paragraph>花絕對是我最喜歡取景的元素之一</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750421/IMG_6675-1024x768_odbrsk.jpg`,
          }}
        />
        <Paragraph>
          這座島上以觀光業為主，旺季的時候幾乎是天天要工作，淡季的時候則是大部分的店休息
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750418/IMG_6533-1024x768_wcrn6t.jpg`,
          }}
        />
        <Paragraph>
          這海的藍太耀眼，是我沒看過的，站在這裡好好感受，用力呼吸，還是覺得有點不真實
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750423/IMG_6681-1024x768_zwpchs.jpg`,
          }}
        />
        <Paragraph>
          前往港口路上看到一堆驢，因為一路從 Fira
          半山腰走下山，有些陡的階梯很多人就直接花點錢騎驢下山了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750422/IMG_6693-1024x768_xbovvk.jpg`,
          }}
        />
        <Paragraph>
          在港口邊休息喝點東西，看人來人往，這裡是舊港口，但還是會有一些郵輪船隻停靠
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Oia 伊亞" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745750426/IMG_6823-1024x768_cxnr4c.jpg`,
              caption: "曬到慵懶的貓",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750428/IMG_6857-1024x768_ogex07.jpg`,
              caption: "邪惡之眼的藍眼睛",
            },
          ]}
        />
        <Paragraph>
          聖托里尼不管在哪個角落都豔陽高照，搭公車從 Fira 到 Oia，覺得這裡反而比
          Fira 更熱鬧
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750425/IMG_6805-1024x768_qxafrw.jpg`,
          }}
        />
        <Paragraph>
          藍白的建築在炎熱天氣中顯得清爽，沿著峭壁蓋的房子，也是這座島的特色之一
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750426/IMG_6842-1024x768_jyaazi.jpg`,
          }}
        />
        <Paragraph>
          這座教堂是社群媒體上的熱門打卡景點，不得不拍真的是挺可愛的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750427/IMG_6850-1024x768_mdfch1.jpg`,
          }}
        />
        <Paragraph>紅與藍顏色飽滿的鮮明對比，這海猶如寶石般耀眼</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750429/IMG_6872-1024x768_idhl9c.jpg`,
          }}
        />
        <Paragraph>
          小小的咖啡店門口，看起來很有味道，處處有粉紅色的九重葛襯托島上的藍與白
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750451/IMG_8202-1024x768_t8o5am.jpg`,
          }}
        />
        <Paragraph>慢慢晃晃晃。晃到看起來是小島的尾巴之處</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750441/IMG_7511-1024x768_dfprap.jpg`,
          }}
        />
        <Paragraph>
          一些我好喜歡的照片，試著去找不同的角度，也無形中傳遞了你的眼光、你的品味、以及一些看待這世界的深度
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750439/IMG_7494-1024x768_vxcljl.jpg`,
          }}
        />
        <Paragraph>
          有些被夕陽染黃的景色，是浪漫的，讓人一不小心陶醉在其中
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750440/IMG_7507-1024x768_poyelf.jpg`,
          }}
        />
        <Paragraph>
          用不著去追藍頂教堂，其實處處都是，也不用追求明信片上的角度，因為隨手一拍都是一張明信片，當時沒相機真的好可惜，美到讓我考慮立馬買了，但為了之後的旅行我還是不能衝動
          😂
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745750435/IMG_7176-1024x768_zfkmb0.jpg`,
              caption: "沒人幫拍，只好自拍",
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750438/IMG_7481-1024x768_bpdri4.jpg`,
              caption: "途中遇到的哈爾濱小姐姐幫我拍的",
            },
          ]}
        />
        <Paragraph>
          一個人玩的缺點就是自己的照片超少，這麼漂亮的小島卻沒拍上幾張照，不過又看看當時的我，曬得超黑，有幾張紀念就好了哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750444/IMG_7558-1024x768_y2yqpb.jpg`,
          }}
        />
        <Paragraph>
          島上的每間房子應該不是住宿就是餐廳就是店面，因為地勢關係必須上上下下，也有大量的階梯
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745750432/IMG_7087-1024x768_p4zl7m.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750430/IMG_6974-1024x768_x4otig.jpg`,
            },
          ]}
        />
        <Paragraph>
          等待日落。每到日落時分，這裡總是聚集非常多人，連走道都擠得水泄不通，為的就是一睹世界最美日落風采
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745750429/IMG_6949-1024x768_ejnmdf.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750431/IMG_7083-1024x768_eiqcxw.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750442/IMG_7547-1024x768_auph99.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750441/IMG_7519-1024x768_ibzq9c.jpg`,
            },
          ]}
        />
        <Paragraph>
          在聖托里尼待的時候幾乎每天都來這裡看日落，美到令人屏息，就是有這麼誇張
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750448/IMG_7590-1024x576_i6iqgj.jpg`,
          }}
        />
        <Paragraph>
          每次的夕陽都令人歎為觀止，每次心裡都很澎湃說這一幕怎麼可以這麼享受，好像所有煩惱憂慮都能在此時此刻被遺忘
          <br />
          也確實是被遺忘了，因為在那當下完全是被喜悅、滿足、享受所填滿啊！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750443/IMG_7556-1024x768_ediha9.jpg`,
          }}
        />
        <Paragraph>還有些夕陽餘暉，路上街燈開始亮起</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750445/IMG_7567-1024x768_ht649a.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750454/IMG_8221-1024x768_orei93.jpg`,
          }}
        />
        <Paragraph>
          手機拍不出夜景，到了晚上又是不同的氛圍，不一樣的感受
          <br />
          島上也是有些酒吧，比較多在 Fira， 但我去的那間挺難喝就是了
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Kamari 卡馬里" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750448/IMG_8152-1024x768_zpjshu.jpg`,
          }}
        />
        <Paragraph>
          Kamari 是我覺得在聖托里尼最棒的海灘，晚上還能看到流星
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750434/IMG_7139-1024x768_rztokf.jpg`,
          }}
        />
        <Paragraph>
          島上交通就兩種，公車或租車，早上搭公車來到
          Kamari，原本都是自己一人的旅行，在這裡遇到你後，開始有點變化
          <br />
          不過也就是放在心裡，偶爾想起是不可思議且美好的回憶
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750450/IMG_8173-1024x768_jdlk7j.jpg`,
          }}
        />
        <Paragraph>
          海邊發呆看書真的很享受，愛上這種海島日子
          <br />
          我把行程排得很鬆，留了一整天讓自己放空或思考事情
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Red Beach , White Beach" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750437/IMG_7376-1024x768_byogwz.jpg`,
          }}
        />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750439/IMG_7405-1024x768_j8kdws.jpg`,
          }}
        />
        <Paragraph>紅沙灘旁邊接著白沙灘，花個10歐坐船可以都去到</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750446/IMG_7579-1024x768_rwg943.jpg`,
          }}
        />
        <Paragraph>
          離開那天心情是五味雜陳，又來到這個小公園，很唐突的說再見
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Santorini 對我來說" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745750435/IMG_7161-1024x768_qihd6f.jpg`,
          }}
        />
        <Paragraph>
          聖托里尼整個就是藍白代表，一生一定要去一次的夢幻小島，有特色又充滿了度假風情，對很多人來說是如此，對我好像又有點不一樣，多了一份情感，一些對人事物的眷戀
        </Paragraph>
        <Paragraph>
          機車穿梭在蜿蜒路上(而且都不用戴安全帽)、夜晚海灘的流星配上啤酒、秘密景點和希臘咖啡、還有草莓味的雪茄……想紀錄下來又不想表達太多有點矛盾，卻也在這回想的過程中猛然憶起一些細節
        </Paragraph>
        <Paragraph>
          這座海島的藍是最令人印象深刻，好像可以包容所有的事物，心胸非常寬大，島上建築因應地勢形成一種特色也顯得獨特可愛，若要說安排希臘旅遊，聖托里尼絕不能錯過，全世界的遊客都想來，除了有他的魅力在，每個旅人也有自己體驗這小島的方式，都是獨一無二的
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoSantorini;
