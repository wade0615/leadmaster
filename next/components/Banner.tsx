interface BannerProps {
  title: string;
  description: string;
  className?: string;
}

export default function Banner({
  title,
  description,
  className = "",
}: BannerProps) {
  return (
    <section className={`text-center ${className}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-vollkorn">
        {title}
      </h1>
      <div
        className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
}
