import Image from "next/image";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface FeaturetagProps {
  features: Feature[];
  className?: string;
}

export default function Featuretag({
  features,
  className = "",
}: FeaturetagProps) {
  return (
    <section className={`max-w-screen-xl mx-auto px-8 md:px-20 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-leadmaster-red font-semibold mb-2">
                {feature.category}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-vollkorn">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
