import CreatedDate from "@root/components/typography/LastUpdate";
import MyImage from "@root/components/typography/MyImage";
import Paragraph from "@root/components/typography/Paragraph";
import Section from "@root/components/typography/Section";
import SubTitle from "@root/components/typography/SubTitle";
import Title from "@root/components/typography/Title";
import { CLOUDINARY_BASE } from "@root/constants/cloudinary";

const CiaoNepalBudget = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-6">
      <Title title="尼泊爾19天花費紀錄 + 健行裝備清單" />
      <CreatedDate date={"2024-05-14"} />

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794172/IMG_6610-scaled_kb1i92.jpg`,
          }}
        />
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794169/IMG_4982_kcaj6i.jpg`,
          }}
        />
        <Paragraph>
          尼泊爾一直都在我的旅遊名單內，趁著失業這段空擋，規劃了19天的旅行，包含藍塘谷健行
          <br />
          會選擇藍塘國家公園是因為我們平常沒有爬高山的經驗，熱門的聖母峰基地
          5364M 有點冒險
          <br />
          而藍塘的行程和健行公司討論下來我認為進可攻退可守，我們最後會住在 3880M
          的村莊，隔天的一日攻頂有兩條路線選擇：分別是 Kyanjin Ri (Lower)
          4300M、(Higher) 4773 和 Tserko Ri
          4984M，可以前一天和嚮導討論，視情況體力做選擇，我覺得很有彈性
          <br />
          除此之外藍塘風景也不輸其他地方，我們在四五月份花季去非常美麗，台灣人比較喜歡去
          EBC、ABC（甚至有些人不知道藍塘），因此搜尋英文更容易找到完整資訊
        </Paragraph>
      </Section>

      {/* 費用總整理 */}
      <Section>
        <SubTitle title="費用總整理" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794168/budget_cdabhj.jpg`,
          }}
        />
        <Paragraph>
          直接上此次花費的分配圖，總共約台幣 79111 /
          一人，不包含行前的裝備添購及藥品、日用品準備等等，以下是每個部分簡單說明：
        </Paragraph>

        <Paragraph>
          <strong>藍塘健行 (9 days)</strong>
          <br />
          含所有 tea house 吃住、國家公園門票及嚮導和 Porter 小費
        </Paragraph>

        <Paragraph>
          <strong>住宿</strong>
          <br />
          皆住 2、3 星 hotel
          <br />
          加德滿都：Khangsar Home、Nepal Pavilion Inn
          <br />
          博卡拉：Peace Eye Guest House & Lounge Cafe
          <br />
          奇旺：Hotel Tree Tops
        </Paragraph>

        <Paragraph>
          <strong>吃吃喝喝</strong>
          <br />
          很常吃餐廳，因為環境比較乾淨
        </Paragraph>

        <Paragraph>
          <strong>交通</strong>
          <br />
          ✈️ 含來回機票 (Thai Airways)
          <br />
          🚌 請旅行社代訂 加德滿都 – 博卡拉機票 / 博卡拉 – 奇旺 tourist bus /
          奇旺 – 加德滿都 tourist
          bus（結果遇到博卡拉因天氣關係能見度不佳機場關閉，改為搭乘私人車子前往，旅行社退回
          4000 NPR）
          <br />
          🚗 所有計程車費用，加德滿都使用 Pathao，博卡拉使用
          inDrive。若可以建議辦一張當地 sim 卡，用尼泊爾號碼註冊叫車
          APP，會比自己和司機喊價省事，價錢也公正合理，怕塞車的話還可以叫摩托車，一邊體驗尼泊爾亂中有序的交通，一方面也比較不會被路況影響
        </Paragraph>

        <Paragraph>
          <strong>門票</strong>
          <br />
          各大景點門票（Buddha Stupa、Swayambhunath、Bhaktapur 等等…）
        </Paragraph>

        <Paragraph>
          <strong>保險</strong>
          <br />
          國泰旅平＋不便險、World Nomads 登山保險
        </Paragraph>

        <Paragraph>
          <strong>其他</strong>
          <br />
          紀念品、按摩等
        </Paragraph>
      </Section>

      {/* 裝備清單 */}
      <Section>
        <SubTitle title="裝備清單" />
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794168/IMG_4618_yfnkis.jpg`,
          }}
        />

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-bold w-1/2 text-gray-800">
                  Item
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold w-1/2 text-gray-800">
                  QTY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  上衣
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  底層（薄羊毛）
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  2
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  底層（刷毛）
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  短袖上衣
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  2
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  外套
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  化纖
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  風雨衣
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  中層（行進穿）
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  防曬外套
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  下著
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  登山褲/壓力褲
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  3
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  瑜珈褲
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  4
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  保暖長褲
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  雨褲
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  內衣褲/襪
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  運動內衣 / bra top
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  5
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  內褲
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  5
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  羊毛襪
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  3
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  一般棉質襪
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  4
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  鞋
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  登山鞋
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  拖鞋
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  其他配件
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  手套
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  毛帽
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  圓盤遮陽帽
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  眼鏡
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  太陽眼鏡
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  脖圍
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  頭燈
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  裝備
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  隨身小包
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  攻頂包
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  睡袋內套
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  水壺
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  杯子
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  折疊傘
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  衣架
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  3
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  衛生 / 清潔用品
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  面紙
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  好幾包
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  濕紙巾
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  2
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  衛生棉
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1包
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  隱形眼鏡
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  隱形眼鏡保養液
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  洗面乳
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  卸妝乳
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  旅行組
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  牙膏
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  牙刷
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  牙線
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  牙套
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  毛巾
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  日用 / 保養品
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  旅行吹風機
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  口罩
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  好幾片
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  髮飾
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  2
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  凡士林 / 護唇膏
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  保濕乳液（臉）
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  身體乳液
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  防蚊液
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  蘆薈凝膠
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  面膜
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  3
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  藥品
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  腸胃藥 / 水土不服
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  綜合感冒藥
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  丹木斯
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  好幾顆
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  暈車藥
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  好幾顆
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  OK蹦
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  小護士
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  彩妝
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  防曬乳 (臉/身體)
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  眉筆
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  口紅
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  3C
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  相機
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  相機電池
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  2
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  手機 / 相機充電線
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  2
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  行動電源
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  轉接頭
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  行動糧
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  鹽糖
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  好多顆
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  餅乾糧食
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  好多包
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  維他命C
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-teal-50 text-gray-800">
                  文件
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  護照
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  機票影本
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  證件照
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  4
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  入境資料卡（網路預填印出）
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  保險紀錄
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  家裡鑰匙
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794172/IMG_4602_puvzh6.jpg`,
          }}
        />
        <Paragraph>
          該帶的東西真的是落落長 &gt;&lt;，打包完總重約 10
          公斤，還好我們最終決定要雇用挑夫，才能在爬的過程中輕鬆一點
          <br />
          不過我們出發前有先將部分上山不必要的東西 寄放在健行公司辦公室！
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794170/IMG_4785-2_cqhfca.jpg`,
          }}
        />
        <Paragraph>
          關於裝備，登山杖、睡袋、down jacket
          都是向健行旅行社借的，除此之外他們還附贈：一個水壺、淨水錠、鴨舌帽、行李袋，健行完還有證書可以拿
          😂，非常貼心
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794171/IMG_4883_u1ctyn.jpg`,
          }}
        />
        <Paragraph>
          其實我最後是放棄帶拖鞋的，覺得好大塞不下去，非常後悔
          <br />
          沒有拖鞋在山上實在不方便，穿登山鞋走整天了，到 tea house
          的時候真的需要釋放一下，去廁所也是需要拖鞋
          <br />
          嚮導人很好，知道我們沒有帶，到山屋的時候都會去幫我借
          <br />
          回到加德滿都立馬去買一雙夾腳拖（品質不好又刮腳，走太久會磨破皮）
          <br />
          事後回想鞋子可以外掛在包包上任何地方啊
          也不需要裝裡面，當初真的不知道為啥腦袋沒想到，我都買掛鉤了
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794170/IMG_4685_fgrzky.jpg`,
          }}
        />
        <Paragraph>
          最後，我覺得小掛勾蠻實用的，如果不是帶水袋的話，可以把水壺掛在背包上，除此之外也可以外接任何東西
          <br />
          ikea 摺疊衣架也可以到山屋時將衣物或毛巾掛起來
          <br />
          旅行吹風機我覺得{" "}
          <a
            href="https://shop.pingo.com.tw/SalePage/Index/9330221"
            className="text-blue-600 hover:underline"
          >
            PINGO
          </a>{" "}
          這個小小的很好用！非常輕巧，還支援雙電壓
          <br />
          衛生紙、面紙建議多帶，不然就只能一直索取山屋的衛生紙了，山上人家資源有限，不要浪費
          <br />
          我自己的經驗是一直流鼻涕（我的脖圍幫我接住好多鼻涕）鼻屎好多，天氣太乾也會流鼻血，凡士林也是要帶，對抗乾燥
        </Paragraph>
      </Section>

      <Section>
        <MyImage
          image={{
            url: `${CLOUDINARY_BASE}/v1751794169/IMG_4824_et0ss2.jpg`,
          }}
        />
        <Paragraph>
          剛開始健行的前兩三天都水土不服，每天早上都烙賽，好險腸胃藥救了我，才能繼續走
          不會一直找廁所😅
          <br />
          丹木斯我們也是有按時吃，一天兩次，一次半顆的劑量，開始下山停止服用，很幸運身體都沒異狀
          <br />
          睡袋內套純粹是個人衛生，有沒有需要再多套一層隔離而已，使用下來的感受是有點多餘，好束縛，而且半夜我都會被睡袋熱醒哈哈哈
          <br />
          頭燈用不太到，為了去 Tserko Ri 那天早上五點出發準備的，結果天也亮了
          <br />
          不知不覺就打了那麼多，算是有好好紀錄這次的尼泊爾旅行，未來再回頭看也都是美好的回憶
        </Paragraph>
      </Section>
    </div>
  </div>
);

export default CiaoNepalBudget;
