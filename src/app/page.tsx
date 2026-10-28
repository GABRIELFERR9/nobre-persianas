import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Products } from "@/components/site/products";
import { GallerySection } from "@/components/site/gallery-section";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsappFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <GallerySection />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
