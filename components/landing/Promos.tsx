import { Tab } from "@headlessui/react";
import React from "react";
import Product from "./Product";

type PromosProps = {
  categories: ICategory[];
  products: IProduct[];
};

const Promos: React.FC<PromosProps> = ({ categories, products }) => {
  const showProduct = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product key={product._id} product={product} />);
  };

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
          <Tab.Panels className="sm: mx-auto max-w-fit pt-10 pb-24 sm:px-4">
            <Tab.Panel className="tabPanel">{showProduct(0)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProduct(1)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProduct(2)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProduct(3)}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Promos;
