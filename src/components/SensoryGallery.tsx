
import { Speaker, Star, Sun } from 'lucide-react';

const sensoryItems = [
  {
    id: 1,
    title: "The First Pour",
    image: "/images/gallery-pour.png",
    soundtrack: "Miles Davis - Blue in Green",
    atmosphere: "Steam & Silence",
    icon: <CloudFog className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Midday Clarity",
    image: "/images/gallery-beans.png",
    soundtrack: "Khruangbin - White Gloves",
    atmosphere: "Roasted Earth",
    icon: <Sun className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Evening Resin",
    image: "/images/gallery-vinyl.png",
    soundtrack: "Burial - Archangel",
    atmosphere: "Low Light & Vinyl",
    icon: <Disc className="h-5 w-5" />
  }
];

const SensoryGallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-6">
          <div className="max-w-xl">
            <span className="text-accent text-xs tracking-[0.2em] uppercase block mb-2">Signature Feature</span>
            <h2 className="text-4xl md:text-5xl font-serif">Sensory Atmosphere</h2>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-sm text-sm leading-relaxed">
            Hover to reveal the current sonic and visual landscape of our space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {sensoryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[60vh] w-full overflow-hidden bg-secondary cursor-crosshair"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-[0.5]"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-700" />

              {/* Initial State (Title only) */}
              <div className="absolute bottom-8 left-8 z-20 transition-all duration-500 group-hover:bottom-12 group-hover:opacity-0">
                <h3 className="font-serif text-2xl text-white">{item.title}</h3>
              </div>

              {/* Reveal State (Details) */}
              <div className="absolute inset-0 z-30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 text-center backdrop-blur-[2px]">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-accent mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  {item.icon}
                </div>
                <h4 className="text-accent text-xs tracking-[0.2em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-150">Now Playing</h4>
                <p className="text-xl font-serif text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                  {item.soundtrack}
                </p>
                <div className="h-[1px] w-12 bg-white/20 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-250"></div>
                <span className="text-white/80 font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-300">
                  {item.atmosphere}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SensoryGallery;
