import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageTextRow from "@root/components/typography/ImageTextRow";

const CiaoSapiManukan = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="KK 一日跳島 沙比島(Sapi Island)、馬奴干島(Manukan Island)、加雅街夜市 Day2" />
      <CreatedDate date={"2023-01-16"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569413/IMG_0203-scaled_gjkbzg.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date={"30 Dec 2022 (Day2)"} />
        <Paragraph>
          在亞庇第二天我們安排了沙比島和馬奴干島一日遊，大部分島上的行程還是購買行程比較方便，因為還有什麼私人島、登島費、水上活動...
          等等需注意，自己安排一切的話我覺得更麻煩
          <br />
          早上大概 7:30 會有專車到飯店接送至亞庇哲斯頓碼頭 (Jesselton Point
          Ferry Terminal)，大約 9:00 的時候上船出發
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747569419/IMG_7315-768x1024_nhhrnh.jpg`}
          text="哲斯頓這邊有一些攤販，抵達港口如果還沒吃早餐這邊也有蠻多選擇的，我買了一個 Gaya puff 試試看，外面就像是酥皮的口感，裡面包著甜醬"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569404/IMG_0090-1024x683_lnpl1e.jpg`,
          }}
        />
        <Paragraph>
          很幸運要跳島的這天天氣不錯，東姑阿都拉曼公園是馬來西亞的海洋型國家公園，距離
          KK 大約 15至20分鐘航程，他們是由加雅島 (Pulau Gaya)、沙比島 (Pulau
          Sapi)、馬穆迪島 (Pulau Mamutik)、馬奴干島 (Pulau Manukan) 和蘇洛島
          (Pulau Sulug) 等五個島嶼組成
          <br />
          我們搭乘的是像照片中的那種快艇，船尾第二排是最佳位置😂
          不會像船頭那樣首當其衝，也不至於吸太多船尾的汽油味
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Sapi Island 沙比島" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569421/IMG_7333-1024x768_tny3qg.jpg`,
          }}
        />
        <Paragraph>抵達我們的第一座小島沙比島！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569404/IMG_0112-1024x683_raqx89.jpg`,
          }}
        />
        <Paragraph>
          我後來都一直叫他傻逼 island.. 沒有那個意思只是很順口很可愛
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569403/IMG_0095-1024x683_oznama.jpg`,
          }}
        />
        <Paragraph>
          我們算是第一批抵達的遊客，今天的導遊是來幫我們接機的 Tommy
          哥，他說要拍照就要趁現在
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747569408/IMG_0147-1024x683_vokrtv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747569407/IMG_0141-1024x683_acbv8w.jpg`,
            },
          ]}
        />
        <Paragraph>
          人生第一張比基尼照... 這趟玩完之後那件泳衣應該也很久才會再穿了哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569405/IMG_0115-1024x683_db2jv3.jpg`,
          }}
        />
        <Paragraph>看海水那顏色分層的樣子！</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569407/IMG_0138-1024x683_fmcptv.jpg`,
          }}
        />
        <Paragraph>沙比島的海水清澈見底❤️</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569420/IMG_7336-1024x768_q9wnew.jpg`,
          }}
        />
        <Paragraph>真是謝囉！男友真的很會捕捉ㄆㄧㄚˇ眼的瞬間</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747569426/IMG_7340-768x1024_vq4key.jpg`}
          text='我們來沙比島唯一玩的水上活動 –
          "海底漫步"，戴上那頂超重的帽子下去大約五米深，氧氣會連接到帽子灌進來，只要不要彎腰讓帽子歪掉就不用擔心水跑進來，下去之後也有一條繩子可以拉著前進
          <br />
          老實說下面的能見度沒有想像中的高，有點濁濁的，但還是能看到很多珊瑚礁和很多魚圍繞在你身邊，一旁的教練也會幫大家一個一個拍照
          <br />
          我在漫步的時候還被魚咬了兩口，真的超痛，還留下小傷口'
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569424/IMG_7342-1024x768_mmnrqv.jpg`,
          }}
        />
        <Paragraph>
          上岸後好冷，跑到旁邊曬太陽，有個不好的消息是我們的照片全不見了，本來還想說也太好了吧拍了兩輪，原來是第一次他們不曉得為什麼照片上傳失敗，所以再來一次，沒想到第二次還是失敗，我們就在水裡待了40分鐘ＸＤ
          不過沒關係 有時候就是會有一些小插曲
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569425/IMG_7345-1024x768_tuotce.jpg`,
          }}
        />
        <Paragraph>
          海底漫步回來之後我們要在岸邊浮潛，浮潛的範圍有紅色旗子標示
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569405/IMG_0116-1024x683_kbjb71.jpg`,
          }}
        />
        <Paragraph>
          導遊和我們說 在這邊不管會不會游泳浮潛都要必須要穿著救生衣
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747569430/IMG_7372-768x1024_azniaa.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747569424/IMG_7352-768x1024_oqg0ow.jpg`,
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569427/IMG_7353-1024x768_bjek4h.jpg`,
          }}
        />
        <Paragraph>
          配上椰子水真的很渡假！
          <br />
          沙比島上有很多生態，我們有看到巨蜥和獼猴
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569429/IMG_7360-1024x768_vmdwwo.jpg`,
          }}
        />
        <Paragraph>
          一日遊行程是包含午餐的！很像以前學校營養午餐那樣有人幫忙打菜
          <br />
          順便一提這邊的棚子是參加 tour 的遊客才能放東西在這，會有人看著不用擔心
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569428/IMG_7361-1024x768_tiqoay.jpg`,
          }}
        />
        <Paragraph>掰掰沙比島👋</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Manukan Island (馬奴干島)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569431/IMG_7362-1024x768_n7ggrd.jpg`,
          }}
        />
        <Paragraph>相較沙比島，馬奴干島上的設施較多，有住宿及餐廳</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569409/IMG_0168-1024x683_kj8d6c.jpg`,
          }}
        />
        <Paragraph>
          我們在馬奴干島上的能停留時間比沙比島還少，因為我還想到處拍照所以就沒有去浮潛了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569411/IMG_0187-1024x683_qeqzui.jpg`,
          }}
        />
        <Paragraph>我的相機在拍完這張正式沒電</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569410/IMG_0178-1024x683_foo4ef.jpg`,
          }}
        />
        <Paragraph>繞來馬奴干島的某一側，這裡的景色我超喜歡！</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747569412/IMG_0192-1024x683_jyyluv.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747569413/IMG_0200-1024x683_beodwh.jpg`,
            },
          ]}
        />
        <Paragraph>
          馬奴干島可以狂拍不是問題，導遊說島上也有個小小上坡處可以俯瞰
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569433/IMG_7369-1024x768_opgi8v.jpg`,
          }}
        />
        <Paragraph>我說想要有荒島求生的感覺</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569438/KK_230128-1024x768_ecazkq.jpg`,
          }}
        />
        <Paragraph>這是我們上小坡的景色，但視野會被樹擋住</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569440/KK_230130-1024x768_yfmqm5.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569437/KK_230126-1024x768_slmzhe.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569431/IMG_7371-1024x768_m8b3gt.jpg`,
          }}
        />
        <Paragraph>
          約下午三點多快四點回到
          KK，結束一日兩島遊，早上接你來港口的司機會負責把你載回飯店，可以休息洗澡一下再去吃晚餐
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Gaya Street (加雅街)" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569414/IMG_0215-1024x683_r0yhlm.jpg`,
          }}
        />
        <Paragraph>
          加雅街在禮拜五六晚上都有夜市，禮拜日早上有假日市集！我覺得很好逛而且許多好吃的都集中在這邊
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569423/IMG_0217-1024x683_alluwg.jpg`,
          }}
        />
        <Paragraph>
          這邊的人很喜歡吃烤雞翅，很常看到攤販前冒超多煙，路邊也有，就知道在賣雞翅了
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="佑記肉骨茶 (Yu Kee Bak Kut Teh)" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747569415/IMG_0222-1024x683_eh4ka1.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747569416/IMG_0223-1024x683_vukkfe.jpg`,
            },
          ]}
        />
        <Paragraph>
          佑記用餐時段真的很多人，我們都坐到店外人行道上了！
          <br />
          我們點了冬菇、三層肉、腰子、油條、油菜，肉骨茶湯頭甘甜不是胡椒味很重的那種！
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747569435/IMG_7396-768x1024_dms2qt.jpg`}
          text="飯後甜點椰子布丁，我的天啊超好吃！我要給120分！"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747569434/IMG_7375-1024x768_ooot5c.jpg`,
          }}
        />
        <Paragraph>
          在台灣夜市我們也有這種桶裝飲料賣愛玉、金吉檸檬、冬瓜茶之類的，這裡的飲料顏色看起來....
          各種五顏六色😂
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747569441/IMG_7398-1024x768_moqiep.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747569433/IMG_7374-1024x768_v9nivn.jpg`,
            },
          ]}
        />
        <Paragraph>
          在佑記吃飯的時候其實就有點飄毛毛了，沒想到吃飽才剛逛夜市不久便下起大雨
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747569436/IMG_7397-768x1024_uepkfg.jpg`}
          text="夜市的這間水果攤色彩繽紛看起來都很可口，我們買一些回飯店吃"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747569417/IMG_0224-1024x683_djm4bq.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747569418/IMG_0228-1024x683_vwxdgc.jpg`,
            },
          ]}
        />
        <Paragraph>
          店員問要不要辣醬，我覺得也太奇妙了這邊水果會沾辣醬吃，當然要試試，水果是秤重的再加上那杯醬所以沒太便宜
          <br />
          然後我們也逛了雜貨店買了較較餅當明天點心
          (我以為是什麼餅乾吃了會乒乓叫？其實就蘇打餅ＸＤ)
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="To be continue..." />
        <Paragraph>
          出發前就一直蠻期待沙巴跳島的，湛藍的天空和寶石般的海水對我來說實在非常療癒，在沙比島和馬奴干島上就是盡情享受和放鬆，想下水的時候就去看看魚和珊瑚礁，想休息的時候就在沙灘上躺著曬曬陽光，渴了來顆椰子水，什麼都不用想
          只要在乎眼前這片美景就好！晚上感受一下當地的夜市，探索不一樣的美食，熙來攘往的人群中遇到許多友善的微笑，雖然大雨無法再繼續好好逛夜市，那就早點回去睡覺養精蓄銳為了明天的神山囉
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoSapiManukan;
