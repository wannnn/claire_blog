import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";

const CiaoBahrainVisa = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="巴林簽證教學 🇧🇭 2023 Bahrain evisa" />
      <CreatedDate date={"2023-11-09"} />

      <section className="mb-7 pb-[100px]">{}</section>

      <Section>
        <Paragraph>
          記錄一下巴林簽證的申請過程，自行申辦難易度一顆🌟，而且核發的速度比我預期快超多！
          <br />
          首先進入巴林內政部「國籍、護照與居留事務總局」(NPRA) 網站 ➡️
          <a
            href="https://www.evisa.gov.bh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.evisa.gov.bh
          </a>
          <br />
          選擇 Visa Services – Apply for a Visa
        </Paragraph>
        <Section>
          <MyImage
            image={{
              url: `${CLOUDINARY_BASE}/v1751806356/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%888.16.01_tcglcu.png`,
            }}
          />
        </Section>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751806355/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%889.40.11_jf55zn.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          簽證的種類有落地簽和電子簽證，這邊我們選擇單次觀光簽，停留時間14天 ➡️
          Apply now
          <br />
          根據外交部資訊，落地簽是有條件的，申請人須具備阿拉伯聯合大公國或英、美、沙烏地阿拉伯(不含朝覲簽)、申根區等擇一之有效多次簽證或綠卡
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751806354/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%889.47.49_qrka3x.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          每個藍色的項目都要一一點開，按下 I Accept 才會繼續跳轉至下一頁
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751806848/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%889.49.24_btdry7.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          這邊要注意的是，填寫名字時中間不能有 “-” 連結符號，留空白即可
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751806972/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%8810.02.23_kyjaiu.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>再次確認資料是否有誤</Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807018/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%8810.02.51_gzfpxs.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          接著上傳文件，接受的格式及檔案大小在 Note 中有註明，選擇檔案後按 View
          確認是否上傳成功
          <br />
          👉 護照照片頁
          <br />
          👉 回程機票（離開巴林的機票）
          <br />
          👉 訂房紀錄（如 Booking 的訂房證明）
          <br />
          👉 近三個月交易明細，其最後餘額不能低於 USD 1000（可用網銀明細）
          <br />
          👉 怕不會過我在 Optional 還附上了銀行申請的英文版餘額證明
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807185/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%8810.04.09_pctphd.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          Next 後就進入付款，畫面忘記截圖到，第一次的付款是
          4BHD，我想因該是手續費？成功後畫面如下：
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807267/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%8810.27.34_kcai7e.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          申請流程跑完之後關掉頁面大概十幾分鐘吧，我就收到了第一封 email
          要我點擊連結進行第二次付款，第二次是
          5BHD，付款成功後相隔七分鐘又收到第二封信說我的簽證已通過🎉 超快的！
        </Paragraph>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751807322/%E6%88%AA%E5%9C%96-2023-11-09-%E4%B8%8B%E5%8D%8810.33.01_hzhuks.png`,
          }}
        />
      </Section>

      <Section>
        <Paragraph>
          收到簽證後就可以印下來啦！費用是 9BHD 當下台幣
          769，整體過程相當快且順利，比網站上說的 48 小時快很多
          <br />
          而且最後簽證核發過期日他給我到2024年二月！
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoBahrainVisa;
