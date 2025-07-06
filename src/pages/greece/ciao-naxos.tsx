import CreatedDate from "@root/components/typography/LastUpdate";
import ImageGallery from "@root/components/typography/ImageGallery";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";

const CiaoNaxos = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="希臘寧靜小島推推 - 納克索斯(Naxos)" />

      <CreatedDate date={"2021-03-04"}></CreatedDate>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660061/IMG_7625_phwoqb.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 21 2018 - June 23 2018"}></MyDate>

      <Section>
        <Preface>
          離開 Santorini 前往下一個小島，本來在 Mykonos 和 Naxos
          之間猶豫，但不想去人太多的小島，才決定 Naxos，Mykonos
          下次一定有機會再去
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660060/IMG_7617-1024x768_zg9juj.jpg`,
          }}
        />
      </Section>
      <MyImage
        image={{
          url: `${CLOUDINARY_BASE}/v1745660060/IMG_7623-1024x768_h4vyek.jpg`,
        }}
      />

      <Section>
        <Paragraph>
          果然是座挺寧靜的小島，從我下船的那些零星遊客，到我繼續往前走到計程車招攬生意這沒幾步路，全部散去
          <br />
          島上交通說真的很不便，所以民宿會事先詢問抵達時間來接送，當我看到一位爺爺舉著牌上面寫我的名字，覺得好溫馨哈哈，我是第一次體驗
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660056/IMG_7595-1024x768_lhzlbl.jpg`,
          }}
        />
        <Paragraph>
          也因為不是熱門小島的關係，讓我在旅遊旺季還訂到一間很不錯的套房，還有陽台
          <br />
          對了我希臘的行程是在四月多就開始規劃了，買廉航機票訂住宿等等…
          免得越接近越貴
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745660057/IMG_7599-scaled_lbxmwd.jpg`}
          text="第一天抵達時間也不早，check in 完接近傍晚時分，開始出門找吃的。不負眾望還是我最愛的希臘捲餅，實在經濟實惠"
        />
      </Section>

      <Section>
        <SubTitle title="Plaka beach" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660058/IMG_7601-1024x768_j47luu.jpg`,
          }}
        />

        <Paragraph>
          這次同樣到一個海邊，去放空思考人生，真的愛上海島生活了完全！！！
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745660057/IMG_7600_pmufef.jpg`}
          text="Greek salad 是我超愛的希臘傳統美食，清爽又可口，沒有那種一大片生菜，只有濃濃的地中海風情、橄欖油、feta cheese、番茄、bell pepper… 我大愛！！"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660059/IMG_7604-1024x768_xmbxlj.jpg`,
          }}
        />
        <Paragraph>太陽依舊毒辣，歐洲人就喜歡曬日光浴，以及小麥膚色</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660059/IMG_7609-1024x768_en2gc2.jpg`,
          }}
        />
        <Paragraph>
          水非常清澈，這裡的水質很好沒受到其他污染
          <br />
          我的腳覺得很黏因為我塗超多防曬
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660062/IMG_7637-1024x768_nidvnd.jpg`,
          }}
        />
        <Paragraph>
          在海邊泡到接近下午慢慢離開，再慢慢晃去阿波羅神殿看夕陽
          <br />
          這一路都是慢慢慢慢，時間過得很慢、我的步伐很慢、島上的步調很慢，唯獨腦袋還在快速運轉
          <br />
          這種慢生活一開始確實不習慣，有時候總喜歡把行程掐的剛好，這次學著放慢，感受自己、感受身邊的一切
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660064/IMG_7663-1024x768_lpqa6j.jpg`,
          }}
        />
        <Paragraph>
          山和海我會選海，總覺得有種魔力，他會包容你所有的一切，聽你傾吐任何事
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660062/IMG_7654-1024x768_ymbb0g.jpg`,
          }}
        />
        <Paragraph>在這裡發呆一下</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660066/IMG_7689-1024x576_zrh6nn.jpg`,
          }}
        />
        <Paragraph>
          站在小山坡的高處看
          Chora，仔細看左邊的海水和右邊的海水，一邊比較波動另一邊寧靜。
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Temple of Apollo" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660064/IMG_7666-1024x576_nnbrsh.jpg`,
          }}
        />
        <Paragraph>
          Naxos 的地標，為了紀念阿波羅建造的神殿之門 Portara
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660063/IMG_7657-1024x768_gduhal.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660065/IMG_7675-1024x576_hlfx6w.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660067/IMG_7706-1024x768_kbfmol.jpg`,
          }}
        />
        <Paragraph>看來是小島上的藝術家</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660068/IMG_7707-1024x768_azygpa.jpg`,
          }}
        />
        <Paragraph>夏天的歐洲白天會慢慢拉長</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660071/IMG_7753-1024x768_gafhrx.jpg`,
          }}
        />
        <Paragraph>回去的路上買了一份鬆餅，巧克力香草冰淇淋口味</Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745660072/IMG_7755_qezkij.jpg`}
          text="附上我在 Naxos 走壞的拖鞋，於是一路赤腳走回去，總覺得路上看到我的人眼神都怪怪的是不是心理作用"
        />
      </Section>

      <Section>
        <ImageGallery
          images={[
            {
              url: `${CLOUDINARY_BASE}/v1745750208/IMG_7738-scaled_qukshp.jpg`,
            },
            {
              url: `${CLOUDINARY_BASE}/v1745750199/IMG_7742-scaled_hb3iht.jpg`,
            },
          ]}
        />
        <Paragraph>島上的一些可愛建築</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660070/IMG_7752-1024x768_dfaphi.jpg`,
          }}
        />
        <Paragraph>又到海邊放鬆了，一樣吃我最愛的沙拉 太滿足</Paragraph>
      </Section>

      <Section>
        <SubTitle title="Naxos 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745660069/IMG_7747-1024x768_hoj21p.jpg`,
          }}
        />
        <Paragraph>
          Naxos
          沒有很多觀光客，沒有喧鬧的街道，沒有擁擠的景點，很適合讓自己放鬆到最極限
          <br />
          不輸其他希臘海灘，這裡的海水也很乾淨清澈，一本書耳機戴上，也是一個美好下午
          <br />
          不難感受到這個小島的寧靜與世無爭，如果想要遠離塵囂的話，來這裡就對了，可以安心把自己放在最單純沒煩惱的生活
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoNaxos;
