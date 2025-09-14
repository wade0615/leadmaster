import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface RightJumbotronProps {
  content: Project;
  className?: string;
}

export default function RightJumbotron({
  content,
  className = "",
}: RightJumbotronProps) {
  return (
    <section className={`max-w-screen-xl mx-auto px-8 md:px-20 ${className}`}>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <div className="text-leadmaster-red text-sm font-semibold mb-2">
            {content.category}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-vollkorn">
            {content.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
