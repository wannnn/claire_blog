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

const CiaoMuscatD1 = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="阿曼 – [馬斯喀特] Mutrah (馬托拉) 一日遊" />
      <CreatedDate date={"2024-07-25"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791663/IMG_3056_o8auiq.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyDate date="5 Dec 2023" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791673/FFC869F9-251F-4E58-B58B-68F3E83EF28F_i14da8.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791682/IMG_4054-scaled_qrmcvw.jpg`,
            },
          ]}
        />
        <Paragraph>
          旅遊的時候我習慣在 Google Map 上找餐廳，這次發現的寶藏咖啡店(Dukanah
          Cafe) 離我們飯店 (Ramada Encore by Wyndham Muscat
          Al-Ghubra)不遠，店面內部裝潢頗具阿曼風格，提供阿曼傳統菜餚，從早餐、咖啡、沙拉、甜點、正餐等一應俱全
        </Paragraph>
      </Section>

      {/* Dukanah Cafe */}
      <Section>
        <SubTitle title="Dukanah Cafe" />
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1751791686/IMG_3493-scaled_hvejkh.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1751791680/IMG_3494-scaled_ay4j1k.jpg`,
            },
          ]}
        />
        <Paragraph>
          我們來享用的是早餐，點了招牌 Dukanah Breakfast 以及店員推薦的 Qellyyah
          Omani Fried Meat
          <br />
          嘗試了阿曼的甜點 Juala &amp; Honey，有點像黑糖糕的感覺，我們本來還點了
          Karak Tea Pot，但是店員忘記了所以改成外帶杯
          <br />
          好險我們沒有喝到一整壺，因為這種香料的味道我有點不習慣😅 荳蔻味非常重
          <br />
          但整體來說這頓早餐很滿意！從餐廳氛圍到食物皆給予高分，如果來到阿曼馬斯喀特我很推薦
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791663/IMG_3053_dfryed.jpg`,
          }}
        />
        <Paragraph>
          吃飽早餐元氣滿滿，要開啟我們在首都馬斯喀特的行程了，今天主要會在
          Mutrah 這邊活動
          <br />
          先去參觀阿曼蘇丹皇宮，再去逛 Mutrah Souq、Mutrah Fort，然後沿著 Mutrah
          Corniche 看日落，晚餐結束這一天
        </Paragraph>
      </Section>

      {/* Al Alam Palace */}
      <Section>
        <SubTitle title="Al Alam Palace" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791666/IMG_3088_gwxiht.jpg`,
          }}
        />
        <Paragraph>
          阿曼蘇丹皇宮建築外觀優雅獨特，外觀融合了現代和傳統的伊斯蘭建築風格，藍色和金黃色裝飾顯眼，是阿曼豐富文化和歷史的象徵
          <br />
          皇宮不對外開放，遊客只能在門口拍照，目前作為接待貴賓、舉行儀式的場所
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791663/IMG_3055_vsajha.jpg`,
          }}
        />
        <Paragraph>
          門上大大的阿曼彎刀，彎刀在阿曼的國旗上也可以看到🇴🇲
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791663/IMG_3064_vp3qvw.jpg`,
          }}
        />
        <Paragraph>皇宮外一系列的建築群，這周遭幾乎都是政府機關</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791664/IMG_3077_cvppop.jpg`,
          }}
        />
        <Paragraph>
          阿曼蘇丹皇宮四面環山，兩旁花園修建整齊，整個園區維持得非常乾淨整潔
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791664/IMG_3086_td6v7n.jpg`,
          }}
        />
        <Paragraph>阿曼財政部</Paragraph>
      </Section>

      {/* Ali Musa Mosque */}
      <Section>
        <SubTitle title="Ali Musa Mosque" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791664/IMG_3090_aglesm.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751791663/IMG_3092_h3lab7.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791665/IMG_3098_xmaicn.jpg` },
          ]}
        />
        <Paragraph>
          這裡也是其中一棟阿曼財政部的建築，皇宮反方向走到底會看到阿曼國家博物館
          <br />
          男友去博物館借廁所，我在外面等，還遇到計程車司機來和我聊天喇賽，阿曼人真的蠻熱情的
        </Paragraph>
      </Section>

      {/* Mutrah Souq */}
      <Section>
        <SubTitle title="Mutrah Souq" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791672/IMG_3113_laptpa.jpg`,
          }}
        />
        <Paragraph>
          Mutrah Souq 就在熱鬧的濱海路旁，是阿曼古老且著名的市集
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791667/IMG_3101_giyys6.jpg`,
          }}
        />
        <Paragraph>逛市集永遠都是最令人興奮的一件事</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791666/IMG_3100_espmwx.jpg`,
          }}
        />
        <Paragraph>遇到一隻臉看起來很老氣的貓咪</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791678/IMG_3102_y93o6x.jpg`,
          }}
        />
        <Paragraph>
          這間地毯店看起來很高級，不敢進去看有多貴，但一直被這些精細的花紋吸引
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791670/IMG_3104_vslu2l.jpg`,
          }}
        />
        <Paragraph>
          店員們全部盯著我相機鏡頭看😅 在這裡做生意的我想幾乎都不是當地人
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791676/IMG_3106_lngunw.jpg`,
          }}
        />
        <Paragraph>
          阿曼小帽，在阿曼男生會戴這種各種花色的小帽子
          <br />
          即便都是阿拉伯國家，身穿白袍，這次來中東走訪
          UAE、阿曼、巴林、卡達發現這幾個國家在服飾裝扮上也有一些不一樣的特徵，很有趣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791674/IMG_3108_ybabbf.jpg`,
          }}
        />
        <Paragraph>
          市集外也是一整排的商家，各種服飾、馬賽克燈、駱駝娃娃等等，很容易在這裡買到好看且有特色的紀念品
        </Paragraph>
      </Section>

      {/* Al Diwaniya For Omani Sweets */}
      <Section>
        <SubTitle title="Al Diwaniya For Omani Sweets" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791673/IMG_3111_p2jrbr.jpg`,
          }}
        />
        <Paragraph>
          Omani Sweets，是一種 sweet jelly dessert，不只阿曼
          其他阿拉伯國家也有這種甜點，並且各有特色
          <br />
          Halwa，在阿拉伯語中是&quot;甜&quot;的意思，所以當地人也稱之為 Omani
          Halwa
          <br />
          我們在裡面試吃各種不同口味的
          Halwa，配上咖啡，旁邊的客人熱心的請我們吃不同口味還做介紹，一開始還以為他是這裡的老闆ＸＤＤ
          阿曼人真的非常熱情
          <br />
          最後我們買了一盒番紅花口味的帶回去，雖然不是說吃得很習慣，香料味真的很重！但可以分享給朋友們試看看
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791681/IMG_3518-scaled_tgnwch.jpg`,
          }}
        />
        <Paragraph>
          Mutrah 這一帶的濱海路，下午陽光非常好☀️ 在這裡散步是一大享受
          <br />
          過馬路來濱海這側時，遇到計程車司機來拉客，我們說明自己開車來，接著爺爺很熱情的和我們聊天
          <br />
          問我們是哪裡來的，我遇到的所有阿曼人都知道台灣！而且他還說下次來要聯絡他，要招待我們住他家😂
          帶我們玩
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791669/IMG_3118_xmlk77.jpg`,
          }}
        />
        <Paragraph>我們接著前往 Mutrah Fort</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791665/IMG_3119_qc7pyi.jpg`,
          }}
        />
        <Paragraph>截至目前為止，都好喜歡阿曼的一切</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791670/IMG_3121_lnx9nv.jpg`,
          }}
        />
      </Section>

      {/* Mutrah Fort */}
      <Section>
        <SubTitle title="Mutrah Fort" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791681/IMG_3123_voxe9j.jpg`,
          }}
        />
        <Paragraph>
          這是今天的最後一個景點，一個歷史悠久的堡壘，建於 16 世紀
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791666/IMG_3124_fu8c03.jpg`,
          }}
        />
        <Paragraph>現任的阿曼國王海賽姆</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791673/IMG_3127-1_fo2ga8.jpg`,
          }}
        />
        <Paragraph>抵達碉堡前必須先爬上樓梯</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791676/IMG_3130_vcxm6g.jpg`,
          }}
        />
        <Paragraph>從高處俯瞰阿曼灣的景色</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791678/IMG_3132_cxewps.jpg`,
          }}
        />
        <Paragraph>
          Mutrah Fort 的保存狀況不錯，上來後還有一間小咖啡店
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791675/IMG_3131_g0jlbm.jpg`,
          }}
        />
        <Paragraph>
          我還記得當下陶醉在這整片風景的感覺，風徐徐吹來，好想投入風的懷抱一同敞徉在阿曼灣上
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791667/IMG_3134_ljrya9.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1751791668/IMG_3146_eockdh.jpg`}
          text="在這裡拍了好幾張照都不膩😂"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791680/IMG_3546-scaled_dqujlh.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791679/IMG_3535-scaled_ufzrle.jpg`,
          }}
        />
        <Paragraph>
          Mutrah 最美的風景，不只有市集、還有海灣、山脈、城市
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791673/IMG_3156_enr3uy.jpg`,
          }}
        />
        <Paragraph>
          冬日的夕陽柔和，站在碉堡上，將馬斯喀特舊城區和港口一覽無遺
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791677/IMG_3170_l4qyp3.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791676/IMG_3172_dvgbws.jpg`,
          }}
        />
        <Paragraph>落日時分永遠是最浪漫的時刻</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791668/IMG_3176_ad6rbh.jpg`,
          }}
        />
        <Paragraph>回到 Mutrah Corniche 繼續追夕陽</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791668/IMG_3178_eq3qsp.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791674/IMG_3187_pk3bob.jpg`,
          }}
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751791669/IMG_3196_lj1xbd.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791664/IMG_3197_iwmiix.jpg` },
          ]}
        />
        <Paragraph>
          不遠處的清真寺又迎來了禱告聲，這是我們在中東每天都會聽到的熟悉聲音
        </Paragraph>
      </Section>

      {/* Bait Al Luban Omani Restaurant */}
      <Section>
        <SubTitle title="Bait Al Luban Omani Restaurant" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751791671/IMG_3210_ia6wyq.jpg`,
          }}
        />
        <Paragraph>
          在網路上看到評價不錯的正宗阿曼餐廳，入座會先上一杯乳香水，喝起來很特別
        </Paragraph>
      </Section>

      <Section>
        <ImageGallery
          images={[
            { url: `${CLOUDINARY_BASE}/v1751791671/IMG_3199_rgtsas.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791675/IMG_3203_xoante.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791664/IMG_3205_f8yjsj.jpg` },
            { url: `${CLOUDINARY_BASE}/v1751791678/IMG_3206_s8oi3v.jpg` },
          ]}
        />
        <Paragraph>
          用餐環境很放鬆，可惜露台座位都滿了，但室內也不錯
          <br />
          食物非常好吃，價格稍貴，飯後服務生遞上椰棗才是完美的
          ending，離開前還會在你的手上撒上玫瑰水，從進入餐廳到離開整體都很有儀式感👍
          推推
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoMuscatD1;
