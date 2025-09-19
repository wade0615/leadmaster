import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";
import CoverText from "@/components/CoverText";
import Featuretag from "@/components/Featuretag";
import BigThreePhotoFrame from "@/components/BigThreePhotoFrame";
import { homeIntroData, projectsData, agentsData } from "@/data/mockData";

// Import carousel images
import carouselImg1 from "@/public/images/design2.jpeg";
import carouselImg2 from "@/public/images/construction.jpeg";
import carouselImg3 from "@/public/images/design.jpeg";
import carouselImg4 from "@/public/images/construction2.jpeg";

export default function HomePage() {
  const carouselImages = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    carouselImg4,
  ];

  const carouselText = {
    title: "立麥餐飲設備",
    title2: "LEADMASTER KITCHEN",
    subtitle: "最專業的酒店廚房規劃顧問",
  };

  const introContent =
    "我們從事關於大型飯店餐廳廚房設備工程的工程規劃設計及施工<br>專司廚房工程顧問性質，負責規劃-設計-施工廚房內部動線與機器操作";

  const contactContent =
    "我們熱情的接受來自各方的合作邀約與業務洽談，若對於公司業務、團隊經驗、職務招募...等有任何疑問，歡迎來信詢問";

  // Get first 4 projects and 3 agents
  const projects = projectsData.slice(0, 4);
  const agents = agentsData.slice(0, 3);

  return (
    <Layout>
      <main id="home">
        <h1 className="hidden">立麥餐飲設備有限公司 LEADMASTER KITCHEN</h1>

        <Carousel
          images={carouselImages}
          text={carouselText}
          className="mb-24 md:mb-32"
          style={{ height: "calc(100vh - 80px)" }}
        />

        <h2
          className="max-w-screen-xl mx-auto text-2xl md:text-4xl text-center italic tracking-wider py-10 px-8 mb-18 md:mb-24"
          dangerouslySetInnerHTML={{ __html: introContent }}
        />

        {homeIntroData.map((intro, index) => (
          <CoverText
            key={`introData-${index}`}
            right={intro.right}
            // coverImg={intro.img}
            text={intro.text}
            className="mb-10 md:mb-24"
          />
        ))}

        <Featuretag features={projects} className="mb-32 md:mb-52" />

        <BigThreePhotoFrame
          images={agents}
          className="max-w-screen-xl mx-auto px-8 md:px-20 pb-5 mb-24"
        />

        <section className="contact-us max-w-screen-xl mx-auto p-20 text-center">
          <span className="block mx-auto mb-8 max-w-lg md:text-lg">
            {contactContent}
          </span>
          <a
            href="mailto:bryanwu088@gmail.com"
            className="inline-block px-10 py-3 max-w-md border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 rounded"
          >
            Contact Us
          </a>
        </section>
      </main>
    </Layout>
  );
}
