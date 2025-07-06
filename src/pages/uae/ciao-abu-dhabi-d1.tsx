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

const CiaoAbuDhabiD1 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿布達比 – 謝赫扎耶德大清真寺 Sheikh Zayed Grand Mosque" />
      <CreatedDate date={"2024-03-11"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787143/IMG_2227_mxw4z5.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="29 Nov 2023" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787133/IMG_2143_dkplo9.jpg`,
          }}
        />
        <Paragraph>
          早上退房在杜拜的飯店，叫 Uber 去公車站，可以直接使用 nol card
          前往阿布達比
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787130/IMG_2152_xevtge.jpg`,
          }}
        />
        <Paragraph>
          先抵達住宿 check
          in，第一天在阿布達比的行程很簡單，只去謝赫扎耶德大清真寺（也稱阿布達比大清真寺）
          – 晚餐 – 回飯店
        </Paragraph>
      </Section>

      {/* Sheikh Zayed Grand Mosque */}
      <Section>
        <SubTitle title="Sheikh Zayed Grand Mosque" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787133/IMG_2154_fwd5bw.jpg`,
          }}
        />
        <Paragraph>
          Sheikh Zayed Grand Mosque 位在阿聯酋的首都 –
          阿布達比，清真寺紀念該國首位總統謝赫扎耶德
          <br />
          在進入建築物🥚之前，左手邊有一些賣長袍的店家，如果服儀不合規定，可以來這邊購買（⚠️現在已經沒有租借服務了），除此之外進到內部下手扶梯後有一排商店街
          (紀念品、餐廳、服飾)，也可以選購 Abaya
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787135/IMG_2161_a3osbi.jpg`,
          }}
        />
        <Paragraph>被這個氣勢震懾到了… 純白的外觀感覺高尚神聖</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787131/IMG_2177_oazzjm.jpg`,
          }}
        />
        <Paragraph>
          不是全世界最大的清真寺（不能大過聖地麥加）那就要當奢華第一！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787141/IMG_2201_kttdvs.jpg`,
          }}
        />
        <Paragraph>
          謝赫扎耶德大清真寺有固定的參觀動線，沿途也有規劃 photo stop
          可以拍攝各種不同角度的清真寺，四處有警衛維持著遊客秩序，我認為這樣的參觀品質非常好！拍照也可以避掉人群
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787139/IMG_2215_pqkhue.jpg`,
          }}
        />
        <Paragraph>世界上最大的大理石馬賽克花卉設計</Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751787153/IMG_2613-scaled_tthblm.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751787136/IMG_2225-rotated_yxfx1k.jpg`,
            },
          ]}
        />
        <Paragraph>穿袍子好熱，隨便拍都好美🥹</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787158/IMG_2295_whqkm8.jpg`,
          }}
        />
        <Paragraph>謝赫扎耶德大清真寺 – 列柱</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787143/IMG_2302-1_asg9ry.jpg`,
          }}
        />
        <Paragraph>
          謝赫扎耶德大清真寺的設計和建設可以說是世界的聯合之作，運用來自印度、義大利、德國、伊朗、馬其頓和阿拉伯聯合大公國等國家的藝術工匠和建築材料
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787138/IMG_2303_juk3uv.jpg`,
          }}
        />
        <Paragraph>清真寺在任何角落都維持的一塵不染</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787162/IMG_2346_no0thd.jpg`,
          }}
        />
        <Paragraph>
          進入禮拜殿，彷彿富有生命力的花卉沿著牆延伸而上，拱頂上的淺藍色花瓣水晶吊燈，鑲著圖案，精細繁複
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751787169/IMG_2365_oct9m4.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751787146/IMG_2347_kzcthc.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751787145/IMG_2324_incstm.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751787167/IMG_2364_szxeeh.jpg` },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787152/IMG_2358_luh2nh.jpg`,
          }}
        />
        <Paragraph>
          禮拜殿已經足夠讓我大開眼界、嘖嘖稱奇，進入主祈禱廳後更是讓我驚艷的說不出話來
          <br />
          迎面而來的巨大地毯重達35噸，是千名伊朗工匠手工織成的，耗時約兩年
          <br />
          來自德國慕尼黑的七個水晶吊燈也是一大看點，從沒見識過如此耀眼奪目的藝術品
          <br />
          棕梠樹意象的石柱，上方展開的葉子都是黃金打造
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          itemsPerRow={3}
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751787168/IMG_2335_txvqfn.jpg`,
              caption: "鑲有數百萬顆施華洛世奇水晶",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751787149/IMG_2340_nayaob.jpg`,
              caption: "禱告時間",
            },
            {
              url: `${CLOUDINARY_BASE}/v1751787155/IMG_2339_ayhg83.jpg`,
              caption: "世界上最大的手工編織地毯",
            },
          ]}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787148/IMG_2382_aembr1.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787157/IMG_2439_r2y7fl.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751787159/IMG_3026_gl2dpf.jpg`}
          text="維持清真寺的社交距離，有對情侶拍照很自然的搭起肩，保安人員馬上就走過來制止了，在清真寺拍照任何肢體接觸或奇怪手勢都是禁止的"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787150/IMG_2442_pvkvjp.jpg`,
          }}
        />
        <Paragraph>晚上打上燈光一定超美</Paragraph>
      </Section>

      {/* Cave */}
      <Section>
        <SubTitle title="Cave" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751787162/IMG_2448_yeltk9.jpg`,
          }}
        />
        <Paragraph>
          參觀完了謝赫扎耶德大清真寺，我們到了距離不遠的 Cave
          咖啡店休息一下，店內裝潢就像身處洞穴一樣
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751787164/IMG_2731-scaled_nh4duh.jpg`}
          text="順道在這邊吃了晚餐，兩道義大利麵都表現得非常出色！"
        />
      </Section>
    </div>
  </div>
);

export default CiaoAbuDhabiD1;
