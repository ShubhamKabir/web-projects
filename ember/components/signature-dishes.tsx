import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const dishes = [
  {
    number: "01",
    name: "Coal-grilled chicken",
    description: "Fire-kissed chicken, charred greens, and a deep ember jus.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1600&q=85",
    size: "large",
  },
  {
    number: "02",
    name: "Ember carrots",
    description: "Young carrots, burnt honey, whipped labneh, and hazelnut.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    number: "03",
    name: "Wood-fired fish",
    description:
      "Market fish cooked over flame with seasonal herbs and vegetables.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
];

export default function SignatureDishes() {
  return (
    <section className="bg-[#f2ede4] px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#746b61]">
              From the fire
            </p>

            <h2 className="serif-display mt-5 max-w-2xl text-4xl leading-[0.94] tracking-[-0.04em] md:text-6xl">
              A few things
              <br />
              worth arriving hungry for.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#746b61]">
            A glimpse at the dishes that define the EMBER table.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <DishCard dish={dishes[0]} large />

          <div className="grid h-fit gap-3.5 self-start">
            <DishCard dish={dishes[1]} />
            <DishCard dish={dishes[2]} tall />
          </div>
        </div>
      </div>
    </section>
  );
}

function DishCard({
  dish,
  large = false,
  tall = false,
}: {
  dish: (typeof dishes)[number];
  large?: boolean;
  tall?: boolean;
}) {
  return (
    <article className="group relative h-fit overflow-hidden bg-[#d8cec0]">
      <div
        className={`relative ${
          large
            ? "aspect-4/5 lg:aspect-square"
            : tall
              ? "aspect-5/6"
              : "aspect-16/10"
        }`}
      >
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 65vw"
              : "(max-width: 1024px) 100vw, 35vw"
          }
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="mono text-[10px] tracking-[0.16em] text-white/65">
            {dish.number}
          </span>
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6 text-white">
          <div>
            <h3
              className={`serif-display tracking-[-0.03em] ${
                large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
              }`}
            >
              {dish.name}
            </h3>

            <p className="mt-2 max-w-md text-xs leading-5 text-white/65">
              {dish.description}
            </p>
          </div>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/30 transition-colors duration-300 group-hover:bg-white group-hover:text-[#171513]">
            <ArrowUpRight size={15} strokeWidth={1.4} />
          </span>
        </div>
      </div>
    </article>
  );
}
