import CreatedDate from "@root/components/typography/LastUpdate";
import ImageTextRow from "@root/components/typography/ImageTextRow";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Preface from "@root/components/typography/Preface";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";
import MyDate from "@root/components/typography/MyDate";

const CiaoHydra = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="希臘一日跳島說走就走 - 伊茲拉島(Hydra)" />
      <CreatedDate date={"2021-02-12"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754011/IMG_6211-scaled_vkga1g.jpg`,
          }}
        />
      </Section>

      <MyDate date={"June 15 2018"} />

      <Section>
        <Preface>
          在雅典安排的四天裡，其中一天來個單日來回島嶼行程，沒在網路上訂票，是前一天直接到港口附近船公司買票，順便秀一下國際學生證還有優惠，真心覺得希臘對學生很友善
        </Preface>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753992/IMG_6080-1024x768_ngarxn.jpg`,
          }}
        />
        <Paragraph>地鐵1號線終點站 Piraeus</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753990/IMG_6082-1024x576_x6kt8d.jpg`,
          }}
        />
        <Paragraph>
          愉悅的心情來到港口，搭配蔚藍的天空和海，每次的出發都令人感到興奮期待
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753990/IMG_6185-1024x768_cpitlf.jpg`,
          }}
        />
        <Paragraph>在搭船的時候看到海面上的彩虹，沿途會經過其他小島</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753992/IMG_6206-1024x768_fzks1y.jpg`,
          }}
        />
        <Paragraph>
          一下船看到的景色，第一印象感覺淳樸，島民努力生活，遊客數不多
          很舒服的氛圍
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754005/IMG_6377-1024x768_yn95jo.jpg`,
          }}
        />
        <Paragraph>驢子是島上唯一交通工具</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753993/IMG_6214-1024x768_jxqjjy.jpg`,
          }}
        />
        <Paragraph>沒爬太多文找很多資訊，就決定當作一日亂晃的冒險</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753995/IMG_6231-1024x768_c633dq.jpg`,
          }}
        />
        <Paragraph>
          到哪都喜歡觀察建築的我，雖然在羅馬的時候選擇建築系交換但課實在太艱深😂
          有聽沒有懂，但興趣依舊不減
          <br />
          這裡幾乎以白色房子為主，搭配橘紅磚瓦屋頂，偶爾會看到其他顏色參雜的屋子，應該是屋主自己漆的
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754001/IMG_6250-1024x768_zjfhz0.jpg`,
          }}
        />
        <Paragraph>
          島上一定的距離就會點綴著粉紅色的花，我好喜歡被花簇擁的感覺，感覺很有活力、很浪漫
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753997/IMG_6255-1024x768_zphb9i.jpg`,
          }}
        />
        <Paragraph>
          剛轉過來嚇我一跳，兩隻驢在這邊休息，但後腳還在踢來踢去，還好有被綁住
        </Paragraph>
      </Section>

      <Section>
        <ImageTextRow
          imageUrl={`${CLOUDINARY_BASE}/v1745755664/IMG_6471_mbfcec.jpg`}
          text="上坡的這段路上幾乎只有我一個人，偶爾才和人和載物的驢子擦身而過"
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754013/IMG_6305-1024x768_fzhhp6.jpg`,
          }}
        />
        <Paragraph>
          很好奇這小山頂有沒有路上去，我現在所在之處拍照的位置已經是一定的高度了，一路邊拍照邊爬上去，然後到了一條死路無法再往前
          <br />
          從這個高度看右下角是剛剛搭船來的港口，左邊是一望無際的海，晚點我會繞過左邊那個角，繞到後面看有什麼
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753999/IMG_6366-1024x768_t1k3hb.jpg`,
          }}
        />
        <Paragraph>
          最美的畫面莫過於兩個人相依走在渡假海島上，浪漫的像幅畫
          <br />
          不禁幻想我退休也要這樣！不過還想太早了，連工作都還沒開始工作勒
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754008/IMG_6353-1024x768_qjekpd.jpg`,
          }}
        />
        <Paragraph>
          晶瑩剔透的海水，清澈的可以看見底下石頭，淺色與深色的界線明顯，兩種藍都深深讓人著迷啊！
          <br />
          來到希臘後讓人打從心底對藍色更加喜愛，一個讓藍色發揮得淋漓盡致的國家！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753998/IMG_6346-1024x768_mfbl0q.jpg`,
          }}
        />
        <Paragraph>
          一個牽驢老爺爺經過，本來我在拍他經過的畫面，他過來很熱情地說可以讓我牽著驢子拍張照
          <br />
          當下還擔心他會不會拿了手機就跑，沒辦法嘛在歐洲24小時運轉的防衛心哈哈哈
          <br />
          但我還是把手機交給了他，可能在這樣的小島上確實有比較安心些
          <br />
          爺爺拍完給我發現因為他手抖每張都糊掉，不知道為什麼我卻莫名感動
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753996/IMG_6215-1024x768_arcebb.jpg`,
          }}
        />
        <Paragraph>
          正中午在島上走趴趴走，下午就沒電了，而且天氣很熱，來找間店坐著休息吃東西放空一下
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754011/IMG_6459-1024x768_nbwfq7.jpg`,
          }}
        />
        <Paragraph>
          在旅費有限的情況下沒辦法說吃餐廳還是太好，比較常的飲食就是像這樣
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754009/IMG_6462-1024x576_lhzmni.jpg`,
          }}
        />
        <Paragraph>
          看到一艘土耳其過來的船，不曉得用途是什麼，不過黑色的船身覺的充滿神秘感
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753994/IMG_6213-1024x768_rodvzj.jpg`,
          }}
        />
        <Paragraph>回到港口附近，要準備另外一邊的冒險了</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754004/IMG_6380-1024x768_s8aas7.jpg`,
          }}
        />
        <Paragraph>
          紀念品店賣很多驢子的鈴鐺，跟在瑞士山上的牛鈴鐺好像
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754000/IMG_6394-1024x768_sl0y94.jpg`,
          }}
        />
        <Paragraph>
          這邊離大海好近，繼續走我也不知道會到哪，看 google map
          還有很長的一段路，我應該是不會走完
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754002/IMG_6408-1024x768_xpjqek.jpg`,
          }}
        />
        <Paragraph>
          看起來好像沒有盡頭，為自己展開一場冒險的心情既緊張又興奮，一路唱唱跳跳
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754007/IMG_6392-1024x768_txldgh.jpg`,
          }}
        />
        <Paragraph>看不懂是什麼，我猜大概是請勿跳水還是水深危險</Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{ url: `${CLOUDINARY_BASE}/v1745754015/IMG_6400_ehrt5c.jpg` }}
        />
        <Paragraph>
          有看到人開船經過，其實這條路上風好大，而且是突然的那種，好幾次快覺得被吹落
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754004/IMG_6406-1024x576_il6k9k.jpg`,
          }}
        />
        <Paragraph>
          路上僅看到一家民宅，遇到兩個人，其餘都是我與大海的獨處
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754006/IMG_6411-1024x768_tqiadk.jpg`,
          }}
        />
        <Paragraph>
          只有我一個一直走到最後也沒什麼意思，也沒打算走到盡頭，雖然好像過度幻想了，但景色的部分還是令人讚嘆
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745754014/IMG_6475-1024x768_w3remi.jpg`,
          }}
        />
        <Paragraph>
          搭船回雅典後經路過上酒吧，球賽已經如火如荼展開，在世足期間會很常看到這樣的畫面，超難得也很興奮
        </Paragraph>
      </Section>

      <Section>
        <SubTitle title="Hydra 對我來說..." />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1745753991/IMG_0616-1024x768_fizlrp.jpg`,
          }}
        />
        <Paragraph>
          這趟旅行難得有時間和自己獨處、對話，聆聽自己內心的聲音，正視自己潛在的徬徨不安，雖然說為期兩個月的旅程才剛開始，但還是會不經意閃過到時候結束回台灣面對一切會怎樣，無法想像，反而更專注在當下，用心感受眼前的一切，因為此時此刻過了就不會再倒回
          <br />
          在與內心糾結的同時來到 Hydra，
          正好是我覺得很適合調劑身心的小島，小巧可愛，風景優美，說是來這裡學習怎麼過生活都不為過
          <br />
          有足夠時間的話覺得住上一天感覺會很棒，這裡的慵懶慢步調很適合放鬆，剔透的海水隨時可以跳下去游泳，島上景色更不用說不愧是人稱的藝術家之島
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoHydra;
