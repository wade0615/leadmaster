import { Metadata } from "next";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import BigThreePhotoFrame from "@/components/BigThreePhotoFrame";
import { agentsData } from "@/data/mockData";

export const metadata: Metadata = {
  title: "代理商｜立麥餐飲設備有限公司",
  description: "我們的專業代理商團隊，為您提供最優質的餐飲設備服務",
};

export default function AgentPage() {
  return (
    <Layout>
      <main id="agent" className="relative min-h-screen">
        <Banner
          title="Our Agents"
          description="我們的專業代理商團隊，擁有豐富的餐飲設備規劃經驗，為您提供最優質的服務"
          className="max-w-screen-xl mx-auto px-10 py-20"
        />

        <BigThreePhotoFrame
          images={agentsData}
          className="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24"
        />

        <section className="max-w-screen-xl mx-auto px-8 md:px-20 py-20">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-vollkorn">
              成為我們的代理商
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              如果您對餐飲設備行業有興趣，歡迎加入我們的代理商團隊。我們提供完整的培訓和支援，讓您能夠為客戶提供最專業的服務。
            </p>
            <a
              href="mailto:bryanwu088@gmail.com"
              className="inline-block px-8 py-3 bg-leadmaster-red text-white hover:bg-red-700 transition-colors duration-200 rounded"
            >
              聯絡我們
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
