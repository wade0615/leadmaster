import Image from "next/image";

interface CoverTextProps {
  right?: boolean;
  // coverImg: any;
  text: string;
  className?: string;
}

export default function CoverText({
  right = false,
  // coverImg,
  text,
  className = "",
}: CoverTextProps) {
  return (
    <section className={`max-w-screen-xl mx-auto px-8 md:px-20 ${className}`}>
      <div
        className={`flex flex-col ${
          right ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-8 lg:gap-16`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          {/* <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            {coverImg && (
              <Image
                src={coverImg}
                alt="Cover image"
                fill
                className="object-cover"
              />
            )}
          </div> */}
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <div
            className="text-lg leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </section>
  );
}
