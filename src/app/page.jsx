import Contact from "@/components/features/contact/contact";
import CTA from "@/components/features/cta/cta";
import Hero from "@/components/features/hero";
import Services from "@/components/features/services";
import { Testimonial } from "@/components/features/testimonial";

export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
    <Testimonial/>
    <CTA/>
    <Contact/>
    </>
  );
}
