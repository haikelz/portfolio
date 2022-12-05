import { NextSeo } from "next-seo";
import { languageAtom, loadingAtom } from "@/store";
import { setIsLoading } from "@/helpers/setIsLoading";
import { useReducerAtom } from "jotai/utils";
import { setLanguage } from "@/helpers/setLanguage";
import { socialMediaList } from "@/utils/data";
import { Underline } from "@/components/atoms/underline";
import { AboutImage } from "@/components/atoms/aboutImage";
import Steps from "@/components/molecules/steps";
import Link from "next/link";

const About = () => {
  const [isLoading, loadingProcess] = useReducerAtom<boolean, unknown>(loadingAtom, setIsLoading);
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  return (
    <>
      <NextSeo title="About" />
      <section className="container mx-auto max-w-5xl object-center px-4 pt-6 sm:px-6 md:pt-24 tracking-wide">
        <div className="mb-10 flex w-full flex-wrap items-center justify-center">
          <div className="mb-1 flex flex-col items-center justify-center lg:mb-0">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-3xl font-bold">About</h1>
              <Underline />
            </div>
            <div className="mt-2 flex flex-col items-center justify-center sm:mt-4">
              <AboutImage isLoading={isLoading} loadingProcess={loadingProcess} />
              {/**
               * Logic:
               * Jika language bernilai true, maka tampilkan bahasa Inggris dulu
               * Jika language bernilai false, maka tampilkan bahasa Indonesia
               */}
              {language ? (
                <p className="about-desc">
                  Hello. I&#39;m Haikel. An ordinary person who interested in Frontend Stuff, User
                  Interface/Experience, Design Systems, and Linux. Feel free to reach me via{" "}
                  {socialMediaList.map((item, index) => (
                    <Link className="link-contact" key={index + 1} href={item.link} passHref>
                      {item.name}
                      {item.name === "Telegram" || item.name === "Facebook"
                        ? ", "
                        : item.name === "Github"
                        ? ", "
                        : ""}
                    </Link>
                  ))}
                  . <span onClick={toggleLanguage}>See in Indonesia.</span>
                </p>
              ) : (
                <p className="about-desc">
                  Halo. Saya Haikel. Seorang biasa yang tertarik dengan hal-hal berbau Frontend,
                  User Interface/Experience, Design Systems, dan Linux. Jangan sungkan untuk
                  terkoneksi dengan saya via{" "}
                  {socialMediaList.map((item, index) => (
                    <Link className="link-contact" key={index + 1} href={item.link} passHref>
                      {item.name}
                      {item.name === "Telegram" || item.name === "Facebook"
                        ? ", "
                        : item.name === "Github"
                        ? ", "
                        : ""}
                    </Link>
                  ))}
                  . <span onClick={toggleLanguage}>Lihat di Bahasa Inggris.</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto object-center py-10 px-4 sm:px-6 md:py-24">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-bold">Journey</h1>
            <Underline />
          </div>
        </div>
        <p className="w-full text-center leading-relaxed">My Experience, and journey</p>
        <Steps />
      </div>
    </>
  );
};

export default About;
