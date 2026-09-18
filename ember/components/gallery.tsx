import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
    alt: "EMBER dining room",
    className: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85",
    alt: "Restaurant table setting",
    className: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85",
    alt: "Chef preparing food",
    className: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
    alt: "Restaurant dining experience",
    className: "aspect-[16/10]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#e8e0d4] px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#746b61]">
              A glimpse inside
            </p>

            <h2 className="serif-display mt-5 max-w-2xl text-5xl leading-[0.92] tracking-[-0.045em] md:text-7xl">
              Around
              <br />
              the table.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#746b61]">
            From the first spark in the kitchen to the last glass at the table.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-12 md:items-start">
          <GalleryImage image={images[0]} className="md:col-span-5 md:mt-20" />

          <GalleryImage image={images[1]} className="md:col-span-7" />

          <GalleryImage image={images[2]} className="md:col-span-7 md:mt-5" />

          <GalleryImage image={images[3]} className="md:col-span-5 md:mt-16" />
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-black/10 pt-5">
          <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/30">
            EMBER / 04 frames
          </span>

          <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/30">
            Fire · Food · People
          </span>
        </div>
      </div>
    </section>
  );
}

function GalleryImage({
  image,
  className = "",
}: {
  image: (typeof images)[number];
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden bg-[#d8cec0] ${className}`}>
      <div className={`relative ${image.className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/0" />
      </div>
    </div>
  );
}
