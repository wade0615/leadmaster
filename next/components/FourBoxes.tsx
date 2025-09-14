import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface FourBoxesProps {
  title: string;
  boxes: Project[];
  className?: string;
}

export default function FourBoxes({
  title,
  boxes,
  className = "",
}: FourBoxesProps) {
  return (
    <section
      className={`max-w-screen-xl mx-auto px-8 md:px-20 py-20 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-vollkorn">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={box.image}
                alt={box.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-leadmaster-red font-semibold mb-2">
                {box.category}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-vollkorn">
                {box.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {box.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
