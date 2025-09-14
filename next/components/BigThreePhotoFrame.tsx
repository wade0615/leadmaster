import Image from "next/image";

interface Agent {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
}

interface BigThreePhotoFrameProps {
  images: Agent[];
  className?: string;
}

export default function BigThreePhotoFrame({
  images,
  className = "",
}: BigThreePhotoFrameProps) {
  return (
    <section className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((agent) => (
          <div key={agent.id} className="text-center group">
            <div className="relative aspect-square mb-6 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-vollkorn">
              {agent.name}
            </h3>
            <p className="text-leadmaster-red font-semibold mb-3">
              {agent.title}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {agent.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
