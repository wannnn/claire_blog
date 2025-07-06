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

const CiaoVenice = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="浪漫水上之都～ 海上絲綢之路 - 威尼斯 (Venezia)" />
      <CreatedDate date={"2022-11-14"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554158/7516758736_IMG_7629-scaled_ux4htk.jpg`,
          }}
        />
      </Section>

      <MyDate date={"27 May 2018 (威尼斯 Day1)"} />

      <Section>
        <Paragraph>
          在波隆那轉車後繼續搭幾小時的車，終於我們抵達威尼斯！公車下車後我們還要走一小段路才會抵達聖馬可區
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554156/7516758736_IMG_7521-1024x683_kbuxyb.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554156/7516758736_IMG_7527-1024x683_oadhkc.jpg`,
          }}
        />
        <Paragraph>最溫馨的畫面，讓威尼斯旅程的一開始就心暖暖的</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554156/7516758736_IMG_7528-1024x683_elrtgw.jpg`,
          }}
        />
        <Paragraph>
          水都威尼斯位於義大利東北部威尼斯潟湖，由 118
          個小島組成，其歷史悠久風景迷人，是大家旅遊義大利絕對不會錯過的城市之一
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747554156/7516758736_IMG_7524-1024x683_dbmdkm.jpg`,
              caption: "還尚未擠滿遊客時的風景一隅",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7545-1024x683_idaeyv.jpg`,
              caption: "各種面具禮品店",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747554156/7516758736_IMG_7535-1024x683_kfek7z.jpg`,
              caption: "色彩鮮豔的房子",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747554156/7516758736_IMG_7523-1024x683_ph0kse.jpg`,
              caption: "平靜的水面與停靠的船隻",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7530-1024x683_cqzz97.jpg`,
          }}
        />
        <Paragraph>
          沒有汽機車的威尼斯，少了空氣污染和噪音，踩著細小的步伐慢慢前行，時間也彷彿慢下來陪你一起仔細觀察這座城市
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7541-1024x683_vd4h67.jpg`,
          }}
        />
        <Paragraph>
          雖然說有 Google Map 很難找不到路，但既然都在威尼斯了
          當然要捨棄手機把自己丟進這錯綜復雜的巷弄之中，尋找驚喜，迷路了也是一件幸福的事
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7540-1024x683_utsxts.jpg`,
          }}
        />
        <Paragraph>
          威尼斯這座世界著名的歷史文化古城，是威尼斯畫派的發源地，至今還閃著文藝復興的光芒，其建築、繪畫、雕塑、歌劇等，在世界上都有重要的地位和影響
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7560-1024x683_nn5f44.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554163/cropped-7516758736_IMG_7563-scaled-1-1024x513_e2mqbd.jpg`,
          }}
        />
      </Section>

      <Section>
        <SubTitle title="Ponte di Rialto 里阿爾托橋" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7570-1024x683_ymm8nt.jpg`,
          }}
        />
        <Paragraph>
          Rialto Bridge，是16
          世紀石造人行廊橋，義大利威尼斯四座橫跨大運河的橋梁之一，也是其中最古老的一座！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7587-1024x683_zipfsl.jpg`,
          }}
        />
        <Paragraph>
          在里阿爾托橋上欣賞大運河風光是一個很享受的時光！看著運河兩旁熙來攘往的人潮以及水上交通的繁忙、街道旁停靠的貢多拉，而我俯視並觀察著這城市的繁榮，愜意的斜靠在橋上，手中真的需要來一杯香檳啊！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554157/7516758736_IMG_7613-1024x683_dljeae.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554158/7516758736_IMG_7622-1024x683_knb1s6.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747554164/IMG_9881-768x1024_hz44lx.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1747554164/IMG_9885-768x1024_xpyyte.jpg`,
            },
          ]}
        />
        <Paragraph>好吃的墨魚麵🦑🦑🦑 6~7歐可以吃飽</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Campanile di San Marco 聖馬可鐘樓" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554158/7516758736_IMG_7630-1024x683_b0uyr1.jpg`,
          }}
        />
        <Paragraph>
          16 世紀教堂方塔，一定要上塔，可以一覽無遺威尼斯市區與海景
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Piazza San Marco 聖馬可廣場" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554159/7516758736_IMG_7634-1024x683_hceqh6.jpg`,
          }}
        />
        <Paragraph>
          除了壯觀的主教堂及代表性的鐘塔在此之外，聖馬可廣場這邊還有世界第二美麗的咖啡館(Caffè
          Florian)！
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Torre dell'Orologio 聖馬可時鐘塔" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554159/7516758736_IMG_7643-1024x683_rs9lfp.jpg`,
          }}
        />
        <Paragraph>
          1499 年的文藝復興時期塔樓，塔下的拱門則通往城市的主要街道
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Basilica di San Marco 聖馬可教堂" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554160/7516758736_IMG_7662-1024x683_anmh7f.jpg`,
          }}
        />
        <Paragraph>
          威尼斯的地標大教堂，有「金色聖堂」的美譽，內部確實金碧輝煌，且看起來非常華貴且神聖虔誠，另外教堂要求不能拍照，也不能穿太露（穿無袖或短褲會要你用外套遮）
        </Paragraph>
      </Section>

      <Section>
        <Video
          src={`${CLOUDINARY_VIDEO_BASE}/v1747554212/7516758736_MVI_7664_uloadu.mp4`}
        />
        <Paragraph>鐘聲迴盪在整個威尼斯廣場上</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554160/7516758736_IMG_7667-1024x683_rlmfvr.jpg`,
          }}
        />
        <Paragraph>
          總督宮(Palazzo Ducale)
          與入港的郵輪，廣場上滿滿滿的人潮顯現出了威尼斯是多麽熱鬧！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554160/7516758736_IMG_7671-1024x683_c61zrz.jpg`,
          }}
        />
        <Paragraph>再來放上一些我們在鐘樓上眺望整個威尼斯的風景</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554160/7516758736_IMG_7703-1024x683_fsxz9n.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554161/7516758736_IMG_7744-1024x683_jbsvh9.jpg`,
          }}
        />
        <Paragraph>
          一致的磚紅色屋頂，廣場上左下角的餐廳戶外座位排得井然有序，廣場右側的一排拱門看久了覺得好密集😂
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1747554165/IMG_9926-2-1024x768_sq3lmj.jpg`,
              caption: "🐷隊友也是最棒的隊友",
            },
            {
              url: `${CLOUDINARY_BASE}/v1747554165/IMG_9988-1024x682-1_gddajx.jpg`,
              caption:
                "島上的聖喬治馬焦雷教堂 (Chiesa di San Giorgio Maggiore)",
            },
          ]}
        />
      </Section>

      <Section>
        <SubTitle title="Ponte dei Sospiri 嘆息橋" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554161/7516758736_IMG_7815-1024x683_dqfbdk.jpg`,
          }}
        />
        <Paragraph>
          這座拱橋最出名的地方就在囚犯從總督宮走到監獄的途中，過橋時所發出的嘆息聲，可到對面麥桿橋上一睹嘆息橋全貌
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554164/IMG_0248-1024x683_oid3zg.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1747554163/IMG_0001-1024x682_opqtw3.jpg`}
          text="這張請命名為 &ldquo;<em>Waiting for a lover in Venice</em>&rdquo;"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554162/7516758736_IMG_7882-1024x683_ztmyl4.jpg`,
          }}
        />
        <Paragraph>
          我常常在傍晚的時候會感歎著時光的飛逝，念著白天美好的種種，卻又期待夜晚正要開始
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554162/7516758736_IMG_7908-1024x683_en5qvn.jpg`,
          }}
        />
        <Paragraph>
          暖橘街燈亮起，這時候的旅人是應該要找間不錯的餐廳或酒吧來當作這一天美好的收尾
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554165/IMG_9969-1024x768_hr1ufh.jpg`,
          }}
        />
        <Paragraph>閃閃發光的面具店，很威尼斯</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1747554162/7516758736_IMG_7919-1024x683_yisu93.jpg`,
          }}
        />
        <Paragraph>
          在運河旁的小酌，朋友拖鞋壞掉直接光腳去買冰淇淋，細微的小事好像還歷歷在目，晚安威尼斯🌛
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="CONTINUE..." />
      </Section>
    </div>
  </div>
);

export default CiaoVenice;
