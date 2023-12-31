import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Judges } from "@/components/Judges";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import Sponsors from "@/components/sponsors";
import Image from "next/image";
import Pattern from "../../../public/images/patern.png";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Hero emailCaptured={true} />
      <div className="relative">
        <div className="bg-[#08151b] w-full h-full absolute -z-10">
          <Image src={Pattern} fill={true} alt="" />
        </div>
        <div className="z-50">
          <Info />
          <Prizes />
          <Video />
          <Judges />
          <Sponsors />
          <Schedule />
          <Footer />
        </div>
      </div>
    </>
  );
}
