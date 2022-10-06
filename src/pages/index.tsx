import { NextSeo } from "next-seo";
import { memo } from "react";

const Home = () => {
  return (
    <>
      <NextSeo title="Haikel" />
      <div className=" tracking-wide">
        <div className="container mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-4 pt-10 sm:px-6 md:py-24">
          <h1 className=" mb-1 text-3xl font-bold">Hello, I&#39;m Haikel 🌸</h1>
          <p className="mb-4 leading-relaxed">Frontend Enthusiast</p>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
