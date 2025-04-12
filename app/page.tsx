import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="md:px-[22rem] px-6 md:py-[6rem] py-[6rem] relative w-fit">
        <Image
          src="/y1.png"
          alt="y1"
          width={1000}
          height={1000}
          className="relative z-10"
        />
        <Image
          src="/y2.png"
          alt="y2"
          width={900}
          height={900}
          className="absolute md:top-[-120] top-[-50] right-0 z-0"
        />
        <Image
          src="/y3.png"
          alt="y3"
          width={800}
          height={800}
          className="absolute bottom-[-150] left-0 z-0"/>
      </div>
      <Features/>
      <Steps/>
      <About/>
      <Footer/>
    </div>
  );
}
