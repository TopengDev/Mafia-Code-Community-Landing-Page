import { type NextPage } from "next";
import Head from "next/head";

import { Hero } from "@/components/HomePage/HeroSection";
import TimelineSection from "@/components/HomePage/TimelineSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <TimelineSection />
    </>
  );
};

export default Home;
