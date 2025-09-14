import { Metadata } from "next";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import RightJumbotron from "@/components/RightJumbotron";
import LeftJumbotron from "@/components/LeftJumbotron";
import FourBoxes from "@/components/FourBoxes";
import { projectsData } from "@/data/mockData";

export const metadata: Metadata = {
  title: "我們的客戶｜立麥餐飲設備有限公司",
  description:
    "我們專司於整合整體餐飲空間在Haccp與各國際連鎖飯店的需求上，包含酒水吧檯,日本料理,西餐廚房,豪宅型精緻廚具,五星級飯店開放式廚房,大型宴會廳的餐飲規劃",
};

export default function ProjectsPage() {
  const projects = projectsData.slice(0, 4);
  const moreProjects = projectsData.slice(4);

  return (
    <Layout>
      <main id="projects" className="relative min-h-screen">
        <Banner
          title="Our Projects"
          description="我們專司於整合整體餐飲空間在Haccp與各國際連鎖飯店的需求上，包含 酒水吧檯,日本料理,西餐廚房,豪宅型精緻廚具,五星級飯店開放式廚房,大型宴會廳 的餐飲規劃 <br/><br/> The Taipei Marriott Hotel, 君悅 HAYTT 飯店, 福容飯店, 國賓飯店, 西華飯店, W hotel ......等國際五星級飯店，都是我們服務配合的客戶企業！"
          className="max-w-screen-xl mx-auto px-10 py-20"
        />

        {projects.map((project, index) => (
          <section key={project.id}>
            {index % 2 === 0 ? (
              <RightJumbotron content={project} className="mb-28" />
            ) : (
              <LeftJumbotron content={project} className="mb-28" />
            )}
          </section>
        ))}

        <FourBoxes title="More Projects" boxes={moreProjects} />
      </main>
    </Layout>
  );
}
