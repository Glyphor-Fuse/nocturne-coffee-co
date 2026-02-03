import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import SensoryGallery from "@/components/SensoryGallery";
import Visit from "@/components/Visit";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#e0c09e] selection:text-black">
      <Hero />
      <Philosophy />
      <SensoryGallery />
      <Visit />
    </main>
  );
};

export default Index;