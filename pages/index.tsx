import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Top from "../components/Top";

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
      </main>
    </div>
  );
};

export default Home;
