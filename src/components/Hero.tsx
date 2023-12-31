import Link from "next/link";
import Email from "./Email";
import Header from "./Header";
import Image from "next/image";
import Herobg from "../../public/images/hero-bg.png";
import HeroDate from "../../public/images/hero-date.png";

export const Hero = (
  { emailCaptured = false }: { emailCaptured: boolean } = {
    emailCaptured: false,
  }
) => {
  const flexData = [
    {
      label: "Date:",
      value: "August 22-25TH",
    },
    {
      label: "Location:",
      value: "Fort Mason, San Francisco",
    },
    {
      label: "Prize:",
      value: "$150k + signed golden state warriors merch",
      link: "#prizes",
    },
  ];

  return (
    <div className="flex h-screen items-start p-6 lg:p-14 relative">
      <div className="w-full h-full inset-0 absolute">
        <Image className="object-cover" src={Herobg} fill={true} alt="" />
      </div>
      <div className="w-full z-50">
        <Header />
        {/* <div className="w-full flex justify-center items-center mt-10">
          <Link href="#prizes">
            <div className="w-max flex justify-center items-center text-center gap-x-3 px-5 py-3 hero-grad border border-[#FFFFFF99]">
              <img className="w-5 h-5 lg:w-5 lg:h-5" src="/hero.svg" alt="" />
              <div className="hero-grad-1 uppercase ibm-500 text-xs lg:text-lg">
                win $150k and signed warriors merch
              </div>
            </div>
          </Link>
        </div> */}
        <div className="w-full h-[55vh] lg:h-[70vh] flex flex-col justify-center items-center">
          {/* <div className="w-80 h-14 mt-20 lg:mt-28">
            <Image src={HeroDate} width={640} height={112} alt="" />
          </div> */}
          <div className="flex flex-col items-center">
            <div className="hero-gradient text-2xl md:text-4xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold mt-14 pb-1 lg:pb-5">
              The Bay Area’s premier
            </div>
            <div className="hero-gradient text-2xl md:text-4xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold">
              sports tech hackathon.
            </div>
          </div>
          {emailCaptured ? (
            <div className="hero-gradient text-lg text-center lg:max-w-4xl lg:text-2xl orbitron font-bold mt-14 pb-1 lg:pb-5">
              Please click on the link we emailed you to confirm your seat
            </div>
          ) : (
            <Email />
          )}
        </div>
        <div className="w-full flex flex-col gap-y-2 lg:flex-row justify-center gap-x-2 text-center mt-6 lg:mt-10">
          {flexData.map((item, index) => (
            <div
              key={index}
              className="text-sm lg:text-base xl:text-lg ibm-500 text-white py-3 lg:px-4 lg:py-3 uppercase bg-[#0000004f] backdrop-blur-sm rounded-lg border border-[#FFFFFF1A]"
            >
              {item.link ? (
                <Link href={item.link}>
                  {item.label}{" "}
                  <span className="ibm-500 text-[#FFC700]">{item.value}</span>
                </Link>
              ) : (
                <>
                  {item.label}{" "}
                  <span className="ibm-500 text-[#FFC700]">{item.value}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
