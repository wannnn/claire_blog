import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoSurWadiShab = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿曼海岸線 – 小漁村 Sur、河谷健行 Wadi Shab、Bimmah Sinkhole" />
      <CreatedDate date={"2024-06-23"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791581/IMG_2999_c2wl53.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="4 Dec 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791579/IMG_2951_gzqavb.jpg`,
          }}
        />
        <Paragraph>
          離開沙漠，今晚就要到阿曼首都馬斯喀特了
          <br />
          沿途我們會經過素爾(Sur)，也會去 Wadi Shab、 Bimmah Sinkhole
          這些阿曼知名景點
        </Paragraph>
      </Section>

      {/* Sur */}
      <Section>
        <SubTitle title="Sur" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791579/IMG_2956-1_rhasmn.jpg`,
          }}
        />
        <Paragraph>
          將導航定位到 Al Ayjah
          Watchtower，本來想計劃爬上去，在上面看風景的，殊不知我們一直找不到入口處…
          <br />
          但還是不得不提到阿曼真的好多堡壘、防禦性碉堡、塔，阿曼特色滿滿
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Al Ayjah Bridge" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791580/IMG_2957_xifgle.jpg`,
          }}
        />
        <Paragraph>
          車開到橋附近不曉得如何前往 Al Ayjah Watchtower，Google Map
          上沒有查到太多資訊，於是我們就停在這邊欣賞橋景，休息一下，也因為到 Sur
          的時間比預期晚了，怕下午的行程來不及，回到馬斯喀特會太晚，我們必須趕快去吃個午飯然後出發
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Al Hawash Restaurant" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791580/IMG_2958_ptkiwr.jpg`,
          }}
        />
        <Paragraph>
          在地圖上看到大家很推薦這間餐廳，Sur
          以海鮮聞名，必須來這裡品嚐一下海鮮料理
          <br />
          餐廳內部明亮整潔，還可以邊用餐邊享受海景，服務生也親切
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791584/IMG_3898-2-scaled_ay9tn1.jpg`,
          }}
        />
        <Paragraph>
          我們點了海鮮塔吉鍋(Sea Food Tajine)、沙拉 以及新鮮果汁
          <br />
          不小心點到整盤都是芝麻葉的沙拉，吃到最後真的是啃不下去了ＸＤ 太多
          <br />
          海鮮塔吉下飯又好吃，應該要說下餅？哈哈哈 很推薦
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791580/IMG_2959_wkgef7.jpg`,
          }}
        />
        <Paragraph>
          走出餐廳稍微散步一下，眺望對面的燈塔(Al-Ayjah
          Lighthouse)，很可惜沒有時間好好探索 Sur，就要匆匆離開了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791580/IMG_2960_fsn3cc.jpg`,
          }}
        />
        <Paragraph>
          即便只有短暫的停留，我還是對這個阿曼小漁村印象深刻，Sur
          有迷人的風景、放鬆的氛圍
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791580/IMG_2966_wo9ibu.jpg`,
          }}
        />
        <Paragraph>
          沿著濱海道路往北開，海景真的是驚人的美，兩種不同飽和的藍色中間看得出明顯界線，這是令人感到很放鬆的藍
        </Paragraph>
      </Section>

      {/* Wadi Shab */}
      <Section>
        <SubTitle title="Wadi Shab" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791582/IMG_3407-scaled_pc2aph.jpg`}
          text="我認為阿曼最迷人的地方就是他豐富的地理景觀、自然美景，有沙漠、山脈、河谷、海灣等等<br /><br />來到 Wadi Shab 有一些注意事項：<br />– 真正的河谷健行會在搭船到對岸之後開始，必須留意最後一班船的時間<br />– 有的路段會滑，一定要穿適當的鞋子<br />– 記得帶小鈔支付船費(1 OMR)<br />– 想要探索神秘洞穴只能游泳抵達 (岸上有救生衣可租借！如有需要)，個人物品要帶著游就要準備防水袋，也有人丟在岸上，但不保證安全"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791582/IMG_2973_wxacp1.jpg`,
          }}
        />
        <Paragraph>
          Wadi Shab
          是阿曼非常熱門的旅遊目的地，外國遊客非常多！我們準備要搭船過河了
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791583/IMG_3418-scaled_vfxdtr.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791584/IMG_3422-scaled_duj8bl.jpg`,
            },
          ]}
        />
        <Paragraph>
          在這條河谷中一年大部分時間都是乾涸的，我們可以很輕鬆的在這裡健行、穿過岩石、繞過巨石
          <br />
          穿越不同的景觀如椰棗園、水池及瀑布都令人讚嘆其大自然的美妙
          <br />
          可以看出我腳下石頭凸出的部分是比較光滑的，在經過這些地方時要格外小心
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751791581/IMG_2987_pmwg48.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791580/IMG_2984_s2cspk.jpg` },
          ]}
        />
        <Paragraph>
          晶瑩剔透的湖水藍綠，如寶石般的光澤，水面上清晰的倒影，在光線照射下波光粼粼
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791581/IMG_3022_t9s7ci.jpg`,
          }}
        />
        <Paragraph>
          阿曼的 Wadi Shab 絕對是個天堂，很值得造訪
          <br />
          在路途中有一處必須涉水，水位高達膝蓋，去程時我順利踩著石頭通過，但回程悲劇就發生了了，石頭沒踩好掉到水裡，鞋子全濕掉😭，建議還是脫鞋子褲子捲起來過吧，或穿可以涉水的鞋子
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791581/IMG_3003-rotated_d8goiy.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791581/IMG_3008-1-rotated_foulgf.jpg`,
            },
          ]}
        />
        <Paragraph>
          再來就是 Wadi Shab 最酷的地方了，健行約 40-50
          分鐘後會看到大家紛紛在這邊下水
          <br />
          因為最終的秘密景點是一個有小瀑布和藍天的洞穴，只有游泳才能到
          <br />
          我不會游泳 也不打算冒險，出發前有先看過其他 youtuber
          游到洞穴的影片，這樣就滿足了😂
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791583/IMG_3023_jeaous.jpg`,
          }}
        />
        <Paragraph>
          Wadi Shab
          是許多自然愛好者必遊的目的地，喜歡冒險的遊客可以游泳穿過狹窄的通道，發現隱藏的洞穴和瀑布
          <br />
          這裡是我在阿曼喜愛的景點之一，也真心覺得阿曼這個國家就像寶藏一樣很多地方可以探索
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791581/IMG_3034-rotated_sdtt8k.jpg`}
          text="準備回程了"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791582/IMG_3041_ehqxwc.jpg`,
          }}
        />
        <Paragraph>
          不到一轉眼的工夫 陽光已漸漸從山頭消失
          <br />
          我會覺得早一點來
          山谷中的光線比較足，拍照比較好看，接近傍晚的話是比較涼，各有好處
        </Paragraph>
      </Section>

      {/* Bimmah Sinkhole */}
      <Section>
        <SubTitle title="Bimmah Sinkhole" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791582/IMG_3044_pnp1jj.jpg`,
          }}
        />
        <Paragraph>
          沿著海岸線繼續往北行駛約20分鐘，阿曼的另一個知名景點 Bimmah Sinkhole
          就到了
          <br />
          外面有很大的停車場，進入園區後外圍是公園，之後就會看到這個巨大天坑
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791586/IMG_3452-scaled_lwx6wr.jpg`}
          text="Bimmah Sinkhole 其實是嚴重塌陷形成，裡面的水是鹹的<br />我們抵達 Bimmah Sinkhole 已經不早了，所以只能夠短暫停留，水的顏色特別而且清澈，如果有陽光的話我相信會非常漂亮"
        />
      </Section>

      {/* Mazahbi Salalah Restaurant */}
      <Section>
        <SubTitle title="Mazahbi Salalah Restaurant" />
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791585/IMG_3463-scaled_ila0ug.jpg`}
          text="經歷一番波折抵達阿曼首都馬斯喀特，我們在前往途中遇到高速公路改道，找替代道路很久，比預期還晚快一小時才終於到飯店<br />晚餐我們來吃阿曼當地食物，餐廳給我們坐包廂，品嚐駱駝肉，怕有腥味我們選擇了紅燒口味，飯依舊是超大份ＸＤ蔬菜也只有生菜，駱駝肉果然像大家所說的吃起來像牛肉耶！但是油脂比較多的牛肉，個人認為不錯吃👍"
        />
      </Section>
    </div>
  </div>
);

export default CiaoSurWadiShab;
