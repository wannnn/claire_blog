import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";
import ImageGallery from "@root/components/typography/ImageGallery";

const CiaoSegovia = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="馬德里近郊一日遊 - 塞哥維亞(Segovia)" />
      <CreatedDate date={"2021-05-22"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764792/IMG_8666-scaled_qgxhci.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 29 2018"} />

      <Section>
        <Preface>
          來到馬德里都不會錯過這個小鎮吧，衝著這世界遺產水道橋而來的啊！Segovia
          在馬德里北方約90公里處，搭巴士過去一個多小時，車票 14.75 €
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764784/IMG_8505_ypcdgr.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764767/IMG_8508-1024x768_byl6vg.jpg`,
          }}
        />
        <Paragraph>
          當天的天氣雲超厚，空氣有點悶，很炎熱，巴士站下車後走到外面的大馬路上也不見啥人影
          <br />
          我去一間雜貨店買喝的，最近很愛喝 soya milk 喝起來像豆漿又像燕麥奶
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764768/IMG_8511-1024x768_ryn8jz.jpg`,
          }}
        />
        <Paragraph>前往主廣場的路上，這裡有種小山城的感覺</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764796/IMG_8513_lokjxz.jpg`,
          }}
        />
        <Paragraph>
          這裡的建築對我來說像精緻的繡花手帕一樣，哈哈不知道這個形容有沒有到位，但確實有特點
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764810/IMG_8515_ahrnsj.jpg`,
          }}
        />
        <Paragraph>
          我喜歡遠眺過去是一片大綠地的感覺，有股想往前狂奔到前面那塊的勁
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Catedral de Segovia 塞哥維亞主教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764793/IMG_8532_euuf2v.jpg`,
          }}
        />
        <Paragraph>
          哥德式大教堂，沒有進去參觀，外面拍照過過癮，只是這是我第一次看到這麼多小尖塔的教堂，好像玉米筍
          🌽
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Plaza Mayor 主廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764769/IMG_8537-1024x768_wvbknu.jpg`,
          }}
        />
        <Paragraph>
          這裡是 Segovia
          的主廣場，位於古城中心，周圍很多餐廳咖啡廳，且聚集很多人民，可以在這好好休息享用美食聊天
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764769/IMG_8542-1024x576_uqra3b.jpg`,
          }}
        />
        <Paragraph>廣場中央有個涼亭，有樂隊在表演，大家都享受在其中</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764786/IMG_8551_lf6zdf.jpg`,
          }}
        />
        <Paragraph>繼續鑽往主廣場周圍延伸出去的路</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764804/IMG_8556_qdvtxl.jpg`,
          }}
        />
        <Paragraph>發掘各式各樣特色建築</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764801/IMG_8557_d25hci.jpg`,
          }}
        />
        <Paragraph>
          Segovia 有烤乳豬這道名菜，現在回想起來應該去嚐嚐的
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Alcázar de Segovia 塞哥維亞城堡" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764796/IMG_8569_xvzhfh.jpg`,
          }}
        />
        <Paragraph>
          據說迪士尼白雪公主的城堡就是以他為藍圖所描繪，這裡很美，記得要從最上面的平台由上往下看，視野絕對值得！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764802/IMG_8578_iy9dvh.jpg`,
          }}
        />
        <Paragraph>
          這是屬於軍事行的城堡，偏防禦，因為戰略考量下，城堡建在陡峭的山壁上，加上護城河阻隔，抵擋敵人入侵
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764789/IMG_8584_afjrrt.jpg`,
          }}
        />
        <Paragraph>皇宮內細部，在逛累的時候看到這張床，很想躺誒</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764775/IMG_8586-1024x768_yjmix1.jpg`,
          }}
        />
        <Paragraph>
          好不容易登塔後眺望的風景，整個好像身在中世紀的錯覺，遠方那小小高起來的建築是
          Iglesia de la Vera Cruz 教堂，也是歷史悠久可以追溯到13世紀
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Iglesia de San Martín 聖馬丁大教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764776/IMG_8632-1024x768_ukr9mi.jpg`,
          }}
        />
        <Paragraph>融合摩爾、伊斯蘭、伊斯蘭風格的教堂，歷史悠久</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764780/IMG_8636-1024x768_w5wkgr.jpg`,
          }}
        />
        <Paragraph>
          教堂就坐落在街道中間，這個城鎮的心臟地帶，我覺得來這邊的遊客並不多
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Casa De Los Picos 鳥喙之家" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764772/IMG_8644-1024x768_om2gzk.jpg`,
          }}
        />
        <Paragraph>
          奇特的外觀，看起來像吸音海綿 XD  裡面似乎是藝術教育中心？？
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764773/IMG_8647-1024x576_pcushc.jpg`,
          }}
        />
        <Paragraph>望過去一整片紅磚屋頂</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764778/IMG_8654-1024x768_ichmh9.jpg`,
          }}
        />
        <Paragraph>
          感覺這裡應該要是很熱鬧的街道，怎麼好多店家都沒營業
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Aqueduct of Segovia 古羅馬水道橋" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764782/IMG_8661-1024x576_ixi3bv.jpg`,
          }}
        />
        <Paragraph>終於要到了重頭戲，搜集世界遺產</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764798/IMG_8903_rlutr6.jpg`,
          }}
        />
        <Paragraph>
          塞哥維亞的古羅馬水道橋不僅壯觀也保存完好，是當地地標
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764805/IMG_8842_t3k4hg.jpg`,
          }}
        />
        <Paragraph>
          已不管整個臉背光了，剛好下午的陽光將水道橋的影子拉得長長的，我在這裡拍得不亦樂乎
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745764779/IMG_8663-1024x768_umtmdd.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745764808/IMG_8989_rmu15s.jpg`,
            },
          ]}
        />
        <Paragraph>
          羅馬帝國版圖之大，遺跡在歐洲處處可見，水道橋的建築可以克服各種高低地形，將遠方的水引到城區內
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764800/IMG_8995_ft2dsd.jpg`,
          }}
        />
        <Paragraph>是差不多結束一日的小旅行了，悠悠晃去巴士站等車</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Templo de Debod 德波神廟" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764792/IMG_8997_lvyb72.jpg`,
          }}
        />
        <Paragraph>
          回到馬德里的傍晚時分，前往還未踩點的德波神廟
          <br />
          埃及政府為了感謝西班牙幫忙亞斯文大壩的維護和遷移，於是將德波神廟送給西班牙，神廟在搬遷時被切成許多的石磚，運到馬德里再重建完成
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764786/IMG_9004_e41jxo.jpg`,
          }}
        />
        <Paragraph>在這美好的夕陽餘暉下，結束滿滿收穫的一天</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745764788/IMG_9015_ftujx5.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745764806/IMG_8990_xpbotm.jpg`,
            },
          ]}
        />
        <Paragraph>
          晚餐在太陽門廣場附近的炒麵店，為了撐版面勉強放一下同行友人的照片 XD
          <br />
          已經曬到變黑炭了還穿一身黑😂
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Segovia 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745764771/IMG_8558-1024x768_lrykfr.jpg`,
          }}
        />
        <Paragraph>
          這裡是寧靜且風景極具特色的古城，大小適中讓你一天逛完還有活力可以去酒吧👍
          <br />
          放慢速度欣賞老城每個角落，悠悠哉哉地走在復古的街道，欣賞歷史遺跡，敞洋在塞哥維亞獨特的氛圍中，我覺得很舒服又很愜意，絕對值得來一趟
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoSegovia;
