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
        items={[
          { poster: "/thumbs/1.jpg", src: "/videos/1.mp4", label: "Reels — UGC Ad" },
          { poster: "/thumbs/2.jpg", src: "/videos/2.mp4", label: "Shorts — Tutorial" },
          { poster: "/thumbs/3.jpg", src: "/videos/3.mp4", label: "TikTok — Promo" },
          { poster: "/thumbs/4.jpg", src: "/videos/4.mp4", label: "Reels — Founder Cut" },
          { poster: "/thumbs/5.jpg", src: "/videos/5.mp4", label: "Shorts — Product" },
          { poster: "/thumbs/6.jpg", src: "/videos/6.mp4", label: "TikTok — Story" },
        ]}
      />
      <About />
      <Process/>
      <BeforeAfterWork/>
      <CTA/>
      <Footer/>
    </>
  );
}
