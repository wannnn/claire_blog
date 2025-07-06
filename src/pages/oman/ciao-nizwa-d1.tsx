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

const CiaoNizwaD1 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿曼 – 曾經的舊首都 尼日瓦 Nizwa" />
      <CreatedDate date={"2024-04-18"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789219/IMG_3008-scaled_tnfkdk.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="1 Dec 2023" />
        <Paragraph>
          在出發阿曼的前一天發生了一個小插曲，原先查到的資訊是免簽證的，直到航空公司出發前一天寄來
          check in 的
          email，必須填上簽證號碼，我感覺有點不對勁，最後在背包客站上最新資訊看到阿曼已經在同年8月結束免簽了
          <br />
          火燒屁股趕緊上網申請電子簽證，不然怕到時候上不了飛機，好險簽證下來的超快，付款完成十分鐘後就收到了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789180/IMG_2546_emr2yb.jpg`,
          }}
        />
        <Paragraph>
          下機後領完車先直奔吃午餐，這間餐廳（Rozna Restaurant）是我在 google
          map 上滑到的，距離機場不遠，又頗具特色
          <br />
          Rozna 的設計來自於阿曼古老城牆、堡壘和城堡的建築，充分顯現阿曼歷史精神
        </Paragraph>
      </Section>

      {/* Rozna Restaurant */}
      <Section>
        <SubTitle title="Rozna Restaurant" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789212/IMG_3430-scaled_yvqg4v.jpg`,
          }}
        />
        <Paragraph>
          進入餐廳後，裡面不少客人在用餐，週五是穆斯林國家的假日，櫃檯服務生告知我們今天的用餐形式是自助餐而非單點
          <br />
          帶我們入座後就可以去覓食了，Rozna 是傳統阿曼餐廳，當天品項有雞肉及羊肉
          byriani、湯品(駱駝骨湯、海鮮湯等)、阿拉伯式沙拉、阿曼烤肉、各式飲品、水果、甜點，非常豐富且多樣選擇！而且現場還有一個阿姨在做餅(有點像可麗餅的樣子)，在杜拜第一天吃傳統餐廳的時候也有類似的
          <br />
          吃下來整個很飽，很推薦
          Rozna！在古色古香的環境中享用傳統阿曼美食，當天的用餐價格 18.9 OMR /
          2人
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789224/IMG_3440-scaled_vcn2zg.jpg`,
          }}
        />
        <Paragraph>
          來阿曼旅遊首選就是租車了，不然移動會很麻煩，我們有被租車公司要求還車前要洗車！（沙漠的粉塵不是蓋的，真的很髒）
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789179/IMG_2552_v3bpfx.jpg`,
          }}
        />
        <Paragraph>
          吃飽後直奔尼日瓦，我們在阿曼的旅遊策略是繞一個逆時針，最後再回來首都馬斯碦特
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789184/IMG_2553_wet6ke.jpg`,
          }}
        />
        <Paragraph>在阿曼自駕蠻舒服的，道路寬、車輛少</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789181/IMG_2556_xnpfuq.jpg`,
          }}
        />
      </Section>

      {/* Antique Inn – Nizwa */}
      <Section>
        <SubTitle title="Antique Inn – Nizwa" />
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751789185/IMG_2561_wql618.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751789192/IMG_2563_c4ecvi.jpg` },
          ]}
        />
        <Paragraph>
          抵達尼日瓦後前往 check in，當初在搜尋尼日瓦住宿時
          就深深被這間老城區內精心修復的歷史建築吸引，飯店地理位置非常優越，走路就可以到尼日瓦堡和市集，不只
          Antique Inn，附近也許多同樣是古蹟改建的住宿
          <br />
          由於我們中午才抵達阿曼，於是就完美錯過週五早上才有的羊市集了，是在尼日瓦覺得唯一可惜的地方
        </Paragraph>
      </Section>

      {/* Nizwa Fort */}
      <Section>
        <SubTitle title="Nizwa Fort" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789209/IMG_2628_hcdgum.jpg`,
          }}
        />
        <Paragraph>
          由於比我們預期抵達尼日瓦的時間還晚（因為中間還走錯路），所以進入尼日瓦堡的時候天色已經昏暗，但我們依舊按照原定計劃進行第一個行程
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789189/IMG_2565_uzmgja.jpg`,
          }}
        />
        <Paragraph>
          進入尼日瓦堡的門票是 5 OMR，包含這間 Nizwa Fort Cafe 的冰淇淋優惠券
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789195/IMG_2573_upw2wf.jpg`,
          }}
        />
        <Paragraph>
          尼日瓦堡建於1668年，作為一個防禦堡壘，裡面處處都是機關禦敵，在阿曼有許多像這樣的堡壘，後續我們也會陸續參觀幾個知名的
          <br />
          而尼日瓦堡是非常大且古老的，修復也很完整，維護良好。城堡內有各種暗室、房間、地牢、祈禱室等等
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789201/IMG_2605_ovwba8.jpg`,
          }}
        />
        <Paragraph>這是一個椰棗配紅茶的休息節奏</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751789195/IMG_2607_ykr1cw.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751789186/IMG_2610_yp9deo.jpg` },
          ]}
        />
        <Paragraph>
          尼日瓦堡的規模很大，參觀分為三部分，城堡，堡壘，最後是花園，花園還有養小動物
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789197/IMG_2615_p3vqf4.jpg`,
          }}
        />
        <Paragraph>
          非常喜歡這種阿拉伯式的休息區，很有韻味，再搭配尼日瓦的陶罐手工藝，充滿特色
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789202/IMG_2621_tjymgh.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789190/IMG_2623_gccmrq.jpg`,
          }}
        />
        <Paragraph>
          尼日瓦是阿曼內陸地區最大的城市，在西元6世紀左右的時候曾經是阿曼王國的首都
          <br />
          城牆的外面就是尼日瓦市集了，逛完了 NIzwa Fort 我們要去市集逛一逛
        </Paragraph>
      </Section>

      {/* Nizwa Souq */}
      <Section>
        <SubTitle title="Nizwa Souq" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789206/IMG_2631_otvq7b.jpg`,
          }}
        />
        <Paragraph>
          尼日瓦以手工藝品和農產品聞名，看到這些陶罐我已經快失心瘋了～
          點上暖黃的燈光 超精緻超可愛的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789199/IMG_2634_u6qkct.jpg`,
          }}
        />
        <Paragraph>
          我已經打算明天要帶走一個迷你版尼日瓦堡，還有一些杯子當紀念品
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789217/IMG_2635_znv5al.jpg`,
          }}
        />
        <Paragraph>
          老城區市集實在是太迷人，令人流連忘返，我沈浸在傳統阿曼的氛圍中，逛過一間又一間的手工藝品店
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789215/IMG_2638_r8jeah.jpg`,
          }}
        />
        <Paragraph>走到了 Nizwa Souq 旁的阿曼甜點市集</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789222/IMG_2637_kqxhsz.jpg`,
          }}
        />
        <Paragraph>
          Omani Sweet 也就是 Omani Halwa，<strong>Halwa</strong>{" "}
          在阿拉伯語的意思是甜，言下之意為阿曼式的甜點，是一種 sweet jelly
          dessert
          <br />
          在我去的幾個附近阿拉伯國家像是巴林跟卡達都有看到，應該每個國家都有自己特別的地方
        </Paragraph>
      </Section>

      {/* Mashawi Al Wadi – Nizwa */}
      <Section>
        <SubTitle title="Mashawi Al Wadi – Nizwa" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789215/IMG_3453-scaled_rhimvu.jpg`,
          }}
        />
        <Paragraph>
          在尼日瓦古城區附近我覺得餐廳不多，剛好經過這間烤肉，物價便宜、食物又好吃
          <br />
          內用裡面全部都是穿白袍的男子，我們兩個亞洲人略顯突兀哈哈哈
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751789210/IMG_3451-scaled_kxyxut.jpg`}
          text='我們吃了好幾個菜單上的 "sandwitch"，他小小的，可以吃好幾條，我們後來又跑來外帶回去吃，這家還能刷卡'
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751789204/IMG_2646_bskrqt.jpg`,
          }}
        />
        <Paragraph>
          回到住處，老宅的細節令人愛不釋手，考慮以後家裡可以佈置成像這樣的元素
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoNizwaD1;
