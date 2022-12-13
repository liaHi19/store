import { Tab } from "@headlessui/react";
import React from "react";

type PromosProps = {
  categories: ICategory[];
};

const Promos: React.FC<PromosProps> = ({ categories }) => {
  return (
    <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
      <div className="space-y-10 py-16">
        <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
          New Promos
        </h1>
        <Tab.Group>
          <Tab.List className="flex justify-center">
            {categories.map((category) => (
              <Tab
                key={category._id}
                id={category._id}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none transition-all duration-300 md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#35383C] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                {category.title}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Promos;
