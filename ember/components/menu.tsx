"use client";

import { useState } from "react";

const categories = ["Dinner", "Tasting", "Dessert"];

const menus = {
  Dinner: [
    {
      name: "Charred sourdough",
      description: "Cultured butter · smoked sea salt",
      price: "8",
    },
    {
      name: "Ember carrots",
      description: "Burnt honey · labneh · hazelnut",
      price: "14",
    },
    {
      name: "Fire-roasted octopus",
      description: "White bean · preserved lemon · herbs",
      price: "22",
    },
    {
      name: "Coal-grilled chicken",
      description: "Charred greens · ember jus",
      price: "28",
    },
    {
      name: "Wood-fired market fish",
      description: "Seasonal vegetables · herb oil",
      price: "32",
    },
    {
      name: "Smoked chocolate",
      description: "Dark chocolate · sea salt · olive oil",
      price: "12",
    },
  ],

  Tasting: [
    {
      name: "Seven courses",
      description: "A seasonal journey through the kitchen",
      price: "95",
    },
    {
      name: "Fire pairing",
      description: "A curated selection alongside the tasting",
      price: "55",
    },
    {
      name: "Vegetable tasting",
      description: "The same journey, entirely plant-focused",
      price: "82",
    },
    {
      name: "Petit fours",
      description: "Chef's seasonal selection",
      price: "Included",
    },
  ],

  Dessert: [
    {
      name: "Smoked chocolate",
      description: "Dark chocolate · sea salt · olive oil",
      price: "12",
    },
    {
      name: "Grilled peach",
      description: "Brown butter · vanilla · almond",
      price: "11",
    },
    {
      name: "Burnt honey tart",
      description: "Whipped crème fraîche · pollen",
      price: "13",
    },
    {
      name: "Seasonal cheese",
      description: "Three selections · house preserves",
      price: "16",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Dinner");

  const activeMenu = menus[activeCategory as keyof typeof menus];

  return (
    <section
      id="menu"
      className="bg-[#e8e0d4] px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#746b61]">
            From the kitchen
          </p>

          <h2 className="serif-display mt-5 text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
            The menu
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[#746b61]">
            Our menu follows the season. What arrives at the table changes with
            the fire, the produce, and the day.
          </p>
        </div>

        <div className="mt-12 flex justify-center border-b border-black/10">
          <div className="flex gap-7 overflow-x-auto">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative whitespace-nowrap pb-4 text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    active
                      ? "text-[#171513]"
                      : "text-black/35 hover:text-black/70"
                  }`}
                >
                  {category}

                  {active && (
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#171513]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {activeMenu.map((item, index) => (
            <div
              key={`${activeCategory}-${item.name}`}
              className="grid grid-cols-[1fr_auto] gap-6 border-b border-black/10 py-6 md:grid-cols-[48px_1fr_auto] md:items-center"
            >
              <span className="mono hidden text-[9px] text-black/25 md:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="serif-display text-xl tracking-[-0.02em] md:text-2xl">
                  {item.name}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-black/45 md:text-sm">
                  {item.description}
                </p>
              </div>

              <span className="mono text-[11px] text-black/55">
                {item.price === "Included" ? item.price : `$${item.price}`}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="mono text-[9px] uppercase tracking-[0.15em] text-black/30">
            Menu changes with availability
          </p>

          <p className="text-xs text-black/40">
            Prices shown are part of the EMBER concept.
          </p>
        </div>
      </div>
    </section>
  );
}
