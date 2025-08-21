// app/page.tsx
import HeroShowcase from "./components/HeroShowcase";
import BeforeAfterWork from "./components/BeforeAfterWork";
import About from "./components/About";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <>
      <HeroShowcase
        images={[
          "/portraits/1.jpg",
          "/portraits/2.jpg",
          "/portraits/3.jpg",
          "/portraits/4.jpg",
          "/portraits/5.jpg",
          "/portraits/6.jpg",
        ]}
      />
      <About />
      <Process />
      <BeforeAfterWork />
      <CTA />
      <Footer />
    </>
  );
}
