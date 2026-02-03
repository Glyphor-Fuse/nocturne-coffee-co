
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Visit = () => {
  return (
    <section id="visit" className="bg-foreground text-background py-24 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">Nocturne.</h3>
            <p className="text-white/60 max-w-xs font-light">
              Elevating the daily ritual into a cinematic experience. 
              <br /><br />
              Est. 2024 — Portland, OR.
            </p>
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="uppercase tracking-widest text-xs text-accent mb-2">Location</h4>
                <p className="text-xl font-serif">1042 NW Industrial Way</p>
                <p className="text-white/60">Portland, OR 97209</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="uppercase tracking-widest text-xs text-accent mb-2">Hours</h4>
                <div className="grid grid-cols-2 gap-x-8 text-white/80">
                  <span>Mon - Fri</span>
                  <span className="text-right">6am - 8pm</span>
                  <span>Sat - Sun</span>
                  <span className="text-right">7am - 9pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
               <h4 className="uppercase tracking-widest text-xs text-accent">Newsletter</h4>
               <p className="text-white/60 text-sm">Join the inner circle for exclusive tasting events.</p>
               <div className="flex border-b border-white/20 pb-2">
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full"
                 />
                 <Button variant="ghost" size="icon" className="hover:bg-transparent text-white">
                   <ArrowRight className="h-4 w-4" />
                 </Button>
               </div>
            </div>
            
            <p className="text-white/20 text-xs mt-12 md:mt-0">
              © 2024 Nocturne Coffee Co. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Visit;
