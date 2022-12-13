import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Header from "../components/landing/Header";
import Promos from "../components/landing/Promos";
import Top from "../components/landing/Top";

const Home: NextPage = () => {
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
        <Promos />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // const categories = await fetchCategories()
  return {
    props: {},
  };
};
