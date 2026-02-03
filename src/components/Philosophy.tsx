
import { Button } from "@/components/ui/button";

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
              The Art of <br />
              <span className="text-accent italic">Subtractive</span> Brewing.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                At Nocturne, we believe that perfection is not about what you add, but what you remove. Our roasting process strips away the noise to reveal the resonant frequencies of the bean.
              </p>
              <p>
                Located in the heart of Portland's industrial district, our space is designed as a sanctuary from the grey. A place where time slows down, and the ritual of coffee takes center stage against a backdrop of curated shadow.
              </p>
            </div>
            <div className="pt-4">
              <Button variant="outline" className="border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 rounded-none h-12 px-8 uppercase tracking-widest text-xs">
                Explore The Menu
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 border border-accent/20 z-0 hidden md:block group-hover:border-accent/40 transition-colors duration-500"></div>
            <div className="relative aspect-[3/4] overflow-hidden bg-black z-10">
              <img 
                src="/images/philosophy-barista.png" 
                alt="Barista pouring latte art" 
                className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
