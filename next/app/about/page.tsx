import { Metadata } from "next";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import ImgText from "@/components/ImgText";
import TextImg from "@/components/TextImg";
import Slogan from "@/components/Slogan";
import { aboutData } from "@/data/mockData";

export const metadata: Metadata = {
  title: "關於我們｜立麥餐飲設備有限公司",
  description:
    "我們專注於台灣尖端的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量",
};

export default function AboutPage() {
  const slogans = [
    {
      icon: "mdi-eye",
      text: "精準分析",
    },
    {
      icon: "mdi-lead-pencil",
      text: "事前規劃",
    },
    {
      icon: "mdi-wrench",
      text: "快速安裝",
    },
  ];

  return (
    <Layout>
      <main id="about" className="relative min-h-screen">
        <Banner
          title="About Us"
          description="我們專注於台灣尖端的餐飲規劃設計顧問角色，在台灣的五星級飯店默默耕耘推動著廚房設備運轉的力量"
          className="max-w-screen-xl mx-auto px-10 py-20"
        />

        <ImgText
          img={aboutData.team.img}
          title={aboutData.team.title}
          description={aboutData.team.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />

        <TextImg
          img={aboutData.intro_1.img}
          title={aboutData.intro_1.title}
          description={aboutData.intro_1.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />

        <ImgText
          img={aboutData.intro_2.img}
          title={aboutData.intro_2.title}
          description={aboutData.intro_2.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />

        <Slogan title="How we work" slogans={slogans} />

        <ImgText
          img={aboutData.observe.img}
          title={aboutData.observe.title}
          description={aboutData.observe.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />

        <TextImg
          img={aboutData.design.img}
          title={aboutData.design.title}
          description={aboutData.design.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />

        <ImgText
          img={aboutData.maintenance.img}
          title={aboutData.maintenance.title}
          description={aboutData.maintenance.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />

        <TextImg
          img={aboutData.style.img}
          title={aboutData.style.title}
          description={aboutData.style.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />

        <ImgText
          img={aboutData.ethos.img}
          title={aboutData.ethos.title}
          description={aboutData.ethos.description}
          className="max-w-screen-xl mx-auto p-10 sm:p-20"
        />
      </main>
    </Layout>
  );
}
