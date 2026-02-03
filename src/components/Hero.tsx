
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-shop.png" 
          alt="Nocturne Coffee Shop Interior" 
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
      </div>

      {/* Navigation (Integrated for transparency) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-widest text-foreground uppercase">
            Nocturne
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase text-white/80">
            <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Sensory</a>
            <a href="#visit" className="hover:text-accent transition-colors">Visit</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-center px-4">
        <span className="mb-4 text-xs font-medium tracking-[0.3em] text-accent uppercase animate-fade-in">
          Portland, Oregon
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium text-white tracking-tight mb-8 leading-none mix-blend-overlay opacity-90">
          Curated<br />Darkness
        </h1>
        <p className="max-w-xl text-white/70 font-light text-lg md:text-xl leading-relaxed">
          A sensory coffee experience moving from the clarity of dawn to the mystery of midnight.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
