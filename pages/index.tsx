import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Header from "../components/landing/Header";
import Promos from "../components/landing/Promos";
import Top from "../components/landing/Top";
import { fetchCategories } from "../helpers/fetchCategories";
import { fetchProducts } from "../helpers/fetchProducts";

type HomeProps = {
  categories: ICategory[];
  products: IProduct[];
};

const Home: NextPage<HomeProps> = ({ categories, products }) => {
  return (
    <div>
      <Head>
        <title>Store App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="relative h-[200vh] bg-[#e7ecee]">
          <Top />
        </div>
        <Promos categories={categories} products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  return {
    props: { categories, products },
  };
};
