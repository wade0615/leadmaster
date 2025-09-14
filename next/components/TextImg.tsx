import Image from "next/image";

interface TextImgProps {
  img: string;
  title: string;
  description: string;
  className?: string;
}

export default function TextImg({
  img,
  title,
  description,
  className = "",
}: TextImgProps) {
  return (
    <section className={className}>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image src={img} alt={title} fill className="object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-vollkorn">
            {title}
          </h2>
          <div
            className="text-lg leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
}
