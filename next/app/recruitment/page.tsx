import { Metadata } from "next";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import { Briefcase, Users, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "人才招募｜立麥餐飲設備有限公司",
  description: "加入我們的團隊，一起為客戶提供最專業的餐飲設備規劃與施工服務",
};

export default function RecruitmentPage() {
  const positions = [
    {
      title: "專案經理",
      department: "專案管理部",
      requirements: [
        "具備5年以上餐飲設備或相關行業經驗",
        "熟悉廚房設備規劃與施工流程",
        "具備良好的溝通協調能力",
        "有專案管理證照者優先",
      ],
      icon: Briefcase,
    },
    {
      title: "設計工程師",
      department: "設計部",
      requirements: [
        "機械工程或相關科系畢業",
        "熟悉AutoCAD、SolidWorks等設計軟體",
        "具備廚房設備設計經驗",
        "有創新思維和解決問題能力",
      ],
      icon: Users,
    },
    {
      title: "業務專員",
      department: "業務部",
      requirements: [
        "具備2年以上業務開發經驗",
        "熟悉餐飲行業市場",
        "具備良好的客戶關係維護能力",
        "有相關行業經驗者優先",
      ],
      icon: TrendingUp,
    },
    {
      title: "技術顧問",
      department: "技術部",
      requirements: [
        "具備10年以上廚房設備技術經驗",
        "熟悉各種廚房設備規格與安裝",
        "具備現場指導與培訓能力",
        "有國際認證者優先",
      ],
      icon: Award,
    },
  ];

  return (
    <Layout>
      <main id="recruitment" className="relative min-h-screen">
        <Banner
          title="Recruitment"
          description="加入我們的團隊，一起為客戶提供最專業的餐飲設備規劃與施工服務"
          className="max-w-screen-xl mx-auto px-10 py-20"
        />

        <section className="max-w-screen-xl mx-auto px-8 md:px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-vollkorn">
              職缺資訊
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們正在尋找有熱忱、有經驗的專業人才加入我們的團隊。如果您對餐飲設備行業有興趣，歡迎投遞履歷。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {positions.map((position, index) => {
              const IconComponent = position.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-leadmaster-red text-white rounded-full flex items-center justify-center mr-4">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 font-vollkorn">
                        {position.title}
                      </h3>
                      <p className="text-leadmaster-red font-semibold">
                        {position.department}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      職位要求
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-leadmaster-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-vollkorn">
              加入我們
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              如果您對以上職位有興趣，或想了解更多關於我們公司的資訊，歡迎與我們聯絡。
            </p>
            <div className="space-y-4">
              <a
                href="mailto:bryanwu088@gmail.com"
                className="inline-block px-8 py-3 bg-leadmaster-red text-white hover:bg-red-700 transition-colors duration-200 rounded mr-4"
              >
                投遞履歷
              </a>
              <a
                href="tel:+886-2-1234-5678"
                className="inline-block px-8 py-3 border-2 border-leadmaster-red text-leadmaster-red hover:bg-leadmaster-red hover:text-white transition-colors duration-200 rounded"
              >
                電話諮詢
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
