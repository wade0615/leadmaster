import { Eye, Pencil, Wrench } from "lucide-react";

interface Slogan {
  icon: string;
  text: string;
}

interface SloganProps {
  title: string;
  slogans: Slogan[];
  className?: string;
}

const iconMap = {
  "mdi-eye": Eye,
  "mdi-lead-pencil": Pencil,
  "mdi-wrench": Wrench,
};

export default function Slogan({
  title,
  slogans,
  className = "",
}: SloganProps) {
  return (
    <section className={`bg-gray-50 py-20 ${className}`}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-vollkorn">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {slogans.map((slogan, index) => {
            const IconComponent =
              iconMap[slogan.icon as keyof typeof iconMap] || Eye;

            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-leadmaster-red text-white rounded-full mb-6">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 font-vollkorn">
                  {slogan.text}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
