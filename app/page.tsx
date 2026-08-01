import { About } from "@/view/About";
import { Contact } from "@/view/Contact";
import { CTA } from "@/view/CTA";
import { FeaturedWork } from "@/view/FeaturedWork";
import { Hero } from "@/view/Hero";
import { ServiceArea } from "@/view/ServiceArea";
import { Services } from "@/view/Services";
import { WhoWeServe } from "@/view/WhoWeServe";
import { WhyChooseUs } from "@/view/WhyChooseUs";
import { WorkProcess } from "@/view/WorkProcess";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <div className="seam" />
      <Services />
      <WhyChooseUs />
      <div className="seam" />
      <FeaturedWork />
      <WorkProcess />
      <div className="seam" />
      <WhoWeServe />
      <ServiceArea />
      <CTA />
      <Contact />
    </>
  );
}
